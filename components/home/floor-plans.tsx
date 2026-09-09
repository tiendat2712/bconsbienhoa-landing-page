'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  BedDouble,
  ChevronLeft,
  ChevronRight,
  Layers,
  Maximize2,
  Minus,
  Plus,
  X,
} from 'lucide-react'
import Link from 'next/link'
import { Reveal, SectionHeading } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export type FloorPlanCategory = '3pn-2wc' | '2pn-2wc' | '2pn-1wc' | '1pn'

export interface FloorPlanItem {
  id: string
  category: FloorPlanCategory
  code: string
  indexTag: string
  titleVi: string
  titleEn: string
  subtitleVi: string
  subtitleEn: string
  descVi: string
  descEn: string
  image: string
  areaFloor: string
  areaUsable: string
  roomsVi: string
  roomsEn: string
  floorsVi: string
  floorsEn: string
}

export const CATEGORIES: { id: FloorPlanCategory; labelVi: string; labelEn: string }[] = [
  { id: '3pn-2wc', labelVi: 'Căn hộ 3PN - 2WC', labelEn: '3-Bedroom (3B-2B)' },
  { id: '2pn-2wc', labelVi: 'Căn hộ 2PN - 2WC', labelEn: '2-Bedroom (2B-2B)' },
  { id: '2pn-1wc', labelVi: 'Căn hộ 2PN - 1WC', labelEn: '2-Bedroom (2B-1B)' },
  { id: '1pn', labelVi: 'Căn hộ 1PN', labelEn: 'Căn hộ 1PN' },
]

