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

  const [bettingStatus, setBettingStatus] = useState('open') // 'open', 'closed', 'results'
  const [raceResults, setRaceResults] = useState([1, 3, 2]) // Top 3 finishers by horse number [1st, 2nd, 3rd]
  const [selectedOdds, setSelectedOdds] = useState(new Set()) // Application-level betting state
  const [selectedEW, setSelectedEW] = useState(new Set()) // Application-level betting state
  const stake = 5
  const testBettingData = [
    {
      title: "Race 1",
      stake: 5,
      horses: [
        {
          number: 1,
          name: 'Horse Name',
          trainer: 'Trainer Name',
          jockey: 'Jockey Name',
          age: 2,
          weight: 133, //  lbs
          odds: 11.00
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
        {
          number: 3,
          name: 'Another Horse Name',
          trainer: 'Another Trainer Name',
          jockey: 'Another Jockey Name',
          age: 2,
          weight: 135, //  lbs
          odds: 2.5
        },
        {
          number: 4,
          name: 'Another Horse Name',
          trainer: 'Another Trainer Name',
          jockey: 'Another Jockey Name',
          age: 2,
          weight: 135, //  lbs
          odds: 2.5
        },
        {
          number: 5,
          name: 'Another Horse Name',
          trainer: 'Another Trainer Name',
          jockey: 'Another Jockey Name',
          age: 2,
          weight: 135, //  lbs
          odds: 2.5
        }
      ]
    }
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

      <BettingDashboard 
        bettingStatus={bettingStatus}
        setBettingStatus={setBettingStatus}
        raceResults={raceResults}
        selectedOdds={selectedOdds}
        setSelectedOdds={setSelectedOdds}
        selectedEW={selectedEW}
        setSelectedEW={setSelectedEW}
        stake={stake}
        testBettingData={testBettingData}
      />
    </div>
  )

  function BettingDashboard ({
    bettingStatus,
    setBettingStatus,
    raceResults,
    selectedOdds,
    setSelectedOdds,
    selectedEW,
    setSelectedEW,
    stake,
    testBettingData
  }) {

    // Convert pounds to stone and pounds
    const convertWeight = (pounds) => {
      const stone = Math.floor(pounds / 14)
      const remainingPounds = pounds % 14
      return `${stone}st ${remainingPounds}lbs`
    }

    // Get jersey silk image by number
    const getSilkImage = (number) => {
      const silkIndex = number - 1 // Convert to 0-based index
      return jerseySilks[silkIndex] || jerseySilks[0] // Fallback to first silk if not found
    }

    const toggleOdds = (number) => {
      const newSelectedOdds = new Set(selectedOdds)
      const newSelectedEW = new Set(selectedEW)
      
      if (newSelectedOdds.has(number)) {
        // If deselecting odds, also deselect EW
        newSelectedOdds.delete(number)
        newSelectedEW.delete(number)
      } else {
        newSelectedOdds.add(number)
      }
      
      setSelectedOdds(newSelectedOdds)
      setSelectedEW(newSelectedEW)
    }

    const toggleEW = (number) => {
      const newSelectedOdds = new Set(selectedOdds)
      const newSelectedEW = new Set(selectedEW)
      
      // If odds is not selected, automatically select it when EW is clicked
      if (!newSelectedOdds.has(number)) {
        newSelectedOdds.add(number)
        setSelectedOdds(newSelectedOdds)
      }
      
      // Toggle EW selection
      if (newSelectedEW.has(number)) {
        newSelectedEW.delete(number)
      } else {
        newSelectedEW.add(number)
      }
      setSelectedEW(newSelectedEW)
    }

    // Calculate wager amount based on selected options
    const calculateWager = (horseNumber) => {
      let wager = 0
      if (selectedOdds.has(horseNumber)) wager += stake
      if (selectedEW.has(horseNumber)) wager += stake
      return wager > 0 ? `£${wager}` : ''
    }

    // Calculate potential winnings for a horse (assuming it wins)
    const calculateHorseWinnings = (horse, placeOnly = false) => {
      let winnings = 0
      
      // Win bet: £5 * odds
      if (selectedOdds.has(horse.number)) {
        winnings += stake * horse.odds
      }
      
      // Each way bet: £5 split as £2.50 win + £2.50 place
      // If horse wins: win part (£2.50 * odds) + place part (£2.50 * odds/5)
      if (selectedEW.has(horse.number)) {
        const placePart = stake + (stake * ((horse.odds - 1) / 5))
        if (placeOnly) {
          return placePart
        }
        winnings += placePart
      }
      
      return winnings
    }

    // Check if a wager is won based on race results
    const isWagerWon = (horse) => {
      if (bettingStatus !== 'results') return false
      
      // Win bet: horse finished first and odds button was pressed
      const wonOnOdds = selectedOdds.has(horse.number) && horse.number === raceResults[0]
      
      // Each way bet: horse finished in top 3 and EW button was pressed
      const wonOnEW = selectedEW.has(horse.number) && raceResults.includes(horse.number)
      
      return wonOnOdds || wonOnEW
    }



    return (
      <div className='text-base font-normal py-3'>
        
        {/* Table Heading */}
        <div className='flex justify-between items-center mb-4'>
          <div className='flex items-center gap-3'>
            <h3 className='text-lg font-semibold text-gray-800'>{testBettingData[0].title}</h3>
            <div className='flex gap-2'>
              <button
                onClick={() => setBettingStatus('open')}
                className='px-3 py-1 text-xs font-medium bg-green-500 text-white rounded hover:bg-green-600 transition-colors'
              >
                Open
              </button>
              <button
                onClick={() => setBettingStatus('closed')}
                className='px-3 py-1 text-xs font-medium bg-red-500 text-white rounded hover:bg-red-600 transition-colors'
              >
                Close
              </button>
              <button
                onClick={() => setBettingStatus('results')}
                className='px-3 py-1 text-xs font-medium bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'
              >
                Results
              </button>
            </div>
          </div>
          <span className='text-sm text-gray-500 font-normal'>Each Stake: £{stake} - Each Way: 1/5 (3 places)</span>
        </div>
        
        {/* Betting Status Indicator */}
        {bettingStatus === 'closed' && (
          <div className='mb-4 p-3 bg-red-100 border border-red-300 rounded-lg'>
            <div className='text-center text-red-800 font-semibold'>BETTING CLOSED</div>
          </div>
        )}
        
        {/* Race Results Indicator */}
        {bettingStatus === 'results' && (
          <div className='mb-4 p-3 bg-blue-100 border border-blue-300 rounded-lg'>
            <div className='text-center text-blue-800 font-semibold'>RACE RESULTS</div>
          </div>
        )}
        

        {/* Betting Table */}
        <div className='overflow-x-auto'>
          <table className='w-full border-collapse bg-white rounded-lg shadow-sm'>
            <thead>
              <tr className='bg-gray-50 border-b border-gray-200'>
                {/* Desktop Headers */}
                <th className='px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell'>#</th>
                <th className='px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell'>Silk</th>
                <th className='px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell'>Horse Details</th>
                <th className='px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell'>Age/Weight</th>
                
                {/* Mobile Combined Header */}
                <th className='px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:hidden'>Horse</th>
                
                {/* Common Headers */}
                <th className='px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Your Wager</th>
                <th className='px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Total Wager</th>
                
                {/* Desktop Separate Betting Headers */}
                <th className='px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell'>Odds</th>
                <th className='px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell'>Each Way</th>
                
                {/* Mobile Combined Betting Header */}
                <th className='px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:hidden'>Betting</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {testBettingData[0].horses.map((horse) => {
                const getPositionStyling = () => {
                  if (bettingStatus !== 'results') return 'hover:bg-gray-50'
                  
                  if (horse.number === raceResults[0]) {
                    // 1st place - Gold
                    return 'bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-lg border border-yellow-300'
                  } else if (horse.number === raceResults[1]) {
                    // 2nd place - Silver
                    return 'bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg border border-gray-300'
                  } else if (horse.number === raceResults[2]) {
                    // 3rd place - Bronze
                    return 'bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg border border-orange-300'
                  }
                  return 'hover:bg-gray-50'
                }
                
                return (
                <tr key={horse.number} className={`transition-colors ${getPositionStyling()}`}>
                  {/* Desktop Layout */}
                  {/* Horse Number */}
                  <td className='px-3 py-4 text-sm font-medium text-gray-900 hidden sm:table-cell'>
                    {horse.number}
                  </td>
                  
                  {/* Jersey Silk Image */}
                  <td className='px-3 py-4 hidden sm:table-cell'>
                    <div className='w-10 h-10 rounded-md overflow-hidden border border-gray-200'>
                      <img
                        src={getSilkImage(horse.number).src}
                        alt={`Silk ${horse.number}`}
                        className='w-full h-full object-cover'
                      />
                    </div>
                  </td>
                  
                  {/* Horse Details */}
                  <td className='px-3 py-4 hidden sm:table-cell'>
                    <div className='flex flex-col'>
                      <div className='text-sm font-medium text-gray-900'>{horse.name}</div>
                      <div className='text-xs text-gray-500'>T: {horse.trainer}</div>
                      <div className='text-xs text-gray-500'>J: {horse.jockey}</div>
                    </div>
                  </td>
                  
                  {/* Age/Weight */}
                  <td className='px-3 py-4 hidden sm:table-cell'>
                    <div className='flex flex-col'>
                      <div className='text-sm text-gray-900'>{horse.age}-y-o</div>
                      <div className='text-sm text-gray-900'>{convertWeight(horse.weight)}</div>
                    </div>
                  </td>
                  
                  {/* Mobile Combined Horse + Silk */}
                  <td className='px-3 py-4 sm:hidden'>
                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 rounded-md overflow-hidden border border-gray-200 flex-shrink-0'>
                        <img
                          src={getSilkImage(horse.number).src}
                          alt={`Silk ${horse.number}`}
                          className='w-full h-full object-cover'
                        />
                      </div>
                      <div className='text-sm font-medium text-gray-900'>{horse.name}</div>
                    </div>
                  </td>
                  
                  {/* Your Wager */}
                  <td className='px-3 py-4'>
                    <div className='flex flex-col'>
                      <div className={`text-sm flex items-center gap-1 ${
                        isWagerWon(horse) 
                          ? 'text-blue-700 font-extrabold text-base' 
                          : 'text-gray-900 font-medium'
                      }`}>
                        {calculateWager(horse.number)}
                        {isWagerWon(horse) && <span className='text-yellow-500'>🏆</span>}
                      </div>
                      {(selectedOdds.has(horse.number) || selectedEW.has(horse.number)) && (
                        <div className='text-xs text-gray-500 flex flex-col'>
                          <div>Win: £{calculateHorseWinnings(horse, false).toFixed(2)}</div>
                          {selectedEW.has(horse.number) && <div>Place: £{calculateHorseWinnings(horse, true).toFixed(2)}</div>}
                        </div>
                    )}
                    </div>
                  </td>
                  
                  {/* Total Wager */}
                  <td className='px-3 py-4'>
                    {/* Empty column */}
                  </td>
                  
                  {/* Desktop Separate Buttons */}
                  {/* Odds Button */}
                  <td className='px-3 py-4 hidden sm:table-cell'>
                    <button
                      onClick={() => toggleOdds(horse.number)}
                      disabled={bettingStatus === 'closed' || bettingStatus === 'results'}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors ${
                        bettingStatus === 'closed' || bettingStatus === 'results'
                          ? 'bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed'
                          : selectedOdds.has(horse.number)
                          ? 'bg-navy900 text-white border-navy900 hover:bg-navy800'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {horse.odds.toFixed(2)}
                    </button>
                  </td>
                  
                  {/* Each Way Button */}
                  <td className='px-3 py-4 hidden sm:table-cell'>
                    <button
                      onClick={() => toggleEW(horse.number)}
                      disabled={bettingStatus === 'closed' || bettingStatus === 'results'}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors ${
                        bettingStatus === 'closed' || bettingStatus === 'results'
                          ? 'bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed'
                          : selectedEW.has(horse.number)
                          ? 'bg-navy900 text-white border-navy900 hover:bg-navy800'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      EW
                    </button>
                  </td>
                  
                  {/* Mobile Stacked Buttons */}
                  <td className='px-3 py-4 sm:hidden'>
                    <div className='flex flex-col gap-2'>
                      <button
                        onClick={() => toggleOdds(horse.number)}
                        disabled={bettingStatus === 'closed' || bettingStatus === 'results'}
                        className={`px-2 py-1 text-xs font-medium rounded border transition-colors ${
                          bettingStatus === 'closed' || bettingStatus === 'results'
                            ? 'bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed'
                            : selectedOdds.has(horse.number)
                            ? 'bg-navy900 text-white border-navy900 hover:bg-navy800'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {horse.odds.toFixed(2)}
                      </button>
                      <button
                        onClick={() => toggleEW(horse.number)}
                        disabled={bettingStatus === 'closed' || bettingStatus === 'results'}
                        className={`px-2 py-1 text-xs font-medium rounded border transition-colors ${
                          bettingStatus === 'closed' || bettingStatus === 'results'
                            ? 'bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed'
                            : selectedEW.has(horse.number)
                            ? 'bg-navy900 text-white border-navy900 hover:bg-navy800'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        EW
                      </button>
                    </div>
                  </td>
                </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }


}
