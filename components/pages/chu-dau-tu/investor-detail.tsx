'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Building2,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Home,
  Clock,
  Sparkles,
  ExternalLink,
  Award,
  Users,
  MapPin,
  Landmark,
  FileText,
  AlertCircle,
  HelpCircle,
  TrendingUp,
} from 'lucide-react'
import { Reveal } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

// =============================================================================
// DATA STRUCTURES
// =============================================================================

// 1. Ba Điểm Nổi Bật Năng Lực (media_1788984631916.png)
interface DeveloperStrength {
  metric: string
  title: string
  desc: string
  highlight?: string
}

const DEVELOPER_STRENGTHS: DeveloperStrength[] = [
  {
    metric: '20+',
    title: 'Dự án đã triển khai',
    desc: 'Tập đoàn Bcons đã kiến tạo và bàn giao chuỗi dự án căn hộ thương hiệu Bcons (Suối Tiên, Miền Đông, Garden, Plaza, Sala, Bee, City...), khẳng định năng lực phát triển dự án nhà ở quy mô lớn.',
    highlight: 'Hơn 15.000 căn hộ chất lượng tại TP.HCM & Bình Dương',
  },
  {
    metric: 'Tiến độ',
    title: 'Làm thật – giao thật',
    desc: "Thương hiệu Bcons gắn liền với tôn chỉ 'giữ chữ tín hơn giữ vàng' — thi công đồng bộ, bàn giao chuẩn hạn cam kết và hạ tầng nghiệm thu hoàn chỉnh trước khi đón cư dân.",
    highlight: 'Áp dụng công nghệ BIM & quản lý chất lượng chuẩn PPSN Nhật Bản',
  },
  {
    metric: 'Pháp lý',
    title: 'Sở hữu lâu dài & Cấp sổ nhanh',
    desc: 'Khu phức hợp xây dựng trên quỹ đất sạch trúng đấu giá công khai. Các dự án Bcons trước đây ghi nhận thời gian bàn giao sổ hồng cho cư dân chỉ trong 6–12 tháng sau khi nhận nhà.',
    highlight: 'Kỷ lục trao sổ hồng nhanh bậc nhất thị trường BĐS phía Nam',
  },
]

// 2. Hai Pháp Nhân Đứng Sau Dự Án (media_1788984639373.png)
interface LegalEntity {
  roleBadge: string
  name: string
  desc: string
  checkMethod: string
  icon: typeof ShieldCheck
}

const LEGAL_ENTITIES: LegalEntity[] = [
  {
    roleBadge: 'CHỦ ĐẦU TƯ (BÊN ĐỨNG TÊN HỒ SƠ PHÁP LÝ)',
    name: 'Công ty Cổ phần Phát triển Đô thị Tam Hiệp',
    desc: 'Là pháp nhân đứng tên trên giấy phép xây dựng, quyết định giao đất và hợp đồng mua bán. Đây là bên bạn ký hợp đồng và là bên chịu trách nhiệm pháp lý về nghĩa vụ bàn giao và ra sổ.',
    checkMethod: 'Kiểm tra tên pháp nhân trên hợp đồng mua bán có trùng với tên trên giấy phép xây dựng không. Không trùng thì hỏi cho tới khi hiểu vì sao.',
    icon: ShieldCheck,
  },
  {
    roleBadge: 'ĐƠN VỊ PHÁT TRIỂN (THƯƠNG HIỆU TRÊN BẢNG HIỆU)',
    name: 'Tập đoàn Bcons (Bcons Group)',
    desc: 'Là thương hiệu phát triển dự án và là chủ thể của mọi tuyên bố về năng lực: số dự án đã làm, lịch sử bàn giao, uy tín thị trường. Thương hiệu không tự động là bên chịu trách nhiệm hợp đồng.',
    checkMethod: 'Mọi con số về bề dày kinh nghiệm thuộc về mục này, không phải mục trên. Đối chiếu bằng cách tìm chính các dự án cũ và hỏi cư dân ở đó.',
    icon: Building2,
  },
]

