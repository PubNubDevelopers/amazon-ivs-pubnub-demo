import { Input } from '@heroui/react'
import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { adminPin, serverVideoControlChannelId, ffmpegStreamFilename, alternativeLanguage } from '../data/constants'
import { howItWorksTranslations, closeGuideTranslations } from '../data/translations'
import { createWorker } from 'tesseract.js'

export default function Header ({
  sideMenuOpen,
  setSideMenuOpen,
  tabletPreview,
  setTabletPreview,
  guidesShown,
  setGuidesShown,
  chat,
  isEnglish,
  useLocalVideo,
  setUseLocalVideo,
  showStreamLatency,
  setShowStreamLatency
}) {
  const [adminModalOpen, setAdminModalOpen] = useState(false)
  const [pinInput, setPinInput] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [pinError, setPinError] = useState('')
  const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'success' | 'error'>('idle')
  const [syncMessage, setSyncMessage] = useState('')
  const [ffmpegStatus, setFfmpegStatus] = useState<'idle' | 'starting' | 'stopping' | 'success' | 'error'>('idle')
  const [ffmpegMessage, setFfmpegMessage] = useState('')
  const [backendDataStatus, setBackendDataStatus] = useState<'idle' | 'starting' | 'stopping' | 'success' | 'error'>('idle')
  const [backendDataMessage, setBackendDataMessage] = useState('')
  const [botChatStatus, setBotChatStatus] = useState<'idle' | 'resuming' | 'pausing' | 'success' | 'error'>('idle')
  const [botChatMessage, setBotChatMessage] = useState('')

  // Get the appropriate translation based on language selection
  const getHowItWorksText = () => {
    if (isEnglish) {
      return howItWorksTranslations['en']
    } else {
      // Use alternative language or fallback to English
      return howItWorksTranslations[alternativeLanguage] || howItWorksTranslations['en']
    }
  }

  const getCloseGuideText = () => {
    if (isEnglish) {
      return closeGuideTranslations['en']
    } else {
      // Use alternative language or fallback to English
      return closeGuideTranslations[alternativeLanguage] || closeGuideTranslations['en']
    }
  }

  const handlePinSubmit = (e) => {
    e.preventDefault()
    if (pinInput === adminPin) {
      setIsAuthenticated(true)
      setPinError('')
    } else {
      setPinError('Invalid PIN. Please try again.')
      setPinInput('')
    }
  }

  const handlePinChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4)
    setPinInput(value)
    setPinError('')
  }

  const closeModal = () => {
    setAdminModalOpen(false)
    // Reset all modal state when closing
    setPinInput('')
    setIsAuthenticated(false)
    setPinError('')
    setSyncStatus('idle')
    setSyncMessage('')
    setFfmpegStatus('idle')
    setFfmpegMessage('')
    setBackendDataStatus('idle')
    setBackendDataMessage('')
    setBotChatStatus('idle')
    setBotChatMessage('')
  }

  const captureVideoScreenshot = async () => {
    setSyncStatus('syncing')
    setSyncMessage('Analyzing video timecode...')
    
    try {
      // Find the video element in the page
      const videoElement = document.querySelector('video') as HTMLVideoElement;
      
      if (!videoElement) {
        setSyncStatus('error')
        setSyncMessage('Video player not found. Please make sure the video is playing.')
        return;
      }

      // Create a canvas element
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        setSyncStatus('error')
        setSyncMessage('Failed to create canvas context for screenshot.')
        return;
      }

      // Set canvas dimensions to match video
      canvas.width = videoElement.videoWidth || videoElement.offsetWidth;
      canvas.height = videoElement.videoHeight || videoElement.offsetHeight;

      // Draw the current video frame to canvas
      ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

      // Extract timecode region (x: 1782 - 1913, y: 1044 to bottom)
      const timecodeRegion = await extractTimecodeRegion(canvas, ctx);
      
      if (timecodeRegion) {
        setSyncStatus('success')
        setSyncMessage(`Stream synchronized successfully! ${timecodeRegion}`)
        
        // Auto-close modal after 2 seconds
        //setTimeout(() => {
        //  closeModal()
        //}, 2000)
      } else {
        setSyncStatus('error')
        setSyncMessage('Failed to extract timecode from video.')
      }
    } catch (error) {
      console.error('Error capturing video screenshot:', error);
      setSyncStatus('error')
      setSyncMessage('Failed to capture screenshot. This might be due to CORS restrictions or video not being ready.')
    }
  };

  const extractTimecodeRegion = async (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    try {
      // Define the timecode region coordinates
      const x = 1782;
      const y = 1044;
      const width = 1913 - 1782; 
      const height = canvas.height - y; // From y position to bottom

      // Ensure coordinates are within canvas bounds
      if (x >= canvas.width || y >= canvas.height) {
        return null;
      }

      // Adjust width and height if they exceed canvas bounds
      const actualWidth = Math.min(width, canvas.width - x);
      const actualHeight = Math.min(height, canvas.height - y);

      // Create a new canvas for the cropped region
      const croppedCanvas = document.createElement('canvas');
      const croppedCtx = croppedCanvas.getContext('2d');
      
      if (!croppedCtx) {
        console.error('Failed to create cropped canvas context');
        return null;
      }

      croppedCanvas.width = actualWidth;
      croppedCanvas.height = actualHeight;

      // Copy the timecode region to the cropped canvas
      const imageData = ctx.getImageData(x, y, actualWidth, actualHeight);
      croppedCtx.putImageData(imageData, 0, 0);

      // Convert cropped canvas to data URL for OCR
      const croppedDataURL = croppedCanvas.toDataURL('image/png');

      // Use Tesseract.js to extract text from the cropped region
      const worker = await createWorker('eng');
      
      // Configure Tesseract for better number/time recognition
      await worker.setParameters({
        tessedit_char_whitelist: '0123456789:',
      });

      const { data: { text } } = await worker.recognize(croppedDataURL);
      await worker.terminate();

      // Clean up the extracted text
      const timecode = text.trim().replace(/\s+/g, '');

      // Parse and convert timecode to milliseconds
      const milliseconds = parseTimecodeToMilliseconds(timecode);
      if (milliseconds !== null) {
        // Publish PubNub message with the extracted timecode
        if (chat) {
          try {
            await chat.sdk.publish({
              message: {
                type: 'SEEK',
                params: { playbackTime: milliseconds }
              },
              channel: serverVideoControlChannelId
            });
          } catch (error) {
            console.error('❌ Failed to publish PubNub message:', error);
          }
        } else {
          console.warn('⚠️ Chat object not available, cannot publish PubNub message');
        }
      }

      return timecode;
    } catch (error) {
      console.error('Error extracting timecode:', error);
      return null;
    }
  };

  const parseTimecodeToMilliseconds = (timecode: string): number | null => {
    try {
      // Expected format: HH:MM:SS:HH (hours:minutes:seconds:hundredths of seconds)
      // or HH:MM:SS (hours:minutes:seconds)
      const parts = timecode.split(':');
      
      if (parts.length < 3 || parts.length > 4) {
        console.error('Invalid timecode format. Expected HH:MM:SS or HH:MM:SS:HH, got:', timecode);
        return null;
      }

      const hours = parseInt(parts[0], 10);
      const minutes = parseInt(parts[1], 10);
      const seconds = parseInt(parts[2], 10);
      const hundredths = parts.length === 4 ? parseInt(parts[3], 10) : 0;

      // Validate ranges
      if (isNaN(hours) || isNaN(minutes) || isNaN(seconds) || (parts.length === 4 && isNaN(hundredths))) {
        console.error('Invalid timecode values. Could not parse numbers from:', timecode);
        return null;
      }

      if (minutes >= 60 || seconds >= 60 || hundredths >= 100) {
        console.error('Invalid timecode ranges. Minutes/seconds should be < 60, hundredths should be < 100:', timecode);
        return null;
      }

      // Convert to milliseconds
      const totalMilliseconds = 
        (hours * 60 * 60 * 1000) +     // hours to milliseconds
        (minutes * 60 * 1000) +        // minutes to milliseconds
        (seconds * 1000) +             // seconds to milliseconds
        (hundredths * 10);             // hundredths of seconds to milliseconds

      return totalMilliseconds;
    } catch (error) {
      console.error('Error parsing timecode:', error);
      return null;
    }
  };

  const startFFmpegStream = async () => {
    setFfmpegStatus('starting')
    setFfmpegMessage('Starting FFmpeg stream...')
    
    try {
      if (chat) {
        await chat.sdk.publish({
          message: {
            type: 'START_FFMPEG_STREAM',
            params: {
              filename: ffmpegStreamFilename
            }
          },
          channel: serverVideoControlChannelId
        });
        
        setFfmpegStatus('idle')
        setFfmpegMessage('Sent command to backend. BROWSER WILL REFRESH! WAIT.')
        
        setTimeout(() => {
          window.location.reload()
        }, 12000)
      } 
    } catch (error) {
      console.error('Error starting FFmpeg stream:', error);
    }
  };

  const stopFFmpegStream = async () => {
    setFfmpegStatus('stopping')
    setFfmpegMessage('Stopping FFmpeg stream...')
    
    try {
      if (chat) {
        await chat.sdk.publish({
          message: {
            type: 'STOP_FFMPEG_STREAM'
          },
          channel: serverVideoControlChannelId
        });
        
        setFfmpegStatus('idle')
        setFfmpegMessage('Sent command to stop FFmpeg stream')
      }
    } catch (error) {
      console.error('Error stopping FFmpeg stream:', error);
    }
  };

  const startBackendData = async () => {
    setBackendDataStatus('starting')
    setBackendDataMessage('Starting backend data generator...')
    
    try {
      if (chat) {
        await chat.sdk.publish({
          message: {
            type: 'START_STREAM'
          },
          channel: serverVideoControlChannelId
        });
        
        setBackendDataStatus('idle')
        setBackendDataMessage('Backend data generator started successfully!')
      }
    } catch (error) {
      console.error('Error starting backend data generator:', error);
      setBackendDataStatus('error')
      setBackendDataMessage('Failed to start backend data generator.')
    }
  };

  const stopBackendData = async () => {
    setBackendDataStatus('stopping')
    setBackendDataMessage('Stopping backend data generator...')
    
    try {
      if (chat) {
        await chat.sdk.publish({
          message: {
            type: 'END_STREAM'
          },
          channel: serverVideoControlChannelId
        });
        
        setBackendDataStatus('idle')
        setBackendDataMessage('Backend data generator stopped successfully!')
      }
    } catch (error) {
      console.error('Error stopping backend data generator:', error);
      setBackendDataStatus('error')
      setBackendDataMessage('Failed to stop backend data generator.')
    }
  };

  const toggleBotChat = async () => {
    setBotChatStatus('resuming')
    setBotChatMessage('Updating bot chat...')
    
    try {
      if (chat) {
        await chat.sdk.publish({
          message: {
            type: 'BOT_CHAT'
          },
          channel: serverVideoControlChannelId
        })
        
        setBotChatStatus('idle')
        setBotChatMessage('Bot chat updated successfully!')
      }
    } catch (error) {
      console.error('Error updating bot chat:', error);
      setBotChatStatus('error')
      setBotChatMessage('Failed to update bot chat.')
    }
  };

  const MenuOpenIcon = props => {
    return (
      <svg
        aria-hidden='true'
        focusable='false'
        height='24'
        role='presentation'
        viewBox='0 0 25 24'
        width='25'
        {...props}
      >
        <path
          d='M3.88672 18H16.8867V16H3.88672V18ZM3.88672 13H13.8867V11H3.88672V13ZM3.88672 6V8H16.8867V6H3.88672ZM21.8867 15.59L18.3067 12L21.8867 8.41L20.4767 7L15.4767 12L20.4767 17L21.8867 15.59Z'
          fill='currentColor'
        />
      </svg>
    )
  }

  const CogIcon = props => {
    return (
      <svg
        aria-hidden='true'
        focusable='false'
        height='24'
        role='presentation'
        viewBox='0 0 24 24'
        width='24'
        {...props}
      >
        <path
          d='M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z'
          fill='currentColor'
        />
      </svg>
    )
  }

  const PhoneIcon = props => {
    return (
      <svg
        aria-hidden='true'
        focusable='false'
        height='24'
        role='presentation'
        viewBox='0 0 24 24'
        width='24'
        {...props}
      >
        <path
          d='M16 1H8C6.62 1 5.5 2.12 5.5 3.5V20.5C5.5 21.88 6.62 23 8 23H16C17.38 23 18.5 21.88 18.5 20.5V3.5C18.5 2.12 17.38 1 16 1ZM12 22C11.17 22 10.5 21.33 10.5 20.5C10.5 19.67 11.17 19 12 19C12.83 19 13.5 19.67 13.5 20.5C13.5 21.33 12.83 22 12 22ZM16.5 18H7.5V4H16.5V18Z'
          fill='currentColor'
        />
      </svg>
    )
  }

  const TabletIcon = props => {
    return (
      <svg
        aria-hidden='true'
        focusable='false'
        height='24'
        role='presentation'
        viewBox='0 0 24 24'
        width='24'
        {...props}
      >
        <path
          d='M21 4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H21C22.1 20 22.99 19.1 22.99 18L23 6C23 4.9 22.1 4 21 4ZM19 18H5V6H19V18Z'
          fill='currentColor'
        />
      </svg>
    )
  }

  const CloseIcon = props => {
    return (
      <svg
        aria-hidden='true'
        focusable='false'
        height='14px'
        role='presentation'
        viewBox='0 0 14 14'
        width='14px'
        {...props}
      >
        <path
          d='M1 13L13 1M1 1L13 13'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    )
  }

  return (
    <>
      <div className='flex flex-row w-full justify-between h-[92px] select-none fixed items-center px-6 bg-navy900'>
        <div className='flex flex-row gap-6 items-center'>
          <div className='hidden sm:flex bg-white h-[52px] rounded-lg place-content-center p-3'>
            <Image
              src='./pubnub-logos/pubnub.svg'
              alt='Company Logo'
              width={97.49}
              height={28.6}
              className='max-h-[30px] max-w-[100px]'
              unoptimized={true}
              priority
            />
          </div>
          {/*<div
            className={`flex h-11 w-11 border-1 hover:bg-navy800 border-brandAccent3 shadow-sm items-center justify-center rounded-md text-neutral50 cursor-pointer`}
            onClick={e => {
              setSideMenuOpen(!sideMenuOpen)
              e.stopPropagation()
            }}
          >
            <MenuOpenIcon />
          </div>*/}
          <div
            className={`hidden sm:flex h-11 w-11 border-1 hover:bg-navy800 border-brandAccent3 shadow-sm items-center justify-center rounded-md text-neutral50 cursor-pointer`}
            onClick={e => {
              setAdminModalOpen(true)
              e.stopPropagation()
            }}
          >
            <CogIcon />
          </div>
        </div>
        <div className='text-navy100 font-bold text-2xl'>
          Amazon IVS + PubNub Demo
        </div>
        <div className='flex flex-row gap-4'>
          {/*<div className='flex flex-row'>
            <div
              className={`flex h-11 w-[58px] border-1 hover:bg-navy700 ${
                !tabletPreview
                  ? 'bg-navy700 border-brandAccent3'
                  : 'border-navy600'
              } shadow-sm items-center justify-center rounded-l-md text-neutral200 cursor-pointer`}
              onClick={(e) => {
                setTabletPreview(false)
                e.stopPropagation()
              }}
            >
              <PhoneIcon />
            </div>{' '}
            <div
              className={`flex h-11 w-[58px] border-1 hover:bg-navy700 ${
                tabletPreview
                  ? 'bg-navy700 border-brandAccent3'
                  : 'border-navy600'
              } shadow-sm items-center justify-center rounded-r-md text-neutral200 cursor-pointer`}
              onClick={(e) => {
                setTabletPreview(true)
                e.stopPropagation()
              }}
            >
              <TabletIcon />
            </div>
          </div>*/}
          <div
            className='hidden sm:flex flex-row gap-2 h-11 rounded-md border-1 border-brandAccent3 px-4 py-2 hover:bg-navy800 shadow-[0px_4px_18px_0px_rgba(88,_156,_255,_0.8)] text-neutral50 items-center cursor-pointer'
            onClick={e => {
              setGuidesShown(!guidesShown)
              e.stopPropagation()
            }}
          >
            {guidesShown && <CloseIcon />}
            {!guidesShown ? getHowItWorksText() : getCloseGuideText()}
          </div>
        </div>
      </div>

      {/* Admin Settings Modal */}
      {adminModalOpen && (
        <div 
          className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center'
          onClick={closeModal}
        >
          <div 
            className='bg-white rounded-lg shadow-xl p-6 w-[600px] max-w-[90vw] max-h-[90vh] overflow-auto'
            onClick={e => e.stopPropagation()}
          >
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-xl font-bold text-gray-900'>Admin Settings</h2>
              <button
                onClick={closeModal}
                className='text-gray-400 hover:text-gray-600 transition-colors'
              >
                <CloseIcon />
              </button>
            </div>
            
            {/* Modal content */}
            {!isAuthenticated ? (
              <div>
                <p className='text-gray-600 mb-4'>Only used for the hosted demo - If you are building this app yourself, follow the instructions in the ReadMe (start IVS stream, then start the project backend script)</p>
                <p className='text-gray-600 mb-4'>Enter your 4-digit admin PIN to access settings:</p>
                <form onSubmit={handlePinSubmit} className='space-y-4'>
                  <div>
                    <input
                      type='password'
                      value={pinInput}
                      onChange={handlePinChange}
                      placeholder='Enter PIN'
                      className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-lg tracking-widest'
                      maxLength={4}
                      autoFocus
                    />
                    {pinError && (
                      <p className='text-red-500 text-sm mt-2'>{pinError}</p>
                    )}
                  </div>
                  <button
                    type='submit'
                    disabled={pinInput.length !== 4}
                    className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors'
                  >
                    Submit PIN
                  </button>
                </form>
              </div>
            ) : (
              <div className='space-y-6'>
                {/* Video Source Selection Section */}
                <div>
                  <h2 className='text-xl font-bold text-gray-900 mb-4'>Video Source</h2>
                  <p className='text-gray-600 text-sm mb-3'>Choose between live streamed video or local video playback</p>
                  
                  <div className='flex space-x-2'>
                    <button
                      onClick={() => setUseLocalVideo(false)}
                      className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                        !useLocalVideo 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      Streamed Video (IVS)
                    </button>
                    <button
                      onClick={() => setUseLocalVideo(true)}
                      className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                        useLocalVideo 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      Local Video
                    </button>
                  </div>
                  
                  <p className='text-gray-500 text-xs mt-2 text-center'>
                    Currently: {useLocalVideo ? 'Local Video (users can select their own files)' : 'Streamed Video via AWS IVS'}
                  </p>
                </div>

                {/* Backend Generator Controls Section */}
                <div>
                  <h2 className='text-xl font-bold text-gray-900 mb-4'>Backend Generator Controls</h2>
                  
                  {/* Data Generator Subsection */}
                  <div className='mb-4'>
                    <h3 className='text-lg font-semibold text-gray-900 mb-2'>Data Generator</h3>
                    <p className='text-gray-600 text-sm mb-3'>Start or stop sending commentary, betting updates, and bot chat</p>
                    {backendDataStatus === 'idle' && (
                      <div className='space-y-3'>
                        <div className='flex space-x-2'>
                          <button
                            onClick={startBackendData}
                            className='flex-1 bg-green-300 text-green-800 py-2 px-4 rounded-md hover:bg-green-400 transition-colors'
                          >
                            Start Backend Data
                          </button>
                          <button
                            onClick={stopBackendData}
                            className='flex-1 bg-red-200 text-red-800 py-2 px-4 rounded-md hover:bg-red-300 transition-colors'
                          >
                            Stop Backend Data
                          </button>
                        </div>
                        {backendDataMessage && (
                          <p className='text-green-600 text-center'>{backendDataMessage}</p>
                        )}
                      </div>
                    )}
                    
                    {backendDataStatus === 'starting' && (
                      <div className='space-y-3'>
                        <button
                          disabled
                          className='w-full bg-gray-400 text-white py-2 px-4 rounded-md cursor-not-allowed'
                        >
                          Starting...
                        </button>
                        <p className='text-blue-600 text-center'>{backendDataMessage}</p>
                      </div>
                    )}
                    
                    {backendDataStatus === 'stopping' && (
                      <div className='space-y-3'>
                        <button
                          disabled
                          className='w-full bg-gray-400 text-white py-2 px-4 rounded-md cursor-not-allowed'
                        >
                          Stopping...
                        </button>
                        <p className='text-blue-600 text-center'>{backendDataMessage}</p>
                      </div>
                    )}
                    
                    
                    {backendDataStatus === 'error' && (
                      <div className='space-y-3'>
                        <div className='flex space-x-2'>
                          <button
                            onClick={startBackendData}
                            className='flex-1 bg-green-300 text-green-800 py-2 px-4 rounded-md hover:bg-green-400 transition-colors'
                          >
                            Start Backend Data
                          </button>
                          <button
                            onClick={stopBackendData}
                            className='flex-1 bg-red-200 text-red-800 py-2 px-4 rounded-md hover:bg-red-300 transition-colors'
                          >
                            Stop Backend Data
                          </button>
                        </div>
                        <p className='text-red-600 text-center'>{backendDataMessage}</p>
                      </div>
                    )}
                  </div>

                  {/* Stream Control Subsection - Only show when using streamed video */}
                  {!useLocalVideo && (
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Stream Control</h3>
                      <p className='text-gray-600 text-sm mb-3'>Start or stop streaming the live streamed video over AWS IVS</p>
                      {ffmpegStatus === 'idle' && (
                        <div className='space-y-3'>
                          <div className='flex space-x-2'>
                            <button
                              onClick={startFFmpegStream}
                              className='flex-1 bg-green-300 text-green-800 py-2 px-4 rounded-md hover:bg-green-400 transition-colors'
                            >
                              Start FFmpeg Stream
                            </button>
                            <button
                              onClick={stopFFmpegStream}
                              className='flex-1 bg-red-200 text-red-800 py-2 px-4 rounded-md hover:bg-red-300 transition-colors'
                            >
                              Stop FFmpeg Stream
                            </button>
                          </div>
                          {ffmpegMessage && (
                            <p className='text-green-600 text-center'>{ffmpegMessage}</p>
                          )}
                        </div>
                      )}
                      
                      {ffmpegStatus === 'starting' && (
                        <div className='space-y-3'>
                          <button
                            disabled
                            className='w-full bg-gray-400 text-white py-2 px-4 rounded-md cursor-not-allowed'
                          >
                            Starting...
                          </button>
                          <p className='text-blue-600 text-center'>{ffmpegMessage}</p>
                        </div>
                      )}
                      
                      {ffmpegStatus === 'stopping' && (
                        <div className='space-y-3'>
                          <button
                            disabled
                            className='w-full bg-gray-400 text-white py-2 px-4 rounded-md cursor-not-allowed'
                          >
                            Stopping...
                          </button>
                          <p className='text-blue-600 text-center'>{ffmpegMessage}</p>
                        </div>
                      )}
                      
                    </div>
                  )}


                  {/* Bot Chat Subsection */}
                  <div className='mt-4'>
                    <h3 className='text-lg font-semibold text-gray-900 mb-2'>Bot Chat</h3>
                    <p className='text-gray-600 text-sm mb-3'>Pause or resume bot chat in the public channel</p>
                    {botChatStatus === 'idle' && (
                      <div className='space-y-3'>
                        <button
                          onClick={toggleBotChat}
                          className='w-full bg-blue-300 text-blue-800 py-2 px-4 rounded-md hover:bg-blue-400 transition-colors'
                        >
                          Slow / Speed up Bot Chat
                        </button>
                        {botChatMessage && (
                          <p className='text-green-600 text-center'>{botChatMessage}</p>
                        )}
                      </div>
                    )}
                    
                    {botChatStatus === 'resuming' && (
                      <div className='space-y-3'>
                        <button
                          disabled
                          className='w-full bg-gray-400 text-white py-2 px-4 rounded-md cursor-not-allowed'
                        >
                          Updating...
                        </button>
                        <p className='text-blue-600 text-center'>{botChatMessage}</p>
                      </div>
                    )}
                    
                    {botChatStatus === 'error' && (
                      <div className='space-y-3'>
                        <button
                          onClick={toggleBotChat}
                          className='w-full bg-blue-300 text-blue-800 py-2 px-4 rounded-md hover:bg-blue-400 transition-colors'
                        >
                          Slow / Speed up Bot Chat
                        </button>
                        <p className='text-red-600 text-center'>{botChatMessage}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Synchronization Section */}
                <div>
                  <h2 className='text-xl font-bold text-gray-900 mb-2'>Synchronization</h2>
                  <p className='text-gray-600 text-sm mb-4'>Synchronize the backend data with the video stream (requires backend to be started and the stream to be started, and visible)</p>
                  
                  {syncStatus === 'idle' && (
                    <button
                      onClick={captureVideoScreenshot}
                      className='w-full bg-blue-300 text-blue-800 py-2 px-4 rounded-md hover:bg-blue-400 transition-colors mb-4'
                    >
                      Sync video to data
                    </button>
                  )}
                  
                  {syncStatus === 'syncing' && (
                    <div className='space-y-3 mb-4'>
                      <button
                        disabled
                        className='w-full bg-gray-400 text-white py-2 px-4 rounded-md cursor-not-allowed'
                      >
                        Syncing...
                      </button>
                      <p className='text-blue-600 text-center'>{syncMessage}</p>
                    </div>
                  )}
                  
                  {syncStatus === 'success' && (
                    <div className='space-y-3 mb-4'>
                      <div className='w-full bg-green-600 text-white py-2 px-4 rounded-md text-center'>
                        ✓ Success
                      </div>
                      <p className='text-green-600 text-center'>{syncMessage}</p>
                    </div>
                  )}
                  
                  {syncStatus === 'error' && (
                    <div className='space-y-3 mb-4'>
                      <button
                        onClick={captureVideoScreenshot}
                        className='w-full bg-green-300 text-green-800 py-2 px-4 rounded-md hover:bg-green-400 transition-colors'
                      >
                        Retry Sync
                      </button>
                      <p className='text-red-600 text-center'>{syncMessage}</p>
                    </div>
                  )}
                  
                  <div>
                    <label className='flex items-center space-x-2'>
                      <input
                        type='checkbox'
                        checked={showStreamLatency}
                        onChange={(e) => setShowStreamLatency(e.target.checked)}
                        className='rounded border-gray-300 text-blue-600 focus:ring-blue-500'
                      />
                      <span className='text-gray-700'>Show stream latency</span>
                    </label>
                    <p className='text-gray-500 text-xs mt-1'>Displays a latency overlay on the video stream</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
