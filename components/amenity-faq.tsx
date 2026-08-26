'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const faqs = [
  {
    question: 'Dự án Bcons Central Park có những tiện ích nội khu nổi bật nào?',
    answer:
      'Điểm nhấn lớn nhất là công viên nội khu hơn 7.700+ m² với mảng xanh mặt đất, lối dạo bộ và tiểu cảnh nước. Bên cạnh đó, cư dân có hồ bơi tràn bờ theo tiêu chuẩn resort, khu gym/yoga trong khu sinh hoạt cộng đồng và dãy shophouse thương mại khối đế phục vụ mua sắm, ẩm thực ngay trong khuôn viên dự án.',
  },
  {
    question: 'Diện tích công viên cây xanh tại Bcons Central Park là bao nhiêu?',
    answer:
      'Bcons Central Park Tam Hiệp dành hơn 7.700+ m² cho công viên và mảng xanh nội khu, được bố trí ở trung tâm và bao quanh bởi 5 block căn hộ. Đây là tỷ lệ cây xanh hiếm có với một dự án nằm ngay lõi đô thị hiện hữu thay vì vùng ven còn nhiều quỹ đất trống.',
  },
  {
    question: 'Các tiện ích ngoại khu quanh dự án Bcons Tam Hiệp gồm những gì?',
    answer:
      'Nhờ vị trí giữa khu dân cư hiện hữu, cư dân chỉ mất vài phút di chuyển tới Chợ Tam Hiệp, Co.opmart, Vincom Plaza, Aeon Mall Đồng Nai, các trường từ tiểu học tới đại học (Tiểu học Tân Hiệp, Đại học Lạc Hồng) và hệ thống bệnh viện như Bệnh viện Đồng Nai 2, BV Quốc tế Hoàn Mỹ Đồng Nai.',
  },
]

export function AmenityFaq() {
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
                      aria-controls={`amenity-faq-panel-${index}`}
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
                    id={`amenity-faq-panel-${index}`}
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
