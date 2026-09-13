'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  Home,
  Layers,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  CalendarCheck,
  FileText,
  Compass,
  Ruler,
  Check,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  BedDouble,
  Expand,
} from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'
import {
  nhaMauImages,
  apartmentConfigs,
  handoverHighlights,
  inspectionChecklist,
  type NhaMauItem,
} from '@/lib/nha-mau-data'

export function ShowhouseDetail() {
  const { theme, locale, t, openConsultation } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  // Selected apartment filter: 'all' | 'a1' | 'b4' | 'c1'
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'a1' | 'b4' | 'c1'>('all')

  // Lightbox modal state: active image index in the currently filtered list, or null
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // Filtered images based on current tab
  const filteredImages = useMemo(() => {
    if (selectedFilter === 'all') return nhaMauImages
    return nhaMauImages.filter((img) => img.type === selectedFilter)
  }, [selectedFilter])

  // Open lightbox for a specific image
  const handleOpenLightbox = useCallback(
    (item: NhaMauItem) => {
      const idx = filteredImages.findIndex((img) => img.id === item.id)
      if (idx !== -1) {
        setLightboxIndex(idx)
      }
    },
    [filteredImages]
  )

  // Lightbox keyboard navigation (Left, Right, Escape)
  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null)
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : 0
        )
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredImages.length : 0
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    // Prevent background scrolling when lightbox is open
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, filteredImages])

  const currentLightboxItem = lightboxIndex !== null ? filteredImages[lightboxIndex] : null

  const handleBookingClick = () => {
    openConsultation({
      source: 'Trang Nhà Mẫu (Chi tiết)',
      title: isEn
        ? 'Book Showhouse Experience Tour'
        : 'Đăng Ký Tham Quan Nhà Mẫu Bcons Central Park',
      subtitle: isEn
        ? 'Sales Director Le Ngoc Long will arrange private reception and comprehensive orientation.'
        : 'Giám đốc Sàn Lê Ngọc Long sẽ liên hệ xếp lịch tham quan riêng và chuẩn bị hồ sơ tư vấn chi tiết.',
    })
  }

  const apartmentCardsList: Array<'a1' | 'b4' | 'c1'> = ['a1', 'b4', 'c1']

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* ========================================================================= */}
      {/* 1. TOP CINEMATIC HERO BANNER                                              */}
      {/* ========================================================================= */}
      <section className="relative isolate overflow-hidden border-b border-border/50 bg-[#072018] pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 text-white">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <img
            src="/images/project-towers.jpg"
            alt="Bcons Central Park Tam Hiệp"
            className="h-full w-full object-cover object-center scale-105 opacity-40 mix-blend-luminosity filter blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#072018] via-[#072018]/85 to-[#072018]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#e6c887]/15 via-transparent to-transparent" />
        </div>

        {/* Ambient Gold Halo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[28rem] w-[54rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#e6c887]/20 via-[#e6c887]/10 to-transparent blur-3xl"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Frosted Capsule */}
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 shadow-sm backdrop-blur-md"
            >
              <Link href="/" className="flex items-center gap-1.5 hover:text-[#e6c887] transition-colors">
                <Home className="size-3.5" />
                <span>{isEn ? 'Home' : 'Trang chủ'}</span>
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-white/60">{isEn ? 'Details' : 'Chi tiết'}</span>
              <span className="text-white/40">/</span>
              <span className="font-semibold text-[#e6c887]">{isEn ? 'Model House' : 'Nhà mẫu'}</span>
            </nav>
          </Reveal>

          {/* Heading Block */}
          <div className="mt-6 max-w-4xl">
            <Reveal delay={0.06}>
              <div className="flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#e6c887]">
                <span className="h-1.5 w-6 rounded-full bg-[#e6c887]" />
                <span>{isEn ? 'ACTUAL FINISHING & SPACE' : 'TIÊU CHUẨN BÀN GIAO & KHÔNG GIAN THỰC TẾ'}</span>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase drop-shadow-md">
                {isEn
                  ? 'Bcons Central Park Model House'
                  : 'Nhà Mẫu Bcons Central Park Tam Hiệp'}
              </h1>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-2.5 font-serif italic text-lg sm:text-xl md:text-2xl text-[#e6c887] font-medium tracking-wide drop-shadow">
                {isEn
                  ? 'Touch real living spaces — Experience 1:1 construction before signing'
                  : 'Chạm tay vào không gian sống thật — Trải nghiệm thực tế tiêu chuẩn bàn giao tỉ lệ 1:1'}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-4 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed text-white/85 font-sans font-normal drop-shadow-sm">
                {isEn
                  ? 'The show unit is a 1:1 full-scale recreation of handed-over apartments: exact geometry, certified ceiling height, and authentic contract-specified finishes. Explore the 3 fully furnished apartments A1 (88 m²), B4 (73 m²), and C1 (52 m²).'
                  : 'Nhà mẫu là bản dựng tỉ lệ 1:1 của căn hộ sẽ bàn giao — cùng kích thước, cùng chiều cao trần và đúng chuẩn vật liệu hoàn thiện. Trải nghiệm trực tiếp không gian thực tế của 3 mẫu căn A1 (88 m²), B4 (73 m²) và C1 (52 m²) để tự tin đưa ra quyết định sở hữu.'}
              </p>
            </Reveal>

            {/* Quick Action CTA inside Hero */}
            <Reveal delay={0.3}>
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={handleBookingClick}
                  className="group flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#e6c887] via-[#f7e4b5] to-[#e6c887] px-6 py-3 text-sm font-bold text-[#072018] shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[#e6c887]/25 cursor-pointer"
                >
                  <CalendarCheck className="size-4.5 text-[#072018]" />
                  <span>{isEn ? 'Book Showhouse Tour' : 'Đăng ký tham quan nhà mẫu'}</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="#bo-suu-tap-anh"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/40"
                >
                  <Expand className="size-4 text-[#e6c887]" />
                  <span>{isEn ? 'Browse 45 Real Photos' : 'Xem 45 ảnh phối cảnh thực tế'}</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THREE APARTMENT SPECIFICATION CARDS (Matching media_1789313193738.png) */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-primary dark:text-[#e6c887]">
                  {isEn ? '3 CONSTRUCTED MODEL APARTMENTS' : '3 MẪU CĂN HỘ ĐÃ DỰNG NHÀ MẪU'}
                </p>
                <h2 className="mt-1 font-serif text-2xl font-bold text-foreground sm:text-3xl">
                  {isEn ? 'Select an Apartment Type' : 'Lựa chọn loại căn hộ trải nghiệm'}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
                {isEn
                  ? 'Click any unit card below to quickly filter the photo gallery and inspect specific layouts.'
                  : 'Bấm vào từng thẻ căn bên dưới để xem riêng bộ ảnh và thông số thiết kế chi tiết.'}
              </p>
            </div>
          </Reveal>

          {/* 3 Apartment Spec Cards Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {apartmentCardsList.map((typeKey, idx) => {
              const config = apartmentConfigs[typeKey]
              const isSelected = selectedFilter === typeKey

              return (
                <Reveal key={typeKey} delay={idx * 0.08}>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedFilter((prev) => (prev === typeKey ? 'all' : typeKey))
                    }
                    className={`group relative w-full text-left rounded-2xl p-1.5 transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? isDark
                          ? 'bg-gradient-to-b from-[#e6c887] via-[#e6c887]/60 to-[#e6c887]/20 shadow-xl shadow-[#e6c887]/15 scale-[1.02]'
                          : 'bg-gradient-to-b from-primary via-primary/70 to-primary/30 shadow-xl shadow-primary/15 scale-[1.02]'
                        : isDark
                        ? 'bg-card/90 border border-white/10 hover:border-[#e6c887]/40 hover:-translate-y-1'
                        : 'bg-card border border-border/80 hover:border-primary/40 hover:-translate-y-1 shadow-sm'
                    }`}
                  >
                    <div
                      className={`h-full rounded-xl p-5 sm:p-6 transition-colors ${
                        isSelected
                          ? isDark
                            ? 'bg-[#0b1f18]'
                            : 'bg-[#f0f7f3]'
                          : isDark
                          ? 'bg-[#0c241b]'
                          : 'bg-card'
                      }`}
                    >
                      {/* Top Header of Card */}
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span
                            className={`inline-block text-xs font-semibold tracking-wider uppercase ${
                              isDark ? 'text-[#e6c887]' : 'text-primary'
                            }`}
                          >
                            {isEn ? config.badgeEn : config.badge}
                          </span>
                          <h3 className="mt-1 font-serif text-xl font-bold text-foreground sm:text-2xl">
                            {config.code}
                          </h3>
                        </div>

                        {/* Count Badge */}
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold transition-colors ${
                            isSelected
                              ? isDark
                                ? 'bg-[#e6c887] text-[#072018]'
                                : 'bg-primary text-white'
                              : isDark
                              ? 'bg-white/10 text-white/80 group-hover:bg-[#e6c887]/20 group-hover:text-[#e6c887]'
                              : 'bg-secondary text-foreground/80 group-hover:bg-primary/10 group-hover:text-primary'
                          }`}
                        >
                          <span>{config.count} {isEn ? 'photos' : 'ảnh'}</span>
                        </span>
                      </div>

                      {/* Specs Line (matching media_1789313193738.png) */}
                      <p
                        className={`mt-2.5 text-xs sm:text-[13px] font-medium leading-relaxed ${
                          isSelected
                            ? isDark
                              ? 'text-white'
                              : 'text-primary font-semibold'
                            : 'text-muted-foreground'
                        }`}
                      >
                        {isEn ? config.descEn : config.desc}
                      </p>

                      {/* Key Features Bullet Points */}
                      <ul className="mt-4 space-y-2 border-t border-border/50 pt-3.5 text-xs leading-relaxed text-muted-foreground">
                        {(isEn ? config.featuresEn : config.features).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2
                              className={`size-3.5 shrink-0 mt-0.5 ${
                                isDark ? 'text-[#e6c887]' : 'text-primary'
                              }`}
                            />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Filter Status Indicator */}
                      <div className="mt-4 pt-2 flex items-center justify-between text-xs font-semibold">
                        <span
                          className={
                            isSelected
                              ? isDark
                                ? 'text-[#e6c887]'
                                : 'text-primary font-bold'
                              : 'text-muted-foreground group-hover:text-foreground'
                          }
                        >
                          {isSelected
                            ? isEn
                              ? '✓ Filter active'
                              : '✓ Đang lọc bộ ảnh'
                            : isEn
                            ? 'Click to filter'
                            : 'Bấm để lọc ảnh'}
                        </span>
                        <ArrowRight
                          className={`size-3.5 transition-transform group-hover:translate-x-1 ${
                            isSelected
                              ? isDark
                                ? 'text-[#e6c887]'
                                : 'text-primary'
                              : 'text-muted-foreground'
                          }`}
                        />
                      </div>
                    </div>
                  </button>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PHOTO GALLERY WITH FILTER CHIPS & FLUID ANIMATION                      */}
      {/* ========================================================================= */}
      <section id="bo-suu-tap-anh" className="py-12 lg:py-20 bg-secondary/30 dark:bg-card/40 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-primary dark:text-[#e6c887]">
                <span className="h-1.5 w-5 rounded-full bg-primary dark:bg-[#e6c887]" />
                <span>{isEn ? 'INTERIOR PERSPECTIVE GALLERY' : 'BỘ SƯU TẬP PHỐI CẢNH NỘI THẤT'}</span>
              </div>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {isEn
                  ? 'Interior Renderings: Units A1, B4 & C1'
                  : 'Nội thất nhà mẫu ba căn A1, B4 và C1'}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {isEn
                  ? '45 official interior renderings released by Bcons Group for the three model units. Click on any photo to inspect in full-resolution lightbox.'
                  : '45 phối cảnh nội thất sắc nét chủ đầu tư phát hành cho ba mã căn đã dựng nhà mẫu: A1 3PN 88 m², B4 2PN 73 m² và C1 2PN 52 m². Bấm vào ảnh bất kỳ để phóng to xem chi tiết từng góc không gian.'}
              </p>
            </div>
          </Reveal>

          {/* Filter Chips Bar (matching media_1789313193738.png) */}
          <Reveal delay={0.08}>
            <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-2.5">
              {[
                { id: 'all', label: isEn ? 'All' : 'Tất cả', count: 45 },
                { id: 'a1', label: isEn ? 'Unit A1 · 88 m²' : 'Căn A1 · 88 m²', count: 14 },
                { id: 'b4', label: isEn ? 'Unit B4 · 73 m²' : 'Căn B4 · 73 m²', count: 14 },
                { id: 'c1', label: isEn ? 'Unit C1 · 52 m²' : 'Căn C1 · 52 m²', count: 17 },
              ].map((pill) => {
                const isActive = selectedFilter === pill.id

                return (
                  <button
                    key={pill.id}
                    type="button"
                    onClick={() => setSelectedFilter(pill.id as any)}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? isDark
                          ? 'bg-[#e6c887] text-[#072018] shadow-md shadow-[#e6c887]/20 scale-105 font-bold'
                          : 'bg-[#072018] text-white shadow-md shadow-black/10 scale-105 font-bold'
                        : isDark
                        ? 'border border-white/10 bg-card/80 text-white/80 hover:bg-white/10 hover:border-white/20'
                        : 'border border-border/80 bg-card text-foreground/80 hover:bg-secondary hover:border-primary/30'
                    }`}
                  >
                    <span>{pill.label}</span>
                    <span
                      className={`inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] font-bold ${
                        isActive
                          ? isDark
                            ? 'bg-[#072018] text-[#e6c887]'
                            : 'bg-white/25 text-white'
                          : isDark
                          ? 'bg-white/10 text-white/70'
                          : 'bg-secondary text-foreground/70'
                      }`}
                    >
                      {pill.count}
                    </span>
                  </button>
                )
              })}
            </div>
          </Reveal>

          {/* Animated Photos Grid */}
          <motion.div
            layout
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            <AnimatePresence>
              {filteredImages.map((photo, index) => {
                const isA1 = photo.type === 'a1'
                const isB4 = photo.type === 'b4'
                const isC1 = photo.type === 'c1'

                return (
                  <motion.div
                    key={photo.id}
                    layout
                    initial={{ opacity: 0, scale: 0.92, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: 16 }}
                    transition={{ duration: 0.35, delay: (index % 12) * 0.03 }}
                    className="group relative"
                  >
                    <button
                      type="button"
                      onClick={() => handleOpenLightbox(photo)}
                      className={`group/card block w-full overflow-hidden rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                        isDark
                          ? 'border-white/10 bg-card/90 hover:border-[#e6c887]/60 hover:shadow-xl hover:shadow-[#e6c887]/10 hover:-translate-y-1.5'
                          : 'border-border/90 bg-card hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5'
                      }`}
                    >
                      {/* Image Frame with Aspect Ratio */}
                      <div className="relative aspect-4/3 w-full overflow-hidden bg-muted/40">
                        <img
                          src={photo.src}
                          alt={photo.caption}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover/card:scale-108"
                        />

                        {/* Top floating Tag badge */}
                        <div className="absolute top-2.5 left-2.5">
                          <span
                            className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-bold tracking-wide backdrop-blur-md shadow-sm ${
                              isA1
                                ? isDark
                                  ? 'bg-[#072018]/90 text-[#e6c887] border border-[#e6c887]/30'
                                  : 'bg-white/95 text-emerald-800 border border-emerald-200'
                                : isB4
                                ? isDark
                                  ? 'bg-[#072018]/90 text-amber-300 border border-amber-400/30'
                                  : 'bg-white/95 text-amber-900 border border-amber-200'
                                : isDark
                                ? 'bg-[#072018]/90 text-teal-300 border border-teal-400/30'
                                : 'bg-white/95 text-teal-900 border border-teal-200'
                            }`}
                          >
                            {isEn ? photo.typeNameEn : photo.typeName}
                          </span>
                        </div>

                        {/* Hover Overlay with Zoom Icon */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover/card:opacity-100">
                          <div className="flex size-11 items-center justify-center rounded-full bg-white/90 text-[#072018] shadow-lg transform scale-75 transition-transform duration-300 group-hover/card:scale-100">
                            <Maximize2 className="size-5" />
                          </div>
                        </div>
                      </div>

                      {/* Photo Caption Strip */}
                      <div className="p-3.5 sm:p-4">
                        <p className="line-clamp-1 text-xs sm:text-sm font-semibold text-foreground group-hover/card:text-primary dark:group-hover/card:text-[#e6c887] transition-colors">
                          {isEn ? photo.captionEn : photo.caption}
                        </p>
                        <p className="mt-0.5 text-[11px] text-muted-foreground flex items-center justify-between">
                          <span>{isEn ? photo.typeNameEn : photo.typeName}</span>
                          <span className="italic text-primary/75 dark:text-[#e6c887]/75 font-medium">
                            {isEn ? 'Inspect ↗' : 'Xem chi tiết ↗'}
                          </span>
                        </p>
                      </div>
                    </button>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>

          {/* Disclaimer Note from Source */}
          <div className="mt-8 rounded-xl border border-border/70 bg-card/60 p-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            <p>
              <strong className="text-foreground">{isEn ? 'Note:' : 'Lưu ý từ Chủ đầu tư:'}</strong>{' '}
              {isEn
                ? 'These 45 photos are architectural interior design renderings to visualize living possibilities. Loose items such as curtains, wall art, televisions, and specialized wardrobes are post-handover decorative enhancements. The remaining 17 floor plan codes can be inspected on the '
                : 'Đây là phối cảnh thiết kế nội thất hoàn thiện mẫu, không phải toàn bộ danh mục bàn giao: đồ rời, rèm cửa, tranh trang trí và phần lớn hệ tủ trong ảnh là nội thất hoàn thiện thêm sau khi nhận nhà. Mười bảy mã căn còn lại chưa có bộ render riêng — quý khách vui lòng xem bản vẽ chi tiết tại mục '}
              <Link
                href="/mat-bang"
                className="font-semibold text-primary dark:text-[#e6c887] hover:underline"
              >
                {isEn ? 'Floor Plans Bcons Central Park' : 'Mặt bằng Bcons Central Park'}
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. THREE HANDOVER STANDARDS & TOUR BOOKING HIGHLIGHT                      */}
      {/* ========================================================================= */}
      <section className="py-14 lg:py-20 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left 3 Standards */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-primary dark:text-[#e6c887]">
                  <span className="h-1.5 w-5 rounded-full bg-primary dark:bg-[#e6c887]" />
                  <span>{isEn ? 'HANDOVER CRITERIA' : 'CAM KẾT CHỦ ĐẦU TƯ'}</span>
                </div>
                <h2 className="mt-2 font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                  {isEn
                    ? 'Actual Finishing Values at Bcons Central Park'
                    : 'Giá trị bàn giao thực tế tại Bcons Central Park'}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {isEn
                    ? 'Experience the real living standards before deciding — where Bcons Group strictly honors every finishing commitment.'
                    : 'Trải nghiệm trực tiếp không gian sống thực tế trước khi quyết định — nơi thể hiện rõ nhất tiêu chuẩn hoàn thiện uy tín của Tập đoàn Bcons.'}
                </p>
              </Reveal>

              <div className="mt-8 space-y-4">
                {handoverHighlights.map((item, idx) => (
                  <Reveal key={idx} delay={idx * 0.08}>
                    <div
                      className={`flex items-start gap-3.5 rounded-xl border p-4 sm:p-5 transition-all ${
                        isDark
                          ? 'border-white/10 bg-card/70 hover:border-[#e6c887]/40'
                          : 'border-border/80 bg-card hover:border-primary/40'
                      }`}
                    >
                      <div
                        className={`flex size-8 shrink-0 items-center justify-center rounded-full font-bold ${
                          isDark
                            ? 'bg-[#e6c887]/20 text-[#e6c887]'
                            : 'bg-primary/10 text-primary'
                        }`}
                      >
                        ✓
                      </div>
                      <div>
                        <h3 className="font-serif text-base font-bold text-foreground sm:text-lg">
                          {isEn ? item.titleEn : item.title}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                          {isEn ? item.descEn : item.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right Tour Booking Showcase Card */}
            <div className="lg:col-span-5">
              <Reveal delay={0.2}>
                <div
                  className={`rounded-3xl p-1.5 transition-all ${
                    isDark
                      ? 'bg-gradient-to-b from-[#e6c887]/40 via-[#e6c887]/15 to-white/5 shadow-2xl'
                      : 'bg-gradient-to-b from-primary/30 via-primary/10 to-border/40 shadow-xl'
                  }`}
                >
                  <div
                    className={`rounded-2xl p-6 sm:p-8 ${
                      isDark ? 'bg-[#071712]' : 'bg-card'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-[#e6c887]/20 text-[#e6c887] dark:bg-[#e6c887]/25">
                        <CalendarCheck className="size-6 text-[#b88728] dark:text-[#e6c887]" />
                      </div>
                      <div>
                        <span className="text-xs font-bold tracking-widest uppercase text-primary dark:text-[#e6c887]">
                          {isEn ? 'RESERVE A VISIT' : 'THAM QUAN TRỰC TIẾP'}
                        </span>
                        <h3 className="font-serif text-xl font-bold text-foreground sm:text-2xl">
                          {isEn ? 'Free Showhouse Tour' : 'Đón tiếp tham quan nhà mẫu'}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {isEn
                        ? 'Visit the 3 actual model units A1, B4, C1 with Sales Director Le Ngoc Long. Receive the official 1:1 floor plan kit, physical handover annex, and personal financial loan calculator.'
                        : 'Tham quan thực tế 3 căn hộ mẫu A1, B4, C1 cùng Giám đốc Sàn Lê Ngọc Long. Nhận trọn bộ bản vẽ mặt bằng tỉ lệ, phụ lục vật tư bàn giao và bảng tính lãi vay ngân hàng tối ưu.'}
                    </p>

                    <div className="mt-6 space-y-2.5 text-xs text-muted-foreground border-y border-border/50 py-4">
                      <div className="flex items-center justify-between">
                        <span>{isEn ? 'Location:' : 'Địa chỉ nhà mẫu:'}</span>
                        <strong className="text-foreground">236 Phan Trung, TP. Biên Hòa</strong>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>{isEn ? 'Opening Hours:' : 'Giờ mở cửa:'}</span>
                        <strong className="text-foreground">08:00 – 18:00 (Hàng ngày)</strong>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>{isEn ? 'Admission:' : 'Chi phí tham quan:'}</span>
                        <span className="font-bold text-emerald-600 dark:text-[#e6c887]">
                          {isEn ? 'Free 100%' : 'Miễn phí 100%'}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      <button
                        type="button"
                        onClick={handleBookingClick}
                        className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#e6c887] via-[#f7e4b5] to-[#e6c887] py-3 px-4 text-sm font-bold text-[#072018] shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                      >
                        <CalendarCheck className="size-4.5" />
                        <span>{isEn ? 'Schedule Private Tour' : 'Đặt lịch hẹn tham quan'}</span>
                      </button>

                      <a
                        href="tel:0376671776"
                        className="w-full flex items-center justify-center gap-2 rounded-xl border border-border/90 bg-secondary/50 py-3 px-4 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                      >
                        <PhoneCall className="size-4 text-primary dark:text-[#e6c887]" />
                        <span>Hotline: 0376 671 776</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CHECKLIST 6 ĐIỂM CẦN KIỂM TRA KHI ĐI XEM NHÀ MẪU                      */}
      {/* ========================================================================= */}
      <section className="py-14 lg:py-24 bg-secondary/20 dark:bg-card/30 border-t border-border/60 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-primary dark:text-[#e6c887]">
                <span className="h-1.5 w-5 rounded-full bg-primary dark:bg-[#e6c887]" />
                <span>{isEn ? 'INSPECTION CHECKLIST' : 'CẨM NANG THỰC TẾ'}</span>
              </div>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {isEn
                  ? '6 Critical Inspection Points for Your Show Unit Tour'
                  : 'Sáu điều cần kiểm tra khi đi xem nhà mẫu'}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {isEn
                  ? 'Bring this checklist and ask direct questions. A successful show unit visit ends with concrete figures, not just emotional impressions.'
                  : 'Mang theo danh sách 6 điểm này và hỏi thẳng chuyên viên dẫn bạn đi. Một buổi xem nhà mẫu tốt là buổi bạn ra về với câu trả lời bằng con số, không phải bằng cảm nhận.'}
              </p>
            </div>
          </Reveal>

          {/* 6 Inspection Cards Grid */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {inspectionChecklist.map((item) => (
              <Reveal key={item.num} delay={item.num * 0.05}>
                <div
                  className={`h-full rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                    isDark
                      ? 'border-white/10 bg-card/90 hover:border-[#e6c887]/50 shadow-lg'
                      : 'border-border/90 bg-card hover:border-primary/40 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex size-9 items-center justify-center rounded-xl font-serif text-base font-bold ${
                        isDark
                          ? 'bg-[#e6c887]/20 text-[#e6c887] border border-[#e6c887]/30'
                          : 'bg-primary/10 text-primary border border-primary/20'
                      }`}
                    >
                      {item.num}
                    </span>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-muted-foreground">
                      {isEn ? `POINT 0${item.num}` : `ĐIỀU 0${item.num}`}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-lg font-bold text-foreground leading-snug">
                    {isEn ? item.titleEn : item.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-muted-foreground">
                    {isEn ? item.descEn : item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Additional Guidance Cross-Links */}
          <Reveal delay={0.3}>
            <div className="mt-10 rounded-2xl border border-border/80 bg-card/80 p-6 text-xs sm:text-sm leading-relaxed text-muted-foreground">
              <p>
                {isEn
                  ? 'A show unit illustrates how the apartment will look; it does not answer whether the price is reasonable or legal dossiers are sufficient. We advise cross-examining '
                  : 'Nhà mẫu cho biết căn hộ trông như thế nào; nó không trả lời được câu hỏi căn đó đáng bao nhiêu tiền hay pháp lý đã đủ chưa. Đọc thêm '}
                <Link
                  href="/phap-ly"
                  className="font-bold text-primary dark:text-[#e6c887] hover:underline"
                >
                  {isEn ? 'Bcons Tam Hiep Legal Dossier' : 'pháp lý Bcons Tam Hiệp'}
                </Link>
                {isEn ? ' and ' : ' và '}
                <Link
                  href="/gia-ban"
                  className="font-bold text-primary dark:text-[#e6c887] hover:underline"
                >
                  {isEn ? 'Current Price List & Payment Schemes' : 'bảng giá bán & chính sách thanh toán'}
                </Link>{' '}
                {isEn
                  ? 'before deciding to commit your deposit.'
                  : 'trước khi đặt bút ký hợp đồng mua bán.'}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FULLSCREEN INTERACTIVE LIGHTBOX MODAL                                  */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {currentLightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/95 p-3 sm:p-6 backdrop-blur-xl"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Toolbar */}
            <div
              className="flex w-full max-w-6xl items-center justify-between gap-4 text-white z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-[#e6c887] backdrop-blur-md">
                  {isEn ? currentLightboxItem.typeNameEn : currentLightboxItem.typeName}
                </span>
                <span className="text-xs sm:text-sm text-white/70">
                  {isEn ? currentLightboxItem.captionEn : currentLightboxItem.caption}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs sm:text-sm font-semibold text-white/80">
                  {(lightboxIndex ?? 0) + 1} / {filteredImages.length}
                </span>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(null)}
                  aria-label="Đóng xem ảnh"
                  className="flex size-9 items-center justify-center rounded-full bg-white/15 text-white transition-all hover:bg-white/30 hover:scale-110 cursor-pointer"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>

            {/* Center Main High-Res Image with Prev / Next Arrows */}
            <div
              className="relative flex w-full max-w-6xl flex-1 items-center justify-center py-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Button */}
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((prev) =>
                    prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : 0
                  )
                }
                aria-label="Ảnh trước"
                className="absolute left-1 sm:left-4 z-20 flex size-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 transition-all hover:bg-[#e6c887] hover:text-[#072018] hover:scale-110 cursor-pointer"
              >
                <ChevronLeft className="size-6" />
              </button>

              {/* Main Image */}
              <div className="relative max-h-[75vh] max-w-full overflow-hidden rounded-xl shadow-2xl">
                <motion.img
                  key={currentLightboxItem.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  src={currentLightboxItem.src}
                  alt={currentLightboxItem.caption}
                  className="max-h-[75vh] w-auto max-w-full object-contain select-none"
                />
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((prev) =>
                    prev !== null ? (prev + 1) % filteredImages.length : 0
                  )
                }
                aria-label="Ảnh tiếp theo"
                className="absolute right-1 sm:right-4 z-20 flex size-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 transition-all hover:bg-[#e6c887] hover:text-[#072018] hover:scale-110 cursor-pointer"
              >
                <ChevronRight className="size-6" />
              </button>
            </div>

            {/* Bottom Caption & Thumbnail Strip */}
            <div
              className="w-full max-w-6xl flex flex-col items-center gap-3 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-center font-serif text-sm sm:text-base font-semibold text-white">
                {isEn ? currentLightboxItem.captionEn : currentLightboxItem.caption}
              </p>

              {/* Thumbnail Strip for Rapid Navigation */}
              <div className="flex w-full items-center justify-center gap-2 overflow-x-auto py-1 px-4 scrollbar-none">
                {filteredImages.map((thumb, tIdx) => {
                  const isThumbActive = tIdx === lightboxIndex

                  return (
                    <button
                      key={thumb.id}
                      type="button"
                      onClick={() => setLightboxIndex(tIdx)}
                      className={`relative shrink-0 overflow-hidden rounded-lg transition-all duration-200 cursor-pointer ${
                        isThumbActive
                          ? 'ring-2 ring-[#e6c887] scale-110 opacity-100'
                          : 'opacity-40 hover:opacity-80'
                      }`}
                    >
                      <img
                        src={thumb.src}
                        alt={thumb.caption}
                        className="h-10 w-14 object-cover"
                      />
                    </button>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
