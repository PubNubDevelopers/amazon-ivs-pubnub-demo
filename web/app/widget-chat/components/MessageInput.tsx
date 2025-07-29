import { useState, useRef, useEffect } from 'react'
import { reactions, alternativeLanguage } from '@/app/data/constants'
import { messageInputPlaceholderTranslations } from '@/app/data/translations'
import { User, MessageDraftV2, Channel } from '@pubnub/chat'
import { useHover } from '@uidotdev/usehooks'
import { Restriction } from '../chatWidget'
import { actionCompleted } from 'pubnub-demo-integration'
import StickerPicker from './StickerPicker'
import { GifObject } from '../../utils/giphy'

interface MessageInputProps {
  messageInput: string
  setMessageInput: (input: string) => void
  showMentions: boolean
  setShowMentions: (input: boolean) => void
  showReactions: boolean
  setShowReactions: (input: boolean) => void
  showStickerPicker: boolean
  setShowStickerPicker: (input: boolean) => void
  availableUsers: User[]
  channel: Channel
  activeChannelRestrictions: Restriction | null
  isGuidedDemo: boolean
  showSpamNotification: () => void
  showImageModerationNotification: () => void
  isEnglish?: boolean
}

export default function MessageInput ({
  messageInput,
  setMessageInput,
  availableUsers,
  channel,
  showMentions,
  setShowMentions,
  showReactions,
  setShowReactions,
  showStickerPicker,
  setShowStickerPicker,
  activeChannelRestrictions,
  isGuidedDemo,
  showSpamNotification,
  showImageModerationNotification,
  isEnglish = true
}: MessageInputProps) {
  const [ref, hovering] = useHover()
  const [mentionQuery, setMentionQuery] = useState('')
  const [suggestedUsers, setSuggestedUsers] = useState<User[]>([])
  const [mentionStartIndex, setMentionStartIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const messageDraftRef = useRef<MessageDraftV2 | null>(null)

  // Translation function
  const getPlaceholderText = () => {
    if (isEnglish) {
      return messageInputPlaceholderTranslations['en']
    } else {
      return messageInputPlaceholderTranslations[alternativeLanguage] || messageInputPlaceholderTranslations['en']
    }
  }

  useEffect(() => {
    // Initialize message draft when component mounts
    messageDraftRef.current = channel.createMessageDraftV2({
      userSuggestionSource: 'channel'
    })

    return () => {
      // Cleanup message draft when component unmounts
      messageDraftRef.current = null
    }
  }, [channel])

  useEffect(() => {
    if (mentionQuery.length >= 3) {
      const filteredUsers = availableUsers.filter(user =>
        user.name?.toLowerCase().includes(mentionQuery.toLowerCase())
      )
      setSuggestedUsers(filteredUsers.slice(0, 5))
    } else {
      setSuggestedUsers([])
    }
  }, [mentionQuery, availableUsers])

  const handleReaction = async (event, emoji: string) => {
    setShowReactions(false)
    event.stopPropagation()
    setMessageInput(messageInput + ' ' + emoji)
    if (messageDraftRef.current) {
      messageDraftRef.current.update(messageInput + ' ' + emoji)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setMessageInput(value)

    // Update message draft text
    if (messageDraftRef.current) {
      messageDraftRef.current.update(value)
    }

    // Check for @ symbol
    const lastAtIndex = value.lastIndexOf('@')
    if (lastAtIndex !== -1) {
      const query = value.slice(lastAtIndex + 1)
      setMentionQuery(query)
      setMentionStartIndex(lastAtIndex)
      setShowMentions(true)
    } else {
      setShowMentions(false)
      setMentionQuery('')
      setMentionStartIndex(-1)
    }
  }

  const handleMentionSelect = (user: User) => {
    if (mentionStartIndex !== -1 && messageDraftRef.current) {
      const newMessage =
        messageInput.slice(0, mentionStartIndex) +
        `@${user.name || user.id} ` +
        messageInput.slice(mentionStartIndex + mentionQuery.length + 1)

      setMessageInput(newMessage)

      messageDraftRef.current.update(newMessage)

      // Add mention to message draft
      messageDraftRef.current.addMention(
        mentionStartIndex,
        (user.name || user.id).length + 1, // +1 for @ symbol
        'mention',
        user.id
      )

      setShowMentions(false)
      setMentionQuery('')
      setMentionStartIndex(-1)
      inputRef.current?.focus()
    }
  }

  const handleSendMessage = async () => {
    if (messageDraftRef.current && messageInput.trim()) {
      try {
        await messageDraftRef.current.send()
        if (!isGuidedDemo) {
          //  This code is only used by the PubNub website
          actionCompleted({
            action: 'Send a chat message',
            blockDuplicateCalls: false,
            debug: false
          })
        }  
        setMessageInput('')
        // Create new message draft for next message
        messageDraftRef.current = channel.createMessageDraftV2({
          userSuggestionSource: 'channel'
        })
      } catch (error) {
        // Check if this is a 422 spam detection error
        if (
          (error as any)?.fr_1 === 422 || 
          ((error as any)?.cause && (error as any)?.cause?.status === 422)
        ) {
          showSpamNotification()
          
          // Clear the current message input
          setMessageInput('')
          
          // Create new message draft for next message
          messageDraftRef.current = channel.createMessageDraftV2({
            userSuggestionSource: 'channel'
          })
        } else {
          console.error('Error sending message:', error)
        }
      }
    }
  }

  const handleStickerSelect = async (gif: GifObject) => {
    // Check if the gif rating is inappropriate (anything other than 'g')
    if (gif.rating && gif.rating !== 'g') {
      showImageModerationNotification()
      return
    }

    try {
      // Send sticker as a custom message via PubNub SDK directly
      await channel.sendText(JSON.stringify({
        type: 'sticker',
        stickerId: gif.id,
        stickerUrl: gif.images.fixed_height.url,
        title: gif.title
      }))
      
      if (!isGuidedDemo) {
        actionCompleted({
          action: 'Send a sticker',
          blockDuplicateCalls: false,
          debug: false
        })
      }
    } catch (error) {
      console.error('Error sending sticker:', error)
    }
  }

  function handleOpenEmoji (event) {
    setShowReactions(!showReactions)
    setShowStickerPicker(false) // Close sticker picker when opening emoji
    event.stopPropagation()
  }

  function handleOpenStickers (event) {
    setShowStickerPicker(!showStickerPicker)
    setShowReactions(false) // Close emoji picker when opening stickers
    event.stopPropagation()
  }

  return (
    <div
      className={`relative flex items-center py-[12px] px-[16px] gap-2 mt-1 border-t border-navy200 ${
        (activeChannelRestrictions?.mute || activeChannelRestrictions?.ban) &&
        'pointer-events-none opacity-50'
      }`}
    >
      <div
        className={
          'group relative rounded w-[32px] h-[32px] p-[6px] cursor-pointer'
        }
        ref={ref}
        onClick={handleOpenEmoji}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='22'
          height='22'
          viewBox='0 0 22 22'
          fill='none'
        >
          <path
            d='M14.564 9.98C15.409 9.98 16.093 9.297 16.093 8.451C16.093 7.606 15.409 6.922 14.564 6.922C13.719 6.922 13.036 7.606 13.036 8.451C13.036 9.297 13.719 9.98 14.564 9.98Z'
            fill='#216F7B'
          />
          <path
            d='M7.435 9.98C8.281 9.98 8.964 9.297 8.964 8.451C8.964 7.606 8.281 6.922 7.435 6.922C6.589 6.922 5.906 7.606 5.906 8.451C5.906 9.297 6.589 9.98 7.435 9.98Z'
            fill='#216F7B'
          />
          <path
            d='M11 17.111C13.331 17.111 15.297 15.529 16.093 13.037H5.907C6.703 15.529 8.669 17.111 11 17.111Z'
            fill='#216F7B'
          />
          <path
            d='M10.989 0.815C5.367 0.815 0.815 5.367 0.815 10.989C0.815 16.611 5.367 21.163 10.989 21.163C16.611 21.163 21.163 16.611 21.163 10.989C21.163 5.367 16.611 0.815 10.989 0.815ZM11 19.148C6.5 19.148 2.852 15.5 2.852 10.989C2.852 6.478 6.5 2.83 11 2.83C15.5 2.83 19.148 6.478 19.148 10.989C19.148 15.5 15.5 19.148 11 19.148Z'
            fill='#216F7B'
          />
        </svg>

        {showReactions && (
          <div className='absolute top-[-35px] left-0 bg-white border shadow-lg rounded-lg p-1 flex gap-2 z-10'>
            {reactions.map(emoji => (
              <button
                key={emoji}
                className='text-lg hover:scale-125 transition-transform'
                onClick={event => handleReaction(event, emoji)}
              >
                {emoji}
              </button>
            ))}
          </div>
        )}
      </div>

      <div
        className={
          'group relative rounded w-[32px] h-[32px] p-[6px] cursor-pointer'
        }
        onClick={handleOpenStickers}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='22'
          height='22'
          viewBox='0 0 22 22'
          fill='none'
        >
          {/* Main star */}
          <path
            d='M11 2.5L12.8 7.9L19 7.9L14.1 11.6L15.9 17L11 13.9L6.1 17L7.9 11.6L3 7.9L9.2 7.9L11 2.5Z'
            fill='#216F7B'
          />
          {/* Sparkles around the star */}
          <path
            d='M18.3 3.7L18.7 4.5L19.5 4.1L18.7 3.7L18.3 3.7Z'
            fill='#216F7B'
          />
          <path
            d='M3.7 3.1L4.1 3.9L4.9 3.5L4.1 3.1L3.7 3.1Z'
            fill='#216F7B'
          />
          <path
            d='M19 15.9L19.4 16.7L20.2 16.3L19.4 15.9L19 15.9Z'
            fill='#216F7B'
          />
          <path
            d='M2.4 16.5L2.8 17.3L3.6 16.9L2.8 16.5L2.4 16.5Z'
            fill='#216F7B'
          />
          <circle cx='17.1' cy='7.3' r='0.7' fill='#216F7B'/>
          <circle cx='4.3' cy='13.4' r='0.6' fill='#216F7B'/>
        </svg>

        {showStickerPicker && (
          <StickerPicker
            onStickerSelect={handleStickerSelect}
            onClose={() => setShowStickerPicker(false)}
          />
        )}
      </div>

      <div className='flex-grow'>
        <input
          ref={inputRef}
          type='text'
          placeholder={`${
            activeChannelRestrictions?.mute
              ? 'You have been muted'
              : activeChannelRestrictions?.ban
              ? 'You have been banned'
              : getPlaceholderText()
          }`}
          className='w-full focus:outline-none focus:shadow-outline'
          value={messageInput}
          onChange={handleInputChange}
          onKeyDown={e => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              handleSendMessage()
            }
          }}
        />

        {showMentions && suggestedUsers.length > 0 && (
          <div className='absolute w-full bottom-[100%] left-0 bg-navy200 shadow-lg z-10'>
            {suggestedUsers.map(user => (
              <button
                key={user.id}
                className='w-full flex items-center text-left px-2 py-1 hover:bg-navy100 rounded'
                onClick={() => handleMentionSelect(user)}
              >
                <div
                  data-user={user?.name || 'Unknown User'}
                  className={
                    'rounded-full w-[36px] h-[36px] mr-[16px] !bg-cover bg-gray-100'
                  }
                  style={
                    user
                      ? {
                          background: `url(${user?.profileUrl}) center center no-repeat`
                        }
                      : {}
                  }
                ></div>
                {user.name}
              </button>
            ))}
          </div>
        )}
      </div>

      <button
        className='text-white rounded w-[32px] h-[32px] p-[6px] cursor-pointer'
        onClick={handleSendMessage}
        disabled={!messageInput.trim()}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
        >
          <path
            d='M2.925 5.025L9.18333 7.70833L2.91667 6.875L2.925 5.025ZM9.175 12.2917L2.91667 14.975V13.125L9.175 12.2917ZM1.25833 2.5L1.25 8.33333L13.75 10L1.25 11.6667L1.25833 17.5L18.75 10L1.25833 2.5Z'
            fill='#216F7B'
          />
        </svg>
      </button>
    </div>
  )
}
