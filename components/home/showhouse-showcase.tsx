'use client'

import { useState, useEffect, useMemo, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  CalendarCheck,
  Pause,
  Play,
  ArrowRight,
  Expand,
  X,
  BedDouble,
  Ruler,
  Compass,
  Building2,
  Eye,
} from 'lucide-react'
import { Reveal } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'
import { nhaMauImages, apartmentConfigs } from '@/lib/nha-mau-data'

interface ShowcaseRoom {
  id: string
  title: string
  titleEn: string
  caption: string
  captionEn: string
  src: string
  type: 'a1' | 'b4' | 'c1'
  typeLabel: string
}

const APARTMENT_ROOMS: Record<'a1' | 'b4' | 'c1', ShowcaseRoom[]> = {
  a1: [
    {
      id: 'a1-1',
      title: 'Phòng khách – Vách TV',
      titleEn: 'Living Room – TV Wall',
      caption: 'Phòng khách sang trọng liên kết trực tiếp ban công thoáng đãng',
      captionEn: 'Spacious living room directly connected to the breezy balcony',
      src: '/images/nha-mau/a1-01-bcons-central-park-nha-mau-a1-phong-khach.wQVLyslN_ZSqv2q.webp',
      type: 'a1',
      typeLabel: 'Căn A1 · 88 m²',
    },
    {
      id: 'a1-2',
      title: 'Phòng khách & Bàn ăn',
      titleEn: 'Living & Dining Area',
      caption: 'Bố cục mở rộng rãi tạo cảm giác kết nối gia đình ấm cúng',
      captionEn: 'Open layout fostering warm family togetherness and spatial fluidity',
      src: '/images/nha-mau/a1-02-bcons-central-park-nha-mau-a1-phong-khach-ban-an.D0yg04J-_1OUPXP.webp',
      type: 'a1',
      typeLabel: 'Căn A1 · 88 m²',
    },
    {
      id: 'a1-5',
      title: 'Bếp chữ L & Lô gia',
      titleEn: 'L-Shaped Kitchen & Loggia',
      caption: 'Khu bếp thông thoáng tách biệt, liền kề giặt phơi đối lưu gió',
      captionEn: 'Well-ventilated kitchen adjacent to a separated laundry loggia',
      src: '/images/nha-mau/a1-05-bcons-central-park-nha-mau-a1-bep.BQH20pMX_JVsKQ.webp',
      type: 'a1',
      typeLabel: 'Căn A1 · 88 m²',
    },
    {
      id: 'a1-6',
      title: 'Phòng ngủ Master',
      titleEn: 'Master Bedroom Suite',
      caption: 'Phòng ngủ lớn tiện nghi với phòng vệ sinh khép kín riêng',
      captionEn: 'Grand master bedroom with private en-suite bathroom comfort',
      src: '/images/nha-mau/a1-06-bcons-central-park-nha-mau-a1-phong-ngu-chinh-01.xvNy-wID_4tTAD.webp',
      type: 'a1',
      typeLabel: 'Căn A1 · 88 m²',
    },
    {
      id: 'a1-7',
      title: 'Góc trang điểm Master',
      titleEn: 'Master Vanity Corner',
      caption: 'Bàn trang điểm và hệ tủ áo thiết kế đo ni đóng giày',
      captionEn: 'Custom-tailored vanity desk and expansive wardrobe cabinetry',
      src: '/images/nha-mau/a1-07-bcons-central-park-nha-mau-a1-phong-ngu-chinh-02.C4-9z7tX_IIr8b.webp',
      type: 'a1',
      typeLabel: 'Căn A1 · 88 m²',
    },
    {
      id: 'a1-10',
      title: 'Phòng ngủ 2 & Bàn việc',
      titleEn: 'Bedroom 2 & Work Desk',
      caption: 'Không gian làm việc yên tĩnh đón ánh sáng tự nhiên ngập tràn',
      captionEn: 'Peaceful study corner blessed with abundant natural daylight',
      src: '/images/nha-mau/a1-10-bcons-central-park-nha-mau-a1-phong-ngu-2-ban-lam-viec.Nx_gOwlM_29Jm0z.webp',
      type: 'a1',
      typeLabel: 'Căn A1 · 88 m²',
    },
    {
      id: 'a1-12',
      title: 'Phòng ngủ bé sáng tạo',
      titleEn: 'Kids Creative Bedroom',
      caption: 'Góc học tập và vui chơi an lành cho các thiên thần nhỏ',
      captionEn: 'Safe and inspiring haven designed for children growth and joy',
      src: '/images/nha-mau/a1-12-bcons-central-park-nha-mau-a1-phong-ngu-be-01.DPXJCyQ4_ZhB32q.webp',
      type: 'a1',
      typeLabel: 'Căn A1 · 88 m²',
    },
  ],
  b4: [
    {
      id: 'b4-15',
      title: 'Phòng khách 2 mặt thoáng',
      titleEn: 'Corner Living Room',
      caption: 'Căn góc 2 mặt thoáng đón gió tươi và ánh sáng tự nhiên',
      captionEn: 'Dual-facade corner unit capturing invigorating winds and daylight',
      src: '/images/nha-mau/b4-15-bcons-central-park-nha-mau-b4-phong-khach.KiaCBx3v_Z207Okl.webp',
      type: 'b4',
      typeLabel: 'Căn B4 · 73 m²',
    },
    {
      id: 'b4-17',
      title: 'Bếp & Bàn ăn gia đình',
      titleEn: 'Kitchen & Family Dining',
      caption: 'Khu vực ẩm thực hiện đại tối ưu công năng cho gia đình trẻ',
      captionEn: 'Contemporary culinary hub engineered for modern young households',
      src: '/images/nha-mau/b4-17-bcons-central-park-nha-mau-b4-bep-ban-an.C9tMIcqS_bw0L3.webp',
      type: 'b4',
      typeLabel: 'Căn B4 · 73 m²',
    },
    {
      id: 'b4-18',
      title: 'Tủ giày & Tủ rượu sảnh',
      titleEn: 'Foyer Shoe & Wine Display',
      caption: 'Lối vào trang bị hệ tủ kịch trần tạo điểm nhấn quý phái',
      captionEn: 'Full-height entrance joinery creating an immediate prestige aura',
      src: '/images/nha-mau/b4-18-bcons-central-park-nha-mau-b4-loi-vao-tu-ruou.DiE2CdsM_1gQi4.webp',
      type: 'b4',
      typeLabel: 'Căn B4 · 73 m²',
    },
    {
      id: 'b4-21',
      title: 'Phòng ngủ góc cửa sổ',
      titleEn: 'Master Window Corner',
      caption: 'Tầm nhìn khoáng đạt qua khung cửa sổ kính lớn cách âm',
      captionEn: 'Panoramic outdoor vistas through acoustic-insulated glass windows',
      src: '/images/nha-mau/b4-21-bcons-central-park-nha-mau-b4-phong-ngu-chinh-cua-so.Dk-njOYd_7UkRw.webp',
      type: 'b4',
      typeLabel: 'Căn B4 · 73 m²',
    },
    {
      id: 'b4-25',
      title: 'Tranh tường phòng bé',
      titleEn: 'Kids Bedroom Mural Wall',
      caption: 'Mảng tường nghệ thuật truyền cảm hứng phiêu lưu cho con',
      captionEn: 'Playful artistic accent wall sparking adventurous childhood imaginations',
      src: '/images/nha-mau/b4-25-bcons-central-park-nha-mau-b4-phong-ngu-be-tranh-tuong.gwolBwUC_1DJyg5.webp',
      type: 'b4',
      typeLabel: 'Căn B4 · 73 m²',
    },
    {
      id: 'b4-26',
      title: 'Phòng tắm tiện nghi',
      titleEn: 'Master En-suite Bathroom',
      caption: 'Thiết bị vệ sinh cao cấp, vách kính ngăn và gạch chống trượt',
      captionEn: 'Premium sanitary ware, tempered glass partition, and anti-slip tiles',
      src: '/images/nha-mau/b4-26-bcons-central-park-nha-mau-b4-phong-tam-01.BbRMfn2Y_8Codp.webp',
      type: 'b4',
      typeLabel: 'Căn B4 · 73 m²',
    },
  ],
  c1: [
    {
      id: 'c1-29',
      title: 'Không gian mở kiểu Nhật',
      titleEn: 'Japanese Open Concept',
      caption: 'Liên hoàn phòng khách – bếp – bàn ăn tối ưu hoá diện tích',
      captionEn: 'Seamless living, dining, and kitchen flow maximizing every square meter',
      src: '/images/nha-mau/c1-29-bcons-central-park-nha-mau-c1-tong-the-bep-ban-an-phong-khach.BmSQVhvr_ZQz4ki.webp',
      type: 'c1',
      typeLabel: 'Căn C1 · 52 m²',
    },
    {
      id: 'c1-30',
      title: 'Phòng khách & Ban công',
      titleEn: 'Living Room & Balcony',
      caption: 'Cửa kính lùa mở ra ban công đón gió mát lành quanh năm',
      captionEn: 'Sliding glass door opening directly to the private year-round breeze balcony',
      src: '/images/nha-mau/c1-30-bcons-central-park-nha-mau-c1-phong-khach-ban-cong.nmx6hH0t_2goYyC.webp',
      type: 'c1',
      typeLabel: 'Căn C1 · 52 m²',
    },
    {
      id: 'c1-36',
      title: 'Vách lùa Shoji thông minh',
      titleEn: 'Smart Shoji Sliding Wall',
      caption: 'Hệ vách trượt kiểu Nhật biến đổi linh hoạt giữa mở và riêng tư',
      captionEn: 'Japanese Shoji partition effortlessly morphing between open and private zones',
      src: '/images/nha-mau/c1-36-bcons-central-park-nha-mau-c1-phong-ngu-chinh-vach-shoji.B21niOb4_LVlFr.webp',
      type: 'c1',
      typeLabel: 'Căn C1 · 52 m²',
    },
    {
      id: 'c1-38',
      title: 'Phòng ngủ chính tinh gọn',
      titleEn: 'Minimalist Master Suite',
      caption: 'Tone màu gỗ ấm áp mang lại giấc ngủ thư thái trọn vẹn',
      captionEn: 'Warm natural wood tones cultivating tranquil and restorative sleep',
      src: '/images/nha-mau/c1-38-bcons-central-park-nha-mau-c1-phong-ngu-chinh-01.Osh24Jmf_Zak5Xm.webp',
      type: 'c1',
      typeLabel: 'Căn C1 · 52 m²',
    },
    {
      id: 'c1-43',
      title: 'Giường bục đa năng',
      titleEn: 'Platform Bed with Storage',
      caption: 'Hộc chứa đồ tích hợp thông minh tăng gấp đôi sức chứa đồ dùng',
      captionEn: 'Multifunctional platform bed doubling storage without cluttering the room',
      src: '/images/nha-mau/c1-43-bcons-central-park-nha-mau-c1-phong-ngu-be-giuong-buc.9klMhEA6_Z1aYrgu.webp',
      type: 'c1',
      typeLabel: 'Căn C1 · 52 m²',
    },
    {
      id: 'c1-44',
      title: 'Tường xanh sage phòng bé',
      titleEn: 'Sage Green Accent Kids Room',
      caption: 'Gam màu xanh xám Tropical Sage êm dịu, bảo vệ thị lực trẻ em',
      captionEn: 'Restful Tropical Sage hue safeguarding young eyes and inspiring creativity',
      src: '/images/nha-mau/c1-44-bcons-central-park-nha-mau-c1-phong-ngu-be-tuong-xanh.BhxhAk02_26RDvh.webp',
      type: 'c1',
      typeLabel: 'Căn C1 · 52 m²',
    },
  ],
}

