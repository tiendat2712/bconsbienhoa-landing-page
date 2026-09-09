'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calendar,
  Clock,
  HardHat,
  CheckCircle2,
  ChevronRight,
  Home,
  Sparkles,
  ArrowRight,
  FileText,
  Video,
  Download,
  CloudSun,
  Wind,
  Droplets,
  Eye,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Send,
  Building2,
  Check,
  AlertCircle,
  PhoneCall,
} from 'lucide-react'
import { Reveal } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

// =============================================================================
// DATA STRUCTURES
// =============================================================================

// 1. KPI Stats (media_1788984716416.png)
interface ProgressKpi {
  label: string
  value: string
  sub?: string
  icon: typeof Calendar
  highlight?: boolean
}

const PROGRESS_KPIS: ProgressKpi[] = [
  {
    label: 'NGÀY KHỞI CÔNG',
    value: '27/05/2026',
    sub: 'Chính thức động thổ',
    icon: Calendar,
  },
  {
    label: 'THỜI GIAN THI CÔNG',
    value: '36 tháng',
    sub: 'Chuẩn tiến độ BIM',
    icon: Clock,
  },
  {
    label: 'DỰ KIẾN BÀN GIAO',
    value: 'Quý II/2029',
    sub: 'Nghiệm thu PCCC & Trao chìa khóa',
    icon: Home,
  },
  {
    label: 'TRẠNG THÁI HIỆN TẠI',
    value: 'Đang thi công phần móng',
    sub: 'Khẩn trương thi công 24/7',
    icon: HardHat,
    highlight: true,
  },
]

// 2. Horizontal Timeline Steps (media_1788984726896.png)
interface TimelineStep {
  title: string
  time: string
  status: 'completed' | 'in_progress' | 'upcoming'
  statusLabel: string
}

const TIMELINE_STEPS: TimelineStep[] = [
  {
    title: 'Khởi công',
    time: '27/05/2026',
    status: 'completed',
    statusLabel: 'Hoàn thành',
  },
  {
    title: 'Chuẩn bị mặt bằng',
    time: '06/2026',
    status: 'completed',
    statusLabel: 'Hoàn thành',
  },
  {
    title: 'Ép cọc đại trà',
    time: '07/2026',
    status: 'completed',
    statusLabel: 'Hoàn thành',
  },
  {
    title: 'Thi công móng',
    time: '08/2026',
    status: 'in_progress',
    statusLabel: 'Đang thực hiện',
  },
  {
    title: 'Thi công tầng hầm',
    time: 'Dự kiến Quý IV/2026',
    status: 'upcoming',
    statusLabel: 'Kế hoạch',
  },
  {
    title: 'Thi công phần thân',
    time: 'Dự kiến 2027 – 2028',
    status: 'upcoming',
    statusLabel: 'Kế hoạch',
  },
  {
    title: 'Bàn giao',
    time: 'Dự kiến Quý II/2029',
    status: 'upcoming',
    statusLabel: 'Kế hoạch',
  },
]

// 3. Hình Ảnh Tiến Độ Thực Tế (media_1788984738123.png)
interface ProgressPhoto {
  id: string
  time: string
  title: string
  imageSrc: string
  isLatest?: boolean
  desc: string
}

