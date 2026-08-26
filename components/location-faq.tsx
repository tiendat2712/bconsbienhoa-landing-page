'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const faqs = [
  {
    question: 'Bcons Central Park nằm ở đâu?',
    answer:
      'Dự án toạ lạc tại 236 Phan Trung, Phường Tam Hiệp, Thành phố Đồng Nai (khu vực TP. Biên Hòa cũ). Đây là khu lõi trung tâm hiện hữu của thành phố, ngay trục Phan Trung nối hai đại lộ Nguyễn Ái Quốc và Phạm Văn Thuận.',
  },
  {
    question: 'Từ Bcons Central Park di chuyển đến TP.HCM mất bao lâu?',
    answer:
      'Theo trục Phạm Văn Thuận – Quốc lộ 1K hướng Phạm Văn Đồng, thời gian di chuyển đến TP. Thủ Đức khoảng 40 – 45 phút trong điều kiện giao thông bình thường. Nếu tuyến Metro Bến Thành – Suối Tiên được kéo dài về Đồng Nai theo định hướng quy hoạch, thời gian này sẽ được rút ngắn đáng kể.',
  },
  {
    question: 'Xung quanh Bcons Central Park có những tiện ích ngoại khu nào?',
    answer:
      'Trong bán kính ngắn có Vincom Plaza Biên Hòa, Lotte Mart, GO!, Co.opmart, Mega Market, chợ Tam Hiệp, Bệnh viện Đa khoa Đồng Nai, Bệnh viện Hoàn Mỹ, Bệnh viện Nhi Đồng Đồng Nai, Trường Đại học Đồng Nai, Sân vận động Đồng Nai và công viên Tam Hiệp.',
  },
  {
    question: 'Vị trí Bcons Central Park có thuận tiện không?',
    answer:
      'Dự án nằm giữa khu dân cư hiện hữu nên hạ tầng, chợ, trường học và bệnh viện đã hoàn thiện, không phải chờ hình thành như các khu quy hoạch mới. Điểm cần cân nhắc là đường Phan Trung và khu Tam Hiệp có thể đông vào giờ cao điểm.',
  },
  {
    question: 'Bcons Phan Trung và Bcons Central Park Biên Hòa có phải cùng một dự án?',
    answer:
      'Đúng. Bcons Phan Trung, Bcons Tam Hiệp, Bcons Central Park Biên Hòa hay Bcons Central Park Đồng Nai đều là các tên gọi thị trường của cùng một dự án tại số 236 đường Phan Trung, Phường Tam Hiệp.',
  },
]

export function LocationFaq() {
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
                      aria-controls={`location-faq-panel-${index}`}
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
                    id={`location-faq-panel-${index}`}
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
