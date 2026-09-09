'use client'

import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { Reveal } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function NewsReferences() {
  const { theme, locale, t } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  const subPages = isEn
    ? [
        {
          title: 'Pricing & Installments',
          desc: 'Indicative pricing from 1.85 B VND and flexible milestone payments.',
          href: '/gia-ban',
        },
        {
          title: 'Location at 236 Phan Trung',
          desc: 'Downtown Bien Hoa connectivity and regional transit links.',
          href: '/vi-tri',
        },
        {
          title: 'Floor Plans & Layouts',
          desc: 'Master plan and detailed unit dimensions from 43 to 86 sqm.',
          href: '/mat-bang',
        },
        {
          title: 'Internal Amenities',
          desc: '7,700+ sqm central green park, infinity pool, and shophouses.',
          href: '/tien-ich',
        },
        {
          title: 'Legal Compliance',
          desc: 'Long-term freehold tenure, 1/500 detailed plan, and permits.',
          href: '/phap-ly',
        },
        {
          title: 'Developer Bcons Group',
          desc: 'Development track record and 20+ delivered residential projects.',
          href: '/chu-dau-tu',
        },
        {
          title: 'Construction Progress',
          desc: 'Chronological construction milestones and Q2/2029 handover.',
          href: '/tien-do',
        },
      ]
    : [
        {
          title: 'Giá bán & Chính sách',
          desc: 'Bảng giá dự kiến từ 1,85 tỷ và 3 phương thức thanh toán linh hoạt.',
          href: '/gia-ban',
        },
        {
          title: 'Vị trí 236 Phan Trung',
          desc: 'Bản đồ toạ độ trung tâm Biên Hòa và kết nối liên vùng.',
          href: '/vi-tri',
        },
        {
          title: 'Mặt bằng căn hộ',
          desc: 'Mặt bằng tổng thể và chi tiết căn 43 – 86 m².',
          href: '/mat-bang',
        },
        {
          title: 'Tiện ích nội khu',
          desc: 'Công viên hơn 7.700 m², hồ bơi, gym và shophouse.',
          href: '/tien-ich',
        },
        {
          title: 'Pháp lý dự án',
          desc: 'Sở hữu lâu dài, quy hoạch và hồ sơ pháp lý hoàn chỉnh.',
          href: '/phap-ly',
        },
        {
          title: 'Chủ đầu tư Bcons',
          desc: 'Hồ sơ năng lực, uy tín và các dự án đã bàn giao đúng hẹn.',
          href: '/chu-dau-tu',
        },
        {
          title: 'Tiến độ xây dựng',
          desc: 'Các mốc triển khai và kế hoạch bàn giao căn hộ.',
          href: '/tien-do',
        },
      ]

  return (
    <section className="bg-secondary/40 dark:bg-card/40 py-20 lg:py-24 border-t border-border/80 dark:border-white/10 transition-colors">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <Reveal>
          <span className={`text-xs font-bold tracking-[0.22em] uppercase transition-colors ${
            isDark ? 'text-[#e6c887]' : 'text-primary'
          }`}>
            {t.related.allCategories}
          </span>
          <h2 className="mt-4 font-serif text-2xl font-bold text-foreground md:text-3xl">
            {t.related.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-2xl">
            {t.related.desc}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subPages.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.04}>
              <Link
                href={item.href}
                className={`group flex h-full flex-col justify-between p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'border-white/10 bg-card/80 hover:border-[#e6c887]/50 shadow-md'
                    : 'border-border bg-card hover:border-primary/40 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <ArrowUpRight className={`size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      isDark ? 'text-[#e6c887]' : 'text-primary'
                    }`} />
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>

                <div className={`mt-4 pt-3 border-t border-border/60 dark:border-white/10 text-[11px] font-bold tracking-wider uppercase ${
                  isDark ? 'text-[#e6c887]' : 'text-primary'
                }`}>
                  {t.news.readMore}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
