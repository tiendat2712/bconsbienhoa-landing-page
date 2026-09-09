'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function InvestorFaq() {
  const { theme, locale } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'
  const [open, setOpen] = useState<number | null>(null)

  const faqs = isEn
    ? [
        {
          question: 'Who is the developer of Bcons Central Park?',
          answer:
            'The legal developer named on state documents is Tam Hiep Urban Development Joint Stock Company, developed by Bcons Group. These are distinct entities: all track record data of 20+ projects belongs to Bcons Group.',
        },
        {
          question: 'Is Bcons Central Park the first Bcons project in Bien Hoa?',
          answer:
            'Yes, Bcons Central Park is the first project branded by Bcons in Bien Hoa, Dong Nai, following a successful chain of over 20 projects delivered in Binh Duong and HCMC.',
        },
        {
          question: 'How can buyers independently verify Bcons Group’s capability?',
          answer:
            'Four ways without relying on salespeople: (1) Ask residents at delivered Bcons projects about handover punctuality, quality vs show unit, and pink book timing; (2) Compare the legal entity on the building permit, 1/500 zoning approval, and sales contract; (3) Visit the real site at 236 Phan Trung; (4) Verify bank guarantee certificates from partner banks.',
        },
        {
          question: 'Have prior Bcons projects received freehold ownership certificates?',
          answer:
            'Delivered projects including Bcons Suoi Tien, Bcons Mien Dong, Bcons Garden, Bcons Green View, Bcons Bee, and Bcons Plaza have achieved 100% Pink Book issuance for homeowners within 6–12 months of key handover.',
        },
      ]
    : [
        {
          question: 'Chủ đầu tư Bcons Central Park là ai?',
          answer:
            'Chủ đầu tư đứng tên trên hồ sơ pháp lý là Công ty Cổ phần Phát triển Đô thị Tam Hiệp, dự án được phát triển bởi Tập đoàn Bcons (Bcons Group). Đây là hai pháp nhân khác nhau: mọi thông tin về lịch sử triển khai hơn 20 dự án thuộc về năng lực phát triển của Bcons Group.',
        },
        {
          question: 'Bcons Biên Hòa là dự án thứ mấy của Bcons?',
          answer:
            'Bcons Central Park là dự án đầu tiên mang thương hiệu Bcons tại khu vực Biên Hòa, Đồng Nai, sau chuỗi dự án nhà ở chất lượng đã triển khai thành công tại Bình Dương (Dĩ An) và TP.HCM.',
        },
        {
          question: 'Làm sao kiểm chứng năng lực chủ đầu tư Bcons?',
          answer:
            'Bốn cách không cần dựa vào người bán: (1) tìm cư dân của một dự án Bcons đã bàn giao và hỏi về tiến độ bàn giao, chất lượng so với nhà mẫu và thời gian ra sổ; (2) đối chiếu tên pháp nhân trên giấy phép xây dựng, quyết định quy hoạch và hợp đồng mua bán xem có trùng nhau không; (3) đến công trường tại 236 Phan Trung thay vì chỉ xem nhà mẫu; và (4) hỏi ngân hàng nào phát hành chứng thư bảo lãnh nghĩa vụ bàn giao — vì ngân hàng chỉ bảo lãnh sau khi đã tự thẩm định chủ đầu tư.',
        },
        {
          question: 'Các dự án trước đây của Bcons đã được cấp sổ hồng chưa?',
          answer:
            'Hầu hết các dự án đã bàn giao như Bcons Suối Tiên, Bcons Miền Đông, Bcons Garden, Bcons Green View, Bcons Bee, Bcons Plaza đều đã hoàn tất cấp sổ hồng 100% cho cư dân chỉ trong vòng 6 – 12 tháng sau khi nhận nhà.',
        },
      ]

  return (
    <section id="cau-hoi" className="scroll-mt-24 bg-background py-20 lg:py-24 transition-colors">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <Reveal>
          <h2 className="font-serif text-3xl leading-tight text-balance text-foreground md:text-4xl font-bold">
            {isEn ? 'Frequently Asked Questions About the Developer' : 'Câu hỏi thường gặp về chủ đầu tư'}
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
