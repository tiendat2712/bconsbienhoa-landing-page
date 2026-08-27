'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function AmenityFaq() {
  const { theme, locale } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'
  const [open, setOpen] = useState<number | null>(null)

  const faqs = isEn
    ? [
        {
          question: 'What are the standout internal amenities at Bcons Central Park?',
          answer:
            'The project features an expansive 7,700+ sqm central green park, resort infinity pool, modern gym/yoga center, 113 podium shophouses, children play park, and 24/7 security.',
        },
        {
          question: 'What is the scale of the central green park?',
          answer:
            'The central park spans over 7,700 sqm with water plazas and shaded promenades, creating a pristine green oasis right in downtown Bien Hoa.',
        },
        {
          question: 'What external amenities are within walking distance?',
          answer:
            'Within 500 m to 1 km are Tam Hiep Market, Co.opmart, Vincom Plaza, Dong Nai General Hospital, and prominent schools from kindergarten to universities.',
        },
      ]
    : [
        {
          question: 'Bcons Central Park có những tiện ích nội khu nổi bật nào?',
          answer:
            'Dự án sở hữu công viên cây xanh nội khu hơn 7.700+ m², hồ bơi tràn bờ chuẩn resort, phòng gym/yoga hiện đại, 113 căn shophouse thương mại, khu vui chơi trẻ em và hệ thống an ninh 24/7.',
        },
        {
          question: 'Công viên nội khu Bcons Tam Hiệp có quy mô thế nào?',
          answer:
            'Công viên trung tâm có diện tích hơn 7.700 m² với quảng trường nước, lối dạo bộ rợp bóng mát, mang lại không gian sống xanh hiếm hoi ngay giữa lõi đô thị trung tâm Biên Hòa.',
        },
        {
          question: 'Tiện ích ngoại khu quanh 236 Phan Trung gồm những gì?',
          answer:
            'Trong bán kính 500 m – 1 km có Chợ Tam Hiệp, siêu thị Co.opmart, Vincom Plaza, Bệnh viện Đa khoa Đồng Nai, BV Quốc tế Hoàn Mỹ và trường học từ mầm non đến đại học.',
        },
      ]

  return (
    <section id="cau-hoi" className="scroll-mt-24 bg-background py-20 lg:py-24 transition-colors">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <Reveal>
          <h2 className="font-serif text-3xl leading-tight text-balance text-foreground md:text-4xl font-bold">
            {isEn ? 'Frequently Asked Questions About Amenities' : 'Câu hỏi thường gặp về tiện ích dự án'}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 border-t border-border dark:border-white/10">
            {faqs.map((faq, index) => {
              const isOpen = open === index
              return (
                <div key={faq.question} className="border-b border-border dark:border-white/10">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      className={`flex w-full items-center justify-between gap-6 py-6 text-left transition-colors cursor-pointer ${
                        isOpen
                          ? isDark ? 'text-[#e6c887]' : 'text-primary'
                          : isDark ? 'hover:text-[#e6c887]' : 'hover:text-primary'
                      }`}
                    >
                      <span className="font-serif text-lg font-bold text-foreground md:text-xl">
                        {faq.question}
                      </span>
                      <span
                        className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-all ${
                          isOpen
                            ? isDark ? 'border-[#e6c887] bg-[#e6c887] text-[#072018]' : 'border-primary bg-primary text-primary-foreground'
                            : isDark ? 'border-white/15 bg-card/80 text-[#e6c887]' : 'border-border bg-card text-primary'
                        }`}
                      >
                        <Plus
                          className={`size-4 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                        />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <p className="overflow-hidden pb-6 text-sm leading-relaxed text-pretty text-muted-foreground md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
