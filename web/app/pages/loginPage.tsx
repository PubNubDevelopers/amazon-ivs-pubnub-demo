'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Chat, User, Channel } from '@pubnub/chat'
import { testUsers, channelData } from '../data/constants'
import { getAuthKey } from '../getAuthKey'

export default function LoginPage ({
  setLoginPageShown,
  setSalesIntroPageShown,
  chat,
  setChat,
  setUserId,
  isGuidedDemo,
  setLoadMessage,
  isPopout
}) {
  const [userArray, setUserArray] = useState<any | null>(null)
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [loginMessage, setLoginMessage] = useState('')

  const ArrowBack = props => {
    return (
      <svg
        aria-hidden='true'
        focusable='false'
        height='32'
        role='presentation'
        viewBox='0 0 32 32'
        width='32'
        {...props}
      >
        <path
          d='M26.6673 14.6666H10.4407L17.894 7.21325L16.0007 5.33325L5.33398 15.9999L16.0007 26.6666L17.8807 24.7866L10.4407 17.3333H26.6673V14.6666Z'
          fill='currentColor'
        />
      </svg>
    )
  }

  //  App initialization
  const [isLoginBypass, setIsLoginBypass] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      setIsLoginBypass(params.get('loginbypass') === 'true')
    }
    async function init () {
      if (!process.env.NEXT_PUBLIC_PUBNUB_PUBLISH_KEY) {
        setLoadMessage('No PubNub Publish Key Found')
        console.error('Please specify your PubNub Publish Key in the .env file')
        setLoginPageShown(false)
        return
      }
      if (!process.env.NEXT_PUBLIC_PUBNUB_SUBSCRIBE_KEY) {
        setLoadMessage('No PubNub Subscribe Key Found')
        console.error(
          'Please specify your PubNub Subscribe Key in the .env file'
        )
        setLoginPageShown(false)
        return
      }
      try {
        const tempUserId = 'user-02'
        const { accessManagerToken } = await getAuthKey(
          tempUserId,
          isGuidedDemo,
          `-${process.env.NEXT_PUBLIC_ENVIRONMENT_NUMBER ?? ''}`
        )
        const localChat = await Chat.init({
          publishKey: process.env.NEXT_PUBLIC_PUBNUB_PUBLISH_KEY as string,
          subscribeKey: process.env.NEXT_PUBLIC_PUBNUB_SUBSCRIBE_KEY as string,
          userId: tempUserId, //  Don't use the same user ID here as you use in the next line, to test whether any users already exist
          authKey: accessManagerToken
        })

        const testUser = await localChat.getUser('user-01')

        if (!testUser) {
          setLoadMessage(
            'Populating keyset with users (this will take a few seconds)'
          )

          const promises = [] as Promise<User | null | undefined>[]
          for (const testUser of testUsers) {
            const tempPromise = localChat
              .getUser(testUser.id)
              .then(returnedUser => {
                if (!returnedUser) {
                  return localChat.createUser(testUser.id, {
                    name: testUser.name,
                    profileUrl: testUser.avatar,
                    email: testUser.email,
                    externalId: testUser.externalId,
                    type: 'member',
                    custom: {
                      location: testUser.location,
                      jobTitle: testUser.jobTitle,
                      currentMood: testUser.currentMood,
                      socialHandle: testUser.socialHandle,
                      timezone: testUser.timezone,
                      score: 0,
                      wallet: 1000
                    }
                  })
                } else {
                  return localChat.updateUser(testUser.id, {
                    name: testUser.name,
                    profileUrl: testUser.avatar,
                    email: testUser.email,
                    externalId: testUser.externalId,
                    type: 'member',
                    custom: {
                      location: testUser.location,
                      jobTitle: testUser.jobTitle,
                      currentMood: testUser.currentMood,
                      socialHandle: testUser.socialHandle,
                      timezone: testUser.timezone,
                      score: 0,
                      wallet: 1000
                    }
                  })
                }
              })
            if (tempPromise) {
              promises.push(tempPromise)
            }
          }
          await Promise.all(promises)
        }

        const testPublicChannel = await localChat.getChannel(channelData[0].id)
        if (!testPublicChannel) {
          setLoadMessage('Creating Public Channel data')
          const promises = [] as Promise<Channel | null | undefined>[]
          for (const channelInfo of channelData) {
            if (channelInfo.createInAppContext == true) {
              const tempPromise = localChat
                .getChannel(channelInfo.id)
                .then(returnedChannel => {
                  if (!returnedChannel) {
                    return localChat.createPublicConversation({
                      channelId: channelInfo.id,
                      channelData: {
                        name: channelInfo.name,
                        description: channelInfo.description,
                        custom: {
                          profileUrl: channelInfo.avatar
                        }
                      }
                    })
                  }
                })
              if (tempPromise) {
                promises.push(tempPromise)
              }
            }
          }
          await Promise.all(promises)
        }

        const params = new URLSearchParams(window.location.search)
        if (params.get('loginbypass') === 'true' && !isGuidedDemo) {
          console.debug('Login bypass enabled')
          const randomUserId = `user-${
            Math.floor(Math.random() * (40 - 10 + 1)) + 10
          }`
          login(randomUserId)
        }
      } catch {
        setLoadMessage(
          'Could not initialize Chat.  Please check your PubNub Keyset configuration'
        )
      }
    }

    const shuffle = array => {
      return array
        .map(a => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
    }
    const nonBots = testUsers.filter(user => user.id.includes('user'))
    const shuffledArray = shuffle(nonBots)
    setUserArray(shuffledArray)
    init()
  }, [])

  async function login (userId) {
    setIsLoggingIn(true)
    setLoginMessage('Getting authentication token...')
    
    try {
      const { accessManagerToken } = await getAuthKey(
        userId,
        isGuidedDemo,
        `-${process.env.NEXT_PUBLIC_ENVIRONMENT_NUMBER ?? ''}`
      )
      
      setLoginMessage('Initializing chat...')
      
      // Use setTimeout to allow UI to update before heavy operations
      setTimeout(async () => {
        try {
          const localChat = await Chat.init({
            publishKey: process.env.NEXT_PUBLIC_PUBNUB_PUBLISH_KEY as string,
            subscribeKey: process.env.NEXT_PUBLIC_PUBNUB_SUBSCRIBE_KEY as string,
            userId: userId,
            authKey: accessManagerToken
          })
          
          setLoginMessage('Completing login...')
          setChat(localChat)
          setUserId(userId)
          setLoginPageShown(false)
        } catch (error) {
          console.error('Chat initialization failed:', error)
          setLoginMessage('Login failed. Please try again.')
          setIsLoggingIn(false)
        }
      }, 100) // Small delay to allow UI update
      
    } catch (error) {
      console.error('Authentication failed')
      setLoginMessage('Login failed. Please try again.')
      setIsLoggingIn(false)
    }
  }

  function returnToSalesScreen () {
    setSalesIntroPageShown(true)
    setLoginPageShown(false)
  }
  return (
    <div className='flex items-center justify-center h-fit min-h-screen w-screen min-w-screen bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#334169] to-navy900 select-none'>
      {!isGuidedDemo && isLoginBypass ? (
        <div className='flex flex-col gap-20 items-center text-navy100'>
          <div className='text-5xl font-extrabold'>Loading...</div>
        </div>
      ) : (
        <div className='flex flex-col gap-8 md:gap-20 items-center text-navy100 px-4'>
          {isLoggingIn ? (
            <div className='flex flex-col gap-6 items-center text-center'>
              <div className='flex mb-5 animate-spin'>
                <Image
                  src='/icons/loading.png'
                  alt='Loading'
                  className=''
                  width={50}
                  height={50}
                  priority
                />
              </div>
              <div className='text-2xl md:text-4xl font-extrabold'>Logging in...</div>
              <div className='text-lg md:text-xl'>{loginMessage}</div>
            </div>
          ) : (
            <>
              <div className='flex flex-row gap-4 items-center text-center'>
                {isGuidedDemo && !isPopout && (
                  <div
                    className='cursor-pointer'
                    onClick={() => {
                      returnToSalesScreen()
                    }}
                  >
                    <ArrowBack />
                  </div>
                )}
                {userArray && (
                  <div className='text-2xl md:text-5xl font-extrabold'>
                    Choose a user to log in
                  </div>
                )}
              </div>
              <div className='grid grid-cols-2 md:flex md:flex-row gap-4 md:gap-6'>
                {userArray?.slice(0, 4).map((user, index) => {
                  return (
                    <LoginAvatar
                      key={index}
                      id={index}
                      name={user.name}
                      avatarUrl={user.avatar}
                      personSelected={key => {
                        login(userArray[key].id)
                      }}
                    ></LoginAvatar>
                  )
                })}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

function LoginAvatar ({ id, avatarUrl, name, personSelected }) {
  return (
    <div
      className='flex flex-col gap-2 md:gap-3 p-2 items-center cursor-pointer hover:bg-navy800 rounded-lg'
      onClick={() => {
        personSelected(id)
      }}
    >
      <div className='px-1 md:px-3'>
        <Image
          src={avatarUrl}
          alt='Avatar'
          className='rounded-full w-20 h-20 md:w-32 md:h-32'
          width={128}
          height={128}
          priority
        />
      </div>
      <div className='text-sm md:text-lg font-normal text-center'>{name}</div>
    </div>
  )
}
