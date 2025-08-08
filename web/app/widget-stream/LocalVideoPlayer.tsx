'use client'

import { useEffect, useRef, forwardRef, useState, useCallback } from 'react'

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
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [videoSrc, setVideoSrc] = useState<string | null>(null)
  const [isUsingUserFile, setIsUsingUserFile] = useState(false)

  // Supported video formats
  const supportedFormats = ['video/mp4', 'video/webm', 'video/ogg', 'video/quicktime', 'video/avi', 'video/x-msvideo']

  // File validation function
  const validateFile = useCallback((file: File): boolean => {
    return supportedFormats.includes(file.type) || 
           file.name.match(/\.(mp4|webm|ogg|mov|avi)$/i) !== null
  }, [])

  // Handle file selection
  const handleFileSelect = useCallback((file: File) => {
    if (!validateFile(file)) {
      alert('Please select a supported video file (MP4, WebM, OGG, MOV, AVI)')
      return
    }

    // Clean up previous blob URL
    if (isUsingUserFile && videoSrc && videoSrc.startsWith('blob:')) {
      URL.revokeObjectURL(videoSrc)
    }

    setSelectedFile(file)
    const blobUrl = URL.createObjectURL(file)
    setVideoSrc(blobUrl)
    setIsUsingUserFile(true)
  }, [isUsingUserFile, videoSrc, validateFile])

  // Clear video selection
  const clearVideoSelection = useCallback(() => {
    if (isUsingUserFile && videoSrc && videoSrc.startsWith('blob:')) {
      URL.revokeObjectURL(videoSrc)
    }
    setSelectedFile(null)
    setVideoSrc(null)
    setIsUsingUserFile(false)
  }, [isUsingUserFile, videoSrc])


  // File input change handler
  const handleFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFileSelect(file)
    }
  }, [handleFileSelect])

  // Set video playing state based on videoSrc availability
  useEffect(() => {
    if (!videoSrc) {
      setIsVideoPlaying(false)
    }
  }, [videoSrc, setIsVideoPlaying])

  // Cleanup blob URLs on unmount
  useEffect(() => {
    return () => {
      if (isUsingUserFile && videoSrc && videoSrc.startsWith('blob:')) {
        URL.revokeObjectURL(videoSrc)
      }
    }
  }, [isUsingUserFile, videoSrc])

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
      {videoSrc ? (
        <video
          ref={videoRef}
          src={videoSrc}
          key={videoSrc} // Force re-render when source changes
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
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            padding: '40px',
            fontSize: '18px'
          }}
        >
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>🎥</div>
          <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>Select a Local Video File</div>
          <div style={{ marginBottom: '20px', opacity: 0.8, fontSize: '14px' }}>
            Click "Select Local Video" to choose a file
          </div>
          <div style={{ fontSize: '12px', opacity: 0.6 }}>
            Supported formats: MP4, WebM, OGG, MOV, AVI
          </div>
        </div>
      )}
      
      {/* File controls overlay */}
      <div
        style={{
          position: 'absolute',
          top: '8px',
          left: '8px',
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
          zIndex: 5
        }}
      >
        {!videoSrc && (
          <button
            onClick={() => fileInputRef.current?.click()}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '4px',
              fontSize: '12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            📁 Select Local Video
          </button>
        )}

        {videoSrc && selectedFile && (
          <div
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              padding: '8px 12px',
              borderRadius: '4px',
              fontSize: '12px',
              maxWidth: '200px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
          >
            📄 {selectedFile.name}
          </div>
        )}
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="video/*,.mp4,.webm,.ogg,.mov,.avi"
        onChange={handleFileInputChange}
        style={{ display: 'none' }}
      />
    </div>
  )
})

LocalVideoPlayer.displayName = 'LocalVideoPlayer'

export default LocalVideoPlayer