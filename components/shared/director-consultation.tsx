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
  Sparkles,
  Award,
  FileCheck,
  Building2,
  Calculator,
  Shield,
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

  const competencies = isEn
    ? [
        {
          icon: Award,
          title: '6+ Years Real Estate Expertise',
          desc: 'Specialized residential investment and consultancy across HCMC and Dong Nai key projects.',
        },
        {
          icon: Building2,
          title: 'Direct Developer Sales Unit',
          desc: 'Sales Director at Bcons PS Land – authorized primary distributor directly under Bcons Group.',
        },
        {
          icon: FileCheck,
          title: 'HCMC Certified Real Estate Broker',
          desc: 'Official Real Estate Brokerage License issued by HCMC Department of Construction.',
          hasCert: true,
        },
        {
          icon: Calculator,
          title: 'Mortgage & Cash Flow Structuring',
          desc: 'Accurate bank loan structuring, grace period planning, and safe financial leverage calculation.',
        },
        {
          icon: Shield,
          title: 'Turnkey Legal Due Diligence & Pink Book Ownership Guarantee',
          desc: 'Comprehensive document audit, contract examination, and turnkey paperwork guidance until official Pink Book title handover.',
          fullWidth: true,
        },
      ]
    : [
        {
          icon: Award,
          title: '6 Năm Kinh Nghiệm Chuyên Sâu',
          desc: 'Kinh nghiệm tư vấn chuyên sâu các dự án BĐS tại thị trường trọng điểm TP.HCM & Đồng Nai.',
        },
        {
          icon: Building2,
          title: 'Phân Phối Trực Tiếp Chủ Đầu Tư',
          desc: 'Giám đốc Sàn Kinh Doanh Bcons PS Land – Đơn vị phân phối trực tiếp từ Tập đoàn Bcons.',
        },
        {
          icon: FileCheck,
          title: 'Chứng Chỉ Hành Nghề Sở Xây Dựng',
          desc: 'Chứng chỉ hành nghề môi giới BĐS chính quy do Sở Xây Dựng TP.HCM cấp.',
          hasCert: true,
        },
        {
          icon: Calculator,
          title: 'Phương Án Vay & Tối Ưu Dòng Tiền',
          desc: 'Tính toán phương án vay ngân hàng an toàn, tối ưu lịch trả gốc lãi theo thu nhập thực tế.',
        },
        {
          icon: Shield,
          title: 'Đồng Hành Pháp Lý Trọn Gói Tới Khi Nhận Sổ Hồng',
          desc: 'Đồng hành đối chiếu pháp lý thực tế, thẩm định hồ sơ và hỗ trợ thủ tục trọn gói đến khi nhận sổ.',
          fullWidth: true,
        },
      ]

  return (
    <>
      <section id={id} className={`scroll-mt-20 overflow-hidden bg-background py-16 lg:py-24 transition-colors ${className}`}>
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
            <div className="min-w-0 rounded-2xl sm:rounded-3xl border border-border/80 dark:border-white/15 bg-card p-4 sm:p-8 lg:p-10 shadow-xl">
              {/* Card Title */}
              <h3 className="font-serif text-base sm:text-lg lg:text-xl font-bold uppercase text-center tracking-normal text-[#072018] dark:text-white mb-6 sm:mb-8">
                {isEn ? 'BCONS CENTRAL PARK PROJECT CONSULTATION' : 'TƯ VẤN DỰ ÁN BCONS CENTRAL PARK'}
              </h3>

              {/* Director Profile Header: Balanced Two-Column Hero with Official Bcons Hallmark */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-border/70 dark:border-white/10">
                {/* Left: Avatar + Identification + Credential Badges */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left">
                  {/* Portrait photo of Director Long */}
                  <div className="relative size-24 sm:size-28 shrink-0">
                    <div className="size-full rounded-2xl overflow-hidden ring-2 ring-[#e6c887] shadow-md bg-secondary dark:bg-black/40">
                      <img
                        src="/images/manager_avt.jpg"
                        alt="Lê Ngọc Long - Giám đốc Sàn Kinh Doanh Bcons PS Land"
                        className="size-full object-cover object-center hover:scale-105 transition-transform duration-500 [image-rendering:-webkit-optimize-contrast]"
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
                  <div className="min-w-0">
                    <div className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] sm:text-[10.5px] uppercase tracking-wider font-bold text-[#b88728] dark:text-[#e6c887] bg-[#b88728]/10 dark:bg-[#e6c887]/10 border border-[#b88728]/25 dark:border-[#e6c887]/25 mb-1.5 shadow-xs">
                      <Sparkles className="size-3 text-[#b88728] dark:text-[#e6c887]" />
                      <span>{isEn ? 'DIRECT DEVELOPER CONSULTATION' : 'ĐẠI DIỆN TƯ VẤN TRỰC TIẾP TỪ CĐT'}</span>
                    </div>
                    <h4 className="font-serif text-2xl sm:text-3xl font-bold uppercase text-[#072018] dark:text-white tracking-wide">
                      {isEn ? 'LE NGOC LONG' : 'LÊ NGỌC LONG'}
                    </h4>
                    <p className="mt-1 text-sm sm:text-[15px] font-sans font-semibold text-primary dark:text-[#e6c887]">
                      {isEn
                        ? 'Sales Director – Bcons PS Land'
                        : 'Giám đốc Sàn Kinh Doanh Bcons PS Land'}
                    </p>
                    {/* Quick Trust Tags */}
                    <div className="mt-2.5 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-foreground/85 dark:text-slate-200 bg-secondary/60 dark:bg-white/5 px-2.5 py-1 rounded-lg border border-border/60 dark:border-white/10">
                        <Award className="size-3 text-[#b88728] dark:text-[#e6c887]" />
                        <span>{isEn ? '6+ Years Experience' : '6+ Năm Kinh Nghiệm'}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-foreground/85 dark:text-slate-200 bg-secondary/60 dark:bg-white/5 px-2.5 py-1 rounded-lg border border-border/60 dark:border-white/10">
                        <FileCheck className="size-3 text-emerald-600 dark:text-[#e6c887]" />
                        <span>{isEn ? 'Licensed Broker' : 'Chứng chỉ Sở Xây Dựng'}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Official Bcons Distribution Seal & Hallmark */}
                <div className="flex items-center justify-center sm:justify-start gap-3.5 rounded-2xl p-3.5 sm:p-4 bg-gradient-to-br from-[#e6c887]/15 via-secondary/30 to-[#e6c887]/10 dark:from-white/[0.06] dark:via-white/[0.02] dark:to-transparent border border-[#e6c887]/35 dark:border-white/15 shadow-sm self-center lg:self-auto shrink-0 w-full sm:w-auto">
                  <div className="h-12 sm:h-14 px-2.5 py-1.5 rounded-xl bg-white dark:bg-white/10 border border-[#e6c887]/30 flex items-center justify-center shrink-0 shadow-xs">
                    <img
                      src="/images/bcons-central-park-logo.png"
                      alt="Bcons Central Park Logo"
                      className="h-9 sm:h-10 w-auto object-contain dark-gold-logo"
                    />
                  </div>
                  <div className="text-left min-w-0">
                    <div className="flex items-center gap-1 text-[10px] sm:text-[10.5px] uppercase font-bold tracking-wider text-[#b88728] dark:text-[#e6c887]">
                      <ShieldCheck className="size-3.5 stroke-[2.5]" />
                      <span>{isEn ? 'OFFICIAL DISTRIBUTOR' : 'ĐƠN VỊ PHÂN PHỐI CHÍNH THỨC'}</span>
                    </div>
                    <div className="font-serif text-sm sm:text-base font-bold text-[#072018] dark:text-white tracking-tight">
                      BCONS PS LAND · BCONS GROUP
                    </div>
                    <div className="text-[11px] text-muted-foreground dark:text-slate-300">
                      {isEn ? 'Direct developer inventory & official prices' : 'Rổ hàng trực tiếp & chính sách gốc từ CĐT'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Competencies: 2-Column Balanced Micro-Card Dossier */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5">
                {competencies.map((item, idx) => {
                  const IconComponent = item.icon
                  return (
                    <div
                      key={idx}
                      className={`group rounded-xl sm:rounded-2xl p-3.5 sm:p-4 bg-[#e6c887]/8 dark:bg-white/[0.03] border border-border/70 dark:border-white/10 hover:border-[#e6c887]/60 dark:hover:border-[#e6c887]/40 hover:bg-[#e6c887]/15 dark:hover:bg-white/[0.06] transition-all duration-300 flex items-start gap-3.5 shadow-xs ${
                        item.fullWidth
                          ? 'md:col-span-2 bg-gradient-to-r from-[#e6c887]/12 via-card to-[#e6c887]/8 dark:from-white/[0.04] dark:to-transparent'
                          : ''
                      }`}
                    >
                      <div className="size-9 rounded-xl bg-primary/10 dark:bg-[#e6c887]/15 text-primary dark:text-[#e6c887] border border-[#e6c887]/25 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <IconComponent className="size-4.5 stroke-[2]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h5 className="font-sans font-bold text-xs sm:text-[13.5px] text-[#072018] dark:text-white leading-snug">
                            {item.title}
                          </h5>
                          {item.hasCert && (
                            <button
                              type="button"
                              onClick={() => setCertModalOpen(true)}
                              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-[#e6c887]/25 text-[#072018] dark:text-[#e6c887] hover:bg-[#e6c887]/40 transition-colors cursor-pointer border border-[#e6c887]/40 align-middle"
                            >
                              <span>{isEn ? 'View Certificate' : 'Xem chứng chỉ'}</span>
                              <ExternalLink className="size-2.5" />
                            </button>
                          )}
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground dark:text-slate-300 leading-relaxed font-sans">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Contact Actions & Zalo QR Code Section */}
              <div className="mt-8 flex flex-col lg:flex-row items-center justify-between gap-5 pt-6 border-t border-border/70 dark:border-white/10">
                {/* Direct Call & Zalo Buttons */}
                <div className="flex flex-col sm:flex-row w-full lg:w-auto items-stretch sm:items-center gap-3">
                  <a
                    href="tel:0376671776"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#072018] hover:bg-black text-white dark:bg-[#e6c887] dark:hover:bg-[#d6b772] dark:text-[#072018] px-6 py-3 text-xs sm:text-sm font-bold font-sans shadow hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap w-full sm:w-auto"
                  >
                    <PhoneCall className="size-4 stroke-[2.5]" />
                    <span>0376 671 776</span>
                  </a>

                  <a
                    href="https://zalo.me/0376671776"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0068ff] hover:bg-[#0054cc] text-white px-6 py-3 text-xs sm:text-sm font-bold font-sans shadow hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap w-full sm:w-auto"
                  >
                    <MessageCircle className="size-4" />
                    <span>{isEn ? 'CONNECT ZALO' : 'ZALO KẾT BẠN'}</span>
                  </a>
                </div>

                {/* Center Reassurance Badges on Desktop */}
                <div className="hidden lg:flex flex-col items-center text-center px-4 text-xs font-sans text-muted-foreground dark:text-slate-300 space-y-1">
                  <div className="inline-flex items-center gap-1.5 font-semibold text-[#072018] dark:text-[#e6c887]">
                    <Check className="size-3.5 text-emerald-600 dark:text-[#e6c887]" />
                    <span>{isEn ? 'Direct 1-on-1 developer consultation' : 'Tư vấn 1-1 trực tiếp Giám đốc Sàn'}</span>
                  </div>
                  <div className="text-[11px] text-muted-foreground">
                    {isEn ? 'Fast 15-minute response · No intermediaries' : 'Phản hồi trong 15 phút · Không qua trung gian'}
                  </div>
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
              <p className="mt-6 text-xs sm:text-[13px] leading-relaxed text-muted-foreground dark:text-slate-400 font-sans break-words">
                {isEn ? (
                  <>
                    I am Sales Director at Bcons PS Land (official project distribution unit), not the project developer. Tam Hiep Urban Development Joint Stock Company is the investor and Bcons Group is the developer of Bcons Central Park Tam Hiep. The content on this page is for reference only and does not replace official legal documents from the investor.
                  </>
                ) : (
                  <>
                    Tôi là Giám đốc Sàn Kinh Doanh Bcons PS Land (đơn vị phân phối trực tiếp từ Chủ đầu tư), không phải chủ đầu tư dự án. Công ty Cổ phần Phát triển Đô thị Tam Hiệp là chủ đầu tư và Tập đoàn Bcons (Bcons Group) là đơn vị phát triển Bcons Central Park Tam Hiệp. Nội dung trên trang mang tính tham khảo và không thay thế hồ sơ pháp lý chính thức từ chủ đầu tư.
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

            <div className="rounded-xl overflow-hidden border border-border/80 dark:border-white/10 shadow-inner bg-secondary/30 dark:bg-black/50">
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
