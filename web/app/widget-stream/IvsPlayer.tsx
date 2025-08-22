'use client'

import { useEffect, useRef, forwardRef } from 'react'

// IVS Player SDK types (will be imported from amazon-ivs-player)
declare global {
  interface Window {
    IVSPlayer: any
  }
}

interface IvsPlayerProps {
  url: string
  controls: boolean
  //width: number
  //height: number
  muted: boolean
  setIsVideoPlaying: (isVideoPlaying: boolean) => void
}

interface IvsPlayerRef {
  seekTo: (seconds: number, type?: string) => void
  getCurrentTime: () => number
  getDuration: () => number
  getInternalPlayer: () => any
  getSyncTime?: () => number
}

const IvsPlayer = forwardRef<IvsPlayerRef, IvsPlayerProps>((props, ref) => {
  const {
    url,
    controls,
    //width,
    //height,
    muted,
    setIsVideoPlaying
  } = props

  const videoRef = useRef<HTMLVideoElement>(null)
  const playerRef = useRef<any>(null)

  // Initialize IVS Player
  useEffect(() => {
    const initializePlayer = async () => {
      try {
        // Only import in browser environment
        if (typeof window === 'undefined') {
          console.warn('IVS Player can only be initialized in browser environment')
          return
        }

        // Import IVS Player SDK - based on AWS documentation
        const IVSPlayerPackage = await import('amazon-ivs-player')
        
        // Check if player is supported
        if (IVSPlayerPackage.isPlayerSupported && videoRef.current && !playerRef.current) {
          // Create IVS Player instance with required WASM file URLs from AWS CDN
          const player = IVSPlayerPackage.create({
            wasmWorker: 'https://player.live-video.net/1.40.0/amazon-ivs-wasmworker.min.js',
            wasmBinary: 'https://player.live-video.net/1.40.0/amazon-ivs-wasmworker.min.wasm'
          })
          playerRef.current = player

          // Attach to video element
          player.attachHTMLVideoElement(videoRef.current)

          // Set up event listeners using correct AWS SDK structure
          player.addEventListener(IVSPlayerPackage.PlayerState.READY, () => {
            console.log('IVS Player ready')
          })

          player.addEventListener(IVSPlayerPackage.PlayerState.PLAYING, () => {
            console.log('IVS Player playing')
          })

          player.addEventListener(IVSPlayerPackage.PlayerState.ENDED, () => {
            console.log('IVS Player ended')
          })

          player.addEventListener(IVSPlayerPackage.PlayerEventType.TIME_UPDATE, (event) => {
            //console.log('Time update:', event)
            // Handle time updates
          })

          player.addEventListener(IVSPlayerPackage.PlayerEventType.BUFFER_UPDATE, () => {
            //console.log('Buffer updated')
            // Handle buffer changes
          })

          player.addEventListener(IVSPlayerPackage.PlayerEventType.QUALITY_CHANGED, (quality) => {
            console.log('Quality changed:', quality)
            // Handle quality changes
          })

          player.addEventListener(IVSPlayerPackage.PlayerEventType.VOLUME_CHANGED, (volume) => {
            console.log('Volume changed:', volume)
            // Handle volume changes
          })

          player.addEventListener(IVSPlayerPackage.PlayerEventType.ERROR, (error) => {
            console.warn('Player error:', error)
            setIsVideoPlaying(false)
            // Handle errors
          })

          // State events
          player.addEventListener(IVSPlayerPackage.PlayerState.BUFFERING, () => {
            console.log('Player is buffering')
            // Show loading indicator
          })

          // Load the stream
          if (url) {
            console.log('IVS Player loading stream:', url)
            player.setAutoplay(true)
            player.load(url)
          }
        } else if (!IVSPlayerPackage.isPlayerSupported) {
          console.warn('IVS Player not supported in this browser')
          // Could show fallback message here
        }
      } catch (error) {
        console.error('Failed to initialize IVS Player:', error)
        // Fallback: show error message in the video container
        if (videoRef.current) {
          videoRef.current.style.backgroundColor = '#f0f0f0'
          const errorDiv = document.createElement('div')
          errorDiv.textContent = 'IVS Player initialization failed - check console for details'
          errorDiv.style.cssText = 'display:flex;align-items:center;justify-content:center;height:100%;color:#666;text-align:center;padding:20px;'
          videoRef.current.parentElement?.appendChild(errorDiv)
        }
      }
    }

    initializePlayer()

    return () => {
      if (playerRef.current) {
        try {
          playerRef.current.delete()
        } catch (e) {
          console.warn('Error cleaning up IVS player:', e)
        }
        playerRef.current = null
      }
    }
  }, [url])


  // Handle muted state changes  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted
    }
  }, [muted])

  

  return (
    <div 
      style={{ 
        //width: `${width}px`, 
        //height: `${height}px`,
        position: 'relative',
        backgroundColor: '#000'
      }}
    >
      <video
        ref={videoRef}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
        controls={controls}
        muted={muted}
        playsInline
      />
    </div>
  )
})

IvsPlayer.displayName = 'IvsPlayer'

export default IvsPlayer 