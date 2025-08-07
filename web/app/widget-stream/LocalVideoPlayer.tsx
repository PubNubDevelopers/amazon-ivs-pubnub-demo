'use client'

import { useEffect, useRef, forwardRef } from 'react'
import { backupVideoFilename } from '../data/constants'

interface LocalVideoPlayerProps {
  muted: boolean
  setIsVideoPlaying: (isVideoPlaying: boolean) => void
}

interface LocalVideoPlayerRef {
  seekTo: (seconds: number, type?: string) => void
  getCurrentTime: () => number
  getDuration: () => number
  getInternalPlayer: () => any
  getSyncTime?: () => number
}

const LocalVideoPlayer = forwardRef<LocalVideoPlayerRef, LocalVideoPlayerProps>((props, ref) => {
  const { muted, setIsVideoPlaying } = props
  const videoRef = useRef<HTMLVideoElement>(null)

  // Initialize local video player
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current
      
      // Set up event listeners
      const handleLoadedData = () => {
        setIsVideoPlaying(true)
      }

      const handlePlay = () => {
        setIsVideoPlaying(true)
      }

      const handlePause = () => {
        // Don't set to false since we want continuous playback
      }

      const handleEnded = () => {
        // Video will loop automatically, keep playing state true
      }

      const handleError = (error: any) => {
        console.error('Local video error:', error)
        setIsVideoPlaying(false)
      }

      // Add event listeners
      video.addEventListener('loadeddata', handleLoadedData)
      video.addEventListener('play', handlePlay)
      video.addEventListener('pause', handlePause)
      video.addEventListener('ended', handleEnded)
      video.addEventListener('error', handleError)

      // Cleanup
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData)
        video.removeEventListener('play', handlePlay)
        video.removeEventListener('pause', handlePause)
        video.removeEventListener('ended', handleEnded)
        video.removeEventListener('error', handleError)
      }
    }
  }, [setIsVideoPlaying])

  // Handle muted state changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted
    }
  }, [muted])

  // Expose player methods via ref (to match IVS Player interface)
  useEffect(() => {
    if (ref && typeof ref !== 'function') {
      ref.current = {
        seekTo: (seconds: number) => {
          if (videoRef.current) {
            videoRef.current.currentTime = seconds
          }
        },
        getCurrentTime: () => {
          return videoRef.current?.currentTime || 0
        },
        getDuration: () => {
          return videoRef.current?.duration || 0
        },
        getInternalPlayer: () => {
          return videoRef.current
        },
        getSyncTime: () => {
          return videoRef.current?.currentTime || 0
        }
      }
    }
  })

  return (
    <div 
      style={{ 
        position: 'relative',
        backgroundColor: '#000'
      }}
    >
      <video
        ref={videoRef}
        src={`/${backupVideoFilename}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
        autoPlay
        loop
        muted={muted}
        playsInline
        controls={false}
      />
    </div>
  )
})

LocalVideoPlayer.displayName = 'LocalVideoPlayer'

export default LocalVideoPlayer