export const FLOOR_PLANS: FloorPlanItem[] = [
  // 1. Căn hộ 3PN - 2WC
  {
    id: 'a1',
    category: '3pn-2wc',
    code: 'Mã A1',
    indexTag: '01 / 02',
    titleVi: 'Căn hộ 3PN – Diện tích 88 m²',
    titleEn: '3-Bedroom Unit – Area 88 sqm',
    subtitleVi: 'Mã A1 · Sử dụng 81 m²',
    subtitleEn: 'Code A1 · Usable 81 sqm',
    descVi:
      'Căn hộ góc 3 phòng ngủ A1 với tầm nhìn panorama rộng mở, 2 mặt thoáng đón gió và ánh sáng tự nhiên trọn vẹn.',
    descEn:
      'Dual-aspect corner 3-bedroom residence A1 offering panoramic city views and maximized natural ventilation.',
    image: '/images/floorplans/Hop-don-A1.jpg',
    areaFloor: '88 m²',
    areaUsable: '81 m²',
    roomsVi: '3 PN + 2 WC',
    roomsEn: '3 Beds + 2 Baths',
    floorsVi: 'Tầng 3–22',
    floorsEn: 'Floors 3–22',
  },
  {
    id: 'a2',
    category: '3pn-2wc',
    code: 'Mã A2',
    indexTag: '02 / 02',
    titleVi: 'Căn hộ 3PN – Diện tích 87 m²',
    titleEn: '3-Bedroom Unit – Area 87 sqm',
    subtitleVi: 'Mã A2 · Sử dụng 80 m²',
    subtitleEn: 'Code A2 · Usable 80 sqm',
    descVi:
      'Căn hộ 3 phòng ngủ A2 thiết kế sang trọng, tối ưu diện tích sinh hoạt chung cho gia đình đa thế hệ.',
    descEn:
      'Spacious 3-bedroom layout A2 designed for multi-generational living with seamless family spaces.',
    image: '/images/floorplans/Hop-don-A2.jpg',
    areaFloor: '87 m²',
    areaUsable: '80 m²',
    roomsVi: '3 PN + 2 WC',
    roomsEn: '3 Beds + 2 Baths',
    floorsVi: 'Tầng 3–22',
    floorsEn: 'Floors 3–22',
  },

  // 2. Căn hộ 2PN - 2WC
  {
    id: 'b1',
    category: '2pn-2wc',
    code: 'Mã B1',
    indexTag: '01 / 03',
    titleVi: 'Căn hộ 2PN – Diện tích 66 m²',
    titleEn: '2-Bedroom Unit – Area 66 sqm',
    subtitleVi: 'Mã B1 · Sử dụng 60–62 m²',
    subtitleEn: 'Code B1 · Usable 60–62 sqm',
    descVi:
      'Căn hộ 2 phòng ngủ 2WC mã B1 vuông vức, phòng khách rộng rãi hướng ban công thoáng đãng.',
    descEn:
      'Well-proportioned 2-bedroom 2-bathroom B1 with bright living lounge extending to scenic balcony.',
    image: '/images/floorplans/Hop-don-B1.jpg',
    areaFloor: '66 m²',
    areaUsable: '60–62 m²',
    roomsVi: '2 PN + 2 WC',
    roomsEn: '2 Beds + 2 Baths',
    floorsVi: 'Tầng 3–22',
    floorsEn: 'Floors 3–22',
  },
  {
    id: 'b2-b3',
    category: '2pn-2wc',
    code: 'Mã B2 & B3',
    indexTag: '02 / 03',
    titleVi: 'Căn hộ 2PN – Diện tích 60–65 m²',
    titleEn: '2-Bedroom Unit – Area 60–65 sqm',
    subtitleVi: 'Mã B2 & B3 · Diện tích sử dụng 54–59 m²',
    subtitleEn: 'Code B2 & B3 · Usable 54–59 sqm',
    descVi: 'Hai phương án căn hộ 2 phòng ngủ B2 và B3, diện tích sàn từ 60 đến 65 m².',
    descEn: 'Two versatile 2-bedroom configurations B2 & B3, with floor areas ranging from 60 to 65 sqm.',
    image: '/images/floorplans/B2B3.jpg',
    areaFloor: '60–65 m²',
    areaUsable: '54–59 m²',
    roomsVi: '2 PN + 2 WC',
    roomsEn: '2 Beds + 2 Baths',
    floorsVi: 'Tầng 3–22',
    floorsEn: 'Floors 3–22',
  },
  {
    id: 'b4-b5',
    category: '2pn-2wc',
    code: 'Mã B4 & B5',
    indexTag: '03 / 03',
    titleVi: 'Căn hộ 2PN – Diện tích 70–73 m²',
    titleEn: '2-Bedroom Unit – Area 70–73 sqm',
    subtitleVi: 'Mã B4 & B5 · Sử dụng 63–69 m²',
    subtitleEn: 'Code B4 & B5 · Usable 63–69 sqm',
    descVi:
      'Hai phương án căn hộ 2 phòng ngủ B4 và B5 diện tích tối ưu, có logia giặt phơi riêng biệt và bếp khép kín.',
    descEn:
      'Generous 2-bedroom units B4 & B5 featuring separate laundry loggia and well-ventilated kitchen.',
    image: '/images/floorplans/B4B5.jpg',
    areaFloor: '70–73 m²',
    areaUsable: '63–69 m²',
    roomsVi: '2 PN + 2 WC',
    roomsEn: '2 Beds + 2 Baths',
    floorsVi: 'Tầng 3–22',
    floorsEn: 'Floors 3–22',
  },

  // 3. Căn hộ 2PN - 1WC
  {
    id: 'c1',
    category: '2pn-1wc',
    code: 'Mã C1',
    indexTag: '01 / 03',
    titleVi: 'Căn hộ 2PN – Diện tích 52 m²',
    titleEn: '2-Bedroom Unit – Area 52 sqm',
    subtitleVi: 'Mã C1 · Sử dụng 47–48 m²',
    subtitleEn: 'Code C1 · Usable 47–48 sqm',
    descVi:
      'Căn hộ 2 phòng ngủ 1WC mã C1 thiết kế tinh tế, tối ưu hóa công năng và chi phí sở hữu cho gia đình trẻ.',
    descEn:
      'Smart 2-bedroom 1-bath unit C1 maximizing everyday efficiency and value for young couples.',
    image: '/images/floorplans/Hop-don-C1.jpg',
    areaFloor: '52 m²',
    areaUsable: '47–48 m²',
    roomsVi: '2 PN + 1 WC',
    roomsEn: '2 Beds + 1 Bath',
    floorsVi: 'Tầng 3–22',
    floorsEn: 'Floors 3–22',
  },
  {
    id: 'c2-c3',
    category: '2pn-1wc',
    code: 'Mã C2 & C3',
    indexTag: '02 / 03',
    titleVi: 'Căn hộ 2PN – Diện tích 50–53 m²',
    titleEn: '2-Bedroom Unit – Area 50–53 sqm',
    subtitleVi: 'Mã C2 & C3 · Sử dụng 45–47 m²',
    subtitleEn: 'Code C2 & C3 · Usable 45–47 sqm',
    descVi: 'Hai phương án căn hộ 2 phòng ngủ C2 và C3, diện tích sàn từ 50 đến 53 m².',
    descEn: 'Two functional 2-bedroom layouts C2 & C3, with total floor area from 50 to 53 sqm.',
    image: '/images/floorplans/C2C3.jpg',
    areaFloor: '50–53 m²',
    areaUsable: '45–47 m²',
    roomsVi: '2 PN + 1 WC',
    roomsEn: '2 Beds + 1 Bath',
    floorsVi: 'Tầng 3–22',
    floorsEn: 'Floors 3–22',
  },
  {
    id: 'c4',
    category: '2pn-1wc',
    code: 'Mã C4',
    indexTag: '03 / 03',
    titleVi: 'Căn hộ 2PN – Diện tích 62 m²',
    titleEn: '2-Bedroom Unit – Area 62 sqm',
    subtitleVi: 'Mã C4 · Sử dụng 57 m²',
    subtitleEn: 'Code C4 · Usable 57 sqm',
    descVi:
      'Căn hộ 2 phòng ngủ C4 diện tích rộng rãi 62 m², phòng ngủ chính đón ánh sáng tự nhiên rực rỡ.',
    descEn:
      'Expansive 2-bedroom home C4 with 62 sqm floor area, master suite capturing natural sunlight.',
    image: '/images/floorplans/Hop-don-C4.jpg',
    areaFloor: '62 m²',
    areaUsable: '57 m²',
    roomsVi: '2 PN + 1 WC',
    roomsEn: '2 Beds + 1 Bath',
    floorsVi: 'Tầng 3–22',
    floorsEn: 'Floors 3–22',
  },

  // 4. Căn hộ 1PN
  {
    id: 'd1-d2',
    category: '1pn',
    code: 'Mã D1 & D2',
    indexTag: '01 / 03',
    titleVi: 'Căn hộ Studio – Diện tích 40–41 m²',
    titleEn: 'Studio Apartment – Area 40–41 sqm',
    subtitleVi: 'Mã D1 & D2 · Sử dụng 35–37 m²',
    subtitleEn: 'Code D1 & D2 · Usable 35–37 sqm',
    descVi:
      'Căn hộ Studio D1 và D2 không gian mở hiện đại, bố trí thông minh, thích hợp cho người trẻ năng động.',
    descEn:
      'Open-concept studio D1 & D2 featuring seamless modern living, ideal for dynamic urban professionals.',
    image: '/images/floorplans/D1D2.jpg',
    areaFloor: '40–41 m²',
    areaUsable: '35–37 m²',
    roomsVi: 'Studio · 1 WC',
    roomsEn: 'Studio · 1 Bath',
    floorsVi: 'Tầng 3–22',
    floorsEn: 'Floors 3–22',
  },
  {
    id: 'd3-d4',
    category: '1pn',
    code: 'Mã D3 & D4',
    indexTag: '02 / 03',
    titleVi: 'Căn hộ Studio – Diện tích 38–39 m²',
    titleEn: 'Studio Apartment – Area 38–39 sqm',
    subtitleVi: 'Mã D3 & D4 · Sử dụng 33–34 m²',
    subtitleEn: 'Code D3 & D4 · Usable 33–34 sqm',
    descVi:
      'Căn hộ Studio D3 và D4 tối ưu ngân sách an cư, thiết kế tinh gọn đầy đủ tiện nghi sinh hoạt.',
    descEn:
      'Smart-budget studio D3 & D4 providing full residential convenience in a well-planned footprint.',
    image: '/images/floorplans/D3D4.jpg',
    areaFloor: '38–39 m²',
    areaUsable: '33–34 m²',
    roomsVi: 'Studio · 1 WC',
    roomsEn: 'Studio · 1 Bath',
    floorsVi: 'Tầng 3–22',
    floorsEn: 'Floors 3–22',
  },
  {
    id: 'd5-d6',
    category: '1pn',
    code: 'Mã D5 & D6',
    indexTag: '03 / 03',
    titleVi: 'Căn hộ 1PN – Diện tích 43–54 m²',
    titleEn: '1-Bedroom Apartment – Area 43–54 sqm',
    subtitleVi: 'Mã D5 & D6 · Sử dụng 39–50 m²',
    subtitleEn: 'Code D5 & D6 · Usable 39–50 sqm',
    descVi:
      'Căn hộ 1 phòng ngủ D5 và D6 có phòng ngủ riêng tư tách biệt, ban công đón gió và bếp thoáng khí.',
    descEn:
      'Dedicated 1-bedroom home D5 & D6 with private master bedroom, breezy balcony and ventilated kitchen.',
    image: '/images/floorplans/D5D6.jpg',
    areaFloor: '43–54 m²',
    areaUsable: '39–50 m²',
    roomsVi: '1 PN + 1 WC',
    roomsEn: '1 Bed + 1 Bath',
    floorsVi: 'Tầng 3–22',
    floorsEn: 'Floors 3–22',
  },
]