// Kinetic Marquee Rails: 12 photos per row, duplicated for smooth endless loop
const MARQUEE_ROW_1 = [
  nhaMauImages[0],
  nhaMauImages[1],
  nhaMauImages[4],
  nhaMauImages[5],
  nhaMauImages[6],
  nhaMauImages[8],
  nhaMauImages[14],
  nhaMauImages[15],
  nhaMauImages[16],
  nhaMauImages[18],
  nhaMauImages[28],
  nhaMauImages[29],
]

const MARQUEE_ROW_2 = [
  nhaMauImages[9],
  nhaMauImages[11],
  nhaMauImages[12],
  nhaMauImages[17],
  nhaMauImages[19],
  nhaMauImages[20],
  nhaMauImages[22],
  nhaMauImages[24],
  nhaMauImages[35],
  nhaMauImages[37],
  nhaMauImages[42],
  nhaMauImages[43],
]

export function ShowhouseShowcase() {
  const { theme, locale, openConsultation } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  // Selected apartment code
  const [selectedApartment, setSelectedApartment] = useState<'a1' | 'b4' | 'c1'>('a1')
  // Active room index inside the selected apartment
  const [activeRoomIndex, setActiveRoomIndex] = useState<number>(0)
  // Auto-play state & progress
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [progress, setProgress] = useState<number>(0)
  // Lightbox Modal state
  const [lightboxPhoto, setLightboxPhoto] = useState<{
    src: string
    title: string
    caption: string
    tag: string
  } | null>(null)

  const currentRooms = APARTMENT_ROOMS[selectedApartment]
  const currentRoom = currentRooms[activeRoomIndex] || currentRooms[0]
  const activeConfig = apartmentConfigs[selectedApartment]

  // Reset active room index when changing apartment
  const handleSelectApartment = (apt: 'a1' | 'b4' | 'c1') => {
    setSelectedApartment(apt)
    setActiveRoomIndex(0)
    setProgress(0)
  }

  // Next / Previous Room
  const handleNextRoom = useCallback(() => {
    setActiveRoomIndex((prev) => (prev + 1) % currentRooms.length)
    setProgress(0)
  }, [currentRooms.length])

  const handlePrevRoom = useCallback(() => {
    setActiveRoomIndex((prev) => (prev - 1 + currentRooms.length) % currentRooms.length)
    setProgress(0)
  }, [currentRooms.length])

  // Autoplay ticker (advances every 4.8 seconds)
  useEffect(() => {
    if (!isPlaying) return

    const intervalMs = 4800
    const stepMs = 60
    const increment = (stepMs / intervalMs) * 100

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNextRoom()
          return 0
        }
        return prev + increment
      })
    }, stepMs)

    return () => clearInterval(timer)
  }, [isPlaying, handleNextRoom])

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!lightboxPhoto) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxPhoto(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [lightboxPhoto])

  const handleBookingClick = () => {
    openConsultation({
      source: 'Section Nhà Mẫu (Hero Tổng quan)',
      title: isEn
        ? 'Book Showhouse Experience Tour'
        : 'Đăng Ký Tham Quan Nhà Mẫu Bcons Central Park',
      subtitle: isEn
        ? 'Sales Director Le Ngoc Long will arrange private reception and comprehensive orientation.'
        : 'Giám đốc Sàn Lê Ngọc Long sẽ liên hệ xếp lịch tham quan riêng và chuẩn bị hồ sơ tư vấn chi tiết.',
    })
  }

  return (
    <section
      id="nha-mau"
      className="scroll-mt-24 relative py-20 sm:py-24 lg:py-32 bg-background dark:bg-[#061410] transition-colors duration-500 overflow-hidden"
    >
      {/* Ambient Lighting / Atmospheric Mesh Gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#e6c887]/15 via-primary/10 to-transparent blur-[120px] dark:from-[#e6c887]/10 dark:via-primary/5"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 -z-10 h-[28rem] w-[40rem] rounded-full bg-primary/8 dark:bg-[#e6c887]/5 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER (AWWWARDS EDITORIAL LUXURY)                             */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <Reveal>
            {/* Microscopic Pill Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[10px] sm:text-[11px] uppercase tracking-[0.08em] font-semibold text-[#b88728] dark:text-[#e6c887] bg-[#b88728]/10 dark:bg-[#e6c887]/10 border border-[#b88728]/30 dark:border-[#e6c887]/30 mb-3.5 shadow-sm">
              <Sparkles className="size-3 text-[#b88728] dark:text-[#e6c887]" />
              <span>{isEn ? '1:1 LIVING REALITY SHOWHOUSE' : 'KHÔNG GIAN NHÀ MẪU THỰC TẾ 1:1'}</span>
            </div>

            {/* Main Section Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground dark:text-white uppercase leading-tight">
              {isEn ? 'Bcons Central Park Model Units' : 'Nhà Mẫu Bcons Central Park'}
              <span className="block mt-1.5 font-serif italic text-xl sm:text-2xl lg:text-3xl font-semibold normal-case text-[#b88728] dark:text-[#e6c887]">
                {isEn
                  ? 'Cinematic Interior Tour & Actual Handover Standards'
                  : 'Trải Nghiệm Nội Thất Điện Ảnh & Tiêu Chuẩn Bàn Giao Thực Tế'}
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground dark:text-[#c2d3cb] font-sans">
              {isEn
                ? 'Step inside the 3 fully constructed model residences: Unit A1 (3BR · 88 m²), Unit B4 (2BR · 73 m²), and Unit C1 (2BR · 52 m²). Experience exact ceiling heights, soundproof balconies, and certified handover materials.'
                : 'Bước vào không gian sống thực tế của 3 căn hộ mẫu đã dựng hoàn chỉnh: Căn A1 (3PN · 88 m²), Căn B4 (2PN · 73 m²) và Căn C1 (2PN · 52 m²). Cảm nhận trực tiếp độ cao trần thông thuỷ, ban công lộng gió và chất liệu hoàn thiện chuẩn chỉ.'}
            </p>
          </Reveal>
        </div>

        {/* ========================================================================= */}
        {/* 2. APARTMENT SELECTOR SWITCHER (FLOATING GLASS CONTROLLER)                */}
        {/* ========================================================================= */}
        <Reveal delay={0.08} className="max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="relative flex items-center justify-center p-1.5 rounded-full border border-border/80 dark:border-white/15 bg-card/90 dark:bg-card/70 backdrop-blur-xl shadow-lg">
            {(['a1', 'b4', 'c1'] as const).map((aptKey) => {
              const isActive = selectedApartment === aptKey
              const cfg = apartmentConfigs[aptKey]

              return (
                <button
                  key={aptKey}
                  type="button"
                  onClick={() => handleSelectApartment(aptKey)}
                  className={`relative flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer text-center z-10 ${
                    isActive
                      ? 'text-[#072018] dark:text-[#072018] font-bold'
                      : 'text-foreground/75 dark:text-white/75 hover:text-foreground dark:hover:text-white'
                  }`}
                >
                  {/* Fluid Animated Background Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="showhouseApartmentPill"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#e6c887] via-[#f7e4b5] to-[#e6c887] shadow-md -z-10"
                    />
                  )}
                  <span className="block leading-snug">{cfg.code}</span>
                  <span
                    className={`block text-[10px] sm:text-[11px] font-normal opacity-85 ${
                      isActive ? 'text-[#072018] font-semibold' : 'text-muted-foreground'
                    }`}
                  >
                    {cfg.bedrooms} · {cfg.floorArea}
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* ========================================================================= */}
        {/* 3. CENTERPIECE: CINEMATIC MOTION THEATRE (DOUBLE-BEZEL LIVE CANVAS)       */}
        {/* ========================================================================= */}
        <Reveal delay={0.15} className="max-w-6xl mx-auto">
          {/* Double-Bezel Hardware Architecture: Outer Shell */}
          <div
            className={`relative rounded-[2rem] sm:rounded-[2.75rem] p-2 sm:p-3.5 transition-all duration-500 shadow-2xl ${
              isDark
                ? 'bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]'
                : 'bg-gradient-to-b from-black/5 via-black/2 to-transparent border border-black/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)]'
            }`}
          >
            {/* Inner Core: The Visual Screen */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-[calc(2rem-0.5rem)] sm:rounded-[calc(2.75rem-0.75rem)] bg-[#071712]">
              {/* Active Room Image with Continuous Ken Burns Motion & Crossfade */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRoom.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute inset-0 overflow-hidden"
                >
                  <img
                    src={currentRoom.src}
                    alt={currentRoom.title}
                    className="h-full w-full object-cover object-center select-none will-change-transform"
                  />
                  {/* Subtle Vignette & Contrast Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35 pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* ==================== FLOATING GLASS HUD OVERLAYS ==================== */}

              {/* Top-Left HUD: Room Label & Apartment Code */}
              <div className="absolute top-3 sm:top-5 left-3 sm:left-5 z-20 flex flex-wrap items-center gap-2 pointer-events-none">
                <div className="inline-flex items-center gap-2 rounded-full bg-black/60 dark:bg-[#072018]/85 px-3 sm:px-4 py-1.5 text-xs font-bold text-[#e6c887] backdrop-blur-md border border-white/20 shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-[#e6c887] animate-ping" />
                  <span>{isEn ? activeConfig.code : activeConfig.code}</span>
                  <span className="text-white/40">|</span>
                  <span className="text-white font-medium">
                    {isEn ? currentRoom.titleEn : currentRoom.title}
                  </span>
                </div>
              </div>

              {/* Top-Right HUD: Controls (Autoplay, Lightbox Expand, Counter) */}
              <div className="absolute top-3 sm:top-5 right-3 sm:right-5 z-20 flex items-center gap-2">
                {/* Autoplay / Pause Toggle */}
                <button
                  type="button"
                  onClick={() => setIsPlaying((p) => !p)}
                  aria-label={isPlaying ? 'Tạm dừng chạy tự động' : 'Bật chạy tự động'}
                  className="flex size-9 sm:size-10 items-center justify-center rounded-full bg-black/60 dark:bg-[#072018]/85 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 hover:border-[#e6c887] cursor-pointer"
                  title={isPlaying ? 'Pause auto slide' : 'Play auto slide'}
                >
                  {isPlaying ? (
                    <Pause className="size-4 text-[#e6c887]" />
                  ) : (
                    <Play className="size-4 text-[#e6c887] ml-0.5" />
                  )}
                </button>

                {/* Lightbox Trigger */}
                <button
                  type="button"
                  onClick={() =>
                    setLightboxPhoto({
                      src: currentRoom.src,
                      title: isEn ? currentRoom.titleEn : currentRoom.title,
                      caption: isEn ? currentRoom.captionEn : currentRoom.caption,
                      tag: activeConfig.code,
                    })
                  }
                  aria-label="Xem toàn màn hình"
                  className="flex size-9 sm:size-10 items-center justify-center rounded-full bg-black/60 dark:bg-[#072018]/85 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 hover:border-[#e6c887] cursor-pointer"
                  title={isEn ? 'View fullscreen' : 'Phóng to ảnh khổ lớn'}
                >
                  <Expand className="size-4 text-white" />
                </button>

                {/* Photo Counter */}
                <div className="hidden sm:flex items-center rounded-full bg-black/60 dark:bg-[#072018]/85 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-md border border-white/20">
                  <span>{activeRoomIndex + 1}</span>
                  <span className="mx-1 text-white/40">/</span>
                  <span>{currentRooms.length}</span>
                </div>
              </div>

              {/* Center Floating Navigation Arrows (Side Wings) */}
              <div className="absolute inset-y-0 left-2 sm:left-4 z-20 flex items-center">
                <button
                  type="button"
                  onClick={handlePrevRoom}
                  aria-label="Ảnh trước"
                  className="group flex size-10 sm:size-12 items-center justify-center rounded-full bg-black/50 dark:bg-[#072018]/80 text-white backdrop-blur-md border border-white/20 transition-all hover:bg-[#e6c887] hover:text-[#072018] hover:scale-110 cursor-pointer shadow-xl"
                >
                  <ChevronLeft className="size-5 sm:size-6 transition-transform group-hover:-translate-x-0.5" />
                </button>
              </div>

              <div className="absolute inset-y-0 right-2 sm:right-4 z-20 flex items-center">
                <button
                  type="button"
                  onClick={handleNextRoom}
                  aria-label="Ảnh tiếp theo"
                  className="group flex size-10 sm:size-12 items-center justify-center rounded-full bg-black/50 dark:bg-[#072018]/80 text-white backdrop-blur-md border border-white/20 transition-all hover:bg-[#e6c887] hover:text-[#072018] hover:scale-110 cursor-pointer shadow-xl"
                >
                  <ChevronRight className="size-5 sm:size-6 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>

              {/* Bottom Info HUD: Caption & Architectural Metrics */}
              <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-6 sm:pb-5">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
                  <div className="max-w-xl">
                    <p className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-white drop-shadow-md">
                      {isEn ? currentRoom.titleEn : currentRoom.title}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-white/85 line-clamp-2 drop-shadow">
                      {isEn ? currentRoom.captionEn : currentRoom.caption}
                    </p>
                  </div>

                  {/* Architectural Specs Badge */}
                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <div className="flex items-center gap-1.5 rounded-full bg-black/60 dark:bg-[#072018]/90 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-md border border-white/20">
                      <Ruler className="size-3.5 text-[#e6c887]" />
                      <span>{activeConfig.floorArea}</span>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-black/60 dark:bg-[#072018]/90 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-md border border-white/20">
                      <BedDouble className="size-3.5 text-[#e6c887]" />
                      <span>{activeConfig.bedrooms}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Hairline Autoplay Progress Bar */}
                <div className="mt-3.5 h-1 w-full overflow-hidden rounded-full bg-white/20">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#e6c887] via-[#f7e4b5] to-[#e6c887]"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: 'linear' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ========================================================================= */}
        {/* 4. INTERACTIVE ROOM CAROUSEL TRAY (CHAMBER SELECTOR)                      */}
        {/* ========================================================================= */}
        <Reveal delay={0.2} className="max-w-6xl mx-auto mt-6">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 px-1 scrollbar-none">
            {currentRooms.map((room, rIdx) => {
              const isRoomActive = rIdx === activeRoomIndex

              return (
                <button
                  key={room.id}
                  type="button"
                  onClick={() => {
                    setActiveRoomIndex(rIdx)
                    setProgress(0)
                  }}
                  className={`group relative flex items-center gap-2.5 rounded-xl sm:rounded-2xl p-1.5 shrink-0 transition-all duration-300 cursor-pointer ${
                    isRoomActive
                      ? 'bg-gradient-to-r from-[#e6c887] via-[#f7e4b5] to-[#e6c887] text-[#072018] shadow-md scale-102 font-bold'
                      : isDark
                      ? 'border border-white/10 bg-card/70 text-white/80 hover:bg-white/10 hover:border-white/25'
                      : 'border border-border/80 bg-card text-foreground/80 hover:bg-secondary hover:border-primary/30'
                  }`}
                >
                  <div className="relative size-9 sm:size-10 shrink-0 overflow-hidden rounded-lg sm:rounded-xl">
                    <img
                      src={room.src}
                      alt={room.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="pr-2.5 text-left">
                    <p className="text-xs font-semibold leading-none">
                      {isEn ? room.titleEn : room.title}
                    </p>
                    <p
                      className={`mt-1 text-[10px] leading-none ${
                        isRoomActive ? 'text-[#072018]/80 font-medium' : 'text-muted-foreground'
                      }`}
                    >
                      {activeConfig.code}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* ========================================================================= */}
        {/* 5. KINETIC DUAL-DIRECTION CONTINUOUS MOTION RAILS (THE FILMSTRIP)         */}
        {/* ========================================================================= */}
        <div className="mt-14 sm:mt-18">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 max-w-6xl mx-auto px-1">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-primary dark:text-[#e6c887]">
                  {isEn ? 'CONTINUOUS VISUAL FLOW' : 'BỘ SƯU TẬP PHỐI CẢNH ĐỘNG'}
                </p>
                <h3 className="mt-1 font-serif text-xl sm:text-2xl font-bold text-foreground">
                  {isEn ? 'Kinetic Gallery Stream (45 Photos)' : 'Dòng chảy phối cảnh 45 góc nhìn thực tế'}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-sm">
                {isEn
                  ? 'Hover over any perspective to pause and inspect. Click to enlarge in full-resolution modal.'
                  : 'Rê chuột vào ảnh để dừng cuộn và ngắm nhìn. Bấm vào ảnh bất kỳ để phóng to chi tiết.'}
              </p>
            </div>
          </Reveal>

          {/* Marquee Track 1 (Glides Left) */}
          <div className="relative w-full overflow-hidden py-2 mask-linear-gradient">
            <div className="animate-marquee-left gap-4 flex">
              {[...MARQUEE_ROW_1, ...MARQUEE_ROW_1].map((photo, pIdx) => (
                <button
                  key={`${photo.id}-row1-${pIdx}`}
                  type="button"
                  onClick={() =>
                    setLightboxPhoto({
                      src: photo.src,
                      title: isEn ? photo.typeNameEn : photo.typeName,
                      caption: isEn ? photo.captionEn : photo.caption,
                      tag: photo.typeName,
                    })
                  }
                  className={`group/marquee relative w-64 sm:w-76 shrink-0 aspect-[16/10] overflow-hidden rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                    isDark
                      ? 'border-white/10 bg-card/80 hover:border-[#e6c887] hover:shadow-xl hover:shadow-[#e6c887]/15 hover:-translate-y-1.5'
                      : 'border-border bg-card hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5'
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover/marquee:scale-108"
                  />
                  {/* Floating Glass Pill on photo */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 pt-6">
                    <span className="inline-block rounded-md bg-[#e6c887] px-2 py-0.5 text-[10px] font-bold text-[#072018] shadow-sm">
                      {isEn ? photo.typeNameEn : photo.typeName}
                    </span>
                    <p className="mt-1 line-clamp-1 text-xs font-semibold text-white">
                      {isEn ? photo.captionEn : photo.caption}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Marquee Track 2 (Glides Right) */}
          <div className="relative w-full overflow-hidden py-2 mask-linear-gradient mt-2">
            <div className="animate-marquee-right gap-4 flex">
              {[...MARQUEE_ROW_2, ...MARQUEE_ROW_2].map((photo, pIdx) => (
                <button
                  key={`${photo.id}-row2-${pIdx}`}
                  type="button"
                  onClick={() =>
                    setLightboxPhoto({
                      src: photo.src,
                      title: isEn ? photo.typeNameEn : photo.typeName,
                      caption: isEn ? photo.captionEn : photo.caption,
                      tag: photo.typeName,
                    })
                  }
                  className={`group/marquee relative w-64 sm:w-76 shrink-0 aspect-[16/10] overflow-hidden rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                    isDark
                      ? 'border-white/10 bg-card/80 hover:border-[#e6c887] hover:shadow-xl hover:shadow-[#e6c887]/15 hover:-translate-y-1.5'
                      : 'border-border bg-card hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5'
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover/marquee:scale-108"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 pt-6">
                    <span className="inline-block rounded-md bg-emerald-500 text-white dark:bg-[#e6c887] dark:text-[#072018] px-2 py-0.5 text-[10px] font-bold shadow-sm">
                      {isEn ? photo.typeNameEn : photo.typeName}
                    </span>
                    <p className="mt-1 line-clamp-1 text-xs font-semibold text-white">
                      {isEn ? photo.captionEn : photo.caption}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6. BOTTOM AGENCY-GRADE CALLOUT ACTIONS (BUTTON-IN-BUTTON ARCHITECTURE)    */}
        {/* ========================================================================= */}
        <Reveal delay={0.25} className="mt-12 sm:mt-16 max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            {/* Primary Action: Link to dedicated /nha-mau page with button-in-button arrow */}
            <Link
              href="/nha-mau"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#e6c887] via-[#f7e4b5] to-[#e6c887] py-2.5 pl-6 pr-2.5 text-sm font-bold text-[#072018] shadow-xl shadow-[#e6c887]/20 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
            >
              <span>{isEn ? 'Explore All 45 Photos & Handover Checklist' : 'Khám phá chi tiết 45 ảnh & Cẩm nang bàn giao'}</span>
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-black/10 dark:bg-[#072018]/20 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5">
                <ArrowRight className="size-4" />
              </div>
            </Link>

            {/* Secondary Action: Jump to 3D Virtual Tour */}
            <a
              href="#tham-quan-3d"
              className={`group inline-flex items-center gap-3 rounded-full py-2.5 pl-5 pr-2.5 text-sm font-semibold border transition-all duration-300 hover:scale-[1.02] ${
                isDark
                  ? 'border-white/15 bg-card/80 text-white hover:border-[#e6c887]/50'
                  : 'border-border bg-card text-foreground hover:border-primary/40'
              }`}
            >
              <span>{isEn ? '360° Virtual Tour' : 'Tham quan 3D 360° thực tế ảo'}</span>
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 dark:bg-[#e6c887]/15 text-primary dark:text-[#e6c887]">
                <Eye className="size-4" />
              </div>
            </a>

            {/* Tertiary Action: Schedule Showhouse Visit */}
            <button
              type="button"
              onClick={handleBookingClick}
              className={`inline-flex items-center gap-2 rounded-full py-2.5 px-5 text-sm font-semibold border transition-all hover:bg-secondary cursor-pointer ${
                isDark
                  ? 'border-white/10 text-white/80 hover:text-white'
                  : 'border-border text-foreground/80 hover:text-foreground'
              }`}
            >
              <CalendarCheck className="size-4 text-primary dark:text-[#e6c887]" />
              <span>{isEn ? 'Book Private Visit' : 'Đăng ký xem thực tế'}</span>
            </button>
          </div>
        </Reveal>
      </div>

      {/* ========================================================================= */}
      {/* 7. FULLSCREEN LIGHTBOX MODAL                                              */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/95 p-4 sm:p-6 backdrop-blur-2xl"
            onClick={() => setLightboxPhoto(null)}
          >
            {/* Top Toolbar */}
            <div
              className="flex w-full max-w-5xl items-center justify-between text-white z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#e6c887] px-3 py-1 text-xs font-bold text-[#072018]">
                  {lightboxPhoto.tag}
                </span>
                <span className="font-serif text-sm sm:text-base font-semibold">
                  {lightboxPhoto.title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxPhoto(null)}
                aria-label="Đóng xem ảnh"
                className="flex size-9 items-center justify-center rounded-full bg-white/15 text-white transition-all hover:bg-white/30 hover:scale-110 cursor-pointer"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Center Image */}
            <div
              className="relative flex w-full max-w-5xl flex-1 items-center justify-center py-4"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.25 }}
                src={lightboxPhoto.src}
                alt={lightboxPhoto.title}
                className="max-h-[78vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
              />
            </div>

            {/* Bottom Caption */}
            <div
              className="w-full max-w-2xl text-center text-white/85 text-xs sm:text-sm font-sans z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <p>{lightboxPhoto.caption}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
