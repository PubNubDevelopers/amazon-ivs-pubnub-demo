import { useEffect, useState } from 'react'
import {
  Message,
  User,
  Channel,
  TimetokenUtils,
  MixedTextTypedElement
} from '@pubnub/chat'
import { reactions } from '@/app/data/constants'
import { useHover } from '@uidotdev/usehooks'

interface ChatMessageProps {
  message: Message & {
    sender?: { name: string }
    publisher?: string
  }
  currentUser: User
  users: User[]
  channel: Channel
  pinnedMessage: Message | null
}

export default function ChatMessage ({
  message,
  currentUser,
  users,
  channel,
  pinnedMessage
}: ChatMessageProps) {
  const [ref, hovering] = useHover()
  const [showReactions, setShowReactions] = useState(false)
  const [isPinning, setIsPinning] = useState(false)
  const [userRestrictions, setUserRestrictions] = useState<{
    ban: boolean
    mute: boolean
  }>({ ban: false, mute: false })

  
  useEffect(() => {
    // Don't show reactions for translation messages
    const isTranslation = message.meta?.isTranslation
    
    if (hovering && message.userId.startsWith('user-') && !isTranslation) {
      setShowReactions(true)
    }
    if (showReactions && !hovering) {
      setShowReactions(false)
    }
  }, [hovering])

  // Check if this specific message is the currently pinned message
  const isCurrentlyPinned = pinnedMessage?.timetoken === message.timetoken

  const isOwnMessage = message.userId === currentUser?.id

  /**
   * Toggles a reaction on a message
   */
  const toggleReaction = async (emoji: string) => {
    setShowReactions(false)
    try {
      await message.toggleReaction(emoji)
    } catch (error) {
      console.error('Unable to toggle reaction:', error)
    }
  }



  /**
   * Handles pinning a message (no toggle - just pin)
   */
  const handlePin = async () => {
    setShowReactions(false)
    setIsPinning(true)
    
    try {
      await channel.pinMessage(message)
    } catch (error) {
      console.error('Error pinning message:', error)
      
      // Show user-friendly error feedback
      const errorMessage = error instanceof Error ? error.message : String(error)
      if (errorMessage.includes('403') || errorMessage.includes('Forbidden')) {
        console.warn('Permission denied: Unable to pin message. Check user permissions.')
      } else if (errorMessage.includes('network') || errorMessage.includes('timeout')) {
        console.warn('Network error: Please check your connection and try again.')
      } else {
        console.warn('Failed to pin message. Please try again.')
      }
    } finally {
      setIsPinning(false)
    }
  }

  /**
   * Gets counts of reactions grouped by type
   */
  const getReactionCounts = () => {
    const counts: Record<string, number> = {}

    if (message.reactions) {
      Object.entries(message.reactions).forEach(([type, users]) => {
        if (Array.isArray(users)) {
          counts[type] = users.length
        }
      })
    }

    return counts
  }

  const reactionCounts = getReactionCounts()

  function pubnubTimetokenToHHMM (timetoken) {
    const date = TimetokenUtils.timetokenToDate(timetoken)

    return `${(date.getHours() + '').padStart(2, '0')}:${(
      date.getMinutes() + ''
    ).padStart(2, '0')}`
  }

  const filtered = users.filter(user => message.userId === user.id)
  const user = filtered.length === 1 ? filtered[0] : null

  const renderMessagePart = (
    messagePart: MixedTextTypedElement,
    index: number
  ) => {
    if (messagePart.type === 'mention') {
      return (
        <span key={index} className={'text-[#589CFF]'}>
          {messagePart.content.name}
        </span>
      )
    }
    if (messagePart.type === 'text') {
      return messagePart.content.text
    }

    return ''
  }

  // Check if this is a sticker message
  const isSticker = () => {
    try {
      const messageText = message.getMessageElements().map(renderMessagePart).join('')
      const parsed = JSON.parse(messageText)
      return parsed.type === 'sticker'
    } catch {
      return false
    }
  }

  // Check if channel has no pinned message AND this is not a sticker (pin icon should be available)
  const canPin = pinnedMessage === null && !isSticker()

  const getStickerData = () => {
    try {
      const messageText = message.getMessageElements().map(renderMessagePart).join('')
      return JSON.parse(messageText)
    } catch {
      return null
    }
  }

  return (
    <div
      className={`mb-6 flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}
    >
      {!isOwnMessage && (
        <div
          data-user={user?.name || 'Unknown User'}
          className={`rounded-full w-[36px] h-[36px] mr-[16px] !bg-cover bg-gray-100 ${
            userRestrictions.ban || (userRestrictions.mute && 'grayscale')
          }`}
          style={
            user
              ? {
                  background: `url(${
                    user?.profileUrl ?? '/avatars/placeholder2.png'
                  }) center center no-repeat`
                }
              : {}
          }
        ></div>
      )}

      <div
        ref={ref}
        className={`group relative max-w-[80%] flex items-end rounded-lg px-4 py-[4px] gap-[16px] ${
          isOwnMessage ? 'bg-navy900 text-white' : 'bg-navy100'
        }`}
      >
        <div
          className={`text-[16px] font-[400] leading-[24px] tracking-[0.08px] ${
            userRestrictions.ban ||
            userRestrictions.mute && 'text-neutral500 italic'
          }`}
        >
          {message.deleted
            ? 'This message has been deleted'
            : userRestrictions.ban
            ? 'This user has been banned'
            : userRestrictions.mute
            ? 'This user has been muted'
            : isSticker()
            ? (() => {
                const stickerData = getStickerData()
                return (
                  <div className="flex flex-col">
                    <img
                      src={stickerData?.stickerUrl}
                      alt={stickerData?.title || 'Sticker'}
                      className="max-w-[120px] max-h-[120px] rounded-lg"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
                )
              })()
            : message.getMessageElements().map(renderMessagePart)}
        </div>
        <div className={'text-[11px] font-[400] leading-[150%] flex items-center gap-1'}>
          {pubnubTimetokenToHHMM(message.timetoken)}
          {isCurrentlyPinned && (
            <span className='text-yellow-600' title='Pinned message'>
              📌
            </span>
          )}
        </div>

        {/* Display reactions */}
        <div className='absolute bottom-[-17px] right-[0] flex'>
          {Object.entries(reactionCounts).map(([emoji, count]) => (
            <div
              key={emoji}
              className='text-sm text-black bg-white/20 rounded-full px-1 z-10'
            >
              {emoji}&nbsp;{count}
            </div>
          ))}
        </div>

        {showReactions && (
          <div className='absolute bottom-[-20px] bg-white border shadow-lg rounded-lg px-2.5 py-1 flex gap-2 z-10'>
            {reactions.map(emoji => (
              <button
                key={emoji}
                className='text-base hover:scale-125 transition-transform'
                onClick={() => toggleReaction(emoji)}
              >
                {emoji}
              </button>
            ))}
                                {/* Separator - only show if pin button will be shown */}
                    {canPin && <div className='w-px bg-gray-300 mx-1'></div>}
                    {/* Pin Button - only show when no message is pinned */}
                    {canPin && (
                      <button
                        className='text-xs hover:scale-125 transition-transform text-gray-600 hover:text-blue-600 disabled:opacity-50'
                        onClick={handlePin}
                        disabled={isPinning}
                        title='Pin message'
                      >
                        📌
                      </button>
                    )}
          </div>
        )}
      </div>

      {isOwnMessage && (
        <div
          className={
            'rounded-full w-[36px] h-[36px] ml-[16px] !bg-cover bg-gray-100'
          }
          style={
            user
              ? {
                  background: `url(${user?.profileUrl}) center center no-repeat`
                }
              : {}
          }
        ></div>
      )}
    </div>
  )
}