const PROGRESS_PHOTOS: ProgressPhoto[] = [
  {
    id: 'photo-1',
    time: '08/2026',
    title: 'Thi công đài móng',
    imageSrc: '/images/progress/bcons-central-park-tien-do-thi-cong-mong.webp',
    isLatest: true,
    desc: 'Công nhân và kỹ sư tập trung buộc cốt thép và chuẩn bị đổ bê tông đài giằng móng toàn bộ các block.',
  },
  {
    id: 'photo-2',
    time: '08/2026',
    title: 'Lắp dựng cẩu tháp',
    imageSrc: '/images/progress/bcons-central-park-tien-do-cau-thap.webp',
    desc: 'Hệ thống cẩu tháp chuyên dụng công suất lớn được lắp đặt hoàn tất phục vụ vận chuyển vật tư lên cao.',
  },
  {
    id: 'photo-3',
    time: '07/2026',
    title: 'Ép cọc đại trà',
    imageSrc: '/images/progress/bcons-central-park-tien-do-ep-coc.webp',
    desc: 'Dàn máy ép cọc robot thủy lực hoàn thành 100% khối lượng cọc bê tông ly tâm dự ứng lực móng sâu.',
  },
  {
    id: 'photo-4',
    time: '07/2026',
    title: 'Đào đất tầng hầm',
    imageSrc: '/images/progress/bcons-central-park-tien-do-dao-dat-tang-ham.webp',
    desc: 'Xe cơ giới đào và vận chuyển đất tầng hầm, thi công hệ giằng chống shoring an toàn tuyệt đối.',
  },
  {
    id: 'photo-5',
    time: '06/2026',
    title: 'Chuẩn bị mặt bằng',
    imageSrc: '/images/progress/bcons-central-park-tien-do-chuan-bi-mat-bang.webp',
    desc: 'San lấp mặt bằng sạch gần 3 ha, quây hàng rào tôn bảo vệ và xây dựng văn phòng ban chỉ huy công trường.',
  },
  {
    id: 'photo-6',
    time: '27/05/2026',
    title: 'Lễ khởi công dự án',
    imageSrc: '/images/progress/bcons-central-park-tien-do-khoi-cong.webp',
    desc: 'Lễ động thổ chính thức dự án Bcons Central Park Tam Hiệp với sự tham gia của lãnh đạo tỉnh và Tập đoàn Bcons.',
  },
]

// 4. Kế Hoạch Triển Khai Tiếp Theo (media_1788984747442.png)
interface UpcomingPhase {
  title: string
  time: string
  desc: string
  icon: typeof Building2
}

const UPCOMING_PHASES: UpcomingPhase[] = [
  {
    title: 'Thi công tầng hầm',
    time: 'Quý IV/2026 – Quý I/2027',
    desc: 'Hoàn thiện 2 tầng hầm để xe kết nối liên thông toàn bộ 5 block căn hộ.',
    icon: Building2,
  },
  {
    title: 'Thi công phần thân',
    time: '2027 – 2028',
    desc: 'Lên tầng lần lượt 5 block cao 22 tầng với chu kỳ đổ sàn trung bình 6–7 ngày/tầng.',
    icon: HardHat,
  },
  {
    title: 'Cất nóc',
    time: 'Dự kiến 2028',
    desc: 'Cất nóc toàn dự án, chuyển sang giai đoạn thi công hoàn thiện mặt ngoài và hệ thống cơ điện MEP.',
    icon: Sparkles,
  },
  {
    title: 'Hoàn thiện & bàn giao',
    time: 'Đến Quý II/2029',
    desc: 'Hoàn thiện nội thất tiêu chuẩn bàn giao, nghiệm thu PCCC và bàn giao nhà đón cư dân.',
    icon: Home,
  },
]

// 5. Tài Liệu Tiến Độ Download (media_1788984738123.png)
interface DocumentDownload {
  title: string
  format: 'PDF' | 'MP4'
  size: string
}

