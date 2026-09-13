'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Clock,
  ExternalLink,
  MapPin,
  Map,
  Layers,
  ZoomIn,
  X,
  Sparkles,
  ShoppingBag,
  HeartPulse,
  ShoppingCart,
  Factory,
  Train,
  Plane,
  Navigation,
} from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

// Icon mapping for 6 connectivity cards
const CONNECTIVITY_ICONS = [
  ShoppingBag,
  HeartPulse,
  ShoppingCart,
  Factory,
  Train,
  Plane,
]

// Rich contextual value & category tags for 6 connectivity cards
const CONNECTIVITY_EXTENDED_DATA = {
  vi: [
    {
      tag: 'Mua sắm & Giải trí',
      desc: 'Tổ hợp TTTM, cụm rạp CGV, WinMart và phố ẩm thực gia đình sôi động bậc nhất Biên Hòa.',
      mode: '1 phút đi bộ',
    },
    {
      tag: 'Y tế quốc tế',
      desc: 'Bệnh viện đa khoa quốc tế với đầy đủ chuyên khoa, bảo đảm chăm sóc sức khỏe gia đình 24/7.',
      mode: '3 phút di chuyển',
    },
    {
      tag: 'Đại siêu thị',
      desc: 'Trung tâm mua sắm tiêu dùng, chuỗi điện máy và dịch vụ gia đình tiện lợi ngay ngã tư Vũng Tàu.',
      mode: '5 phút di chuyển',
    },
    {
      tag: 'KCN Trọng điểm',
      desc: 'Tập trung hơn 50.000 chuyên gia, kỹ sư nước ngoài - bảo chứng nhu cầu thuê căn hộ luôn cao.',
      mode: '5 phút di chuyển',
    },
    {
      tag: 'Đầu mối đường sắt',
      desc: 'Ga trung tâm Đồng Nai, kết nối thông suốt mạng lưới tàu hỏa Bắc - Nam và thương mại liên tỉnh.',
      mode: '7 phút di chuyển',
    },
    {
      tag: 'Cửa ngõ hàng không',
      desc: 'Kết nối nhanh theo trục QL 1K - Phạm Văn Đồng thẳng đến sân bay và trung tâm TP.HCM.',
      mode: 'Đại lộ QL 1K',
    },
  ],
  en: [
    {
      tag: 'Shopping & Cinema',
      desc: 'Premier commercial complex featuring CGV Cinema, WinMart, dining and family entertainment.',
      mode: '1 min walk',
    },
    {
      tag: 'Intl Healthcare',
      desc: 'International-standard hospital providing comprehensive 24/7 medical care for families.',
      mode: '3 mins drive',
    },
    {
      tag: 'Hypermarket',
      desc: 'Mega shopping center, electronics and essential household retail at Vung Tau crossroads.',
      mode: '5 mins drive',
    },
    {
      tag: 'Industrial Hub',
      desc: 'Over 50,000 corporate experts and engineers, ensuring consistent high rental yields.',
      mode: '5 mins drive',
    },
    {
      tag: 'Railway Station',
      desc: 'Key regional railway station linking provincial logistics and the North-South rail line.',
      mode: '7 mins drive',
    },
    {
      tag: 'Intl Airport',
      desc: 'Direct express corridor via Route 1K and Pham Van Dong Blvd to airport and HCMC.',
      mode: 'Expressway',
    },
  ],
}