// 3. Bảng Kiểm Chứng Thông Tin (media_1788984649693.png)
interface VerificationItem {
  title: string
  statusBadge: string
  statusType: 'announced' | 'verified' | 'planned'
  explanation: string
}

const VERIFICATION_ITEMS: VerificationItem[] = [
  {
    title: 'Bcons Group đã phát triển hơn 20 dự án tại Bình Dương và TP.HCM',
    statusBadge: 'Theo công bố của tập đoàn',
    statusType: 'announced',
    explanation: 'Tôi chưa đối chiếu từng dự án một với hồ sơ nghiệm thu hoặc danh sách công trình do cơ quan quản lý công bố. Đây là con số thuật lại từ hồ sơ năng lực, không phải con số tôi tự kiểm.',
  },
  {
    title: 'Các dự án trước đó bàn giao đúng cam kết',
    statusBadge: 'Theo công bố của tập đoàn',
    statusType: 'announced',
    explanation: 'Đây là loại tuyên bố chỉ kiểm được bằng cách hỏi cư dân đã nhận nhà ở từng dự án cụ thể. Tôi khuyến khích bạn làm đúng việc đó thay vì tin vào dòng này — và nếu bạn tìm được thông tin ngược lại, hãy báo cho tôi để tôi sửa trang.',
  },
  {
    title: 'Bcons Central Park Tam Hiệp đã khởi công ngày 27/05/2026',
    statusBadge: 'Đã diễn ra',
    statusType: 'verified',
    explanation: 'Kiểm được bằng cách đến công trường tại 236 Phan Trung. Một dự án đã khởi công thật thì có công trường thật — đây là bước kiểm chứng rẻ nhất và mạnh nhất mà bạn tự làm được.',
  },
  {
    title: 'Thời gian ra sổ hồng cho cư dân thường trong 6 – 12 tháng sau bàn giao',
    statusBadge: 'Dự kiến',
    statusType: 'planned',
    explanation: 'Đây là kỳ vọng dựa trên các dự án trước, không phải cam kết trong hợp đồng. Thời gian ra sổ phụ thuộc vào nguồn gốc đất và thủ tục tại địa phương. Nếu điều này quan trọng với bạn, hãy yêu cầu đưa mốc cam kết ra sổ vào hợp đồng mua bán.',
  },
]

// 4. Bốn Cách Tự Kiểm Chứng Một Chủ Đầu Tư (media_1788984649693.png & Section 4)
interface CheckMethod {
  number: string
  title: string
  question: string
  action: string
  linkHref?: string
  linkLabel?: string
}

const CHECK_METHODS: CheckMethod[] = [
  {
    number: '01',
    title: 'Tìm cư dân của một dự án đã bàn giao',
    question: 'Hỏi ba câu then chốt:',
    action: 'Bàn giao đúng hạn không, chất lượng so với nhà mẫu thế nào, và bao lâu thì có sổ? Ba câu này nói nhiều hơn mọi hồ sơ năng lực bóng bẩy.',
  },
  {
    number: '02',
    title: 'Đối chiếu tên pháp nhân trên từng văn bản',
    question: 'Kiểm tra tính nhất quán:',
    action: 'Giấy phép xây dựng, quyết định quy hoạch và hợp đồng mua bán phải cùng nói về một pháp nhân duy nhất.',
    linkHref: '/phap-ly',
    linkLabel: 'Xem trạng thái pháp lý Bcons Tam Hiệp →',
  },
  {
    number: '03',
    title: 'Đến công trường, không chỉ đến nhà mẫu',
    question: 'Quan sát nhịp thi công thực địa:',
    action: 'Nhà mẫu cho biết dự án được bán thế nào; công trường cho biết dự án được làm tới đâu. Hãy đến trực tiếp 236 Phan Trung.',
    linkHref: '/tien-do',
    linkLabel: 'Xem tiến độ xây dựng cập nhật →',
  },
  {
    number: '04',
    title: 'Hỏi về bảo lãnh ngân hàng',
    question: 'Lớp thẩm định độc lập miễn phí:',
    action: 'Ngân hàng chỉ phát hành chứng thư bảo lãnh nghĩa vụ bàn giao sau khi đã thẩm định năng lực chủ đầu tư và tính hợp pháp của dự án.',
    linkHref: '/gia-ban#chinh-sach-vay',
    linkLabel: 'Xem chính sách bảo lãnh & vay vốn →',
  },
]

