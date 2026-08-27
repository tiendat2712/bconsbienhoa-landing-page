'use client'

import { ArrowUpRight, Calculator, CheckSquare, ChevronRight, FileCheck, MapPin } from 'lucide-react'
import Link from 'next/link'
import { Reveal } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function NewsListing() {
  const { theme, locale, t } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  const articles = isEn
    ? [
        {
          id: 'danh-gia-chi-tiet-bcons-central-park',
          date: '19/8/2026',
          title: 'Comprehensive Review: Bcons Central Park Phan Trung, Tam Hiep, Dong Nai',
          desc: 'Location, legal framework, architectural design, amenities, pricing, and construction schedule — comprehensive analysis before purchasing.',
          href: '/#tin-tuc',
          image: '/images/hero-towers.png',
          type: 'image',
        },
        {
          id: 'kinh-nghiem-mua-can-ho-hinh-thanh-tuong-lai',
          date: '10/8/2026',
          title: '7 Essential Legal Checks When Buying Future Off-Plan Apartments',
          desc: 'From construction permits to bank guarantees and sales contracts — practical legal checklist to avoid pitfalls.',
          href: '/#tin-tuc',
          type: 'illustration-checklist',
        },
        {
          id: 'so-sanh-vi-tri-tam-hiep-bien-hoa',
          date: '5/8/2026',
          title: 'Comparing Tam Hiep Location with Surrounding Areas in Bien Hoa',
          desc: 'Tam Hiep, Trang Dai or Long Binh — which neighborhood fits your lifestyle and investment goal? An objective overview.',
          href: '/#tin-tuc',
          type: 'illustration-map',
        },
        {
          id: 'huong-dan-tinh-toan-tai-chinh-mua-can-ho',
          date: '29/7/2026',
          title: 'Mortgage & Financial Planning Guide for Home Buyers: How Much to Borrow?',
          desc: 'How to calculate your equity, safe debt-to-income ratio, and hidden closing costs when planning installment financing.',
          href: '/#tin-tuc',
          type: 'illustration-finance',
        },
      ]
    : [
        {
          id: 'danh-gia-chi-tiet-bcons-central-park',
          date: '19/8/2026',
          title: 'Đánh Giá Chi Tiết Dự Án Bcons Central Park Phan Trung, Tam Hiệp, Đồng Nai',
          desc: 'Vị trí, pháp lý, thiết kế, tiện ích, giá bán và tiến độ xây dựng — phân tích toàn diện dự án Bcons Central Park trước khi quyết định.',
          href: '/#tin-tuc',
          image: '/images/hero-towers.png',
          type: 'image',
        },
        {
          id: 'kinh-nghiem-mua-can-ho-hinh-thanh-tuong-lai',
          date: '10/8/2026',
          title: 'Kinh Nghiệm Mua Căn Hộ Hình Thành Trong Tương Lai: 7 Điều Cần Kiểm Tra',
          desc: 'Từ giấy phép xây dựng, bảo lãnh ngân hàng đến hợp đồng mua bán — checklist pháp lý giúp bạn tránh rủi ro khi mua căn hộ chưa bàn giao.',
          href: '/#tin-tuc',
          type: 'illustration-checklist',
        },
        {
          id: 'so-sanh-vi-tri-tam-hiep-bien-hoa',
          date: '5/8/2026',
          title: 'So Sánh Vị Trí Tam Hiệp Với Các Khu Vực Lân Cận Tại Biên Hòa',
          desc: 'Tam Hiệp, Trảng Dài hay Long Bình — khu vực nào phù hợp với nhu cầu an cư và đầu tư của bạn? Góc nhìn khách quan về tiện ích, giá và tiềm năng.',
          href: '/#tin-tuc',
          type: 'illustration-map',
        },
        {
          id: 'huong-dan-tinh-toan-tai-chinh-mua-can-ho',
          date: '29/7/2026',
          title: 'Hướng Dẫn Tính Toán Tài Chính Mua Căn Hộ: Vay Bao Nhiêu Là Hợp Lý?',
          desc: 'Cách xác định vốn tự có, tỷ lệ vay an toàn theo thu nhập và những khoản chi phí dễ bị bỏ quên khi lập kế hoạch mua nhà trả góp.',
          href: '/#tin-tuc',
          type: 'illustration-finance',
        },
      ]

  return (
    <section className="bg-background pt-28 pb-16 md:pt-36 lg:pb-20 transition-colors">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        {/* Category Tag */}
        <Reveal>
          <span className={`text-xs font-bold tracking-[0.22em] uppercase transition-colors ${
            isDark ? 'text-[#e6c887]' : 'text-accent'
          }`}>
            {t.nav.news}
          </span>
          <h1 className="mt-4 font-serif text-3xl leading-tight text-balance text-foreground md:text-5xl font-bold">
            {isEn ? 'News & Market Analysis: Bcons Central Park Tam Hiep' : 'Tin tức & phân tích dự án Bcons Central Park Tam Hiệp'}
          </h1>

          <div className="mt-8 leading-relaxed text-pretty text-muted-foreground md:text-lg">
            <p>
              {isEn
                ? 'In-depth market insights and project updates regarding Bcons Central Park Tam Hiep. Check out '
                : 'Các bài phân tích tôi viết về Bcons Central Park — dự án còn được gọi là Bcons Tam Hiệp hay Bcons Phan Trung tại Biên Hòa, Đồng Nai. Nếu bạn đang tìm nhanh thông số dự án, xem '}
              <Link href="/gia-ban" className={`font-semibold underline underline-offset-4 transition-colors ${isDark ? 'text-[#e6c887] hover:text-[#f7e4b5]' : 'text-primary'}`}>
                {isEn ? 'Pricing' : 'giá bán Bcons Central Park'}
              </Link>
              ,{' '}
              <Link href="/mat-bang" className={`font-semibold underline underline-offset-4 transition-colors ${isDark ? 'text-[#e6c887] hover:text-[#f7e4b5]' : 'text-primary'}`}>
                {isEn ? 'Floor Plans' : 'mặt bằng Bcons Central Park'}
              </Link>{' '}
              {isEn ? 'or ' : 'hoặc '}
              <Link href="/phap-ly" className={`font-semibold underline underline-offset-4 transition-colors ${isDark ? 'text-[#e6c887] hover:text-[#f7e4b5]' : 'text-primary'}`}>
                {isEn ? 'Legal Foundation' : 'pháp lý Bcons Tam Hiệp'}
              </Link>.
            </p>
          </div>
        </Reveal>

        {/* 2-Column Article Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {articles.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.08}>
              <article className={`group h-full flex flex-col overflow-hidden rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                isDark ? 'border-white/15 bg-card/80 hover:border-[#e6c887]/50' : 'border-border bg-card'
              }`}>
                {/* Visual Thumbnail */}
                <div className="relative h-60 sm:h-64 w-full overflow-hidden border-b border-border/70 dark:border-white/10">
                  {item.type === 'image' && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}

                  {item.type === 'illustration-checklist' && (
                    <div className="size-full bg-[#0a271f] p-6 flex items-center justify-center">
                      <div className="w-full max-w-[240px] bg-white dark:bg-slate-900 rounded-xl p-4 shadow-md space-y-2.5 border dark:border-white/10">
                        <div className="flex items-center justify-between border-b pb-2 dark:border-white/10">
                          <span className={`text-[10px] font-bold tracking-wider uppercase ${isDark ? 'text-[#e6c887]' : 'text-emerald-800'}`}>CHECKLIST</span>
                          <CheckSquare className={`size-3.5 ${isDark ? 'text-[#e6c887]' : 'text-emerald-700'}`} />
                        </div>
                        <div className="space-y-1.5 text-[9px] text-muted-foreground font-medium">
                          <div className="flex items-center gap-1.5">
                            <span className="size-1.5 rounded-full bg-emerald-500" />
                            <span>1/500 Approved</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="size-1.5 rounded-full bg-emerald-500" />
                            <span>Construction Permit</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="size-1.5 rounded-full bg-emerald-500" />
                            <span>Bank Guarantee</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {item.type === 'illustration-map' && (
                    <div className="size-full bg-[#072018] p-6 flex items-center justify-center relative overflow-hidden">
                      <div className="relative w-full max-w-[240px] h-36 border border-emerald-500/20 rounded-xl bg-emerald-950/50 p-3 flex flex-col justify-between">
                        <div className="flex items-center justify-between text-[9px] text-emerald-300 font-bold">
                          <span>BIEN HOA CITY</span>
                          <span>TAM HIEP HUB</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <div className={`p-2 rounded-lg text-[9px] font-bold shadow ${isDark ? 'bg-[#e6c887] text-[#072018]' : 'bg-emerald-600 text-white'}`}>
                            236 Phan Trung
                          </div>
                        </div>
                        <div className="flex justify-between text-[8px] text-emerald-400/80">
                          <span>← HCMC 30m</span>
                          <span>Amata IP 10m →</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {item.type === 'illustration-finance' && (
                    <div className="size-full bg-[#0d221a] p-6 flex items-center justify-center">
                      <div className="w-full max-w-[240px] bg-white dark:bg-slate-900 rounded-xl p-4 shadow-md space-y-2 border dark:border-white/10">
                        <div className="flex items-center justify-between border-b pb-2 dark:border-white/10">
                          <span className={`text-[10px] font-bold tracking-wider uppercase ${isDark ? 'text-[#e6c887]' : 'text-emerald-800'}`}>CASHFLOW PLAN</span>
                          <Calculator className={`size-3.5 ${isDark ? 'text-[#e6c887]' : 'text-emerald-700'}`} />
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[9px]">
                          <div className="p-1.5 rounded bg-stone-100 dark:bg-white/5">
                            <span className="text-muted-foreground block">Equity (30%)</span>
                            <strong className="text-foreground">~600M VND</strong>
                          </div>
                          <div className="p-1.5 rounded bg-stone-100 dark:bg-white/5">
                            <span className="text-muted-foreground block">Loan (70%)</span>
                            <strong className={isDark ? 'text-[#e6c887]' : 'text-primary'}>0% Grace</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Card Body */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground">
                      {item.date}
                    </span>

                    <h2 className="mt-2 font-serif text-xl font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/80 dark:border-white/10 flex items-center justify-between">
                    <span className={`text-xs font-bold tracking-wider uppercase inline-flex items-center gap-1.5 ${
                      isDark ? 'text-[#e6c887]' : 'text-primary'
                    }`}>
                      {t.news.readMore}
                      <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