export function FloorPlans() {
  const { t, theme, locale } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  const [activeCategory, setActiveCategory] = useState<FloorPlanCategory>('1pn')
  const [lightboxItem, setLightboxItem] = useState<FloorPlanItem | null>(null)

  // Zoom & Pan state for lightbox
  const [zoom, setZoom] = useState(100)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStartRef = useRef<{ x: number; y: number; panX: number; panY: number }>({
    x: 0,
    y: 0,
    panX: 0,
    panY: 0,
  })

  const currentCategoryItems = FLOOR_PLANS.filter((p) => p.category === activeCategory)

  // Reset zoom & pan whenever lightbox item changes
  const resetZoom = useCallback(() => {
    setZoom(100)
    setPan({ x: 0, y: 0 })
    setIsDragging(false)
  }, [])

  const openLightbox = (item: FloorPlanItem) => {
    resetZoom()
    setLightboxItem(item)
  }

  const closeLightbox = () => {
    setLightboxItem(null)
    resetZoom()
  }

  const handlePrevItem = useCallback(() => {
    if (!lightboxItem) return
    const items = FLOOR_PLANS.filter((p) => p.category === lightboxItem.category)
    const curIdx = items.findIndex((p) => p.id === lightboxItem.id)
    const prevIdx = (curIdx - 1 + items.length) % items.length
    resetZoom()
    setLightboxItem(items[prevIdx])
  }, [lightboxItem, resetZoom])

  const handleNextItem = useCallback(() => {
    if (!lightboxItem) return
    const items = FLOOR_PLANS.filter((p) => p.category === lightboxItem.category)
    const curIdx = items.findIndex((p) => p.id === lightboxItem.id)
    const nextIdx = (curIdx + 1) % items.length
    resetZoom()
    setLightboxItem(items[nextIdx])
  }, [lightboxItem, resetZoom])

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxItem) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') handlePrevItem()
      if (e.key === 'ArrowRight') handleNextItem()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightboxItem, handlePrevItem, handleNextItem])

  // Zoom control handlers
  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 50, 300))
  }

  const handleZoomOut = () => {
    setZoom((prev) => {
      const next = Math.max(prev - 50, 100)
      if (next === 100) setPan({ x: 0, y: 0 })
      return next
    })
  }

  // Mouse pan drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 100) return
    setIsDragging(true)
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      panX: pan.x,
      panY: pan.y,
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoom <= 100) return
    const deltaX = e.clientX - dragStartRef.current.x
    const deltaY = e.clientY - dragStartRef.current.y
    setPan({
      x: dragStartRef.current.panX + deltaX,
      y: dragStartRef.current.panY + deltaY,
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    if (e.deltaY < 0) {
      setZoom((prev) => Math.min(prev + 25, 300))
    } else {
      setZoom((prev) => {
        const next = Math.max(prev - 25, 100)
        if (next === 100) setPan({ x: 0, y: 0 })
        return next
      })
    }
  }

  return (
    <section
      id="mat-bang"
      className="scroll-mt-24 py-16 sm:py-20 lg:py-24 transition-colors bg-secondary/30 dark:bg-[#072018]"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow={t.plans.eyebrow}
          title={isEn ? 'Intelligent Architecture' : 'Thiết Kế Thông Minh'}
          subtitle={isEn ? 'Optimizing Every Square Meter' : 'Tối Ưu Công Năng Từng Mét Vuông'}
          description={t.plans.desc}
        />

        {/* Category Pill Tabs */}
        <Reveal delay={0.1} className="mt-10 sm:mt-12 flex justify-center">
          <div
            role="tablist"
            aria-label={t.plans.tabs}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 p-1.5 rounded-full"
          >
            {CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategory
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  suppressHydrationWarning
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-sans transition-all duration-300 cursor-pointer ${
                    isActive
                      ? isDark
                        ? 'bg-[#f5b82e] text-[#072018] font-bold shadow-lg scale-105'
                        : 'bg-primary text-white font-bold shadow-md scale-105'
                      : isDark
                        ? 'bg-[#0a271e]/80 text-white/80 border border-white/20 hover:border-white/40 hover:text-white font-medium'
                        : 'bg-card text-foreground/80 border border-border hover:border-primary/40 hover:text-primary font-medium shadow-sm'
                  }`}
                >
                  {isEn ? cat.labelEn : cat.labelVi}
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Cards Grid */}
        <div className="mt-10 sm:mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={`grid gap-6 sm:gap-8 ${
                currentCategoryItems.length === 2
                  ? 'max-w-4xl mx-auto grid-cols-1 md:grid-cols-2'
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {currentCategoryItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[2rem] p-1.5 bg-black/5 dark:bg-white/5 border border-border/70 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col"
                >
                  <div className="rounded-[calc(2rem-0.375rem)] overflow-hidden bg-white dark:bg-[#0c241b] flex flex-col h-full">
                    {/* Top Poster Image Area */}
                    <div
                      onClick={() => openLightbox(item)}
                      className="relative w-full aspect-[3/4] bg-neutral-50 dark:bg-black/20 overflow-hidden cursor-pointer flex items-center justify-center p-3 sm:p-4 border-b border-border/40 dark:border-white/10"
                    >
                      <img
                        src={item.image}
                        alt={isEn ? item.titleEn : item.titleVi}
                        className="w-full h-full object-contain object-top transition-transform duration-700 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>

                    {/* Bottom Info Area */}
                    <div className="bg-[#FAF7F0] dark:bg-[#081e17] p-5 sm:p-6 flex flex-col justify-between flex-1 transition-colors">
                      <div>
                        <span className="block font-sans font-bold text-xs tracking-wider text-[#c59b27] dark:text-[#e6c887]">
                          {item.indexTag}
                        </span>
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#072018] dark:text-white mt-1.5 leading-snug group-hover:text-primary dark:group-hover:text-[#e6c887] transition-colors">
                          {isEn ? item.titleEn : item.titleVi}
                        </h3>
                        <p className="font-sans text-xs sm:text-sm text-muted-foreground dark:text-[#a0b8ad] mt-1.5 font-medium">
                          {isEn ? item.subtitleEn : item.subtitleVi}
                        </p>
                      </div>

                      {/* Action Button: (+) Xem ảnh lớn */}
                      <button
                        type="button"
                        suppressHydrationWarning
                        onClick={() => openLightbox(item)}
                        className="mt-5 inline-flex items-center gap-2 self-start text-[#c59b27] dark:text-[#e6c887] hover:opacity-85 transition-opacity cursor-pointer"
                      >
                        <span className="size-6 rounded-full border border-[#c59b27] dark:border-[#e6c887] flex items-center justify-center text-inherit group-hover:bg-[#c59b27] group-hover:text-white dark:group-hover:bg-[#e6c887] dark:group-hover:text-[#072018] transition-all">
                          <Plus className="size-3.5 stroke-[2.5]" />
                        </span>
                        <span className="font-sans font-bold text-xs sm:text-sm">
                          {isEn ? 'View large plan' : 'Xem ảnh lớn'}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Explore More Link */}
        <Reveal delay={0.2} className="mt-12 text-center">
          <Link
            href="/mat-bang"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-bold uppercase tracking-[0.14em] text-primary dark:text-[#e6c887] hover:underline"
          >
            {isEn ? 'Explore master layout & details' : 'Khám phá mặt bằng tổng thể & chi tiết từng tầng'}
            <span className="text-base font-normal">→</span>
          </Link>
        </Reveal>
      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-[#041510]/95 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label={isEn ? lightboxItem.titleEn : lightboxItem.titleVi}
          >
            {/* Navigation Arrow: Previous (Desktop left floating) */}
            <button
              type="button"
              suppressHydrationWarning
              onClick={handlePrevItem}
              aria-label={isEn ? 'Previous plan' : 'Mặt bằng trước'}
              className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-[115] size-11 sm:size-13 rounded-full border border-white/20 bg-black/60 text-white flex items-center justify-center hover:bg-[#f5b82e] hover:text-[#072018] hover:border-[#f5b82e] transition-all duration-300 cursor-pointer shadow-2xl"
            >
              <ChevronLeft className="size-6 stroke-[2.5]" />
            </button>

            {/* Navigation Arrow: Next (Desktop right floating) */}
            <button
              type="button"
              suppressHydrationWarning
              onClick={handleNextItem}
              aria-label={isEn ? 'Next plan' : 'Mặt bằng tiếp theo'}
              className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-[115] size-11 sm:size-13 rounded-full border border-white/20 bg-black/60 text-white flex items-center justify-center hover:bg-[#f5b82e] hover:text-[#072018] hover:border-[#f5b82e] transition-all duration-300 cursor-pointer shadow-2xl"
            >
              <ChevronRight className="size-6 stroke-[2.5]" />
            </button>

            {/* Main Modal Window */}
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-6xl max-h-[92vh] bg-white dark:bg-[#071d15] rounded-3xl overflow-hidden shadow-2xl border border-border/80 dark:border-white/10 flex flex-col lg:flex-row z-[105]"
            >
              {/* Left Column: Interactive Zoomable Image Area */}
              <div
                className="relative flex-1 bg-neutral-100 dark:bg-black/30 overflow-hidden min-h-[360px] sm:min-h-[460px] lg:min-h-[600px] flex items-center justify-center p-3 select-none"
                onWheel={handleWheel}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{
                  cursor: zoom > 100 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
                }}
              >
                {/* Image Container with Transform */}
                <div
                  className="transition-transform duration-100 ease-out"
                  style={{
                    transform: `scale(${zoom / 100}) translate(${pan.x / (zoom / 100)}px, ${pan.y / (zoom / 100)}px)`,
                  }}
                >
                  <img
                    src={lightboxItem.image}
                    alt={isEn ? lightboxItem.titleEn : lightboxItem.titleVi}
                    className="max-h-[64vh] lg:max-h-[78vh] max-w-full w-auto h-auto object-contain rounded-xl shadow-md pointer-events-none"
                    draggable={false}
                  />
                </div>

                {/* Bottom-left Helper Badge: Cuộn để zoom · Kéo để xem */}
                <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
                  <div className="bg-[#072018]/85 text-white/95 text-[11px] sm:text-xs font-sans font-semibold px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg border border-white/10">
                    {isEn ? 'Scroll to zoom · Drag to pan' : 'Cuộn để zoom · Kéo để xem'}
                  </div>
                </div>

                {/* Bottom-right Zoom Controls: [-] 100% [+] */}
                <div className="absolute bottom-4 right-4 z-20">
                  <div className="bg-[#072018]/90 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-full flex items-center gap-2 sm:gap-3 text-xs font-bold shadow-xl border border-white/10 backdrop-blur-md">
                    <button
                      type="button"
                      suppressHydrationWarning
                      onClick={handleZoomOut}
                      aria-label="Zoom out"
                      className="size-7 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <Minus className="size-3.5 stroke-[2.5]" />
                    </button>
                    <span className="w-10 text-center font-sans tracking-wide text-[11px] sm:text-xs">
                      {zoom}%
                    </span>
                    <button
                      type="button"
                      suppressHydrationWarning
                      onClick={handleZoomIn}
                      aria-label="Zoom in"
                      className="size-7 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <Plus className="size-3.5 stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Information Sidebar */}
              <div className="w-full lg:w-[380px] xl:w-[420px] shrink-0 bg-[#FAF7F0] dark:bg-[#061812] p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border/60 dark:border-white/10 overflow-y-auto">
                <div>
                  {/* Top Close Button (Desktop & Mobile) */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-sans font-bold text-xs uppercase tracking-[0.16em] text-[#c59b27] dark:text-[#e6c887]">
                      {isEn ? 'SAMPLE FLOOR PLAN' : 'MẶT BẰNG CĂN HỘ MẪU'}
                    </span>
                    <button
                      type="button"
                      suppressHydrationWarning
                      onClick={closeLightbox}
                      aria-label={isEn ? 'Close modal' : 'Đóng cửa sổ'}
                      className="size-9 sm:size-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 text-foreground dark:text-white transition-colors cursor-pointer"
                    >
                      <X className="size-4 sm:size-5 stroke-[2]" />
                    </button>
                  </div>

                  {/* Main Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#072018] dark:text-white leading-tight mt-2">
                    {isEn ? lightboxItem.titleEn : lightboxItem.titleVi}
                  </h3>

                  {/* Subtitle / Code */}
                  <p className="font-sans font-bold text-sm sm:text-base text-[#c59b27] dark:text-[#e6c887] mt-2.5">
                    {isEn ? lightboxItem.subtitleEn : lightboxItem.subtitleVi}
                  </p>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-muted-foreground dark:text-slate-300 leading-relaxed mt-4">
                    {isEn ? lightboxItem.descEn : lightboxItem.descVi}
                  </p>

                  {/* Specification Details Cards */}
                  <div className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-3">
                    <div className="rounded-xl p-3 bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10">
                      <div className="flex items-center gap-1.5 text-[#c59b27] dark:text-[#e6c887]">
                        <Maximize2 className="size-3.5" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">
                          {isEn ? 'Floor Area' : 'Diện tích sàn'}
                        </span>
                      </div>
                      <p className="font-serif font-bold text-sm text-[#072018] dark:text-white mt-1">
                        {lightboxItem.areaFloor}
                      </p>
                    </div>

                    <div className="rounded-xl p-3 bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10">
                      <div className="flex items-center gap-1.5 text-[#c59b27] dark:text-[#e6c887]">
                        <Maximize2 className="size-3.5" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">
                          {isEn ? 'Usable' : 'Sử dụng'}
                        </span>
                      </div>
                      <p className="font-serif font-bold text-sm text-[#072018] dark:text-white mt-1">
                        {lightboxItem.areaUsable}
                      </p>
                    </div>

                    <div className="rounded-xl p-3 bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10">
                      <div className="flex items-center gap-1.5 text-[#c59b27] dark:text-[#e6c887]">
                        <BedDouble className="size-3.5" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">
                          {isEn ? 'Rooms' : 'Cấu trúc'}
                        </span>
                      </div>
                      <p className="font-sans font-bold text-xs text-[#072018] dark:text-white mt-1">
                        {isEn ? lightboxItem.roomsEn : lightboxItem.roomsVi}
                      </p>
                    </div>

                    <div className="rounded-xl p-3 bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10">
                      <div className="flex items-center gap-1.5 text-[#c59b27] dark:text-[#e6c887]">
                        <Layers className="size-3.5" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">
                          {isEn ? 'Floors' : 'Vị trí'}
                        </span>
                      </div>
                      <p className="font-sans font-bold text-xs text-[#072018] dark:text-white mt-1">
                        {isEn ? lightboxItem.floorsEn : lightboxItem.floorsVi}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Footer: Counter & CTA */}
                <div className="mt-8 pt-4 border-t border-border/60 dark:border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="font-sans font-bold text-xs tracking-wider text-muted-foreground dark:text-white/60">
                      {lightboxItem.indexTag}
                    </span>
                    <a
                      href="#dang-ky"
                      onClick={closeLightbox}
                      className="px-4 py-2 rounded-full text-xs font-bold font-sans bg-primary hover:bg-primary/90 text-white dark:bg-[#e6c887] dark:hover:bg-[#d6b772] dark:text-[#072018] transition-all shadow-md"
                    >
                      {isEn ? 'Get price quote' : 'Nhận báo giá chi tiết'}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