// 5. Danh Mục Dự Án Đã Bàn Giao & Trao Sổ
interface PastProject {
  name: string
  scale: string
  handoverYear: string
  pinkBookStatus: string
  location: string
}

const PAST_PROJECTS: PastProject[] = [
  {
    name: 'Bcons Suối Tiên',
    scale: '653 căn hộ',
    handoverYear: 'Bàn giao 2020',
    pinkBookStatus: '100% Đã nhận sổ hồng',
    location: 'TP. Dĩ An, Bình Dương',
  },
  {
    name: 'Bcons Miền Đông',
    scale: '768 căn hộ',
    handoverYear: 'Bàn giao 2021',
    pinkBookStatus: '100% Đã nhận sổ hồng',
    location: 'TP. Dĩ An, Bình Dương',
  },
  {
    name: 'Bcons Garden',
    scale: '1.776 căn hộ',
    handoverYear: 'Bàn giao 2022',
    pinkBookStatus: '100% Đã nhận sổ hồng',
    location: 'TP. Dĩ An, Bình Dương',
  },
  {
    name: 'Bcons Green View',
    scale: '916 căn hộ',
    handoverYear: 'Bàn giao 2022',
    pinkBookStatus: '100% Đã nhận sổ hồng',
    location: 'TP. Dĩ An, Bình Dương',
  },
  {
    name: 'Bcons Bee',
    scale: '289 căn hộ',
    handoverYear: 'Bàn giao 2022',
    pinkBookStatus: '100% Đã nhận sổ hồng',
    location: 'TP. Dĩ An, Bình Dương',
  },
  {
    name: 'Bcons Plaza',
    scale: '1.258 căn hộ',
    handoverYear: 'Bàn giao 2023',
    pinkBookStatus: '100% Đã nhận sổ hồng',
    location: 'TP. Dĩ An, Bình Dương',
  },
  {
    name: 'Bcons Sala & Polygon',
    scale: '1.300+ căn hộ',
    handoverYear: 'Bàn giao 2024',
    pinkBookStatus: 'Đang bàn giao sổ theo đợt',
    location: 'TP. Dĩ An, Bình Dương',
  },
  {
    name: 'Bcons City & Polaris',
    scale: 'Khu phức hợp quy mô lớn',
    handoverYear: 'Chuẩn bị bàn giao',
    pinkBookStatus: 'Đúng tiến độ cam kết',
    location: 'TP. Dĩ An & TP. Thủ Đức',
  },
]

// =============================================================================
// COMPONENT
// =============================================================================

