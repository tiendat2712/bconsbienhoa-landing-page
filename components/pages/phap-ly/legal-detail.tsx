'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Eye,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
  Send,
  PhoneCall,
  FileText,
} from 'lucide-react'
import { Reveal } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

// =============================================================================
// 1. DATA MODELS & CONSTANTS
// =============================================================================

// 4 Trụ Cột An Toàn Pháp Lý (Matching media_1788984026397.png)
interface LegalPillar {
  label: string
  status: string
  statusType: 'success' | 'warning'
  title: string
  subtitle: string
}

const LEGAL_PILLARS_VI: LegalPillar[] = [
  {
    label: 'HÌNH THỨC SỞ HỮU',
    status: 'Đã xác định',
    statusType: 'success',
    title: 'Sổ hồng lâu dài',
    subtitle: 'Áp dụng cho người Việt Nam',
  },
  {
    label: 'NGUỒN GỐC QUỸ ĐẤT',
    status: 'Hoàn tất',
    statusType: 'success',
    title: 'Đất đấu giá sạch 100%',
    subtitle: 'QĐ 3314 & 782/UBND, 13 GCNQSDĐ',
  },
  {
    label: 'THỦ TỤC XÂY DỰNG',
    status: 'Hợp chuẩn',
    statusType: 'success',
    title: 'Miễn GPXD theo luật',
    subtitle: 'Đã thẩm định BCNCKT (CV 1155/SXD)',
  },
  {
    label: 'HIỆN TRẠNG CÔNG TRƯỜNG',
    status: 'Đang triển khai',
    statusType: 'warning',
    title: 'Đang thi công móng',
    subtitle: 'Khởi công 27/05/2026, chuẩn bị nghiệm thu',
  },
]

const LEGAL_PILLARS_EN: LegalPillar[] = [
  {
    label: 'OWNERSHIP TENURE',
    status: 'Confirmed',
    statusType: 'success',
    title: 'Long-term Freehold',
    subtitle: 'Applicable for Vietnamese citizens',
  },
  {
    label: 'LAND ORIGIN',
    status: 'Completed',
    statusType: 'success',
    title: '100% Clean Auction Land',
    subtitle: 'Decisions 3314 & 782/UBND, 13 Land Titles',
  },
  {
    label: 'CONSTRUCTION PERMITS',
    status: 'Compliant',
    statusType: 'success',
    title: 'Statutory Permit Exemption',
    subtitle: 'Appraised Feasibility Report (Doc 1155/SXD)',
  },
  {
    label: 'SITE STATUS',
    status: 'In Progress',
    statusType: 'warning',
    title: 'Foundation Construction',
    subtitle: 'Commenced 27/05/2026, preparing acceptance',
  },
]

// 6 Bước Pháp Lý Chuẩn (Matching media_1788984037042.png & media_1788984049758.png)
interface LegalStep {
  step: number
  phase: number
  titleVi: string
  titleEn: string
  statusVi: string
  statusEn: string
  statusType: 'completed' | 'ongoing' | 'upcoming'
  lawVi: string
  lawEn: string
  realityVi: string
  realityEn: string
  actionVi: string
  actionEn: string
}

