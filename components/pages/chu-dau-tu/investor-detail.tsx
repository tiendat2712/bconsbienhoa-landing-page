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
// COMPONENT
// =============================================================================

export function InvestorDetail() {
  const { theme, locale } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  // 1. Ba Điểm Nổi Bật Năng Lực
  const DEVELOPER_STRENGTHS = isEn
    ? [
        {
          metric: '20+',
          title: 'Delivered Projects',
          desc: 'Bcons Group has built and handed over a signature chain of Bcons apartments (Suối Tiên, Miền Đông, Garden, Plaza, Sala, Bee, City...), confirming vast high-rise residential development capacity.',
          highlight: 'Over 15,000 quality residential units across HCMC & Binh Duong',
        },
        {
          metric: 'Schedule',
          title: 'Real work – Real delivery',
          desc: "The Bcons brand upholds 'integrity above all' — synchronous construction, on-time handover per contract, and thoroughly inspected infrastructure before welcoming residents.",
          highlight: 'BIM technology implementation & Japanese PPSN standard quality management',
        },
        {
          metric: 'Legality',
          title: 'Long-term Ownership & Fast Pink Books',
          desc: 'Built on clean land won via public auction. Past Bcons developments recorded pink book handovers to owners within just 6–12 months after receiving keys.',
          highlight: 'Record-speed certificate of ownership issuance in Southern Vietnam',
        },
      ]
    : [
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

  // 2. Hai Pháp Nhân Đứng Sau Dự Án
  const LEGAL_ENTITIES = isEn
    ? [
        {
          roleBadge: 'PROJECT INVESTOR (NAME ON LEGAL DOSSIER)',
          name: 'Tam Hiep Urban Development Joint Stock Company',
          desc: 'The legal corporate entity named on the construction permit, land allocation decision, and sales contract. This is the party you sign contracts with and who bears legal responsibility for handover and title deeds.',
          checkMethod: 'Verify whether the corporate name on the sales contract matches the construction permit. If not, inquire until fully clarified.',
          icon: ShieldCheck,
        },
        {
          roleBadge: 'DEVELOPER (BRAND DISPLAYED ON PROJECT SIGNAGE)',
          name: 'Bcons Group (Bcons Joint Stock Company)',
          desc: 'The project development brand and the subject of all capability claims: delivered project counts, track record, market prestige. A brand is not automatically the contractual obligor.',
          checkMethod: 'All track record figures belong to this category, not the one above. Verify by inspecting previous projects and speaking with their residents.',
          icon: Building2,
        },
      ]
    : [
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

  // 3. Bảng Kiểm Chứng Thông Tin
  const VERIFICATION_ITEMS = isEn
    ? [
        {
          title: 'Bcons Group has developed over 20 projects across Binh Duong & HCMC',
          statusBadge: 'Per Group Announcement',
          statusType: 'announced' as const,
          explanation: 'We have not individually matched every single project with official state acceptance records. This figure reflects the developer capacity profile, not an independently audited metric.',
        },
        {
          title: 'Previous projects were delivered strictly on schedule',
          statusBadge: 'Per Group Announcement',
          statusType: 'announced' as const,
          explanation: 'This claim can only be verified by consulting residents living in specific delivered projects. We encourage you to do so directly — and report any contradictory findings to us.',
        },
        {
          title: 'Bcons Central Park Tam Hiep broke ground on May 27, 2026',
          statusBadge: 'Verified On-Site',
          statusType: 'verified' as const,
          explanation: 'Verifiable by visiting the real construction site at 236 Phan Trung. An officially commenced project possesses active site works — the most accessible and convincing proof.',
        },
        {
          title: 'Ownership certificates (Pink Books) issued within 6–12 months post-handover',
          statusBadge: 'Projected Target',
          statusType: 'planned' as const,
          explanation: 'This is an expectation based on historical performance, not a contractual warranty. Timeline depends on land provenance and municipal procedures. You may request explicit timeline clauses in your SPA.',
        },
      ]
    : [
        {
          title: 'Bcons Group đã phát triển hơn 20 dự án tại Bình Dương và TP.HCM',
          statusBadge: 'Theo công bố của tập đoàn',
          statusType: 'announced' as const,
          explanation: 'Tôi chưa đối chiếu từng dự án một với hồ sơ nghiệm thu hoặc danh sách công trình do cơ quan quản lý công bố. Đây là con số thuật lại từ hồ sơ năng lực, không phải con số tôi tự kiểm.',
        },
        {
          title: 'Các dự án trước đó bàn giao đúng cam kết',
          statusBadge: 'Theo công bố của tập đoàn',
          statusType: 'announced' as const,
          explanation: 'Đây là loại tuyên bố chỉ kiểm được bằng cách hỏi cư dân đã nhận nhà ở từng dự án cụ thể. Tôi khuyến khích bạn làm đúng việc đó thay vì tin vào dòng này — và nếu bạn tìm được thông tin ngược lại, hãy báo cho tôi để tôi sửa trang.',
        },
        {
          title: 'Bcons Central Park Tam Hiệp đã khởi công ngày 27/05/2026',
          statusBadge: 'Đã diễn ra',
          statusType: 'verified' as const,
          explanation: 'Kiểm được bằng cách đến công trường tại 236 Phan Trung. Một dự án đã khởi công thật thì có công trường thật — đây là bước kiểm chứng rẻ nhất và mạnh nhất mà bạn tự làm được.',
        },
        {
          title: 'Thời gian ra sổ hồng cho cư dân thường trong 6 – 12 tháng sau bàn giao',
          statusBadge: 'Dự kiến',
          statusType: 'planned' as const,
          explanation: 'Đây là kỳ vọng dựa trên các dự án trước, không phải cam kết trong hợp đồng. Thời gian ra sổ phụ thuộc vào nguồn gốc đất và thủ tục tại địa phương. Nếu điều này quan trọng với bạn, hãy yêu cầu đưa mốc cam kết ra sổ vào hợp đồng mua bán.',
        },
      ]

  // 4. Bốn Cách Tự Kiểm Chứng Một Chủ Đầu Tư
  const CHECK_METHODS = isEn
    ? [
        {
          number: '01',
          title: 'Speak with residents of delivered projects',
          question: 'Ask three critical questions:',
          action: 'Was it delivered on time? How is the finish compared to the show unit? How long until pink books were issued? These three answers reveal more than glossy brochures.',
        },
        {
          number: '02',
          title: 'Cross-check legal entities across documents',
          question: 'Verify consistency:',
          action: 'Construction permits, 1/500 zoning approvals, and sales contracts must consistently refer to one unified legal entity.',
          linkHref: '/phap-ly',
          linkLabel: 'View Bcons Tam Hiep legal status →',
        },
        {
          number: '03',
          title: 'Visit the construction site, not just the sales gallery',
          question: 'Observe real site momentum:',
          action: 'The sales gallery shows how units are marketed; the construction site shows how buildings are constructed. Visit 236 Phan Trung directly.',
          linkHref: '/tien-do',
          linkLabel: 'View updated construction progress →',
        },
        {
          number: '04',
          title: 'Inquire about commercial bank guarantees',
          question: 'Free independent due diligence:',
          action: 'Commercial partner banks only issue handover performance guarantees after rigorous due diligence of the developer’s balance sheet and legal approvals.',
          linkHref: '/gia-ban#chinh-sach-vay',
          linkLabel: 'View bank guarantee & loan policies →',
        },
      ]
    : [
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
  const PAST_PROJECTS = isEn
    ? [
        {
          name: 'Bcons Suoi Tien',
          scale: '653 apartments',
          handoverYear: 'Handover 2020',
          pinkBookStatus: '100% Pink Books Issued',
          location: 'Di An City, Binh Duong',
        },
        {
          name: 'Bcons Mien Dong',
          scale: '768 apartments',
          handoverYear: 'Handover 2021',
          pinkBookStatus: '100% Pink Books Issued',
          location: 'Di An City, Binh Duong',
        },
        {
          name: 'Bcons Garden',
          scale: '1,776 apartments',
          handoverYear: 'Handover 2022',
          pinkBookStatus: '100% Pink Books Issued',
          location: 'Di An City, Binh Duong',
        },
        {
          name: 'Bcons Green View',
          scale: '916 apartments',
          handoverYear: 'Handover 2022',
          pinkBookStatus: '100% Pink Books Issued',
          location: 'Di An City, Binh Duong',
        },
        {
          name: 'Bcons Bee',
          scale: '289 apartments',
          handoverYear: 'Handover 2022',
          pinkBookStatus: '100% Pink Books Issued',
          location: 'Di An City, Binh Duong',
        },
        {
          name: 'Bcons Plaza',
          scale: '1,258 apartments',
          handoverYear: 'Handover 2023',
          pinkBookStatus: '100% Pink Books Issued',
          location: 'Di An City, Binh Duong',
        },
        {
          name: 'Bcons Sala & Polygon',
          scale: '1,300+ apartments',
          handoverYear: 'Handover 2024',
          pinkBookStatus: 'Issuing books in batches',
          location: 'Di An City, Binh Duong',
        },
        {
          name: 'Bcons City & Polaris',
          scale: 'Large-scale complex',
          handoverYear: 'Preparing handover',
          pinkBookStatus: 'On scheduled track',
          location: 'Di An City & Thu Duc City',
        },
      ]
    : [
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

  return (
    <>
      {/* =====================================================================
          1. HERO BANNER — CINEMATIC LUXURY
      ===================================================================== */}
      <section className="relative min-h-[480px] lg:min-h-[540px] flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-36 lg:pb-20">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bcons-central-park-tam-hiep-phoi-canh.webp"
            alt={isEn ? 'Bcons Central Park Tam Hiep perspective rendering' : 'Phối cảnh dự án Bcons Central Park Tam Hiệp'}
            className="size-full object-cover object-center scale-105 transition-transform duration-1000"
          />
          {/* Deep Forest Emerald / Slate Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#072018]/95 via-[#072018]/85 to-[#072018]/95 backdrop-blur-[2px]" />
          {/* Champagne Gold Ambient Glow */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#e6c887]/25 via-emerald-500/10 to-transparent blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-8 w-full text-white">
          {/* Breadcrumb Frosted Glass */}
          <nav aria-label={isEn ? 'Breadcrumb' : 'Đường dẫn'} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white/80 mb-6 shadow-sm">
            <Link href="/" className="hover:text-[#e6c887] transition-colors flex items-center gap-1.5">
              <Home className="size-3.5 text-[#e6c887]" />
              {isEn ? 'Home' : 'Trang chủ'}
            </Link>
            <ChevronRight className="size-3.5 text-white/40" />
            <span className="text-[#e6c887] font-semibold">{isEn ? 'Developer' : 'Chủ đầu tư'}</span>
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
              {isEn ? 'INVESTOR & DEVELOPER — BCONS CENTRAL PARK' : 'CHỦ ĐẦU TƯ DỰ ÁN BCONS CENTRAL PARK TAM HIỆP'}
            </h1>

            {/* Subtitle Italic */}
            <p className="mt-4 font-serif text-xl sm:text-2xl md:text-3xl italic text-[#e6c887] tracking-wide font-normal">
              {isEn ? 'Real Work – Real Delivery – Lasting Value' : 'Làm thật – Giao thật – Bền vững'}
            </p>

            {/* Metadata bar */}
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/70 font-sans border-t border-white/15 pt-4">
              <span>{isEn ? 'Updated: ' : 'Cập nhật ngày '}<strong className="text-white font-medium">05/09/2026</strong></span>
              <span className="text-white/30">•</span>
              <span>{isEn ? 'Compiled by ' : 'Biên soạn bởi '}<strong className="text-[#e6c887] font-semibold">Lê Ngọc Long</strong></span>
              <span className="text-white/30">•</span>
              <span className="text-emerald-300 font-medium flex items-center gap-1">
                <CheckCircle2 className="size-3.5" /> {isEn ? 'Independent editorial process & on-site verification' : 'Quy trình biên tập độc lập & đối chiếu thực địa'}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================
          INTRO ANALYSIS SECTION
      ===================================================================== */}
      <section className="bg-background py-14 lg:py-16 transition-colors border-b border-border/60 dark:border-white/10">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <Reveal>
            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground font-sans">
              <p className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-primary dark:first-letter:text-[#e6c887] first-letter:mr-2 first-letter:float-left">
                {isEn ? (
                  <>
                    Bcons Central Park Tam Hiep is invested by <strong className="text-foreground font-semibold">Tam Hiep Urban Development JSC</strong> and developed by <strong className="text-foreground font-semibold">Bcons Group</strong> — a conglomerate that has successfully developed over 20 projects across Binh Duong and Ho Chi Minh City before entering Dong Nai&apos;s core urban area. For off-plan home buyers, developer execution capacity and reliable handover history are just as vital as location or price.
                  </>
                ) : (
                  <>
                    Bcons Central Park Tam Hiệp do <strong className="text-foreground font-semibold">Công ty Cổ phần Phát triển Đô thị Tam Hiệp</strong> làm chủ đầu tư, phát triển bởi <strong className="text-foreground font-semibold">Tập đoàn Bcons (Bcons Group)</strong> — đơn vị đã triển khai hơn 20 dự án tại Bình Dương và TP.HCM trước khi tiến vào khu vực trung tâm Đồng Nai. Với người mua căn hộ hình thành trong tương lai, năng lực và lịch sử bàn giao đúng cam kết của chủ đầu tư là yếu tố quan trọng không kém vị trí hay giá bán.
                  </>
                )}
              </p>
              <p>
                {isEn ? (
                  'Below are key highlights of Bcons execution capacity in this project, alongside essential notes on anticipated pink book issuance timelines post-handover. This also represents the first project under the Bcons Bien Hoa banner, carrying forward the brand’s proven success in Di An and HCMC.'
                ) : (
                  'Bên dưới là các điểm nổi bật về năng lực triển khai của Bcons tại dự án này, cùng lưu ý về thời gian ra sổ dự kiến cho cư dân sau bàn giao. Đây cũng là dự án đầu tiên mang thương hiệu Bcons Biên Hòa, sau chuỗi dự án thành công vang dội tại Dĩ An và TP.HCM.'
                )}
              </p>
              <div className="p-5 rounded-2xl bg-secondary/50 dark:bg-card/60 border border-border dark:border-white/10 flex items-start gap-3.5">
                <FileText className="size-5 text-primary dark:text-[#e6c887] shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-foreground/90">
                  {isEn ? (
                    <>
                      For comprehensive due diligence, you are recommended to review the <Link href="/phap-ly" className="text-primary dark:text-[#e6c887] font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity">Bcons Tam Hiep legal dossier</Link> and updated <Link href="/tien-do" className="text-primary dark:text-[#e6c887] font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity">construction progress</Link>; these are the most critical practical documents to inspect prior to making transaction decisions.
                    </>
                  ) : (
                    <>
                      Để thẩm định đầy đủ, bạn nên đọc kèm hồ sơ <Link href="/phap-ly" className="text-primary dark:text-[#e6c887] font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity">pháp lý Bcons Tam Hiệp</Link> và cập nhật <Link href="/tien-do" className="text-primary dark:text-[#e6c887] font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity">tiến độ xây dựng Bcons Central Park</Link>; đây là những tài liệu thực tế quan trọng nhất cần kiểm tra trước khi đưa ra quyết định giao dịch.
                    </>
                  )}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================
          2. VÌ SAO CHỌN BCONS?
      ===================================================================== */}
      <section className="bg-secondary/30 dark:bg-[#071712] py-20 lg:py-24 transition-colors">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <Reveal>
            <div className="mb-12">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary dark:text-[#e6c887]">
                {isEn ? 'DEVELOPER PROFILE' : 'CHỦ ĐẦU TƯ'}
              </span>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                {isEn ? 'WHY CHOOSE BCONS GROUP?' : 'VÌ SAO CHỌN BCONS?'}
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
                    alt={isEn ? 'Bcons Group - Developer of Bcons Central Park Tam Hiep' : 'Tập đoàn Bcons (Bcons Group) - Đơn vị phát triển dự án Bcons Central Park Tam Hiệp'}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>
                {/* Caption Bar */}
                <div className="p-4 sm:p-5 bg-card dark:bg-[#0c241b] border-t border-border dark:border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-foreground text-sm sm:text-base">
                      {isEn ? 'Bcons Shopping Center & Commercial Promenade' : 'Bcons Shopping Center & Phố Thương Mại'}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {isEn ? 'Synchronous amenities elevating residential living standards' : 'Hệ tiện ích đồng bộ nâng tầm giá trị sống cho cư dân'}
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
                {isEn ? 'REFERENCE' : 'THAM KHẢO'}
              </span>
              <div>
                {isEn ? (
                  <>
                    <strong>Source:</strong> Bcons Group developer capacity profile and project portfolio published by the group. Last cross-referenced: August 28, 2026. The <em>&quot;over 20 projects&quot;</em> metric is per group announcement. See detailed handover history below for items verified on-site.
                  </>
                ) : (
                  <>
                    <strong>Nguồn:</strong> Hồ sơ năng lực Bcons Group và danh mục dự án do tập đoàn công bố. Đối chiếu lần cuối: 28/08/2026. Con số <em>&quot;hơn 20 dự án&quot;</em> là theo công bố của Bcons Group. Xem bảng lịch sử bàn giao chi tiết bên dưới để biết các mục đã được xác minh thực địa.
                  </>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================
          3. HAI PHÁP NHÂN ĐỨNG SAU DỰ ÁN
      ===================================================================== */}
      <section className="bg-background py-20 lg:py-24 transition-colors border-t border-border/60 dark:border-white/10">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <Reveal>
            <div className="mb-10">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary dark:text-[#e6c887]">
                {isEn ? 'LEGAL TRANSPARENCY' : 'MINH BẠCH HỒ SƠ'}
              </span>
              <h2 className="mt-2 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-snug">
                {isEn ? 'TWO CORPORATE ENTITIES BEHIND THE PROJECT — AND WHY IT MATTERS' : 'HAI PHÁP NHÂN ĐỨNG SAU DỰ ÁN — VÀ VÌ SAO PHẢI PHÂN BIỆT'}
              </h2>
              <div className="mt-4 h-1 w-20 bg-[#e6c887] rounded-full" />
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                {isEn ? (
                  'This is often the easiest point of confusion, and the costliest if overlooked. The project brand on commercial signage and the legal corporate entity on the contract you sign are not always identical.'
                ) : (
                  'Đây là chỗ dễ nhầm nhất và cũng là chỗ tốn kém nhất nếu nhầm. Thương hiệu trên bảng hiệu dự án và pháp nhân trên hợp đồng bạn ký không phải lúc nào cũng là một.'
                )}
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
                        {isEn ? 'How to verify:' : 'Cách kiểm:'}
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
              <span className="font-semibold text-primary dark:text-[#e6c887]">{isEn ? 'Important Note:' : 'Lưu ý quan trọng:'}</span>{' '}
              {isEn ? (
                <>
                  The official legal planning name of the project is <strong className="text-foreground">Tam Hiep High-Rise Residential Complex</strong> — this is the exact designation appearing on all state administrative approvals, distinct from the commercial brand <strong className="text-foreground">Bcons Central Park</strong>. The complete legal dossier and individual document statuses can be found under{' '}
                  <Link href="/phap-ly" className="text-primary dark:text-[#e6c887] font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity">
                    Bcons Tam Hiep Legal Dossier
                  </Link>.
                </>
              ) : (
                <>
                  Tên pháp lý chính thức của dự án là <strong className="text-foreground">Khu nhà ở phức hợp cao tầng phường Tam Hiệp</strong> — đây là tên xuất hiện trên mọi hồ sơ phê duyệt của cơ quan nhà nước, khác với tên thương mại <strong className="text-foreground">Bcons Central Park</strong>. Toàn bộ hồ sơ pháp lý và trạng thái từng văn bản nằm ở chuyên mục{' '}
                  <Link href="/phap-ly" className="text-primary dark:text-[#e6c887] font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity">
                    Pháp lý Bcons Tam Hiệp
                  </Link>.
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================
          4. ĐIỀU GÌ TÔI ĐÃ KIỂM CHỨNG ĐƯỢC, ĐIỀU GÌ CHƯA
      ===================================================================== */}
      <section className="bg-secondary/30 dark:bg-[#071712] py-20 lg:py-24 transition-colors">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <Reveal>
            <div className="mb-10">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary dark:text-[#e6c887]">
                {isEn ? 'INDEPENDENT & HONEST PERSPECTIVE' : 'GÓC NHÌN ĐỘC LẬP & TRUNG THỰC'}
              </span>
              <h2 className="mt-2 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-snug">
                {isEn ? 'WHAT HAS BEEN VERIFIED VS. WHAT REMAINS UNCONFIRMED' : 'ĐIỀU GÌ TÔI ĐÃ KIỂM CHỨNG ĐƯỢC, ĐIỀU GÌ CHƯA'}
              </h2>
              <div className="mt-4 h-1 w-20 bg-[#e6c887] rounded-full" />
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                {isEn ? (
                  'Most real estate marketing pages present developer statements as established facts. The matrix below clearly delineates between the two. Three out of four rows reflect reported information — and we state this unequivocally.'
                ) : (
                  'Phần lớn trang bán dự án trình bày tuyên bố của chủ đầu tư như thể là sự thật đã được xác minh. Bảng dưới đây tách hai loại đó ra. Ba trong bốn dòng là thông tin tôi mới chỉ thuật lại — và tôi ghi rõ như vậy.'
                )}
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
          5. BỐN CÁCH TỰ KIỂM CHỨNG MỘT CHỦ ĐẦU TƯ
      ===================================================================== */}
      <section className="bg-background py-20 lg:py-24 transition-colors border-t border-border/60 dark:border-white/10">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <Reveal>
            <div className="mb-12">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary dark:text-[#e6c887]">
                {isEn ? 'BUYER’S PRACTICAL GUIDE' : 'HƯỚNG DẪN DÀNH CHO KHÁCH HÀNG'}
              </span>
              <h2 className="mt-2 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                {isEn ? 'FOUR WAYS TO INDEPENDENTLY VET A REAL ESTATE DEVELOPER' : 'BỐN CÁCH TỰ KIỂM CHỨNG MỘT CHỦ ĐẦU TƯ'}
              </h2>
              <div className="mt-4 h-1 w-20 bg-[#e6c887] rounded-full" />
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                {isEn ? (
                  'None of these steps require our presence, and that is precisely the point. You can perform these independently to make the most confident decision.'
                ) : (
                  'Không cách nào trong số này cần đến tôi, và đó là điểm mấu chốt. Bạn có thể tự mình thực hiện để đưa ra quyết định chắc chắn nhất.'
                )}
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
                  {isEn ? 'DELIVERY TRACK RECORD & OWNERSHIP BOOK STATUS' : 'LỊCH SỬ BÀN GIAO & TIẾN ĐỘ CẤP SỔ HỒNG'}
                </h2>
                <div className="mt-4 h-1 w-20 bg-[#e6c887] rounded-full" />
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                {isEn ? 'Over 15,000+ residents received homes & settled down' : 'Hơn 15.000+ cư dân đã nhận nhà & an cư lạc nghiệp'}
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
                      <span>{proj.handoverYear.replace(isEn ? 'Handover ' : 'Bàn giao ', '')}</span>
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
                  {isEn ? 'Would you like to explore more about Bcons Central Park?' : 'Bạn muốn tìm hiểu thêm về Bcons Central Park Tam Hiệp?'}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {isEn ? (
                    'Our consulting team is ready to provide official price lists, construction updates, and legal dossiers.'
                  ) : (
                    'Đội ngũ chuyên viên Bcons luôn sẵn sàng cung cấp bảng giá chi tiết, tiến độ mới nhất và giải đáp hồ sơ pháp lý.'
                  )}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href="/gia-ban"
                  className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-primary text-primary-foreground hover:opacity-90 dark:bg-gradient-to-r dark:from-[#e6c887] dark:to-[#f7e4b5] dark:text-[#072018] shadow-md transition-all"
                >
                  {isEn ? 'View Unit Prices' : 'Xem bảng giá căn hộ'}
                </Link>
                <Link
                  href="/phap-ly"
                  className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold border border-border dark:border-white/20 hover:border-primary dark:hover:border-[#e6c887] text-foreground transition-all"
                >
                  {isEn ? 'Legal Dossier' : 'Hồ sơ pháp lý'}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
