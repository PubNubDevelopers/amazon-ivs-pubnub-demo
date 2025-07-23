import { useState, useEffect, useRef, useCallback, useMemo, memo } from 'react'
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
  const [selectedOdds, setSelectedOdds] = useState(new Set<number>()) // Application-level betting state
  const [selectedEW, setSelectedEW] = useState(new Set<number>()) // Application-level betting state
  const [totalWagers, setTotalWagers] = useState(new Map<number, number>()) // Total wagers for each horse (horse number -> amount)
  const [pulsatingHorse, setPulsatingHorse] = useState<number | null>(null) // Track which horse should show pulse animation
  const [currentRace, setCurrentRace] = useState<{
    title: string
    stake: number
    horses: Array<{
      number: number
      name: string
      trainer: string
      jockey: string
      age: number
      weight: number
      odds: number
    }>
  } | null>(null)

  // Process a single message (both real-time and historical)
  const processMessage = useCallback((message: any) => {
    if (message.type === 'betting_open') {
      // Extract the betting data (everything except the type field)
      const { type, ...bettingData } = message
      setCurrentRace(bettingData)
      setBettingStatus('open')
    }
  }, [setBettingStatus])
  const stake = 5

  // Function to add wager to a horse
  const addWagerToHorse = useCallback((horseNumber, amount) => {
    setTotalWagers(prev => {
      const newWagers = new Map(prev)
      const currentAmount = newWagers.get(horseNumber) || 0
      newWagers.set(horseNumber, currentAmount + amount)
      return newWagers
    })
    
    // Trigger pulse animation
    setPulsatingHorse(horseNumber)
    setTimeout(() => setPulsatingHorse(null), 600) // Clear after animation duration
  }, [])

  useEffect(() => {
    if (!chat) return
    
    // Fetch ALL message history when component loads
    const fetchAllMessages = async () => {
      try {
        let allMessages: any[] = []
        let batchCount = 0
        let startTimetoken: string | undefined = undefined
        
        while (true) {
          batchCount++
          
          // Build fetch parameters
          const fetchParams: any = {
            channels: [bettingChannelId],
            count: 20
          }
          
          // Add start timetoken if we have one (for pagination)
          if (startTimetoken) {
            fetchParams.start = startTimetoken
          }
          
          // Fetch messages
          const result = await chat.sdk.fetchMessages(fetchParams)
          const messages = result.channels[bettingChannelId] || []
          
          // Add messages to our collection
          allMessages = [...allMessages, ...messages]
          
          // Check stopping condition: fewer than 20 messages returned
          if (messages.length < 20) {
            break
          }
          
          // Set start timetoken to the oldest message's timetoken for next iteration
          startTimetoken = messages[0].timetoken
        }
        
        console.log(`Betting channel history contains ${allMessages.length} messages (fetched across ${batchCount} batches)`)
        
        // Process all historical messages in chronological order (oldest to newest)
        const sortedMessages = allMessages.sort((a, b) => parseInt(a.timetoken) - parseInt(b.timetoken))
        sortedMessages.forEach(messageEvent => {
          processMessage(messageEvent.message)
        })
        
      } catch (error) {
        console.error('Error fetching betting channel history:', error)
      }
    }
    
    fetchAllMessages()
    
    const subscriptionSet = chat.sdk.subscriptionSet({
      channels: [
        bettingChannelId,
      ]
    })
    subscriptionSet.onMessage = messageEvent => {
      if (messageEvent.channel == bettingChannelId) {
        //  New message in the betting channel
        processMessage(messageEvent.message)
      }
    }
    subscriptionSet.subscribe()
    return () => {
      subscriptionSet.unsubscribe()
    }
  }, [chat, processMessage])

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
        totalWagers={totalWagers}
        addWagerToHorse={addWagerToHorse}
        pulsatingHorse={pulsatingHorse}
        stake={stake}
        currentRace={currentRace}
        chat={chat}
      />
    </div>
  )
}

