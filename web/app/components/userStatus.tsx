import { useState, useEffect } from 'react'
import { Chat, User } from '@pubnub/chat'
import Avatar from './avatar'
import Cup from './icons/cup'
import Cash from './icons/cash'
import { currencySymbol, alternativeLanguage } from '../data/constants'
import { logOutTranslations, switchUserTranslations } from '../data/translations'
import { getFlagFromLanguageCode } from '../utils/flagUtils'

export default function UserStatus ({ chat, logout, currentScore, currentWallet, isEnglish, setIsEnglish }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [isLoginBypass, setIsLoginBypass] = useState(false)

  useEffect(() => {
    //  Get updates on the current user
    //  Requires 'User Metadata Events' enabled on the keyset
    if (!chat) return
    if (!chat.currentUser) return
    setCurrentUser(chat.currentUser)
    return chat.currentUser.streamUpdates(updatedUser => {
      setCurrentUser(updatedUser)
    })
  }, [chat])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      setIsLoginBypass(params.get('loginbypass') === 'true')
    }
  }, [])

  // Toggle between English and alternative language
  const toggleLanguage = () => {
    setIsEnglish(!isEnglish)
  }

  // Translation functions
  const getLogOutText = () => {
    if (isEnglish) {
      return logOutTranslations['en']
    } else {
      return logOutTranslations[alternativeLanguage] || logOutTranslations['en']
    }
  }

  const getSwitchUserText = () => {
    if (isEnglish) {
      return switchUserTranslations['en']
    } else {
      return switchUserTranslations[alternativeLanguage] || switchUserTranslations['en']
    }
  }

  return (
    <div className='flex flex-row self-end gap-4 items-center'>
      <div className='flex flex-row gap-3 items-center'>
        <div className='flex flex-row gap-1 items-center'>
          <Cup className={''} width={20} height={20} />
          <div className='text-neutral700 text-base font-bold'>
            {currentScore}
          </div>
        </div>
        <div className='border-1 border-navy200 h-full'></div>
        <div className='flex flex-row gap-1 items-center whitespace-nowrap'>
          <Cash className={''} width={24} height={24} />
          <div className={`text-base font-bold ${currentWallet < 0 ? 'text-red-600' : 'text-neutral700'}`}>
            {currentWallet < 0 
              ? `-(${currencySymbol}${Math.abs(currentWallet)})` 
              : `${currencySymbol}${currentWallet}`
            }
          </div>
        </div>
        <div className='border-1 border-navy200 h-full hidden sm:block'></div>
        <div className='text-lg font-semibold hidden sm:block'>{currentUser?.name}</div>
      </div>
      <div className='flex items-center gap-2'>
        <Avatar avatarUrl={currentUser?.profileUrl} />
        <div className='relative flex items-center bg-white border border-gray-200 rounded-full p-1 shadow-sm'>
          {/* Sliding background indicator */}
          <div 
            className={`absolute top-1 bottom-1 w-8 bg-blue-500/50 rounded-full transition-all duration-300 ease-in-out ${
              isEnglish ? 'left-1' : 'left-9'
            }`}
          />
          
          {/* English flag */}
          <div 
            className={`relative z-10 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer transition-all duration-200 ${
              isEnglish ? 'text-white' : 'hover:bg-gray-100'
            }`}
            title='English'
            onClick={toggleLanguage}
          >
            <span className='text-2xl leading-none'>
              {getFlagFromLanguageCode('en')}
            </span>
          </div>
          
          {/* Alternative language flag */}
          <div 
            className={`relative z-10 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer transition-all duration-200 ${
              !isEnglish ? 'text-white' : 'hover:bg-gray-100'
            }`}
            title={`${alternativeLanguage.toUpperCase()}`}
            onClick={toggleLanguage}
          >
            <span className='text-2xl leading-none'>
              {getFlagFromLanguageCode(alternativeLanguage)}
            </span>
          </div>
        </div>
      </div>
      <div className='text-base font-normal text-teal700 underline cursor-pointer' onClick={(e) => {logout();}}>{isLoginBypass ? getSwitchUserText() : getLogOutText()}</div>
    </div>
  )
}
