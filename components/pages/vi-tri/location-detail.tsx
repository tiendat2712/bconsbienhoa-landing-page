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
} from 'lucide-react'
import { Reveal } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function LocationDetail() {
  const { theme, locale, t, openConsultation } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  // Lightbox Modal for Planning Map
  const [mapModalOpen, setMapModalOpen] = useState(false)
  const [perspectiveModalOpen, setPerspectiveModalOpen] = useState(false)

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!mapModalOpen && !perspectiveModalOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMapModalOpen(false)
        setPerspectiveModalOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mapModalOpen, perspectiveModalOpen])

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

  // 12 Regional Connectivity Destinations (matching media_1788978041055.png)
  const connectivityDestinations = isEn
    ? [
        { icon: ShoppingBag, distance: '400m', title: 'Vincom Plaza Bien Hoa' },
        { icon: HeartPulse, distance: '1km', title: 'Hoan My ITO Hospital' },
        { icon: ShoppingCart, distance: '2km', title: 'Big C Dong Nai' },
        { icon: Factory, distance: '2km', title: 'Bien Hoa 2 Industrial Park' },
        { icon: Train, distance: '3km', title: 'Bien Hoa Railway Station' },
        { icon: Plane, distance: '30km', title: 'Tan Son Nhat Int. Airport' },
        { icon: Factory, distance: '5km', title: 'Amata Industrial Park' },
        { icon: Factory, distance: '6km', title: 'Agtex Long Binh IP' },
        { icon: Bus, distance: '2km', title: 'Bien Hoa Bus Terminal' },
        { icon: Globe, distance: '45 mins', title: 'Downtown Ho Chi Minh City' },
        { icon: Route, distance: '2 mins', title: 'National Route 1A Access' },
        { icon: Car, distance: '15 mins', title: 'Long Thanh - Dau Giay Exp.' },
      ]
    : [
        { icon: ShoppingBag, distance: '400m', title: 'Vincom Plaza Biên Hòa' },
        { icon: HeartPulse, distance: '1km', title: 'Bệnh viện Hoàn Mỹ ITO' },
        { icon: ShoppingCart, distance: '2km', title: 'Big C Đồng Nai' },
        { icon: Factory, distance: '2km', title: 'KCN Biên Hòa 2' },
        { icon: Train, distance: '3km', title: 'Ga Biên Hòa' },
        { icon: Plane, distance: '30km', title: 'Sân bay Tân Sơn Nhất' },
        { icon: Factory, distance: '5km', title: 'KCN Amata' },
        { icon: Factory, distance: '6km', title: 'KCN Agtex Long Bình' },
        { icon: Bus, distance: '2km', title: 'Bến xe Biên Hòa' },
        { icon: Globe, distance: '45 phút', title: 'Trung tâm TP.HCM' },
        { icon: Route, distance: '2 phút', title: 'Kết nối QL1A' },
        { icon: Car, distance: '15 phút', title: 'Cao tốc Long Thành – Dầu Giây' },
      ]

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

  // Location Documents (matching media_1788978063048.png)
  const locationDocuments = isEn
    ? [
        { title: 'Project Location Diagram', size: '2.4 MB' },
        { title: 'Regional Traffic Connectivity', size: '3.1 MB' },
        { title: 'Surrounding Amenities & Services', size: '1.8 MB' },
      ]
    : [
        { title: 'Sơ đồ vị trí dự án', size: '2.4 MB' },
        { title: 'Kết nối giao thông', size: '3.1 MB' },
        { title: 'Tiện ích xung quanh', size: '1.8 MB' },
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
                    ? 'Register to receive traffic connectivity maps, regional master planning, and capital appreciation analysis based on infrastructure.'
                    : 'Nhận sơ đồ phân tích kết nối giao thông, bản đồ quy hoạch liên vùng và tư vấn tiềm năng tăng giá theo hạ tầng từ chuyên viên Lê Ngọc Long.'}
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
      {/* 3. SECTION: VỊ TRÍ TRUNG TÂM – KẾT NỐI TOÀN DIỆN (INTERACTIVE GOOGLE MAP) */}
      {/* ========================================================================= */}
      <section id="ban-do" className="scroll-mt-24 bg-secondary/30 dark:bg-card/30 py-16 sm:py-20 lg:py-24 transition-colors">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
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

          {/* Interactive Google Map Card matching Home Page layout */}
          <Reveal delay={0.1}>
            <div className="mt-8 overflow-hidden rounded-2xl sm:rounded-3xl border border-border dark:border-white/10 bg-card shadow-xl transition-all">
              {/* Forest Emerald Header Bar */}
              <div className="bg-[#072018] dark:bg-[#071712] px-4 py-3.5 sm:px-6 sm:py-4 flex items-center justify-between gap-3 border-b border-emerald-950/40 dark:border-white/10">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <span className="flex size-8 sm:size-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#e6c887]">
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
                  className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#e6c887] via-[#f0d8a0] to-[#e6c887] hover:brightness-105 text-[#072018] px-3.5 sm:px-4 py-2 text-xs font-sans font-bold shadow-md transition-all active:scale-95"
                >
                  <span>{isEn ? 'Directions' : 'Chỉ đường'}</span>
                  <ExternalLink className="size-3.5" />
                </a>
              </div>

              {/* Live Interactive Google Map with Pan/Zoom controls */}
              <div className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] bg-muted/40">
                <iframe
                  title="Bản đồ vị trí Bcons Central Park 236 Phan Trung"
                  src="https://www.google.com/maps?q=236+Phan+Trung,+Tam+Hi%E1%BB%87p,+Bi%C3%AAn+H%C3%B2a,+%C4%90%E1%BB%93ng+Nai&hl=vi&z=16&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SECTION: KẾT NỐI VÙNG HOÀN HẢO (12 DESTINATION CARDS)                   */}
      {/* ========================================================================= */}
      <section id="ket-noi" className="scroll-mt-24 bg-background py-16 sm:py-20 lg:py-24 transition-colors border-t border-border/60 dark:border-white/5">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <Reveal>
            <div className="text-left">
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary dark:text-[#e6c887] font-sans">
                {isEn ? 'COMMUTE & TRANSIT TIMES' : 'MẠNG LƯỚI GIAO THÔNG'}
              </span>
              <h2 className="mt-1.5 font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-foreground tracking-tight">
                {isEn ? 'SEAMLESS REGIONAL CONNECTIVITY' : 'KẾT NỐI VÙNG HOÀN HẢO'}
              </h2>
              <div className="mt-3 h-1 w-20 bg-gradient-to-r from-primary to-[#e6c887] rounded-full" />
            </div>
          </Reveal>

          {/* 12 Destination Cards in 2 rows on large screens */}
          <Reveal delay={0.1}>
            <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {connectivityDestinations.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between items-center text-center rounded-2xl border border-border/80 dark:border-white/10 bg-card p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-primary/40 dark:hover:border-[#e6c887]/40 transition-all group"
                >
                  <span className="flex size-10 items-center justify-center rounded-2xl bg-secondary/80 dark:bg-white/5 text-primary dark:text-[#e6c887] group-hover:scale-110 transition-transform">
                    <item.icon className="size-5" />
                  </span>

                  <div className="mt-3.5">
                    <div className="font-serif text-xl sm:text-2xl font-extrabold text-foreground group-hover:text-primary dark:group-hover:text-[#e6c887] transition-colors">
                      {item.distance}
                    </div>
                    <div className="mt-1 text-xs sm:text-[13px] font-medium text-muted-foreground leading-snug">
                      {item.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Travel Time Disclaimer Note */}
            <p className="mt-6 text-xs sm:text-sm italic text-muted-foreground text-center font-sans">
              {isEn
                ? '* Distances and travel times are estimated by road from 236 Phan Trung under normal traffic conditions.'
                : '* Khoảng cách và thời gian di chuyển là ước tính đường bộ từ 236 Phan Trung ngoài giờ cao điểm.'}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SECTION: VỊ TRÍ ĐẮC ĐỊA – TIỀM NĂNG TĂNG GIÁ CAO (COMPOSITE SHOWCASE)   */}
      {/* ========================================================================= */}
      <section id="tiem-nang" className="scroll-mt-24 bg-secondary/30 dark:bg-[#071912]/40 py-16 sm:py-20 lg:py-24 transition-colors border-t border-border/60 dark:border-white/5">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <Reveal>
            <div className="text-left">
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary dark:text-[#e6c887] font-sans">
                {isEn ? 'INVESTMENT HIGHLIGHTS' : 'TIỀM NĂNG GIA TĂNG GIÁ TRỊ'}
              </span>
              <h2 className="mt-1.5 font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-foreground tracking-tight">
                {isEn ? 'PRIME LOCATION – HIGH CAPITAL APPRECIATION POTENTIAL' : 'VỊ TRÍ ĐẮC ĐỊA – TIỀM NĂNG TĂNG GIÁ CAO'}
              </h2>
              <div className="mt-3 h-1 w-20 bg-gradient-to-r from-primary to-[#e6c887] rounded-full" />
            </div>
          </Reveal>

          <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: 4 Key Advantages + Perspective Showcase */}
            <div className="lg:col-span-7 space-y-6">
              {/* 4 Core Advantages List */}
              <div className="rounded-2xl sm:rounded-3xl border border-border/80 dark:border-white/10 bg-card p-6 sm:p-8 shadow-xl space-y-4">
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

              {/* Project Perspective Showcase Banner with Play/Zoom Trigger */}
              <div
                onClick={() => setPerspectiveModalOpen(true)}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/80 dark:border-white/10 aspect-[16/9] shadow-xl cursor-pointer"
              >
                <img
                  src="/images/project-towers.jpg"
                  alt="Phối cảnh tháp căn hộ Bcons Central Park"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#072018]/90 via-black/30 to-transparent" />

                {/* Center Play/Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex size-14 sm:size-16 items-center justify-center rounded-full bg-white/90 text-primary dark:bg-[#e6c887] dark:text-[#072018] shadow-2xl backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                    <Play className="size-6 sm:size-7 fill-current ml-0.5" />
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-6 sm:right-6 flex items-center justify-between text-white">
                  <div>
                    <span className="inline-block text-[10px] font-bold tracking-[0.16em] uppercase text-[#e6c887]">
                      {isEn ? 'OFFICIAL PERSPECTIVE' : 'PHỐI CẢNH DỰ ÁN'}
                    </span>
                    <h4 className="font-serif font-bold text-sm sm:text-base">
                      Bcons Central Park – 236 Phan Trung, Tam Hiệp
                    </h4>
                  </div>
                  <span className="text-xs font-semibold text-white/80 group-hover:text-white flex items-center gap-1">
                    {isEn ? 'View photo' : 'Xem ảnh'}
                    <Maximize2 className="size-3.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Infrastructure Planning Map Card & Location Documents */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Card 1: BẢN ĐỒ QUY HOẠCH HẠ TẦNG */}
              <div className="rounded-2xl sm:rounded-3xl border border-border/80 dark:border-white/10 bg-card p-6 sm:p-7 shadow-xl">
                <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-primary dark:text-[#e6c887]">
                  {isEn ? 'INFRASTRUCTURE MASTER PLAN' : 'BẢN ĐỒ QUY HOẠCH HẠ TẦNG'}
                </span>
                <h3 className="mt-1 font-serif text-xl sm:text-2xl font-bold uppercase text-foreground">
                  {isEn ? 'Tam Hiep Expansion Master Plan' : 'Quy Hoạch Hạ Tầng Tam Hiệp'}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                  {isEn
                    ? 'Transportation infrastructure development roadmap and expansion master plan surrounding Tam Hiep area.'
                    : 'Định hướng phát triển hạ tầng giao thông và quy hoạch mở rộng quanh khu vực Tam Hiệp.'}
                </p>

                {/* Planning Map Thumbnail */}
                <div
                  onClick={() => setMapModalOpen(true)}
                  className="group relative mt-4 overflow-hidden rounded-xl sm:rounded-2xl border border-border/80 dark:border-white/10 aspect-[4/3] bg-white cursor-pointer"
                >
                  <img
                    src="/images/location-map.jpg"
                    alt="Bản đồ quy hoạch hạ tầng Bcons Central Park"
                    className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#072018] text-[#e6c887] px-3 py-1 text-xs font-bold shadow-lg">
                      <Maximize2 className="size-3.5" />
                      <span>{isEn ? 'Click to zoom' : 'Phóng to bản đồ'}</span>
                    </span>
                  </div>
                </div>

                {/* Button: XEM BẢN ĐỒ QUY HOẠCH */}
                <button
                  type="button"
                  onClick={() => setMapModalOpen(true)}
                  className="mt-4 inline-flex items-center justify-center gap-2 w-full rounded-xl border border-border/80 dark:border-white/15 bg-secondary/50 hover:bg-primary hover:text-white dark:hover:bg-[#e6c887] dark:hover:text-[#072018] py-3 px-4 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <Maximize2 className="size-3.5" />
                  <span>{isEn ? 'VIEW INFRASTRUCTURE MAP' : 'XEM BẢN ĐỒ QUY HOẠCH ↓'}</span>
                </button>
              </div>

              {/* Card 2: TÀI LIỆU VỊ TRÍ */}
              <div className="rounded-2xl sm:rounded-3xl border border-border/80 dark:border-white/10 bg-card p-6 sm:p-7 shadow-xl">
                <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-primary dark:text-[#e6c887]">
                  {isEn ? 'DOWNLOADABLE ASSETS' : 'HỒ SƠ TÀI LIỆU VỊ TRÍ'}
                </span>
                <h3 className="mt-1 font-serif text-xl sm:text-2xl font-bold uppercase text-foreground">
                  {isEn ? 'Location Documents' : 'TÀI LIỆU VỊ TRÍ'}
                </h3>

                <div className="mt-4 divide-y divide-border/60 dark:divide-white/10">
                  {locationDocuments.map((doc, idx) => (
                    <div
                      key={idx}
                      className="py-3.5 flex items-center justify-between gap-3 group"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <FileText className="size-4 shrink-0 text-muted-foreground group-hover:text-primary dark:group-hover:text-[#e6c887] transition-colors" />
                        <span className="text-xs sm:text-sm font-medium text-foreground truncate">
                          {doc.title}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="rounded px-1.5 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 border border-rose-500/20">
                          PDF
                        </span>
                        <a
                          href="/images/location-map.jpg"
                          download
                          className="flex size-7 items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-white dark:hover:bg-[#e6c887] dark:hover:text-[#072018] text-muted-foreground transition-colors cursor-pointer"
                          title={isEn ? 'Download document' : 'Tải tài liệu'}
                        >
                          <Download className="size-3.5" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MODAL LIGHTBOX: BẢN ĐỒ QUY HOẠCH HẠ TẦNG (/images/location-map.jpg)        */}
      {/* ========================================================================= */}
      {mapModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setMapModalOpen(false)}
        >
          <div
            className="relative w-[min(96vw,76rem)] max-h-[94vh] flex flex-col bg-card rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/20 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3.5 border-b border-border/70 dark:border-white/10 bg-background/95">
              <div className="min-w-0 flex-1">
                <h4 className="font-serif font-bold text-sm sm:text-base md:text-lg text-primary dark:text-[#e6c887] truncate">
                  {isEn ? 'Infrastructure Planning Map — Tam Hiep, Bien Hoa' : 'Bản Đồ Quy Hoạch Hạ Tầng — Phường Tam Hiệp, TP. Biên Hòa'}
                </h4>
                <p className="text-xs text-muted-foreground font-medium truncate mt-0.5">
                  {isEn ? 'Official planning perspective of Bcons Central Park at 236 Phan Trung' : 'Sơ đồ định hướng phát triển giao thông kết nối dự án Bcons Central Park'}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="/images/location-map.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-8 sm:size-9 items-center justify-center rounded-full border border-border bg-background hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                  title={isEn ? 'Open image in new tab' : 'Mở ảnh tab mới'}
                >
                  <ExternalLink className="size-4" />
                </a>
                <button
                  type="button"
                  onClick={() => setMapModalOpen(false)}
                  className="flex size-8 sm:size-9 items-center justify-center rounded-full border border-border bg-background hover:bg-rose-500 hover:border-rose-500 hover:text-white text-muted-foreground transition-colors cursor-pointer"
                  title={isEn ? 'Close (Esc)' : 'Đóng (Esc)'}
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>

            {/* Stage */}
            <div className="flex-1 overflow-auto bg-white p-2 sm:p-4 md:p-6 flex items-center justify-center overscroll-contain">
              <img
                src="/images/location-map.jpg"
                alt="Bản đồ quy hoạch hạ tầng Bcons Central Park"
                className="w-full max-w-[72rem] h-auto object-contain mx-auto select-none rounded-xl"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL LIGHTBOX: PHỐI CẢNH DỰ ÁN (/images/project-towers.jpg)               */}
      {/* ========================================================================= */}
      {perspectiveModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setPerspectiveModalOpen(false)}
        >
          <div
            className="relative w-[min(96vw,76rem)] max-h-[94vh] flex flex-col bg-card rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/20 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3.5 border-b border-border/70 dark:border-white/10 bg-background/95">
              <div className="min-w-0 flex-1">
                <h4 className="font-serif font-bold text-sm sm:text-base md:text-lg text-primary dark:text-[#e6c887] truncate">
                  {isEn ? 'Official Perspective — Bcons Central Park Towers' : 'Phối Cảnh Toàn Cảnh Dự Án Bcons Central Park'}
                </h4>
                <p className="text-xs text-muted-foreground font-medium truncate mt-0.5">
                  236 Phan Trung, Phường Tam Hiệp, TP. Biên Hòa, Đồng Nai
                </p>
              </div>

              <button
                type="button"
                onClick={() => setPerspectiveModalOpen(false)}
                className="flex size-8 sm:size-9 items-center justify-center rounded-full border border-border bg-background hover:bg-rose-500 hover:border-rose-500 hover:text-white text-muted-foreground transition-colors cursor-pointer"
                title={isEn ? 'Close (Esc)' : 'Đóng (Esc)'}
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Stage */}
            <div className="flex-1 overflow-auto bg-black p-2 sm:p-4 flex items-center justify-center overscroll-contain">
              <img
                src="/images/project-towers.jpg"
                alt="Phối cảnh tháp căn hộ Bcons Central Park"
                className="w-full max-w-[72rem] h-auto object-contain mx-auto select-none rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
