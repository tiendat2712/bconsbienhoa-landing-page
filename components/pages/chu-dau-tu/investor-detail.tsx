'use client'

import { Award, Building2, CheckCircle2, ChevronRight, Clock, FileCheck2, ShieldCheck, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Reveal, SectionHeading } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function InvestorDetail() {
  const { theme, locale, t } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  const strengths = isEn
    ? [
        {
          metric: '20+',
          title: 'Delivered Projects',
          desc: 'Bcons Group has successfully developed and handed over 20+ residential complexes across HCMC and Binh Duong before expanding to Dong Nai.',
        },
        {
          metric: 'Punctual',
          title: 'Real Construction – Real Handover',
          desc: 'Track record of rapid, disciplined construction, consistently delivering on or ahead of contract schedules.',
        },
        {
          metric: 'Legal',
          title: 'Fast Ownership Delivery',
          desc: 'Freehold pink books issued directly to homeowners within 6 – 12 months following key handover.',
        },
      ]
    : [
        {
          metric: '20+',
          title: 'Dự án đã triển khai',
          desc: 'Bcons đã phát triển và bàn giao thành công hơn 20 dự án tại TP.HCM và Bình Dương trước khi mở rộng về trung tâm Đồng Nai.',
        },
        {
          metric: 'Tiến độ',
          title: 'Làm thật – giao thật',
          desc: 'Các dự án trước đó của Bcons luôn ghi nhận tốc độ thi công thần tốc và bàn giao chuẩn tiến độ hoặc vượt tiến độ cam kết.',
        },
        {
          metric: 'Pháp lý',
          title: 'Sở hữu lâu dài',
          desc: 'Sổ hồng sở hữu lâu dài (cho người Việt Nam), thời gian trao sổ tận tay cư dân trung bình chỉ từ 6 – 12 tháng sau bàn giao.',
        },
      ]

  const trackRecord = isEn
    ? [
        { name: 'Bcons Suoi Tien', units: '653 units', year: 'Handover 2020', status: '100% Pink Books Issued', tag: 'Di An, Binh Duong' },
        { name: 'Bcons Mien Dong', units: '768 units', year: 'Handover 2021', status: '100% Pink Books Issued', tag: 'Di An, Binh Duong' },
        { name: 'Bcons Garden', units: '1,776 units', year: 'Handover 2022', status: '100% Pink Books Issued', tag: 'Di An, Binh Duong' },
        { name: 'Bcons Green View', units: '916 units', year: 'Handover 2022', status: '100% Pink Books Issued', tag: 'Di An, Binh Duong' },
        { name: 'Bcons Plaza', units: '1,258 units', year: 'Handover 2023', status: '100% Pink Books Issued', tag: 'Di An, Binh Duong' },
        { name: 'Bcons Sala & Polygon', units: '1,300+ units', year: 'Handover 2024', status: 'Pink Books in Progress', tag: 'Di An, Binh Duong' },
      ]
    : [
        { name: 'Bcons Suối Tiên', units: '653 căn', year: 'Bàn giao 2020', status: '100% Đã có sổ hồng', tag: 'Dĩ An, Bình Dương' },
        { name: 'Bcons Miền Đông', units: '768 căn', year: 'Bàn giao 2021', status: '100% Đã có sổ hồng', tag: 'Dĩ An, Bình Dương' },
        { name: 'Bcons Garden', units: '1.776 căn', year: 'Bàn giao 2022', status: '100% Đã có sổ hồng', tag: 'Dĩ An, Bình Dương' },
        { name: 'Bcons Green View', units: '916 căn', year: 'Bàn giao 2022', status: '100% Đã có sổ hồng', tag: 'Dĩ An, Bình Dương' },
        { name: 'Bcons Plaza', units: '1.258 căn', year: 'Bàn giao 2023', status: '100% Đã có sổ hồng', tag: 'Dĩ An, Bình Dương' },
        { name: 'Bcons Sala & Polygon', units: '1.300+ căn', year: 'Bàn giao 2024', status: 'Đang cấp sổ hồng', tag: 'Dĩ An, Bình Dương' },
      ]

  return (
    <>
      <section className="bg-background pt-28 pb-16 md:pt-36 lg:pb-20 transition-colors">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <nav aria-label="Đường dẫn" className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className={`transition-colors ${isDark ? 'hover:text-[#e6c887]' : 'hover:text-primary'}`}>
              {t.nav.home}
            </Link>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <span className={isDark ? 'text-[#e6c887] font-semibold' : 'text-foreground'}>{t.nav.investor}</span>
          </nav>

          <Reveal>
            <h1 className="mt-6 font-serif text-3xl leading-tight text-balance text-foreground md:text-5xl font-bold">
              {isEn
                ? 'Developer of Bcons Central Park: Bcons Group'
                : 'Chủ đầu tư dự án Bcons Central Park Tam Hiệp'}
            </h1>

            <div className="mt-8 flex flex-col gap-5 leading-relaxed text-pretty text-muted-foreground md:text-lg">
              {isEn ? (
                <>
                  <p>
                    Bcons Central Park is developed by <strong>Bcons Group</strong> — a proven developer with over 20 residential projects successfully delivered across HCMC and Binh Duong.
                  </p>
                  <p>
                    With strategic technical partnership from PPSN Japan, Bcons Group applies advanced construction management standards to guarantee quality and timely handover.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Bcons Central Park Tam Hiệp do <strong>Công ty Cổ phần Phát triển Đô thị Tam Hiệp</strong> làm chủ
                    đầu tư, phát triển bởi <strong>Tập đoàn Bcons (Bcons Group)</strong> — đơn vị đã triển khai hơn 20
                    dự án tại Bình Dương và TP.HCM trước khi tiến vào khu vực trung tâm Đồng Nai.
                  </p>
                  <p>
                    Bên dưới là các điểm nổi bật về năng lực triển khai của Bcons tại dự án này, cùng danh mục các dự án tiêu biểu đã trao sổ hồng cho cư dân.
                  </p>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/40 dark:bg-card/40 py-20 lg:py-24 border-y border-border/60 dark:border-white/10 transition-colors">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <SectionHeading
            eyebrow={t.legal.investorEyebrow}
            title={isEn ? 'Why Choose Bcons Group?' : 'Vì sao chọn Bcons?'}
            description={isEn ? 'Proven execution philosophy: Real Work – Real Delivery – Rapid Ownership.' : "Tập đoàn Bcons khẳng định vị thế thương hiệu với triết lý 'Làm thật – Giao thật – Sổ hồng nhanh'."}
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Card: Monogram Frame */}
            <Reveal className="lg:col-span-6" delay={0.05}>
              <div className="relative h-72 sm:h-96 w-full rounded-3xl bg-[#0a271f] p-8 flex flex-col justify-between items-center text-center shadow-xl border border-emerald-800/40 overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.18)_0%,transparent_70%)] pointer-events-none" />

                <div className="w-full flex items-center justify-between text-[11px] font-bold text-emerald-300 uppercase tracking-widest">
                  <span className="flex items-center gap-1.5">
                    <span className={`size-2 rounded-full animate-pulse ${isDark ? 'bg-[#e6c887]' : 'bg-accent'}`} />
                    BCONS GROUP
                  </span>
                  <span>EST. 2013</span>
                </div>

                <div className="my-auto flex flex-col items-center">
                  <div className={`size-32 sm:size-40 rounded-full border-2 flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-500 ${
                    isDark ? 'border-[#e6c887] shadow-[0_0_30px_rgba(230,200,135,0.4)]' : 'border-accent/80 shadow-[0_0_30px_rgba(217,119,6,0.25)]'
                  }`}>
                    <div className={`size-full rounded-full border border-dashed flex items-center justify-center ${
                      isDark ? 'border-[#e6c887]/60' : 'border-accent/60'
                    }`}>
                      <span className={`font-serif text-3xl sm:text-4xl font-bold tracking-wider ${
                        isDark ? 'text-[#e6c887]' : 'text-white'
                      }`}>
                        BCONS
                      </span>
                    </div>
                  </div>
                  <span className={`mt-4 font-serif text-sm italic tracking-wide ${
                    isDark ? 'text-[#e6c887]/90' : 'text-amber-200/90'
                  }`}>
                    {isEn ? 'Real Work – Real Handover – Fast Pink Books' : 'Làm thật – Giao thật – Sổ hồng nhanh'}
                  </span>
                </div>

                <div className="text-[10px] text-emerald-200/70 tracking-wider">
                  BCONS GROUP • STRATEGIC PARTNER PPSN JAPAN
                </div>
              </div>
            </Reveal>

            {/* Right Column: Strengths */}
            <Reveal className="lg:col-span-6 space-y-6" delay={0.1}>
              {strengths.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col sm:flex-row items-start gap-4 p-5 rounded-2xl border transition-all duration-300 hover:translate-x-1 ${
                    isDark
                      ? 'border-white/10 bg-card/80 hover:border-[#e6c887]/50 shadow-md'
                      : 'border-border bg-card hover:border-primary/40 shadow-sm'
                  }`}
                >
                  <div className={`w-24 shrink-0 font-serif text-2xl sm:text-3xl font-bold ${
                    isDark ? 'text-[#e6c887]' : 'text-accent'
                  }`}>
                    {item.metric}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>

          {/* Track Record Grid */}
          <Reveal delay={0.15}>
            <div className="mt-20 border-t border-border dark:border-white/10 pt-14">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <span className={`text-xs font-bold tracking-[0.2em] uppercase transition-colors ${
                    isDark ? 'text-[#e6c887]' : 'text-primary'
                  }`}>
                    {isEn ? 'PROVEN TRACK RECORD' : 'BẢO CHỨNG NĂNG LỰC'}
                  </span>
                  <h3 className="mt-1 font-serif text-2xl font-bold text-foreground md:text-3xl">
                    {isEn ? 'Delivered Projects with Full Ownership Delivered' : 'Dự án tiêu biểu đã bàn giao & cấp sổ hồng'}
                  </h3>
                </div>
                <span className="text-xs text-muted-foreground font-medium">
                  {isEn ? 'Over 10,000+ residents settled' : 'Hơn 10.000+ cư dân đã an cư'}
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {trackRecord.map((p, i) => (
                  <div
                    key={i}
                    className={`p-5 rounded-2xl border shadow-sm flex flex-col justify-between transition-all ${
                      isDark
                        ? 'border-white/10 bg-card/80 hover:border-[#e6c887]/50'
                        : 'border-border bg-card hover:border-primary/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                        <span className={`font-semibold ${isDark ? 'text-[#e6c887]' : 'text-accent'}`}>{p.tag}</span>
                        <span>{p.year}</span>
                      </div>
                      <h4 className="font-serif text-lg font-bold text-foreground mb-1">
                        {p.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">{p.units}</p>
                    </div>

                    <div className={`mt-4 pt-3 border-t border-border dark:border-white/10 flex items-center gap-1.5 text-xs font-bold ${
                      isDark ? 'text-[#e6c887]' : 'text-primary'
                    }`}>
                      <CheckCircle2 className={`size-3.5 ${isDark ? 'text-[#e6c887]' : 'text-primary'}`} />
                      <span>{p.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
