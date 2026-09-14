'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'
import { showhouseFaqs } from '@/lib/nha-mau-data'

export function ShowhouseFaq() {
  const { theme, locale } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="cau-hoi" className="scroll-mt-24 bg-background py-16 lg:py-24 border-t border-border/60 transition-colors">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-primary dark:text-[#e6c887]">
            <span className="h-1.5 w-5 rounded-full bg-primary dark:bg-[#e6c887]" />
            <span>{isEn ? 'FREQUENTLY ASKED QUESTIONS' : 'HỎI ĐÁP THƯỜNG GẶP'}</span>
          </div>
          <h2 className="mt-3 sm:mt-3.5 font-serif text-3xl leading-[1.2] text-balance text-foreground md:text-4xl font-bold">
            {isEn
              ? 'Frequently Asked Questions About the Show Unit'
              : 'Câu hỏi thường gặp về nhà mẫu & tiêu chuẩn bàn giao'}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {isEn
              ? 'Essential clarifications on showhouse visiting rules, handover boundaries, and net usable area calculations.'
              : 'Giải đáp chi tiết về quy định tham quan, ranh giới bàn giao thực tế và cách tính diện tích thông thuỷ căn hộ.'}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 border-t border-border dark:border-white/10">
            {showhouseFaqs.map((faq, index) => {
              const isOpen = open === index
              const question = isEn ? faq.questionEn : faq.question
              const answer = isEn ? faq.answerEn : faq.answer

              return (
                <div key={index} className="border-b border-border dark:border-white/10">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`showhouse-faq-panel-${index}`}
                      className={`flex w-full items-center justify-between gap-6 py-6 text-left transition-colors cursor-pointer ${
                        isOpen
                          ? isDark
                            ? 'text-[#e6c887]'
                            : 'text-primary'
                          : isDark
                          ? 'hover:text-[#e6c887]'
                          : 'hover:text-primary'
                      }`}
                    >
                      <span className="font-serif text-lg font-bold text-foreground md:text-xl">
                        {question}
                      </span>
                      <span
                        className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-all ${
                          isOpen
                            ? isDark
                              ? 'border-[#e6c887] bg-[#e6c887] text-[#072018]'
                              : 'border-primary bg-primary text-primary-foreground'
                            : isDark
                            ? 'border-white/15 bg-card/80 text-[#e6c887]'
                            : 'border-border bg-card text-primary'
                        }`}
                      >
                        <Plus
                          className={`size-4 transition-transform duration-300 ${
                            isOpen ? 'rotate-45' : ''
                          }`}
                        />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`showhouse-faq-panel-${index}`}
                    role="region"
                    className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <p className="overflow-hidden pb-6 text-sm leading-relaxed text-pretty text-muted-foreground md:text-base">
                      {answer}
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
