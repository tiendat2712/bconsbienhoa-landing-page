'use client'

import { useState, useEffect } from 'react'
import {
  ChevronRight,
  Maximize2,
  Percent,
  Building2,
  Clock,
  Sparkles,
  AlertTriangle,
  ArrowDownCircle,
  ChevronLeft,
  Info,
  X,
  ExternalLink,
  Home,
  CheckCircle2,
  MessageSquareQuote,
  Scale,
} from 'lucide-react'
import Link from 'next/link'
import { Reveal } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'


interface PaymentMethod {
  id: string
  number: string
  title: string
  meta: string
  badge: string
  depositToContract: string
  installments: string
  disbursement: string
  scheduleDetail: string
  suitableFor: string
  image: string
}

export function PricingDetail() {
  const { theme, locale, t, openConsultation } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  const [activeDiagramIndex, setActiveDiagramIndex] = useState<number | null>(null)

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activeDiagramIndex === null) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveDiagramIndex(null)
      if (e.key === 'ArrowLeft') {
        setActiveDiagramIndex((prev) => (prev !== null ? (prev === 0 ? 2 : prev - 1) : null))
      }
      if (e.key === 'ArrowRight') {
        setActiveDiagramIndex((prev) => (prev !== null ? (prev === 2 ? 0 : prev + 1) : null))
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeDiagramIndex])

  // Sub-navigation pills (matching media_1788977662487.png)
  const navPills = isEn
    ? [
        { label: 'PRICE TABLE', href: '#bang-gia' },
        { label: 'SALES POLICIES', href: '#chinh-sach' },
        { label: 'PAYMENT METHODS', href: '#phuong-thuc' },
        { label: 'PAYMENT MILESTONES', href: '#cac-dot-thanh-toan' },
        { label: 'BANK LOAN SUPPORT', href: '#ho-tro-vay-ngan-hang' },
        { label: 'DIRECT CONSULTATION', href: '#tu-van' },
      ]
    : [
        { label: 'BẢNG GIÁ CĂN HỘ', href: '#bang-gia' },
        { label: 'CHÍNH SÁCH BÁN HÀNG', href: '#chinh-sach' },
        { label: 'PHƯƠNG THỨC THANH TOÁN', href: '#phuong-thuc' },
        { label: 'CÁC ĐỢT THANH TOÁN', href: '#cac-dot-thanh-toan' },
        { label: 'HỖ TRỢ VAY NGÂN HÀNG', href: '#ho-tro-vay-ngan-hang' },
        { label: 'TƯ VẤN TRỰC TIẾP CĐT', href: '#tu-van' },
      ]

  // 5 Payment Milestones (from user screenshot media_1788977707771.png)
  const paymentMilestones = isEn
    ? [
        {
          step: 1,
          title: 'Reservation / Deposit',
          phase: 'Introduction phase, prior to sales qualification certificate',
          legalNote: 'Specific amount to be officially announced',
        },
        {
          step: 2,
          title: 'Sale & Purchase Agreement (SPA)',
          phase: 'When project obtains official sales qualification document',
          legalNote: 'Statutory cap: Maximum 30% contract value (including deposit)',
        },
        {
          step: 3,
          title: 'Construction Progress Installments',
          phase: 'From SPA signing until handover phase',
          legalNote:
            'Rates depend on method: 8 installments of 5–10% (Method 01), or 50% bank disbursement (Methods 02, 03)',
        },
        {
          step: 4,
          title: 'Apartment Handover',
          phase: 'Estimated Quarter II/2029',
          legalNote: 'Statutory cap: Total collections prior to handover ≤ 70% contract value',
        },
        {
          step: 5,
          title: 'Pink Book Issuance',
          phase: 'Typically 6 – 12 months post-handover per developer schedule',
          legalNote: 'Statutory cap: Without title deed, maximum collection ≤ 95% contract value',
        },
      ]
    : [
        {
          step: 1,
          title: 'Giữ chỗ / đặt cọc',
          phase: 'Giai đoạn giới thiệu, trước khi có văn bản đủ điều kiện bán',
          legalNote: 'Chưa công bố mức cụ thể',
        },
        {
          step: 2,
          title: 'Ký hợp đồng mua bán (HĐMB)',
          phase: 'Khi dự án đã có văn bản xác nhận đủ điều kiện bán',
          legalNote: 'Trần luật: không quá 30% giá trị hợp đồng, đã gồm tiền cọc',
        },
        {
          step: 3,
          title: 'Các đợt theo tiến độ thi công',
          phase: 'Từ sau HĐMB đến trước bàn giao',
          legalNote:
            'Tỷ lệ từng đợt tuỳ phương thức: 8 đợt 5 – 10% (PT 01), hoặc một đợt giải ngân 50% từ ngân hàng (PT 02, 03)',
        },
        {
          step: 4,
          title: 'Nhận bàn giao',
          phase: 'Dự kiến Quý II/2029',
          legalNote: 'Trần luật: tổng thu trước bàn giao không quá 70% giá trị hợp đồng',
        },
        {
          step: 5,
          title: 'Nhận sổ hồng',
          phase: 'Thường 6 – 12 tháng sau bàn giao, theo thông tin chủ đầu tư',
          legalNote: 'Trần luật: chưa có sổ thì không thu quá 95% giá trị hợp đồng',
        },
      ]

  // Loan Support Bullets (from user screenshot media_1788977707771.png)
  const loanSupportBullets = isEn
    ? [
        'Partner banks provide loan packages up to 70% of apartment value',
        'Principal grace period during construction phase (awaiting official schedule)',
        'Minimum self-financed equity of ~30% apartment value, excluding VAT and 2% maintenance fee',
        'Statutory cap: Cumulative collection prior to handover shall not exceed 70% of contract value',
      ]
    : [
        'Ngân hàng đối tác hỗ trợ vay đến 70% giá trị căn hộ',
        'Ân hạn nợ gốc trong giai đoạn xây dựng (chờ công bố chính thức)',
        'Vốn tự có tối thiểu khoảng 30% giá trị căn, chưa gồm VAT và phí bảo trì 2%',
        'Trần luật: tổng thu trước bàn giao không quá 70% giá trị hợp đồng',
      ]

  // Apartment price rows
  const priceRows = isEn
    ? [
        {
          type: 'Studio',
          area: '37 – 40 m²',
          beds: '—',
          price: '1.85 – 2.00 B VND',
          suitable: 'Young professionals, buy-to-let investors with the lowest starting capital',
        },
        {
          type: '1-Bedroom',
          area: '42 – 43 m²',
          beds: '1',
          price: '2.10 – 2.15 B VND',
          suitable: 'Single professionals, young specialists for long-term lease or living',
        },
        {
          type: '2-Bedroom',
          area: '53 – 73 m²',
          beds: '2',
          price: '2.65 – 3.64 B VND',
          suitable: 'Young families, the flagship mainstream unit configuration of the project',
        },
        {
          type: '3-Bedroom',
          area: '87 – 88 m²',
          beds: '3',
          price: '4.34 – 4.39 B VND',
          suitable: 'Multi-generational families requiring spacious and comfortable living areas',
        },
      ]
    : [
        {
          type: 'Studio',
          area: '37 – 40 m²',
          beds: '—',
          price: '1,85 – 2,00 tỷ đồng',
          suitable: 'Người trẻ đi làm, mua để cho thuê với vốn ban đầu thấp nhất',
        },
        {
          type: '1 Phòng ngủ',
          area: '42 – 43 m²',
          beds: '1',
          price: '2,10 – 2,15 tỷ đồng',
          suitable: 'Người độc thân, chuyên gia trẻ thuê/ở dài hạn',
        },
        {
          type: '2 Phòng ngủ',
          area: '53 – 73 m²',
          beds: '2',
          price: '2,65 – 3,64 tỷ đồng',
          suitable: 'Gia đình trẻ, dòng sản phẩm chủ đạo của dự án',
        },
        {
          type: '3 Phòng ngủ',
          area: '87 – 88 m²',
          beds: '3',
          price: '4,34 – 4,39 tỷ đồng',
          suitable: 'Gia đình đông thành viên, cần không gian rộng rãi',
        },
      ]

  // Sales Policies KPI cards
  const kpiPolicies = isEn
    ? [
        {
          id: 'capital',
          label: 'CAPITAL UNTIL SPA SIGNING',
          value: '10 – 20 %',
          unit: 'of apartment value',
          desc: 'Depending on payment method chosen: 10% in Method 03, 20% in Methods 01 & 02.',
          icon: Percent,
        },
        {
          id: 'loan',
          label: 'LOAN SUPPORT',
          value: '70 %',
          unit: 'of apartment value',
          desc: 'Through partner banks: Vietcombank, MB Bank, ACB, Public Bank.',
          icon: Building2,
        },
        {
          id: 'grace',
          label: 'PRINCIPAL GRACE PERIOD',
          value: '24 months',
          unit: 'with interest subsidy',
          desc: 'In Method 02 — relieving financial burden during the structural construction phase.',
          icon: Clock,
        },
        {
          id: 'discount',
          label: 'DIRECT DISCOUNT',
          value: '8.5 %',
          unit: 'of apartment value',
          desc: 'In Method 01 — milestone-based progress payment without bank disbursement.',
          icon: Sparkles,
        },
      ]
    : [
        {
          id: 'capital',
          label: 'VỐN TỚI KHI KÝ HĐMB',
          value: '10 – 20 %',
          unit: 'giá trị căn hộ',
          desc: 'Tuỳ phương thức thanh toán bạn chọn. 10% ở phương thức 03, 20% ở phương thức 01 & 02.',
          icon: Percent,
        },
        {
          id: 'loan',
          label: 'HỖ TRỢ VAY',
          value: '70 %',
          unit: 'giá trị căn hộ',
          desc: 'Qua các ngân hàng đối tác của dự án: Vietcombank, MB Bank, ACB, Public Bank.',
          icon: Building2,
        },
        {
          id: 'grace',
          label: 'ÂN HẠN NỢ GỐC',
          value: '24 tháng',
          unit: 'kèm hỗ trợ lãi suất',
          desc: 'Ở phương thức 02 — giảm áp lực tài chính trong suốt giai đoạn xây dựng.',
          icon: Clock,
        },
        {
          id: 'discount',
          label: 'CHIẾT KHẤU',
          value: '8,5 %',
          unit: 'giá trị căn hộ',
          desc: 'Ở phương thức 01 — thanh toán theo tiến độ, không giải ngân ngân hàng.',
          icon: Sparkles,
        },
      ]

  // 3 Payment Methods with high-res diagram assets and meta summaries
  const paymentMethods: PaymentMethod[] = isEn
    ? [
        {
          id: 'pttt-01',
          number: '01',
          title: 'Method 01: Milestone-Based Progress Payment',
          meta: '20% to SPA signing · 12 installments · 8.5% direct discount',
          badge: '8.5% DISCOUNT',
          depositToContract: '20% (5% deposit agreement + 15% upon SPA signing)',
          installments: '12 installments',
          disbursement: 'No bank disbursement required',
          scheduleDetail: '8 subsequent installments spread from month 2 to month 18 post-SPA, 5 – 10% each.',
          suitableFor:
            'Most relaxed schedule, highest discount (8.5%). Ideal for buyers with steady accumulated cash flow who prefer not to take bank loans.',
          image: '/images/pricing/pttt-01.webp',
        },
        {
          id: 'pttt-02',
          number: '02',
          title: 'Method 02: Bank Loan with 24-Month Principal Grace',
          meta: '20% to SPA signing · 5 installments · 24-month principal grace',
          badge: '24-MONTH PRINCIPAL GRACE',
          depositToContract: '20% (5% deposit agreement + 15% upon SPA signing)',
          installments: '5 installments',
          disbursement: 'Bank disburses 50% within 15 days after SPA signing',
          scheduleDetail: 'Interest subsidy & principal grace ≤ 24 months (or until handover notice is issued).',
          suitableFor:
            '20% initial capital, remaining covered by bank. Zero principal and zero interest during construction.',
          image: '/images/pricing/pttt-02.webp',
        },
        {
          id: 'pttt-03',
          number: '03',
          title: 'Method 03: Bank Loan with 6.9%/Year Interest Cap',
          meta: '10% to SPA signing · 7 installments · 6.9%/year interest cap (48 months)',
          badge: '6.9%/YEAR INTEREST CAP (48 MOS)',
          depositToContract: '10% (5% deposit agreement + 5% upon SPA signing)',
          installments: '7 installments',
          disbursement: 'Bank disburses 50% 7 days after SPA; buyer pays 2 subsequent 5% tranches in months 2 & 4',
          scheduleDetail: 'Developer guarantees an interest rate ceiling of max 6.9%/year for 48 consecutive months.',
          suitableFor:
            'Lowest initial capital requirement across the project (only 10% to SPA). Protected against future rate hikes.',
          image: '/images/pricing/pttt-03.webp',
        },
      ]
    : [
        {
          id: 'pttt-01',
          number: '01',
          title: 'Phương thức 01: Thanh toán theo tiến độ',
          meta: '20% tới khi ký HĐMB · 12 đợt · 8,5% chiết khấu',
          badge: '8,5% CHIẾT KHẤU',
          depositToContract: '20% (5% thoả thuận đặt cọc + 15% khi ký HĐMB)',
          installments: '12 đợt',
          disbursement: 'Không có giải ngân ngân hàng',
          scheduleDetail: '8 đợt kế tiếp rải từ tháng thứ 2 đến tháng 18 sau HĐMB, mỗi đợt 5 – 10%',
          suitableFor:
            'Lịch giãn nhất, chiết khấu cao nhất (8,5%). Phù hợp khách hàng có dòng tiền tích luỹ đều đặn, không muốn vay ngân hàng.',
          image: '/images/pricing/pttt-01.webp',
        },
        {
          id: 'pttt-02',
          number: '02',
          title: 'Phương thức 02: Vay ngân hàng, ân hạn nợ gốc',
          meta: '20% tới khi ký HĐMB · 5 đợt · 24 tháng ân hạn nợ gốc',
          badge: '24 THÁNG ÂN HẠN NỢ GỐC',
          depositToContract: '20% (5% thoả thuận đặt cọc + 15% khi ký HĐMB)',
          installments: '5 đợt',
          disbursement: 'Ngân hàng giải ngân 50% trong vòng 15 ngày sau ký HĐMB',
          scheduleDetail: 'Hỗ trợ lãi suất & ân hạn nợ gốc ≤ 24 tháng (hoặc đến khi nhận thông báo bàn giao nhà)',
          suitableFor:
            'Vốn tự có 20%, phần còn lại ngân hàng lo. Được hỗ trợ lãi suất & ân hạn nợ gốc 24 tháng, không phải trả gốc + lãi trong thời gian xây dựng.',
          image: '/images/pricing/pttt-02.webp',
        },
        {
          id: 'pttt-03',
          number: '03',
          title: 'Phương thức 03: Vay ngân hàng, cam kết trần lãi suất',
          meta: '10% tới khi ký HĐMB · 7 đợt · 6,9%/năm trần lãi suất 48 tháng',
          badge: '6,9%/NĂM TRẦN LÃI SUẤT 48 THÁNG',
          depositToContract: '10% (5% thoả thuận đặt cọc + 5% khi ký HĐMB)',
          installments: '7 đợt',
          disbursement: 'Ngân hàng giải ngân 50% sau ký HĐMB 7 ngày, sau đó khách thanh toán thêm 2 đợt 5% ở tháng 2 & 4',
          scheduleDetail: 'Chủ đầu tư cam kết bảo lãnh trần lãi suất không vượt quá 6,9%/năm trong 48 tháng liên tục.',
          suitableFor:
            'Vốn ban đầu thấp nhất toàn dự án (chỉ 10% đến khi ký HĐMB). Chủ đầu tư cam kết bảo lãnh trần lãi suất không vượt quá 6,9%/năm trong 48 tháng.',
          image: '/images/pricing/pttt-03.webp',
        },
      ]

  return (
    <>
      {/* ========================================================================= */}
      {/* HERO / HEADER SECTION (LUXURY BANNER WITH /images/project-towers.jpg)     */}
      {/* ========================================================================= */}
      <section className="relative isolate overflow-hidden min-h-[440px] md:min-h-[500px] flex items-center pt-28 pb-12 md:pt-36 md:pb-16 transition-colors">
        {/* Background Image: project-towers */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: "url('/images/project-towers.jpg')" }}
          role="img"
          aria-label={isEn ? 'Bcons Central Park Towers' : 'Phối cảnh tháp căn hộ Bcons Central Park'}
        />

        {/* Cinematic Luxury Dark Gradient Overlay for high-end contrast in both Light & Dark modes */}
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#072018]/95 via-[#072018]/85 to-[#072018]/70 dark:from-[#04140e]/98 dark:via-[#072018]/90 dark:to-[#04140e]/85 backdrop-blur-[1px]"
        />

        {/* Top Champagne Gold Ambient Glow */}
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
            <span className="text-[#e6c887] font-semibold tracking-wide">
              {t.nav.pricing}
            </span>
          </nav>

          {/* Main Title and Intro matching user reference screenshot */}
          <Reveal>
            <div className="mt-6 text-left">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase drop-shadow-md">
                {isEn ? 'Bcons Central Park Pricing' : 'GIÁ BÁN BCONS CENTRAL PARK'}
              </h1>

              <p className="mt-2.5 font-serif italic text-lg sm:text-xl md:text-2xl text-[#e6c887] font-medium tracking-wide drop-shadow">
                {isEn ? 'Transparent – Reasonable – Real Value' : 'Minh bạch – Hợp lý – Giá trị thật'}
              </p>

              <p className="mt-4 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed text-white/85 font-sans font-normal drop-shadow-sm">
                {isEn
                  ? 'Officially announced unit price of 49.9 million VND/sqm wall-center area, uniformly applied across the entire inventory basket. Three flexible payment methods with initial equity of only 10 – 20% until SPA signing, partner banks support loans up to 70% of apartment value.'
                  : 'Đơn giá công bố 49,9 triệu đồng/m² diện tích tim tường, áp chung cho cả rổ hàng. Ba phương thức thanh toán với vốn tự có 10 – 20% tới khi ký hợp đồng mua bán, ngân hàng đối tác hỗ trợ vay đến 70% giá trị căn hộ.'}
              </p>
            </div>
          </Reveal>

          {/* Sub-Navigation Pills (Frosted Glass Luxury Bar) */}
          <Reveal delay={0.08}>
            <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-2.5 border-t border-white/15 pt-5">
              {navPills.map((pill) => (
                <a
                  key={pill.href}
                  href={pill.href}
                  className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[11px] sm:text-xs font-bold tracking-[0.08em] uppercase transition-all duration-200 border border-white/20 bg-white/10 text-white backdrop-blur-md hover:border-[#e6c887] hover:bg-[#e6c887]/20 hover:text-[#e6c887] shadow-sm active:scale-95"
                >
                  <span>{pill.label}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 1: BẢNG GIÁ CĂN HỘ DỰ KIẾN                                      */}
      {/* ========================================================================= */}
      <section id="bang-gia" className="scroll-mt-20 bg-secondary/40 dark:bg-card/40 py-16 lg:py-20 transition-colors">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold tracking-[0.18em] uppercase text-primary dark:text-[#e6c887]">
                  {isEn ? 'PRICE LIST' : 'BẢNG GIÁ DỰ KIẾN'}
                </span>
                <h2 className="mt-1 font-serif text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-foreground">
                  {isEn ? 'Estimated Apartment Price List' : 'BẢNG GIÁ CĂN HỘ DỰ KIẾN'}
                </h2>
              </div>
              <p className="text-xs sm:text-sm italic text-muted-foreground">
                {isEn ? '* Prices exclude VAT & 2% maintenance fund' : '* Giá bán chưa bao gồm VAT & phí bảo trì 2%'}
              </p>
            </div>

            {/* Price Callout Banner */}
            <div
              className={`mt-6 flex flex-col sm:flex-row sm:items-center gap-3 rounded-2xl p-4 sm:p-5 border transition-all ${
                isDark
                  ? 'border-[#e6c887]/40 bg-gradient-to-r from-[#072018] via-[#0a281e] to-[#072018] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]'
                  : 'border-[#c89a3c]/30 bg-gradient-to-r from-amber-50/70 via-white to-amber-50/70 shadow-sm'
              }`}
            >
              <span
                className={`inline-flex items-center gap-1.5 self-start sm:self-auto rounded-full px-3.5 py-1 text-[11px] sm:text-xs font-bold tracking-wider uppercase whitespace-nowrap ${
                  isDark
                    ? 'bg-[#e6c887] text-[#072018]'
                    : 'bg-primary text-primary-foreground shadow-sm'
                }`}
              >
                <Sparkles className="size-3.5" />
                <span>{isEn ? 'ANNOUNCED PRICE' : 'ĐƠN GIÁ CÔNG BỐ'}</span>
              </span>
              <p className="text-sm sm:text-base font-semibold text-foreground">
                {isEn ? (
                  <>
                    <strong className={isDark ? 'text-[#e6c887] font-serif text-lg font-bold' : 'text-primary font-serif text-lg font-bold'}>
                      49.9 million VND/m²
                    </strong>{' '}
                    wall-center area, uniformly applied across all apartment types.
                  </>
                ) : (
                  <>
                    <strong className={isDark ? 'text-[#e6c887] font-serif text-lg font-bold' : 'text-primary font-serif text-lg font-bold'}>
                      49,9 triệu đồng/m²
                    </strong>{' '}
                    diện tích tim tường, áp chung cho cả rổ hàng.
                  </>
                )}
              </p>
            </div>
          </Reveal>

          {/* Table Container */}
          <Reveal delay={0.1}>
            <div
              className={`mt-8 overflow-hidden rounded-2xl sm:rounded-3xl border shadow-xl transition-all ${
                isDark ? 'border-white/15 bg-card/85' : 'border-slate-200/90 bg-card'
              }`}
            >
              <div className="overflow-x-auto">
                <table className="w-full min-w-[680px] text-left">
                  <caption className="sr-only">{isEn ? 'Apartment Price List' : 'Bảng giá căn hộ dự kiến'}</caption>
                  <thead>
                    <tr
                      className={`transition-colors ${
                        isDark
                          ? 'bg-gradient-to-r from-[#e6c887] via-[#f7e4b5] to-[#e6c887] text-[#072018]'
                          : 'bg-[#072018] text-white'
                      }`}
                    >
                      <th scope="col" className="px-5 py-4 text-xs font-bold tracking-[0.14em] uppercase">
                        {isEn ? 'APARTMENT TYPE' : 'LOẠI CĂN HỘ'}
                      </th>
                      <th scope="col" className="px-5 py-4 text-xs font-bold tracking-[0.14em] uppercase">
                        {isEn ? 'AREA' : 'DIỆN TÍCH'}
                      </th>
                      <th scope="col" className="px-4 py-4 text-center text-xs font-bold tracking-[0.14em] uppercase">
                        {isEn ? 'BEDS' : 'SỐ PN'}
                      </th>
                      <th scope="col" className="px-5 py-4 text-xs font-bold tracking-[0.14em] uppercase">
                        {isEn ? 'ESTIMATED PRICE' : 'GIÁ BÁN DỰ KIẾN'}
                      </th>
                      <th scope="col" className="px-5 py-4 text-xs font-bold tracking-[0.14em] uppercase">
                        {isEn ? 'BEST SUITED FOR' : 'PHÙ HỢP VỚI'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60 dark:divide-white/10 text-sm font-sans">
                    {priceRows.map((row) => (
                      <tr
                        key={row.type}
                        className="transition-colors hover:bg-secondary/40 dark:hover:bg-white/5 group"
                      >
                        <td className="px-5 py-5 font-bold text-foreground group-hover:text-primary dark:group-hover:text-[#e6c887]">
                          {row.type}
                        </td>
                        <td className="px-5 py-5 font-medium text-muted-foreground whitespace-nowrap">{row.area}</td>
                        <td className="px-4 py-5 text-center font-semibold text-foreground">{row.beds}</td>
                        <td
                          className={`px-5 py-5 font-serif text-base md:text-lg font-bold whitespace-nowrap ${
                            isDark ? 'text-[#e6c887]' : 'text-primary'
                          }`}
                        >
                          {row.price}
                        </td>
                        <td className="px-5 py-5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {row.suitable}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Footnotes under Table */}
            <div className="mt-5 space-y-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
              <p className="flex items-start gap-2">
                <Info className="size-4 shrink-0 text-primary dark:text-[#e6c887] mt-0.5" />
                <span>
                  {isEn
                    ? 'The announced price applies to wall-center area. When converted to carpet net area (actual usable space), the unit price is approximately 54 – 56 million VND/sqm depending on shaft locations and wall thickness. Actual unit prices vary based on floor level (mid floors typically carry a premium), balcony orientation, and view openness.'
                    : 'Đơn giá công bố áp dụng trên diện tích tim tường. Khi quy đổi ra diện tích thông thuỷ (diện tích sử dụng thực tế), đơn giá tương đương khoảng 54 – 56 triệu đồng/m² tuỳ vị trí hộp gen và độ dày tường. Giá thực tế từng căn sẽ chênh lệch theo tầng (tầng trung thường cao hơn tầng thấp), hướng ban công và độ thoáng view.'}
                </span>
              </p>
              <p className="flex items-start gap-2">
                <Info className="size-4 shrink-0 text-primary dark:text-[#e6c887] mt-0.5" />
                <span>
                  {isEn
                    ? 'The entire project features 113 podium shophouses (floors 1–3) dedicated to commercial business. Shophouse price tables are released in separate commercial baskets.'
                    : 'Toàn dự án có 113 căn shophouse khối đế (tầng 1–3) phục vụ kinh doanh thương mại, bảng giá shophouse được mở bán theo rổ hàng riêng.'}
                </span>
              </p>
            </div>

            {/* Source Attribution Box */}
            <div className="mt-5 rounded-xl border border-border/80 dark:border-white/10 bg-card/60 p-4 text-xs text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <span className="inline-flex shrink-0 rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary dark:bg-[#e6c887]/20 dark:text-[#e6c887]">
                  {isEn ? '[REFERENCE]' : '[THAM KHẢO]'}
                </span>
                <p className="leading-relaxed">
                  {isEn
                    ? 'Source: Announced price 49.9 million VND/sqm wall-center area — Bcons Group / Tam Hiep Urban Development JSC (Internal announcement for Basket 1, Aug 2026). Pricing per apartment type is calculated accordingly and excludes VAT (10%) and maintenance fund (2%). Last cross-checked: 04/09/2026.'
                    : 'Nguồn: Đơn giá 49,9 triệu đồng/m² diện tích tim tường — Bcons Group / Công ty CP Phát triển Đô thị Tam Hiệp (thông báo nội bộ rổ hàng đợt 1, 08/2026). Giá bán theo loại căn là khoảng tính toán tương ứng, chưa bao gồm VAT (10%) và kinh phí bảo trì (2%). Đối chiếu lần cuối: 04/09/2026.'}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 text-center sm:text-left">
              <button
                type="button"
                onClick={() =>
                  openConsultation({
                    source: 'Trang Giá Bán - Bảng Giá Chi Tiết',
                    title: isEn ? 'Receive Detailed Price Sheet' : 'Nhận Bảng Giá Chi Tiết & CSBH',
                    subtitle: isEn
                      ? 'Leave your phone number, Le Ngoc Long will send the latest official developer price sheet.'
                      : 'Để lại số điện thoại, chuyên viên Lê Ngọc Long sẽ gửi trọn bộ bảng giá gốc từ Chủ đầu tư Bcons.',
                  })
                }
                className={`inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-xs sm:text-sm font-bold tracking-[0.14em] uppercase transition-all duration-300 hover:scale-[1.02] active:scale-98 shadow-lg cursor-pointer ${
                  isDark
                    ? 'bg-gradient-to-r from-[#e6c887] via-[#f7e4b5] to-[#e6c887] text-[#072018] shadow-[0_10px_25px_-5px_rgba(230,200,135,0.4)]'
                    : 'bg-primary hover:bg-[#061913] text-primary-foreground shadow-md'
                }`}
              >
                <span>{isEn ? 'RECEIVE DETAILED PRICE SHEET' : 'NHẬN BẢNG GIÁ CHI TIẾT'}</span>
                <ArrowDownCircle className="size-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: CHÍNH SÁCH BÁN HÀNG DỰ KIẾN                                   */}
      {/* ========================================================================= */}
      <section id="chinh-sach" className="scroll-mt-20 bg-background py-16 lg:py-20 transition-colors">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <Reveal>
            <div className="text-center md:text-left">
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-primary dark:text-[#e6c887]">
                {isEn ? 'COMMERCIAL POLICIES' : 'CHÍNH SÁCH ƯU ĐÃI'}
              </span>
              <h2 className="mt-1 font-serif text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-foreground">
                {isEn ? 'Expected Sales Policies' : 'CHÍNH SÁCH BÁN HÀNG DỰ KIẾN'}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                {isEn
                  ? 'Key financial indicators and incentives for Phase 1 buyers'
                  : 'Các chỉ số tài chính chủ chốt và ưu đãi cho khách hàng đặt mua đợt 1'}
              </p>
            </div>
          </Reveal>

          {/* 4 Stat KPI Cards */}
          <Reveal delay={0.1}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {kpiPolicies.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.id}
                    className={`relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border p-6 transition-all duration-300 hover:translate-y-[-4px] ${
                      isDark
                        ? 'border-white/15 bg-card/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:border-[#e6c887]/50'
                        : 'border-slate-200 bg-card shadow-sm hover:shadow-md hover:border-primary/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          {item.label}
                        </span>
                        <span
                          className={`flex size-8 items-center justify-center rounded-xl ${
                            isDark ? 'bg-[#e6c887]/15 text-[#e6c887]' : 'bg-primary/10 text-primary'
                          }`}
                        >
                          <Icon className="size-4" />
                        </span>
                      </div>

                      <div className="mt-4">
                        <div
                          className={`font-serif text-3xl sm:text-4xl font-extrabold tracking-tight ${
                            isDark ? 'text-[#e6c887]' : 'text-primary'
                          }`}
                        >
                          {item.value}
                        </div>
                        <div className="mt-1 text-xs sm:text-sm font-semibold text-foreground/80">{item.unit}</div>
                      </div>
                    </div>

                    <p className="mt-5 border-t border-border/60 dark:border-white/10 pt-4 text-xs leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Source Attribution Box */}
            <div className="mt-8 rounded-xl border border-border/80 dark:border-white/10 bg-card/60 p-4 text-xs text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <span className="inline-flex shrink-0 rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary dark:bg-[#e6c887]/20 dark:text-[#e6c887]">
                  {isEn ? '[REFERENCE]' : '[THAM KHẢO]'}
                </span>
                <p className="leading-relaxed">
                  {isEn
                    ? 'Source: Expected sales policy for Basket 1 — Bcons Group. Last cross-checked: 28/08/2026.'
                    : 'Nguồn: Chính sách bán hàng dự kiến rổ hàng đợt 1 — Bcons Group. Đối chiếu lần cuối: 28/08/2026.'}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: BA PHƯƠNG THỨC THANH TOÁN                                     */}
      {/* ========================================================================= */}
      <section id="phuong-thuc" className="scroll-mt-20 bg-secondary/40 dark:bg-card/40 py-16 lg:py-24 transition-colors">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <Reveal>
            <div className="text-center md:text-left">
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-primary dark:text-[#e6c887]">
                {isEn ? 'PAYMENT OPTIONS' : 'PHƯƠNG ÁN TÀI CHÍNH'}
              </span>
              <h2 className="mt-1 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-foreground">
                {isEn ? 'Three Flexible Payment Methods' : 'BA PHƯƠNG THỨC THANH TOÁN'}
              </h2>
              <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-muted-foreground">
                {isEn
                  ? 'Bcons announces 3 flexible payment methods for Phase 1, customized for buyers with different capital and cash flow structures. All 3 methods adhere to legal safety limits: maximum 70% collected prior to home handover.'
                  : 'Chủ đầu tư Bcons công bố 3 phương thức thanh toán linh hoạt cho đợt 1, thiết kế riêng cho các nhóm khách hàng có cấu trúc dòng tiền khác nhau. Cả 3 phương thức đều tuân thủ nguyên tắc an toàn pháp lý: chỉ thu tối đa 70% trước khi bàn giao nhà.'}
              </p>
            </div>
          </Reveal>

          {/* Payment Method Cards */}
          <div className="mt-10 space-y-10">
            {paymentMethods.map((method, idx) => (
              <Reveal key={method.id} delay={0.08 * (idx + 1)}>
                <div
                  className={`relative overflow-hidden rounded-2xl sm:rounded-3xl border transition-all duration-300 ${
                    isDark
                      ? 'border-white/15 bg-card/85 shadow-2xl'
                      : 'border-slate-200 bg-card shadow-md hover:shadow-lg'
                  }`}
                >
                  {/* Card Header */}
                  <div
                    className={`flex flex-wrap items-center justify-between gap-3 border-b px-6 py-4 sm:px-8 sm:py-5 ${
                      isDark ? 'border-white/10 bg-white/[0.02]' : 'border-slate-100 bg-secondary/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex size-9 sm:size-10 items-center justify-center rounded-xl font-serif text-base sm:text-lg font-bold ${
                          isDark ? 'bg-[#e6c887] text-[#072018]' : 'bg-primary text-primary-foreground'
                        }`}
                      >
                        {method.number}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                        {method.title}
                      </h3>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold tracking-wider uppercase ${
                        isDark
                          ? 'bg-[#e6c887]/20 text-[#e6c887] border border-[#e6c887]/30'
                          : 'bg-primary/10 text-primary border border-primary/20'
                      }`}
                    >
                      <Sparkles className="size-3" />
                      <span>{method.badge}</span>
                    </span>
                  </div>

                  {/* Card Body: 2 Columns on Desktop */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8">
                    {/* Left details (7 columns) */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                      <div className="space-y-3.5">
                        <div className="flex items-start gap-3 text-xs sm:text-sm">
                          <span className="font-bold text-foreground min-w-[140px] sm:min-w-[180px] shrink-0">
                            {isEn ? 'Capital to SPA:' : 'Tới khi ký HĐMB:'}
                          </span>
                          <span
                            className={`font-semibold ${
                              isDark ? 'text-[#e6c887]' : 'text-primary'
                            }`}
                          >
                            {method.depositToContract}
                          </span>
                        </div>

                        <div className="flex items-start gap-3 text-xs sm:text-sm">
                          <span className="font-bold text-foreground min-w-[140px] sm:min-w-[180px] shrink-0">
                            {isEn ? 'Number of tranches:' : 'Số đợt thanh toán:'}
                          </span>
                          <span className="font-medium text-foreground">{method.installments}</span>
                        </div>

                        <div className="flex items-start gap-3 text-xs sm:text-sm">
                          <span className="font-bold text-foreground min-w-[140px] sm:min-w-[180px] shrink-0">
                            {isEn ? 'Bank disbursement:' : 'Giải ngân ngân hàng:'}
                          </span>
                          <span className="font-medium text-foreground">{method.disbursement}</span>
                        </div>

                        <div className="flex items-start gap-3 text-xs sm:text-sm">
                          <span className="font-bold text-foreground min-w-[140px] sm:min-w-[180px] shrink-0">
                            {isEn ? 'Schedule details:' : 'Chi tiết tiến độ:'}
                          </span>
                          <span className="text-muted-foreground leading-relaxed">{method.scheduleDetail}</span>
                        </div>
                      </div>

                      {/* Suitability Box */}
                      <div
                        className={`mt-4 rounded-xl p-3.5 sm:p-4 border text-xs sm:text-sm ${
                          isDark
                            ? 'border-white/10 bg-white/[0.03] text-slate-300'
                            : 'border-slate-200 bg-secondary/30 text-slate-700'
                        }`}
                      >
                        <strong className="text-foreground">
                          {isEn ? 'Assessment / Suitability: ' : 'Đánh giá phù hợp: '}
                        </strong>
                        <span>{method.suitableFor}</span>
                      </div>
                    </div>

                    {/* Right: Diagram Image Thumbnail with Click-to-Zoom (5 columns) */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                      <div className="group relative overflow-hidden rounded-2xl border border-border/80 dark:border-white/15 bg-slate-50 dark:bg-black/40 shadow-sm transition-all hover:shadow-md">
                        <img
                          src={method.image}
                          alt={method.title}
                          className="w-full h-auto max-h-[260px] object-contain p-2 cursor-pointer transition-transform duration-300 group-hover:scale-[1.03]"
                          style={{ imageRendering: '-webkit-optimize-contrast' }}
                          onClick={() => setActiveDiagramIndex(idx)}
                        />
                        <button
                          type="button"
                          onClick={() => setActiveDiagramIndex(idx)}
                          className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100 cursor-pointer"
                        >
                          <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#072018] shadow-lg backdrop-blur-sm">
                            <Maximize2 className="size-3.5" />
                            <span>{isEn ? 'View Full Diagram' : 'Phóng to sơ đồ'}</span>
                          </span>
                        </button>
                      </div>
                      <p className="mt-2 text-center text-[11px] text-muted-foreground italic">
                        {isEn ? 'Click image to view high-resolution schedule' : 'Nhấn vào ảnh để xem chi tiết sơ đồ tiến độ'}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Legal Protection Alert Banner */}
          <Reveal delay={0.25}>
            <div
              className={`mt-12 rounded-2xl sm:rounded-3xl border p-6 sm:p-8 transition-all ${
                isDark
                  ? 'border-amber-400/40 bg-gradient-to-r from-amber-950/30 via-card to-amber-950/20 shadow-xl'
                  : 'border-amber-300 bg-amber-50/80 shadow-md'
              }`}
            >
              <div className="flex items-start gap-4">
                <span
                  className={`flex size-10 shrink-0 items-center justify-center rounded-2xl ${
                    isDark ? 'bg-amber-400/20 text-amber-300' : 'bg-amber-500/15 text-amber-700'
                  }`}
                >
                  <AlertTriangle className="size-5 stroke-[2.5]" />
                </span>
                <div className="space-y-2">
                  <h4 className="font-serif text-base sm:text-lg font-bold text-foreground uppercase tracking-wide">
                    {isEn
                      ? 'CRITICAL LEGAL NOTE ON CASH FLOW SAFETY'
                      : 'LƯU Ý PHÁP LÝ QUAN TRỌNG VỀ BẢO VỆ DÒNG TIỀN'}
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground font-sans">
                    {isEn
                      ? 'All three payment methods stop at exactly 70% prior to handover, withholding 25% at the handover milestone and the final 5% at the pink book issuance milestone — strictly matching the payment cap mandated by the 2023 Real Estate Business Law. The final 5% is the single most effective leverage to expedite title deed issuance; never pay early solely for cash discounts.'
                      : 'Cả ba phương thức đều dừng ở đúng 70% trước khi bàn giao, giữ lại 25% ở mốc bàn giao và 5% cuối ở mốc nhận sổ hồng — khớp với trần thu tiền của Luật Kinh doanh bất động sản 2023. Khoản 5% cuối là thứ duy nhất còn lại để thúc tiến độ ra sổ, đừng thanh toán sớm chỉ vì được chiết khấu.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Source Attribution Box */}
            <div className="mt-6 rounded-xl border border-border/80 dark:border-white/10 bg-card/60 p-4 text-xs text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <span className="inline-flex shrink-0 rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary dark:bg-[#e6c887]/20 dark:text-[#e6c887]">
                  {isEn ? '[REFERENCE]' : '[THAM KHẢO]'}
                </span>
                <p className="leading-relaxed">
                  {isEn
                    ? 'Source: 3 expected payment methods — Bcons Group / Tam Hiep Urban Development JSC (Internal announcement for Basket 1, Aug 2026). Last cross-checked: 04/09/2026.'
                    : 'Nguồn: 3 phương thức thanh toán dự kiến — Bcons Group / Công ty CP Phát triển Đô thị Tam Hiệp (thông báo nội bộ rổ hàng đợt 1, 08/2026). Đối chiếu lần cuối: 04/09/2026.'}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: CÁC ĐỢT THANH TOÁN & HỖ TRỢ VAY NGÂN HÀNG (2 SECTIONS CHUNG)   */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30 dark:bg-[#071912]/40 transition-colors border-t border-border/60 dark:border-white/5">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* =================================================================== */}
            {/* CARD 1: CÁC ĐỢT THANH TOÁN (5 MỐC HỢP ĐỒNG CHUẨN LUẬT)              */}
            {/* =================================================================== */}
            <div
              id="cac-dot-thanh-toan"
              className="scroll-mt-24 lg:col-span-7 rounded-2xl sm:rounded-3xl border border-border/80 dark:border-white/10 bg-card p-6 sm:p-8 shadow-xl transition-all"
            >
              <div className="text-center sm:text-left">
                <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-primary dark:text-[#e6c887] font-sans">
                  {isEn ? 'STATUTORY MILESTONES' : 'TIẾN ĐỘ CHUẨN LUẬT KINH DOANH BĐS 2023'}
                </span>
                <h3 className="mt-1 font-serif text-2xl sm:text-3xl font-extrabold uppercase text-foreground tracking-tight">
                  {isEn ? 'PAYMENT MILESTONES' : 'CÁC ĐỢT THANH TOÁN'}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                  {isEn
                    ? 'Specific percentages for each installment are detailed in the 3 Payment Methods above and vary according to your choice. The table below outlines the statutory baseline common to all three: each key contract milestone, required inspection at each phase, and statutory collection caps mandated by the 2023 Real Estate Business Law.'
                    : 'Tỷ lệ cụ thể của từng đợt nằm trên ba tờ ở khối Ba phương thức thanh toán phía trên và khác nhau tuỳ phương thức bạn chọn. Bảng dưới đây là phần chung của cả ba: từng mốc trong đời một hợp đồng, thứ cần kiểm ở mỗi mốc, và mức trần do Luật Kinh doanh bất động sản 2023 đặt ra.'}
                </p>
              </div>

              {/* 5 Milestone Step Items */}
              <div className="mt-6 space-y-3.5 sm:space-y-4">
                {paymentMilestones.map((item) => (
                  <div
                    key={item.step}
                    className="relative flex items-start gap-3.5 sm:gap-4.5 rounded-2xl border border-slate-200/70 dark:border-white/5 bg-slate-50/70 dark:bg-white/[0.02] p-4 sm:p-5 hover:border-[#b88728]/40 dark:hover:border-[#e6c887]/30 transition-colors"
                  >
                    {/* Numbered Circle Badge */}
                    <span className="flex size-8 sm:size-9 shrink-0 items-center justify-center rounded-full bg-[#072018] text-[#e6c887] dark:bg-[#e6c887] dark:text-[#072018] font-serif font-extrabold text-sm sm:text-base shadow-sm">
                      {item.step}
                    </span>

                    {/* Step Information */}
                    <div className="min-w-0 flex-1 space-y-1">
                      <div className="flex flex-wrap items-center justify-between gap-1.5">
                        <h4 className="font-bold text-sm sm:text-base text-foreground">
                          {item.title}
                        </h4>
                      </div>

                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {item.phase}
                      </p>

                      <div className="pt-1">
                        <span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] sm:text-xs font-medium bg-amber-500/10 text-amber-800 dark:bg-[#e6c887]/15 dark:text-[#e6c887] border border-amber-500/20 dark:border-[#e6c887]/30">
                          <Scale className="size-3.5 shrink-0" />
                          <span>{item.legalNote}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* =================================================================== */}
            {/* CARD 2: HỖ TRỢ VAY NGÂN HÀNG                                        */}
            {/* =================================================================== */}
            <div
              id="ho-tro-vay-ngan-hang"
              className="scroll-mt-24 lg:col-span-5 rounded-2xl sm:rounded-3xl border border-border/80 dark:border-white/10 bg-card p-6 sm:p-8 shadow-xl flex flex-col justify-between transition-all"
            >
              <div>
                <div className="text-center sm:text-left">
                  <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-primary dark:text-[#e6c887] font-sans">
                    {isEn ? 'CREDIT POLICIES' : 'CHÍNH SÁCH TÍN DỤNG ĐỐI TÁC'}
                  </span>
                  <h3 className="mt-1 font-serif text-2xl sm:text-3xl font-extrabold uppercase text-foreground tracking-tight">
                    {isEn ? 'BANK LOAN SUPPORT' : 'HỖ TRỢ VAY NGÂN HÀNG'}
                  </h3>
                </div>

                {/* 4 Bullet Points with Luxury Checkmarks */}
                <div className="mt-6 space-y-3.5 sm:space-y-4">
                  {loanSupportBullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm leading-relaxed text-foreground font-medium">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#072018] text-[#e6c887] dark:bg-[#e6c887]/20 dark:text-[#e6c887] mt-0.5">
                        <CheckCircle2 className="size-4" />
                      </span>
                      <span className="flex-1">{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Bank Disclaimer Note */}
                <p className="mt-6 text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans border-t border-border/70 dark:border-white/10 pt-5">
                  {isEn
                    ? 'The list of partner banks, specific interest rate charts, and loan tenors applied for the project will be officially announced by the developer and banks at the official launch. This website strictly refrains from publishing bank names prior to official authorization.'
                    : 'Danh sách ngân hàng đối tác, biểu lãi suất và thời hạn vay áp dụng cho dự án do chủ đầu tư và ngân hàng công bố khi mở bán chính thức. Trang này không nêu tên ngân hàng khi chưa có công bố.'}
                </p>
              </div>

              {/* Action Button: TƯ VẤN VAY NGAY */}
              <div className="mt-8 pt-2">
                <a
                  href="#tu-van"
                  className="group inline-flex items-center justify-center gap-2.5 w-full py-3.5 sm:py-4 px-6 rounded-xl font-bold tracking-wider uppercase text-xs sm:text-sm transition-all duration-300 shadow-md bg-primary hover:bg-[#0b3327] text-white dark:bg-gradient-to-r dark:from-[#e6c887] dark:via-[#deb974] dark:to-[#cda256] dark:text-[#072018] dark:hover:brightness-105 active:scale-[0.99]"
                >
                  <MessageSquareQuote className="size-4.5 transition-transform group-hover:scale-110" />
                  <span>{isEn ? 'CONSULT ON LOAN NOW' : 'TƯ VẤN VAY NGAY'}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* ========================================================================= */}
      {/* MODAL: LIGHTBOX ZOOM SƠ ĐỒ TIẾN ĐỘ (MAX-SIZE, ULTRA SHARP 2472x1384)      */}
      {/* ========================================================================= */}
      {activeDiagramIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveDiagramIndex(null)}
        >
          <div
            className="relative w-[min(96vw,76rem)] max-h-[94vh] flex flex-col bg-card rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/20 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Bar: Clean single-line header matching reference design */}
            <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 sm:py-3.5 border-b border-border/70 dark:border-white/10 bg-background/95">
              <div className="min-w-0 flex-1">
                <h4 className="font-serif font-bold text-sm sm:text-base md:text-lg text-primary dark:text-[#e6c887] truncate">
                  {paymentMethods[activeDiagramIndex].title}
                </h4>
                <p className="text-xs text-muted-foreground font-medium truncate mt-0.5">
                  {paymentMethods[activeDiagramIndex].meta}
                </p>
              </div>

              {/* Action Controls: < > X */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <a
                  href={paymentMethods[activeDiagramIndex].image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex size-8 sm:size-9 items-center justify-center rounded-full border border-border/80 dark:border-white/15 bg-background hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors cursor-pointer mr-1"
                  title={isEn ? 'Open original 2472px image' : 'Mở ảnh gốc 2472px trong tab mới'}
                >
                  <ExternalLink className="size-3.5 sm:size-4" />
                </a>

                <button
                  type="button"
                  onClick={() =>
                    setActiveDiagramIndex((prev) =>
                      prev !== null ? (prev === 0 ? paymentMethods.length - 1 : prev - 1) : null
                    )
                  }
                  className="flex size-8 sm:size-9 items-center justify-center rounded-full border border-border/80 dark:border-white/15 bg-background hover:bg-primary hover:text-white dark:hover:bg-[#e6c887] dark:hover:text-[#072018] text-foreground transition-colors cursor-pointer"
                  title={isEn ? 'Previous method' : 'Phương thức trước'}
                  aria-label="Previous method"
                >
                  <ChevronLeft className="size-4" />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setActiveDiagramIndex((prev) =>
                      prev !== null ? (prev === paymentMethods.length - 1 ? 0 : prev + 1) : null
                    )
                  }
                  className="flex size-8 sm:size-9 items-center justify-center rounded-full border border-border/80 dark:border-white/15 bg-background hover:bg-primary hover:text-white dark:hover:bg-[#e6c887] dark:hover:text-[#072018] text-foreground transition-colors cursor-pointer"
                  title={isEn ? 'Next method' : 'Phương thức tiếp theo'}
                  aria-label="Next method"
                >
                  <ChevronRight className="size-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setActiveDiagramIndex(null)}
                  className="flex size-8 sm:size-9 items-center justify-center rounded-full border border-border/80 dark:border-white/15 bg-background hover:bg-rose-500 hover:border-rose-500 hover:text-white text-muted-foreground transition-colors cursor-pointer ml-1"
                  title={isEn ? 'Close (Esc)' : 'Đóng (Esc)'}
                  aria-label="Close"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>

            {/* Stage: Large Full-Bleed Viewport with smooth scroll if needed */}
            <div className="flex-1 overflow-auto bg-[#faf7ef] dark:bg-[#071c14] p-2 sm:p-4 md:p-6 flex items-center justify-center overscroll-contain">
              <img
                src={paymentMethods[activeDiagramIndex].image}
                alt={paymentMethods[activeDiagramIndex].title}
                className="w-full min-w-[46rem] sm:min-w-[56rem] md:min-w-[62rem] max-w-[72rem] h-auto object-contain mx-auto select-none rounded-xl"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
