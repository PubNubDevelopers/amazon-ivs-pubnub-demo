'use client'

import { useState, useEffect, useRef } from 'react'
import GuideOverlay from '../components/guideOverlay'
import {
  dataControlOccupancyChannelId,
  serverVideoControlChannelId,
  streamReactionsChannelId,
  alternativeLanguage
} from '../data/constants'
import { subscribersOnlyTranslations, onlineTranslations, chatChannelNamesTranslations } from '../data/translations'
import {
  Chat,
  User,
  Channel,
  Message,
  MixedTextTypedElement
} from '@pubnub/chat'
import ChatMessage from './components/ChatMessage'
import MessageInput from './components/MessageInput'

interface ChatWidgetProps {
  className: string
  isMobilePreview: boolean
  chat: Chat
  isGuidedDemo: boolean,
  guidesShown: boolean
  visibleGuide: string
  setVisibleGuide: (guide: string) => void
  userMentioned: (messageText: string) => void
  isEnglish?: boolean
}

export interface Restriction {
  ban: boolean
  mute: boolean
  reason: string | number | boolean | undefined
}

export default function ChatWidget ({
  className,
  isMobilePreview,
  chat,
  isGuidedDemo,
  guidesShown,
  visibleGuide,
  setVisibleGuide,
  userMentioned,
  isEnglish = true
}: ChatWidgetProps) {
  // Channel state
  const [activeChannelId, setActiveChannelId] = useState<string | null>(null)
  const [activeChannel, setActiveChannel] = useState<Channel | null>(null)
  const [publicChannels, setPublicChannels] = useState<Channel[]>([])

  // Message state
  const [messages, setMessages] = useState<Message[]>([])
  const [messageInput, setMessageInput] = useState('')

  // UI state
  const [showChannelCreate, setShowChannelCreate] = useState(false)
  const [channelName, setChannelName] = useState('')
  const [channelType, setChannelType] = useState('public')
  const [showMentions, setShowMentions] = useState(false)
  const [showReactions, setShowReactions] = useState(false)
  const [availableUsers, setAvailableUsers] = useState<User[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])
  const [whoIsPresent, setWhoIsPresent] = useState<string[]>([])
  const [realOccupancy, setRealOccupancy] = useState(0)
  const [simulatedOccupancy, setSimulatedOccupancy] = useState(0)
  const [activeChannelRestrictions, setActiveChannelRestrictions] =
    useState<Restriction | null>(null)
  const [subscribersOnly, setSubscribersOnly] = useState(false)
  const [showStickerPicker, setShowStickerPicker] = useState(false)

  // Pinned message state
  const [pinnedMessage, setPinnedMessage] = useState<Message | null>(null)
  const [isPinning, setIsPinning] = useState(false)

  // Spam popup state
  const [showSpamPopup, setShowSpamPopup] = useState(false)

  // Image moderation popup state
  const [showImageModerationPopup, setShowImageModerationPopup] = useState(false)

  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const activeChannelIdRef = useRef<string | null>(null)

  // Function to show spam popup with auto-hide
  const showSpamNotification = () => {
    setShowSpamPopup(true)
    setTimeout(() => {
      setShowSpamPopup(false)
    }, 3000)
  }

  // Function to show image moderation popup with auto-hide
  const showImageModerationNotification = () => {
    setShowImageModerationPopup(true)
    setTimeout(() => {
      setShowImageModerationPopup(false)
    }, 3000)
  }

  /**
   * Initialize chat channels when chat is available
   */
  useEffect(() => {
    if (!chat) return

    // Fetch all channels and users
    fetchChannels()
    fetchUsers()

    // Set the appropriate channel as active based on subscribersOnly state
    if (!activeChannelId && publicChannels.length > 0) {
      const defaultChannelId = publicChannels.length >= 2 && subscribersOnly 
        ? publicChannels[1].id 
        : publicChannels[0].id
      setActiveChannelId(defaultChannelId)
    }

    const renderMessagePartMention = (
      messagePart: MixedTextTypedElement,
      index: number
    ) => {
      if (messagePart.type === 'mention') {
        return messagePart.content.name
      }
      if (messagePart.type === 'text') {
        return messagePart.content.text
      }
      return ''
    }

    const removeMentionsListener = chat.listenForEvents({
      user: chat.currentUser.id,
      type: 'mention',
      callback: async evt => {
        const channel = await chat.getChannel(evt.payload.channel)
        const message = await channel?.getMessage(evt.payload.messageTimetoken)
        userMentioned(
          `${message
            ?.getMessageElements()
            .map(renderMessagePartMention)
            .join('')}`
        )
      }
    })

    return () => {
      removeMentionsListener()
    }
  }, [chat])

  useEffect(() => {
    if (!chat || !activeChannel) return
    updateActiveChannelRestrictions()
    const removeModerationListener = chat.listenForEvents({
      channel: `PUBNUB_INTERNAL_MODERATION.${chat.currentUser.id}`,
      type: 'moderation',
      callback: async evt => {
        updateActiveChannelRestrictions()
      }
    })

    return () => {
      removeModerationListener()
    }
  }, [chat, activeChannel])

  /**
   * Switch channels when subscribersOnly state changes
   */
  useEffect(() => {
    if (!chat || publicChannels.length < 2) return
    
    // Switch to appropriate channel based on subscribersOnly state
    const targetChannelId = subscribersOnly 
      ? publicChannels[1]?.id  // Subscriber chat
      : publicChannels[0]?.id  // Public chat
    
    if (targetChannelId && targetChannelId !== activeChannelId) {
      // Clear messages immediately when switching to prevent confusion
      setMessages([])
      setPinnedMessage(null)
      setActiveChannelId(targetChannelId) // This will trigger setupActiveChannel() which sets activeChannel
    }
  }, [subscribersOnly, publicChannels, chat, activeChannelId])

  useEffect(() => {
    if (simulatedOccupancy > 20) {
      const interval = setInterval(() => {
        const randomPercentage = (Math.random() * 0.2 - 0.1); // Random value between -0.1 and +0.1
        setSimulatedOccupancy(prev => Math.max(0, Math.round(prev * (1 + randomPercentage))));
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [simulatedOccupancy]);

  function updateActiveChannelRestrictions () {
    //  Update the restrictions of the currently active channel whenever that changes
    if (!activeChannel || !chat) return
    activeChannel.getUserRestrictions(chat.currentUser).then(restrictions => {
      const tempRestrictions: Restriction = {
        ban: restrictions.ban,
        mute: restrictions.mute,
        reason: restrictions.reason
      }
      setActiveChannelRestrictions(tempRestrictions)
    })
  }

  /**
   * When active channel ID changes, set up the active channel
   */
  useEffect(() => {
    if (!chat || !activeChannelId) return
    
    // Update the ref to the current active channel ID
    activeChannelIdRef.current = activeChannelId
    
    let cleanupFn: (() => void) | null = null
    
    const initializeChannel = async () => {
      const result = await setupActiveChannel()
      cleanupFn = result || null
    }
    
    initializeChannel()
    
    return () => {
      if (cleanupFn && typeof cleanupFn === 'function') {
        cleanupFn()
      }
    }
  }, [activeChannelId, chat])

  /**
   * Set up channel.streamUpdates() listener when activeChannel changes
   */
  useEffect(() => {
    if (!activeChannel) return

    let removeChannelStreamListener = () => {}

    try {
      removeChannelStreamListener = activeChannel.streamUpdates(async (channelUpdate) => {
        // Check if pinned message changed using the channelUpdate.custom approach
        if (channelUpdate.custom) {
          const pinnedMessageTimetoken = channelUpdate.custom.pinnedMessageTimetoken
          if (!pinnedMessageTimetoken) {
            // Message was unpinned
            setPinnedMessage(null)
          } else {
            // Message was pinned, get the message using the timetoken
            try {
              const message = await channelUpdate.getMessage(String(pinnedMessageTimetoken))
              setPinnedMessage(message)
            } catch (error) {
              console.error('Error getting pinned message from timetoken:', error)
              setPinnedMessage(null)
            }
          }
        } else {
          // No custom object, set pinned message to null
          setPinnedMessage(null)
        }
      })
    } catch (error) {
      console.error('Error setting up channel.streamUpdates():', error)
    }

    // Cleanup function
    return () => {
      if (typeof removeChannelStreamListener === 'function') {
        removeChannelStreamListener()
      }
    }
  }, [activeChannel])

  /**
   * Scroll to bottom of messages when messages change
   */

  useEffect(() => {
    if (messages.length > 0) {
      const lastMessageUser = messages[messages.length - 1].userId
      if (lastMessageUser.startsWith('user-')) {
        try {
          // Only call streamUpdatesOn for real Chat SDK Message objects
          const realMessages = messages.filter(m => !m.meta?.isTranslation)
          if (realMessages.length > 0) {
            Message.streamUpdatesOn(realMessages, (updatedMessages) => {
              setMessages(prevMessages => {
                // Merge real messages with translation messages
                const translationMessages = prevMessages.filter(m => m.meta?.isTranslation)
                const allMessages = [...updatedMessages, ...translationMessages]
                return allMessages.sort((a, b) => parseInt(a.timetoken) - parseInt(b.timetoken)).slice(-40)
              })
            })
          }
        } catch (error) {
          console.error('Error setting up message stream updates:', error)
        }
      }
    }

    scrollToBottom()
  }, [messages])

  /**
   * Fetches all available channels and organizes them by type
   */
  const fetchChannels = async () => {
    if (!chat) return

    try {
      // Get all channels from PubNub Chat SDK
      const result = await chat.getChannels()
      const channels = result.channels || []

      // Sort channels by type
      const publicChan: Channel[] = []

      for (const channel of channels) {
        if (!channel) continue

        // Add channel to appropriate array based on type
        if (channel.type === 'public') {
          publicChan.push(channel)
        }
      }

      setPublicChannels(publicChan)

      // Set default active channel if none selected, considering subscribersOnly state
      if (!activeChannelId) {
        if (publicChan.length >= 2) {
          const defaultChannelId = subscribersOnly ? publicChan[1].id : publicChan[0].id
          setActiveChannelId(defaultChannelId)
        } else if (publicChan.length > 0) {
          setActiveChannelId(publicChan[0].id)
        }
      }
    } catch (error) {
      console.error('Error fetching channels:', error)
    }
  }

  /**
   * Fetches all available users for inviting to channels
   */
  const fetchUsers = async () => {
    if (!chat) return

    try {
      const result = await chat.getUsers()
      const users = result.users || []
      setAvailableUsers(users.filter(user => user.id !== chat.currentUser.id))
      setUsers(users)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  /**
   * Sets up the active channel and its message listeners
   */
  const setupActiveChannel = async () => {
    if (!chat || !activeChannelId) return

    // Clear existing messages and typing users before setting up new channel
    setMessages([])

    try {
      // Fetch the selected channel using PubNub Chat SDK
      const channel = await chat.getChannel(activeChannelId)

      if (!channel) {
        console.error(`Channel ${activeChannelId} not found`)
        return
      }

      setActiveChannel(channel)
      //setWhoIsPresent(await chat.whoIsPresent(activeChannelId));

      // Get channel history
      
      try {
        const history = await channel.getHistory()
        let allMessages = history.messages || []

        // Also fetch translation history
        try {
          const translationChannelName = activeChannelId + '-translations'
          
          const translationHistory = await chat.sdk.fetchMessages({
            channels: [translationChannelName],
            count: 100
          })
          
          // Handle fetchMessages response structure
          let translationMessagesArray = null
          if (translationHistory && translationHistory.channels && translationHistory.channels[translationChannelName]) {
            translationMessagesArray = translationHistory.channels[translationChannelName]
          }
          
          if (translationMessagesArray && Array.isArray(translationMessagesArray)) {
            const translationMessages = translationMessagesArray.map(msg => {
              const translationData = msg.message
              if (translationData && translationData.originalChannel === activeChannelId) {
                const userId = translationData.originalUserId || 'translation-bot'
                
                return {
                  timetoken: String(translationData.timestamp * 10000),
                  userId: userId,
                  channelId: activeChannelId,
                  content: {
                    type: 'text',
                    text: translationData.translatedText,
                    files: translationData.originalMessage?.files || []
                  },
                  meta: {
                    isTranslation: true,
                    originalText: translationData.originalMessage?.text,
                    targetLanguage: translationData.targetLanguage
                  },
                  getMessageElements: () => [{
                    type: 'text',
                    content: { text: translationData.translatedText }
                  }],
                  type: 'text',
                  text: translationData.translatedText,
                  files: translationData.originalMessage?.files || []
                }
              }
              return null
            }).filter(Boolean)
            
            // Merge and sort by timestamp
            allMessages = [...allMessages, ...translationMessages]
              .sort((a, b) => parseInt(a.timetoken) - parseInt(b.timetoken))
          }
        } catch (translationError) {
          // Silently handle translation history fetch errors
        }

        setMessages(allMessages)
      } catch (error) {
        console.error('Error fetching message history:', error)
        setMessages([])
      }
        

      // Initialize cleanup functions
      let unsubscribeMessages = () => {}

      // Connect to channel to receive messages
      unsubscribeMessages = channel.connect(async (message: Message) => {
        const currentActiveChannelId = activeChannelIdRef.current
        
        // Ignore messages from channels that are not the currently active channel
        // Use activeChannelIdRef.current to get the most up-to-date value
        if (message.channelId !== currentActiveChannelId) {
          return
        }
        
        setMessages(prevMessages => {
          // Check if message already exists
          const messageExists = prevMessages.some(
            m => m.timetoken === message.timetoken
          )
          if (messageExists) return prevMessages
          const newMessages = [...prevMessages, message]
          return newMessages.slice(-40)
        })
      })

      //  Translation updates
      const translationChannel = chat.sdk.channel(activeChannelId + '-translations')
      const translationSubscription = translationChannel.subscription({
        receivePresenceEvents: false
      })
      translationSubscription.onMessage = (messageEvent: any) => {
        try {
          const translationData = messageEvent.message
          
          if (translationData && translationData.originalChannel === activeChannelId) {
            const userId = translationData.originalUserId || 'translation-bot'
            
            
            // Create a synthetic message for the translation
            const translatedMessage = {
              timetoken: String(translationData.timestamp * 10000), // Convert to PubNub timetoken format
              userId: userId,
              channelId: activeChannelId,
              content: {
                type: 'text',
                text: translationData.translatedText,
                files: translationData.originalMessage?.files || []
              },
              meta: {
                isTranslation: true,
                originalText: translationData.originalMessage?.text,
                targetLanguage: translationData.targetLanguage
              },
              getMessageElements: () => [{
                type: 'text',
                content: { text: translationData.translatedText }
              }],
              // Add additional properties that Chat SDK might expect
              type: 'text',
              text: translationData.translatedText,
              files: translationData.originalMessage?.files || []
            }
            
            // Add translated message to messages state directly (bypass Chat SDK processing)
            setMessages(prevMessages => {
              // Check if message already exists
              const messageExists = prevMessages.some(
                m => m.timetoken === translatedMessage.timetoken
              )
              if (messageExists) return prevMessages
              const newMessages = [...prevMessages, translatedMessage as any]
              return newMessages.slice(-40)
            })
          }
        } catch (error) {
          console.error('Error processing translation message:', error)
        }
      }
      translationSubscription.subscribe()

      //  Occupancy updates from Data Controls
      const occupancyChannel = chat.sdk.channel(dataControlOccupancyChannelId)
      const occupancySubscription = occupancyChannel.subscription({
        receivePresenceEvents: false
      })
      occupancySubscription.onMessage = (messageEvent: any) => {
        setSimulatedOccupancy(+messageEvent.message.chatOccupancy)
      }
      occupancySubscription.subscribe()

      const serverVideoControlChannel = chat.sdk.channel(
        serverVideoControlChannelId
      )
      const serverVideoControlSubscription =
        serverVideoControlChannel.subscription({
          receivePresenceEvents: false
        })
      serverVideoControlSubscription.onMessage = (messageEvent: any) => {
        if (messageEvent.message.type === 'START_STREAM') {
          setMessages([])
        }
      }
      serverVideoControlSubscription.subscribe()

      //  For consistency with the live stream, use the reactions channel for real occupancy
      const reactionsChannel = chat.sdk.channel(streamReactionsChannelId)
      const reactionsSubscription = reactionsChannel.subscription({
        receivePresenceEvents: true
      })
      reactionsSubscription.onPresence = (presenceEvent: any) => {
        if (presenceEvent?.occupancy > 0) {
          setRealOccupancy(presenceEvent.occupancy)
        }
      }
      chat.sdk
        .hereNow({ channels: [streamReactionsChannelId] })
        .then(hereNowResult => {
          if (hereNowResult) {
            setRealOccupancy(hereNowResult.totalOccupancy + 1)
          }
        })
      reactionsSubscription.subscribe()

            // Get initial pinned message
      try {
        const initialPinnedMessage = await channel.getPinnedMessage()
        setPinnedMessage(initialPinnedMessage)
      } catch (error) {
        console.error('Error getting initial pinned message:', error)
        setPinnedMessage(null)
      }

      // Return cleanup function
      return () => {
        if (typeof unsubscribeMessages === 'function') {
          unsubscribeMessages()
        }
        setMessages([])
        setPinnedMessage(null)
        translationSubscription.unsubscribe()
        occupancySubscription.unsubscribe()
        reactionsSubscription.unsubscribe()
        serverVideoControlSubscription.unsubscribe()
      }
    } catch (error) {
      console.error(`Error setting up channel ${activeChannelId}:`, error)
      return () => {
        setMessages([])
      }
    }
  }

  /**
   * Scrolls to the bottom of the message list
   */
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight
    }
  }

  /**
   * Creates a new channel based on selected type
   */
  const createChannel = async () => {
    if (!chat || !channelName.trim()) return

    try {
      let newChannel: any = null

      // Create appropriate channel type
      if (channelType === 'public') {
        // Create public channel
        newChannel = await chat.createPublicConversation({
          channelData: {
            name: channelName,
            description: `${channelName} public channel`
          }
        })
      } else if (channelType === 'private') {
        // Create private (group) channel with selected users
        if (selectedUsers.length === 0) {
          alert('Please select at least one user to invite')
          return
        }

        const users = await Promise.all(
          selectedUsers.map(userId => chat.getUser(userId))
        )

        const filteredUsers = users.filter(Boolean) as User[]

        newChannel = await chat.createGroupConversation({
          users: filteredUsers,
          channelData: {
            name: channelName,
            description: `${channelName} private group channel`
          }
        })
      } else if (channelType === 'direct' && selectedUsers.length === 1) {
        // Create direct (1:1) channel with selected user
        const user = await chat.getUser(selectedUsers[0])
        if (!user) {
          alert('Selected user not found')
          return
        }

        newChannel = await chat.createDirectConversation({
          user,
          channelData: {
            name: channelName || `Chat with ${user.name || user.id}`
          }
        })
      }

      if (newChannel && newChannel.channel) {
        // Refresh channels and select the new one
        await fetchChannels()
        setActiveChannelId(newChannel.channel.id)

        // Reset UI state
        setShowChannelCreate(false)
        setChannelName('')
        setChannelType('public')
        setSelectedUsers([])
      }
    } catch (error) {
      console.error('Error creating channel:', error)
    }
  }

  /**
   * Toggles user selection for channel invites
   */
  const toggleUserSelection = (userId: string) => {
    setSelectedUsers(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    )
  }

  // Translation functions
  const getSubscribersOnlyText = () => {
    if (isEnglish) {
      return subscribersOnlyTranslations['en']
    } else {
      return subscribersOnlyTranslations[alternativeLanguage] || subscribersOnlyTranslations['en']
    }
  }

  const getOnlineText = () => {
    if (isEnglish) {
      return onlineTranslations['en']
    } else {
      return onlineTranslations[alternativeLanguage] || onlineTranslations['en']
    }
  }

  const getChannelDisplayName = (channelId: string, fallbackName: string) => {
    // Check if we have a translation for this specific channel ID
    const channelTranslations = chatChannelNamesTranslations[channelId]
    if (channelTranslations) {
      if (isEnglish) {
        return channelTranslations['en']
      } else {
        return channelTranslations[alternativeLanguage] || channelTranslations['en']
      }
    }
    // Fall back to original behavior if no translation exists
    return fallbackName
  }

  function backgroundClicked (e) {
    setShowMentions(false)
    setShowReactions(false)
    setShowStickerPicker(false)
  }

  return (
    <div
      className={`${className} w-full h-fit`}
      onClick={e => backgroundClicked(e)}
    >
      <GuideOverlay
        id={'chatGuide'}
        guidesShown={guidesShown}
        visibleGuide={visibleGuide}
        setVisibleGuide={setVisibleGuide}
        text={
          <span>
            The <span className='font-semibold'>PubNub Chat SDK</span> provides
            you with everything you need to develop a fully featured,
            production-ready chat component:
            <ul className='list-disc list-inside my-2'>
              <li>Public, private, and direct channels</li>
              <li>Send and receive real-time messages</li>
              <li>Add emoji reactions to messages</li>
              <li>Track whether users are online or offline</li>
            </ul>
            Also: Integration with AI and Moderation through{' '}
            <span className='font-semibold'>BizOps Workspace</span> and{' '}
            <span className='font-semibold'>Functions</span>
          </span>
        }
        xOffset={`${isMobilePreview ? 'left-[0px]' : '-left-[60px]'}`}
        yOffset={'top-[10px]'}
        flexStyle={'flex-row items-start'}
      />

      {!activeChannel && (
        <div className='text-lg border-b pb-2 flex items-center bg-navy900 overflow-hidden rounded-t px-[16px] py-[12px] text-white text-[16px] font-[600] leading-[24px] h-[56px]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
          >
            <path
              d='M12.4998 3.33341V9.16675H4.30817L3.33317 10.1417V3.33341H12.4998ZM13.3332 1.66675H2.49984C2.0415 1.66675 1.6665 2.04175 1.6665 2.50008V14.1667L4.99984 10.8334H13.3332C13.7915 10.8334 14.1665 10.4584 14.1665 10.0001V2.50008C14.1665 2.04175 13.7915 1.66675 13.3332 1.66675ZM17.4998 5.00008H15.8332V12.5001H4.99984V14.1667C4.99984 14.6251 5.37484 15.0001 5.83317 15.0001H14.9998L18.3332 18.3334V5.83342C18.3332 5.37508 17.9582 5.00008 17.4998 5.00008Z'
              fill='white'
            />
          </svg>
          <div className={'pl-[16px]'}>
            {showChannelCreate ? 'Create channel' : 'Chats'}
          </div>
          <div className={'grow'} />
          <button
            className='cursor-pointer'
            onClick={() => setShowChannelCreate(!showChannelCreate)}
          >
            {showChannelCreate ? (
              'Cancel'
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
              >
                <path
                  d='M15.8332 10.8334H10.8332V15.8334H9.1665V10.8334H4.1665V9.16675H9.1665V4.16675H10.8332V9.16675H15.8332V10.8334Z'
                  fill='#FAFAFA'
                />
              </svg>
            )}
          </button>
        </div>
      )}

      {activeChannel && (
        <div className='text-lg border-b pb-2 flex items-center bg-navy900 overflow-hidden rounded-t px-[16px] py-[12px] text-white text-[16px] font-[600] leading-[24px] h-[56px]'>
          <div
            className={'rounded-full w-[32px] h-[32px] !bg-cover bg-gray-100'}
            style={
              activeChannel.custom?.profileUrl
                ? {
                    background: `url(${activeChannel.custom?.profileUrl}) center center no-repeat`
                  }
                : {}
            }
          ></div>
          <div className={'ml-[16px] text-sm'}>
            {getChannelDisplayName(activeChannel.id, activeChannel.name || activeChannel.id)}
          </div>
          <div className={'grow'} />
          <div className={'flex items-center gap-3'}>
            <div className={'flex items-center gap-2'}>
              <label className={'text-sm text-white'}>{getSubscribersOnlyText()}</label>
              <button
                onClick={() => setSubscribersOnly(!subscribersOnly)}
                className={`relative inline-flex h-[20px] w-[36px] items-center rounded-full transition-colors ${
                  subscribersOnly ? 'bg-white' : 'bg-gray-400'
                }`}
              >
                <span
                  className={`inline-block h-[16px] w-[16px] transform rounded-full bg-navy900 transition-transform ${
                    subscribersOnly ? 'translate-x-[18px]' : 'translate-x-[2px]'
                  }`}
                />
              </button>
            </div>
            <div className={'flex items-center justify-center gap-1 text-sm'}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='8'
                height='8'
                viewBox='0 0 8 8'
                fill='none'
              >
                <circle cx='4' cy='4' r='4' fill='#22C55E' />
              </svg>{' '}
              {simulatedOccupancy + realOccupancy} {getOnlineText()}
            </div>
          </div>
        </div>
      )}

      {/* Pinned Message Display */}
      {activeChannel && pinnedMessage && (
        <div className='border-b border-navy200 bg-yellow-50 px-[16px] py-[8px]'>
          <div className='flex items-start gap-3'>
            <div className='flex items-center gap-1 text-yellow-600 text-sm font-medium'>
              <span className='text-base'>📌</span>
              Pinned
            </div>
            <div className='flex-grow'>
              <div className='flex items-center gap-2 mb-1'>
                <span className='text-sm font-medium text-gray-700'>
                  {users.find(user => user.id === pinnedMessage.userId)?.name || pinnedMessage.userId}
                </span>
                <span className='text-xs text-gray-500'>
                  {new Date(parseInt(pinnedMessage.timetoken) / 10000).toLocaleTimeString([], {
                    timeStyle: 'short'
                  })}
                </span>
              </div>
              <div className='text-sm text-gray-800'>
                {pinnedMessage.getMessageElements().map((element, index) => {
                  if (element.type === 'mention') {
                    return (
                      <span key={index} className='text-blue-600 font-medium'>
                        {element.content.name}
                      </span>
                    )
                  }
                  if (element.type === 'text') {
                    return element.content.text
                  }
                  return ''
                }).join('')}
              </div>
            </div>
            <button
              onClick={async () => {
                try {
                  setIsPinning(true)
                  await activeChannel.unpinMessage()
                } catch (error) {
                  console.error('Error unpinning message:', error)
                } finally {
                  setIsPinning(false)
                }
              }}
              disabled={isPinning}
              className='text-gray-400 hover:text-gray-600 p-1'
              title='Unpin message'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z'/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Chat Messages */}

      {activeChannel && (
        <div className={'h-[400px] flex flex-col relative'}>
          {/* Spam Popup */}
          {showSpamPopup && (
            <div className='absolute inset-0 flex items-center justify-center z-50 animate-in fade-in duration-300'>
              <div className='bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg font-semibold'>
                Spam message detected and deleted
              </div>
            </div>
          )}

          {/* Image Moderation Popup */}
          {showImageModerationPopup && (
            <div className='absolute inset-0 flex items-center justify-center z-50 animate-in fade-in duration-300'>
              <div className='bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg font-semibold'>
                Moderation: Sticker removed as violated chat policies
              </div>
            </div>
          )}
          
          <div
            ref={messagesContainerRef}
            className='py-[12px] px-[16px] overflow-y-auto flex-grow'
          >
            {messages.length === 0 ? (
              <div className='text-center text-gray-500 py-4'>
                No messages yet. Be the first to say something!
              </div>
            ) : activeChannelRestrictions?.ban ? (
              <div className='flex flex-row justify-center items-center h-full'>
                You have been banned from this chat. Please contact the
                administrator
              </div>
            ) : (
              <>
                {messages
                  .filter((message) => {
                    const isTranslation = message.meta?.isTranslation
                    // Show translations when isEnglish=false, show originals when isEnglish=true
                    return isEnglish ? !isTranslation : isTranslation
                  })
                  .map((message, index) => {
                    // const user = await chat.getUser('')

                    return (
                      <ChatMessage
                        key={`${message.timetoken}-${index}`}
                        message={message}
                        currentUser={chat.currentUser}
                        users={users}
                        channel={activeChannel}
                        pinnedMessage={pinnedMessage}
                      />
                    )
                  })}
              </>
            )}
          </div>

          <MessageInput
            messageInput={messageInput}
            setMessageInput={setMessageInput}
            showMentions={showMentions}
            setShowMentions={setShowMentions}
            showReactions={showReactions}
            setShowReactions={setShowReactions}
            showStickerPicker={showStickerPicker}
            setShowStickerPicker={setShowStickerPicker}
            availableUsers={users}
            channel={activeChannel}
            activeChannelRestrictions={activeChannelRestrictions}
            isGuidedDemo={isGuidedDemo}
            showSpamNotification={showSpamNotification}
            showImageModerationNotification={showImageModerationNotification}
            isEnglish={isEnglish}
          />
        </div>
      )}
    </div>
  )
}