export function Location() {
  const { t, locale } = useSitePreferences()
  const isEn = locale === 'en'

  // Map Hub View Mode: 'google' | 'regional' | 'satellite'
  const [activeMapTab, setActiveMapTab] = useState<'google' | 'regional' | 'satellite'>('google')

  // Lightbox modal state for full-screen photo viewing
  const [lightbox, setLightbox] = useState<{ src: string; title: string; desc: string } | null>(null)

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    if (lightbox) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [lightbox])

  // 3 Cinematic Visual Landmark Highlights
  const locationVisualCards = [
    {
      id: 'phan-trung',
      title: isEn ? '236 Phan Trung Frontage' : 'Mặt Tiền 236 Phan Trung',
      badge: isEn ? 'URBAN ARTERY' : 'TRỤC PHỐ THƯƠNG MẠI',
      desc: isEn
        ? 'Prime location on the most vibrant culinary, banking, and shopping avenue in Tam Hiep.'
        : 'Tọa lạc mặt tiền cung đường sầm uất, nhộn nhịp bậc nhất Biên Hòa với hệ thống ngân hàng, nhà hàng và dịch vụ cao cấp.',
      image: '/images/bcons-central-park-tam-hiep-phoi-canh.webp',
      tagText: isEn ? 'Actual Project Perspective' : 'Phối cảnh dự án thực tế',
    },
    {
      id: 'regional-map',
      title: isEn ? 'Regional Transit Hub' : 'Sơ Đồ Kết Nối Giao Thông',
      badge: isEn ? 'TRIPLE ECONOMIC ZONE' : 'TAM GIÁC KINH TẾ VÀNG',
      desc: isEn
        ? 'Seamlessly connects to Pham Van Thuan, Nguyen Ai Quoc, National Route 1K, and Metro Line 1.'
        : 'Trực tiếp kết nối QL 1K, QL 1A, cầu Bửu Hòa, trục Phạm Văn Thuận và tuyến Metro Bến Thành – Suối Tiên mở rộng.',
      image: '/images/location-map.jpg',
      tagText: isEn ? 'Regional Planning Map' : 'Bản đồ quy hoạch liên vùng',
    },
    {
      id: 'amenities-map',
      title: isEn ? 'Surrounding 60+ Amenities' : 'Hệ Tiện Ích Ngoại Khu Hoàn Hảo',
      badge: isEn ? '1 - 3KM RADIUS' : 'BÁN KÍNH VÀNG 5 PHÚT',
      desc: isEn
        ? 'Within 400m from Vincom Plaza, 1km from Hoan My Hospital, top-tier schools, and industrial parks.'
        : 'Cách Vincom Plaza chỉ 400m, BV Quốc tế Hoàn Mỹ 1km, hệ thống trường liên cấp và các KCN công nghệ cao trọng điểm.',
      image: '/images/location-map-2.jpg',
      tagText: isEn ? 'Satellite Facilities Infographic' : 'Infographic tiện ích ngoại khu',
    },
  ]

  return (
    <section
      id="vi-tri"
      className="scroll-mt-24 bg-background py-20 sm:py-24 lg:py-32 transition-colors border-y border-border/60 dark:border-white/5 relative overflow-hidden"
    >
      {/* Subtle Ambient Background Lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#e6c887]/5 via-primary/5 to-transparent blur-3xl opacity-60 dark:opacity-30" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Heading with Luxury Eyebrow */}
        <SectionHeading
          align="center"
          eyebrow={t.location.eyebrow}
          title={isEn ? 'Bcons Central Park Location' : 'Vị Trí Bcons Central Park'}
          subtitle={isEn ? 'Strategic Core Of Bien Hoa' : 'Mặt Tiền 236 Phan Trung – Tâm Điểm Biên Hòa'}
          description={
            isEn
              ? 'Situated in the prime commercial, administrative, and lifestyle heart of Bien Hoa, providing direct connectivity to Ho Chi Minh City and major industrial clusters.'
              : 'Tọa lạc vị trí độc tôn giữa trung tâm thương mại – hành chính sôi động bậc nhất Biên Hòa, kết nối siêu tốc tới TP.HCM và các cụm kinh tế trọng điểm.'
          }
        />

        {/* =========================================================
            MAIN BENTO: INTERACTIVE MAP HUB + 6 CONNECTIVITY CARDS
           ========================================================= */}
        <div className="mt-10 sm:mt-12 lg:mt-16 grid gap-6 lg:grid-cols-[1.1fr_1.15fr] items-stretch">
          {/* Left Column: Interactive Map Hub (Doppelrand Double-Bezel Architecture) */}
          <Reveal>
            <div className="group relative rounded-3xl p-1.5 sm:p-2 bg-[#e6c887]/20 dark:bg-white/[0.04] border border-[#e6c887]/30 dark:border-white/10 shadow-xl flex flex-col h-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
              {/* Inner Core */}
              <div className="rounded-[calc(1.5rem-0.25rem)] overflow-hidden bg-card flex flex-col h-full border border-border/40 dark:border-white/5">
                {/* Header Bar: Brand Identity & View Switcher */}
                <div className="bg-[#072018] dark:bg-[#071712] px-4 py-3 sm:px-5 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-emerald-950/40 dark:border-white/10">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="size-8 rounded-full bg-[#e6c887]/15 border border-[#e6c887]/30 flex items-center justify-center shrink-0">
                      <MapPin className="size-4 text-[#e6c887]" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-serif font-bold text-white tracking-wide truncate">
                        <span className="text-[#e6c887]">BCONS</span> CENTRAL PARK
                      </div>
                      <div className="text-[11px] sm:text-xs font-sans text-emerald-100/75 dark:text-slate-300 truncate">
                        {t.location.mapCardAddress}
                      </div>
                    </div>
                  </div>

                  {/* Directions Button with Button-in-Button Micro-interaction */}
                  <a
                    href={t.location.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn shrink-0 inline-flex items-center gap-2 rounded-full bg-[#e6c887] hover:bg-[#dfbd78] text-[#072018] pl-3.5 pr-1.5 py-1.5 text-xs font-sans font-bold shadow-sm transition-all duration-300 active:scale-95 self-start sm:self-auto"
                  >
                    <span>{t.location.directions}</span>
                    <span className="size-5 rounded-full bg-[#072018]/10 dark:bg-black/20 flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                      <ExternalLink className="size-3" />
                    </span>
                  </a>
                </div>

                {/* Switcher Tabs Bar */}
                <div className="bg-secondary/80 dark:bg-black/40 px-3 py-2 flex items-center gap-1.5 border-b border-border/50 dark:border-white/10 overflow-x-auto">
                  <button
                    type="button"
                    onClick={() => setActiveMapTab('google')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-sans font-semibold transition-all duration-300 whitespace-nowrap ${
                      activeMapTab === 'google'
                        ? 'bg-primary text-primary-foreground shadow-sm dark:bg-[#e6c887] dark:text-[#072018]'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary dark:hover:bg-white/5'
                    }`}
                  >
                    <Navigation className="size-3.5" />
                    <span>{isEn ? 'Google Maps Live' : 'Google Maps 3D'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveMapTab('regional')}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-sans font-semibold transition-all duration-300 whitespace-nowrap ${
                      activeMapTab === 'regional'
                        ? 'bg-primary text-primary-foreground shadow-sm dark:bg-[#e6c887] dark:text-[#072018]'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary dark:hover:bg-white/5'
                    }`}
                  >
                    <Map className="size-3.5" />
                    <span>{isEn ? 'Regional Planning Map' : 'Sơ Đồ Kết Nối Vùng'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveMapTab('satellite')}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-sans font-semibold transition-all duration-300 whitespace-nowrap ${
                      activeMapTab === 'satellite'
                        ? 'bg-primary text-primary-foreground shadow-sm dark:bg-[#e6c887] dark:text-[#072018]'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary dark:hover:bg-white/5'
                    }`}
                  >
                    <Layers className="size-3.5" />
                    <span>{isEn ? 'Surrounding Facilities' : 'Tiện Ích Ngoại Khu'}</span>
                  </button>
                </div>

                {/* Tab Display Area */}
                <div className="relative w-full flex-1 min-h-[340px] sm:min-h-[380px] lg:min-h-[420px] bg-muted/30 flex items-center justify-center overflow-hidden">
                  {/* Tab 1: Live Interactive Google Map */}
                  {activeMapTab === 'google' && (
                    <iframe
                      title={t.location.imageAlt}
                      src={`https://www.google.com/maps?q=236+Phan+Trung,+Tam+Hi%E1%BB%87p,+Bi%C3%AAn+H%C3%B2a,+%C4%90%E1%BB%93ng+Nai&hl=${isEn ? 'en' : 'vi'}&z=16&output=embed`}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="size-full border-0 absolute inset-0"
                    />
                  )}

                  {/* Tab 2: High-Resolution Regional Map with Click-to-Zoom */}
                  {activeMapTab === 'regional' && (
                    <div
                      className="size-full absolute inset-0 cursor-pointer group/map overflow-hidden"
                      onClick={() =>
                        setLightbox({
                          src: '/images/location-map.jpg',
                          title: isEn ? 'Bcons Central Park Regional Planning Map' : 'Sơ Đồ Quy Hoạch Kết Nối Vùng Bcons Central Park',
                          desc: isEn
                            ? 'Detailed strategic traffic map showing direct access to Pham Van Thuan, Vo Thi Sau, and Metro Line.'
                            : 'Bản đồ chi tiết mạng lưới giao thông kết nối trực tiếp đến các trục đường huyết mạch Biên Hòa và TP.HCM.',
                        })
                      }
                    >
                      <img
                        src="/images/location-map.jpg"
                        alt="Sơ đồ kết nối vùng Bcons Central Park"
                        className="size-full object-cover sm:object-contain transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/map:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover/map:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#072018]/85 text-[#e6c887] border border-[#e6c887]/40 px-4 py-2 text-xs font-sans font-bold backdrop-blur-md shadow-lg transition-transform duration-300 group-hover/map:scale-105">
                          <ZoomIn className="size-4" />
                          <span>{isEn ? 'Click to Enlarge Map' : 'Phóng to xem bản đồ chi tiết'}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tab 3: Surrounding Facilities Infographic */}
                  {activeMapTab === 'satellite' && (
                    <div
                      className="size-full absolute inset-0 cursor-pointer group/sat overflow-hidden"
                      onClick={() =>
                        setLightbox({
                          src: '/images/location-map-2.jpg',
                          title: isEn ? 'Surrounding Facilities Infographic' : 'Hệ Tiện Ích Liên Kết Vùng Ngoại Khu',
                          desc: isEn
                            ? 'Complete radial breakdown of shopping malls, hospitals, universities, and administrative centers within 500m - 5km.'
                            : 'Chi tiết hệ thống thương mại, bệnh viện, trường học và trung tâm hành chính trong bán kính vàng 500m – 5km.',
                        })
                      }
                    >
                      <img
                        src="/images/location-map-2.jpg"
                        alt="Tiện ích liên kết vùng Bcons Central Park"
                        className="size-full object-cover sm:object-contain transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/sat:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover/sat:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#072018]/85 text-[#e6c887] border border-[#e6c887]/40 px-4 py-2 text-xs font-sans font-bold backdrop-blur-md shadow-lg transition-transform duration-300 group-hover/sat:scale-105">
                          <ZoomIn className="size-4" />
                          <span>{isEn ? 'Click to Enlarge Infographic' : 'Phóng to xem đầy đủ tiện ích'}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: 6 Connectivity Destination Cards (Enriched Agency Doppelrand) */}
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4 h-full">
              {t.location.connectCards.map((item, index) => {
                const IconComponent = CONNECTIVITY_ICONS[index] || MapPin
                const ext = (isEn ? CONNECTIVITY_EXTENDED_DATA.en : CONNECTIVITY_EXTENDED_DATA.vi)[index] || {
                  tag: 'TIỆN ÍCH',
                  desc: '',
                  mode: 'Xe máy / Ô tô',
                }
                return (
                  <div
                    key={item.title}
                    className="group relative rounded-2xl p-1 bg-[#e6c887]/20 dark:bg-white/[0.04] border border-[#e6c887]/30 dark:border-white/10 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1.5 hover:shadow-xl hover:border-[#e6c887]/70 dark:hover:border-[#e6c887]/60 overflow-hidden flex flex-col h-full"
                  >
                    {/* Background Subtle Watermark Icon for Rich Depth & Texture */}
                    <IconComponent className="absolute -right-3 -bottom-3 size-24 text-[#072018]/[0.04] dark:text-[#e6c887]/[0.06] group-hover:text-primary/10 dark:group-hover:text-[#e6c887]/15 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] pointer-events-none" />

                    {/* Inner Core */}
                    <div className="rounded-[calc(1rem-0.125rem)] bg-card p-3.5 sm:p-4 h-full flex flex-col justify-between border border-border/30 dark:border-white/5 transition-colors group-hover:bg-card/95 relative z-10">
                      <div>
                        {/* Header Row: Category Badge & Icon */}
                        <div className="flex items-center justify-between gap-1.5 pb-2.5 border-b border-border/40 dark:border-white/5">
                          <span className="inline-flex items-center rounded-full px-2 py-0.5 text-[9.5px] sm:text-[10px] font-sans font-bold uppercase tracking-wider bg-[#e6c887]/15 text-[#916b22] dark:text-[#e6c887] border border-[#e6c887]/30 truncate max-w-[130px]">
                            {ext.tag}
                          </span>
                          <div className="size-7 sm:size-8 rounded-lg bg-primary/10 dark:bg-[#e6c887]/15 border border-[#e6c887]/20 flex items-center justify-center text-primary dark:text-[#e6c887] shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#e6c887] group-hover:text-[#072018]">
                            <IconComponent className="size-3.5 sm:size-4 stroke-[1.75]" />
                          </div>
                        </div>

                        {/* Distance Statistic & Title */}
                        <div className="mt-3">
                          <div className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-[#072018] dark:text-[#e6c887] group-hover:translate-x-0.5 transition-transform duration-300">
                            {item.distance}
                          </div>
                          <h4 className="mt-1 text-xs sm:text-[13.5px] font-sans font-bold text-foreground leading-snug group-hover:text-primary dark:group-hover:text-[#e6c887] transition-colors line-clamp-2">
                            {item.title}
                          </h4>
                        </div>

                        {/* Contextual Value Description - Completely eliminates empty void! */}
                        <p className="mt-2.5 text-[11px] sm:text-xs font-sans text-muted-foreground dark:text-[#c2d3cb] leading-relaxed line-clamp-3">
                          {ext.desc}
                        </p>
                      </div>

                      {/* Footer: Transit Time with Pulse Dot & Travel Mode */}
                      <div className="mt-3.5 pt-2.5 border-t border-border/60 dark:border-white/5 flex items-center justify-between text-[11px] font-sans gap-1">
                        <div className="flex items-center gap-1.5 text-foreground/80 dark:text-slate-300 min-w-0">
                          <span className="size-1.5 sm:size-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                          <Clock className="size-3 text-primary dark:text-[#e6c887] shrink-0 stroke-[2]" />
                          <span className="font-semibold text-foreground dark:text-white truncate">{item.time}</span>
                        </div>

                        <span className="text-[10px] sm:text-[10.5px] font-medium text-muted-foreground dark:text-slate-400 bg-secondary dark:bg-white/5 px-2 py-0.5 rounded-md border border-border/40 dark:border-white/5 shrink-0">
                          {ext.mode}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>

        {/* =========================================================
            CINEMATIC 3-CARD VISUAL STRIP (REAL-ESTATE PHOTO HIGHLIGHTS)
           ========================================================= */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-[0.15em] text-primary dark:text-[#e6c887]">
                <Sparkles className="size-3.5" />
                <span>{isEn ? 'Location Highlights In Pictures' : 'Hình Ảnh & Quy Hoạch Vị Trí Vàng'}</span>
              </div>
              <h3 className="mt-1.5 font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                {isEn ? 'Visual Perspective & Masterplan Connections' : 'Góc Nhìn Thực Tế & Bản Đồ Quy Hoạch'}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {locationVisualCards.map((card, idx) => (
              <Reveal key={card.id} delay={idx * 0.1}>
                <div
                  onClick={() =>
                    setLightbox({
                      src: card.image,
                      title: card.title,
                      desc: card.desc,
                    })
                  }
                  className="group relative rounded-3xl p-1.5 bg-[#e6c887]/20 dark:bg-white/[0.04] border border-[#e6c887]/30 dark:border-white/10 shadow-md transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1.5 hover:shadow-2xl hover:border-[#e6c887]/60 cursor-pointer flex flex-col h-full"
                >
                  {/* Inner Core */}
                  <div className="rounded-[calc(1.5rem-0.25rem)] overflow-hidden bg-card flex flex-col h-full border border-border/30 dark:border-white/5">
                    {/* Image Container */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Pill Badge */}
                      <span className="absolute top-3 left-3 rounded-full px-2.5 py-1 text-[10px] font-sans font-bold uppercase tracking-wider bg-[#072018]/90 text-[#e6c887] border border-[#e6c887]/30 backdrop-blur-md shadow-md">
                        {card.badge}
                      </span>

                      {/* Zoom Hint Icon */}
                      <div className="absolute bottom-3 right-3 size-8 rounded-full bg-white/20 dark:bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                        <ZoomIn className="size-4" />
                      </div>

                      {/* Tag Text */}
                      <span className="absolute bottom-3 left-3 text-[11px] font-sans font-medium text-white/90 drop-shadow">
                        {card.tagText}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-serif text-base sm:text-lg font-bold text-foreground group-hover:text-primary dark:group-hover:text-[#e6c887] transition-colors">
                          {card.title}
                        </h4>
                        <p className="mt-2 text-xs sm:text-[13px] font-sans text-muted-foreground dark:text-[#c2d3cb] leading-relaxed">
                          {card.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-border/50 dark:border-white/5 flex items-center justify-between text-xs font-sans font-semibold text-primary dark:text-[#e6c887]">
                        <span>{isEn ? 'View High-Res Photo' : 'Nhấn xem ảnh độ nét cao'}</span>
                        <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* =========================================================
            STRATEGIC HIGHLIGHTS 3-COLUMN CARD
           ========================================================= */}
        <Reveal delay={0.16} className="mt-10 sm:mt-12">
          <div className="rounded-3xl border border-border/80 bg-card/80 p-6 sm:p-8 lg:p-10 shadow-sm dark:border-white/10 dark:bg-card/75 backdrop-blur-sm">
            <div className="grid gap-6 md:grid-cols-3 md:gap-8">
              {t.location.strategicHighlights.map((item, idx) => (
                <div
                  key={item.title}
                  className={[
                    'flex flex-col',
                    idx > 0
                      ? 'pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-border/70 dark:border-white/10 md:pl-8'
                      : '',
                  ].join(' ')}
                >
                  <h3 className="font-serif text-xs sm:text-sm lg:text-[15px] font-bold tracking-wider text-foreground dark:text-[#e6c887] uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm font-sans leading-relaxed text-muted-foreground dark:text-[#c2d3cb]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* =========================================================
            DISCLAIMER & AGENCY BUTTON-IN-BUTTON CTA TO /vi-tri
           ========================================================= */}
        <Reveal delay={0.2} className="mt-8 sm:mt-10 text-center">
          <p className="font-sans text-xs text-muted-foreground dark:text-slate-400 max-w-2xl mx-auto">
            {t.location.disclaimer}
          </p>
          <div className="mt-5 sm:mt-6 flex justify-center">
            <Link
              href="/vi-tri"
              className="group inline-flex items-center gap-3 rounded-full bg-primary hover:bg-[#0b2f24] text-white dark:bg-[#e6c887] dark:hover:bg-[#dfbd78] dark:text-[#072018] pl-6 sm:pl-8 pr-2 sm:pr-2.5 py-2.5 sm:py-3 text-xs sm:text-sm font-sans font-bold tracking-wider shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{t.location.viewMoreBtn}</span>
              <span className="size-7 sm:size-8 rounded-full bg-white/15 dark:bg-black/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                <ArrowRight className="size-3.5 sm:size-4 stroke-[2.5]" />
              </span>
            </Link>
          </div>
        </Reveal>
      </div>

      {/* =========================================================
          FULLSCREEN HIGH-RES LIGHTBOX MODAL
         ========================================================= */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-[#072018] rounded-3xl border border-[#e6c887]/40 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#071712]">
              <div>
                <h4 className="font-serif text-sm sm:text-base font-bold text-white">
                  {lightbox.title}
                </h4>
                <p className="text-[11px] sm:text-xs font-sans text-emerald-100/70 truncate max-w-xl">
                  {lightbox.desc}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="size-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-transform hover:scale-110"
                aria-label="Close modal"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Modal Body: Full Image */}
            <div className="relative flex-1 overflow-auto bg-black/40 flex items-center justify-center p-2 sm:p-4 min-h-[300px] max-h-[78vh]">
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="max-h-[74vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

