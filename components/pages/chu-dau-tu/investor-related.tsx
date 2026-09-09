'use client'

import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { Reveal } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function InvestorRelated() {
  const { theme, locale, t } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  const cards = isEn
    ? [
        {
          kind: t.related.kind,
          title: 'Legal Foundation',
          desc: 'Long-term freehold, 1/500 zoning and regulatory permits.',
          href: '/phap-ly',
        },
        {
          kind: t.related.kind,
          title: 'Construction Progress',
          desc: 'Key development milestones and handover schedules.',
          href: '/tien-do',
        },
        {
          kind: t.related.kind,
          title: 'Pricing & Policies',
          desc: 'Starting from 1.85 B VND with flexible installment schemes.',
          href: '/gia-ban',
        },
        {
          kind: t.related.kind,
          title: 'Location at 236 Phan Trung',
          desc: 'Central Bien Hoa connectivity and regional transit links.',
          href: '/vi-tri',
        },
      ]
    : [
        {
          kind: t.related.kind,
          title: 'Pháp lý dự án',
          desc: 'Sở hữu lâu dài, quy hoạch và hồ sơ pháp lý hoàn chỉnh.',
          href: '/phap-ly',
        },
        {
          kind: t.related.kind,
          title: 'Tiến độ xây dựng',
          desc: 'Các mốc triển khai và kế hoạch bàn giao căn hộ.',
          href: '/tien-do',
        },
        {
          kind: t.related.kind,
          title: 'Giá bán Bcons Central Park',
          desc: 'Bảng giá dự kiến từ 1,85 tỷ đồng và 3 phương thức thanh toán.',
          href: '/gia-ban',
        },
        {
          kind: t.related.kind,
          title: 'Vị trí 236 Phan Trung',
          desc: 'Bản đồ toạ độ trung tâm Biên Hòa và kết nối liên vùng.',
          href: '/vi-tri',
        },
      ]

  const chips = [
    { label: t.nav.overview, href: '/#tong-quan' },
    { label: t.nav.pricing, href: '/gia-ban' },
    { label: t.nav.location, href: '/vi-tri' },
    { label: t.nav.plans, href: '/mat-bang' },
    { label: t.nav.amenities, href: '/tien-ich' },
    { label: t.nav.legal, href: '/phap-ly' },
    { label: t.nav.progress, href: '/tien-do' },
    { label: t.nav.news, href: '/tin-tuc' },
  ]

  return (
    <section className="bg-background py-20 lg:py-24 transition-colors">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <Reveal>
          <h2 className="font-serif text-3xl leading-tight text-balance text-foreground md:text-4xl font-bold">
            {t.related.title}
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-pretty text-muted-foreground">
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
                <span className={`text-[0.68rem] font-semibold tracking-[0.2em] uppercase transition-colors ${isDark ? 'text-[#e6c887]' : 'text-accent'}`}>
                  {card.kind}
                </span>
                <span className="mt-3 flex items-center gap-2 font-serif text-xl font-bold text-foreground">
                  {card.title}
                  <ArrowUpRight className={`size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isDark ? 'text-[#e6c887]' : 'text-primary'}`} />
                </span>
                <span className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {card.desc}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-16 border-t border-border dark:border-white/10 pt-10">
            <p className={`text-xs font-semibold tracking-[0.22em] uppercase transition-colors ${isDark ? 'text-[#e6c887]' : 'text-primary'}`}>
              {t.related.allCategories}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {chips.map((chip) => (
                <Link
                  key={chip.label}
                  href={chip.href}
                  className={`rounded-full border px-5 py-2.5 text-sm transition-all ${
                    isDark
                      ? 'border-white/10 bg-card/80 text-white/90 hover:border-[#e6c887]/50 hover:text-[#e6c887]'
                      : 'border-border bg-card text-foreground/85 hover:border-primary/40 hover:text-primary'
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
