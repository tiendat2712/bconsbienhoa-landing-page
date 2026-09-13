'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  MapPin,
  Plane,
  Building2,
  ExternalLink,
  CheckCircle2,
  ShoppingBag,
  HeartPulse,
  ShoppingCart,
  Train,
  Factory,
  Bus,
  Globe,
  Route,
  Car,
  FileText,
  Download,
  Maximize2,
  X,
  Play,
  Home,
  ChevronRight,
  Sparkles,
  Send,
  PhoneCall,
  Clock,
  Layers,
  Map,
  Navigation,
  ZoomIn,
  ArrowRight,
} from 'lucide-react'
import { Reveal } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function LocationDetail() {
  const { theme, locale, t, openConsultation } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  // Map Hub View Mode: 'google' | 'regional' | 'satellite'
  const [activeMapTab, setActiveMapTab] = useState<'google' | 'regional' | 'satellite'>('google')

  // Category filter for 12 destinations: 'all' | 'shopping' | 'health' | 'industry' | 'transit'
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<'all' | 'shopping' | 'health' | 'industry' | 'transit'>('all')

  // Lightbox Modal for high-res maps, perspectives, and infographics
  const [activeLightbox, setActiveLightbox] = useState<{ src: string; title: string; desc: string } | null>(null)

  // Keyboard navigation & scroll lock for Lightbox
  useEffect(() => {
    if (!activeLightbox) {
      document.body.style.overflow = ''
      return
    }
    document.body.style.overflow = 'hidden'
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveLightbox(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeLightbox])

  // 4 Top Quick Facts (matching media_1788978018916.png)
  const quickFacts = isEn
    ? [
        {
          icon: MapPin,
          label: 'STREET FRONTAGE',
          value: 'Phan Trung',
        },
        {
          icon: Route,
          label: 'NATIONAL ROUTE 1A',
          value: '2 mins',
        },
        {
          icon: Plane,
          label: 'TAN SON NHAT AIRPORT',
          value: '45 mins',
        },
        {
          icon: Building2,
          label: 'HO CHI MINH CITY',
          value: '45 mins',
        },
      ]
    : [
        {
          icon: MapPin,
          label: 'MẶT TIỀN ĐƯỜNG',
          value: 'Phan Trung',
        },
        {
          icon: Route,
          label: 'KẾT NỐI QL1A',
          value: '2 phút',
        },
        {
          icon: Plane,
          label: 'SÂN BAY TÂN SƠN NHẤT',
          value: '45 phút',
        },
        {
          icon: Building2,
          label: 'TRUNG TÂM TP.HCM',
          value: '45 phút',
        },
      ]

  // 12 Regional Connectivity Destinations with Real Photos and Concise Stats
  const connectivityDestinations = [
    {
      id: 'vincom',
      category: 'shopping' as const,
      categoryLabel: isEn ? 'Shopping' : 'Mua sắm & Giải trí',
      distance: '400m',
      title: isEn ? 'Vincom Plaza Bien Hoa' : 'Vincom Plaza Biên Hòa',
      time: isEn ? '1 min' : '1 phút',
      image: '/images/amenities/phoi-canh-bcons-shopping-center.webp',
      icon: ShoppingBag,
    },
    {
      id: 'hoan-my',
      category: 'health' as const,
      categoryLabel: isEn ? 'Healthcare' : 'Y tế quốc tế',
      distance: '1km',
      title: isEn ? 'Hoan My ITO Hospital' : 'Bệnh viện Hoàn Mỹ ITO',
      time: isEn ? '3 mins' : '3 phút',
      image: '/images/amenities/amenity-spa-huong-ho-boi.webp',
      icon: HeartPulse,
    },
    {
      id: 'big-c',
      category: 'shopping' as const,
      categoryLabel: isEn ? 'Hypermarket' : 'Đại siêu thị',
      distance: '2km',
      title: isEn ? 'Big C Dong Nai' : 'Big C Đồng Nai',
      time: isEn ? '5 mins' : '5 phút',
      image: '/images/amenities/phoi-canh-quang-truong-thuong-mai.webp',
      icon: ShoppingCart,
    },
    {
      id: 'kcn-bien-hoa-2',
      category: 'industry' as const,
      categoryLabel: isEn ? 'Industrial Park' : 'KCN Trọng điểm',
      distance: '2km',
      title: isEn ? 'Bien Hoa 2 Industrial Park' : 'KCN Biên Hòa 2',
      time: isEn ? '5 mins' : '5 phút',
      image: '/images/amenities/phoi-canh-tong-the-du-an-01.webp',
      icon: Factory,
    },
    {
      id: 'ga-bien-hoa',
      category: 'transit' as const,
      categoryLabel: isEn ? 'Railway Station' : 'Đầu mối đường sắt',
      distance: '3km',
      title: isEn ? 'Bien Hoa Railway Station' : 'Ga Biên Hòa',
      time: isEn ? '7 mins' : '7 phút',
      image: '/images/amenities/amenity-pho-thuong-mai.webp',
      icon: Train,
    },
    {
      id: 'san-bay-tsn',
      category: 'transit' as const,
      categoryLabel: isEn ? 'Intl Airport' : 'Cửa ngõ hàng không',
      distance: '30km',
      title: isEn ? 'Tan Son Nhat Int. Airport' : 'Sân bay Tân Sơn Nhất',
      time: isEn ? '45 mins' : '45 phút',
      image: '/images/news/bcons-central-park-so-sanh-khu-vuc.webp',
      icon: Plane,
    },
    {
      id: 'kcn-amata',
      category: 'industry' as const,
      categoryLabel: isEn ? 'High-Tech Park' : 'KCN Công nghệ cao',
      distance: '5km',
      title: isEn ? 'Amata Industrial Park' : 'KCN Amata',
      time: isEn ? '10 mins' : '10 phút',
      image: '/images/amenities/phoi-canh-tong-the-du-an-02.webp',
      icon: Factory,
    },
    {
      id: 'kcn-agtex',
      category: 'industry' as const,
      categoryLabel: isEn ? 'Logistics IP' : 'KCN Logistics',
      distance: '6km',
      title: isEn ? 'Agtex Long Binh IP' : 'KCN Agtex Long Bình',
      time: isEn ? '12 mins' : '12 phút',
      image: '/images/bcons-central-park-tam-hiep-phoi-canh.webp',
      icon: Factory,
    },
    {
      id: 'ben-xe-bien-hoa',
      category: 'transit' as const,
      categoryLabel: isEn ? 'Bus Terminal' : 'Đầu mối xe khách',
      distance: '2km',
      title: isEn ? 'Bien Hoa Bus Terminal' : 'Bến xe Biên Hòa',
      time: isEn ? '5 mins' : '5 phút',
      image: '/images/amenities/phoi-canh-cong-chinh-quang-truong.webp',
      icon: Bus,
    },
    {
      id: 'hcmc-center',
      category: 'transit' as const,
      categoryLabel: isEn ? 'Megacity' : 'Trung tâm kinh tế',
      distance: '25km',
      title: isEn ? 'Downtown Ho Chi Minh City' : 'Trung tâm TP.HCM',
      time: isEn ? '45 mins' : '45 phút',
      image: '/images/project-towers.jpg',
      icon: Globe,
    },
    {
      id: 'ql1a',
      category: 'transit' as const,
      categoryLabel: isEn ? 'National Route' : 'Trục QL 1A',
      distance: '2 phút',
      title: isEn ? 'National Route 1A Access' : 'Kết nối QL1A',
      time: isEn ? '2 mins' : '2 phút',
      image: '/images/news/bcons-central-park-tien-ich-lien-ket-vung.webp',
      icon: Route,
    },
    {
      id: 'cao-toc-long-thanh',
      category: 'transit' as const,
      categoryLabel: isEn ? 'Expressway' : 'Cao tốc liên vùng',
      distance: '15 mins',
      title: isEn ? 'Long Thanh - Dau Giay Exp.' : 'Cao tốc Long Thành – Dầu Giây',
      time: isEn ? '15 mins' : '15 phút',
      image: '/images/location-map.jpg',
      icon: Car,
    },
  ]

  // Category filter items with count
  const categoryFilters = [
    { id: 'all', label: isEn ? 'All Destinations (12)' : 'Tất cả điểm đến (12)' },
    { id: 'shopping', label: isEn ? '🛍️ Shopping & Retail (2)' : '🛍️ Mua sắm & Dịch vụ (2)' },
    { id: 'health', label: isEn ? '🏥 Healthcare (1)' : '🏥 Y tế & Sức khỏe (1)' },
    { id: 'industry', label: isEn ? '🏭 Industrial Hubs (3)' : '🏭 Khu công nghiệp (3)' },
    { id: 'transit', label: isEn ? '🚄 Transit & Expressways (6)' : '🚄 Giao thông & Cao tốc (6)' },
  ]

  // Filtered destinations based on selected category
  const filteredDestinations =
    activeCategoryFilter === 'all'
      ? connectivityDestinations
      : connectivityDestinations.filter((d) => d.category === activeCategoryFilter)

  // 4 Core Strategic Advantages (matching media_1788978053960.png)
  const strategicAdvantages = isEn
    ? [
        'Direct frontage on 236 Phan Trung, nestled between Bien Hoa\'s two most bustling commercial avenues: Nguyen Ai Quoc and Pham Van Thuan.',
        'Immediate 1–5 minute reach to Vincom Plaza, Hoan My ITO Hospital, Tam Hiep Market, and renowned educational institutions from kindergarten to universities.',
        '10–15 minute transit radius to Amata IP, Bien Hoa 2 IP, and Agtex Long Binh IP, driving immense rental accommodation demand from senior engineers and foreign specialists.',
        'Rare clean land parcel of nearly 3 hectares in the established urban core, directly inheriting complete synchronous infrastructure without waiting for occupancy cycles.',
      ]
    : [
        'Tọa lạc mặt tiền 236 Phan Trung, kẹp giữa hai trục thương mại - dịch vụ sầm uất bậc nhất Biên Hòa: Nguyễn Ái Quốc và Phạm Văn Thuận.',
        'Tiếp cận 1–5 phút tới Vincom Plaza, Bệnh viện Hoàn Mỹ ITO, chợ Tam Hiệp và hệ thống trường học từ mầm non đến đại học danh tiếng.',
        'Bán kính 10–15 phút kết nối các KCN Amata, KCN Biên Hòa 2, Agtex Long Bình với nguồn cầu thuê lưu trú lớn từ chuyên gia, kỹ sư cấp cao.',
        'Quỹ đất sạch gần 3 ha hiếm hoi tại lõi trung tâm hiện hữu, thừa hưởng trọn vẹn hạ tầng đồng bộ mà không cần chờ đợi chu kỳ lấp đầy.',
      ]

  // Bộ Bản Đồ & Sơ Đồ Quy Hoạch Trực Quan (Interactive Visual Maps)
  const locationVisualMaps = isEn
    ? [
        {
          title: '236 Phan Trung Site & Satellite Position',
          badge: 'Satellite Position',
          image: '/images/location-map.jpg',
          desc: 'Precise center locator in Tam Hiep with direct frontage on Phan Trung commercial street.',
        },
        {
          title: 'Regional Traffic & Long Thanh Airport Network',
          badge: 'Regional Network',
          image: '/images/news/bcons-central-park-ban-do-lien-ket-vung.webp',
          desc: 'Expressways & Ring Road 3 connectivity directly linking HCMC, Bien Hoa, and the mega airport.',
        },
        {
          title: '60+ Satellite Facilities in 2km Radius',
          badge: '2km Liveability',
          image: '/images/location-map-2.jpg',
          desc: 'Comprehensive access to Vincom Plaza, ITO International Hospital, top schools, and industrial parks.',
        },
      ]
    : [
        {
          title: 'Bản đồ toạ độ & Vị trí 236 Phan Trung',
          badge: 'Định vị thực địa',
          image: '/images/location-map.jpg',
          desc: 'Vị trí tâm điểm phường Tam Hiệp với mặt tiền rộng mở trên trục thương mại Phan Trung.',
        },
        {
          title: 'Bản đồ liên kết vùng TP.HCM & Sân bay',
          badge: 'Quy hoạch vùng',
          image: '/images/news/bcons-central-park-ban-do-lien-ket-vung.webp',
          desc: 'Mạng lưới kết nối cao tốc, Vành đai 3 đến TP.HCM và sân bay quốc tế Long Thành.',
        },
        {
          title: 'Sơ đồ 60+ tiện ích vệ tinh bán kính 2km',
          badge: 'Bán kính 2km',
          image: '/images/location-map-2.jpg',
          desc: 'Hệ thống trường học, bệnh viện quốc tế ITO, Vincom và các khu công nghiệp trọng điểm.',
        },
      ]

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. HERO BANNER: BACKGROUND /images/project-towers.jpg                     */}
      {/* ========================================================================= */}
      <section className="relative isolate overflow-hidden min-h-[440px] md:min-h-[500px] flex items-center pt-28 pb-14 md:pt-36 md:pb-20 transition-colors">
        {/* Background Image */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: "url('/images/project-towers.jpg')" }}
          role="img"
          aria-label={isEn ? 'Bcons Central Park Location Banner' : 'Phối cảnh vị trí Bcons Central Park'}
        />

        {/* Cinematic Luxury Dark Gradient Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#072018]/95 via-[#072018]/85 to-[#072018]/70 dark:from-[#04140e]/98 dark:via-[#072018]/90 dark:to-[#04140e]/85 backdrop-blur-[1px]" />

        {/* Champagne Gold Ambient Glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#e6c887]/20 to-transparent blur-3xl opacity-50" />

        <div className="relative mx-auto max-w-6xl px-4 lg:px-8 w-full">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Đường dẫn" className="flex items-center gap-2 text-xs sm:text-sm text-white/75">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[#e6c887] font-medium"
            >
              <Home className="size-3.5" />
              <span>{t.nav.home}</span>
            </Link>
            <ChevronRight className="size-3.5 opacity-60 text-white/50" aria-hidden="true" />
            <span className="text-[#e6c887] font-semibold tracking-wide">{t.nav.location}</span>
          </nav>

          {/* Main Title & Intro matching mockup */}
          <Reveal>
            <div className="mt-6 text-left">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase drop-shadow-md">
                {isEn ? 'Bcons Central Park Location' : 'VỊ TRÍ BCONS CENTRAL PARK'}
              </h1>

              <p className="mt-2.5 font-serif italic text-lg sm:text-xl md:text-2xl text-[#e6c887] font-medium tracking-wide drop-shadow">
                {isEn ? 'Strategic Core Connection – Enduring Value' : 'Tâm điểm kết nối – Giá trị bền vững'}
              </p>

              <p className="mt-4 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed text-white/85 font-sans font-normal drop-shadow-sm">
                {isEn
                  ? 'Bcons Central Park Tam Hiep is prominently located on the frontage of Phan Trung Street, Tam Hiep Ward, Dong Nai. A strategic gateway rapidly connecting to Ho Chi Minh City, airports, expressways, and key industrial clusters.'
                  : 'Bcons Central Park Tam Hiệp tọa lạc mặt tiền đường Phan Trung, Phường Tam Hiệp, Thành phố Đồng Nai. Vị trí chiến lược kết nối nhanh đến TP.HCM, sân bay, cao tốc và các khu công nghiệp trọng điểm.'}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TOP METRICS & QUICK LEAD CAPTURE SECTION                               */}
      {/* ========================================================================= */}
      <section className="bg-background py-10 sm:py-12 border-b border-border/60 dark:border-white/5 transition-colors">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Left: 4 Metric Cards */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {quickFacts.map((fact, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between rounded-2xl border border-border/80 dark:border-white/10 bg-card p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-primary/40 dark:hover:border-[#e6c887]/40 transition-all group"
                  >
                    <span className="flex size-9 sm:size-10 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-[#e6c887]/15 dark:text-[#e6c887] group-hover:scale-105 transition-transform">
                      <fact.icon className="size-4.5 sm:size-5" />
                    </span>
                    <div className="mt-3 sm:mt-4">
                      <span className="block text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase text-muted-foreground">
                        {fact.label}
                      </span>
                      <span className="mt-0.5 block font-serif text-base sm:text-lg lg:text-xl font-bold text-foreground group-hover:text-primary dark:group-hover:text-[#e6c887] transition-colors truncate">
                        {fact.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Quick Registration Card */}
            <div className="lg:col-span-4 rounded-2xl sm:rounded-3xl border border-primary/20 dark:border-white/10 bg-gradient-to-br from-[#072018] via-[#0a2c21] to-[#072018] p-5 sm:p-6 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="pointer-events-none absolute -top-12 -right-12 size-36 rounded-full bg-[#e6c887]/15 blur-2xl" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="flex size-6 items-center justify-center rounded-full bg-[#e6c887] text-[#072018]">
                    <Sparkles className="size-3.5" />
                  </span>
                  <h3 className="font-serif text-sm sm:text-base font-bold uppercase tracking-wider text-[#e6c887]">
                    {isEn ? 'PROJECT LOCATION DOSSIER' : 'NHẬN THÔNG TIN VỊ TRÍ DỰ ÁN'}
                  </h3>
                </div>
                <p className="mt-2 text-xs text-white/80 leading-relaxed font-sans">
                  {isEn
                    ? 'Register to receive traffic connectivity maps, regional master planning, and capital appreciation analysis based on infrastructure from Sales Director Le Ngoc Long.'
                    : 'Nhận sơ đồ phân tích kết nối giao thông, bản đồ quy hoạch liên vùng và tư vấn tiềm năng tăng giá theo hạ tầng từ Giám đốc Sàn Lê Ngọc Long.'}
                </p>
              </div>

              <div className="mt-5 space-y-3">
                <button
                  type="button"
                  onClick={() =>
                    openConsultation({
                      source: 'Trang Vị Trí - Nhận thông tin vị trí dự án',
                    })
                  }
                  className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-[#e6c887] via-[#f0d8a0] to-[#e6c887] hover:brightness-105 text-[#072018] py-3 px-4 text-xs font-bold uppercase tracking-wider shadow-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  <span>{isEn ? 'REGISTER FOR LOCATION DOSSIER' : 'ĐĂNG KÝ NHẬN SƠ ĐỒ VỊ TRÍ'}</span>
                </button>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-white/80 font-sans">
                  <span className="flex items-center gap-1.5">
                    <PhoneCall className="size-3.5 text-[#e6c887]" />
                    Hotline:
                  </span>
                  <a
                    href="tel:0376671776"
                    className="font-bold text-[#e6c887] hover:underline"
                  >
                    0376 671 776
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SECTION: VỊ TRÍ TRUNG TÂM – KẾT NỐI TOÀN DIỆN (INTERACTIVE MAP HUB)     */}
      {/* ========================================================================= */}
      <section id="ban-do" className="scroll-mt-24 bg-secondary/30 dark:bg-card/30 py-16 sm:py-20 lg:py-24 transition-colors relative overflow-hidden">
        {/* Subtle Ambient Background Lighting */}
        <div className="pointer-events-none absolute -top-24 right-1/4 w-[600px] h-[300px] bg-[#e6c887]/10 dark:bg-[#e6c887]/5 blur-3xl rounded-full" />

        <div className="mx-auto max-w-6xl px-4 lg:px-8 relative">
          <Reveal>
            <div className="text-left">
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary dark:text-[#e6c887] font-sans">
                {isEn ? 'STRATEGIC LOCATION' : 'TÂM ĐIỂM KẾT NỐI BIÊN HÒA'}
              </span>
              <h2 className="mt-1.5 font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-foreground tracking-tight">
                {isEn ? 'CENTRAL LOCATION – COMPREHENSIVE CONNECTIVITY' : 'VỊ TRÍ TRUNG TÂM – KẾT NỐI TOÀN DIỆN'}
              </h2>
              <div className="mt-3 h-1 w-20 bg-gradient-to-r from-primary to-[#e6c887] rounded-full" />
            </div>
          </Reveal>

          {/* Interactive Map Hub: Double-Bezel Nested Architecture */}
          <Reveal delay={0.1}>
            <div className="mt-8 rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 bg-[#e6c887]/20 dark:bg-white/[0.04] border border-[#e6c887]/30 dark:border-white/10 shadow-xl overflow-hidden transition-all">
              <div className="rounded-[calc(1rem-2px)] sm:rounded-[calc(1.5rem-2px)] overflow-hidden bg-card border border-border/50 dark:border-white/5 flex flex-col">
                {/* Header Bar: Brand Identity & Directions Button */}
                <div className="bg-[#072018] dark:bg-[#071712] px-4 py-3.5 sm:px-6 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-emerald-950/40 dark:border-white/10">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <span className="flex size-8 sm:size-9 shrink-0 items-center justify-center rounded-xl bg-[#e6c887]/15 border border-[#e6c887]/30 text-[#e6c887]">
                      <MapPin className="size-4.5 sm:size-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm md:text-base font-serif font-bold text-white tracking-wide truncate">
                        <span className="text-[#e6c887]">BCONS</span> CENTRAL PARK
                      </div>
                      <div className="text-[11px] sm:text-xs font-sans text-emerald-100/80 dark:text-slate-300 truncate">
                        236 Phan Trung, Phường Tam Hiệp, Thành phố Đồng Nai
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://maps.google.com/?q=236+Phan+Trung,+Tam+Hiep,+Bien+Hoa,+Dong+Nai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e6c887] via-[#f0d8a0] to-[#e6c887] hover:brightness-105 text-[#072018] px-4 py-2 text-xs font-sans font-bold shadow-md transition-all active:scale-95 self-start sm:self-auto cursor-pointer"
                  >
                    <span>{isEn ? 'Get Directions' : 'Chỉ đường Google Maps'}</span>
                    <ExternalLink className="size-3.5" />
                  </a>
                </div>

                {/* 3-Mode View Switcher Tabs Bar */}
                <div className="bg-secondary/70 dark:bg-black/40 px-3 py-2.5 flex items-center gap-2 border-b border-border/50 dark:border-white/10 overflow-x-auto">
                  <button
                    type="button"
                    onClick={() => setActiveMapTab('google')}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-sans font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                      activeMapTab === 'google'
                        ? 'bg-primary text-primary-foreground shadow-sm dark:bg-[#e6c887] dark:text-[#072018]'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary dark:hover:bg-white/5'
                    }`}
                  >
                    <Navigation className="size-3.5" />
                    <span>{isEn ? 'Google Maps 3D Live' : 'Google Maps 3D'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveMapTab('regional')}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-sans font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
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
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-sans font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                      activeMapTab === 'satellite'
                        ? 'bg-primary text-primary-foreground shadow-sm dark:bg-[#e6c887] dark:text-[#072018]'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary dark:hover:bg-white/5'
                    }`}
                  >
                    <Layers className="size-3.5" />
                    <span>{isEn ? 'Surrounding Facilities' : 'Tiện Ích Ngoại Khu'}</span>
                  </button>
                </div>

                {/* Map Stage Viewport */}
                <div className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] bg-muted/40 overflow-hidden">
                  {/* Tab 1: Live Interactive Google Map */}
                  {activeMapTab === 'google' && (
                    <iframe
                      title="Bản đồ vị trí Bcons Central Park 236 Phan Trung"
                      src="https://www.google.com/maps?q=236+Phan+Trung,+Tam+Hi%E1%BB%87p,+Bi%C3%AAn+H%C3%B2a,+%C4%90%E1%BB%93ng+Nai&hl=vi&z=16&output=embed"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-full w-full border-0 animate-in fade-in duration-300"
                    />
                  )}

                  {/* Tab 2: Sơ đồ kết nối vùng */}
                  {activeMapTab === 'regional' && (
                    <div className="relative h-full w-full bg-slate-900 flex items-center justify-center group animate-in fade-in duration-300">
                      <img
                        src="/images/location-map.jpg"
                        alt="Sơ đồ kết nối vùng Bcons Central Park"
                        className="h-full w-full object-contain p-2 sm:p-4"
                        style={{ imageRendering: '-webkit-optimize-contrast' }}
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button
                          type="button"
                          onClick={() =>
                            setActiveLightbox({
                              src: '/images/location-map.jpg',
                              title: isEn ? 'Regional Planning Map — Tam Hiep, Bien Hoa' : 'Sơ Đồ Quy Hoạch Kết Nối Vùng — Phường Tam Hiệp',
                              desc: isEn
                                ? 'Master planning and regional infrastructure network connecting Bcons Central Park to HCMC, Long Thanh Airport, and major expressways.'
                                : 'Bản đồ quy hoạch hạ tầng giao thông liên vùng kết nối dự án Bcons Central Park với TP.HCM, sân bay Long Thành và các tuyến cao tốc huyết mạch.',
                            })
                          }
                          className="inline-flex items-center gap-2 rounded-full bg-[#072018] text-[#e6c887] border border-[#e6c887]/40 px-5 py-2.5 text-xs font-bold shadow-2xl transition-transform hover:scale-105 cursor-pointer"
                        >
                          <ZoomIn className="size-4" />
                          <span>{isEn ? 'Click to zoom in high-res' : 'Phóng to xem chi tiết'}</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Tab 3: Tiện ích ngoại khu */}
                  {activeMapTab === 'satellite' && (
                    <div className="relative h-full w-full bg-slate-900 flex items-center justify-center group animate-in fade-in duration-300">
                      <img
                        src="/images/location-map-2.jpg"
                        alt="Infographic tiện ích liên kết vùng Bcons Central Park"
                        className="h-full w-full object-contain p-2 sm:p-4"
                        style={{ imageRendering: '-webkit-optimize-contrast' }}
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button
                          type="button"
                          onClick={() =>
                            setActiveLightbox({
                              src: '/images/location-map-2.jpg',
                              title: isEn ? 'Surrounding Facilities Infographic' : 'Infographic Tiện Ích Liên Kết Vùng Bcons Central Park',
                              desc: isEn
                                ? 'Comprehensive 1-15 minute transit radius to 60+ hospitals, hypermarkets, industrial parks, and educational hubs.'
                                : 'Hệ thống tiện ích vệ tinh trong bán kính 1 - 15 phút quanh dự án: bệnh viện quốc tế, siêu thị, trường học và cụm KCN trọng điểm.',
                            })
                          }
                          className="inline-flex items-center gap-2 rounded-full bg-[#072018] text-[#e6c887] border border-[#e6c887]/40 px-5 py-2.5 text-xs font-bold shadow-2xl transition-transform hover:scale-105 cursor-pointer"
                        >
                          <ZoomIn className="size-4" />
                          <span>{isEn ? 'Click to zoom in high-res' : 'Phóng to xem chi tiết'}</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 3-Card Visual Photo Strip Below Map */}
            <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {/* Photo 1: Mặt tiền đại lộ Phan Trung */}
              <div
                onClick={() =>
                  setActiveLightbox({
                    src: '/images/bcons-central-park-tam-hiep-phoi-canh.webp',
                    title: isEn ? '236 Phan Trung Commercial Frontage' : 'Mặt Tiền Cung Đường Thương Mại 236 Phan Trung',
                    desc: isEn
                      ? 'Prime urban frontage in the most vibrant banking, shopping, and dining corridor in Tam Hiep.'
                      : 'Tọa lạc mặt tiền cung đường sầm uất, nhộn nhịp bậc nhất Biên Hòa với hệ thống ngân hàng, nhà hàng và dịch vụ tiện ích đẳng cấp.',
                  })
                }
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-border/80 dark:border-white/10 bg-card p-2 sm:p-2.5 shadow-sm hover:shadow-md hover:border-primary/40 dark:hover:border-[#e6c887]/40 transition-all cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg sm:rounded-xl">
                  <img
                    src="/images/bcons-central-park-tam-hiep-phoi-canh.webp"
                    alt="Mặt tiền 236 Phan Trung Bcons Central Park"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#072018]/90 text-[#e6c887] border border-[#e6c887]/30">
                      {isEn ? 'ACTUAL PERSPECTIVE' : 'PHỐI CẢNH DỰ ÁN'}
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white">
                    <span className="text-xs font-bold font-serif truncate">
                      {isEn ? '236 Phan Trung Frontage' : 'Mặt tiền 236 Phan Trung'}
                    </span>
                    <ZoomIn className="size-3.5 text-[#e6c887] shrink-0 opacity-80 group-hover:opacity-100" />
                  </div>
                </div>
              </div>

              {/* Photo 2: Sơ đồ quy hoạch liên vùng */}
              <div
                onClick={() =>
                  setActiveLightbox({
                    src: '/images/location-map.jpg',
                    title: isEn ? 'Regional Planning & Transport Master Plan' : 'Sơ Đồ Quy Hoạch & Kết Nối Giao Thông Vùng',
                    desc: isEn
                      ? 'Detailed regional transportation network connecting Bien Hoa with HCMC, Long Thanh Airport, and National Route 1A.'
                      : 'Mạng lưới giao thông chiến lược liên vùng kết nối TP. Biên Hòa với TP.HCM, Sân bay Quốc tế Long Thành và Quốc lộ 1A.',
                  })
                }
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-border/80 dark:border-white/10 bg-card p-2 sm:p-2.5 shadow-sm hover:shadow-md hover:border-primary/40 dark:hover:border-[#e6c887]/40 transition-all cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg sm:rounded-xl bg-slate-900">
                  <img
                    src="/images/location-map.jpg"
                    alt="Sơ đồ quy hoạch giao thông Bcons Central Park"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ imageRendering: '-webkit-optimize-contrast' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#072018]/90 text-[#e6c887] border border-[#e6c887]/30">
                      {isEn ? 'PLANNING MAP' : 'BẢN ĐỒ QUY HOẠCH'}
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white">
                    <span className="text-xs font-bold font-serif truncate">
                      {isEn ? 'Regional Transport Network' : 'Mạng lưới giao thông vùng'}
                    </span>
                    <ZoomIn className="size-3.5 text-[#e6c887] shrink-0 opacity-80 group-hover:opacity-100" />
                  </div>
                </div>
              </div>

              {/* Photo 3: Infographic tiện ích liên kết */}
              <div
                onClick={() =>
                  setActiveLightbox({
                    src: '/images/location-map-2.jpg',
                    title: isEn ? 'Surrounding Satellite Amenities & Transit Radii' : 'Hệ Tiện Ích Ngoại Khu & Bán Kính Di Chuyển',
                    desc: isEn
                      ? 'Detailed location map highlighting 60+ surrounding amenities, educational institutions, hospitals, and shopping centers.'
                      : 'Bản đồ chi tiết hệ tiện ích ngoại khu, trường học các cấp, bệnh viện và trung tâm thương mại trong bán kính 1 - 15 phút.',
                  })
                }
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-border/80 dark:border-white/10 bg-card p-2 sm:p-2.5 shadow-sm hover:shadow-md hover:border-primary/40 dark:hover:border-[#e6c887]/40 transition-all cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg sm:rounded-xl bg-slate-900">
                  <img
                    src="/images/location-map-2.jpg"
                    alt="Infographic tiện ích ngoại khu Bcons Central Park"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ imageRendering: '-webkit-optimize-contrast' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#072018]/90 text-[#e6c887] border border-[#e6c887]/30">
                      {isEn ? '60+ AMENITIES' : 'TIỆN ÍCH NGOẠI KHU'}
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white">
                    <span className="text-xs font-bold font-serif truncate">
                      {isEn ? 'Surrounding Facilities' : 'Tiện ích liên kết vùng'}
                    </span>
                    <ZoomIn className="size-3.5 text-[#e6c887] shrink-0 opacity-80 group-hover:opacity-100" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SECTION: KẾT NỐI VÙNG HOÀN HẢO (PANORAMIC SHOWCASE + 12 ENRICHED CARDS)  */}
      {/* ========================================================================= */}
      <section id="ket-noi" className="scroll-mt-24 bg-background py-16 sm:py-20 lg:py-28 transition-colors border-t border-border/60 dark:border-white/5 relative overflow-hidden">
        {/* Ambient Subtle Accent Glow */}
        <div className="pointer-events-none absolute -top-32 left-1/3 w-[700px] h-[350px] bg-gradient-to-b from-[#e6c887]/5 to-transparent blur-3xl opacity-50" />

        <div className="mx-auto max-w-6xl px-4 lg:px-8 relative">
          <Reveal>
            <div className="text-left max-w-3xl">
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary dark:text-[#e6c887] font-sans">
                {isEn ? 'REGIONAL CONNECTIVITY & TRANSIT NETWORK' : 'MẠNG LƯỚI GIAO THÔNG – KẾT NỐI VÙNG'}
              </span>
              <h2 className="mt-1.5 font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-foreground tracking-tight">
                {isEn ? 'SEAMLESS CONNECTIVITY — 1 TO 15 MINUTE GOLDEN RADIUS' : 'KẾT NỐI VÙNG HOÀN HẢO — BÁN KÍNH VÀNG 1 - 15 PHÚT'}
              </h2>
              <div className="mt-3 h-1 w-20 bg-gradient-to-r from-primary to-[#e6c887] rounded-full" />
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
                {isEn
                  ? 'Bcons Central Park is surrounded by a dense, interconnected ecosystem of shopping complexes, international healthcare, key industrial parks, and multi-lane expressways.'
                  : 'Tọa lạc tại trung tâm Tam Hiệp, Bcons Central Park sở hữu bán kính vàng kết nối ngay đến các đại siêu thị, cụm bệnh viện quốc tế, hệ thống trường học và các đại lộ giao thông huyết mạch.'}
              </p>
            </div>
          </Reveal>

          {/* Panoramic Infographic Showcase Hero Card */}
          <Reveal delay={0.1}>
            <div
              onClick={() =>
                setActiveLightbox({
                  src: '/images/location-map-2.jpg',
                  title: isEn ? 'Comprehensive Regional Facilities & Connectivity Infographic' : 'Infographic Bản Đồ Tiện Ích & Kết Nối Vùng Bcons Central Park',
                  desc: isEn
                    ? 'Visual map presenting all 12 key destinations and surrounding points of interest within 15 minutes of 236 Phan Trung.'
                    : 'Bản đồ trực quan chi tiết toàn bộ các điểm đến vệ tinh trọng điểm: Vincom Plaza, BV Hoàn Mỹ, Big C Đồng Nai, KCN Biên Hòa 2, KCN Amata, Ga Biên Hòa và trục cao tốc.',
                })
              }
              className="group relative mt-8 sm:mt-10 overflow-hidden rounded-2xl sm:rounded-3xl border border-border/80 dark:border-white/10 bg-slate-900 shadow-2xl cursor-pointer"
            >
              {/* Aspect Ratio Container for Full-Width Map Showcase */}
              <div className="relative aspect-[16/9] sm:aspect-[21/9] md:aspect-[24/9] w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                <img
                  src="/images/location-map-2.jpg"
                  alt="Infographic tiện ích liên kết vùng Bcons Central Park"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                />
                
                {/* Cinematic Vignette & Bottom Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#072018]/90 via-[#072018]/40 to-transparent" />

                {/* Top Badge: Highlighted Label */}
                <div className="absolute top-3 left-3 sm:top-5 sm:left-5 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#072018]/90 backdrop-blur-md px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#e6c887] border border-[#e6c887]/30 shadow-lg">
                    <Sparkles className="size-3.5 text-[#e6c887]" />
                    <span>{isEn ? 'COMPREHENSIVE REGIONAL AMENITIES' : 'BẢN ĐỒ TIỆN ÍCH NGOẠI KHU & BÁN KÍNH DI CHUYỂN'}</span>
                  </span>
                </div>

                {/* Center Hover Prompt */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/95 text-[#072018] dark:bg-[#e6c887] dark:text-[#072018] px-5 py-2.5 text-xs sm:text-sm font-bold shadow-2xl transition-transform group-hover:scale-105">
                    <ZoomIn className="size-4" />
                    <span>{isEn ? 'Click to view full-res infographic' : 'Click để phóng to bản đồ độ nét cao (HD)'}</span>
                  </span>
                </div>

                {/* Bottom Strip: Key Regional Transit Radius Caption */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-white">
                  <div>
                    <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold text-white drop-shadow">
                      {isEn ? '1–15 Minute Complete Living & Business Hub' : 'Hệ Sinh Thái Sống & Giao Thương Toàn Diện Trong Bán Kính 1 - 15 Phút'}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 font-sans mt-0.5 line-clamp-1">
                      {isEn
                        ? '12 strategic destinations connecting shopping, tertiary hospitals, international industrial zones, and expressways.'
                        : '12 điểm đến chiến lược kết nối mua sắm, bệnh viện tuyến đầu, khu công nghiệp quốc tế và cao tốc.'}
                    </p>
                  </div>

                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#e6c887] shrink-0">
                    <span>{isEn ? 'Enlarge' : 'Xem chi tiết'}</span>
                    <Maximize2 className="size-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Category Filter Tabs Bar */}
          <div className="mt-8 sm:mt-10 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categoryFilters.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategoryFilter(cat.id as any)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-sans font-bold transition-all duration-300 cursor-pointer ${
                  activeCategoryFilter === cat.id
                    ? 'bg-primary text-white shadow-md dark:bg-[#e6c887] dark:text-[#072018] scale-[1.02]'
                    : 'bg-card text-muted-foreground border border-border/80 dark:border-white/10 hover:border-primary/40 dark:hover:border-[#e6c887]/40 hover:text-foreground'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 12 Destination Cards in High-End Visual Photo Grid */}
          <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {filteredDestinations.map((item) => (
              <div
                key={item.id}
                onClick={() =>
                  setActiveLightbox({
                    src: item.image,
                    title: `${item.title} (${item.distance})`,
                    desc: `${item.title} — Khoảng cách ${item.distance}, thời gian di chuyển ước tính ${item.time} từ vị trí Bcons Central Park 236 Phan Trung.`,
                  })
                }
                className="group relative rounded-2xl sm:rounded-3xl p-1 sm:p-1.5 bg-[#e6c887]/15 dark:bg-white/[0.04] border border-border/80 dark:border-white/10 hover:border-primary/50 dark:hover:border-[#e6c887]/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {/* Inner Card Core */}
                <div className="rounded-[calc(1rem-2px)] sm:rounded-[calc(1.5rem-2px)] p-2.5 sm:p-3 bg-card h-full flex flex-col justify-between overflow-hidden border border-border/40 dark:border-white/5">
                  {/* Photo Container */}
                  <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden rounded-xl bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110"
                      style={{ imageRendering: '-webkit-optimize-contrast' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Top-Left Category Pill Tag */}
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#072018]/90 text-[#e6c887] border border-[#e6c887]/30 backdrop-blur-sm shadow">
                        {item.categoryLabel}
                      </span>
                    </div>

                    {/* Bottom-Right Transit Time Badge */}
                    <div className="absolute bottom-2 right-2">
                      <span className="inline-flex items-center gap-1 rounded-md bg-black/75 backdrop-blur-sm px-2 py-0.5 text-[10px] sm:text-[11px] font-bold text-white shadow">
                        <Clock className="size-3 text-[#e6c887]" />
                        <span>{item.time}</span>
                      </span>
                    </div>

                    {/* Hover Zoom Prompt */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/25">
                      <span className="flex size-9 items-center justify-center rounded-full bg-[#072018]/90 text-[#e6c887] border border-[#e6c887]/40 shadow-xl transition-transform group-hover:scale-105">
                        <ZoomIn className="size-4" />
                      </span>
                    </div>
                  </div>

                  {/* Concise Info Below Photo: Distance & Title only! No filler text paragraphs! */}
                  <div className="mt-3 px-1 pb-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-serif text-xl sm:text-2xl font-extrabold text-foreground group-hover:text-primary dark:group-hover:text-[#e6c887] transition-colors">
                        {item.distance}
                      </span>
                      <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-[#e6c887]/15 dark:text-[#e6c887] shrink-0">
                        <item.icon className="size-3.5" />
                      </span>
                    </div>

                    <h3 className="mt-1 font-serif text-xs sm:text-sm font-bold text-foreground group-hover:text-primary dark:group-hover:text-[#e6c887] transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Travel Time Disclaimer Note */}
          <p className="mt-6 text-xs sm:text-sm italic text-muted-foreground text-center font-sans">
            {isEn
              ? '* Distances and travel times are estimated by road from 236 Phan Trung under normal traffic conditions.'
              : '* Khoảng cách và thời gian di chuyển là ước tính thực tế từ 236 Phan Trung ngoài giờ cao điểm.'}
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SECTION: VỊ TRÍ ĐẮC ĐỊA – TIỀM NĂNG TĂNG GIÁ CAO (VISUAL MOSAIC & CTAS)   */}
      {/* ========================================================================= */}
      <section id="tiem-nang" className="scroll-mt-24 bg-secondary/30 dark:bg-[#071912]/40 py-16 sm:py-20 lg:py-28 transition-colors border-t border-border/60 dark:border-white/5 relative overflow-hidden">
        {/* Ambient Subtle Accent Glow */}
        <div className="pointer-events-none absolute bottom-10 right-10 w-[500px] h-[300px] bg-[#e6c887]/10 dark:bg-[#e6c887]/5 blur-3xl rounded-full" />

        <div className="mx-auto max-w-6xl px-4 lg:px-8 relative">
          <Reveal>
            <div className="text-left">
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary dark:text-[#e6c887] font-sans">
                {isEn ? 'INVESTMENT & APPRECIATION HIGHLIGHTS' : 'TIỀM NĂNG GIA TĂNG GIÁ TRỊ VƯỢT TRỘI'}
              </span>
              <h2 className="mt-1.5 font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-foreground tracking-tight">
                {isEn ? 'PRIME LOCATION – HIGH CAPITAL APPRECIATION POTENTIAL' : 'VỊ TRÍ ĐẮC ĐỊA – TIỀM NĂNG TĂNG GIÁ CAO'}
              </h2>
              <div className="mt-3 h-1 w-20 bg-gradient-to-r from-primary to-[#e6c887] rounded-full" />
            </div>
          </Reveal>

          <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: 4 Core Advantages & Key Highlights */}
            <div className="lg:col-span-6 space-y-6">
              {/* 4 Core Advantages List */}
              <div className="rounded-2xl sm:rounded-3xl border border-border/80 dark:border-white/10 bg-card p-6 sm:p-8 shadow-xl space-y-5">
                <h3 className="font-serif text-lg sm:text-xl font-bold uppercase tracking-wide text-foreground">
                  {isEn ? '4 Strategic Location Pillars' : '4 Trụ Cột Đắt Giá Của Vị Trí'}
                </h3>
                
                <div className="space-y-4">
                  {strategicAdvantages.map((adv, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 sm:gap-4">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#072018] text-[#e6c887] dark:bg-[#e6c887]/20 dark:text-[#e6c887] mt-0.5">
                        <CheckCircle2 className="size-4" />
                      </span>
                      <p className="text-xs sm:text-sm text-foreground/90 dark:text-slate-200 leading-relaxed font-sans font-medium">
                        {adv}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lead Dossier Registration Card */}
              <div className="rounded-2xl sm:rounded-3xl border border-primary/20 dark:border-white/10 bg-gradient-to-br from-[#072018] via-[#0a2c21] to-[#072018] p-6 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
                <div className="pointer-events-none absolute -top-12 -right-12 size-36 rounded-full bg-[#e6c887]/15 blur-2xl" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex size-6 items-center justify-center rounded-full bg-[#e6c887] text-[#072018]">
                      <Sparkles className="size-3.5" />
                    </span>
                    <h3 className="font-serif text-sm sm:text-base font-bold uppercase tracking-wider text-[#e6c887]">
                      {isEn ? 'EXECUTIVE LOCATION DOSSIER' : 'TƯ VẤN QUY HOẠCH & TIỀM NĂNG ĐẦU TƯ'}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
                    {isEn
                      ? 'Direct advisory on infrastructure roadmap, property value surge projections, and rental yields from Sales Director Le Ngoc Long.'
                      : 'Nhận bảng phân tích tiềm năng tăng giá theo tiến độ hạ tầng mở rộng đường Phan Trung và tư vấn trực tiếp từ Giám đốc Sàn Lê Ngọc Long.'}
                  </p>
                </div>

                <div className="mt-5 space-y-3">
                  <button
                    type="button"
                    onClick={() =>
                      openConsultation({
                        source: 'Trang Vị Trí - Nhận hồ sơ tiềm năng tăng giá',
                      })
                    }
                    className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-[#e6c887] via-[#f0d8a0] to-[#e6c887] hover:brightness-105 text-[#072018] py-3.5 px-4 text-xs font-bold uppercase tracking-wider shadow-md transition-all active:scale-[0.98] cursor-pointer"
                  >
                    <span>{isEn ? 'REGISTER FOR EXCLUSIVE DOSSIER' : 'ĐĂNG KÝ NHẬN BẢNG PHÂN TÍCH TIỀM NĂNG'}</span>
                  </button>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-white/80 font-sans">
                    <span className="flex items-center gap-1.5">
                      <PhoneCall className="size-3.5 text-[#e6c887]" />
                      Hotline:
                    </span>
                    <a
                      href="tel:0376671776"
                      className="font-bold text-[#e6c887] hover:underline"
                    >
                      0376 671 776
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 4-Card Visual Showcase Grid & Location Documents */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* 4-Item Visual Showcase Grid / Mosaic */}
              <div className="rounded-2xl sm:rounded-3xl border border-border/80 dark:border-white/10 bg-card p-5 sm:p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-primary dark:text-[#e6c887]">
                      {isEn ? 'VISUAL GALLERY' : 'HÌNH ẢNH THỰC TẾ & PHỐI CẢNH VỊ TRÍ'}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold uppercase text-foreground mt-0.5">
                      {isEn ? 'Location & Architectural Showcase' : 'Góc Nhìn Thực Tế Vị Trí Dự Án'}
                    </h3>
                  </div>
                  <span className="text-xs text-muted-foreground font-sans">4 hình ảnh</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* Photo 1: Mặt tiền Phan Trung */}
                  <div
                    onClick={() =>
                      setActiveLightbox({
                        src: '/images/bcons-central-park-tam-hiep-phoi-canh.webp',
                        title: isEn ? '236 Phan Trung Street Frontage' : 'Mặt Tiền Cung Đường Phan Trung — Tam Hiệp',
                        desc: isEn
                          ? 'Aerial perspective of Bcons Central Park nestled prominently on Phan Trung street, Tam Hiep ward.'
                          : 'Góc nhìn toàn cảnh vị trí Bcons Central Park tọa lạc đắc địa mặt tiền Phan Trung, trung tâm phường Tam Hiệp.',
                      })
                    }
                    className="group relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-border/80 dark:border-white/10 cursor-pointer shadow-sm"
                  >
                    <img
                      src="/images/bcons-central-park-tam-hiep-phoi-canh.webp"
                      alt="Phối cảnh mặt tiền Phan Trung"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-2 left-2 right-2 text-white">
                      <span className="block text-[10px] sm:text-[11px] font-serif font-bold truncate">
                        {isEn ? 'Phan Trung Frontage' : 'Mặt tiền Phan Trung'}
                      </span>
                    </div>
                    <div className="absolute top-2 right-2 flex size-6 items-center justify-center rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="size-3.5" />
                    </div>
                  </div>

                  {/* Photo 2: Phối cảnh tháp căn hộ */}
                  <div
                    onClick={() =>
                      setActiveLightbox({
                        src: '/images/project-towers.jpg',
                        title: isEn ? 'Bcons Central Park Apartment Towers' : 'Phối Cảnh Tháp Căn Hộ Biểu Tượng Bcons Central Park',
                        desc: isEn
                          ? 'Official architectural towers perspective with panoramic city view over Bien Hoa.'
                          : 'Kiến trúc tháp căn hộ hiện đại vươn tầm giữa lõi trung tâm thành phố Biên Hòa sôi động.',
                      })
                    }
                    className="group relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-border/80 dark:border-white/10 cursor-pointer shadow-sm"
                  >
                    <img
                      src="/images/project-towers.jpg"
                      alt="Phối cảnh tháp căn hộ"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-2 left-2 right-2 text-white">
                      <span className="block text-[10px] sm:text-[11px] font-serif font-bold truncate">
                        {isEn ? 'Architectural Towers' : 'Tháp căn hộ biểu tượng'}
                      </span>
                    </div>
                    <div className="absolute top-2 right-2 flex size-6 items-center justify-center rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="size-3.5" />
                    </div>
                  </div>

                  {/* Photo 3: Sơ đồ quy hoạch hạ tầng */}
                  <div
                    onClick={() =>
                      setActiveLightbox({
                        src: '/images/location-map.jpg',
                        title: isEn ? 'Regional Infrastructure Master Plan' : 'Sơ Đồ Quy Hoạch Hạ Tầng Tam Hiệp',
                        desc: isEn
                          ? 'Roadmap of future transport connectivity and infrastructure expansion surrounding Tam Hiep.'
                          : 'Sơ đồ định hướng mở rộng và nâng cấp hạ tầng kết nối khu vực Tam Hiệp với TP.HCM và sân bay Long Thành.',
                      })
                    }
                    className="group relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-border/80 dark:border-white/10 cursor-pointer shadow-sm bg-slate-900"
                  >
                    <img
                      src="/images/location-map.jpg"
                      alt="Bản đồ quy hoạch hạ tầng"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ imageRendering: '-webkit-optimize-contrast' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-2 left-2 right-2 text-white">
                      <span className="block text-[10px] sm:text-[11px] font-serif font-bold truncate">
                        {isEn ? 'Infrastructure Plan' : 'Quy hoạch hạ tầng'}
                      </span>
                    </div>
                    <div className="absolute top-2 right-2 flex size-6 items-center justify-center rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="size-3.5" />
                    </div>
                  </div>

                  {/* Photo 4: Quảng trường thương mại */}
                  <div
                    onClick={() =>
                      setActiveLightbox({
                        src: '/images/amenities/phoi-canh-cong-chinh-quang-truong.webp',
                        title: isEn ? 'Commercial Plaza & Main Entrance' : 'Cổng Chính & Quảng Trường Thương Mại Mặt Tiền',
                        desc: isEn
                          ? 'Grand entrance gate and vibrant commercial plaza opening directly to 236 Phan Trung.'
                          : 'Cổng chính bề thế và quảng trường thương mại mặt tiền đón luồng giao thương tấp nập trên đường Phan Trung.',
                      })
                    }
                    className="group relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-border/80 dark:border-white/10 cursor-pointer shadow-sm"
                  >
                    <img
                      src="/images/amenities/phoi-canh-cong-chinh-quang-truong.webp"
                      alt="Cổng chính và quảng trường thương mại"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-2 left-2 right-2 text-white">
                      <span className="block text-[10px] sm:text-[11px] font-serif font-bold truncate">
                        {isEn ? 'Commercial Plaza' : 'Quảng trường thương mại'}
                      </span>
                    </div>
                    <div className="absolute top-2 right-2 flex size-6 items-center justify-center rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="size-3.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bộ Bản Đồ & Sơ Đồ Quy Hoạch Trực Quan (Thay thế danh sách PDF) */}
              <div className="rounded-2xl sm:rounded-3xl border border-border/80 dark:border-white/10 bg-card p-5 sm:p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-primary dark:text-[#e6c887]">
                      {isEn ? 'VISUAL MAPPING DOSSIER' : 'BỘ BẢN ĐỒ TRỰC QUAN'}
                    </span>
                    <h3 className="mt-0.5 font-serif text-lg sm:text-xl font-bold uppercase text-foreground">
                      {isEn ? 'Planning & Connectivity Maps' : 'SƠ ĐỒ & BẢN ĐỒ QUY HOẠCH'}
                    </h3>
                  </div>
                  <MapPin className="size-4 text-[#e6c887]" />
                </div>

                <div className="space-y-3">
                  {locationVisualMaps.map((mapItem, idx) => (
                    <div
                      key={idx}
                      onClick={() =>
                        setActiveLightbox({
                          src: mapItem.image,
                          title: mapItem.title,
                          desc: mapItem.desc,
                        })
                      }
                      className="group p-2.5 rounded-2xl border border-border/70 dark:border-white/10 bg-secondary/30 hover:bg-secondary/70 hover:border-primary/40 dark:hover:border-[#e6c887]/40 flex items-center gap-3 transition-all cursor-pointer"
                    >
                      {/* Visual Thumbnail */}
                      <div className="relative size-16 shrink-0 rounded-xl overflow-hidden bg-slate-900 border border-white/10">
                        <img
                          src={mapItem.image}
                          alt={mapItem.title}
                          className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                          <ZoomIn className="size-3.5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-primary/10 text-primary dark:bg-[#e6c887]/20 dark:text-[#e6c887]">
                            {mapItem.badge}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-foreground group-hover:text-primary dark:group-hover:text-[#e6c887] transition-colors truncate">
                          {mapItem.title}
                        </h4>
                        <p className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
                          {mapItem.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Direct Consultation / Full Map CTA */}
                <button
                  type="button"
                  onClick={() =>
                    openConsultation({
                      source: isEn ? 'Location Page - Request full planning dossier' : 'Trang Vị Trí - Đăng ký nhận trọn bộ sơ đồ quy hoạch',
                    })
                  }
                  className="mt-4 w-full py-2.5 px-3 rounded-xl border border-primary/20 dark:border-[#e6c887]/30 bg-primary/5 dark:bg-[#e6c887]/10 hover:bg-primary/10 dark:hover:bg-[#e6c887]/20 text-primary dark:text-[#e6c887] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Navigation className="size-3.5" />
                  <span>{isEn ? 'Request Full HD Planning Pack' : 'Đăng ký nhận trọn bộ bản đồ quy hoạch HD'}</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* UNIFIED FULLSCREEN LIGHTBOX MODAL FOR ANY LOCATION IMAGE / MAP / INFOGRAPHIC*/}
      {/* ========================================================================= */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="relative w-[min(96vw,78rem)] max-h-[94vh] flex flex-col bg-card rounded-2xl sm:rounded-3xl border border-border/80 dark:border-white/20 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3.5 border-b border-border/70 dark:border-white/10 bg-background/95">
              <div className="min-w-0 flex-1">
                <h4 className="font-serif font-bold text-sm sm:text-base md:text-lg text-primary dark:text-[#e6c887] truncate">
                  {activeLightbox.title}
                </h4>
                <p className="text-xs text-muted-foreground font-medium truncate mt-0.5 font-sans">
                  {activeLightbox.desc}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={activeLightbox.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-8 sm:size-9 items-center justify-center rounded-full border border-border bg-background hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                  title={isEn ? 'Open full-size in new tab' : 'Mở ảnh kích thước gốc'}
                >
                  <ExternalLink className="size-4" />
                </a>

                <a
                  href={activeLightbox.src}
                  download
                  className="flex size-8 sm:size-9 items-center justify-center rounded-full border border-border bg-background hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                  title={isEn ? 'Download image' : 'Tải ảnh về máy'}
                >
                  <Download className="size-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setActiveLightbox(null)}
                  className="flex size-8 sm:size-9 items-center justify-center rounded-full border border-border bg-background hover:bg-rose-500 hover:border-rose-500 hover:text-white text-muted-foreground transition-colors cursor-pointer"
                  title={isEn ? 'Close (Esc)' : 'Đóng (Esc)'}
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>

            {/* Stage */}
            <div className="flex-1 overflow-auto bg-slate-950 p-2 sm:p-4 md:p-6 flex items-center justify-center overscroll-contain">
              <img
                src={activeLightbox.src}
                alt={activeLightbox.title}
                className="w-full max-w-[74rem] h-auto max-h-[80vh] object-contain mx-auto select-none rounded-xl"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