// Memoized BettingDashboard component to prevent unnecessary re-renders
const BettingDashboard = memo(function BettingDashboard ({
  bettingStatus,
  setBettingStatus,
  raceResults,
  selectedOdds,
  setSelectedOdds,
  selectedEW,
  setSelectedEW,
  totalWagers,
  addWagerToHorse,
  pulsatingHorse,
  stake,
  currentRace,
  chat
}: {
  bettingStatus: string
  setBettingStatus: (status: string) => void
  raceResults: number[]
  selectedOdds: Set<number>
  setSelectedOdds: (odds: Set<number>) => void
  selectedEW: Set<number>
  setSelectedEW: (ew: Set<number>) => void
  totalWagers: Map<number, number>
  addWagerToHorse: (horseNumber: number, amount: number) => void
  pulsatingHorse: number | null
  stake: number
  currentRace: {
    title: string
    stake: number
    horses: Array<{
      number: number
      name: string
      trainer: string
      jockey: string
      age: number
      weight: number
      odds: number
    }>
  } | null
  chat: any
}) {

  // Convert pounds to stone and pounds
  const convertWeight = useCallback((pounds) => {
    const stone = Math.floor(pounds / 14)
    const remainingPounds = pounds % 14
    return `${stone}st ${remainingPounds}lbs`
  }, [])

  // Get jersey silk image by number
  const getSilkImage = useCallback((number) => {
    const silkIndex = number - 1 // Convert to 0-based index
    return jerseySilks[silkIndex] || jerseySilks[0] // Fallback to first silk if not found
  }, [])

  const toggleOdds = useCallback((number) => {
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
  }, [selectedOdds, selectedEW, setSelectedOdds, setSelectedEW])

  const toggleEW = useCallback((number) => {
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
  }, [selectedOdds, selectedEW, setSelectedOdds, setSelectedEW])

  // Calculate wager amount based on selected options
  const calculateWager = useCallback((horseNumber) => {
    let wager = 0
    if (selectedOdds.has(horseNumber)) wager += stake
    if (selectedEW.has(horseNumber)) wager += stake
    return wager > 0 ? `£${wager}` : ''
  }, [selectedOdds, selectedEW, stake])

  // Calculate potential winnings for a horse (assuming it wins)
  const calculateHorseWinnings = useCallback((horse, placeOnly = false) => {
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
  }, [selectedOdds, selectedEW, stake])

  // Check if a wager is won based on race results
  const isWagerWon = useCallback((horse) => {
    if (bettingStatus !== 'results') return false
    
    // Win bet: horse finished first and odds button was pressed
    const wonOnOdds = selectedOdds.has(horse.number) && horse.number === raceResults[0]
    
    // Each way bet: horse finished in top 3 and EW button was pressed
    const wonOnEW = selectedEW.has(horse.number) && raceResults.includes(horse.number)
    
    return wonOnOdds || wonOnEW
  }, [bettingStatus, selectedOdds, selectedEW, raceResults])

  // Get total wager amount for a horse
  const getTotalWager = useCallback((horseNumber) => {
    const amount = totalWagers.get(horseNumber) || 0
    return amount > 0 ? `£${amount}` : ''
  }, [totalWagers])

  // Memoize position styling function
  const getPositionStyling = useCallback((horseNumber) => {
    if (bettingStatus !== 'results') return 'hover:bg-gray-50'
    
    if (horseNumber === raceResults[0]) {
      // 1st place - Gold
      return 'bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-lg border border-yellow-300'
    } else if (horseNumber === raceResults[1]) {
      // 2nd place - Silver
      return 'bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg border border-gray-300'
    } else if (horseNumber === raceResults[2]) {
      // 3rd place - Bronze
      return 'bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg border border-orange-300'
    }
    return 'hover:bg-gray-50'
  }, [bettingStatus, raceResults])



    return (
      <div className='text-base font-normal py-3'>
      
      {/* Table Heading */}
      <div className='flex justify-between items-center mb-4'>
        <div className='flex items-center gap-3'>
          <h3 className='text-lg font-semibold text-gray-800'>{currentRace?.title}</h3>
          <div className='flex gap-2'>
            <button
              onClick={() => {
                if (chat) {
                  chat.sdk.publish({
                    message: {
                      type: 'betting_open',
                      title: "Race 1",
                      stake: 5,
                      horses: [
                        {
                          number: 1,
                          name: 'Horse Name',
                          trainer: 'Trainer Name',
                          jockey: 'Jockey Name',
                          age: 2,
                          weight: 133,
                          odds: 11.00
                        },
                        {
                          number: 2,
                          name: 'Another Horse Name',
                          trainer: 'Another Trainer Name',
                          jockey: 'Another Jockey Name',
                          age: 2,
                          weight: 135,
                          odds: 2.5
                        },
                        {
                          number: 3,
                          name: 'Another Horse Name',
                          trainer: 'Another Trainer Name',
                          jockey: 'Another Jockey Name',
                          age: 2,
                          weight: 135,
                          odds: 2.5
                        },
                        {
                          number: 4,
                          name: 'Another Horse Name',
                          trainer: 'Another Trainer Name',
                          jockey: 'Another Jockey Name',
                          age: 2,
                          weight: 135,
                          odds: 2.5
                        },
                        {
                          number: 5,
                          name: 'Another Horse Name',
                          trainer: 'Another Trainer Name',
                          jockey: 'Another Jockey Name',
                          age: 2,
                          weight: 135,
                          odds: 2.5
                        }
                      ]
                    },
                    channel: bettingChannelId
                  })
                }
              }}
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
            <button
              onClick={() => addWagerToHorse(1, 10)}
              className='px-3 py-1 text-xs font-medium bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors'
            >
              Add £10 to Horse 1
            </button>
            <button
              onClick={() => addWagerToHorse(3, 10)}
              className='px-3 py-1 text-xs font-medium bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors'
            >
              Add £10 to Horse 3
            </button>
            <button
              onClick={() => {
                if (chat) {
                  chat.sdk.deleteMessages({
                    channel: bettingChannelId
                  })
                }
              }}
              className='px-3 py-1 text-xs font-medium bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors'
            >
              Clear History
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
              <th className='px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>Total Wager</th>
              
              {/* Desktop Separate Betting Headers */}
              <th className='px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell'>Odds</th>
              <th className='px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell'>Each Way</th>
              
              {/* Mobile Combined Betting Header */}
              <th className='px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider sm:hidden'>Betting</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {currentRace?.horses.map((horse) => (
              <tr key={horse.number} className={`transition-colors ${getPositionStyling(horse.number)}`}>
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
                <td className='px-3 py-4 text-center'>
                  <div className={`text-sm font-medium text-gray-900 ${
                    pulsatingHorse === horse.number 
                      ? 'animate-wager-pulse text-blue-600 font-bold' 
                      : ''
                  }`}>
                    {getTotalWager(horse.number)}
                  </div>
                </td>
                
                {/* Desktop Separate Buttons */}
                {/* Odds Button */}
                <td className='px-3 py-4 hidden sm:table-cell'>
                  <div className='flex justify-center'>
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
                  </div>
                </td>
                
                {/* Each Way Button */}
                <td className='px-3 py-4 hidden sm:table-cell'>
                  <div className='flex justify-center'>
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
                  </div>
                </td>
                
                {/* Mobile Stacked Buttons */}
                <td className='px-3 py-4 sm:hidden'>
                  <div className='flex flex-col gap-2 items-center'>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
})