const LEGAL_STEPS: LegalStep[] = [
  {
    step: 1,
    phase: 1,
    titleVi: 'Quyền sử dụng đất hợp pháp',
    titleEn: 'Lawful Land Use Rights',
    statusVi: 'Đã hoàn thành',
    statusEn: 'Completed',
    statusType: 'completed',
    lawVi: 'Chủ đầu tư phải có quyền sử dụng đất hợp pháp cho toàn bộ khu đất, kèm quyết định giao đất hoặc kết quả trúng đấu giá công khai.',
    lawEn: 'Developer must hold valid lawful land use rights for the entire parcel, accompanied by land assignment decisions or certified public auction results.',
    realityVi: 'Đã qua. Đấu giá công nhận tại QĐ 3314/QĐ-UBND (26/12/2025), giao đất tại QĐ 782/QĐ-UBND (02/03/2026), 13 GCNQSDĐ cấp ngày 20/04/2026.',
    realityEn: 'Completed. Public auction recognized under Decision 3314/QĐ-UBND (26/12/2025), land allocated under Decision 782/QĐ-UBND (02/03/2026), 13 land ownership certificates issued 20/04/2026.',
    actionVi: 'Yêu cầu xem quyết định giao đất và kết quả đấu giá. Quỹ đất sạch quyết định tốc độ cấp sổ hồng sau này.',
    actionEn: 'Request to examine the land allocation decision and auction outcomes. Clean land ensures fast pink book issuance.',
  },
  {
    step: 2,
    phase: 1,
    titleVi: 'Quy hoạch chi tiết 1/500 được duyệt',
    titleEn: 'Approved 1/500 Detailed Master Plan',
    statusVi: 'Đã hoàn thành',
    statusEn: 'Completed',
    statusType: 'completed',
    lawVi: 'Bản đồ quy hoạch 1/500 định vị ranh giới đất, mật độ xây dựng, chiều cao công trình và cơ cấu căn hộ do cơ quan có thẩm quyền phê duyệt.',
    lawEn: 'The 1/500 master plan delineates property boundaries, building density, construction height limits and unit structure certified by state authorities.',
    realityVi: 'Đã qua. Quyết định số 803/QĐ-UBND (27/10/2025) phê duyệt quy hoạch chi tiết 1/500 cho thửa đất số 71, tờ bản đồ địa chính số 86.',
    realityEn: 'Completed. Decision No. 803/QĐ-UBND (27/10/2025) approving 1/500 detailed master plan for Land Plot No. 71, Cadastral Map No. 86.',
    actionVi: 'Đối chiếu vị trí tầng, căn hộ dự định mua trên bản quy hoạch 1/500 được duyệt thay vì chỉ xem phối cảnh 3D.',
    actionEn: 'Verify the floor location and apartment code against the approved 1/500 master plan rather than relying solely on 3D artist renderings.',
  },
  {
    step: 3,
    phase: 1,
    titleVi: 'Hồ sơ thiết kế & Giấy phép xây dựng',
    titleEn: 'Engineering Design & Construction Permit',
    statusVi: 'Đã hoàn thành (Miễn GPXD)',
    statusEn: 'Completed (Exempted)',
    statusType: 'completed',
    lawVi: 'Công trình phải có giấy phép xây dựng trước khi khởi công, trừ trường hợp được miễn theo quy định của pháp luật xây dựng.',
    lawEn: 'Construction works require a building permit prior to groundbreaking, unless legally exempted under statutory construction law.',
    realityVi: 'Thuộc diện miễn GPXD. Mục V.7.2 công văn 1155/SXD dẫn Điểm e Khoản 2 Điều 43 Luật Xây dựng số 135/2025/QH15: công trình đã được cơ quan chuyên môn thẩm định Báo cáo nghiên cứu khả thi thì được miễn GPXD.',
    realityEn: 'Eligible for building permit exemption. Item V.7.2 of Document 1155/SXD cites Point e, Clause 2, Article 43 of Construction Law No. 135/2025/QH15: projects with state-appraised feasibility study reports are exempt from individual building permits.',
    actionVi: 'Không cần tìm GPXD giấy thông thường; hãy kiểm tra bản thẩm định thiết kế cơ sở và phê duyệt thiết kế triển khai sau thiết kế cơ sở.',
    actionEn: 'Do not seek a standard paper permit; instead verify the foundational technical design appraisal and subsequent executive engineering approvals.',
  },
  {
    step: 4,
    phase: 2,
    titleVi: 'Thi công hoàn thành phần móng',
    titleEn: 'Foundation Construction Completion',
    statusVi: 'Đang thi công',
    statusEn: 'In Progress',
    statusType: 'ongoing',
    lawVi: 'Chung cư chỉ được phép đưa vào kinh doanh bán nhà ở hình thành trong tương lai sau khi đã hoàn thành và nghiệm thu phần móng.',
    lawEn: 'High-rise residential developments are only permitted to execute commercial off-plan sales contracts after completing and certifying foundation works.',
    realityVi: 'Đang triển khai sau ngày khởi công 27/05/2026. Công trường đang đẩy mạnh hạng mục ngầm và móng.',
    realityEn: 'Actively underway following the 27/05/2026 groundbreaking. Construction site is accelerating subterranean and foundation packages.',
    actionVi: 'Quan sát thực tế tiến độ công trường. Biên bản nghiệm thu phần móng là tài liệu quan trọng bạn cần kiểm tra trước khi ký hợp đồng.',
    actionEn: 'Observe tangible site progress. The foundation acceptance minutes document is critical before entering sales contracts.',
  },
  {
    step: 5,
    phase: 3,
    titleVi: 'Văn bản đủ điều kiện bán của Sở Xây dựng',
    titleEn: 'Sales Eligibility Certificate by Dept. of Construction',
    statusVi: 'Chờ nghiệm thu móng',
    statusEn: 'Pending Foundation Inspection',
    statusType: 'upcoming',
    lawVi: 'Sở Xây dựng kiểm tra thực tế và cấp văn bản xác nhận dự án đủ điều kiện mở bán nhà ở hình thành trong tương lai.',
    lawEn: 'Department of Construction conducts on-site audits and issues written certification confirming statutory commercial sales eligibility.',
    realityVi: 'Chưa có (theo đúng trình tự sau khi hoàn thành phần móng).',
    realityEn: 'Pending (in compliance with legal sequential procedures following foundation completion).',
    actionVi: 'Chưa có văn bản này thì chưa ký Hợp đồng mua bán. Giai đoạn này người mua chỉ nên dừng ở mức tìm hiểu, giữ chỗ có thỏa thuận bảo toàn.',
    actionEn: 'Do not sign sales contracts prior to this written approval. In this stage, prospective buyers should focus on reservation agreements with clear preservation terms.',
  },
  {
    step: 6,
    phase: 3,
    titleVi: 'Bảo lãnh ngân hàng cho nghĩa vụ bàn giao',
    titleEn: 'Bank Guarantee for Handover Obligations',
    statusVi: 'Cấp khi ký HĐMB',
    statusEn: 'Issued upon Sales Contract',
    statusType: 'upcoming',
    lawVi: 'Ngân hàng thương mại đủ năng lực phát hành chứng thư bảo lãnh tài chính bồi thường nếu chủ đầu tư không bàn giao nhà đúng hạn.',
    lawEn: 'A qualified commercial bank issues financial guarantee certificates ensuring compensation if the developer fails to deliver on schedule.',
    realityVi: 'Sẽ phát hành đích danh cho từng khách hàng khi ký kết Hợp đồng mua bán.',
    realityEn: 'To be issued individually under each homeowner’s name upon execution of the official Sales and Purchase Agreement.',
    actionVi: 'Yêu cầu cấp chứng thư bảo lãnh riêng cho chính căn hộ của bạn, không nhầm lẫn với hợp đồng bảo lãnh nguyên tắc chung của dự án.',
    actionEn: 'Demand an individual guarantee letter specific to your unit rather than merely a general master framework agreement.',
  },
]

