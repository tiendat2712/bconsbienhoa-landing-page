'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Reveal } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export interface AmenityImage {
  id: number
  titleVi: string
  titleEn: string
  category: 'relax' | 'sport'
  src: string
  remoteUrl: string
}

export const AMENITY_LIST: AmenityImage[] = [
  // 1-10: Cảnh quan & thư giãn
  {
    id: 1,
    titleVi: 'Hồ Jacuzzi thư giãn',
    titleEn: 'Jacuzzi Relaxation Pool',
    category: 'relax',
    src: '/images/amenities/amenity-ho-jacuzzi.webp',
    remoteUrl: 'https://bconscentralpark.vn/wp-content/uploads/amenity-ho-jacuzzi.webp',
  },
  {
    id: 2,
    titleVi: 'Dải công viên xanh',
    titleEn: 'Linear Green Park',
    category: 'relax',
    src: '/images/amenities/amenity-dai-cong-vien-xanh.webp',
    remoteUrl: 'https://bconscentralpark.vn/wp-content/uploads/amenity-dai-cong-vien-xanh.webp',
  },
  {
    id: 3,
    titleVi: 'Công viên xanh toàn cảnh',
    titleEn: 'Panoramic Central Park',
    category: 'relax',
    src: '/images/amenities/amenity-cong-vien-xanh-toan-canh.webp',
    remoteUrl: 'https://bconscentralpark.vn/wp-content/uploads/amenity-cong-vien-xanh-toan-canh.webp',
  },
  {
    id: 4,
    titleVi: 'Ban công xanh',
    titleEn: 'Tropical Sky Balcony',
    category: 'relax',
    src: '/images/amenities/amenity-ban-cong-xanh.webp',
    remoteUrl: 'https://bconscentralpark.vn/wp-content/uploads/amenity-ban-cong-xanh.webp',
  },
  {
    id: 5,
    titleVi: 'Cây ước nguyện',
    titleEn: 'Wishing Tree Square',
    category: 'relax',
    src: '/images/amenities/amenity-cay-uoc-nguyen.webp',
    remoteUrl: 'https://bconscentralpark.vn/wp-content/uploads/amenity-cay-uoc-nguyen.webp',
  },
  {
    id: 6,
    titleVi: 'Vườn cảnh quan',
    titleEn: 'Scenic Landscape Garden',
    category: 'relax',
    src: '/images/amenities/amenity-vuon-canh-quan-02.webp',
    remoteUrl: 'https://bconscentralpark.vn/wp-content/uploads/amenity-vuon-canh-quan-02.webp',
  },
  {
    id: 7,
    titleVi: 'Vườn cảnh quan nghệ thuật',
    titleEn: 'Artistic Botanical Garden',
    category: 'relax',
    src: '/images/amenities/amenity-vuon-canh-quan-03.webp',
    remoteUrl: 'https://bconscentralpark.vn/wp-content/uploads/amenity-vuon-canh-quan-03.webp',
  },
  {
    id: 8,
    titleVi: 'Vườn thiên nga & Đường dạo',
    titleEn: 'Swan Garden & Walking Path',
    category: 'relax',
    src: '/images/amenities/amenity-vuon-thien-nga-duong-dao.webp',
    remoteUrl: 'https://bconscentralpark.vn/wp-content/uploads/amenity-vuon-thien-nga-duong-dao.webp',
  },
  {
    id: 9,
    titleVi: 'Vườn thiên nga & Hồ sen',
    titleEn: 'Swan Garden & Lotus Pond',
    category: 'relax',
    src: '/images/amenities/amenity-vuon-thien-nga-ho-sen.webp',
    remoteUrl: 'https://bconscentralpark.vn/wp-content/uploads/amenity-vuon-thien-nga-ho-sen.webp',
  },
  {
    id: 10,
    titleVi: 'Hồ bơi trung tâm',
    titleEn: 'Central Infinity Pool',
    category: 'relax',
    src: '/images/amenities/amenity-ho-boi-trung-tam.webp',
    remoteUrl: 'https://bconscentralpark.vn/wp-content/uploads/amenity-ho-boi-trung-tam.webp',
  },
  // 11-16: Thể thao & cộng đồng
  {
    id: 11,
    titleVi: 'Khu thể thao ngoài trời',
    titleEn: 'Outdoor Sports Zone',
    category: 'sport',
    src: '/images/amenities/amenity-khu-the-thao.webp',
    remoteUrl: 'https://bconscentralpark.vn/wp-content/uploads/amenity-khu-the-thao.webp',
  },
  {
    id: 12,
    titleVi: 'Sân bóng rổ',
    titleEn: 'Basketball Court',
    category: 'sport',
    src: '/images/amenities/amenity-san-bong-ro.webp',
    remoteUrl: 'https://bconscentralpark.vn/wp-content/uploads/amenity-san-bong-ro.webp',
  },
  {
    id: 13,
    titleVi: 'Sân bóng rổ toàn cảnh',
    titleEn: 'Panoramic Basketball Arena',
    category: 'sport',
    src: '/images/amenities/amenity-san-bong-ro-toan-canh.webp',
    remoteUrl: 'https://bconscentralpark.vn/wp-content/uploads/amenity-san-bong-ro-toan-canh.webp',
  },
  {
    id: 14,
    titleVi: 'Cinema ngoài trời',
    titleEn: 'Outdoor Cinema',
    category: 'sport',
    src: '/images/amenities/amenity-cinema-ngoai-troi.webp',
    remoteUrl: 'https://bconscentralpark.vn/wp-content/uploads/amenity-cinema-ngoai-troi.webp',
  },
  {
    id: 15,
    titleVi: 'Phố thương mại',
    titleEn: 'Commercial Promenade',
    category: 'sport',
    src: '/images/amenities/amenity-pho-thuong-mai.webp',
    remoteUrl: 'https://bconscentralpark.vn/wp-content/uploads/amenity-pho-thuong-mai.webp',
  },
  {
    id: 16,
    titleVi: 'Spa hướng hồ bơi',
    titleEn: 'Pool-view Wellness Spa',
    category: 'sport',
    src: '/images/amenities/amenity-spa-huong-ho-boi.webp',
    remoteUrl: 'https://bconscentralpark.vn/wp-content/uploads/amenity-spa-huong-ho-boi.webp',
  },
]

