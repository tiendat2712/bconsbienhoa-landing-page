'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const faqs = [
  {
    question: 'Mặt bằng tầng căn hộ Bcons Central Park được bố trí như thế nào?',
    answer:
      'Mỗi block cao 22 tầng nổi với lõi thang máy và thang thoát hiểm bố trí trung tâm, hành lang giữa thông gió tự nhiên hai đầu. Cách bố trí này giúp không có căn hộ tối — mọi căn đều tiếp cận ánh sáng và thông gió tự nhiên. Mỗi tầng điển hình có khoảng 28 – 32 căn tuỳ block.',
  },
  {
    question: 'Diện tích các loại căn hộ 1PN, 2PN Bcons Central Park là bao nhiêu m²?',
    answer:
      'Căn 1 phòng ngủ có diện tích 43 – 45 m² (giá dự kiến 2,0 – 2,3 tỷ đồng), căn 2 phòng ngủ 51 – 58 m² (giá dự kiến 2,5 – 2,8 tỷ đồng) và căn 3 phòng ngủ 85 – 86 m² (giá dự kiến 3,4 – 3,8 tỷ đồng). Diện tích là số tham khảo giai đoạn giới thiệu và sẽ chốt theo hợp đồng mua bán.',
  },
  {
    question: 'Căn hộ Bcons Central Park có mấy hướng ban công chính?',
    answer:
      'Nhờ bố trí 5 block ôm quanh công viên trung tâm, ban công căn hộ chủ yếu hướng về công viên nội khu, hồ bơi hoặc view thành phố. Căn góc có hai mặt thoáng. Hướng cụ thể của từng căn phụ thuộc vào block và vị trí tầng, bạn nên xem mặt bằng tổng thể để chọn hướng phù hợp.',
  },
]

export function FloorPlanFaq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="cau-hoi" className="scroll-mt-24 bg-secondary/50 py-20 lg:py-24">
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
                      aria-controls={`floorplan-faq-panel-${index}`}
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
                    id={`floorplan-faq-panel-${index}`}
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