// 3 Văn Bản Gốc (Official Documents)
interface OfficialDoc {
  id: number
  pageCount: string
  badge: string
  titleVi: string
  titleEn: string
  docCode: string
  issueDate: string
  issuer: string
  signer: string
  summaryVi: string
  summaryEn: string
  imageSrc: string
}

const OFFICIAL_DOCS: OfficialDoc[] = [
  {
    id: 1,
    pageCount: '13 trang · Bản scan chính thức',
    badge: 'Công văn Sở Xây dựng',
    titleVi: 'Thông báo kết quả thẩm định Báo cáo nghiên cứu khả thi',
    titleEn: 'Feasibility Study Appraisal Notice',
    docCode: '1155/SXD-QLHĐ&VLXD',
    issueDate: '26/05/2026',
    issuer: 'Sở Xây dựng tỉnh Đồng Nai',
    signer: 'Phó Giám đốc Đỗ Thành Phương',
    summaryVi: 'Văn bản dài nhất và có sức nặng nhất trong bộ hồ sơ: cơ quan quản lý nhà nước xác nhận hồ sơ dự án đủ điều kiện để phê duyệt, đồng thời liệt kê toàn bộ căn cứ pháp lý về đầu tư, quy hoạch, đất đai và đấu nối mà dự án đang đứng trên.',
    summaryEn: 'The most comprehensive state document: confirming project eligibility for statutory approval, cataloging foundational investment, planning, and utility connection benchmarks.',
    imageSrc: '/tai-lieu-phap-ly/thong-bao-tham-dinh-1155-sxd/trang-01.webp',
  },
  {
    id: 2,
    pageCount: '1 trang · Văn bản pháp lý',
    badge: 'Thông báo của Bcons',
    titleVi: 'Thông báo về thông tin triển khai dự án',
    titleEn: 'Project Development Information Notice',
    docCode: '13/TB-BCONS',
    issueDate: '19/08/2026',
    issuer: 'Công ty Cổ phần Đầu tư Xây dựng Bcons',
    signer: 'GĐ Khối Tài chính Kinh doanh Lê Vũ Linh',
    summaryVi: 'Xác thực pháp nhân: dự án thuộc chủ sở hữu Công ty Cổ phần Phát triển Đô thị Tam Hiệp, còn Bcons là bên triển khai và phát triển sản phẩm. Văn bản giúp khách hàng đối chiếu rõ ràng giữa pháp nhân chủ đầu tư và thương hiệu thi công.',
    summaryEn: 'Corporate entity transparency: clarifying Tam Hiep Urban Development JSC as legal project owner and Bcons Group as turnkey developer and distributor.',
    imageSrc: '/tai-lieu-phap-ly/thong-bao-trien-khai-du-an/trang-01.webp',
  },
  {
    id: 3,
    pageCount: '1 trang · Cam kết chính thức',
    badge: 'Công văn chủ đầu tư',
    titleVi: 'Bảng cam kết tên dự án thương mại & pháp lý',
    titleEn: 'Official Project Name Commitment',
    docCode: '01/CV-ĐTTH',
    issueDate: '19/08/2026',
    issuer: 'Công ty Cổ phần Phát triển Đô thị Tam Hiệp',
    signer: 'Tổng Giám đốc Nguyễn Quang Thắng',
    summaryVi: 'Chủ đầu tư cam kết bằng văn bản: "Bcons Central Park" là tên thương mại chính thức của dự án có tên pháp lý "Khu nhà ở phức hợp cao tầng phường Tam Hiệp", loại bỏ mọi nghi vấn về việc khác biệt tên gọi khi làm thủ tục sau này.',
    summaryEn: 'Formal written undertaking certifying "Bcons Central Park" as commercial identity of legal project "Tam Hiep High-rise Complex Residential Area".',
    imageSrc: '/tai-lieu-phap-ly/cam-ket-ten-du-an/trang-01.webp',
  },
]

