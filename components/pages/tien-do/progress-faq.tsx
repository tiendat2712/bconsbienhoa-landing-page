'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function ProgressFaq() {
  const { theme, locale } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'
  const [open, setOpen] = useState<number | null>(null)

  const faqs = isEn
    ? [
        {
          question: 'When did Bcons Central Park break ground?',
          answer:
            'The project held its official groundbreaking ceremony on May 27, 2026, and is actively executing site preparation and deep foundation works.',
        },
        {
          question: 'When is the expected handover timeline?',
          answer:
            'Estimated key handover to homeowners is scheduled for Quarter II/2029 with full fire-safety compliance and basic interior handover standards.',
        },
        {
          question: 'How often is construction progress updated?',
          answer:
            'Construction progress is updated monthly via high-resolution photos and drone video footage published directly by the developer.',
        },
      ]
    : [
        {
          question: 'Dự án Bcons Central Park Tam Hiệp khởi công khi nào?',
          answer:
            'Dự án chính thức làm lễ khởi công vào ngày 27/05/2026 và hiện đang khẩn trương triển khai giai đoạn ép cọc, thi công móng hầm.',
        },
        {
          question: 'Dự kiến khi nào Bcons Phan Trung bàn giao nhà?',
          answer:
            'Dự kiến dự án sẽ hoàn thành và bắt đầu bàn giao căn hộ cho cư dân vào Quý II/2029 theo đúng tiến độ được phê duyệt.',
        },
        {
          question: 'Tiến độ xây dựng được cập nhật với tần suất thế nào?',
          answer:
            'Tiến độ được cập nhật định kỳ hằng tháng qua hình ảnh và video thực tế từ công trường trên các kênh thông tin chính thức của dự án.',
        },
      ]

  return (
    <section id="cau-hoi" className="scroll-mt-24 bg-background py-20 lg:py-24 transition-colors">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <Reveal>
          <h2 className="font-serif text-3xl leading-tight text-balance text-foreground md:text-4xl font-bold">
            {isEn ? 'Frequently Asked Questions About Progress' : 'Câu hỏi thường gặp về tiến độ dự án'}
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
