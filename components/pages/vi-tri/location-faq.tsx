'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function LocationFaq() {
  const { theme, locale } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'
  const [open, setOpen] = useState<number | null>(null)

  const faqs = isEn
    ? [
        {
          question: 'Where exactly is Bcons Central Park located?',
          answer:
            'The project is located at 236 Phan Trung, Tam Hiep Ward, Dong Nai Province (formerly Bien Hoa City), directly on the central bustling street of Tam Hiep.',
        },
        {
          question: 'How long does it take to travel from the project to Ho Chi Minh City?',
          answer:
            'It takes approximately 30 – 40 minutes via Pham Van Dong Blvd or National Route 1K to reach Thu Duc City and downtown Ho Chi Minh City.',
        },
        {
          question: 'What nearby schools and hospitals are within 5 minutes?',
          answer:
            'Within a 1–2 km radius are Dong Nai General Hospital, Hoan My International Hospital, Tan Hiep Primary School, and Lac Hong University.',
        },
      ]
    : [
        {
          question: 'Vị trí Bcons Central Park Tam Hiệp nằm ở đâu?',
          answer:
            'Dự án toạ lạc tại số 236 Phan Trung, Phường Tam Hiệp, Thành phố Đồng Nai (khu vực TP. Biên Hòa cũ), ngay trục đường thương mại sầm uất của khu vực.',
        },
        {
          question: 'Từ dự án đi TP.HCM mất bao lâu?',
          answer:
            'Di chuyển đến TP. Thủ Đức và trung tâm TP.HCM mất khoảng 30 – 45 phút qua tuyến Phạm Văn Đồng kéo dài hoặc Quốc lộ 1K.',
        },
        {
          question: 'Gần dự án có những bệnh viện, trường học nào?',
          answer:
            'Trong bán kính 1 – 2 km có BV Đa khoa Đồng Nai, BV Quốc tế Hoàn Mỹ, trường Tiểu học Tân Hiệp, trường Quốc tế APC và Đại học Lạc Hồng.',
        },
      ]

  return (
    <section id="cau-hoi" className="scroll-mt-24 bg-background py-20 lg:py-24 transition-colors">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <Reveal>
          <h2 className="font-serif text-3xl leading-tight text-balance text-foreground md:text-4xl font-bold">
            {isEn ? 'Frequently Asked Questions About Location' : 'Câu hỏi thường gặp về vị trí dự án'}
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