// 4 Quyền Hợp Pháp Của Người Mua Nhà
const BUYER_RIGHTS = [
  {
    titleVi: 'Quyền xem bản gốc hồ sơ pháp lý',
    titleEn: 'Right to Inspect Original Legal Dossiers',
    descVi: 'Được xem trực tiếp bản chính có dấu đỏ hoặc bản scan có chứng thực tại văn phòng bán hàng, không chấp nhận ảnh chụp mờ trên điện thoại.',
    descEn: 'Directly examine original wet-ink stamped documents or notarized scans at official sales galleries without accepting low-res mobile photos.',
    tipVi: 'Khuyến nghị: Đối chiếu kỹ số quyết định và cơ quan ký duyệt trước khi ký.',
    tipEn: 'Advice: Carefully cross-reference decision numbers and state signatory agencies.',
  },
  {
    titleVi: 'Quyền giữ và đọc kỹ dự thảo HĐMB',
    titleEn: 'Right to Retain & Review Draft Contracts',
    descVi: 'Được mang bản dự thảo hợp đồng về nghiên cứu trước khi ký; đối chiếu điều khoản phạt chậm bàn giao, tiêu chuẩn bàn giao và tiến độ ra sổ.',
    descEn: 'Entitled to take draft contracts home for legal review; checking late penalty clauses, handover specs, and title deed timelines.',
    tipVi: 'Khuyến nghị: Không nên chịu áp lực "ký ngay trong ngày để giữ suất ưu đãi".',
    tipEn: 'Advice: Never yield to sales pressure to rush-sign on the same day.',
  },
  {
    titleVi: 'Quyền nhận chứng thư bảo lãnh riêng',
    titleEn: 'Right to Individual Bank Guarantee',
    descVi: 'Ngân hàng có trách nhiệm phát hành bảo lãnh tài chính cho từng khách hàng. Chứng thư phải ghi rõ mã căn hộ và giá trị bồi hoàn nếu trễ hẹn.',
    descEn: 'Banks are obligated to issue named financial guarantees indicating unit codes and specific indemnification values upon delays.',
    tipVi: 'Khuyến nghị: Yêu cầu cung cấp chứng thư bản riêng cho căn của bạn khi ký HĐMB.',
    tipEn: 'Advice: Request an individualized certificate registered to your specific unit.',
  },
  {
    titleVi: 'Quyền không nộp tiền vượt trần luật định',
    titleEn: 'Right to Strict Statutory Payment Caps',
    descVi: 'Luật Kinh doanh BĐS quy định rõ mức thu tối đa ở từng giai đoạn (không quá 5% khi đặt cọc, không quá 30% khi ký HĐMB, không quá 70% trước khi nhận nhà).',
    descEn: 'Real Estate Business Law mandates clear caps: max 5% deposit, max 30% upon sales contract, max 70% cumulative prior to key handover.',
    tipVi: 'Khuyến nghị: Xem chi tiết quy định trần thanh toán & chính sách thanh toán.',
    tipEn: 'Advice: Review statutory payment schedules & bank loan procedures.',
  },
]

// =============================================================================
// 2. MAIN LEGAL DETAIL COMPONENT
// =============================================================================

