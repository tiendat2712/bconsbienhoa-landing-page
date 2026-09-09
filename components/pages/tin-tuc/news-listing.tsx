'use client'

import { ArrowUpRight, Calculator, CheckSquare, ExternalLink, MapPin } from 'lucide-react'
import Link from 'next/link'
import { Reveal } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function NewsListing() {
  const { theme, locale, t } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  const guides = isEn
    ? [
        {
          id: 'danh-gia-chi-tiet-bcons-central-park',
          date: '19/8/2026',
          tag: 'Project Evaluation',
          title: 'Comprehensive Review: Bcons Central Park Phan Trung, Tam Hiep, Dong Nai',
          desc: 'Location, legal framework, architectural design, amenities, pricing, and construction schedule — comprehensive analysis before purchasing.',
          href: '/gia-ban',
          image: '/images/hero-towers.png',
          type: 'image',
        },
        {
          id: 'kinh-nghiem-mua-can-ho-hinh-thanh-tuong-lai',
          date: '10/8/2026',
          tag: 'Legal Checklist',
          title: '7 Essential Legal Checks When Buying Future Off-Plan Apartments',
          desc: 'From construction permits to bank guarantees and sales contracts — practical legal checklist to avoid pitfalls.',
          href: '/phap-ly',
          type: 'illustration-checklist',
        },
        {
          id: 'so-sanh-vi-tri-tam-hiep-bien-hoa',
          date: '5/8/2026',
          tag: 'Location Comparison',
          title: 'Comparing Tam Hiep Location with Surrounding Areas in Bien Hoa',
          desc: 'Tam Hiep, Trang Dai or Long Binh — which neighborhood fits your lifestyle and investment goal? An objective overview.',
          href: '/vi-tri',
          type: 'illustration-map',
        },
        {
          id: 'huong-dan-tinh-toan-tai-chinh-mua-can-ho',
          date: '29/7/2026',
          tag: 'Mortgage Planning',
          title: 'Mortgage & Financial Planning Guide for Home Buyers: How Much to Borrow?',
          desc: 'How to calculate your equity, safe debt-to-income ratio, and hidden closing costs when planning installment financing.',
          href: '/#bang-tinh-tai-chinh',
          type: 'illustration-finance',
        },
      ]
    : [
        {
          id: 'danh-gia-chi-tiet-bcons-central-park',
          date: '19/8/2026',
          tag: 'Đánh giá dự án',
          title: 'Đánh Giá Chi Tiết Dự Án Bcons Central Park Phan Trung, Tam Hiệp, Đồng Nai',
          desc: 'Vị trí, pháp lý, thiết kế, tiện ích, giá bán và tiến độ xây dựng — phân tích toàn diện dự án Bcons Central Park trước khi quyết định.',
          href: '/gia-ban',
          image: '/images/hero-towers.png',
          type: 'image',
        },
        {
          id: 'kinh-nghiem-mua-can-ho-hinh-thanh-tuong-lai',
          date: '10/8/2026',
          tag: 'Pháp lý thực chiến',
          title: 'Kinh Nghiệm Mua Căn Hộ Hình Thành Trong Tương Lai: 7 Điều Cần Kiểm Tra',
          desc: 'Từ giấy phép xây dựng, bảo lãnh ngân hàng đến hợp đồng mua bán — checklist pháp lý giúp bạn tránh rủi ro khi mua căn hộ chưa bàn giao.',
          href: '/phap-ly',
          type: 'illustration-checklist',
        },
        {
          id: 'so-sanh-vi-tri-tam-hiep-bien-hoa',
          date: '5/8/2026',
          tag: 'Quy hoạch & Vị trí',
          title: 'So Sánh Vị Trí Tam Hiệp Với Các Khu Vực Lân Cận Tại Biên Hòa',
          desc: 'Tam Hiệp, Trảng Dài hay Long Bình — khu vực nào phù hợp với nhu cầu an cư và đầu tư của bạn? Góc nhìn khách quan về tiện ích, giá và tiềm năng.',
          href: '/vi-tri',
          type: 'illustration-map',
        },
        {
          id: 'huong-dan-tinh-toan-tai-chinh-mua-can-ho',
          date: '29/7/2026',
          tag: 'Tài chính mua nhà',
          title: 'Hướng Dẫn Tính Toán Tài Chính Mua Căn Hộ: Vay Bao Nhiêu Là Hợp Lý?',
          desc: 'Cách xác định vốn tự có, tỷ lệ vay an toàn theo thu nhập và những khoản chi phí dễ bị bỏ quên khi lập kế hoạch mua nhà trả góp.',
          href: '/#bang-tinh-tai-chinh',
          type: 'illustration-finance',
        },
      ]

  return (
    <section className="bg-background pt-28 pb-16 md:pt-36 lg:pb-20 transition-colors">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        {/* Page Header */}
        <Reveal>
          <div className="max-w-3xl">
            <span
              className={`text-xs font-bold tracking-[0.22em] uppercase transition-colors ${
                isDark ? 'text-[#e6c887]' : 'text-accent'
              }`}
            >
              {isEn ? 'Press & Market Analysis' : 'Báo chí & Phân tích thị trường'}
            </span>
            <h1 className="mt-4 font-serif text-3xl leading-tight text-balance text-foreground md:text-5xl font-bold">
              {isEn
                ? 'Official Press Coverage & In-Depth Insights'
                : 'Tin Tức Báo Chí & Phân Tích Chuyên Sâu Bcons Central Park'}
            </h1>

            <div className="mt-6 leading-relaxed text-pretty text-muted-foreground md:text-lg">
              <p>
                {isEn
                  ? 'Authoritative news articles from national financial media and in-depth buyer advisory guides for Bcons Central Park Tam Hiep. Check out '
                  : 'Tổng hợp các bài báo chính thống từ các cơ quan truyền thông kinh tế uy tín và cẩm nang phân tích chuyên sâu dự án Bcons Central Park Tam Hiệp (236 Phan Trung, Biên Hòa). Tìm hiểu thêm về '}
                <Link
                  href="/gia-ban"
                  className={`font-semibold underline underline-offset-4 transition-colors ${
                    isDark ? 'text-[#e6c887] hover:text-[#f7e4b5]' : 'text-primary'
                  }`}
                >
                  {isEn ? 'Pricing' : 'giá bán'}
                </Link>
                ,{' '}
                <Link
                  href="/mat-bang"
                  className={`font-semibold underline underline-offset-4 transition-colors ${
                    isDark ? 'text-[#e6c887] hover:text-[#f7e4b5]' : 'text-primary'
                  }`}
                >
                  {isEn ? 'Floor Plans' : 'mặt bằng'}
                </Link>{' '}
                {isEn ? 'or ' : 'hoặc '}
                <Link
                  href="/phap-ly"
                  className={`font-semibold underline underline-offset-4 transition-colors ${
                    isDark ? 'text-[#e6c887] hover:text-[#f7e4b5]' : 'text-primary'
                  }`}
                >
                  {isEn ? 'Legal Foundation' : 'pháp lý dự án'}
                </Link>
                .
              </p>
            </div>
          </div>
        </Reveal>

        {/* SECTION 1: OFFICIAL PRESS MEDIA */}
        <div className="mt-14 pt-10 border-t border-border/80 dark:border-white/10">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    isDark
                      ? 'bg-[#e6c887]/15 text-[#e6c887] border border-[#e6c887]/30'
                      : 'bg-primary/10 text-primary border border-primary/20'
                  }`}
                >
                  {isEn ? 'Official Press Coverage' : 'Báo chí & Truyền thông chính thống'}
                </span>
                <h2 className="mt-3 font-serif text-2xl md:text-3xl font-bold text-foreground">
                  {isEn
                    ? 'Prestigious Media Portals Report on Bcons'
                    : 'Báo Chí Đưa Tin Về Tập Đoàn Bcons'}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground max-w-2xl leading-relaxed">
                  {isEn
                    ? 'VietnamFinance, CafeF, and Doanh Nghiep & Hoi Nhap highlight capital investment, group capabilities, and sustainable management philosophy.'
                    : 'Các bài viết phân tích từ VietnamFinance, CafeF và Doanh Nghiệp & Hội Nhập về quy mô đầu tư 6.500 tỷ đồng, năng lực hệ sinh thái và uy tín phát triển bền vững.'}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {t.news.posts.map((post, idx) => (
              <Reveal key={post.title} delay={idx * 0.08}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${post.title} - ${post.source}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-card/80 dark:hover:border-[#e6c887]/40"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 z-10">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold shadow-sm backdrop-blur-md transition-colors ${
                          isDark
                            ? 'bg-[#072018]/90 text-[#e6c887] border border-[#e6c887]/30'
                            : 'bg-white/95 text-primary border border-primary/20'
                        }`}
                      >
                        {post.source}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 z-10">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/60 text-white/90 backdrop-blur-md">
                        {post.date}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div>
                      <span
                        className={`text-[11px] font-bold tracking-wider uppercase transition-colors ${
                          isDark ? 'text-[#e6c887]' : 'text-[#b88728]'
                        }`}
                      >
                        {post.tag}
                      </span>
                      <h3 className="mt-2.5 font-serif text-lg sm:text-xl font-bold leading-snug text-balance text-foreground group-hover:text-primary dark:group-hover:text-[#e6c887] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {post.summary}
                      </p>
                    </div>

                    <div className="mt-auto pt-6 flex items-center justify-between border-t border-border/60 dark:border-white/10">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold transition-colors duration-300 ${
                          isDark
                            ? 'text-[#e6c887] group-hover:text-[#f7e4b5]'
                            : 'text-primary group-hover:text-[#b88728]'
                        }`}
                      >
                        {isEn ? `Read on ${post.source}` : `Đọc bài viết gốc`}
                        <ExternalLink className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                      <span className="text-[11px] text-muted-foreground/70 font-medium">
                        {post.source} ↗
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        {/* SECTION 2: EXPERT ADVISORY GUIDES */}
        <div className="mt-16 pt-12 border-t border-border/80 dark:border-white/10">
          <Reveal>
            <div className="max-w-2xl">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  isDark
                    ? 'bg-[#e6c887]/15 text-[#e6c887] border border-[#e6c887]/30'
                    : 'bg-primary/10 text-primary border border-primary/20'
                }`}
              >
                {isEn ? 'Buyer Advisory Guides' : 'Cẩm nang & Tư vấn thực chiến'}
              </span>
              <h2 className="mt-3 font-serif text-2xl md:text-3xl font-bold text-foreground">
                {isEn
                  ? 'In-Depth Analysis for Apartment Buyers'
                  : 'Góc Phân Tích & Hướng Dẫn Mua Nhà'}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {isEn
                  ? 'Essential legal checklists, spatial location reviews, and safe financial calculations to assist smart decision making.'
                  : 'Kiểm tra pháp lý minh bạch, đánh giá ưu nhược điểm vị trí và kế hoạch tài chính trả góp giúp khách hàng đưa ra quyết định chuẩn xác.'}
              </p>
            </div>
          </Reveal>

          {/* 2-Column Guide Grid */}
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {guides.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.08}>
                <Link
                  href={item.href}
                  className={`group h-full flex flex-col overflow-hidden rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    isDark
                      ? 'border-white/15 bg-card/80 hover:border-[#e6c887]/50'
                      : 'border-border bg-card'
                  }`}
                >
                  {/* Visual Thumbnail */}
                  <div className="relative h-56 sm:h-60 w-full overflow-hidden border-b border-border/70 dark:border-white/10">
                    {item.type === 'image' && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    )}

                    {item.type === 'illustration-checklist' && (
                      <div className="size-full bg-[#0a271f] p-6 flex items-center justify-center">
                        <div className="w-full max-w-[240px] bg-white dark:bg-slate-900 rounded-xl p-4 shadow-md space-y-2.5 border dark:border-white/10">
                          <div className="flex items-center justify-between border-b pb-2 dark:border-white/10">
                            <span
                              className={`text-[10px] font-bold tracking-wider uppercase ${
                                isDark ? 'text-[#e6c887]' : 'text-emerald-800'
                              }`}
                            >
                              CHECKLIST PHÁP LÝ
                            </span>
                            <CheckSquare
                              className={`size-3.5 ${
                                isDark ? 'text-[#e6c887]' : 'text-emerald-700'
                              }`}
                            />
                          </div>
                          <div className="space-y-1.5 text-[9px] text-muted-foreground font-medium">
                            <div className="flex items-center gap-1.5">
                              <span className="size-1.5 rounded-full bg-emerald-500" />
                              <span>Quy hoạch 1/500 phê duyệt</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="size-1.5 rounded-full bg-emerald-500" />
                              <span>Giấy phép xây dựng hợp lệ</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="size-1.5 rounded-full bg-emerald-500" />
                              <span>Bảo lãnh ngân hàng theo tiến độ</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {item.type === 'illustration-map' && (
                      <div className="size-full bg-[#072018] p-6 flex items-center justify-center relative overflow-hidden">
                        <div className="relative w-full max-w-[240px] h-36 border border-emerald-500/20 rounded-xl bg-emerald-950/50 p-3 flex flex-col justify-between">
                          <div className="flex items-center justify-between text-[9px] text-emerald-300 font-bold">
                            <span>TP. BIÊN HÒA</span>
                            <span>TRUNG TÂM TAM HIỆP</span>
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <div
                              className={`p-2 rounded-lg text-[9px] font-bold shadow ${
                                isDark ? 'bg-[#e6c887] text-[#072018]' : 'bg-emerald-600 text-white'
                              }`}
                            >
                              236 Phan Trung
                            </div>
                          </div>
                          <div className="flex justify-between text-[8px] text-emerald-400/80">
                            <span>← TP.HCM 30p</span>
                            <span>KCN Amata 10p →</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {item.type === 'illustration-finance' && (
                      <div className="size-full bg-[#0d221a] p-6 flex items-center justify-center">
                        <div className="w-full max-w-[240px] bg-white dark:bg-slate-900 rounded-xl p-4 shadow-md space-y-2 border dark:border-white/10">
                          <div className="flex items-center justify-between border-b pb-2 dark:border-white/10">
                            <span
                              className={`text-[10px] font-bold tracking-wider uppercase ${
                                isDark ? 'text-[#e6c887]' : 'text-emerald-800'
                              }`}
                            >
                              DÒNG TIỀN TRẢ GÓP
                            </span>
                            <Calculator
                              className={`size-3.5 ${
                                isDark ? 'text-[#e6c887]' : 'text-emerald-700'
                              }`}
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-[9px]">
                            <div className="p-1.5 rounded bg-stone-100 dark:bg-white/5">
                              <span className="text-muted-foreground block">Vốn tự có (30%)</span>
                              <strong className="text-foreground">~600 Triệu</strong>
                            </div>
                            <div className="p-1.5 rounded bg-stone-100 dark:bg-white/5">
                              <span className="text-muted-foreground block">Vay ngân hàng (70%)</span>
                              <strong className={isDark ? 'text-[#e6c887]' : 'text-primary'}>
                                Ân hạn 0% lãi
                              </strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content Card Body */}
                  <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-[11px] font-bold tracking-wider uppercase ${
                            isDark ? 'text-[#e6c887]' : 'text-[#b88728]'
                          }`}
                        >
                          {item.tag}
                        </span>
                        <span className="text-xs text-muted-foreground">{item.date}</span>
                      </div>

                      <h3 className="mt-2.5 font-serif text-xl font-bold leading-snug text-foreground group-hover:text-primary dark:group-hover:text-[#e6c887] transition-colors">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/80 dark:border-white/10 flex items-center justify-between">
                      <span
                        className={`text-xs font-bold tracking-wider uppercase inline-flex items-center gap-1.5 ${
                          isDark ? 'text-[#e6c887]' : 'text-primary'
                        }`}
                      >
                        {isEn ? 'View Analysis' : 'Xem phân tích chi tiết'}
                        <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