export function InvestorDetail() {
  const { theme } = useSitePreferences()
  const isDark = theme === 'dark'

  return (
    <>
      {/* =====================================================================
          1. HERO BANNER — CINEMATIC LUXURY (media_1788984600563.png)
      ===================================================================== */}
      <section className="relative min-h-[480px] lg:min-h-[540px] flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-36 lg:pb-20">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bcons-central-park-tam-hiep-phoi-canh.webp"
            alt="Phối cảnh dự án Bcons Central Park Tam Hiệp"
            className="size-full object-cover object-center scale-105 transition-transform duration-1000"
          />
          {/* Deep Forest Emerald / Slate Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#072018]/95 via-[#072018]/85 to-[#072018]/95 backdrop-blur-[2px]" />
          {/* Champagne Gold Ambient Glow */}
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
            <span className="text-[#e6c887] font-semibold">Chủ đầu tư</span>
          </nav>

          <Reveal>
            {/* Eyebrow Pill */}
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6c887]/15 border border-[#e6c887]/30 text-[#e6c887] text-xs font-bold tracking-widest uppercase">
                <Sparkles className="size-3" />
                BCONS CENTRAL PARK
              </span>
            </div>

            {/* Main H1 Title */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance text-white drop-shadow-md uppercase">
              CHỦ ĐẦU TƯ DỰ ÁN BCONS CENTRAL PARK TAM HIỆP
            </h1>

            {/* Subtitle Italic */}
            <p className="mt-4 font-serif text-xl sm:text-2xl md:text-3xl italic text-[#e6c887] tracking-wide font-normal">
              Làm thật – Giao thật – Bền vững
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
          INTRO ANALYSIS SECTION (media_1788984600563.png & media_1788984624142.png)
      ===================================================================== */}
      <section className="bg-background py-14 lg:py-16 transition-colors border-b border-border/60 dark:border-white/10">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <Reveal>
            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground font-sans">
              <p className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-primary dark:first-letter:text-[#e6c887] first-letter:mr-2 first-letter:float-left">
                Bcons Central Park Tam Hiệp do <strong className="text-foreground font-semibold">Công ty Cổ phần Phát triển Đô thị Tam Hiệp</strong> làm chủ đầu tư, phát triển bởi <strong className="text-foreground font-semibold">Tập đoàn Bcons (Bcons Group)</strong> — đơn vị đã triển khai hơn 20 dự án tại Bình Dương và TP.HCM trước khi tiến vào khu vực trung tâm Đồng Nai. Với người mua căn hộ hình thành trong tương lai, năng lực và lịch sử bàn giao đúng cam kết của chủ đầu tư là yếu tố quan trọng không kém vị trí hay giá bán.
              </p>
              <p>
                Bên dưới là các điểm nổi bật về năng lực triển khai của Bcons tại dự án này, cùng lưu ý về thời gian ra sổ dự kiến cho cư dân sau bàn giao. Đây cũng là dự án đầu tiên mang thương hiệu Bcons Biên Hòa, sau chuỗi dự án thành công vang dội tại Dĩ An và TP.HCM.
              </p>
              <div className="p-5 rounded-2xl bg-secondary/50 dark:bg-card/60 border border-border dark:border-white/10 flex items-start gap-3.5">
                <FileText className="size-5 text-primary dark:text-[#e6c887] shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-foreground/90">
                  Để thẩm định đầy đủ, bạn nên đọc kèm hồ sơ <Link href="/phap-ly" className="text-primary dark:text-[#e6c887] font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity">pháp lý Bcons Tam Hiệp</Link> và cập nhật <Link href="/tien-do" className="text-primary dark:text-[#e6c887] font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity">tiến độ xây dựng Bcons Central Park</Link>; đây là những tài liệu thực tế quan trọng nhất cần kiểm tra trước khi đưa ra quyết định giao dịch.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================
          2. VÌ SAO CHỌN BCONS? (media_1788984631916.png)
      ===================================================================== */}
      <section className="bg-secondary/30 dark:bg-[#071712] py-20 lg:py-24 transition-colors">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <Reveal>
            <div className="mb-12">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary dark:text-[#e6c887]">
                CHỦ ĐẦU TƯ
              </span>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                VÌ SAO CHỌN BCONS?
              </h2>
              <div className="mt-4 h-1 w-20 bg-[#e6c887] rounded-full" />
            </div>
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left: Project Commercial Podium Image */}
            <Reveal className="lg:col-span-6" delay={0.05}>
              <div className="group relative rounded-3xl overflow-hidden border border-border/80 dark:border-white/15 shadow-2xl bg-card">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/images/bcons-central-park-chu-dau-tu-bcons.webp"
                    alt="Tập đoàn Bcons (Bcons Group) - Đơn vị phát triển dự án Bcons Central Park Tam Hiệp"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>
                {/* Caption Bar */}
                <div className="p-4 sm:p-5 bg-card dark:bg-[#0c241b] border-t border-border dark:border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-foreground text-sm sm:text-base">
                      Bcons Shopping Center & Phố Thương Mại
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Hệ tiện ích đồng bộ nâng tầm giá trị sống cho cư dân
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-primary/10 text-primary dark:bg-[#e6c887]/15 dark:text-[#e6c887] border border-primary/20 dark:border-[#e6c887]/30 shrink-0">
                    Bcons Group
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Right: 3 Core Highlights */}
            <Reveal className="lg:col-span-6 space-y-6" delay={0.1}>
              {DEVELOPER_STRENGTHS.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border transition-all duration-300 hover:translate-x-1 ${
                    isDark
                      ? 'border-white/10 bg-card/70 hover:border-[#e6c887]/50 shadow-lg'
                      : 'border-border bg-card hover:border-primary/40 shadow-sm'
                  }`}
                >
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-primary dark:text-[#e6c887] tracking-tight shrink-0">
                      {item.metric}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                  {item.highlight && (
                    <div className="mt-3 pt-3 border-t border-border/60 dark:border-white/10 flex items-center gap-2 text-xs font-medium text-foreground/85">
                      <CheckCircle2 className="size-3.5 text-primary dark:text-[#e6c887] shrink-0" />
                      <span>{item.highlight}</span>
                    </div>
                  )}
                </div>
              ))}
            </Reveal>
          </div>

          {/* Footnote callout badge */}
          <Reveal delay={0.15}>
            <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-background/80 dark:bg-card/40 border border-border/80 dark:border-white/10 text-xs sm:text-sm text-muted-foreground leading-relaxed flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-amber-500/15 text-amber-600 dark:text-[#e6c887] border border-amber-500/30 shrink-0">
                THAM KHẢO
              </span>
              <div>
                <strong>Nguồn:</strong> Hồ sơ năng lực Bcons Group và danh mục dự án do tập đoàn công bố. Đối chiếu lần cuối: 28/08/2026. Con số <em>&quot;hơn 20 dự án&quot;</em> là theo công bố của Bcons Group. Xem bảng lịch sử bàn giao chi tiết bên dưới để biết các mục đã được xác minh thực địa.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================
          3. HAI PHÁP NHÂN ĐỨNG SAU DỰ ÁN (media_1788984639373.png)
      ===================================================================== */}
      <section className="bg-background py-20 lg:py-24 transition-colors border-t border-border/60 dark:border-white/10">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <Reveal>
            <div className="mb-10">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary dark:text-[#e6c887]">
                MINH BẠCH HỒ SƠ
              </span>
              <h2 className="mt-2 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-snug">
                HAI PHÁP NHÂN ĐỨNG SAU DỰ ÁN — VÀ VÌ SAO PHẢI PHÂN BIỆT
              </h2>
              <div className="mt-4 h-1 w-20 bg-[#e6c887] rounded-full" />
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Đây là chỗ dễ nhầm nhất và cũng là chỗ tốn kém nhất nếu nhầm. Thương hiệu trên bảng hiệu dự án và pháp nhân trên hợp đồng bạn ký không phải lúc nào cũng là một.
              </p>
            </div>
          </Reveal>

          {/* 2 Comparative Bento Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {LEGAL_ENTITIES.map((entity, idx) => {
              const Icon = entity.icon
              return (
                <Reveal key={idx} delay={idx * 0.08}>
                  <div
                    className={`h-full flex flex-col justify-between p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                      isDark
                        ? 'border-white/10 bg-card/75 hover:border-[#e6c887]/50 shadow-xl'
                        : 'border-border bg-card hover:border-primary/40 shadow-md'
                    }`}
                  >
                    <div>
                      {/* Eyebrow Role */}
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className="size-4 text-primary dark:text-[#e6c887]" />
                        <span className="text-xs font-bold tracking-wider uppercase text-primary dark:text-[#e6c887]">
                          {entity.roleBadge}
                        </span>
                      </div>

                      {/* Company Name */}
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-4">
                        {entity.name}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                        {entity.desc}
                      </p>
                    </div>

                    {/* Divider & Check Method */}
                    <div className="mt-6 pt-5 border-t border-border/80 dark:border-white/10">
                      <div className="text-xs font-bold uppercase tracking-wider text-foreground mb-1.5 flex items-center gap-1.5">
                        <span className="size-2 rounded-full bg-primary dark:bg-[#e6c887]" />
                        Cách kiểm:
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {entity.checkMethod}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>

          {/* Bottom Clarification Banner */}
          <Reveal delay={0.16}>
            <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-secondary/50 dark:bg-card/50 border border-border dark:border-white/10 text-sm leading-relaxed text-foreground/90">
              <span className="font-semibold text-primary dark:text-[#e6c887]">Lưu ý quan trọng:</span> Tên pháp lý chính thức của dự án là <strong className="text-foreground">Khu nhà ở phức hợp cao tầng phường Tam Hiệp</strong> — đây là tên xuất hiện trên mọi hồ sơ phê duyệt của cơ quan nhà nước, khác với tên thương mại <strong className="text-foreground">Bcons Central Park</strong>. Toàn bộ hồ sơ pháp lý và trạng thái từng văn bản nằm ở chuyên mục{' '}
              <Link href="/phap-ly" className="text-primary dark:text-[#e6c887] font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity">
                Pháp lý Bcons Tam Hiệp
              </Link>.
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================
          4. ĐIỀU GÌ TÔI ĐÃ KIỂM CHỨNG ĐƯỢC, ĐIỀU GÌ CHƯA (media_1788984649693.png)
      ===================================================================== */}
      <section className="bg-secondary/30 dark:bg-[#071712] py-20 lg:py-24 transition-colors">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <Reveal>
            <div className="mb-10">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary dark:text-[#e6c887]">
                GÓC NHÌN ĐỘC LẬP & TRUNG THỰC
              </span>
              <h2 className="mt-2 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-snug">
                ĐIỀU GÌ TÔI ĐÃ KIỂM CHỨNG ĐƯỢC, ĐIỀU GÌ CHƯA
              </h2>
              <div className="mt-4 h-1 w-20 bg-[#e6c887] rounded-full" />
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Phần lớn trang bán dự án trình bày tuyên bố của chủ đầu tư như thể là sự thật đã được xác minh. Bảng dưới đây tách hai loại đó ra. Ba trong bốn dòng là thông tin tôi mới chỉ thuật lại — và tôi ghi rõ như vậy.
              </p>
            </div>
          </Reveal>

          {/* Verification Cards Stack */}
          <div className="space-y-4">
            {VERIFICATION_ITEMS.map((item, idx) => {
              const isVerified = item.statusType === 'verified'
              const isAnnounced = item.statusType === 'announced'

              return (
                <Reveal key={idx} delay={idx * 0.06}>
                  <div
                    className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 ${
                      isDark
                        ? 'border-white/10 bg-card/75 hover:border-[#e6c887]/40 shadow-sm'
                        : 'border-border bg-card hover:border-primary/30 shadow-sm'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <h3 className="font-serif text-base sm:text-lg font-bold text-foreground">
                        {item.title}
                      </h3>

                      {/* Status Badges */}
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide shrink-0 self-start sm:self-auto ${
                          isVerified
                            ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30'
                            : isAnnounced
                            ? 'bg-amber-500/15 text-amber-700 dark:text-[#e6c887] border border-amber-500/30'
                            : 'bg-sky-500/15 text-sky-700 dark:text-sky-400 border border-sky-500/30'
                        }`}
                      >
                        {isVerified && <CheckCircle2 className="size-3" />}
                        {isAnnounced && <AlertCircle className="size-3" />}
                        {!isVerified && !isAnnounced && <Clock className="size-3" />}
                        {item.statusBadge}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed text-muted-foreground font-sans">
                      {item.explanation}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. BỐN CÁCH TỰ KIỂM CHỨNG MỘT CHỦ ĐẦU TƯ (Section 4)
      ===================================================================== */}
      <section className="bg-background py-20 lg:py-24 transition-colors border-t border-border/60 dark:border-white/10">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <Reveal>
            <div className="mb-12">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary dark:text-[#e6c887]">
                HƯỚNG DẪN DÀNH CHO KHÁCH HÀNG
              </span>
              <h2 className="mt-2 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                BỐN CÁCH TỰ KIỂM CHỨNG MỘT CHỦ ĐẦU TƯ
              </h2>
              <div className="mt-4 h-1 w-20 bg-[#e6c887] rounded-full" />
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Không cách nào trong số này cần đến tôi, và đó là điểm mấu chốt. Bạn có thể tự mình thực hiện để đưa ra quyết định chắc chắn nhất.
              </p>
            </div>
          </Reveal>

          {/* 4 Method Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {CHECK_METHODS.map((method, idx) => (
              <Reveal key={idx} delay={idx * 0.06}>
                <div
                  className={`h-full flex flex-col justify-between p-6 sm:p-7 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                    isDark
                      ? 'border-white/10 bg-card/80 hover:border-[#e6c887]/50 shadow-lg'
                      : 'border-border bg-card hover:border-primary/40 shadow-sm'
                  }`}
                >
                  <div>
                    {/* Top Step Number */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-serif text-2xl sm:text-3xl font-bold text-primary/40 dark:text-[#e6c887]/40">
                        {method.number}
                      </span>
                      <span className="size-2.5 rounded-full bg-[#e6c887]" />
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-2">
                      {method.title}
                    </h3>

                    <p className="text-xs font-semibold text-primary dark:text-[#e6c887] uppercase tracking-wider mb-2">
                      {method.question}
                    </p>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {method.action}
                    </p>
                  </div>

                  {method.linkHref && (
                    <div className="mt-6 pt-4 border-t border-border/80 dark:border-white/10">
                      <Link
                        href={method.linkHref}
                        className="text-xs sm:text-sm font-semibold text-primary dark:text-[#e6c887] hover:underline flex items-center gap-1 group"
                      >
                        {method.linkLabel}
                      </Link>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. DANH MỤC DỰ ÁN TIÊU BIỂU ĐÃ BÀN GIAO & CẤP SỔ HỒNG
      ===================================================================== */}
      <section className="bg-secondary/30 dark:bg-[#071712] py-20 lg:py-24 transition-colors border-t border-border/60 dark:border-white/10">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary dark:text-[#e6c887]">
                  PROVEN TRACK RECORD
                </span>
                <h2 className="mt-2 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                  LỊCH SỬ BÀN GIAO & TIẾN ĐỘ CẤP SỔ HỒNG
                </h2>
                <div className="mt-4 h-1 w-20 bg-[#e6c887] rounded-full" />
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                Hơn 15.000+ cư dân đã nhận nhà & an cư lạc nghiệp
              </span>
            </div>
          </Reveal>

          {/* Grid of Past Projects */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PAST_PROJECTS.map((proj, idx) => (
              <Reveal key={idx} delay={idx * 0.04}>
                <div
                  className={`h-full flex flex-col justify-between p-5 rounded-2xl border transition-all duration-300 ${
                    isDark
                      ? 'border-white/10 bg-card/80 hover:border-[#e6c887]/50 shadow-sm'
                      : 'border-border bg-card hover:border-primary/40 shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                      <span className="font-semibold text-primary dark:text-[#e6c887] flex items-center gap-1">
                        <MapPin className="size-3" />
                        {proj.location.split(',')[0]}
                      </span>
                      <span>{proj.handoverYear.replace('Bàn giao ', '')}</span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                      {proj.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{proj.scale}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/80 dark:border-white/10 flex items-center gap-1.5 text-xs font-bold text-primary dark:text-[#e6c887]">
                    <CheckCircle2 className="size-3.5 shrink-0" />
                    <span>{proj.pinkBookStatus}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Call to action note */}
          <Reveal delay={0.2}>
            <div className="mt-12 p-6 rounded-3xl bg-card dark:bg-[#0c241b] border border-border dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-foreground">
                  Bạn muốn tìm hiểu thêm về Bcons Central Park Tam Hiệp?
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Đội ngũ chuyên viên Bcons luôn sẵn sàng cung cấp bảng giá chi tiết, tiến độ mới nhất và giải đáp hồ sơ pháp lý.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href="/gia-ban"
                  className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-primary text-primary-foreground hover:opacity-90 dark:bg-gradient-to-r dark:from-[#e6c887] dark:to-[#f7e4b5] dark:text-[#072018] shadow-md transition-all"
                >
                  Xem bảng giá căn hộ
                </Link>
                <Link
                  href="/phap-ly"
                  className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold border border-border dark:border-white/20 hover:border-primary dark:hover:border-[#e6c887] text-foreground transition-all"
                >
                  Hồ sơ pháp lý
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
