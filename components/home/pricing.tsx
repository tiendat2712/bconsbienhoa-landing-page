'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PhoneCall, MessageCircle, Check, ArrowRight, ExternalLink, X, ShieldCheck } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function Pricing() {
  const { locale } = useSitePreferences()
  const isEn = locale === 'en'

  const [certModalOpen, setCertModalOpen] = useState(false)

  // Price Table Rows
  const priceRows = [
    {
      type: isEn ? 'Studio' : 'Studio',
      area: '37 – 40 m²',
      price: '1,85 – 2,00 tỷ',
      policy: isEn
        ? 'Support 70% loan - Equity 10 – 20% until SPA signing'
        : 'Hỗ trợ vay 70% - Vốn 10 – 20% tới khi ký HĐMB',
    },
    {
      type: isEn ? '1 Bedroom' : '1 Phòng ngủ',
      area: '42 – 43 m²',
      price: '2,10 – 2,15 tỷ',
      policy: isEn
        ? 'Principal grace period during construction phase'
        : 'Ân hạn nợ gốc trong giai đoạn xây dựng',
    },
    {
      type: isEn ? '2 Bedrooms' : '2 Phòng ngủ',
      area: '53 – 73 m²',
      price: '2,65 – 3,64 tỷ',
      policy: isEn
        ? 'Additional discount for expedited full payment'
        : 'Chiết khấu thêm khi thanh toán nhanh',
    },
    {
      type: isEn ? '3 Bedrooms' : '3 Phòng ngủ',
      area: '87 – 88 m²',
      price: '4,34 – 4,39 tỷ',
      policy: isEn
        ? 'Support 70% loan against total apartment value'
        : 'Hỗ trợ vay 70% giá trị căn hộ',
    },
  ]

  // Buyer Analysis Points
  const analysisPoints = [
    {
      title: isEn ? 'Wall-center unit price 49.9M VND/sqm' : 'Đơn giá tim tường 49,9 triệu đồng/m²',
      desc: isEn
        ? 'Uniformly applied across unit inventory, equivalent to ~54 – 56M VND/sqm carpet area.'
        : 'Áp dụng đồng đều cả rổ hàng, quy đổi diện tích thông thuỷ khoảng 54 – 56 triệu/m².',
    },
    {
      title: isEn ? 'Initial equity required' : 'Vốn tự có ban đầu',
      desc: isEn
        ? 'Only 10 – 20% of apartment value until SPA signing (~185 – 700M VND). Partner bank loan up to 70% with up to 24 months principal grace.'
        : 'Chỉ từ 10 – 20% giá trị căn tới khi ký HĐMB (~185 – 700 triệu). Ngân hàng hỗ trợ vay đến 70% với ân hạn nợ gốc đến 24 tháng.',
    },
    {
      title: isEn ? 'Studio & 1BR (1.85 – 2.15B)' : 'Studio & 1PN (1,85 – 2,15 tỷ)',
      desc: isEn
        ? 'Lowest initial capital requirement, ideal for young professionals or rental investment targeting Amata & Bien Hoa 2 industrial park expats.'
        : 'Vốn ban đầu thấp nhất, thích hợp người trẻ hoặc đầu tư cho thuê chuyên gia KCN Amata, Biên Hòa 2.',
    },
    {
      title: isEn ? '2BR & 3BR (2.65 – 4.39B)' : '2PN & 3PN (2,65 – 4,39 tỷ)',
      desc: isEn
        ? 'Optimal functional layout for young families and multi-generational households requiring generous living space.'
        : 'Thiết kế công năng tối ưu cho gia đình trẻ và gia đình đa thế hệ cần không gian rộng rãi.',
    },
  ]

  // Advisor Credentials
  const advisorBulletPoints = [
    isEn
      ? '6+ years of specialized real estate advisory experience in HCMC & Dong Nai'
      : '6 năm kinh nghiệm tư vấn bất động sản tại TP.HCM & Đồng Nai',
    isEn
      ? 'Sales Director at Bcons PS Land – Primary Strategic F1 Distributor'
      : 'Giám đốc Sàn Kinh Doanh Bcons PS Land – Đơn vị phân phối chiến lược F1 Bcons',
    isEn
      ? 'Licensed Real Estate Broker certified by HCMC Department of Construction'
      : 'Chứng chỉ hành nghề môi giới BĐS do Sở Xây Dựng TP.HCM cấp',
    isEn
      ? 'Accurate bank loan structuring, safe leverage and cashflow optimization'
      : 'Tính toán phương án vay ngân hàng an toàn, tối ưu dòng tiền theo thu nhập',
    isEn
      ? 'Comprehensive legal due diligence and turnkey documentation until ownership title (Pink Book)'
      : 'Đồng hành đối chiếu pháp lý thực tế và hỗ trợ thủ tục trọn gói đến khi nhận sổ',
  ]

  return (
    <section
      id="gia-ban"
      className="scroll-mt-24 bg-background dark:bg-[#07130f] py-16 sm:py-20 lg:py-24 transition-colors duration-500 relative overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="pointer-events-none absolute -left-40 top-1/3 size-[450px] rounded-full bg-primary/5 dark:bg-[#e6c887]/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/3 size-[450px] rounded-full bg-[#e6c887]/10 dark:bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12">
          <SectionHeading
            align="center"
            eyebrow={isEn ? 'PRICE LIST & POLICIES' : 'BẢNG GIÁ & CHÍNH SÁCH'}
            title={isEn ? 'Bcons Central Park Pricing' : 'Bảng Giá Bcons Central Park'}
            subtitle={isEn ? 'Direct From F1 Sales Director' : 'Chính Sách Bán Hàng Trực Tiếp Từ CĐT & F1'}
            description={
              isEn
                ? 'Official estimated price list across apartment categories and strategic advisory by Director Le Ngoc Long.'
                : 'Bảng giá niêm yết dự kiến theo từng loại căn hộ và giải pháp tư vấn tài chính đồng hành trực tiếp từ Giám đốc Lê Ngọc Long.'
            }
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 items-start">
          {/* ===================== CỘT TRÁI: BẢNG GIÁ & PHÂN TÍCH ===================== */}
          <Reveal delay={0.1} className="h-full">
            <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-card p-6 sm:p-7 lg:p-8 shadow-md">
              {/* Card Title */}
              <h3 className="font-serif text-base sm:text-lg lg:text-xl font-bold uppercase text-center tracking-normal text-[#072018] dark:text-white mb-5 sm:mb-6">
                {isEn
                  ? 'Bcons Central Park Price List & Sales Policy'
                  : 'BẢNG GIÁ BCONS CENTRAL PARK & CHÍNH SÁCH BÁN HÀNG'}
              </h3>

              {/* Table Container */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-white/10 shadow-sm">
                <table className="w-full text-left border-collapse min-w-[480px]">
                  <thead>
                    <tr className="bg-[#fdf8ee] dark:bg-[#e6c887]/15 border-b border-slate-200 dark:border-white/10">
                      <th className="py-3 px-3 sm:px-4 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-900 dark:text-[#e6c887]">
                        {isEn ? 'Unit Type' : 'LOẠI CĂN'}
                      </th>
                      <th className="py-3 px-3 sm:px-4 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-900 dark:text-[#e6c887]">
                        {isEn ? 'Area' : 'DIỆN TÍCH'}
                      </th>
                      <th className="py-3 px-3 sm:px-4 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-900 dark:text-[#e6c887] whitespace-nowrap">
                        {isEn ? 'Est. Price' : 'GIÁ BÁN (TỶ)'}
                      </th>
                      <th className="py-3 px-3 sm:px-4 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-900 dark:text-[#e6c887]">
                        {isEn ? 'Incentive Policy' : 'CHÍNH SÁCH ƯU ĐÃI'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-xs sm:text-sm">
                    {priceRows.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-slate-50/80 dark:hover:bg-white/[0.03] transition-colors"
                      >
                        <td className="py-3 sm:py-3.5 px-3 sm:px-4 font-bold text-slate-900 dark:text-white whitespace-nowrap">
                          {row.type}
                        </td>
                        <td className="py-3 sm:py-3.5 px-3 sm:px-4 text-slate-600 dark:text-slate-300 whitespace-nowrap font-sans">
                          {row.area}
                        </td>
                        <td className="py-3 sm:py-3.5 px-3 sm:px-4 font-serif text-sm sm:text-base font-bold text-[#d93829] dark:text-[#f87171] whitespace-nowrap">
                          {row.price}
                        </td>
                        <td className="py-3 sm:py-3.5 px-3 sm:px-4 text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                          {row.policy}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Analysis Box */}
              <div className="mt-5 rounded-xl bg-[#f4f7fa] dark:bg-[#0c241b]/60 border border-slate-200/80 dark:border-white/10 p-4 sm:p-5">
                <h4 className="font-bold text-xs sm:text-sm tracking-wide text-[#072018] dark:text-white uppercase mb-2.5 font-sans">
                  {isEn ? 'QUICK BUYER ANALYSIS:' : 'PHÂN TÍCH NHANH DÀNH CHO NGƯỜI MUA:'}
                </h4>
                <ul className="space-y-2 text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-[#c2d3cb] font-sans">
                  {analysisPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-slate-800 dark:text-white font-bold">•</span>
                      <span>
                        <strong className="font-bold text-slate-900 dark:text-white">
                          {pt.title}:
                        </strong>{' '}
                        {pt.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Left Card Bottom Reference Note */}
              <p className="mt-5 text-xs sm:text-[13px] text-muted-foreground dark:text-slate-400 font-sans leading-relaxed">
                {isEn ? (
                  <>
                    Prices and policies are reference information during the project launch phase, officially announced by the investor upon sale opening. View full details at{' '}
                    <Link
                      href="/gia-ban"
                      className="font-bold text-primary dark:text-[#e6c887] hover:underline"
                    >
                      Bcons Central Park Tam Hiep price page
                    </Link>
                    .
                  </>
                ) : (
                  <>
                    Giá và chính sách là thông tin tham khảo ở giai đoạn giới thiệu dự án, do chủ đầu tư công bố chính thức khi mở bán. Xem đầy đủ tại trang{' '}
                    <Link
                      href="/gia-ban"
                      className="font-bold text-primary dark:text-[#e6c887] hover:underline"
                    >
                      giá bán Bcons Central Park Tam Hiệp
                    </Link>
                    .
                  </>
                )}
              </p>
            </div>
          </Reveal>

          {/* ===================== CỘT PHẢI: TƯ VẤN DỰ ÁN - LÊ NGỌC LONG ===================== */}
          <Reveal delay={0.2} className="h-full">
            <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-card p-6 sm:p-7 lg:p-8 shadow-md">
              {/* Card Title */}
              <h3 className="font-serif text-base sm:text-lg lg:text-xl font-bold uppercase text-center tracking-normal text-[#072018] dark:text-white mb-5 sm:mb-6">
                {isEn
                  ? 'Bcons Central Park Project Consultation'
                  : 'TƯ VẤN DỰ ÁN BCONS CENTRAL PARK'}
              </h3>

              {/* Director Profile Header */}
              <div className="flex items-center gap-4 pb-4">
                {/* Portrait photo of Director Long */}
                <div className="relative size-20 sm:size-24 shrink-0">
                  <div className="size-full rounded-xl overflow-hidden ring-2 ring-[#e6c887]/60 shadow-sm bg-slate-100 dark:bg-black/40">
                    <img
                      src="/images/manager_avt.jpg"
                      alt="Lê Ngọc Long - Giám đốc Sàn Kinh Doanh Bcons PS Land"
                      className="size-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span
                    title={isEn ? 'Verified F1 Strategic Advisor' : 'Tư vấn F1 CĐT chính thức'}
                    className="absolute -bottom-1 -right-1 size-5 rounded-full bg-[#f5b82e] text-[#072018] flex items-center justify-center shadow ring-2 ring-card"
                  >
                    <ShieldCheck className="size-3 stroke-[2.5]" />
                  </span>
                </div>

                {/* Name, Title & Credentials */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-lg sm:text-xl font-bold uppercase text-[#072018] dark:text-white tracking-wide">
                    {isEn ? 'Le Ngoc Long' : 'LÊ NGỌC LONG'}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 mt-1 font-sans">
                    {isEn
                      ? 'Sales Director – Bcons PS Land'
                      : 'Chuyên viên tư vấn bất động sản – Giám đốc Sàn Kinh Doanh Bcons PS Land'}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground dark:text-slate-400 mt-0.5 font-sans">
                    {isEn
                      ? 'Strategic advisory specialist – Bcons Central Park'
                      : 'Chuyên gia tư vấn chiến lược – Dự án Bcons Central Park'}
                  </p>
                </div>
              </div>

              {/* Checklist of Professional Competencies */}
              <div className="mt-2 space-y-2.5">
                {advisorBulletPoints.map((text, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
                    <Check className="size-4 shrink-0 text-emerald-600 dark:text-[#e6c887] stroke-[2.5] mt-0.5" />
                    <div className="flex-1">
                      <span>{text}</span>
                      {/* Certificate link modal trigger for item 2 */}
                      {idx === 2 && (
                        <button
                          type="button"
                          onClick={() => setCertModalOpen(true)}
                          className="inline-flex items-center gap-1 ml-2 px-2 py-0.5 rounded text-[11px] font-bold bg-[#e6c887]/20 text-primary dark:text-[#e6c887] hover:bg-[#e6c887]/30 transition-colors cursor-pointer border border-[#e6c887]/30 align-middle"
                        >
                          <span>{isEn ? 'View Certificate' : 'Xem chứng chỉ'}</span>
                          <ExternalLink className="size-2.5" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Actions & Zalo QR Code Section */}
              <div className="mt-6 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4">
                {/* Direct Call & Zalo Buttons */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
                  <a
                    href="tel:0376671776"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#072018] hover:bg-black text-white dark:bg-[#e6c887] dark:hover:bg-[#d6b772] dark:text-[#072018] px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-bold font-sans shadow hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
                  >
                    <PhoneCall className="size-4 stroke-[2.5]" />
                    <span>0376 671 776</span>
                  </a>

                  <a
                    href="https://zalo.me/0376671776"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0068ff] hover:bg-[#0054cc] text-white px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-bold font-sans shadow hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
                  >
                    <MessageCircle className="size-4" />
                    <span>{isEn ? 'CONNECT ZALO' : 'ZALO KẾT BẠN'}</span>
                  </a>
                </div>

                {/* QR Code Container */}
                <div className="flex flex-col items-center shrink-0">
                  <a
                    href="https://zalo.me/0376671776"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-1 rounded-lg bg-white border border-slate-200 shadow-sm hover:scale-105 transition-transform"
                    title={isEn ? 'Scan Zalo QR to connect with Le Ngoc Long' : 'Quét mã Zalo kết bạn Lê Ngọc Long'}
                  >
                    <img
                      src="/images/zalo_qr.svg"
                      alt="Mã QR Zalo 0376 671 776 - Lê Ngọc Long"
                      className="size-16 sm:size-18 object-contain"
                    />
                  </a>
                  <span className="text-[11px] text-muted-foreground dark:text-slate-400 font-sans mt-1">
                    {isEn ? 'Scan Zalo' : 'Quét mã Zalo'}
                  </span>
                </div>
              </div>

              {/* Disclaimer Text: Naturally elevated right below action bar */}
              <p className="mt-5 sm:mt-6 text-xs sm:text-[13px] leading-relaxed text-muted-foreground dark:text-slate-400 font-sans">
                {isEn ? (
                  <>
                    I am a professional consultant/broker, not the project developer. Tam Hiep Urban Development Joint Stock Company is the investor and Bcons Group is the developer of Bcons Central Park Tam Hiep. The content on this page is for reference only and does not replace official legal documents from the investor.
                  </>
                ) : (
                  <>
                    Tôi là chuyên viên tư vấn/môi giới, không phải chủ đầu tư dự án. Công ty Cổ phần Phát triển Đô thị Tam Hiệp là chủ đầu tư và Tập đoàn Bcons (Bcons Group) là đơn vị phát triển Bcons Central Park Tam Hiệp. Nội dung trên trang mang tính tham khảo và không thay thế hồ sơ pháp lý chính thức từ chủ đầu tư.
                  </>
                )}
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ===================== MODAL XEM CHỨNG CHỈ HÀNH NGHỀ BĐS ===================== */}
      {certModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setCertModalOpen(false)}
        >
          <div
            className="relative max-w-2xl w-full bg-card rounded-2xl border border-border/80 dark:border-white/20 shadow-2xl overflow-hidden p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/60 dark:border-white/10">
              <div>
                <h4 className="font-serif font-bold text-base sm:text-lg text-foreground dark:text-white">
                  {isEn ? 'Real Estate Brokerage License' : 'Chứng Chỉ Hành Nghề Môi Giới BĐS'}
                </h4>
                <p className="text-xs text-muted-foreground dark:text-slate-300">
                  {isEn
                    ? 'Issued by HCMC Department of Construction to Le Ngoc Long'
                    : 'Cấp bởi Giám đốc Sở Xây Dựng TP. Hồ Chí Minh cho Lê Ngọc Long'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCertModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-secondary dark:hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden border border-border/80 dark:border-white/10 shadow-inner bg-slate-50 dark:bg-black/50">
              <img
                src="/images/material_info.jpg"
                alt="Chứng chỉ hành nghề môi giới BĐS Lê Ngọc Long"
                className="w-full h-auto max-h-[70vh] object-contain mx-auto select-none"
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              <span>Họ tên: <strong>Lê Ngọc Long</strong></span>
              <a
                href="https://zalo.me/0376671776"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-[#e6c887] font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>Liên hệ tư vấn trực tiếp</span>
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

