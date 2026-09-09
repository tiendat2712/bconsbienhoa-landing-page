'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function PricingFaq() {
  const { theme, locale } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'
  const [open, setOpen] = useState<number | null>(null)

  const faqs = isEn
    ? [
        {
          question: 'What is the starting price for Bcons Central Park?',
          answer:
            'The officially announced unit price is 49.9 million VND/sqm wall-center area (~54 – 56 million VND/sqm carpet area). Estimated pricing by unit type: Studio (37 – 40 sqm) from 1.85 – 2.00 billion VND; 1-Bedroom (42 – 43 sqm) from 2.10 – 2.15 billion VND; 2-Bedroom (53 – 73 sqm) from 2.65 – 3.64 billion VND; and 3-Bedroom (87 – 88 sqm) from 4.34 – 4.39 billion VND (excluding VAT & 2% maintenance fund).',
        },
        {
          question: 'What payment methods are available for buyers?',
          answer:
            'Bcons offers 3 flexible schemes: Method 01 (12 progress tranches, 8.5% direct discount, no bank loan); Method 02 (70% bank loan with 24-month principal grace & interest subsidy, 20% equity); and Method 03 (lowest initial equity of 10% to SPA, guaranteed 6.9%/year interest cap for 48 months). All schemes cap pre-handover payments at 70%.',
        },
        {
          question: 'Which partner banks support loans for Bcons Central Park?',
          answer:
            'Strategic partner banks including Vietcombank, MB Bank, ACB, and Public Bank provide mortgage financing up to 70% of apartment value with loan tenures up to 20 – 35 years, with fast-track appraisal within 24 hours.',
        },
        {
          question: 'How are buyers protected legally under the 2023 Real Estate Business Law?',
          answer:
            'All payment schedules strictly comply with the 2023 Real Estate Business Law: collecting a maximum of 70% prior to handover, retaining 25% at handover, and the final 5% only upon ownership certificate (pink book) handover.',
        },
      ]
    : [
        {
          question: 'Giá bán Bcons Central Park Tam Hiệp từ bao nhiêu?',
          answer:
            'Đơn giá công bố là 49,9 triệu đồng/m² diện tích tim tường (khoảng 54 – 56 triệu đồng/m² thông thuỷ). Mức giá dự kiến theo loại căn: Studio (37 – 40 m²) từ 1,85 – 2,00 tỷ đồng; căn 1PN (42 – 43 m²) từ 2,10 – 2,15 tỷ đồng; căn 2PN (53 – 73 m²) từ 2,65 – 3,64 tỷ đồng; và căn 3PN (87 – 88 m²) từ 4,34 – 4,39 tỷ đồng (chưa gồm VAT & phí bảo trì 2%).',
        },
        {
          question: 'Dự án có những phương thức thanh toán nào?',
          answer:
            'Chủ đầu tư áp dụng 3 phương thức thanh toán linh hoạt: Phương thức 01 (theo tiến độ 12 đợt, nhận chiết khấu 8,5%); Phương thức 02 (vay ngân hàng 70%, ân hạn nợ gốc và hỗ trợ lãi suất 24 tháng, vốn tự có 20%); và Phương thức 03 (vốn ban đầu chỉ 10% đến khi ký HĐMB, chủ đầu tư cam kết bảo lãnh trần lãi suất không quá 6,9%/năm trong 48 tháng). Cả 3 phương thức đều chỉ thu tối đa 70% trước khi nhận nhà.',
        },
        {
          question: 'Ngân hàng nào bảo lãnh và hỗ trợ cho vay tại Bcons Central Park?',
          answer:
            'Các ngân hàng đối tác chiến lược của Bcons Group gồm Vietcombank, MB Bank, ACB và Public Bank hỗ trợ vay vốn tối đa đến 70% giá trị căn hộ với thời hạn vay lên đến 20 – 35 năm, hỗ trợ thẩm định và duyệt hạn mức nhanh trong 24 giờ.',
        },
        {
          question: 'Khách hàng được bảo vệ pháp lý như thế nào theo Luật Kinh doanh BĐS 2023?',
          answer:
            'Cả 3 phương thức thanh toán đều tuân thủ nghiêm ngặt Luật Kinh doanh Bất động sản 2023: chỉ thu tối đa 70% giá trị hợp đồng trước khi bàn giao nhà, giữ lại 25% ở mốc bàn giao và 5% cuối cùng khi có thông báo nhận Giấy chứng nhận quyền sở hữu (sổ hồng).',
        },
      ]

  return (
    <section id="cau-hoi" className="scroll-mt-24 bg-background py-20 lg:py-24 transition-colors">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <Reveal>
          <h2 className="font-serif text-3xl leading-tight text-balance text-foreground md:text-4xl font-bold">
            {isEn ? 'Frequently Asked Questions About Pricing' : 'Câu hỏi thường gặp về giá bán'}
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
