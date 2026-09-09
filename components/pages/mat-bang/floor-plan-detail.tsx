'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  Building2,
  CalendarClock,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Compass,
  Download,
  Eye,
  Home,
  Info,
  Layers,
  LayoutGrid,
  Maximize2,
  Sparkles,
  X,
  ZoomIn,
  BedDouble,
  Bath,
  CheckCircle2,
  ShieldCheck,
  Send,
  Loader2,
  PhoneCall,
  ArrowRight,
} from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function FloorPlanDetail() {
  const { theme, locale, t, openConsultation } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  // Lightbox state
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [lightboxCaption, setLightboxCaption] = useState<string>('')

  // 1. Top Highlights Bento Cards (Matching media_1788980438112.png)
  const heroHighlights = [
    {
      icon: Building2,
      value: '5',
      unit: '',
      label: isEn ? 'BLOCKS' : 'BLOCK',
      desc: isEn ? 'Orchid, Bamboo, Lotus, Palm, Tamarind' : 'Orchid, Bamboo, Lotus, Palm, Tamarind',
    },
    {
      icon: LayoutGrid,
      value: '2.820',
      unit: '',
      label: isEn ? 'APARTMENTS' : 'CĂN HỘ',
      desc: isEn ? 'Studio, 1PN, 2PN, 3PN' : 'Studio, 1PN, 2PN, 3PN đa dạng',
    },
    {
      icon: Sparkles,
      value: '60',
      unit: '+',
      label: isEn ? 'AMENITIES' : 'TIỆN ÍCH',
      desc: isEn ? 'Park, salt pool, gym' : 'Công viên, hồ bơi muối, gym',
    },
    {
      icon: Maximize2,
      value: '~3 ha',
      unit: '',
      label: isEn ? 'LAND AREA' : 'DIỆN TÍCH',
      desc: isEn ? '26,696 sqm total land' : '26.696 m² quỹ đất trung tâm',
    },
    {
      icon: CalendarClock,
      value: '2029',
      unit: '',
      label: isEn ? 'HANDOVER' : 'DỰ KIẾN BÀN GIAO',
      desc: isEn ? 'Estimated Quarter II/2029' : 'Dự kiến Quý II/2029 chuẩn tiến độ',
    },
  ]

  // 2. Block Tabs State
  const blockTabs = [
    { id: 'tong-quan', label: isEn ? 'OVERVIEW' : 'TỔNG QUAN' },
    { id: 'orchid', label: 'BLOCK ORCHID' },
    { id: 'bamboo', label: 'BLOCK BAMBOO' },
    { id: 'lotus', label: 'BLOCK LOTUS' },
    { id: 'palm', label: 'BLOCK PALM' },
    { id: 'tamarind', label: 'BLOCK TAMARIND' },
  ]
  const [activeBlockTab, setActiveBlockTab] = useState('tong-quan')

  // 3. Block View Directions (Matching media_1788980485338.png)
  const blockViews = [
    {
      block: 'Tamarind',
      view: isEn ? 'Bien Hoa Airport · Tropical Oasis Island' : 'Sân bay Biên Hoà · đảo nhiệt đới',
    },
    {
      block: 'Palm',
      view: isEn ? 'Ho Chi Minh City · Resort Pool · Event Plaza' : 'TP. Hồ Chí Minh · hồ bơi resort · quảng trường sự kiện',
    },
    {
      block: 'Lotus',
      view: isEn ? 'Duong Tu Giang Park · Dong Nai River, Cu Lao Pho' : 'Công viên Dương Tử Giang · sông Đồng Nai, Cù Lao Phố',
    },
    {
      block: 'Bamboo',
      view: isEn ? 'Art Playground · Musical Water Fountain' : 'Sân chơi nghệ thuật · quảng trường nhạc nước',
    },
    {
      block: 'Orchid',
      view: isEn ? 'National Route 1A, Dong Nai Stadium · Long Thanh Airport' : 'Quốc lộ 1A, sân vận động Đồng Nai · sân bay Long Thành',
    },
  ]

  // 5. Typical Floor Selection & Custom Dropdowns (Matching media_1788982015726.png & media_1788982151968.png)
  const blockOptions = [
    { id: 'orchid', label: 'Block Orchid', available: true },
    { id: 'bamboo', label: 'Block Bamboo', available: true },
    { id: 'lotus', label: 'Block Lotus', available: false },
    { id: 'palm', label: 'Block Palm', available: false },
    { id: 'tamarind', label: 'Block Tamarind', available: true },
  ]

  const floorOptions = [
    { id: '10', label: isEn ? 'Floor 10 (Typical)' : 'Tầng 10 (Điển hình)' },
    { id: '3', label: isEn ? 'Floor 3' : 'Tầng 3' },
    { id: '5', label: isEn ? 'Floor 5' : 'Tầng 5' },
    { id: '8', label: isEn ? 'Floor 8' : 'Tầng 8' },
    { id: '15', label: isEn ? 'Floor 15' : 'Tầng 15' },
    { id: '20', label: isEn ? 'Floor 20' : 'Tầng 20' },
  ]

  const typicalBlockData: Record<
    string,
    {
      name: string
      image: string | null
      topOrientLeft: string
      topOrientRight: string
      bottomOrientLeft: string
      bottomOrientRight: string
    }
  > = {
    orchid: {
      name: 'Block Orchid',
      image: '/images/floorplans/typical-floor-orchid.webp',
      topOrientLeft: isEn
        ? '↑ VIEW TOWARDS HIGHWAY 1A, DONG NAI STADIUM'
        : '↑ HƯỚNG NHÌN VỀ QUỐC LỘ 1A, SÂN VẬN ĐỘNG ĐỒNG NAI',
      topOrientRight: isEn ? 'VIEW TOWARDS LONG THANH AIRPORT ↑' : 'HƯỚNG NHÌN VỀ SÂN BAY LONG THÀNH ↑',
      bottomOrientLeft: isEn
        ? '← VIEW TOWARDS DONG NAI TECHNOLOGY UNIVERSITY'
        : '← HƯỚNG NHÌN VỀ ĐẠI HỌC CÔNG NGHỆ ĐỒNG NAI',
      bottomOrientRight: isEn
        ? 'VIEW TOWARDS DONG NAI ADMINISTRATIVE CENTER →'
        : 'HƯỚNG NHÌN VỀ TRUNG TÂM HÀNH CHÍNH TP. ĐỒNG NAI →',
    },
    bamboo: {
      name: 'Block Bamboo',
      image: '/images/floorplans/typical-floor-bamboo.webp',
      topOrientLeft: isEn
        ? '↑ VIEW TOWARDS ART PLAYGROUND, MUSICAL FOUNTAIN'
        : '↑ HƯỚNG NHÌN VỀ SÂN CHƠI NGHỆ THUẬT, QUẢNG TRƯỜNG NHẠC NƯỚC',
      topOrientRight: isEn ? 'VIEW TOWARDS MULTI-SPORT ARENA ↑' : 'HƯỚNG NHÌN VỀ KHU THỂ THAO ĐA NĂNG ↑',
      bottomOrientLeft: isEn
        ? '← VIEW TOWARDS DUONG TU GIANG CENTRAL PARK'
        : '← HƯỚNG NHÌN VỀ CÔNG VIÊN DƯƠNG TỬ GIANG',
      bottomOrientRight: isEn
        ? 'VIEW TOWARDS RESORT POOL & CENTRAL PLAZA →'
        : 'HƯỚNG NHÌN VỀ HỒ BƠI RESORT VÀ QUẢNG TRƯỜNG TRUNG TÂM →',
    },
    lotus: {
      name: 'Block Lotus',
      image: null,
      topOrientLeft: '',
      topOrientRight: '',
      bottomOrientLeft: '',
      bottomOrientRight: '',
    },
    palm: {
      name: 'Block Palm',
      image: null,
      topOrientLeft: '',
      topOrientRight: '',
      bottomOrientLeft: '',
      bottomOrientRight: '',
    },
    tamarind: {
      name: 'Block Tamarind',
      image: '/images/floorplans/typical-floor-tamarind.webp',
      topOrientLeft: isEn ? '↑ VIEW TOWARDS BIEN HOA AIRPORT' : '↑ HƯỚNG NHÌN VỀ SÂN BAY BIÊN HOÀ',
      topOrientRight: isEn ? 'VIEW TOWARDS TROPICAL OASIS ISLAND ↑' : 'HƯỚNG NHÌN VỀ ĐẢO NHIỆT ĐỚI TROPICAL OASIS ↑',
      bottomOrientLeft: isEn
        ? '← VIEW TOWARDS INTERNAL COMMERCIAL DISTRICT'
        : '← HƯỚNG NHÌN VỀ TRUNG TÂM THƯƠNG MẠI NỘI KHU',
      bottomOrientRight: isEn
        ? 'VIEW TOWARDS INTERNAL RESORT AMENITIES →'
        : 'HƯỚNG NHÌN VỀ KHU TIỆN ÍCH RESORT CAO CẤP →',
    },
  }

  const [selectedTypicalBlock, setSelectedTypicalBlock] = useState('orchid')
  const [selectedTypicalFloor, setSelectedTypicalFloor] = useState('10')
  const [isBlockDropdownOpen, setIsBlockDropdownOpen] = useState(false)
  const [isFloorDropdownOpen, setIsFloorDropdownOpen] = useState(false)
  const blockDropdownRef = useRef<HTMLDivElement>(null)
  const floorDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (blockDropdownRef.current && !blockDropdownRef.current.contains(event.target as Node)) {
        setIsBlockDropdownOpen(false)
      }
      if (floorDropdownRef.current && !floorDropdownRef.current.contains(event.target as Node)) {
        setIsFloorDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // 6. Basement & Roof Tabs (Matching media_1788980561804.png)
  const [activeUndergroundTab, setActiveUndergroundTab] = useState<'ham-1' | 'ham-2' | 'mai'>('ham-1')

  const undergroundData = {
    'ham-1': {
      title: isEn ? 'Basement 1 Layout' : 'Mặt bằng Tầng hầm 1',
      desc: isEn ? 'Automobile parking spaces, technical control room, fire protection and ventilation systems.' : 'Khu vực đỗ xe ô tô, phòng kỹ thuật điều hành, hệ thống PCCC tiêu chuẩn và trạm bơm thông gió.',
      image: '/images/floorplans/basement-1.webp',
      badge: isEn ? 'BASEMENT LEVEL 1' : 'TẦNG HẦM 1',
    },
    'ham-2': {
      title: isEn ? 'Basement 2 Layout' : 'Mặt bằng Tầng hầm 2',
      desc: isEn ? 'Spacious motorcycle parking, high-speed elevator access cores, smart card swipe entry.' : 'Khu vực bãi đỗ xe máy quy mô lớn, liên thông trực tiếp hệ thống thang máy từng block, quẹt thẻ thông minh.',
      image: '/images/floorplans/basement-2.webp',
      badge: isEn ? 'BASEMENT LEVEL 2' : 'TẦNG HẦM 2',
    },
    'mai': {
      title: isEn ? 'Rooftop Layout' : 'Mặt bằng Tầng mái',
      desc: isEn ? 'Panoramic sky terrace, solar energy arrays, water tank facilities, and elevator machine rooms.' : 'Không gian tầng mái ngắm toàn cảnh thành phố, hệ thống pin năng lượng mặt trời, bể nước và phòng máy thang.',
      image: '/images/floorplans/rooftop.webp',
      badge: isEn ? 'ROOFTOP DECK' : 'TẦNG MÁI',
    },
  }

  // 7. Detailed Unit Floorplan Cards (Matching media_1788981205946.png)
  const detailedUnitCards = [
    // 3 Phòng Ngủ
    {
      id: 'a1',
      code: 'A1',
      badge: 'A1',
      type: isEn ? '3-Bedroom' : '3 phòng ngủ',
      category: '3pn',
      grossArea: '88',
      netArea: '81',
      image: '/images/floorplans/units/a1.webp',
    },
    {
      id: 'a2',
      code: 'A2',
      badge: 'A2',
      type: isEn ? '3-Bedroom' : '3 phòng ngủ',
      category: '3pn',
      grossArea: '87',
      netArea: '80',
      image: '/images/floorplans/units/a2.webp',
    },
    // 2 Phòng Ngủ
    {
      id: 'b1',
      code: 'B1',
      badge: 'B1',
      type: isEn ? '2-Bedroom' : '2 phòng ngủ',
      category: '2pn',
      grossArea: '66',
      netArea: '61',
      image: '/images/floorplans/units/b1.webp',
    },
    {
      id: 'b2-b3',
      code: 'B2 & B3',
      badge: 'B2 & B3',
      type: isEn ? '2-Bedroom' : '2 phòng ngủ',
      category: '2pn',
      grossArea: '66',
      netArea: '60',
      image: '/images/floorplans/units/b2-b3.webp',
    },
    {
      id: 'b4-b5',
      code: 'B4 + B5',
      badge: 'B4 + B5',
      type: isEn ? '2-Bedroom' : '2 phòng ngủ',
      category: '2pn',
      grossArea: '73',
      netArea: '67',
      image: '/images/floorplans/units/b4-b5.webp',
    },
    {
      id: 'b6-b7',
      code: 'B6 + B7',
      badge: 'B6 + B7',
      type: isEn ? '2-Bedroom' : '2 phòng ngủ',
      category: '2pn',
      grossArea: '65',
      netArea: '59',
      image: '/images/floorplans/units/b6-b7.webp',
    },
    {
      id: 'b8',
      code: 'B8',
      badge: 'B8',
      type: isEn ? '2-Bedroom' : '2 phòng ngủ',
      category: '2pn',
      grossArea: '65',
      netArea: '58',
      image: '/images/floorplans/units/b8.webp',
    },
    {
      id: 'c1',
      code: 'C1',
      badge: 'C1',
      type: isEn ? '2-Bedroom' : '2 phòng ngủ',
      category: '2pn',
      grossArea: '53',
      netArea: '48',
      image: '/images/floorplans/units/c1.webp',
    },
    {
      id: 'c2-c3',
      code: 'C2 + C3',
      badge: 'C2 + C3',
      type: isEn ? '2-Bedroom' : '2 phòng ngủ',
      category: '2pn',
      grossArea: '50',
      netArea: '45',
      image: '/images/floorplans/units/c2-c3.webp',
    },
    {
      id: 'c4',
      code: 'C4',
      badge: 'C4',
      type: isEn ? '2-Bedroom' : '2 phòng ngủ',
      category: '2pn',
      grossArea: '62',
      netArea: '57',
      image: '/images/floorplans/units/c4.webp',
    },
    {
      id: 'd5',
      code: 'D5',
      badge: 'D5',
      type: isEn ? '2-Bedroom' : '2 phòng ngủ',
      category: '2pn',
      grossArea: '53',
      netArea: '49',
      image: '/images/floorplans/units/d5-d6.webp',
    },
    // 1 Phòng Ngủ
    {
      id: 'd6',
      code: 'D6',
      badge: 'D6',
      type: isEn ? '1-Bedroom' : '1 phòng ngủ',
      category: '1pn',
      grossArea: '43',
      netArea: '38',
      image: '/images/floorplans/units/d5-d6.webp',
    },
    // Studio
    {
      id: 'd1-d2',
      code: 'D1 & D2',
      badge: 'D1 & D2',
      type: 'Studio',
      category: 'studio',
      grossArea: '40',
      netArea: '36',
      image: '/images/floorplans/units/d1-d2.webp',
    },
    {
      id: 'd3-d4',
      code: 'D3 & D4',
      badge: 'D3 & D4',
      type: 'Studio',
      category: 'studio',
      grossArea: '38',
      netArea: '34',
      image: '/images/floorplans/units/d3-d4.webp',
    },
  ]

  const unitFilterTabs = [
    { id: 'all', label: isEn ? 'All' : 'Tất cả', count: 20 },
    { id: 'studio', label: 'Studio', count: 4 },
    { id: '1pn', label: isEn ? '1 Bedroom' : '1 phòng ngủ', count: 1 },
    { id: '2pn', label: isEn ? '2 Bedrooms' : '2 phòng ngủ', count: 13 },
    { id: '3pn', label: isEn ? '3 Bedrooms' : '3 phòng ngủ', count: 2 },
  ]
  const [selectedUnitCategory, setSelectedUnitCategory] = useState('all')

  const carouselRef = useRef<HTMLDivElement>(null)
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const offset = direction === 'left' ? -340 : 340
      carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' })
    }
  }

  const filteredUnitCards =
    selectedUnitCategory === 'all'
      ? detailedUnitCards
      : detailedUnitCards.filter((card) => card.category === selectedUnitCategory)

  // Unit Lightbox Modal State (Matching media_1788981962868.png & media_1788981969707.png)
  const [selectedUnitForModal, setSelectedUnitForModal] = useState<typeof detailedUnitCards[0] | null>(null)

  const currentUnitIndex = selectedUnitForModal
    ? filteredUnitCards.findIndex((u) => u.id === selectedUnitForModal.id)
    : -1

  const handlePrevUnitModal = () => {
    if (filteredUnitCards.length === 0) return
    const prevIdx = currentUnitIndex > 0 ? currentUnitIndex - 1 : filteredUnitCards.length - 1
    setSelectedUnitForModal(filteredUnitCards[prevIdx])
  }

  const handleNextUnitModal = () => {
    if (filteredUnitCards.length === 0) return
    const nextIdx = currentUnitIndex < filteredUnitCards.length - 1 ? currentUnitIndex + 1 : 0
    setSelectedUnitForModal(filteredUnitCards[nextIdx])
  }

  // Handle keyboard shortcuts (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightbox(null)
        setSelectedUnitForModal(null)
      } else if (selectedUnitForModal) {
        if (e.key === 'ArrowLeft') {
          handlePrevUnitModal()
        } else if (e.key === 'ArrowRight') {
          handleNextUnitModal()
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedUnitForModal, currentUnitIndex, filteredUnitCards])

  // Prevent background scroll when any modal is open
  useEffect(() => {
    if (lightbox || selectedUnitForModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [lightbox, selectedUnitForModal])

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. HERO BANNER SECTION (CINEMATIC LUXURY WITH /images/project-towers.jpg)  */}
      {/* ========================================================================= */}
      <section className="relative isolate overflow-hidden min-h-[440px] md:min-h-[500px] flex items-center pt-28 pb-12 md:pt-36 md:pb-16 transition-colors">
        {/* Background Image: project-towers with scale effect */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: "url('/images/project-towers.jpg')" }}
          role="img"
          aria-label={isEn ? 'Bcons Central Park Architectural Towers' : 'Phối cảnh tháp căn hộ Bcons Central Park'}
        />

        {/* Cinematic Luxury Dark Gradient Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#072018]/95 via-[#072018]/85 to-[#072018]/70 dark:from-[#04140e]/98 dark:via-[#072018]/90 dark:to-[#04140e]/85 backdrop-blur-[1px]" />

        {/* Champagne Gold Ambient Glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#e6c887]/20 to-transparent blur-3xl opacity-50" />

        <div className="relative mx-auto max-w-6xl px-4 lg:px-8 w-full">
          {/* Breadcrumb Navigation with Home Icon */}
          <nav aria-label="Đường dẫn" className="flex items-center gap-2 text-xs sm:text-sm text-white/75">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[#e6c887] font-medium"
            >
              <Home className="size-3.5" />
              <span>{t.nav.home}</span>
            </Link>
            <ChevronRight className="size-3.5 opacity-60 text-white/50" aria-hidden="true" />
            <span className="text-[#e6c887] font-semibold tracking-wide">{t.nav.plans}</span>
          </nav>

          {/* Main Title & Subtitle Matching Screenshot 1 */}
          <Reveal>
            <div className="mt-6 text-left">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase drop-shadow-md">
                {isEn ? 'BCONS CENTRAL PARK FLOOR PLANS' : 'MẶT BẰNG BCONS CENTRAL PARK'}
              </h1>

              <p className="mt-2.5 font-serif italic text-lg sm:text-xl md:text-2xl text-[#e6c887] font-medium tracking-wide drop-shadow">
                {isEn ? 'Optimized Usability – Embracing Natural Light' : 'Tối ưu công năng – Đón sáng tự nhiên'}
              </p>

              <p className="mt-4 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed text-white/85 font-sans font-normal drop-shadow-sm">
                {isEn
                  ? 'Smart architectural design, optimized living spaces, 100% of apartments boast fresh air balconies and private loggias, providing an airy, comfortable and healthy lifestyle.'
                  : 'Thiết kế thông minh, tối ưu diện tích sử dụng, tất cả các căn hộ đều có ban công và logia đón gió, mang đến không gian sống thoáng đãng và tiện nghi.'}
              </p>
            </div>
          </Reveal>

          {/* 5 Highlights Bento Glass Cards (Matching media_1788980438112.png) */}
          <Reveal delay={0.1}>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl">
              {heroHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-3.5 sm:p-4 backdrop-blur-md border border-white/15 bg-white/10 dark:bg-[#072018]/70 hover:border-[#e6c887]/60 hover:bg-white/15 transition-all duration-300 group shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex size-8 items-center justify-center rounded-xl bg-[#e6c887]/20 text-[#e6c887] border border-[#e6c887]/40 group-hover:scale-110 transition-transform">
                      <item.icon className="size-4" />
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-white/50">0{idx + 1}</span>
                  </div>
                  <div className="mt-3">
                    <span className="block text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase text-white/70">
                      {item.label}
                    </span>
                    <span className="mt-0.5 block font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#e6c887] transition-colors whitespace-nowrap">
                      {item.value} {item.unit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. BLOCK TABS & ASYMMETRICAL 2-COLUMN SECTION (MASTERPLAN + FORM)         */}
      {/* ========================================================================= */}
      <section className="bg-background py-16 lg:py-24 border-b border-border/60 dark:border-white/5 transition-colors">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          {/* Sub-Navigation Block Pills (Matching media_1788980447595.png) */}
          <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-border/70 dark:border-white/10">
            {blockTabs.map((tab) => {
              const isActive = activeBlockTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveBlockTab(tab.id)
                    if (tab.id !== 'tong-quan') {
                      setSelectedTypicalBlock(tab.id)
                    }
                  }}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-primary text-white dark:bg-[#e6c887] dark:text-[#072018] shadow-md scale-105 ring-2 ring-primary/30 dark:ring-[#e6c887]/50'
                      : 'bg-card border border-border/80 text-foreground/80 hover:text-primary dark:hover:text-[#e6c887] hover:border-primary/40 dark:border-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* 2-Column Grid: Left Drawing (8 cols) & Right Form (4 cols) */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: Master Plan Drawing & View Orientations */}
            <div className="lg:col-span-8 flex flex-col space-y-8">
              {/* Header Box */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-wide text-foreground">
                    {isEn ? 'OVERALL MASTER PLAN' : 'MẶT BẰNG TỔNG THỂ'}
                  </h2>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary dark:bg-[#e6c887]/15 dark:text-[#e6c887] border border-primary/20 dark:border-[#e6c887]/30">
                    {isEn ? '5 BLOCKS · TYPICAL RESIDENTIAL FLOORS' : '5 block · tầng căn hộ điển hình'}
                  </span>
                </div>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {isEn
                    ? 'Combined typical floor layout of all 5 blocks: Tamarind, Palm, Lotus, Bamboo, and Orchid encircling the lush central park, unit codes with wall-center dimensions and facade view orientations. Click to enlarge.'
                    : 'Bản vẽ tầng căn hộ điển hình in chung cả 5 block: các tháp Tamarind, Palm, Lotus, Bamboo và Orchid vây quanh khu công viên nội khu, mã căn cùng diện tích tim tường của từng căn trên tầng, và hướng view của từng mặt đứng. Bấm vào bản vẽ để xem khổ lớn.'}
                </p>
              </div>

              {/* Double-Bezel Masterplan Image Container */}
              <div className="rounded-[2rem] p-2 sm:p-2.5 bg-secondary/40 dark:bg-card/40 border border-border/80 dark:border-white/10 shadow-xl">
                <div
                  onClick={() => {
                    setLightbox('/images/floorplans/masterplan-all-blocks.webp')
                    setLightboxCaption(isEn ? 'Overall Master Plan - All 5 Blocks' : 'Mặt bằng tầng căn hộ điển hình tổng thể 5 block')
                  }}
                  className="group relative rounded-[calc(2rem-0.625rem)] overflow-hidden bg-white dark:bg-slate-950 cursor-pointer border border-slate-200/80 dark:border-white/10 flex items-center justify-center p-3 sm:p-6"
                >
                  <img
                    src="/images/floorplans/masterplan-all-blocks.webp"
                    alt="Mặt bằng tầng căn hộ điển hình tổng thể 5 block Bcons Central Park"
                    className="w-full h-auto max-h-[580px] object-contain transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover Overlay with Zoom Button */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-[#072018]/90 text-[#e6c887] border border-[#e6c887]/50 text-xs font-bold tracking-wider uppercase shadow-2xl backdrop-blur-md">
                      <ZoomIn className="size-4" />
                      <span>{isEn ? 'Click to Enlarge High-Res' : 'Bấm để phóng to chi tiết'}</span>
                    </span>
                  </div>

                  {/* Corner Zoom Pill */}
                  <button
                    type="button"
                    className="absolute right-4 bottom-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 bg-card/90 dark:bg-slate-900/90 text-foreground border border-border/80 dark:border-white/20 text-xs font-semibold shadow-md backdrop-blur-sm transition-transform hover:scale-105"
                  >
                    <ZoomIn className="size-3.5 text-primary dark:text-[#e6c887]" />
                    <span>{isEn ? 'Enlarge' : 'Xem lớn'}</span>
                  </button>
                </div>
              </div>

              {/* Block View Directions Box (Matching media_1788980485338.png) */}
              <div className="rounded-2xl border border-border/80 dark:border-white/10 bg-card p-5 sm:p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-border/60 dark:border-white/10">
                  <h3 className="font-serif text-lg font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
                    <Compass className="size-5 text-primary dark:text-[#e6c887]" />
                    <span>{isEn ? 'VIEW DIRECTIONS FOR EACH BLOCK' : 'HƯỚNG VIEW TỪNG BLOCK'}</span>
                  </h3>

                  {/* Button-in-Button 360 Tour Button (High-End Visual Design) */}
                  <a
                    href="https://bcons-centralpark-360.2fvisual.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 rounded-full pl-5 pr-2 py-2 text-xs sm:text-sm font-bold tracking-wider uppercase bg-primary text-white hover:bg-primary/90 dark:bg-[#072018] dark:text-[#e6c887] border border-primary/20 dark:border-[#e6c887]/60 dark:hover:bg-[#e6c887] dark:hover:text-[#072018] shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>{isEn ? 'EXPLORE 360° VIRTUAL TOUR' : 'XEM 360° TOÀN DỰ ÁN'}</span>
                    <span className="size-7 rounded-full bg-white/20 dark:bg-[#e6c887]/20 group-hover:bg-white/30 dark:group-hover:bg-[#072018]/20 flex items-center justify-center transition-transform group-hover:scale-110">
                      <Eye className="size-3.5" />
                    </span>
                  </a>
                </div>

                {/* View Descriptions Grid */}
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                  {blockViews.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-secondary/30 dark:bg-card/70 border border-border/50 dark:border-white/5 hover:border-primary/30 dark:hover:border-[#e6c887]/30 transition-colors"
                    >
                      <span className="font-serif font-bold text-sm text-primary dark:text-[#e6c887] shrink-0 min-w-[80px]">
                        {item.block}:
                      </span>
                      <span className="text-foreground/90 font-medium leading-relaxed">{item.view}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Consultation & Floor Plan Package Card */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <div className="rounded-3xl border border-primary/20 dark:border-[#e6c887]/30 bg-gradient-to-br from-card via-card to-primary/5 dark:from-[#0c241b] dark:to-[#071a14] p-6 sm:p-7 text-foreground shadow-xl relative overflow-hidden">
                <div className="pointer-events-none absolute -top-12 -right-12 size-40 rounded-full bg-[#e6c887]/15 dark:bg-[#e6c887]/10 blur-2xl" />

                {/* Card Header */}
                <div className="border-b border-border/60 dark:border-white/15 pb-5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary dark:bg-[#e6c887]/15 dark:text-[#e6c887] border border-primary/20 dark:border-[#e6c887]/30">
                    <Sparkles className="size-3" />
                    {isEn ? 'OFFICIAL VECTOR DRAWINGS' : 'TRỌN BỘ THIẾT KẾ MẶT BẰNG 1:500'}
                  </span>
                  <h3 className="mt-2.5 font-serif text-xl sm:text-2xl font-bold uppercase tracking-wide text-foreground">
                    {isEn ? 'GET FULL FLOOR PLAN PACK' : 'Nhận Bản Vẽ Vector & Bảng Phân Tích'}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                    {isEn
                      ? 'Register for high-res vector floor plans, unit selection analysis, and feng shui orientation guidance from specialist Le Ngoc Long.'
                      : 'Chuyên viên Lê Ngọc Long sẽ gửi trọn bộ file PDF bản vẽ thiết kế mặt bằng chi tiết 5 block, sơ đồ bố trí căn hộ và tư vấn chọn tầng đẹp hợp phong thủy.'}
                  </p>
                </div>

                {/* CTA Action Buttons */}
                <div className="mt-6 space-y-3 font-sans">
                  <button
                    type="button"
                    onClick={() =>
                      openConsultation({
                        source: 'Trang Mặt Bằng - Nhận trọn bộ thiết kế mặt bằng',
                        unitType: 'all',
                      })
                    }
                    className="w-full py-3.5 px-4 rounded-xl font-sans font-bold text-xs sm:text-sm tracking-wide uppercase shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90 dark:bg-gradient-to-r dark:from-[#e6c887] dark:via-[#f7e4b5] dark:to-[#e6c887] dark:text-[#072018] cursor-pointer group/btn"
                  >
                    <span>{isEn ? 'REGISTER FOR FULL PLAN PACK' : 'ĐĂNG KÝ NHẬN TRỌN BỘ THIẾT KẾ'}</span>
                    <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  <div className="pt-3 border-t border-border/60 dark:border-white/10 flex items-center justify-between text-xs">
                    <span className="text-muted-foreground flex items-center gap-1.5">
                      <PhoneCall className="size-3.5 text-primary dark:text-[#e6c887]" />
                      Hotline 24/7:
                    </span>
                    <a
                      href="tel:0376671776"
                      className="font-bold text-primary dark:text-[#e6c887] hover:underline"
                    >
                      0376 671 776
                    </a>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-border/60 dark:border-white/10 flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
                  <ShieldCheck className="size-3.5 text-primary dark:text-[#e6c887]" />
                  <span>{isEn ? 'Strict privacy guarantee of personal info' : 'Cam kết bảo mật thông tin khách hàng'}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. TYPICAL FLOOR PLAN WITH CONTROLS (Matching media_1788982015726.png & media_1788982151968.png) */}
      {/* ========================================================================= */}
      <section className="bg-secondary/40 dark:bg-card/40 py-16 lg:py-24 border-b border-border/60 dark:border-white/5 transition-colors">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          {/* Header Row: Title & Download Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/70 dark:border-white/10">
            <div>
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-primary dark:text-[#e6c887]">
                {isEn ? 'FLOOR LAYOUT SCHEMATIC' : 'SƠ ĐỒ BỐ TRÍ TẦNG'}
              </span>
              <h2 className="mt-1 font-serif text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-foreground">
                {isEn ? 'TYPICAL FLOOR PLAN' : 'MẶT BẰNG TẦNG ĐIỂN HÌNH'}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-xl">
                {isEn
                  ? 'Detailed unit breakdown with wall-center and carpet areas, natural daylight corridor design.'
                  : 'Bố trí căn hộ điển hình, thang máy tốc độ cao và hành lang thông thoáng đón ánh sáng tự nhiên.'}
              </p>
            </div>

            {/* Download Plan Button (Top Right matching media_1788982151968.png) */}
            {typicalBlockData[selectedTypicalBlock]?.image ? (
              <a
                href={typicalBlockData[selectedTypicalBlock].image!}
                download={`bcons-central-park-mat-bang-dien-hinh-${selectedTypicalBlock}.webp`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border/80 dark:border-white/15 bg-card hover:bg-secondary/80 dark:hover:bg-white/10 px-4 py-2.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-foreground transition-all shadow-sm cursor-pointer shrink-0 self-start sm:self-center"
              >
                <span>{isEn ? 'DOWNLOAD PLAN' : 'TẢI MẶT BẰNG'}</span>
                <Download className="size-4 text-primary dark:text-[#e6c887]" />
              </a>
            ) : (
              <button
                type="button"
                onClick={() =>
                  openConsultation({
                    source: `Trang Mặt Bằng - Nhận bản vẽ ${typicalBlockData[selectedTypicalBlock]?.name || selectedTypicalBlock}`,
                  })
                }
                className="inline-flex items-center gap-2 rounded-xl border border-primary/30 dark:border-[#e6c887]/30 bg-primary/10 text-primary dark:bg-[#e6c887]/15 dark:text-[#e6c887] hover:bg-primary/20 px-4 py-2.5 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-sm cursor-pointer shrink-0 self-start sm:self-center"
              >
                <span>{isEn ? 'REGISTER TO GET PLAN' : 'ĐĂNG KÝ NHẬN BẢN VẼ'}</span>
                <Download className="size-4 text-primary dark:text-[#e6c887]" />
              </button>
            )}
          </div>

          {/* Controls Row: Custom Block Dropdown & Custom Floor Dropdown */}
          <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6">
            {/* Custom Select Block */}
            <div className="flex items-center gap-2.5">
              <span className="text-xs sm:text-sm font-medium text-muted-foreground whitespace-nowrap">
                {isEn ? 'Select Block' : 'Chọn Block'}
              </span>
              <div ref={blockDropdownRef} className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setIsBlockDropdownOpen(!isBlockDropdownOpen)
                    setIsFloorDropdownOpen(false)
                  }}
                  className="inline-flex items-center justify-between gap-3 rounded-xl bg-card border border-border/80 dark:border-white/15 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold text-foreground shadow-sm hover:border-primary/50 dark:hover:border-[#e6c887]/50 transition-all cursor-pointer min-w-[145px]"
                >
                  <span>{typicalBlockData[selectedTypicalBlock]?.name || 'Block Orchid'}</span>
                  <ChevronDown
                    className={`size-4 text-muted-foreground transition-transform duration-200 ${
                      isBlockDropdownOpen ? 'rotate-180 text-primary dark:text-[#e6c887]' : ''
                    }`}
                  />
                </button>

                {/* Popover */}
                {isBlockDropdownOpen && (
                  <div className="absolute left-0 top-full mt-1.5 z-40 w-52 rounded-2xl bg-card border border-border/80 dark:border-white/15 shadow-2xl p-1.5 backdrop-blur-md">
                    {blockOptions.map((opt) => {
                      const isSelected = selectedTypicalBlock === opt.id
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setSelectedTypicalBlock(opt.id)
                            setIsBlockDropdownOpen(false)
                          }}
                          className={`w-full px-3.5 py-2.5 rounded-xl text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? 'bg-primary text-primary-foreground dark:bg-[#e6c887] dark:text-[#072018]'
                              : 'text-foreground hover:bg-secondary dark:hover:bg-white/10'
                          }`}
                        >
                          <span>{opt.label}</span>
                          {!opt.available && (
                            <span
                              className={`text-[10px] px-2 py-0.5 rounded-full font-normal ${
                                isSelected
                                  ? 'bg-white/20 text-white dark:bg-[#072018]/20 dark:text-[#072018]'
                                  : 'bg-secondary text-muted-foreground dark:bg-white/10'
                              }`}
                            >
                              {isEn ? 'Coming soon' : 'Chưa có'}
                            </span>
                          )}
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Custom Select Floor */}
            <div className="flex items-center gap-2.5">
              <span className="text-xs sm:text-sm font-medium text-muted-foreground whitespace-nowrap">
                {isEn ? 'Select Floor' : 'Chọn tầng'}
              </span>
              <div ref={floorDropdownRef} className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setIsFloorDropdownOpen(!isFloorDropdownOpen)
                    setIsBlockDropdownOpen(false)
                  }}
                  className="inline-flex items-center justify-between gap-3 rounded-xl bg-card border border-border/80 dark:border-white/15 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold text-foreground shadow-sm hover:border-primary/50 dark:hover:border-[#e6c887]/50 transition-all cursor-pointer min-w-[150px]"
                >
                  <span>
                    {floorOptions.find((f) => f.id === selectedTypicalFloor)?.label ||
                      (isEn ? 'Floor 10' : 'Tầng 10')}
                  </span>
                  <ChevronDown
                    className={`size-4 text-muted-foreground transition-transform duration-200 ${
                      isFloorDropdownOpen ? 'rotate-180 text-primary dark:text-[#e6c887]' : ''
                    }`}
                  />
                </button>

                {/* Popover */}
                {isFloorDropdownOpen && (
                  <div className="absolute left-0 top-full mt-1.5 z-40 w-48 rounded-2xl bg-card border border-border/80 dark:border-white/15 shadow-2xl p-1.5 backdrop-blur-md">
                    {floorOptions.map((opt) => {
                      const isSelected = selectedTypicalFloor === opt.id
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setSelectedTypicalFloor(opt.id)
                            setIsFloorDropdownOpen(false)
                          }}
                          className={`w-full px-3.5 py-2.5 rounded-xl text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? 'bg-primary text-primary-foreground dark:bg-[#e6c887] dark:text-[#072018]'
                              : 'text-foreground hover:bg-secondary dark:hover:bg-white/10'
                          }`}
                        >
                          <span>{opt.label}</span>
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Typical Floor Display Container */}
          <div className="mt-8 rounded-[2rem] p-2 sm:p-3 bg-card border border-border/80 dark:border-white/10 shadow-xl">
            {typicalBlockData[selectedTypicalBlock]?.image ? (
              <div
                onClick={() => {
                  setLightbox(typicalBlockData[selectedTypicalBlock].image!)
                  setLightboxCaption(
                    isEn
                      ? `Typical Floor Plan - ${typicalBlockData[selectedTypicalBlock].name} (${
                          floorOptions.find((f) => f.id === selectedTypicalFloor)?.label || selectedTypicalFloor
                        })`
                      : `Mặt bằng tầng điển hình - ${typicalBlockData[selectedTypicalBlock].name} (${
                          floorOptions.find((f) => f.id === selectedTypicalFloor)?.label || selectedTypicalFloor
                        })`
                  )
                }}
                className="group relative rounded-[calc(2rem-0.625rem)] overflow-hidden bg-white dark:bg-slate-950 p-4 sm:p-8 cursor-pointer border border-slate-200/80 dark:border-white/10"
              >
                {/* Surrounding Orientation Direction Indicators */}
                <div className="mb-4 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2 gap-2">
                  <span className="flex items-center gap-1.5 text-primary dark:text-[#e6c887]">
                    {typicalBlockData[selectedTypicalBlock].topOrientLeft}
                  </span>
                  <span className="flex items-center gap-1.5 text-primary dark:text-[#e6c887]">
                    {typicalBlockData[selectedTypicalBlock].topOrientRight}
                  </span>
                </div>

                <div className="relative flex items-center justify-center my-4">
                  <img
                    src={typicalBlockData[selectedTypicalBlock].image!}
                    alt={`Mặt bằng tầng điển hình ${typicalBlockData[selectedTypicalBlock].name} Bcons Central Park`}
                    className="w-full h-auto max-h-[520px] object-contain transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-[#072018]/90 text-[#e6c887] border border-[#e6c887]/50 text-xs font-bold tracking-wider uppercase shadow-2xl backdrop-blur-md">
                      <ZoomIn className="size-4" />
                      <span>{isEn ? 'Click to Enlarge Floorplan' : 'Bấm để phóng to chi tiết mặt bằng'}</span>
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs font-bold uppercase tracking-wider text-muted-foreground border-t border-border/40 pt-2 gap-2">
                  <span className="text-muted-foreground">
                    {typicalBlockData[selectedTypicalBlock].bottomOrientLeft}
                  </span>
                  <span className="text-muted-foreground">
                    {typicalBlockData[selectedTypicalBlock].bottomOrientRight}
                  </span>
                </div>
              </div>
            ) : (
              /* Empty State (Matching media_1788982151968.png) */
              <div className="rounded-[calc(2rem-0.625rem)] overflow-hidden bg-slate-50/70 dark:bg-slate-950 p-8 sm:p-16 border border-slate-200/80 dark:border-white/10 flex flex-col items-center justify-center text-center min-h-[380px] sm:min-h-[440px]">
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                  {isEn
                    ? `Typical floor plan for ${typicalBlockData[selectedTypicalBlock]?.name || 'this block'} is not yet available`
                    : `Chưa có mặt bằng tầng điển hình cho ${typicalBlockData[selectedTypicalBlock]?.name || 'block này'}`}
                </h3>
                <p className="mt-3 max-w-lg text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                  {isEn
                    ? 'The developer has not yet published the typical floor plan for this block. Leave your contact details in the form above and we will send it immediately once officially released.'
                    : 'Chủ đầu tư chưa phát hành bản vẽ tầng điển hình của block này. Để lại thông tin ở form bên cạnh, tôi gửi ngay khi có bản chính thức.'}
                </p>
                <button
                  type="button"
                  onClick={() =>
                    openConsultation({
                      source: `Trang Mặt Bằng - Nhận bản vẽ ${typicalBlockData[selectedTypicalBlock]?.name || selectedTypicalBlock}`,
                    })
                  }
                  className="mt-8 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary dark:text-[#e6c887] hover:underline cursor-pointer"
                >
                  <span>👌 {isEn ? 'Contact to receive plans as soon as published by the developer' : 'Liên hệ để nhận bản vẽ ngay khi chủ đầu tư phát hành'}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. BASEMENT & ROOF PLAN (Matching media_1788980561804.png)                 */}
      {/* ========================================================================= */}
      <section className="bg-background py-16 lg:py-24 border-b border-border/60 dark:border-white/5 transition-colors">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-foreground">
                {isEn ? 'BASEMENT & ROOFTOP PLANS' : 'MẶT BẰNG TẦNG HẦM & TẦNG MÁI'}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-3xl">
                {isEn
                  ? 'Features outside typical residence floors: 2 underground parking basements and panoramic rooftop deck. Crucial information for vehicle capacity and high-rise vista.'
                  : 'Phần dự án nằm ngoài tầng căn hộ: 2 tầng hầm để xe bên dưới và tầng mái nhìn từ trên xuống. Người mua thường bỏ qua hai tờ này, nhưng chúng cho biết chỗ để xe rộng đến đâu và cảnh nhìn xuống từ căn hộ tầng cao là gì.'}
              </p>
            </div>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-secondary text-foreground dark:bg-card dark:text-[#e6c887] border border-border dark:border-white/10">
              {isEn ? '2 BASEMENTS · 22 STOREYS' : '2 tầng hầm · 22 tầng nổi'}
            </span>
          </div>

          {/* 3 Tabs: Tầng hầm 1, Tầng hầm 2, Tầng mái */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { id: 'ham-1', label: isEn ? 'Basement 1' : 'Tầng hầm 1' },
              { id: 'ham-2', label: isEn ? 'Basement 2' : 'Tầng hầm 2' },
              { id: 'mai', label: isEn ? 'Rooftop Deck' : 'Tầng mái' },
            ].map((tab) => {
              const isActive = activeUndergroundTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveUndergroundTab(tab.id as any)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-primary text-white dark:bg-[#e6c887] dark:text-[#072018] shadow-md scale-105'
                      : 'bg-card border border-border/80 text-foreground/80 hover:text-primary dark:hover:text-[#e6c887] dark:border-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Tab Content Display */}
          <div className="mt-6 rounded-[2rem] p-2 sm:p-3 bg-secondary/30 dark:bg-card/40 border border-border/80 dark:border-white/10 shadow-xl">
            <div
              onClick={() => {
                setLightbox(undergroundData[activeUndergroundTab].image)
                setLightboxCaption(undergroundData[activeUndergroundTab].title)
              }}
              className="group relative rounded-[calc(2rem-0.625rem)] overflow-hidden bg-white dark:bg-slate-950 p-4 sm:p-8 cursor-pointer border border-slate-200/80 dark:border-white/10 flex flex-col items-center"
            >
              <div className="w-full flex items-center justify-between pb-4 border-b border-border/50 text-xs font-semibold text-muted-foreground mb-4">
                <span className="font-serif font-bold text-sm sm:text-base text-primary dark:text-[#e6c887]">
                  {undergroundData[activeUndergroundTab].title}
                </span>
                <span>{undergroundData[activeUndergroundTab].desc}</span>
              </div>

              <img
                src={undergroundData[activeUndergroundTab].image}
                alt={undergroundData[activeUndergroundTab].title}
                className="w-full h-auto max-h-[500px] object-contain transition-transform duration-700 group-hover:scale-105 my-2"
              />

              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-[#072018]/90 text-[#e6c887] border border-[#e6c887]/50 text-xs font-bold tracking-wider uppercase shadow-2xl backdrop-blur-md">
                  <ZoomIn className="size-4" />
                  <span>{isEn ? 'Click to Enlarge Plan' : 'Bấm để xem khổ lớn'}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SPECIFIC UNIT FLOOR LAYOUTS (Studio, 1PN, 2PN, 3PN)                    */}
      {/* ========================================================================= */}
      <section id="chi-tiet-can" className="bg-secondary/30 dark:bg-card/30 py-16 lg:py-24 transition-colors">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          {/* Section Header with Meta Tag */}
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-border/60 dark:border-white/10 pb-4">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight uppercase">
              {isEn ? 'DETAILED UNIT FLOOR PLANS' : 'MẶT BẰNG CHI TIẾT TỪNG LOẠI CĂN'}
            </h2>
            <span className="text-xs sm:text-sm font-sans font-medium text-muted-foreground shrink-0">
              {isEn ? '20 unit codes · Floors 3 – 22' : '20 mã căn · tầng 3 – 22'}
            </span>
          </div>

          {/* Section Description */}
          <p className="mt-4 max-w-3xl text-sm sm:text-base text-foreground/80 dark:text-foreground/75 leading-relaxed">
            {isEn
              ? 'Architectural floor plan collection issued by the developer for each unit code, featuring key plan indicating floor position, balcony orientation, and clear-span dimensions. Swipe horizontally (or click arrows) to browse the collection, select any unit code to view in high-resolution lightbox — some original sheets combine two unit codes and will open together.'
              : 'Bộ bản vẽ chủ đầu tư phát hành cho từng mã căn, kèm key plan chỉ vị trí căn trên tầng, hướng ban công và kích thước thông thuỷ. Vuốt ngang (hoặc bấm mũi tên) để lướt qua cả bộ, chọn một mã căn để xem bản vẽ khổ lớn — vài tờ bản vẽ gốc in chung hai mã căn nên sẽ mở ra cùng một tờ.'}
          </p>

          {/* Filter Pills Tabs */}
          <div className="mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3">
            {unitFilterTabs.map((tab) => {
              const isActive = selectedUnitCategory === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedUnitCategory(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-primary text-white shadow-md dark:bg-[#e6c887] dark:text-[#072018]'
                      : 'bg-card border border-border/70 text-foreground/80 hover:border-primary/40 hover:text-foreground dark:border-white/10 dark:bg-card/60'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`inline-flex items-center justify-center rounded-full px-2 py-0.5 text-[11px] font-bold min-w-5 h-5 ${
                      isActive
                        ? 'bg-white/20 text-white dark:bg-[#072018]/20 dark:text-[#072018]'
                        : 'bg-secondary text-muted-foreground dark:bg-white/10 dark:text-white/70'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Horizontal Carousel Container with Floating Controls */}
          <div className="relative mt-8">
            {/* Left Nav Arrow */}
            <button
              type="button"
              onClick={() => scrollCarousel('left')}
              aria-label={isEn ? 'Previous unit' : 'Xem căn trước'}
              className="hidden sm:inline-flex absolute -left-4 lg:-left-5 top-1/2 -translate-y-1/2 z-20 size-10 items-center justify-center rounded-full bg-background/95 text-foreground border border-border/70 shadow-lg hover:bg-background hover:scale-105 transition-all cursor-pointer dark:border-white/15 dark:bg-card/95"
            >
              <ChevronLeft className="size-5" />
            </button>

            {/* Right Nav Arrow */}
            <button
              type="button"
              onClick={() => scrollCarousel('right')}
              aria-label={isEn ? 'Next unit' : 'Xem căn kế tiếp'}
              className="hidden sm:inline-flex absolute -right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-20 size-10 items-center justify-center rounded-full bg-background/95 text-foreground border border-border/70 shadow-lg hover:bg-background hover:scale-105 transition-all cursor-pointer dark:border-white/15 dark:bg-card/95"
            >
              <ChevronRight className="size-5" />
            </button>

            {/* Scrollable Unit Cards */}
            <div
              ref={carouselRef}
              className="flex gap-4 sm:gap-5 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {filteredUnitCards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => setSelectedUnitForModal(card)}
                  className="group w-[260px] sm:w-[280px] shrink-0 snap-start rounded-2xl border border-border/70 dark:border-white/10 bg-card p-3 sm:p-4 shadow-sm hover:shadow-xl hover:border-primary/40 dark:hover:border-[#e6c887]/50 transition-all duration-300 flex flex-col cursor-pointer"
                >
                  {/* Top Architectural Sheet Container */}
                  <div className="relative rounded-xl overflow-hidden bg-slate-100 dark:bg-[#061812]/40 border border-border/40 dark:border-white/5 aspect-[3/4] flex items-center justify-center p-2">
                    {/* Badge Top Left */}
                    <span className="absolute top-2.5 left-2.5 z-10 rounded-md px-2.5 py-1 text-xs font-bold tracking-wider bg-primary text-white dark:bg-[#072018] dark:text-[#e6c887] border border-primary/20 dark:border-[#e6c887]/30 shadow-md">
                      {card.badge}
                    </span>

                    {/* Sheet Image */}
                    <img
                      src={card.image}
                      alt={`Mặt bằng căn hộ ${card.badge} - Bcons Central Park`}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Zoom Icon Button Bottom Right */}
                    <div className="absolute bottom-2.5 right-2.5 z-10 inline-flex size-7 items-center justify-center rounded-full bg-background/90 text-foreground/80 group-hover:text-primary dark:group-hover:text-[#e6c887] shadow backdrop-blur transition-transform group-hover:scale-110">
                      <ZoomIn className="size-3.5" />
                    </div>
                  </div>

                  {/* Card Info Bottom */}
                  <div className="mt-3.5 flex flex-col gap-1">
                    <h4 className="font-serif font-bold text-base text-foreground group-hover:text-primary dark:group-hover:text-[#e6c887] transition-colors">
                      {card.type}
                    </h4>
                    <div className="text-xs sm:text-sm text-muted-foreground flex items-baseline gap-1.5">
                      <span>{isEn ? 'Gross' : 'Sàn'}</span>
                      <strong className="font-serif font-bold text-foreground text-sm sm:text-base">
                        {card.grossArea} m²
                      </strong>
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground flex items-baseline gap-1.5">
                      <span>{isEn ? 'Carpet' : 'Sử dụng'}</span>
                      <strong className="font-serif font-bold text-foreground text-sm sm:text-base">
                        {card.netArea} m²
                      </strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Clarification Callout Note */}
          <div className="mt-6 rounded-2xl border border-border/70 dark:border-white/10 bg-secondary/30 dark:bg-card/40 p-4 sm:p-5 flex items-start gap-3.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <Info className="size-5 shrink-0 text-primary dark:text-[#e6c887] mt-0.5" />
            <p>
              {isEn
                ? 'Specifically for the 2-bedroom group, this drawing set ranges from 50 m² (unit C3) to 73 m² (unit B4). Dimensions on the drawings are for reference; official areas of each unit correspond to the technical annex attached to the sales contract.'
                : 'Riêng nhóm 2 phòng ngủ, bộ bản vẽ này trải từ 50 m² (căn C3) đến 73 m² (căn B4). Kích thước trên bản vẽ mang tính tham khảo; diện tích chính thức của từng căn theo thiết kế đính kèm hợp đồng mua bán.'}
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* DETAILED UNIT MODAL (MATCHING media_1788981962868.png & media_1788981969707.png) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedUnitForModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-3 sm:p-6 lg:p-8 backdrop-blur-md"
            onClick={() => setSelectedUnitForModal(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl xl:max-w-6xl max-h-[92vh] bg-white dark:bg-[#071d15] rounded-2xl sm:rounded-3xl shadow-2xl border border-border/80 dark:border-white/10 flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Modal Header */}
              <div className="px-5 sm:px-8 py-3.5 sm:py-4 border-b border-border/60 dark:border-white/10 bg-white/95 dark:bg-[#071d15]/95 backdrop-blur-sm flex items-center justify-between shrink-0 z-10">
                <div>
                  <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#072018] dark:text-[#e6c887]">
                    {isEn ? `Unit ${selectedUnitForModal.badge}` : `Căn ${selectedUnitForModal.badge}`}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-muted-foreground mt-0.5">
                    {isEn
                      ? `${selectedUnitForModal.type} · Gross ${selectedUnitForModal.grossArea} m² · Usable ${selectedUnitForModal.netArea} m²`
                      : `${selectedUnitForModal.type} · sàn ${selectedUnitForModal.grossArea} m² · sử dụng ${selectedUnitForModal.netArea} m²`}
                  </p>
                </div>

                {/* Top-Right Control Buttons: Prev, Next, Close */}
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <button
                    type="button"
                    onClick={handlePrevUnitModal}
                    aria-label={isEn ? 'Previous unit' : 'Căn trước'}
                    className="size-9 sm:size-10 rounded-full border border-border/80 dark:border-white/15 bg-background/80 hover:bg-secondary dark:hover:bg-white/10 text-foreground flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                  >
                    <ChevronLeft className="size-4 sm:size-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextUnitModal}
                    aria-label={isEn ? 'Next unit' : 'Căn kế tiếp'}
                    className="size-9 sm:size-10 rounded-full border border-border/80 dark:border-white/15 bg-background/80 hover:bg-secondary dark:hover:bg-white/10 text-foreground flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                  >
                    <ChevronRight className="size-4 sm:size-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedUnitForModal(null)}
                    aria-label={isEn ? 'Close modal' : 'Đóng cửa sổ'}
                    className="size-9 sm:size-10 rounded-full border border-border/80 dark:border-white/15 bg-background/80 hover:bg-secondary dark:hover:bg-white/10 text-foreground flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95 ml-1"
                  >
                    <X className="size-4 sm:size-5" />
                  </button>
                </div>
              </div>

              {/* Scrollable Modal Content: Image stretches to fill width horizontally */}
              <div className="flex-1 overflow-y-auto p-2 sm:p-6 bg-slate-50/70 dark:bg-black/25">
                <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden bg-white dark:bg-slate-900 border border-border/40 dark:border-white/5 shadow-sm">
                  <img
                    src={selectedUnitForModal.image}
                    alt={`Bản vẽ mặt bằng Căn ${selectedUnitForModal.badge} - Bcons Central Park`}
                    className="w-full h-auto object-contain block"
                    style={{ imageRendering: '-webkit-optimize-contrast' }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* General Lightbox Modal for other floorplans (Masterplan, Basement, Rooftop, Typical) */}
      <AnimatePresence>
        {lightbox && !selectedUnitForModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-3 sm:p-6 backdrop-blur-md"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl xl:max-w-6xl max-h-[92vh] bg-white dark:bg-[#071d15] rounded-2xl sm:rounded-3xl shadow-2xl border border-border/80 dark:border-white/10 flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="px-5 sm:px-8 py-3.5 sm:py-4 border-b border-border/60 dark:border-white/10 bg-white/95 dark:bg-[#071d15]/95 backdrop-blur-sm flex items-center justify-between shrink-0 z-10">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground truncate pr-4">
                  {lightboxCaption || (isEn ? 'Detailed Floor Plan' : 'Bản vẽ mặt bằng chi tiết')}
                </h3>
                <button
                  type="button"
                  onClick={() => setLightbox(null)}
                  aria-label={isEn ? 'Close' : 'Đóng'}
                  className="size-9 sm:size-10 rounded-full border border-border/80 dark:border-white/15 bg-background/80 hover:bg-secondary dark:hover:bg-white/10 text-foreground flex items-center justify-center transition-all cursor-pointer shrink-0"
                >
                  <X className="size-4 sm:size-5" />
                </button>
              </div>

              {/* Image Container */}
              <div className="flex-1 overflow-y-auto p-3 sm:p-6 bg-slate-50/70 dark:bg-black/25 flex items-center justify-center">
                <img
                  src={lightbox}
                  alt={lightboxCaption || 'Bản vẽ mặt bằng Bcons Central Park'}
                  className="w-full max-h-[78vh] object-contain rounded-xl"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