export function Amenities() {
  const { t, locale, theme } = useSitePreferences()
  const isEn = locale === 'en'
  const isDark = theme === 'dark'

  const [activeCategory, setActiveCategory] = useState<'relax' | 'sport'>('relax')
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredItems = AMENITY_LIST.filter((item) => item.category === activeCategory)

  // When switching category, reset slide to 0
  const handleCategoryChange = (cat: 'relax' | 'sport') => {
    setActiveCategory(cat)
    setActiveIndex(0)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % filteredItems.length)
  }

  const handleLightboxPrev = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) => ((prev ?? 0) - 1 + AMENITY_LIST.length) % AMENITY_LIST.length)
  }

  const handleLightboxNext = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) => ((prev ?? 0) + 1) % AMENITY_LIST.length)
  }

  // Keyboard navigation & scroll lock for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowLeft') handleLightboxPrev()
      if (e.key === 'ArrowRight') handleLightboxNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [lightboxIndex])

  const activeItem = filteredItems[activeIndex] || filteredItems[0]
  const prevItem = filteredItems[(activeIndex - 1 + filteredItems.length) % filteredItems.length]
  const nextItem = filteredItems[(activeIndex + 1) % filteredItems.length]

  return (
    <section
      id="tien-ich"
      className="scroll-mt-24 bg-background py-16 sm:py-20 lg:py-24 transition-colors border-b border-border/60 dark:border-white/5"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header with Title on Left & Category Tabs on Right */}
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-[#b88728] dark:text-[#e6c887]">
                <span className="h-px w-8 bg-[#b88728]/60 dark:bg-[#e6c887]/70" />
                {t.amenities.eyebrow}
              </span>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground dark:text-white leading-tight">
                {t.amenities.headingMain}
                <span className="block mt-1 font-serif italic text-[#b88728] dark:text-[#e6c887] font-semibold">
                  {t.amenities.headingSub}
                </span>
              </h2>
            </div>

            {/* Pill tabs */}
            <div className="inline-flex items-center rounded-full border border-border bg-card p-1 shadow-sm dark:border-white/10 dark:bg-card/75 self-start sm:self-auto">
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => handleCategoryChange('relax')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-sans transition-all duration-300 cursor-pointer ${
                  activeCategory === 'relax'
                    ? isDark
                      ? 'bg-[#e6c887] text-[#072018] font-bold shadow-md'
                      : 'bg-primary text-white font-bold shadow-sm'
                    : isDark
                      ? 'text-white/70 hover:text-white font-medium'
                      : 'text-muted-foreground hover:text-foreground font-medium'
                }`}
              >
                {t.amenities.categories.relax}
              </button>
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => handleCategoryChange('sport')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-sans transition-all duration-300 cursor-pointer ${
                  activeCategory === 'sport'
                    ? isDark
                      ? 'bg-[#e6c887] text-[#072018] font-bold shadow-md'
                      : 'bg-primary text-white font-bold shadow-sm'
                    : isDark
                      ? 'text-white/70 hover:text-white font-medium'
                      : 'text-muted-foreground hover:text-foreground font-medium'
                }`}
              >
                {t.amenities.categories.sport}
              </button>
            </div>
          </div>
        </Reveal>

        {/* Visual Carousel Slider (Active Center + Left/Right previews) */}
        <Reveal delay={0.12} className="relative mt-8 sm:mt-12 overflow-hidden">
          <div className="flex items-center justify-center gap-3 sm:gap-6">
            {/* Left Preview Slide */}
            <button
              onClick={handlePrev}
              type="button"
              suppressHydrationWarning
              aria-label={isEn ? 'Previous image' : 'Ảnh trước'}
              className="hidden sm:block relative w-[18vw] lg:w-[15vw] max-w-[200px] aspect-[4/5] sm:aspect-[9/16] lg:aspect-[10/14] rounded-2xl sm:rounded-3xl overflow-hidden opacity-60 hover:opacity-90 transition-all duration-500 scale-95 hover:scale-100 shrink-0 cursor-pointer shadow-md group text-left border border-border/70 dark:border-white/10"
            >
              <img
                src={prevItem.src}
                alt={isEn ? prevItem.titleEn : prevItem.titleVi}
                className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
            </button>

            {/* Center Active Slide */}
            <div className="relative w-full sm:w-[68vw] md:w-[60vw] max-w-4xl aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shrink-0 border border-border/80 dark:border-white/10 group bg-card">
              <img
                src={activeItem.src}
                alt={isEn ? activeItem.titleEn : activeItem.titleVi}
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Top-right zoom button */}
              <button
                onClick={() => setLightboxIndex(activeItem.id - 1)}
                type="button"
                suppressHydrationWarning
                aria-label={isEn ? 'Enlarge image' : 'Phóng to ảnh'}
                title={isEn ? 'Enlarge image' : 'Phóng to ảnh'}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 size-10 sm:size-12 rounded-full bg-white/95 hover:bg-white text-slate-900 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer z-10"
              >
                <ArrowUpRight className="size-5 sm:size-6 stroke-[2.5]" />
              </button>

              {/* Bottom scrim with title */}
              <div
                onClick={() => setLightboxIndex(activeItem.id - 1)}
                className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-5 sm:p-7 md:p-9 flex items-end cursor-pointer"
              >
                <p className="font-sans font-bold text-white text-lg sm:text-2xl md:text-3xl tracking-wide drop-shadow-md">
                  {isEn ? activeItem.titleEn : activeItem.titleVi}
                </p>
              </div>
            </div>

            {/* Right Preview Slide */}
            <button
              onClick={handleNext}
              type="button"
              suppressHydrationWarning
              aria-label={isEn ? 'Next image' : 'Ảnh tiếp theo'}
              className="hidden sm:block relative w-[18vw] lg:w-[15vw] max-w-[200px] aspect-[4/5] sm:aspect-[9/16] lg:aspect-[10/14] rounded-2xl sm:rounded-3xl overflow-hidden opacity-60 hover:opacity-90 transition-all duration-500 scale-95 hover:scale-100 shrink-0 cursor-pointer shadow-md group text-left border border-border/70 dark:border-white/10"
            >
              <img
                src={nextItem.src}
                alt={isEn ? nextItem.titleEn : nextItem.titleVi}
                className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
            </button>
          </div>

          {/* Navigation Arrows on mobile */}
          <div className="flex sm:hidden items-center justify-between mt-4 px-2">
            <button
              onClick={handlePrev}
              type="button"
              suppressHydrationWarning
              aria-label={isEn ? 'Previous' : 'Trước'}
              className="size-9 rounded-full bg-card border border-border flex items-center justify-center shadow-sm"
            >
              <ChevronLeft className="size-4 text-foreground" />
            </button>
            <button
              onClick={handleNext}
              type="button"
              suppressHydrationWarning
              aria-label={isEn ? 'Next' : 'Tiếp theo'}
              className="size-9 rounded-full bg-card border border-border flex items-center justify-center shadow-sm"
            >
              <ChevronRight className="size-4 text-foreground" />
            </button>
          </div>

          {/* Pagination Indicators */}
          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-1.5 sm:gap-2">
            {filteredItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                type="button"
                suppressHydrationWarning
                aria-label={isEn ? `Go to slide ${idx + 1}` : `Chuyển tới ảnh ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  idx === activeIndex
                    ? 'w-7 sm:w-8 h-2 sm:h-2.5 bg-[#e6c887]'
                    : 'size-2 sm:size-2.5 bg-slate-300 dark:bg-white/25 hover:bg-slate-400 dark:hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex flex-col justify-between p-4 sm:p-6 lg:p-8 bg-[#041510]/95 backdrop-blur-xl"
          >
            {/* Top Bar: Counter & Yellow Close Button */}
            <div className="flex items-center justify-between w-full max-w-6xl mx-auto z-10">
              <span className="font-sans font-bold text-white/90 text-sm sm:text-base">
                {lightboxIndex + 1} / {AMENITY_LIST.length}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                type="button"
                suppressHydrationWarning
                aria-label={isEn ? 'Close lightbox' : 'Đóng phóng to'}
                className="size-10 sm:size-11 rounded-full bg-[#f5b82e] hover:bg-[#e2a623] text-[#072018] flex items-center justify-center font-bold shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <X className="size-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Center Area: Yellow Prev Button, Large Image, Yellow Next Button */}
            <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-10 my-auto w-full max-w-6xl mx-auto z-10">
              <button
                onClick={handleLightboxPrev}
                type="button"
                suppressHydrationWarning
                aria-label={isEn ? 'Previous image' : 'Ảnh trước'}
                className="shrink-0 size-11 sm:size-13 rounded-full bg-[#f5b82e] hover:bg-[#e2a623] text-[#072018] flex items-center justify-center shadow-xl transition-transform hover:scale-110 active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="size-6 stroke-[2.5]" />
              </button>

              <div className="relative max-h-[68vh] sm:max-h-[74vh] max-w-4xl w-full flex items-center justify-center">
                <motion.img
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  src={AMENITY_LIST[lightboxIndex].src}
                  alt={isEn ? AMENITY_LIST[lightboxIndex].titleEn : AMENITY_LIST[lightboxIndex].titleVi}
                  className="max-h-[68vh] sm:max-h-[74vh] max-w-full w-auto h-auto rounded-2xl sm:rounded-3xl object-contain shadow-2xl border border-white/10"
                />
              </div>

              <button
                onClick={handleLightboxNext}
                type="button"
                suppressHydrationWarning
                aria-label={isEn ? 'Next image' : 'Ảnh tiếp theo'}
                className="shrink-0 size-11 sm:size-13 rounded-full bg-[#f5b82e] hover:bg-[#e2a623] text-[#072018] flex items-center justify-center shadow-xl transition-transform hover:scale-110 active:scale-95 cursor-pointer"
              >
                <ChevronRight className="size-6 stroke-[2.5]" />
              </button>
            </div>

            {/* Bottom: Current Title */}
            <div className="text-center z-10">
              <p className="font-sans font-bold text-white text-lg sm:text-2xl md:text-3xl tracking-wide">
                {isEn ? AMENITY_LIST[lightboxIndex].titleEn : AMENITY_LIST[lightboxIndex].titleVi}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
