'use client'

import { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX, Maximize2, Play, Pause, Film, Sparkles } from 'lucide-react'

export interface CinematicVideoProps {
  src: string
  poster: string
  title?: string
  subtitle?: string
  badge?: string
  className?: string
  aspectRatio?: string
  overlayGlow?: boolean
  showControls?: boolean
}

export function CinematicVideo({
  src,
  poster,
  title,
  subtitle,
  badge,
  className = '',
  overlayGlow = true,
  showControls = true,
}: CinematicVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  // Ensure autoplay starts reliably on mount
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Explicitly set muted property to bypass browser autoplay policy
    video.muted = true
    setIsMuted(true)

    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true)
        })
        .catch(() => {
          // Fallback: wait for user gesture or retry muted
          video.muted = true
          video.play().catch(() => {})
        })
    }
  }, [src])

  const toggleMute = () => {
    if (!videoRef.current) return
    const nextMuted = !videoRef.current.muted
    videoRef.current.muted = nextMuted
    setIsMuted(nextMuted)
  }

  const togglePlay = () => {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {})
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const handleFullscreen = () => {
    if (!containerRef.current) return
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {})
    } else {
      containerRef.current.requestFullscreen().catch(() => {})
    }
  }

  return (
    <div className={`relative w-full ${className}`} ref={containerRef}>
      {/* Ambient background radiance */}
      {overlayGlow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-primary/15 via-[#e6c887]/15 to-primary/10 blur-2xl dark:from-primary/10 dark:via-[#e6c887]/10 dark:to-transparent"
        />
      )}

      {/* Double-Bezel Hardware Enclosure */}
      <div className="group relative rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 bg-[#e6c887]/25 dark:bg-white/[0.05] border border-[#e6c887]/35 dark:border-white/10 shadow-2xl transition-all duration-500 overflow-hidden">
        {/* Inner Core: Concentric Rounded Screen */}
        <div className="relative rounded-[calc(1rem-2px)] sm:rounded-[calc(1.5rem-2px)] overflow-hidden bg-black aspect-video flex items-center justify-center">
          {/* HTML5 Standard Video */}
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedData={() => setIsLoaded(true)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="w-full h-auto aspect-video object-cover select-none pointer-events-auto transition-transform duration-700 ease-out group-hover:scale-[1.01]"
          />

          {/* Top Header Badge Overlay */}
          <div className="absolute top-2.5 sm:top-4 left-2.5 sm:left-4 z-20 flex items-center gap-2 pointer-events-none">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider shadow-lg">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>{badge || '720P HD LIVE'}</span>
            </div>
            {title && (
              <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full bg-[#072018]/80 backdrop-blur-md border border-[#e6c887]/40 text-[#e6c887] text-[10px] sm:text-[11px] font-serif font-semibold tracking-wide shadow-lg">
                {title}
              </span>
            )}
          </div>

          {/* Bottom Floating Control Bar */}
          {showControls && (
            <div className="absolute bottom-2.5 sm:bottom-4 inset-x-2.5 sm:inset-x-4 z-20 flex items-center justify-between gap-3 pointer-events-none">
              {/* Left: Video Subtitle / Caption */}
              <div className="min-w-0 pointer-events-auto">
                {subtitle && (
                  <p className="text-[11px] sm:text-xs text-white/90 font-sans font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] truncate max-w-[200px] sm:max-w-md">
                    {subtitle}
                  </p>
                )}
              </div>

              {/* Right: Sound & Fullscreen Controls */}
              <div className="flex items-center gap-1.5 sm:gap-2 pointer-events-auto shrink-0">
                {/* Play/Pause Button */}
                <button
                  type="button"
                  onClick={togglePlay}
                  className="size-7 sm:size-8 rounded-full bg-black/65 hover:bg-black/85 backdrop-blur-md border border-white/20 hover:border-white/40 text-white flex items-center justify-center transition-all active:scale-95 shadow-lg cursor-pointer"
                  title={isPlaying ? 'Tạm dừng video' : 'Tiếp tục phát'}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="size-3.5" /> : <Play className="size-3.5 fill-current ml-0.5" />}
                </button>

                {/* Sound Unmute/Mute Toggle */}
                <button
                  type="button"
                  onClick={toggleMute}
                  className="size-7 sm:size-8 rounded-full bg-black/65 hover:bg-black/85 backdrop-blur-md border border-white/20 hover:border-[#e6c887]/60 text-white hover:text-[#e6c887] flex items-center justify-center transition-all active:scale-95 shadow-lg cursor-pointer group/sound"
                  title={isMuted ? 'Bật âm thanh' : 'Tắt tiếng'}
                  aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
                >
                  {isMuted ? (
                    <VolumeX className="size-3.5 text-white/80 group-hover/sound:text-white" />
                  ) : (
                    <Volume2 className="size-3.5 text-[#e6c887]" />
                  )}
                </button>

                {/* Fullscreen Toggle */}
                <button
                  type="button"
                  onClick={handleFullscreen}
                  className="hidden sm:flex size-8 rounded-full bg-black/65 hover:bg-black/85 backdrop-blur-md border border-white/20 hover:border-white/40 text-white items-center justify-center transition-all active:scale-95 shadow-lg cursor-pointer"
                  title="Phóng to toàn màn hình"
                  aria-label="Fullscreen"
                >
                  <Maximize2 className="size-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