const PROGRESS_DOCUMENTS: DocumentDownload[] = [
  { title: 'Báo cáo tiến độ mới nhất', format: 'PDF', size: '2.4 MB' },
  { title: 'Kế hoạch tiến độ tổng thể', format: 'PDF', size: '4.8 MB' },
  { title: 'Ảnh thực tế công trường', format: 'PDF', size: '12.5 MB' },
  { title: 'Video flycam tiến độ', format: 'MP4', size: '35.0 MB' },
]

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export function ProgressDetail() {
  const { theme, openConsultation } = useSitePreferences()
  const isDark = theme === 'dark'

  // Lightbox State
  const [activePhoto, setActivePhoto] = useState<ProgressPhoto | null>(null)
  const [zoomLevel, setZoomLevel] = useState<number>(1)

  const openLightbox = (photo: ProgressPhoto) => {
    setActivePhoto(photo)
    setZoomLevel(1)
  }

  const closeLightbox = () => {
    setActivePhoto(null)
    setZoomLevel(1)
  }

  return (
    <>
      {/* =====================================================================
          1. HERO BANNER — CINEMATIC LUXURY (media_1788984716416.png)
      ===================================================================== */}
      <section className="relative min-h-[480px] lg:min-h-[540px] flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-36 lg:pb-20">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bcons-central-park-tam-hiep-phoi-canh.webp"
            alt="Tiến độ dự án Bcons Central Park Tam Hiệp"
            className="size-full object-cover object-center scale-105 transition-transform duration-1000"
          />
          {/* Deep Forest Emerald Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#072018]/95 via-[#072018]/85 to-[#072018]/95 backdrop-blur-[2px]" />
          {/* Champagne Gold Glow */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#e6c887]/25 via-emerald-500/10 to-transparent blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-8 w-full text-white">
          {/* Breadcrumb Frosted Glass */}
          <nav aria-label="Đường dẫn" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white/80 mb-6 shadow-sm">
            <Link href="/" className="hover:text-[#e6c887] transition-colors flex items-center gap-1.5">
              <Home className="size-3.5 text-[#e6c887]" />
              Trang chủ
            </Link>
            <ChevronRight className="size-3.5 text-white/40" />
            <span className="text-[#e6c887] font-semibold">Tiến độ dự án</span>
          </nav>

          <Reveal>
            {/* Eyebrow Pill */}
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6c887]/15 border border-[#e6c887]/30 text-[#e6c887] text-xs font-bold tracking-widest uppercase">
                <Sparkles className="size-3" />
                TIẾN ĐỘ DỰ ÁN
              </span>
            </div>

            {/* Main H1 Title */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance text-white drop-shadow-md uppercase">
              BCONS CENTRAL PARK
            </h1>

            {/* Subtitle Italic */}
            <p className="mt-3 font-serif text-xl sm:text-2xl md:text-3xl italic text-[#e6c887] tracking-wide font-normal">
              Xây dựng đúng tiến độ – Cam kết chất lượng
            </p>

            {/* Lead Description */}
            <p className="mt-5 max-w-3xl text-sm sm:text-base md:text-lg text-white/85 leading-relaxed font-sans">
              Cập nhật tiến độ dự án Bcons Central Park mới nhất. Chúng tôi cam kết minh bạch thông tin, đảm bảo dự án được triển khai đúng kế hoạch và bàn giao đúng thời hạn.
            </p>

            {/* Metadata bar */}
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/70 font-sans border-t border-white/15 pt-4">
              <span>Cập nhật ngày <strong className="text-white font-medium">05/09/2026</strong></span>
              <span className="text-white/30">•</span>
              <span>Biên soạn bởi <strong className="text-[#e6c887] font-semibold">Lê Ngọc Long</strong></span>
              <span className="text-white/30">•</span>
              <span className="text-emerald-300 font-medium flex items-center gap-1">
                <CheckCircle2 className="size-3.5" /> Quy trình biên tập độc lập & đối chiếu thực địa
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================
          2. 4 TOP KPI SUMMARY CARDS (media_1788984716416.png)
      ===================================================================== */}
      <section className="bg-background py-8 border-b border-border/60 dark:border-white/10 transition-colors">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {PROGRESS_KPIS.map((kpi, idx) => {
              const Icon = kpi.icon
              return (
                <Reveal key={idx} delay={idx * 0.05}>
                  <div
                    className={`h-full p-5 rounded-2xl border transition-all duration-300 ${
                      kpi.highlight
                        ? isDark
                          ? 'border-[#e6c887]/50 bg-emerald-950/40 shadow-lg'
                          : 'border-primary/40 bg-emerald-50/70 shadow-sm'
                        : isDark
                        ? 'border-white/10 bg-card/80 shadow-sm'
                        : 'border-border bg-card shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`size-9 rounded-xl flex items-center justify-center shrink-0 ${
                          kpi.highlight
                            ? 'bg-primary/20 text-primary dark:bg-[#e6c887]/20 dark:text-[#e6c887]'
                            : 'bg-secondary dark:bg-white/10 text-muted-foreground'
                        }`}
                      >
                        <Icon className="size-4" />
                      </div>
                      <span className="text-[11px] font-bold tracking-wider uppercase text-muted-foreground">
                        {kpi.label}
                      </span>
                    </div>

                    <div
                      className={`font-serif text-lg sm:text-xl font-bold ${
                        kpi.highlight
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : 'text-foreground'
                      }`}
                    >
                      {kpi.value}
                    </div>

                    {kpi.sub && (
                      <p className="text-xs text-muted-foreground mt-1">
                        {kpi.sub}
                      </p>
                    )}
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. MAIN CONTENT — 2 COLUMNS (LEFT: PROGRESS & PHOTOS | RIGHT: SIDEBAR)
      ===================================================================== */}
      <section className="bg-secondary/20 dark:bg-[#071712] py-14 lg:py-20 transition-colors">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* ===============================================================
                LEFT MAIN COLUMN (8 COLS)
            =============================================================== */}
            <div className="lg:col-span-8 space-y-12">
              {/* SECTION A: TIẾN ĐỘ THỰC TẾ DỰ ÁN (media_1788984726896.png) */}
              <Reveal>
                <div className="p-6 sm:p-8 rounded-3xl border border-border/80 dark:border-white/10 bg-card shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8 pb-4 border-b border-border/60 dark:border-white/10">
                    <div>
                      <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary dark:text-[#e6c887]">
                        LỘ TRÌNH THI CÔNG
                      </span>
                      <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-foreground">
                        TIẾN ĐỘ THỰC TẾ DỰ ÁN
                      </h2>
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">
                      Cập nhật mới nhất: <strong className="text-foreground">05/09/2026</strong>
                    </span>
                  </div>

                  {/* Horizontal Timeline */}
                  <div className="overflow-x-auto pb-4">
                    <div className="min-w-[700px] flex items-center justify-between relative px-2">
                      {/* Timeline connecting line */}
                      <div className="absolute left-8 right-8 top-5 h-0.5 bg-border dark:bg-white/15 z-0" />
                      {/* Active green connecting line up to step 4 */}
                      <div className="absolute left-8 w-[48%] top-5 h-0.5 bg-emerald-500 z-0" />

                      {TIMELINE_STEPS.map((step, idx) => {
                        const isDone = step.status === 'completed'
                        const isInProgress = step.status === 'in_progress'

                        return (
                          <div key={idx} className="relative z-10 flex flex-col items-center text-center w-24">
                            {/* Circle Node */}
                            <div
                              className={`size-10 rounded-full flex items-center justify-center font-bold text-xs transition-all shadow-md ${
                                isDone
                                  ? 'bg-emerald-500 text-white'
                                  : isInProgress
                                  ? 'bg-[#e6c887] text-[#072018] ring-4 ring-[#e6c887]/30 animate-pulse'
                                  : 'bg-card border border-border dark:border-white/20 text-muted-foreground'
                              }`}
                            >
                              {isDone ? (
                                <Check className="size-5 stroke-[2.5]" />
                              ) : isInProgress ? (
                                <HardHat className="size-5 stroke-[2.2]" />
                              ) : (
                                <Building2 className="size-4 opacity-50" />
                              )}
                            </div>

                            {/* Title & Time */}
                            <div className="mt-3 font-serif font-bold text-xs text-foreground leading-tight">
                              {step.title}
                            </div>
                            <div className="text-[11px] text-muted-foreground mt-0.5">
                              {step.time}
                            </div>

                            {/* Status Pill */}
                            <span
                              className={`mt-2 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                                isDone
                                  ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                                  : isInProgress
                                  ? 'bg-amber-500/15 text-amber-700 dark:text-[#e6c887] border border-amber-500/30'
                                  : 'bg-secondary text-muted-foreground border border-border dark:border-white/10'
                              }`}
                            >
                              {step.statusLabel}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Progress Percent Card */}
                  <div className="mt-8 p-6 rounded-2xl bg-secondary/40 dark:bg-[#0c241b] border border-border/80 dark:border-white/10 grid sm:grid-cols-12 gap-6 items-center">
                    <div className="sm:col-span-5 border-b sm:border-b-0 sm:border-r border-border/80 dark:border-white/10 pb-5 sm:pb-0 sm:pr-6">
                      <span className="text-[11px] font-bold tracking-wider uppercase text-muted-foreground">
                        TỔNG TIẾN ĐỘ DỰ ÁN
                      </span>
                      <div className="font-serif text-4xl sm:text-5xl font-bold text-primary dark:text-[#e6c887] mt-1">
                        9%
                      </div>
                      {/* Bar */}
                      <div className="mt-3 h-2.5 w-full rounded-full bg-secondary dark:bg-white/10 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-emerald-500 to-[#e6c887] rounded-full w-[9%]" />
                      </div>
                      <p className="text-[11px] text-muted-foreground mt-2 leading-tight">
                        Ước tính theo thời gian thi công đã trôi qua trên tổng 36 tháng kế hoạch.
                      </p>
                    </div>

                    <div className="sm:col-span-7 space-y-3">
                      <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                        Dự án đang triển khai đúng tiến độ cam kết. Công tác thi công phần ngầm đang tập trung toàn lực để đảm bảo lên tầng đúng kế hoạch. Đối chiếu thêm <Link href="/chu-dau-tu" className="text-primary dark:text-[#e6c887] font-semibold underline underline-offset-2">năng lực chủ đầu tư Bcons</Link> và <Link href="/phap-ly" className="text-primary dark:text-[#e6c887] font-semibold underline underline-offset-2">pháp lý Bcons Tam Hiệp</Link>.
                      </p>
                      <div>
                        <Link
                          href="#ke-hoach"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary dark:text-[#e6c887] hover:underline uppercase tracking-wider"
                        >
                          XEM CHI TIẾT KẾ HOẠCH
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* SECTION B: HÌNH ẢNH TIẾN ĐỘ THỰC TẾ (media_1788984738123.png) */}
              <Reveal>
                <div className="p-6 sm:p-8 rounded-3xl border border-border/80 dark:border-white/10 bg-card shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                    <div>
                      <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary dark:text-[#e6c887]">
                        THỰC TẾ CÔNG TRƯỜNG
                      </span>
                      <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-foreground">
                        HÌNH ẢNH TIẾN ĐỘ THỰC TẾ
                      </h2>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Nhấn vào ảnh để phóng to chi tiết
                    </span>
                  </div>

                  {/* 6 Photo Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {PROGRESS_PHOTOS.map((photo) => (
                      <div
                        key={photo.id}
                        onClick={() => openLightbox(photo)}
                        className="group relative rounded-2xl overflow-hidden border border-border dark:border-white/10 bg-secondary/30 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        {/* Image Container */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/20">
                          <img
                            src={photo.imageSrc}
                            alt={photo.title}
                            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium border border-white/30">
                              <Eye className="size-3.5" /> Phóng to
                            </span>
                          </div>

                          {/* Latest Tag */}
                          {photo.isLatest && (
                            <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase bg-[#e6c887] text-[#072018] shadow-md">
                              MỚI NHẤT
                            </span>
                          )}
                        </div>

                        {/* Caption Bar */}
                        <div className="p-3.5 bg-card dark:bg-[#0c241b] border-t border-border/80 dark:border-white/10 flex items-center justify-between">
                          <div>
                            <span className="text-[11px] font-bold text-primary dark:text-[#e6c887]">
                              {photo.time}
                            </span>
                            <h4 className="font-serif font-bold text-foreground text-sm mt-0.5">
                              {photo.title}
                            </h4>
                          </div>
                          <Eye className="size-4 text-muted-foreground group-hover:text-primary dark:group-hover:text-[#e6c887] transition-colors" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* View more button */}
                  <div className="mt-8 text-center">
                    <button
                      type="button"
                      onClick={() => openLightbox(PROGRESS_PHOTOS[0])}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold border border-border dark:border-white/20 hover:border-primary dark:hover:border-[#e6c887] text-foreground bg-secondary/40 hover:bg-secondary transition-all"
                    >
                      <Eye className="size-4 text-[#e6c887]" />
                      XEM THÊM HÌNH ẢNH CÔNG TRƯỜNG
                    </button>
                  </div>
                </div>
              </Reveal>

              {/* SECTION C: KẾ HOẠCH TRIỂN KHAI TIẾP THEO (media_1788984747442.png) */}
              <div id="ke-hoach">
                <Reveal>
                  <div className="p-6 sm:p-8 rounded-3xl border border-border/80 dark:border-white/10 bg-card shadow-md">
                    <div className="mb-6">
                      <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary dark:text-[#e6c887]">
                        MỤC TIÊU BÀN GIAO
                      </span>
                      <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-foreground">
                        KẾ HOẠCH TRIỂN KHAI TIẾP THEO
                      </h2>
                    </div>

                    {/* 4 Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {UPCOMING_PHASES.map((phase, idx) => {
                        const Icon = phase.icon
                        return (
                          <div
                            key={idx}
                            className="p-5 rounded-2xl border border-border dark:border-white/10 bg-secondary/30 dark:bg-[#0c241b] flex flex-col justify-between"
                          >
                            <div>
                              <div className="size-9 rounded-xl bg-primary/10 dark:bg-[#e6c887]/15 text-primary dark:text-[#e6c887] flex items-center justify-center mb-3">
                                <Icon className="size-4" />
                              </div>
                              <h3 className="font-serif text-lg font-bold text-foreground">
                                {phase.title}
                              </h3>
                              <p className="text-xs font-bold text-[#e6c887] tracking-wide mt-1">
                                {phase.time}
                              </p>
                              <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                                {phase.desc}
                              </p>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* Payment linkage notice */}
                    <div className="mt-6 p-4 rounded-2xl bg-secondary/40 dark:bg-white/5 border border-border dark:border-white/10 text-xs sm:text-sm text-foreground/90 leading-relaxed">
                      Tiến độ thi công là căn cứ để đối chiếu với <Link href="/gia-ban#lich-thanh-toan" className="text-primary dark:text-[#e6c887] font-semibold underline underline-offset-2">tiến độ thanh toán Bcons Central Park</Link> — người mua nên thanh toán theo đúng đợt hoàn thành trong hợp đồng thay vì nộp vượt trước. Xem thêm <Link href="/gia-ban" className="text-primary dark:text-[#e6c887] font-semibold underline underline-offset-2">giá bán Bcons Central Park theo từng đợt</Link>.
                    </div>

                    {/* Disclaimer Footnote */}
                    <div className="mt-6 pt-4 border-t border-border/60 dark:border-white/10 text-[11px] text-muted-foreground leading-relaxed">
                      * Thời gian có thể thay đổi theo điều kiện thi công thực tế; các mốc chưa diễn ra là kế hoạch dự kiến của chủ đầu tư. Hình ảnh trong mục tiến độ là ảnh minh hoạ từng giai đoạn thi công, sẽ được thay bằng ảnh công trường ngay khi chủ đầu tư phát hành.
                    </div>

                    <div className="mt-4 p-3.5 rounded-xl bg-background border border-border/80 dark:border-white/10 text-xs text-muted-foreground flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 shrink-0">
                        CHÍNH THỨC
                      </span>
                      <div>
                        <strong>Nguồn:</strong> Lễ khởi công dự án ngày 27/05/2026 — thông tin do chủ đầu tư Bcons Group công bố. Đối chiếu lần cuối: 28/08/2026.
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* ===============================================================
                RIGHT SIDEBAR COLUMN (4 COLS)
            =============================================================== */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* WIDGET 1: NHẬN CẬP NHẬT TIẾN ĐỘ DỰ ÁN */}
              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-primary/20 dark:border-[#e6c887]/30 bg-gradient-to-br from-card via-card to-primary/5 dark:from-[#0c241b] dark:to-[#071a14] p-6 sm:p-7 shadow-xl relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 size-36 rounded-full bg-[#e6c887]/15 dark:bg-[#e6c887]/10 blur-2xl pointer-events-none" />
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary dark:bg-[#e6c887]/15 dark:text-[#e6c887] border border-primary/20 dark:border-[#e6c887]/30">
                    <Sparkles className="size-3" />
                    BẢN TIN CÔNG TRƯỜNG ĐỊNH KỲ
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mt-2.5 mb-1.5">
                    Nhận Cập Nhật Tiến Độ
                  </h3>
                  <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
                    Chuyên viên <strong className="text-foreground dark:text-[#e6c887]">Lê Ngọc Long</strong> sẽ gửi file PDF báo cáo kỹ thuật, video flycam 4K và hình ảnh nghiệm thu thực địa hàng tháng trực tiếp qua Zalo.
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      openConsultation({
                        source: 'Trang Tiến Độ - Nhận báo cáo tiến độ mới nhất',
                      })
                    }
                    className="w-full py-3.5 px-4 rounded-xl font-sans font-bold text-xs sm:text-sm tracking-wide uppercase shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90 dark:bg-gradient-to-r dark:from-[#e6c887] dark:via-[#f7e4b5] dark:to-[#e6c887] dark:text-[#072018] cursor-pointer group/btn"
                  >
                    <span>Đăng ký nhận báo cáo tiến độ</span>
                    <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  <div className="mt-4 pt-3 border-t border-border/60 dark:border-white/10 flex items-center justify-between text-xs">
                    <span className="text-muted-foreground flex items-center gap-1.5">
                      <PhoneCall className="size-3.5 text-primary dark:text-[#e6c887]" />
                      Hotline trực tiếp:
                    </span>
                    <a
                      href="tel:0376671776"
                      className="font-bold text-primary dark:text-[#e6c887] hover:underline"
                    >
                      0376 671 776
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* WIDGET 2: TÀI LIỆU TIẾN ĐỘ (media_1788984738123.png) */}
              <Reveal delay={0.15}>
                <div className="rounded-3xl border border-border/80 dark:border-white/10 bg-card p-6 shadow-md">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-4 flex items-center justify-between">
                    <span>TÀI LIỆU TIẾN ĐỘ</span>
                    <Download className="size-4 text-[#e6c887]" />
                  </h3>

                  <div className="space-y-3">
                    {PROGRESS_DOCUMENTS.map((doc, idx) => (
                      <div
                        key={idx}
                        onClick={() =>
                          openConsultation({
                            source: `Trang Tiến Độ - Tải tài liệu: ${doc.title}`,
                          })
                        }
                        className="p-3 rounded-xl border border-border/80 dark:border-white/10 bg-secondary/30 hover:bg-secondary/60 flex items-center justify-between transition-colors group cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5">
                          {doc.format === 'PDF' ? (
                            <FileText className="size-4 text-rose-500 shrink-0" />
                          ) : (
                            <Video className="size-4 text-sky-500 shrink-0" />
                          )}
                          <div>
                            <p className="text-xs font-semibold text-foreground group-hover:text-primary dark:group-hover:text-[#e6c887] transition-colors">
                              {doc.title}
                            </p>
                            <span className="text-[10px] text-muted-foreground">
                              {doc.size}
                            </span>
                          </div>
                        </div>

                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-secondary text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground dark:group-hover:bg-[#e6c887] dark:group-hover:text-[#072018] transition-colors">
                          {doc.format}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* WIDGET 3: THỜI TIẾT TẠI CÔNG TRƯỜNG (media_1788984747442.png) */}
              <Reveal delay={0.2}>
                <div className="rounded-3xl border border-border/80 dark:border-white/10 bg-card p-6 shadow-md">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-primary dark:text-[#e6c887]">
                    ĐIỀU KIỆN THI CÔNG
                  </span>
                  <h3 className="font-serif text-lg font-bold text-foreground mt-0.5 mb-1">
                    THỜI TIẾT TẠI CÔNG TRƯỜNG
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4">
                    Phường Tam Hiệp, Thành phố Biên Hòa, Đồng Nai
                  </p>

                  <div className="p-4 rounded-2xl bg-secondary/40 dark:bg-[#0c241b] border border-border/60 dark:border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-serif text-3xl font-bold text-foreground">
                          28°C
                        </div>
                        <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                          Nắng ráo · Thuận lợi đổ bê tông
                        </span>
                      </div>
                      <CloudSun className="size-10 text-amber-500" />
                    </div>

                    <div className="mt-4 pt-3 border-t border-border/60 dark:border-white/10 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Droplets className="size-3.5 text-sky-500" />
                        <span>Độ ẩm: 76%</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Wind className="size-3.5 text-teal-500" />
                        <span>Gió: 5 km/h</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* WIDGET 4: THAM QUAN CÔNG TRƯỜNG (media_1788984747442.png) */}
              <Reveal delay={0.25}>
                <div className="rounded-3xl border border-border/80 dark:border-white/10 bg-card p-6 shadow-md">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                    THAM QUAN CÔNG TRƯỜNG
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    Trải nghiệm thực tế tiến độ dự án cùng đội ngũ kỹ sư và chuyên viên tư vấn chuyên nghiệp.
                  </p>

                  <ul className="space-y-2 mb-5 text-xs text-foreground/90 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 text-primary dark:text-[#e6c887] shrink-0" />
                      <span>Tham quan thực tế công trường 236 Phan Trung</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 text-primary dark:text-[#e6c887] shrink-0" />
                      <span>Tư vấn tiến độ và đối chiếu hồ sơ pháp lý</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 text-primary dark:text-[#e6c887] shrink-0" />
                      <span>Hỗ trợ xe đưa đón tận nơi miễn phí</span>
                    </li>
                  </ul>

                  <a
                    href="tel:0376671776"
                    className="w-full py-2.5 rounded-xl font-sans font-bold text-xs tracking-wide uppercase shadow-md transition-all flex items-center justify-center gap-2 bg-[#e6c887] text-[#072018] hover:opacity-90"
                  >
                    ĐẶT LỊCH NGAY: 0376 671 776
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. INTERACTIVE LIGHTBOX VIEWER MODAL
      ===================================================================== */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-md p-4 sm:p-6"
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between z-10 max-w-5xl mx-auto w-full pt-2">
              <div className="text-white">
                <span className="text-xs text-[#e6c887] font-bold tracking-wider uppercase">
                  {activePhoto.time} · HÌNH ẢNH CÔNG TRƯỜNG THỰC TẾ
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                  {activePhoto.title}
                </h3>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5))}
                  className="size-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  title="Phóng to"
                >
                  <ZoomIn className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75))}
                  className="size-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  title="Thu nhỏ"
                >
                  <ZoomOut className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setZoomLevel(1)}
                  className="size-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  title="Đặt lại kích thước"
                >
                  <RotateCcw className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="size-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors ml-2"
                  title="Đóng (ESC)"
                >
                  <X className="size-5 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Image Viewport */}
            <div className="my-auto w-full max-w-4xl mx-auto z-10 flex items-center justify-center overflow-auto max-h-[75vh] py-2">
              <motion.div
                style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.2s ease-out' }}
                className="flex items-center justify-center max-h-[75vh]"
              >
                <img
                  src={activePhoto.imageSrc}
                  alt={activePhoto.title}
                  className="max-h-[75vh] w-auto h-auto rounded-2xl object-contain shadow-2xl border border-white/10"
                />
              </motion.div>
            </div>

            {/* Bottom Description */}
            <div className="text-center z-10 max-w-3xl mx-auto px-4 font-sans text-xs text-white/80">
              {activePhoto.desc}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