export function LegalDetail() {
  const { theme, locale, t, openConsultation } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  // Pillars & data
  const pillars = isEn ? LEGAL_PILLARS_EN : LEGAL_PILLARS_VI

  // Lightbox Document Reader State
  const [activeDoc, setActiveDoc] = useState<OfficialDoc | null>(null)
  const [docZoom, setDocZoom] = useState<number>(1)

  // Handle modal keyboard Esc and overflow lock
  useEffect(() => {
    if (!activeDoc) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDoc(null)
        setDocZoom(1)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [activeDoc])

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. HERO BANNER: LUXURY DARK GRADIENT OVER /images/project-towers.jpg     */}
      {/* ========================================================================= */}
      <section className="relative isolate overflow-hidden min-h-[460px] md:min-h-[500px] flex items-center pt-28 pb-14 md:pt-36 md:pb-20 transition-colors">
        {/* Background Image */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: "url('/images/project-towers.jpg')" }}
          role="img"
          aria-label={isEn ? 'Bcons Central Park Legal Dossier' : 'Pháp lý Bcons Central Park'}
        />

        {/* Forest Emerald Cinematic Gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#072018]/95 via-[#072018]/85 to-[#072018]/70 dark:from-[#04140e]/98 dark:via-[#072018]/90 dark:to-[#04140e]/85 backdrop-blur-[1px]" />

        {/* Champagne Gold Glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#e6c887]/20 to-transparent blur-3xl opacity-60" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Đường dẫn" className="flex items-center gap-2 text-xs sm:text-sm text-white/75">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[#e6c887] font-medium"
            >
              <Home className="size-3.5" />
              {t.nav.home}
            </Link>
            <ChevronRight className="size-3.5 text-white/40" />
            <span className="text-[#e6c887] font-semibold">{t.nav.legal}</span>
          </nav>

          {/* Heading and Intro */}
          <Reveal delay={0.06}>
            <div className="mt-6 max-w-3xl">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#e6c887] mb-2">
                BCONS CENTRAL PARK
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase leading-tight">
                {isEn ? 'Legal Dossier of Bcons Central Park Tam Hiep' : 'Pháp Lý Dự Án Bcons Central Park Tam Hiệp'}
              </h1>
              <p className="mt-2 font-serif italic text-xl sm:text-2xl text-[#e6c887] font-semibold tracking-wide">
                {isEn ? 'Long-term Freehold — Absolute Transparency' : 'Sổ hồng lâu dài – Pháp lý rõ ràng'}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-white/70 font-sans">
                <span>Cập nhật ngày 05/09/2026</span>
                <span className="text-white/30">·</span>
                <span>Biên soạn bởi <strong className="text-white font-semibold">Lê Ngọc Long</strong></span>
                <span className="text-white/30">·</span>
                <span className="inline-flex items-center gap-1 text-[#e6c887]">
                  <CheckCircle2 className="size-3.5" />
                  Quy trình biên tập kiểm chứng
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INTRODUCTORY TRUST TEXT & 4 PILLARS (Matching media_1788984016707.png) */}
      {/* ========================================================================= */}
      <section className="bg-background pt-14 pb-10 sm:pt-18 sm:pb-14 transition-colors border-b border-border/60 dark:border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Trust Statement */}
          <Reveal>
            <div className="max-w-4xl space-y-4 font-sans text-sm sm:text-base leading-relaxed text-foreground/90 dark:text-white/90">
              <p>
                Pháp lý là yếu tố an toàn hàng đầu khi tìm hiểu căn hộ hình thành trong tương lai: <strong>Bcons Central Park Tam Hiệp</strong> được phát triển trên quỹ đất trúng đấu giá, hình thức sở hữu dự kiến là <strong>sổ hồng sở hữu lâu dài (áp dụng cho người Việt Nam)</strong>.
              </p>
              <p className="text-muted-foreground">
                Để bảo vệ quyền lợi người mua, mọi thông tin dưới đây đều được dẫn chiếu trực tiếp từ văn bản nhà nước có thẩm quyền (Sở Xây dựng tỉnh Đồng Nai, UBND phường Tam Hiệp). Bạn có thể đối chiếu trực tiếp bản chụp chính thức hoặc kiểm tra chéo với uy tín chủ đầu tư Bcons và tiến độ thi công thực tế tại công trường.
              </p>
            </div>
          </Reveal>

          {/* 4 Pillars Header */}
          <Reveal delay={0.08} className="mt-12 sm:mt-14">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-border/70 pb-3 dark:border-white/10">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b88728] dark:text-[#e6c887]">
                  TÓM TẮT NHANH
                </span>
                <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold tracking-tight text-foreground dark:text-white">
                  {isEn ? '4 Core Pillars of Project Legal Safety' : '4 Trụ cột an toàn pháp lý dự án'}
                </h2>
              </div>
              <span className="font-sans text-xs text-muted-foreground">
                Dữ liệu kiểm chứng ngày 04/09/2026
              </span>
            </div>

            {/* 4 Pillar Cards */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-[#e6c887]/60 hover:shadow-md dark:border-white/10 dark:bg-card/85 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-muted-foreground">
                        {pillar.label}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[11px] font-sans font-semibold border ${
                          pillar.statusType === 'success'
                            ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:bg-emerald-500/20 dark:text-emerald-400'
                            : 'bg-[#e6c887]/20 text-[#b88728] border-[#e6c887]/40 dark:text-[#e6c887]'
                        }`}
                      >
                        {pillar.status}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground dark:text-white leading-snug">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-xs font-sans text-muted-foreground leading-relaxed">
                    {pillar.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SÁU BƯỚC PHÁP LÝ CHUẨN (Matching media_1788984037042.png)              */}
      {/* ========================================================================= */}
      <section id="sau-buoc-phap-ly" className="bg-secondary/30 dark:bg-card/30 py-16 sm:py-20 lg:py-24 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b88728] dark:text-[#e6c887]">
                LỘ TRÌNH THẨM ĐỊNH
              </span>
              <h2 className="mt-1 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-foreground dark:text-white">
                {isEn
                  ? 'Six Standard Legal Steps — Where is Bcons Central Park?'
                  : 'Sáu Bước Pháp Lý Chuẩn — Bcons Central Park Đang Ở Đâu?'}
              </h2>
              <p className="mt-3 font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
                Pháp lý bất động sản là một quy trình nối tiếp theo luật định. Biết chính xác dự án đang ở bước nào giúp bạn xác định đúng thời điểm và mức tiền hợp lý để xuống tiền.
              </p>
            </div>
          </Reveal>

          {/* 3 Phase Badges in a Horizontal Row */}
          <Reveal delay={0.08} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
              {/* Phase 1 */}
              <div className="rounded-2xl border-2 border-emerald-500/30 bg-emerald-500/5 p-4 sm:p-5 flex items-start gap-3.5 dark:bg-emerald-950/20">
                <span className="flex size-7 items-center justify-center rounded-full bg-emerald-500 text-white shrink-0 mt-0.5 shadow-sm">
                  <CheckCircle2 className="size-4 stroke-[2.5]" />
                </span>
                <div>
                  <h4 className="font-sans font-bold text-xs sm:text-sm text-foreground dark:text-white uppercase tracking-wide">
                    PHA 1: ĐẤT ĐAI & QUY HOẠCH
                  </h4>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Bước 1 – 3: Đã hoàn tất 100% các thủ tục gốc
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="rounded-2xl border-2 border-[#e6c887] bg-[#e6c887]/10 p-4 sm:p-5 flex items-start gap-3.5 dark:bg-[#e6c887]/15 shadow-sm">
                <span className="flex size-7 items-center justify-center rounded-full bg-[#e6c887] text-[#072018] font-bold text-xs shrink-0 mt-0.5 shadow-sm">
                  4
                </span>
                <div>
                  <h4 className="font-sans font-bold text-xs sm:text-sm text-foreground dark:text-white uppercase tracking-wide">
                    PHA 2: XÂY DỰNG THỰC TẾ
                  </h4>
                  <p className="mt-0.5 text-xs text-muted-foreground font-medium">
                    Bước 4: Đang thi công hầm móng tại công trường
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="rounded-2xl border border-border bg-card/60 p-4 sm:p-5 flex items-start gap-3.5 dark:border-white/10 dark:bg-card/60 opacity-80">
                <span className="flex size-7 items-center justify-center rounded-full bg-slate-200 text-slate-600 font-bold text-[11px] shrink-0 mt-0.5 dark:bg-white/10 dark:text-white/70">
                  5-6
                </span>
                <div>
                  <h4 className="font-sans font-bold text-xs sm:text-sm text-foreground dark:text-white uppercase tracking-wide">
                    PHA 3: ĐỦ ĐIỀU KIỆN BÁN
                  </h4>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Bước 5 – 6: Chờ nghiệm thu móng để ký HĐMB
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 6 Step Detailed Cards (2 columns on desktop) */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            {LEGAL_STEPS.map((stepItem, index) => {
              const isCompleted = stepItem.statusType === 'completed'
              const isOngoing = stepItem.statusType === 'ongoing'

              return (
                <Reveal key={stepItem.step} delay={0.05 * index}>
                  <div
                    className={`rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between h-full dark:bg-card/85 ${
                      isOngoing
                        ? 'border-[#e6c887] ring-1 ring-[#e6c887]/40'
                        : isCompleted
                        ? 'border-border dark:border-white/10'
                        : 'border-border/60 dark:border-white/5 opacity-85'
                    }`}
                  >
                    <div>
                      {/* Top Step Header */}
                      <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-border/70 dark:border-white/10">
                        <div className="flex items-center gap-3">
                          <span
                            className={`flex size-8 shrink-0 items-center justify-center rounded-full font-sans font-bold text-xs ${
                              isCompleted
                                ? 'bg-emerald-500/15 text-emerald-600 dark:bg-emerald-500/25 dark:text-emerald-400'
                                : isOngoing
                                ? 'bg-[#e6c887] text-[#072018]'
                                : 'bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-white/60'
                            }`}
                          >
                            {stepItem.step}
                          </span>
                          <h3 className="font-serif text-base sm:text-lg font-bold text-foreground dark:text-white leading-tight">
                            {isEn ? stepItem.titleEn : stepItem.titleVi}
                          </h3>
                        </div>

                        {/* Status Badge */}
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-sans font-semibold shrink-0 border ${
                            isCompleted
                              ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:bg-emerald-500/20 dark:text-emerald-400'
                              : isOngoing
                              ? 'bg-[#e6c887]/20 text-[#b88728] border-[#e6c887]/50 dark:text-[#e6c887]'
                              : 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-white/5 dark:text-white/60 dark:border-white/10'
                          }`}
                        >
                          {isEn ? stepItem.statusEn : stepItem.statusVi}
                        </span>
                      </div>

                      {/* Content Blocks */}
                      <div className="mt-4 space-y-3 font-sans text-xs sm:text-sm">
                        {/* QUY ĐỊNH LUẬT */}
                        <div className="rounded-xl bg-secondary/40 p-3 text-muted-foreground dark:bg-white/5">
                          <span className="block text-[11px] font-bold uppercase tracking-wider text-foreground/80 dark:text-white/80 mb-1">
                            QUY ĐỊNH LUẬT
                          </span>
                          <p className="leading-relaxed">
                            {isEn ? stepItem.lawEn : stepItem.lawVi}
                          </p>
                        </div>

                        {/* THỰC TẾ TẠI BCONS CENTRAL PARK */}
                        <div className="border-l-3 border-primary/50 dark:border-[#e6c887] pl-3 py-0.5">
                          <span className="block text-[11px] font-bold uppercase tracking-wider text-primary dark:text-[#e6c887] mb-0.5">
                            THỰC TẾ TẠI BCONS CENTRAL PARK
                          </span>
                          <p className="text-foreground dark:text-white/90 leading-relaxed">
                            {isEn ? stepItem.realityEn : stepItem.realityVi}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Action Advice Box */}
                    <div className="mt-4 pt-3.5 border-t border-border/60 dark:border-white/5 flex items-start gap-2 text-xs font-sans">
                      <span className="shrink-0 text-base" role="img" aria-label="Khuyến nghị">
                        💡
                      </span>
                      <p className="leading-relaxed text-muted-foreground">
                        <strong className="text-foreground dark:text-white font-semibold">Việc của bạn:</strong>{' '}
                        {isEn ? stepItem.actionEn : stepItem.actionVi}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. BA VĂN BẢN GỐC, ĐỌC NGAY TẠI ĐÂY (Document Scans & Reader)            */}
      {/* ========================================================================= */}
      <section id="van-ban-goc" className="bg-background py-16 sm:py-20 lg:py-24 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b88728] dark:text-[#e6c887]">
                HỒ SƠ GỐC ĐỐI CHIẾU
              </span>
              <h2 className="mt-1 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-foreground dark:text-white">
                {isEn ? 'Three Primary State Documents' : 'Ba Văn Bản Gốc, Đọc Ngay Tại Đây'}
              </h2>
              <p className="mt-3 font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
                Minh bạch 100% tài liệu có con dấu và số hiệu từ cơ quan nhà nước. Bấm vào từng văn bản để đọc bản scan khổ lớn đối chiếu thực tế.
              </p>
            </div>
          </Reveal>

          {/* 3 Document Cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFFICIAL_DOCS.map((doc, idx) => (
              <Reveal key={doc.id} delay={0.06 * idx}>
                <div className="group h-full flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#e6c887]/60 hover:shadow-xl dark:border-white/10 dark:bg-card/85">
                  {/* Document Scan Thumbnail */}
                  <div
                    onClick={() => {
                      setActiveDoc(doc)
                      setDocZoom(1)
                    }}
                    className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900/5 cursor-pointer border-b border-border/60 dark:border-white/5"
                  >
                    <img
                      src={doc.imageSrc}
                      alt={doc.titleVi}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e6c887] px-4 py-2 text-xs font-sans font-bold text-[#072018] shadow-lg">
                        <Eye className="size-3.5 stroke-[2.5]" />
                        Đọc văn bản gốc
                      </span>
                    </div>
                    {/* Badge top left */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="rounded-md bg-[#072018]/85 text-white px-2.5 py-1 text-[10px] font-sans font-semibold backdrop-blur-sm">
                        {doc.pageCount}
                      </span>
                    </div>
                  </div>

                  {/* Document Content */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between font-sans">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#b88728] dark:text-[#e6c887]">
                        {doc.badge}
                      </span>
                      <h3 className="mt-1 font-serif text-lg font-bold text-foreground dark:text-white leading-snug">
                        {isEn ? doc.titleEn : doc.titleVi}
                      </h3>

                      {/* Document Details Table */}
                      <div className="mt-4 space-y-1.5 text-xs text-muted-foreground border-y border-border/60 dark:border-white/5 py-3">
                        <div className="flex justify-between">
                          <span>Số văn bản:</span>
                          <strong className="text-foreground dark:text-white font-semibold">{doc.docCode}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>Ngày ban hành:</span>
                          <span className="text-foreground dark:text-white">{doc.issueDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Cơ quan:</span>
                          <span className="text-foreground dark:text-white text-right">{doc.issuer}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Người ký:</span>
                          <span className="text-foreground dark:text-white text-right">{doc.signer}</span>
                        </div>
                      </div>

                      <p className="mt-3 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                        {isEn ? doc.summaryEn : doc.summaryVi}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveDoc(doc)
                        setDocZoom(1)
                      }}
                      className="mt-5 w-full rounded-xl border border-[#e6c887]/60 bg-[#e6c887]/15 py-2.5 text-xs font-sans font-bold uppercase tracking-wider text-foreground hover:bg-[#e6c887] hover:text-[#072018] dark:text-[#e6c887] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <Eye className="size-3.5" />
                      <span>{isEn ? 'View Official Document' : 'Xem Văn Bản'}</span>
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Callout Lead Form Banner: Nhận trọn bộ 13 trang */}
          <Reveal delay={0.1} className="mt-10 sm:mt-12">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#e6c887]/40 bg-[#072018] p-6 sm:p-8 text-white shadow-xl dark:bg-[#061913]">
              <div className="pointer-events-none absolute -top-16 -right-16 size-48 rounded-full bg-[#e6c887]/20 blur-3xl" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="max-w-2xl text-center lg:text-left">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#e6c887]">
                    <Sparkles className="size-3.5" />
                    HỒ SƠ ĐẦY ĐỦ CÓ DẤU ĐỎ
                  </span>
                  <h3 className="mt-1 font-serif text-xl sm:text-2xl lg:text-3xl font-bold uppercase text-white">
                    Đăng ký nhận trọn bộ 13 trang văn bản pháp lý
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
                    Bao gồm toàn văn Báo cáo thẩm định 1155/SXD, Quyết định giao đất, Bản đồ quy hoạch 1/500 và phụ lục điều khoản cam kết bàn giao sổ hồng.
                  </p>
                </div>

                <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-3 font-sans shrink-0">
                  <button
                    type="button"
                    onClick={() =>
                      openConsultation({
                        source: 'Trang Pháp Lý - Nhận trọn bộ 13 trang văn bản nhà nước',
                        unitType: 'all',
                      })
                    }
                    className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-[#e6c887] via-[#f7e4b5] to-[#e6c887] px-6 py-3 text-xs sm:text-sm font-sans font-bold uppercase tracking-wider text-[#072018] shadow-md transition-all hover:scale-[1.02] cursor-pointer shrink-0 flex items-center justify-center gap-2"
                  >
                    <FileText className="size-4" />
                    <span>{isEn ? 'Request Full Dossier (PDF)' : 'Đăng ký nhận hồ sơ đầy đủ'}</span>
                  </button>

                  <a
                    href="tel:0376671776"
                    className="w-full sm:w-auto rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 px-5 py-3 text-xs sm:text-sm font-sans font-semibold text-white transition-colors shrink-0 flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="size-4 text-[#e6c887]" />
                    <span>0376 671 776</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. BỐN QUYỀN HỢP PHÁP NGƯỜI MUA NHÀ NÊN DÙNG TỚI                         */}
      {/* ========================================================================= */}
      <section className="bg-secondary/30 dark:bg-card/30 py-16 sm:py-20 lg:py-24 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b88728] dark:text-[#e6c887]">
                CẨM NANG KHÁCH HÀNG
              </span>
              <h2 className="mt-1 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-foreground dark:text-white">
                {isEn ? 'Four Legal Rights Home Buyers Must Exercise' : 'Bốn Quyền Hợp Pháp Người Mua Nhà Nên Dùng Tới'}
              </h2>
              <p className="mt-3 font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
                Yêu cầu hồ sơ pháp lý minh bạch không phải là xin một đặc quyền, mà là quyền lợi hợp pháp của người mua được luật pháp bảo vệ. Chủ đầu tư chuẩn mực sẽ luôn sẵn sàng cung cấp.
              </p>
            </div>
          </Reveal>

          {/* 4 Rights Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BUYER_RIGHTS.map((right, idx) => (
              <Reveal key={idx} delay={0.05 * idx}>
                <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm flex flex-col justify-between h-full dark:border-white/10 dark:bg-card/85 hover:border-[#e6c887]/50 transition-colors">
                  <div>
                    <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-[#e6c887]/20 dark:text-[#e6c887] font-bold text-sm mb-4">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-foreground dark:text-white leading-snug">
                      {isEn ? right.titleEn : right.titleVi}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm font-sans text-muted-foreground leading-relaxed">
                      {isEn ? right.descEn : right.descVi}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/60 dark:border-white/5 text-[11px] sm:text-xs font-sans text-[#b88728] dark:text-[#e6c887]">
                    {isEn ? right.tipEn : right.tipVi}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Transparency Principles Callout Box */}
          <Reveal delay={0.1} className="mt-10 sm:mt-12">
            <div className="rounded-2xl sm:rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm dark:border-white/10 dark:bg-card/80">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="size-5 text-emerald-500" />
                <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground dark:text-white">
                  Nguyên tắc công bố thông tin pháp lý trên trang này
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground font-sans mb-4 leading-relaxed">
                Chúng tôi cam kết không dùng ảnh minh hoạ chung chung làm ảnh hưởng tới việc đánh giá pháp lý của bạn:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-sans">
                <div className="p-3 rounded-xl bg-secondary/40 dark:bg-white/5">
                  <strong className="block text-foreground dark:text-white mb-1">✓ Bản scan thật</strong>
                  <span className="text-muted-foreground">3 văn bản chính có đầy đủ số hiệu, ngày ký, con dấu và mở xem trực tiếp.</span>
                </div>
                <div className="p-3 rounded-xl bg-secondary/40 dark:bg-white/5">
                  <strong className="block text-foreground dark:text-white mb-1">✓ Chỉ dẫn nguồn gốc</strong>
                  <span className="text-muted-foreground">Các văn bản khác được trích lục chính xác từ công văn 1155 của Sở Xây dựng.</span>
                </div>
                <div className="p-3 rounded-xl bg-secondary/40 dark:bg-white/5">
                  <strong className="block text-foreground dark:text-white mb-1">✓ Trung thực trạng thái</strong>
                  <span className="text-muted-foreground">Văn bản chưa có được ghi đúng là "chưa có", tuyệt đối không thổi phồng.</span>
                </div>
                <div className="p-3 rounded-xl bg-secondary/40 dark:bg-white/5">
                  <strong className="block text-foreground dark:text-white mb-1">✓ Kiểm chứng độc lập</strong>
                  <span className="text-muted-foreground">Luôn khuyến khích khách hàng đối chiếu bản chính trước khi giao dịch.</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FULLSCREEN DOCUMENT READER LIGHTBOX MODAL                              */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activeDoc !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex flex-col justify-between p-3 sm:p-6 bg-[#041510]/95 backdrop-blur-xl"
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between w-full max-w-6xl mx-auto z-20 gap-3">
              <div>
                <span className="font-serif font-bold text-sm sm:text-base text-[#e6c887]">
                  {activeDoc.docCode} · {activeDoc.titleVi}
                </span>
                <p className="font-sans text-xs text-white/70">
                  {activeDoc.issuer} — Ban hành ngày {activeDoc.issueDate}
                </p>
              </div>

              {/* Zoom Controls */}
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 border border-white/20">
                  <button
                    onClick={() => setDocZoom((z) => Math.max(z - 0.25, 0.75))}
                    type="button"
                    aria-label="Thu nhỏ"
                    className="p-1 hover:text-[#e6c887] text-white transition-colors cursor-pointer"
                  >
                    <ZoomOut className="size-4" />
                  </button>
                  <span className="text-xs font-mono text-white/80 w-12 text-center">
                    {Math.round(docZoom * 100)}%
                  </span>
                  <button
                    onClick={() => setDocZoom((z) => Math.min(z + 0.25, 2.5))}
                    type="button"
                    aria-label="Phóng to"
                    className="p-1 hover:text-[#e6c887] text-white transition-colors cursor-pointer"
                  >
                    <ZoomIn className="size-4" />
                  </button>
                  <button
                    onClick={() => setDocZoom(1)}
                    type="button"
                    aria-label="Đặt lại kích thước"
                    className="p-1 hover:text-[#e6c887] text-white transition-colors ml-1 border-l border-white/20 pl-2 cursor-pointer"
                  >
                    <RotateCcw className="size-3.5" />
                  </button>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => {
                    setActiveDoc(null)
                    setDocZoom(1)
                  }}
                  type="button"
                  aria-label="Đóng văn bản"
                  className="size-10 sm:size-11 rounded-full bg-[#f5b82e] hover:bg-[#e2a623] text-[#072018] flex items-center justify-center font-bold shadow-xl transition-transform hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                >
                  <X className="size-5 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Modal Image Viewport */}
            <div className="my-auto w-full max-w-4xl mx-auto z-10 flex items-center justify-center overflow-auto max-h-[76vh] py-2">
              <motion.div
                style={{ transform: `scale(${docZoom})`, transition: 'transform 0.2s ease-out' }}
                className="flex items-center justify-center max-h-[76vh]"
              >
                <img
                  src={activeDoc.imageSrc}
                  alt={activeDoc.titleVi}
                  className="max-h-[76vh] w-auto h-auto rounded-xl object-contain shadow-2xl border border-white/10"
                />
              </motion.div>
            </div>

            {/* Modal Bottom Caption */}
            <div className="text-center z-10 max-w-3xl mx-auto px-4 font-sans text-xs text-white/80">
              Văn bản được phát hành chính thức bởi {activeDoc.issuer}. Khách hàng có quyền yêu cầu đối chiếu bản gốc có con dấu đỏ trực tiếp tại văn phòng CĐT Bcons.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
