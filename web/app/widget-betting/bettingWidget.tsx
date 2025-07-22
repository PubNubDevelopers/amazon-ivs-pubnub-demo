import { useState, useEffect, useRef } from 'react'
import GuideOverlay from '../components/guideOverlay'
import { jerseySilks } from './assets'
import {
  bettingChannelId
} from '../data/constants'

export default function BettingWidget ({
  className,
  isMobilePreview,
  chat,
  isGuidedDemo,
  guidesShown,
  visibleGuide,
  setVisibleGuide,
  awardPoints
}) {

  const testBettingData = [
    {
      number: 1,
      name: 'Horse Name',
      trainer: 'Trainer Name',
      jockey: 'Jockey Name',
      age: 2,
      weight: 133, //  lbs
      odds: 2.333
    },
    {
      number: 2,
      name: 'Another Horse Name',
      trainer: 'Another Trainer Name',
      jockey: 'Another Jockey Name',
      age: 2,
      weight: 135, //  lbs
      odds: 2.5
    },
  ]

  useEffect(() => {
    if (!chat) return
    const subscriptionSet = chat.sdk.subscriptionSet({
      channels: [
        bettingChannelId,
      ]
    })
    subscriptionSet.onMessage = messageEvent => {
      if (messageEvent.channel == bettingChannelId) {
        //  New message in the betting channel
        //  todo - process new betting message
      }
    }
    subscriptionSet.subscribe()
    return () => {
      subscriptionSet.unsubscribe()
    }
  }, [chat])

  return (
    <div className={`${className} px-6 pt-3 pb-4`}>
      <GuideOverlay
        id={'bettingGuide'}
        guidesShown={guidesShown}
        visibleGuide={visibleGuide}
        setVisibleGuide={setVisibleGuide}
        text={
          <span>
            Betting can be built on top of PubNub’s{' '}
            <span className='font-semibold'>Core Messaging Service</span>
          </span>
        }
        xOffset={`${isMobilePreview ? 'left-[0px]' : 'right-[0px]'}`}
        yOffset={''}
        flexStyle={'flex-row items-start'}
      />

      <BettingDashboard />
    </div>
  )

  function BettingDashboard ({}) {
    return (
      <div className='text-base font-normal py-3 grid grid-cols-7 gap-1 mb-6 justify-center'>
        
        {/* Grid of Jersey Silk Images */}
          {jerseySilks.map((silkImage, index) => (
            <div 
              key={index}
              className='relative aspect-square bg-gray-100 rounded-md overflow-hidden hover:scale-105 transition-transform cursor-pointer border border-transparent hover:border-blue-400 w-10 h-10'
            >
              <img
                src={silkImage.src}
                alt={`Jockey Silk ${index + 1}`}
                className='w-full h-full object-cover'
              />
            </div>
          ))}
        
      </div>
    )
  }


}
