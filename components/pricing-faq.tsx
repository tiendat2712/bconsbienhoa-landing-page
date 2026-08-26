'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const faqs = [
  {
    question: 'Giá căn hộ Bcons Central Park bao nhiêu?',
    answer:
      'Giá bán dự kiến dao động từ 2,0 đến 3,8 tỷ đồng tuỳ loại căn hộ (1 – 3 phòng ngủ, diện tích 43 – 86 m²), tầng, hướng view và chính sách áp dụng tại thời điểm mở bán. Đây là mức giá tham khảo trong giai đoạn giới thiệu dự án.',
  },
  {
    question: 'Bcons Central Park giá một căn 2 phòng ngủ là bao nhiêu?',
    answer:
      'Căn 2 phòng ngủ diện tích 51 – 58 m² có giá dự kiến khoảng 2,5 – 2,8 tỷ đồng. Mức giá cụ thể phụ thuộc vào tầng, hướng nhìn và giỏ hàng còn lại tại thời điểm bạn chọn căn.',
  },
  {
    question: 'Bcons Tam Hiệp giá đã bao gồm VAT và phí bảo trì chưa?',
    answer:
      'Mức giá tham khảo ở trên chưa bao gồm 10% VAT và 2% phí bảo trì. Hai khoản này sẽ được thể hiện rõ trong bảng tính giá chính thức từ chủ đầu tư khi dự án công bố mở bán.',
  },
]

export function PricingFaq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="cau-hoi" className="scroll-mt-24 bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <Reveal>
          <h2 className="font-serif text-3xl leading-tight text-balance text-foreground md:text-4xl">
            Câu hỏi thường gặp
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 border-t border-border">
            {faqs.map((faq, index) => {
              const isOpen = open === index
              return (
                <div key={faq.question} className="border-b border-border">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-primary"
                    >
                      <span className="font-serif text-lg text-foreground md:text-xl">
                        {faq.question}
                      </span>
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary">
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
