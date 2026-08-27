'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function PricingFaq() {
  const { theme, locale } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'
  const [open, setOpen] = useState<number | null>(null)

  const faqs = isEn
    ? [
        {
          question: 'What is the starting price for Bcons Central Park?',
          answer:
            'Estimated starting price is from 2.0 billion VND for a 1-bedroom unit (43 – 45 sqm), approximately 45 – 50 million VND/sqm depending on location and floor tier.',
        },
        {
          question: 'What payment methods and financial support are available?',
          answer:
            'The developer offers flexible stage-by-stage payments of 2 – 5% per milestone, with partner banks supporting up to 70% loan value with grace periods on interest.',
        },
        {
          question: 'Are there discounts for early payment schedules?',
          answer:
            'Buyers choosing early lump-sum payment schedules can receive direct discounts up to 6 – 8% off total contract value.',
        },
      ]
    : [
        {
          question: 'Giá bán Bcons Central Park Tam Hiệp từ bao nhiêu?',
          answer:
            'Giá bán dự kiến từ 2,0 tỷ đồng cho căn 1 phòng ngủ (43 – 45 m²), tương đương khoảng 45 – 50 triệu/m² tuỳ vị trí, tầng và hướng view.',
        },
        {
          question: 'Phương thức thanh toán Bcons Phan Trung thế nào?',
          answer:
            'Dự án áp dụng thanh toán theo tiến độ xây dựng thực tế, mỗi đợt 2 – 5%, ngân hàng hỗ trợ vay đến 70% giá trị căn hộ với chính sách ân hạn nợ gốc.',
        },
        {
          question: 'Có chính sách chiết khấu khi thanh toán sớm không?',
          answer:
            'Khách hàng chọn phương thức thanh toán nhanh vượt tiến độ có thể nhận chiết khấu trực tiếp vào giá bán theo công bố chính thức từ chủ đầu tư.',
        },
      ]

  return (
    <section id="cau-hoi" className="scroll-mt-24 bg-background py-20 lg:py-24 transition-colors">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <Reveal>
          <h2 className="font-serif text-3xl leading-tight text-balance text-foreground md:text-4xl font-bold">
            {isEn ? 'Frequently Asked Questions About Pricing' : 'Câu hỏi thường gặp về giá bán'}
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
