'use client'

import { ChevronRight, Download, FileCheck2, FileText, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import { Reveal, SectionHeading } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function LegalDetail() {
  const { theme, locale, t } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  return (
    <>
      <section className="bg-background pt-28 pb-16 md:pt-36 lg:pb-20 transition-colors">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <nav aria-label="Đường dẫn" className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className={`transition-colors ${isDark ? 'hover:text-[#e6c887]' : 'hover:text-primary'}`}>
              {t.nav.home}
            </Link>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <span className={isDark ? 'text-[#e6c887] font-semibold' : 'text-foreground'}>{t.nav.legal}</span>
          </nav>

          <Reveal>
            <h1 className="mt-6 font-serif text-3xl leading-tight text-balance text-foreground md:text-5xl font-bold">
              {isEn
                ? 'Legal Foundation & Documentation of Bcons Central Park Tam Hiep'
                : 'Pháp lý dự án Bcons Central Park Tam Hiệp'}
            </h1>
            
            <div className="mt-8 flex flex-col gap-5 leading-relaxed text-pretty text-muted-foreground md:text-lg">
              {isEn ? (
                <>
                  <p>
                    Bcons Central Park Tam Hiep is developed on a transparent auctioned land parcel with long-term freehold ownership for Vietnamese buyers.
                  </p>
                  <p>
                    Below are the key legal approvals disclosed. Buyers are advised to review official documents directly with the developer prior to signing sales contracts.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Bcons Tam Hiệp pháp lý là câu hỏi được người mua đặt ra trước cả giá bán: Bcons Central Park
                    Tam Hiệp được phát triển trên quỹ đất trúng đấu giá, pháp lý dự kiến là sổ hồng sở hữu lâu dài
                    (áp dụng cho người Việt Nam). Đây là một trong những yếu tố người mua quan tâm hàng đầu
                    với các dự án căn hộ hình thành trong tương lai.
                  </p>
                  <p>
                    Bên dưới là các hồ sơ pháp lý chính đã công bố ở giai đoạn giới thiệu dự án. Khách hàng nên
                    yêu cầu xem bản gốc/bản scan chính thức từ chủ đầu tư trước khi đặt cọc hoặc ký hợp đồng.
                  </p>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* KEY LEGAL DOCUMENTS GRID */}
      <section className="bg-secondary/40 dark:bg-card/40 py-20 lg:py-24 border-y border-border/60 dark:border-white/10 transition-colors">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <SectionHeading
            eyebrow={t.legal.eyebrow}
            title={isEn ? 'Official Legal Documentation' : 'Hồ sơ pháp lý dự án'}
            description={isEn ? 'Long-term freehold ownership on public auctioned land parcel.' : 'Sổ hồng sở hữu lâu dài (áp dụng cho người Việt Nam), phát triển trên quỹ đất đất trúng đấu giá.'}
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Card 1: Giấy phép xây dựng (GPXD) */}
            <Reveal delay={0.05}>
              <div className={`group overflow-hidden rounded-3xl border shadow-sm hover:shadow-lg transition-all duration-300 ${isDark ? 'border-white/15 bg-card/80 hover:border-[#e6c887]/50' : 'border-border bg-card'}`}>
                <div className="relative h-64 sm:h-72 w-full bg-[#FAF8F5] dark:bg-[#071611] p-6 flex flex-col justify-center items-center overflow-hidden border-b border-border/80 dark:border-white/10">
                  <div className="w-full max-w-[260px] bg-white dark:bg-slate-900 rounded-xl p-5 shadow-md border border-stone-200/80 dark:border-white/15 relative space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-white/10">
                      <div className="h-2.5 w-20 bg-emerald-800/80 dark:bg-[#e6c887] rounded" />
                      <FileCheck2 className={`size-4 ${isDark ? 'text-[#e6c887]' : 'text-primary'}`} />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-stone-200 dark:bg-white/15 rounded" />
                      <div className="h-2 w-5/6 bg-stone-200 dark:bg-white/15 rounded" />
                      <div className="h-2 w-4/5 bg-stone-200 dark:bg-white/15 rounded" />
                      <div className="h-2 w-full bg-stone-200 dark:bg-white/15 rounded" />
                    </div>
                    <div className="absolute bottom-3 right-4 size-10 rounded-full border-2 border-rose-500/80 flex items-center justify-center opacity-85">
                      <div className="size-7 rounded-full border border-dashed border-rose-500 flex items-center justify-center text-[7px] font-bold text-rose-600 uppercase">
                        {isEn ? 'APPROVED' : 'ĐÃ DUYỆT'}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    {isEn ? 'Construction Permit (GPXD)' : 'Giấy phép xây dựng (GPXD)'}
                  </h3>
                </div>
              </div>
            </Reveal>

            {/* Card 2: Bản đồ quy hoạch 1/500 */}
            <Reveal delay={0.1}>
              <div className={`group overflow-hidden rounded-3xl border shadow-sm hover:shadow-lg transition-all duration-300 ${isDark ? 'border-white/15 bg-card/80 hover:border-[#e6c887]/50' : 'border-border bg-card'}`}>
                <div className="relative h-64 sm:h-72 w-full bg-[#0a271f] p-6 flex items-center justify-center overflow-hidden border-b border-border/80 dark:border-white/10">
                  <div className="relative w-full max-w-[280px] h-44 border border-emerald-500/20 rounded-xl bg-emerald-950/40 p-3 grid grid-cols-5 gap-2 items-center">
                    <div className="col-span-2 h-24 bg-amber-600/80 rounded-md shadow-sm flex items-center justify-center text-[9px] font-bold text-white">Block A</div>
                    <div className="col-span-1 flex flex-col items-center justify-center gap-1.5">
                      <div className="size-10 rounded-full border-2 border-amber-400 bg-emerald-800/60 flex items-center justify-center text-[8px] font-bold text-amber-300">{isEn ? 'Park' : 'Công viên'}</div>
                    </div>
                    <div className="col-span-2 h-24 bg-amber-600/80 rounded-md shadow-sm flex items-center justify-center text-[9px] font-bold text-white">Block B</div>
                    <div className="col-span-5 h-4 bg-emerald-800/40 rounded flex items-center justify-center text-[8px] text-emerald-200">{isEn ? 'Phan Trung Avenue 24m' : 'Trục đường Phan Trung 24m'}</div>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    {isEn ? '1/500 Detailed Zoning Plan' : 'Bản đồ quy hoạch 1/500'}
                  </h3>
                </div>
              </div>
            </Reveal>

            {/* Card 3: Quyết định chủ trương đầu tư */}
            <Reveal delay={0.15}>
              <div className={`group overflow-hidden rounded-3xl border shadow-sm hover:shadow-lg transition-all duration-300 ${isDark ? 'border-white/15 bg-card/80 hover:border-[#e6c887]/50' : 'border-border bg-card'}`}>
                <div className="relative h-64 sm:h-72 w-full bg-[#FAF8F5] dark:bg-[#071611] p-6 flex flex-col justify-center items-center overflow-hidden border-b border-border/80 dark:border-white/10">
                  <div className="w-full max-w-[260px] bg-white dark:bg-slate-900 rounded-xl p-5 shadow-md border border-stone-200/80 dark:border-white/15 relative space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-white/10">
                      <div className="h-2.5 w-28 bg-primary dark:bg-[#e6c887] rounded" />
                      <ShieldCheck className={`size-4 ${isDark ? 'text-[#e6c887]' : 'text-accent'}`} />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-stone-200 dark:bg-white/15 rounded" />
                      <div className="h-2 w-4/5 bg-stone-200 dark:bg-white/15 rounded" />
                      <div className="h-2 w-full bg-stone-200 dark:bg-white/15 rounded" />
                      <div className="h-2 w-3/4 bg-stone-200 dark:bg-white/15 rounded" />
                    </div>
                    <div className="pt-2 flex items-center justify-between text-[9px] text-muted-foreground font-semibold">
                      <span>DONG NAI PROVINCE</span>
                      <span>DECISION</span>
                    </div>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    {isEn ? 'Land Allocation & Investment Approval' : 'Quyết định giao đất & Chủ trương đầu tư'}
                  </h3>
                </div>
              </div>
            </Reveal>

            {/* Card 4: Sổ hồng tổng */}
            <Reveal delay={0.2}>
              <div className={`group overflow-hidden rounded-3xl border shadow-sm hover:shadow-lg transition-all duration-300 ${isDark ? 'border-white/15 bg-card/80 hover:border-[#e6c887]/50' : 'border-border bg-card'}`}>
                <div className="relative h-64 sm:h-72 w-full bg-[#FAF8F5] dark:bg-[#071611] p-6 flex flex-col justify-center items-center overflow-hidden border-b border-border/80 dark:border-white/10">
                  <div className="w-full max-w-[260px] bg-rose-50/70 dark:bg-rose-950/30 rounded-xl p-5 shadow-md border border-rose-200/80 dark:border-rose-500/20 relative space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-rose-200 dark:border-rose-500/20">
                      <div className="h-2.5 w-24 bg-rose-700 dark:bg-rose-400 rounded" />
                      <FileText className="size-4 text-rose-600 dark:text-rose-400" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-rose-200/70 dark:bg-white/15 rounded" />
                      <div className="h-2 w-5/6 bg-rose-200/70 dark:bg-white/15 rounded" />
                      <div className="h-2 w-3/4 bg-rose-200/70 dark:bg-white/15 rounded" />
                    </div>
                    <div className="pt-2 text-center text-[10px] text-rose-800 dark:text-rose-300 font-bold uppercase tracking-wider">
                      {isEn ? 'LAND USE RIGHTS CERTIFICATE' : 'GIẤY CHỨNG NHẬN QUYỀN SỬ DỤNG ĐẤT'}
                    </div>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    {isEn ? 'Land Use Rights Certificate' : 'Giấy chứng nhận quyền sử dụng đất'}
                  </h3>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className={`mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl border ${isDark ? 'border-white/10 bg-card/80 shadow-lg' : 'border-border bg-card'}`}>
              <p className="text-sm leading-relaxed text-muted-foreground max-w-xl">
                {isEn
                  ? 'Illustrated legal files will be updated with official high-resolution scans directly from the developer.'
                  : 'Hồ sơ pháp lý minh họa trên trang sẽ được cập nhật bằng bản scan chính thức từ chủ đầu tư.'}
              </p>

              <a
                href="#dang-ky"
                className={`inline-flex items-center justify-center gap-2.5 shrink-0 rounded-full px-7 py-3.5 text-xs font-bold uppercase tracking-[0.14em] shadow-lg transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? 'bg-gradient-to-r from-[#e6c887] via-[#f7e4b5] to-[#e6c887] text-[#072018] shadow-[0_10px_25px_-5px_rgba(230,200,135,0.4)]'
                    : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                }`}
              >
                <Download className="size-4" />
                <span>{isEn ? 'DOWNLOAD LEGAL DOSSIER PDF' : 'TẢI HỒ SƠ PHÁP LÝ PDF'}</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
