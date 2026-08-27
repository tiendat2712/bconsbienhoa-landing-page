'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function LegalFaq() {
  const { theme, locale } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'
  const [open, setOpen] = useState<number | null>(null)

  const faqs = isEn
    ? [
        {
          question: 'What is the ownership tenure of Bcons Central Park?',
          answer:
            'Bcons Central Park provides long-term freehold ownership certificates (Pink Book) for Vietnamese citizens, and 50-year leasehold for foreign buyers per national law.',
        },
        {
          question: 'What legal documents have already been issued?',
          answer:
            'The project is situated on transparently auctioned land with approved 1/500 zoning plans, investment approvals, and ongoing construction permit approvals.',
        },
        {
          question: 'When will residents receive their ownership certificates (Pink Book)?',
          answer:
            'Based on Bcons Group’s proven track record across past projects, pink books are handed directly to residents within 6 to 12 months following key handover.',
        },
      ]
    : [
        {
          question: 'Hình thức sở hữu căn hộ Bcons Central Park là gì?',
          answer:
            'Căn hộ Bcons Central Park có hình thức sở hữu sổ hồng lâu dài đối với công dân Việt Nam, và 50 năm theo quy định pháp luật đối với người nước ngoài.',
        },
        {
          question: 'Dự án Bcons Tam Hiệp đã có những giấy tờ pháp lý nào?',
          answer:
            'Dự án được phát triển trên quỹ đất đấu giá công khai, đã có quy hoạch 1/500, chấp thuận chủ trương đầu tư và đang hoàn thiện các thủ tục pháp lý để sẵn sàng ký hợp đồng mua bán theo quy định.',
        },
        {
          question: 'Khi nào cư dân được nhận sổ hồng sau khi nhận nhà?',
          answer:
            'Theo cam kết tiến độ và uy tín của Tập đoàn Bcons qua các dự án trước đó, sổ hồng thường được bàn giao cho cư dân trong vòng 6 – 12 tháng kể từ thời điểm bàn giao nhà.',
        },
      ]

  return (
    <section id="cau-hoi" className="scroll-mt-24 bg-background py-20 lg:py-24 transition-colors">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <Reveal>
          <h2 className="font-serif text-3xl leading-tight text-balance text-foreground md:text-4xl font-bold">
            {isEn ? 'Frequently Asked Questions About Legal Approvals' : 'Câu hỏi thường gặp về pháp lý dự án'}
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
