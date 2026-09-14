'use client'

import { useRef, useState, useEffect, useCallback, useMemo } from 'react'
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { SectionHeading } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function News() {
  const { t, theme, locale } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  const posts = useMemo(() => t.news.posts || [], [t.news.posts])
  const totalPosts = posts.length

  // Extended posts: 3 sets (Set 0, Set 1 [main], Set 2) for seamless infinite looping
  const extendedPosts = useMemo(() => {
    if (totalPosts === 0) return []
    return [...posts, ...posts, ...posts]
  }, [posts, totalPosts])

  // Center on Set 1 (index = totalPosts)
  const [currentIndex, setCurrentIndex] = useState(totalPosts)
  const [withTransition, setWithTransition] = useState(false)
  const [cardWidth, setCardWidth] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [hasDragged, setHasDragged] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  // Touch and drag refs
  const touchStartX = useRef<number | null>(null)
  const touchDeltaX = useRef<number>(0)
  const mouseStartX = useRef<number | null>(null)
  const mouseDeltaX = useRef<number>(0)
  const isMouseDown = useRef(false)

  // Active index normalized to 0..(totalPosts - 1)
  const activeIndex = totalPosts > 0 ? ((currentIndex % totalPosts) + totalPosts) % totalPosts : 0

  // Measure card width accurately with ResizeObserver
  const updateCardWidth = useCallback(() => {
    if (trackRef.current && trackRef.current.firstElementChild) {
      const first = trackRef.current.firstElementChild as HTMLElement
      if (first.offsetWidth > 0) {
        setCardWidth(first.offsetWidth)
      }
    }
  }, [])

  useEffect(() => {
    updateCardWidth()
    const container = containerRef.current
    if (!container) return

    const ro = new ResizeObserver(() => {
      updateCardWidth()
    })
    ro.observe(container)
    window.addEventListener('resize', updateCardWidth)

    // Arm transition after initial paint
    const timer = setTimeout(() => {
      setWithTransition(true)
    }, 120)

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', updateCardWidth)
      clearTimeout(timer)
    }
  }, [updateCardWidth])

  // Reset transition and wrap currentIndex when crossing boundary into Set 0 or Set 2
  const handleTransitionEnd = () => {
    if (totalPosts <= 0) return

    if (currentIndex >= totalPosts * 2) {
      // Reached Set 2 -> snap back to Set 1 without animation
      setWithTransition(false)
      setCurrentIndex(currentIndex - totalPosts)
    } else if (currentIndex < totalPosts) {
      // Reached Set 0 -> snap forward to Set 1 without animation
      setWithTransition(false)
      setCurrentIndex(currentIndex + totalPosts)
    }
  }

  // Re-enable transition after boundary snap
  useEffect(() => {
    if (!withTransition) {
      const raf1 = requestAnimationFrame(() => {
        const raf2 = requestAnimationFrame(() => {
          setWithTransition(true)
        })
        return () => cancelAnimationFrame(raf2)
      })
      return () => cancelAnimationFrame(raf1)
    }
  }, [withTransition])

  const handleNext = useCallback(() => {
    if (totalPosts <= 1) return
    setWithTransition(true)
    setCurrentIndex((prev) => prev + 1)
  }, [totalPosts])

  const handlePrev = useCallback(() => {
    if (totalPosts <= 1) return
    setWithTransition(true)
    setCurrentIndex((prev) => prev - 1)
  }, [totalPosts])

  const handleGoToDot = (dotIdx: number) => {
    if (totalPosts <= 0) return
    setWithTransition(true)
    // Map to Set 1
    setCurrentIndex(totalPosts + dotIdx)
  }

  // Auto-advance every 4.5 seconds, paused on hover or touch
  useEffect(() => {
    if (isHovered || totalPosts <= 1) return
    const interval = setInterval(() => {
      handleNext()
    }, 4500)
    return () => clearInterval(interval)
  }, [handleNext, isHovered, totalPosts])

  // Mobile Touch Gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsHovered(true)
    touchStartX.current = e.touches[0].clientX
    touchDeltaX.current = 0
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current
  }

  const handleTouchEnd = () => {
    if (touchStartX.current !== null) {
      if (touchDeltaX.current < -40) {
        handleNext()
      } else if (touchDeltaX.current > 40) {
        handlePrev()
      }
    }
    touchStartX.current = null
    touchDeltaX.current = 0
    setTimeout(() => setIsHovered(false), 2500)
  }

  // Desktop Mouse Drag Handling
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return
    isMouseDown.current = true
    mouseStartX.current = e.clientX
    mouseDeltaX.current = 0
    setHasDragged(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown.current || mouseStartX.current === null) return
    const diff = e.clientX - mouseStartX.current
    mouseDeltaX.current = diff
    if (Math.abs(diff) > 10) {
      setHasDragged(true)
    }
  }

  const handleMouseUp = () => {
    if (isMouseDown.current) {
      if (mouseDeltaX.current < -50) {
        handleNext()
      } else if (mouseDeltaX.current > 50) {
        handlePrev()
      }
    }
    isMouseDown.current = false
    mouseStartX.current = null
    mouseDeltaX.current = 0
  }

  // 24px gap = 1.5rem (gap-6)
  const gapPx = 24
  const step = cardWidth > 0 ? cardWidth + gapPx : 0

  return (
    <section
      id="tin-tuc"
      className="scroll-mt-24 bg-background py-16 sm:py-20 lg:py-24 transition-colors overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        handleMouseUp()
      }}
    >
      {/* Subtle Ambient Lighting */}
      <div className="pointer-events-none absolute -top-40 right-1/4 size-[500px] rounded-full bg-[#e6c887]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative">
        {/* Header with Title & Desktop Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <SectionHeading
            eyebrow={t.news.eyebrow}
            title={t.news.title}
            subtitle={
              isEn
                ? 'Authoritative coverage and economic analysis from leading national financial press'
                : 'Nhịp đập thị trường & thông tin quy mô từ các đầu báo kinh tế - tài chính hàng đầu'
            }
          />

          {/* Desktop & Tablet Carousel Navigation */}
          <div className="hidden md:flex items-center gap-4 shrink-0 pb-1">
            {/* Slide Index Counter */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/70 dark:border-white/10 bg-card/60 dark:bg-card/40 text-xs font-medium text-muted-foreground backdrop-blur-sm shadow-xs">
              <span className="font-serif font-bold text-foreground text-sm">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <span className="opacity-40">/</span>
              <span>{String(totalPosts).padStart(2, '0')}</span>
            </div>

            {/* Prev / Next Circular Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label={isEn ? 'Previous article' : 'Bài viết trước'}
                className="size-10 rounded-full border border-border/80 dark:border-white/15 bg-card/80 dark:bg-card/60 hover:bg-[#072018] hover:text-[#e6c887] hover:border-[#072018] dark:hover:bg-[#e6c887] dark:hover:text-[#072018] dark:hover:border-[#e6c887] text-foreground flex items-center justify-center transition-all duration-300 shadow-xs active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label={isEn ? 'Next article' : 'Bài viết kế tiếp'}
                className="size-10 rounded-full border border-border/80 dark:border-white/15 bg-card/80 dark:bg-card/60 hover:bg-[#072018] hover:text-[#e6c887] hover:border-[#072018] dark:hover:bg-[#e6c887] dark:hover:text-[#072018] dark:hover:border-[#e6c887] text-foreground flex items-center justify-center transition-all duration-300 shadow-xs active:scale-95 cursor-pointer"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Single Horizontal Fluid Row Carousel Viewport */}
        <div
          ref={containerRef}
          className="relative overflow-hidden -mx-4 px-4 sm:mx-0 sm:px-0 cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: step > 0 ? `translateX(-${currentIndex * step}px)` : 'translateX(0)',
              transition: withTransition
                ? 'transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1)'
                : 'none',
            }}
            className="flex gap-6 pb-4 pt-2 will-change-transform"
          >
            {extendedPosts.map((post, itemIdx) => {
              // The lead card in the current visible window is highlighted
              const isLead = itemIdx === currentIndex

              return (
                <div
                  key={`${post.title}-${itemIdx}`}
                  className="w-[85vw] max-w-[340px] sm:w-[calc(50%-12px)] lg:w-[calc(33.3333%-16px)] shrink-0 h-full select-none"
                >
                  <div
                    className={`h-full rounded-[2rem] p-1.5 transition-all duration-500 ${
                      isLead
                        ? 'border border-[#e6c887]/80 dark:border-[#e6c887]/80 shadow-xl bg-[#e6c887]/10 dark:bg-[#e6c887]/5 scale-[1.01]'
                        : 'border border-border/70 dark:border-white/10 bg-card/40 hover:border-[#e6c887]/40 shadow-sm opacity-90 hover:opacity-100'
                    }`}
                  >
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (hasDragged) {
                          e.preventDefault()
                        }
                      }}
                      aria-label={`${post.title} - ${post.source}`}
                      className="group flex h-[460px] sm:h-[480px] flex-col overflow-hidden rounded-[calc(2rem-0.375rem)] bg-card dark:bg-[#071d15] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    >
                      {/* Image Frame with Badges */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted shrink-0">
                        <img
                          src={post.image || '/placeholder.svg'}
                          alt={post.title}
                          className="size-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                          loading="lazy"
                          draggable={false}
                        />
                        <div className="absolute top-3 left-3 z-10">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold shadow-md backdrop-blur-md transition-colors ${
                              isDark
                                ? 'bg-[#072018]/90 text-[#e6c887] border border-[#e6c887]/30'
                                : 'bg-white/95 text-primary border border-primary/20'
                            }`}
                          >
                            {post.source}
                          </span>
                        </div>
                        <div className="absolute top-3 right-3 z-10">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/65 text-white/95 backdrop-blur-md border border-white/15">
                            {post.date}
                          </span>
                        </div>
                      </div>

                      {/* Card Content Body */}
                      <div className="flex flex-1 flex-col p-5 sm:p-6 justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-[11px] font-bold tracking-[0.16em] uppercase transition-colors ${
                                isDark ? 'text-[#e6c887]' : 'text-[#b88728]'
                              }`}
                            >
                              {post.tag}
                            </span>
                            {isLead && (
                              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#b88728] dark:text-[#e6c887] px-2 py-0.5 rounded-full bg-[#e6c887]/15">
                                <span className="size-1.5 rounded-full bg-[#b88728] dark:bg-[#e6c887] animate-pulse" />
                                {isEn ? 'Highlight' : 'Đặc sắc'}
                              </span>
                            )}
                          </div>

                          <h3 className="mt-2.5 font-serif text-lg sm:text-xl font-bold leading-[1.3] text-balance text-foreground group-hover:text-primary dark:group-hover:text-[#e6c887] transition-colors line-clamp-2">
                            {post.title}
                          </h3>

                          <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                            {post.summary}
                          </p>
                        </div>

                        {/* Footer Link with Arrow */}
                        <div className="mt-5 pt-4 flex items-center justify-between border-t border-border/60 dark:border-white/10">
                          <span
                            className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold transition-colors duration-300 ${
                              isDark
                                ? 'text-[#e6c887] group-hover:text-[#f7e4b5]'
                                : 'text-primary group-hover:text-[#b88728]'
                            }`}
                          >
                            {t.news.readMore}
                            <ExternalLink className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </span>
                          <span className="text-[11px] text-muted-foreground/70 font-medium">
                            {post.source} ↗
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Interactive Bar: Mobile Navigation & Pagination Indicator & CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Mobile Prev / Next Controls */}
          <div className="flex md:hidden items-center justify-between w-full sm:w-auto gap-4">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
              <span className="font-serif font-bold text-foreground text-sm">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <span>/</span>
              <span>{String(totalPosts).padStart(2, '0')}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label={isEn ? 'Previous article' : 'Bài viết trước'}
                className="size-9 rounded-full border border-border/80 dark:border-white/15 bg-card text-foreground flex items-center justify-center active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label={isEn ? 'Next article' : 'Bài viết kế tiếp'}
                className="size-9 rounded-full border border-border/80 dark:border-white/15 bg-card text-foreground flex items-center justify-center active:scale-95 cursor-pointer"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

          {/* Interactive Pagination Indicator Pills (All 6 posts have 1:1 active dot mapping) */}
          <div className="flex items-center justify-center gap-2 mx-auto sm:mx-0">
            {posts.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => handleGoToDot(dotIdx)}
                aria-label={isEn ? `Go to article ${dotIdx + 1}` : `Xem bài viết số ${dotIdx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  dotIdx === activeIndex
                    ? 'w-8 bg-[#b88728] dark:bg-[#e6c887]'
                    : 'w-2 bg-foreground/20 hover:bg-foreground/40 dark:bg-white/20 dark:hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Luxury CTA Button with Button-in-Button */}
          <Link
            href="/tin-tuc"
            className={`group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-lg active:scale-95 ${
              isDark
                ? 'bg-white/10 hover:bg-[#e6c887] text-white hover:text-[#072018] border border-white/15 hover:border-[#e6c887]'
                : 'bg-primary/5 hover:bg-primary text-primary hover:text-white border border-primary/20 hover:border-primary'
            }`}
          >
            <span>{t.news.viewAll}</span>
            <span className="size-7 sm:size-8 rounded-full bg-black/10 dark:bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowRight className="size-3.5 sm:size-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

