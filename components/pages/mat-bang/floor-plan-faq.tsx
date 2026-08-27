'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function FloorPlanFaq() {
  const { theme, locale } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'
  const [open, setOpen] = useState<number | null>(null)

  const faqs = isEn
    ? [
        {
          question: 'What unit types are available at Bcons Central Park?',
          answer:
            'The project offers 1-bedroom units (43 – 45 sqm), 2-bedroom units (51 – 58 sqm), and 3-bedroom units (85 – 86 sqm), alongside 113 podium commercial shophouses.',
        },
        {
          question: 'How is the 2-bedroom apartment configured?',
          answer:
            'The 2-bedroom layout features 2 naturally lit bedrooms, 2 full bathrooms, an airy open kitchen, a private laundry loggia, and a spacious living room connected to a balcony.',
        },
        {
          question: 'How many blocks make up the overall project?',
          answer:
            'The project consists of 5 residential towers rising 22 storeys arranged strategically around the 7,700+ sqm central green park.',
        },
      ]
    : [
        {
          question: 'Bcons Central Park có những loại căn hộ nào?',
          answer:
            'Dự án có các loại căn hộ 1 phòng ngủ (43 – 45 m²), 2 phòng ngủ (51 – 58 m²) và 3 phòng ngủ (85 – 86 m²), cùng 113 căn shophouse thương mại tại khối đế.',
        },
        {
          question: 'Căn hộ 2 phòng ngủ Bcons Tam Hiệp bố trí thế nào?',
          answer:
            'Căn 2PN được thiết kế tối ưu với 2 phòng ngủ đều có cửa sổ đón sáng tự nhiên, 2 phòng vệ sinh, phòng khách liên thông ban công và khu vực bếp thông thoáng với logia phơi riêng.',
        },
        {
          question: 'Mặt bằng tổng thể Bcons Phan Trung có bao nhiêu block?',
          answer:
            'Dự án gồm 5 block căn hộ cao 22 tầng được bố trí bao quanh công viên trung tâm hơn 7.700 m², tạo khoảng lùi thông thoáng và không gian cảnh quan xanh cho toàn khu.',
        },
      ]

  return (
    <section id="cau-hoi" className="scroll-mt-24 bg-background py-20 lg:py-24 transition-colors">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <Reveal>
          <h2 className="font-serif text-3xl leading-tight text-balance text-foreground md:text-4xl font-bold">
            {isEn ? 'Frequently Asked Questions About Floor Plans' : 'Câu hỏi thường gặp về mặt bằng dự án'}
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
