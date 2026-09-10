'use client'

import { useState } from 'react'
import {
  Check,
  ShieldCheck,
  PhoneCall,
  MessageCircle,
  ExternalLink,
  X,
  ChevronRight,
} from 'lucide-react'
import { Reveal } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

interface DirectorConsultationProps {
  id?: string
  className?: string
  hideHeader?: boolean
}

export function DirectorConsultation({
  id = 'tu-van',
  className = '',
  hideHeader = false,
}: DirectorConsultationProps) {
  const { theme, locale } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  const [certModalOpen, setCertModalOpen] = useState(false)

  const advisorBulletPoints = isEn
    ? [
        '6+ years of specialized real estate advisory experience in HCMC & Dong Nai',
        'Sales Director at Bcons PS Land – Direct Distribution Unit of Developer Bcons Group',
        'Licensed Real Estate Broker certified by HCMC Department of Construction',
        'Accurate bank loan structuring, safe leverage and cashflow optimization',
        'Comprehensive legal due diligence and turnkey documentation until ownership title (Pink Book)',
      ]
    : [
        '6 năm kinh nghiệm tư vấn bất động sản tại TP.HCM & Đồng Nai',
        'Giám đốc Sàn Kinh Doanh Bcons PS Land – Đơn vị phân phối trực tiếp từ Chủ đầu tư Bcons',
        'Chứng chỉ hành nghề môi giới BĐS do Sở Xây Dựng TP.HCM cấp',
        'Tính toán phương án vay ngân hàng an toàn, tối ưu dòng tiền theo thu nhập',
        'Đồng hành đối chiếu pháp lý thực tế và hỗ trợ thủ tục trọn gói đến khi nhận sổ',
      ]

  return (
    <>
      <section id={id} className={`scroll-mt-20 bg-background py-16 lg:py-24 transition-colors ${className}`}>
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          {!hideHeader && (
            <Reveal>
              <div className="text-center md:text-left mb-10">
                <span className="text-xs font-bold tracking-[0.18em] uppercase text-primary dark:text-[#e6c887]">
                  {isEn ? 'OFFICIAL DEVELOPER CONSULTATION' : 'TƯ VẤN TRỰC TIẾP CHỦ ĐẦU TƯ'}
                </span>
                <h2 className="mt-1 font-serif text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-foreground">
                  {isEn ? 'Direct Support from Developer Sales Unit' : 'ĐỒNG HÀNH TRỰC TIẾP TỪ CHỦ ĐẦU TƯ BCONS'}
                </h2>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                  {isEn
                    ? 'Transparent price quotation, direct developer inventory, comprehensive legal and mortgage guidance'
                    : 'Tư vấn đúng giá niêm yết chủ đầu tư Bcons Group, rổ hàng trực tiếp từ CĐT, hỗ trợ vay ngân hàng nhanh gọn'}
                </p>
              </div>
            </Reveal>
          )}

          <Reveal delay={0.1}>
            <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/15 bg-card p-6 sm:p-8 lg:p-10 shadow-xl">
              {/* Card Title */}
              <h3 className="font-serif text-base sm:text-lg lg:text-xl font-bold uppercase text-center tracking-normal text-[#072018] dark:text-white mb-6 sm:mb-8">
                {isEn ? 'BCONS CENTRAL PARK PROJECT CONSULTATION' : 'TƯ VẤN DỰ ÁN BCONS CENTRAL PARK'}
              </h3>

              {/* Director Profile Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pb-6 border-b border-border/70 dark:border-white/10 text-center sm:text-left">
                {/* Portrait photo of Director Long */}
                <div className="relative size-24 sm:size-28 shrink-0">
                  <div className="size-full rounded-2xl overflow-hidden ring-2 ring-[#e6c887]/60 shadow-md bg-slate-100 dark:bg-black/40">
                    <img
                      src="/images/manager_avt.jpg"
                      alt="Lê Ngọc Long - Giám đốc Sàn Kinh Doanh Bcons PS Land"
                      className="size-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span
                    title={isEn ? 'Verified Developer Sales Director' : 'Tư vấn trực tiếp từ Chủ Đầu Tư Bcons'}
                    className="absolute -bottom-1 -right-1 size-6 rounded-full bg-[#f5b82e] text-[#072018] flex items-center justify-center shadow ring-2 ring-card"
                  >
                    <ShieldCheck className="size-3.5 stroke-[2.5]" />
                  </span>
                </div>

                {/* Name, Title & Credentials */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-xl sm:text-2xl font-bold uppercase text-[#072018] dark:text-white tracking-wide">
                    {isEn ? 'LE NGOC LONG' : 'LÊ NGỌC LONG'}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 mt-1 font-sans">
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
              <div className="mt-6 space-y-3.5">
                {advisorBulletPoints.map((text, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-sans"
                  >
                    <Check className="size-4 shrink-0 text-emerald-600 dark:text-[#e6c887] stroke-[2.5] mt-0.5" />
                    <div className="flex-1">
                      <span>{text}</span>
                      {/* Certificate link modal trigger for item index 2 */}
                      {idx === 2 && (
                        <button
                          type="button"
                          onClick={() => setCertModalOpen(true)}
                          className="inline-flex items-center gap-1 ml-2 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#e6c887]/20 text-primary dark:text-[#e6c887] hover:bg-[#e6c887]/30 transition-colors cursor-pointer border border-[#e6c887]/40 align-middle"
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
              <div className="mt-8 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 pt-6 border-t border-border/70 dark:border-white/10">
                {/* Direct Call & Zalo Buttons */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
                  <a
                    href="tel:0376671776"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#072018] hover:bg-black text-white dark:bg-[#e6c887] dark:hover:bg-[#d6b772] dark:text-[#072018] px-6 py-3 text-xs sm:text-sm font-bold font-sans shadow hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
                  >
                    <PhoneCall className="size-4 stroke-[2.5]" />
                    <span>0376 671 776</span>
                  </a>

                  <a
                    href="https://zalo.me/0376671776"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0068ff] hover:bg-[#0054cc] text-white px-6 py-3 text-xs sm:text-sm font-bold font-sans shadow hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
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
                    className="block p-1.5 rounded-xl bg-white border border-slate-200 shadow-sm hover:scale-105 transition-transform"
                    title={isEn ? 'Scan Zalo QR to connect with Le Ngoc Long' : 'Quét mã Zalo kết bạn Lê Ngọc Long'}
                  >
                    <img
                      src="/images/zalo_qr.svg"
                      alt="Mã QR Zalo 0376 671 776 - Lê Ngọc Long"
                      className="size-16 sm:size-20 object-contain"
                    />
                  </a>
                  <span className="text-[11px] text-muted-foreground dark:text-slate-400 font-sans mt-1">
                    {isEn ? 'Scan Zalo' : 'Quét mã Zalo'}
                  </span>
                </div>
              </div>

              {/* Disclaimer Text */}
              <p className="mt-6 text-xs sm:text-[13px] leading-relaxed text-muted-foreground dark:text-slate-400 font-sans">
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
      </section>

      {/* MODAL: XEM CHỨNG CHỈ HÀNH NGHỀ BĐS (LÊ NGỌC LONG) */}
      {certModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
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
              <span>
                {isEn ? 'Full name: ' : 'Họ tên: '}<strong>Lê Ngọc Long</strong>
              </span>
              <a
                href="https://zalo.me/0376671776"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-[#e6c887] font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>{isEn ? 'Direct Consultation' : 'Liên hệ tư vấn trực tiếp'}</span>
                <ChevronRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
