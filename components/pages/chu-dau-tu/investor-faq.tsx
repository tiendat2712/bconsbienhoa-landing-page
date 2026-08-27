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
          question: 'What is Bcons Group’s development track record?',
          answer:
            'Bcons Group has over a decade of property development experience with 20+ completed condominium projects in HCMC and Binh Duong, renowned for rapid Pink Book issuance within 6–12 months.',
        },
        {
          question: 'Who are Bcons Group’s international strategic partners?',
          answer:
            'Bcons partners closely with PPSN Japan in architectural consultation, construction management, and quality control systems.',
        },
        {
          question: 'Have prior Bcons projects received full ownership certificates?',
          answer:
            'Delivered projects including Bcons Suoi Tien, Bcons Mien Dong, Bcons Garden, Bcons Green View, and Bcons Plaza have achieved 100% Pink Book issuance for homeowners.',
        },
      ]
    : [
        {
          question: 'Chủ đầu tư Bcons Group có uy tín không?',
          answer:
            'Tập đoàn Bcons là thương hiệu phát triển bất động sản uy tín với hơn 10 năm kinh nghiệm, đã bàn giao thành công hơn 20 dự án tại Bình Dương và TP.HCM, nổi bật với cam kết ra sổ hồng nhanh cho cư dân chỉ sau 6 – 12 tháng.',
        },
        {
          question: 'Bcons Central Park có đối tác quốc tế nào đồng hành?',
          answer:
            'Bcons có quan hệ đối tác chiến lược lâu năm với Tập đoàn PPSN (Nhật Bản) trong việc quản lý, giám sát và nâng cao tiêu chuẩn chất lượng công trình theo chuẩn mực Nhật Bản.',
        },
        {
          question: 'Các dự án trước đây của Bcons đã được cấp sổ hồng chưa?',
          answer:
            'Hầu hết các dự án đã bàn giao như Bcons Suối Tiên, Bcons Miền Đông, Bcons Garden, Bcons Green View, Bcons Plaza đều đã hoàn tất cấp sổ hồng 100% cho cư dân theo đúng cam kết.',
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
