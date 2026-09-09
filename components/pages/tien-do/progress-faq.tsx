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
          question: 'When will Bcons Central Park be handed over?',
          answer:
            'The project broke ground on May 27, 2026, and is scheduled for completion and key handover in Quarter II/2029 following a disciplined 36-month construction timeline.',
        },
        {
          question: 'When will Bcons Central Park officially launch for sale?',
          answer:
            'The project broke ground on May 27, 2026, and is currently in the initial consultation phase. The official sales launch with unit pricing and payment schemes will be announced directly by the developer.',
        },
        {
          question: 'What is the current construction status of Bcons Central Park?',
          answer:
            'Bcons Central Park Tam Hiep broke ground on May 27, 2026, completed site clearance and mass piling, and is currently constructing the foundation. Basement completion is expected in Q4/2026 – Q1/2027, superstructure in 2027 – 2028, and handover in Q2/2029.',
        },
      ]
    : [
        {
          question: 'Bcons Central Park khi nào bàn giao?',
          answer:
            'Dự án chính thức khởi công ngày 27/05/2026 và dự kiến hoàn thành, bàn giao căn hộ cho cư dân vào Quý II/2029 theo đúng tiến độ kế hoạch 36 tháng.',
        },
        {
          question: 'Bcons Central Park bao giờ mở bán chính thức?',
          answer:
            'Dự án đã khởi công ngày 27/05/2026 và đang trong giai đoạn tiếp nhận đăng ký nguyện vọng. Thời điểm mở bán chính thức cùng bảng giá chi tiết từng đợt và chính sách ưu đãi sẽ do chủ đầu tư công bố trong thời gian tới.',
        },
        {
          question: 'Tiến độ thi công Bcons Central Park hiện tại tới đâu?',
          answer:
            'Bcons Central Park Tam Hiệp khởi công ngày 27/05/2026, đã hoàn tất chuẩn bị mặt bằng và ép cọc đại trà, hiện đang tập trung thi công phần đài móng. Tầng hầm dự kiến triển khai trong Quý IV/2026 – Quý I/2027, phần thân trong 2027 – 2028 và bàn giao Quý II/2029.',
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
