'use client'

import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { Reveal } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function ShowhouseRelated() {
  const { theme, locale, t } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  const cards = isEn
    ? [
        {
          kind: t.related.kind,
          title: 'Floor Plans & Layouts',
          desc: 'Comprehensive master plan, typical floor layouts, and detailed 37 – 88 m² unit designs.',
          href: '/mat-bang',
        },
        {
          kind: t.related.kind,
          title: 'Pricing & Installments',
          desc: 'Expected prices from 1.85 B VND with flexible zero-interest support schemes.',
          href: '/gia-ban',
        },
        {
          kind: t.related.kind,
          title: 'Legal Dossier & Approvals',
          desc: '1/500 approval, construction permit, and long-term freehold pink book.',
          href: '/phap-ly',
        },
        {
          kind: t.related.kind,
          title: 'Location at 236 Phan Trung',
          desc: 'Prime frontage in Tam Hiep Ward, connecting directly to Pham Van Dong & National Route 1K.',
          href: '/vi-tri',
        },
      ]
    : [
        {
          kind: t.related.kind,
          title: 'Mặt bằng Bcons Central Park',
          desc: 'Mặt bằng tổng thể 5 block, tầng điển hình và thiết kế chi tiết 2.820 căn hộ 37 – 88 m².',
          href: '/mat-bang',
        },
        {
          kind: t.related.kind,
          title: 'Bảng giá & Thanh toán',
          desc: 'Bảng giá dự kiến từ 1,85 tỷ/căn, chính sách ân hạn gốc lãi và chiết khấu hấp dẫn.',
          href: '/gia-ban',
        },
        {
          kind: t.related.kind,
          title: 'Pháp lý dự án hoàn chỉnh',
          desc: 'Sở hữu lâu dài, phê duyệt quy hoạch 1/500 và giấy phép xây dựng đầy đủ.',
          href: '/phap-ly',
        },
        {
          kind: t.related.kind,
          title: 'Vị trí 236 Phan Trung',
          desc: 'Toạ độ vàng trung tâm Tam Hiệp, kết nối nhanh chóng về TP.HCM và sân bay Long Thành.',
          href: '/vi-tri',
        },
      ]

  const chips = [
    { label: t.nav.overview, href: '/#tong-quan' },
    { label: t.nav.plans, href: '/mat-bang' },
    { label: t.nav.pricing, href: '/gia-ban' },
    { label: t.nav.location, href: '/vi-tri' },
    { label: t.nav.amenities, href: '/tien-ich' },
    { label: t.nav.legal, href: '/phap-ly' },
    { label: t.nav.investor, href: '/chu-dau-tu' },
    { label: t.nav.progress, href: '/tien-do' },
    { label: t.nav.news, href: '/tin-tuc' },
  ]

  return (
    <section className="bg-background py-16 lg:py-24 border-t border-border/60 transition-colors">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-primary dark:text-[#e6c887]">
            <span className="h-1.5 w-5 rounded-full bg-primary dark:bg-[#e6c887]" />
            <span>{isEn ? 'RELATED SECTIONS' : 'XEM THÊM VỀ DỰ ÁN'}</span>
          </div>
          <h2 className="mt-3 sm:mt-3.5 font-serif text-3xl leading-[1.2] text-balance text-foreground md:text-4xl font-bold">
            {t.related.title}
          </h2>
          <p className="mt-3 max-w-xl leading-relaxed text-pretty text-muted-foreground">
            {t.related.desc}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.06}>
              <Link
                href={card.href}
                className={`group flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'border-white/10 bg-card/80 hover:border-[#e6c887]/50 shadow-lg'
                    : 'border-border bg-card hover:border-primary/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wide uppercase text-primary dark:text-[#e6c887]">
                    {card.kind}
                  </span>
                  <ArrowUpRight
                    className={`size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      isDark ? 'text-[#e6c887]' : 'text-primary'
                    }`}
                  />
                </div>
                <h3 className="mt-3 font-serif text-xl font-bold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.desc}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25}>
          <div className="mt-12">
            <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
              {t.related.allCategories}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <Link
                  key={chip.href}
                  href={chip.href}
                  className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                    isDark
                      ? 'border-white/10 bg-card/60 text-muted-foreground hover:border-[#e6c887]/40 hover:text-white'
                      : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground'
                  }`}
                >
                  {chip.label}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
