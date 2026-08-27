'use client'

import { Check, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Reveal, SectionHeading } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function PricingDetail() {
  const { theme, locale, t } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  const rows = isEn
    ? [
        { type: 'Studio', area: '37 – 40 sqm', price: '1.9 – 2.0 B VND' },
        { type: '1-Bedroom', area: '42 – 43 sqm', price: '2.0 – 2.3 B VND' },
        { type: '2-Bedroom', area: '53 – 73 sqm', price: '2.5 – 2.8 B VND' },
        { type: '3-Bedroom', area: '87 – 88 sqm', price: '3.4 – 3.8 B VND' },
      ]
    : [
        { type: 'Studio', area: '37 – 40 m²', price: '1,9 – 2,0 tỷ đồng' },
        { type: '1 Phòng ngủ', area: '42 – 43 m²', price: '2,0 – 2,3 tỷ đồng' },
        { type: '2 Phòng ngủ', area: '53 – 73 m²', price: '2,5 – 2,8 tỷ đồng' },
        { type: '3 Phòng ngủ', area: '87 – 88 m²', price: '3,4 – 3,8 tỷ đồng' },
      ]

  const payments = isEn
    ? [
        'Flexible milestone-based payment schedules tied to actual construction progress (2 – 5% per stage).',
        'Partner banks provide home loans up to 70% of apartment value.',
        '0% interest and principal grace period during the structural construction phase.',
        'Attractive direct discounts for accelerated early lump-sum payment schemes.',
      ]
    : [
        'Thanh toán chia nhỏ theo tiến độ xây dựng, mỗi đợt dự kiến 2 – 5% giá trị căn hộ',
        'Ngân hàng đối tác hỗ trợ vay đến 70% giá trị căn hộ',
        'Chính sách ân hạn nợ gốc, hỗ trợ lãi suất giai đoạn xây dựng (chờ công bố chính thức)',
        'Chiết khấu thêm cho khách hàng thanh toán nhanh vượt tiến độ',
      ]

  return (
    <>
      <section className="bg-background pt-28 pb-16 md:pt-36 lg:pb-20 transition-colors">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <nav aria-label="Đường dẫn" className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className={`transition-colors ${isDark ? 'hover:text-[#e6c887]' : 'hover:text-primary'}`}>
              {t.nav.home}
            </Link>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <span className={isDark ? 'text-[#e6c887] font-semibold' : 'text-foreground'}>{t.nav.pricing}</span>
          </nav>

          <Reveal>
            <h1 className="mt-6 font-serif text-3xl leading-tight text-balance text-foreground md:text-5xl font-bold">
              {isEn
                ? 'Bcons Central Park Tam Hiep: Detailed Pricing & Payment Policies'
                : 'Chi tiết giá bán Bcons Central Park Tam Hiệp'}
            </h1>
            <div className="mt-8 flex flex-col gap-5 leading-relaxed text-pretty text-muted-foreground md:text-lg">
              {isEn ? (
                <>
                  <p>
                    Bcons Central Park prices currently range from 1.9 to 3.8 billion VND depending on unit layout
                    (Studio, 1 to 3 bedrooms, 37 – 88 sqm), floor elevation, orientation, and official promotional schemes.
                  </p>
                  <p>
                    The project provides flexible installment payments tied to construction milestones and preferential
                    bank loans. You can also explore the{' '}
                    <Link href="/mat-bang" className={`font-semibold underline underline-offset-4 ${isDark ? 'text-[#e6c887] hover:text-[#f7e4b5]' : 'text-primary'}`}>
                      floor plans
                    </Link>{' '}
                    to select your preferred apartment type.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Bcons Central Park giá hiện dao động từ 1,9 đến 3,8 tỷ đồng, tuỳ loại căn hộ (Studio, 1 – 3
                    phòng ngủ, diện tích 37 – 88 m²), tầng, hướng view và chính sách áp dụng tại thời
                    điểm mở bán chính thức từ chủ đầu tư. Đây là mức giá tham khảo trong giai đoạn giới
                    thiệu dự án.
                  </p>
                  <p>
                    Dự án áp dụng chính sách thanh toán chia nhỏ theo tiến độ xây dựng, hỗ trợ vay ngân
                    hàng và các ưu đãi cho khách thanh toán nhanh — chi tiết ở bảng bên dưới. Bạn cũng
                    có thể tham khảo{' '}
                    <Link href="/mat-bang" className={`font-semibold underline underline-offset-4 ${isDark ? 'text-[#e6c887] hover:text-[#f7e4b5]' : 'text-primary'}`}>
                      mặt bằng Bcons Central Park
                    </Link>{' '}
                    để chọn loại căn phù hợp trước khi so sánh giá.
                  </p>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/50 dark:bg-card/40 py-20 lg:py-24 transition-colors">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <SectionHeading
            eyebrow={t.pricing.eyebrow}
            title={isEn ? 'Expected Pricing Starting from 1.9 B VND' : 'Giá bán dự kiến từ 1,9 tỷ đồng'}
          />

          <Reveal delay={0.1}>
            <div className={`mt-10 overflow-hidden rounded-3xl border shadow-xl ${isDark ? 'border-white/15 bg-card/80' : 'border-border bg-card'}`}>
              <table className="w-full text-left">
                <caption className="sr-only">
                  {isEn ? 'Price table' : 'Bảng giá bán dự kiến'}
                </caption>
                <thead>
                  <tr
                    className={`transition-colors duration-500 ${
                      isDark
                        ? 'bg-gradient-to-r from-[#e6c887] via-[#f7e4b5] to-[#e6c887] text-[#072018]'
                        : 'bg-primary text-primary-foreground'
                    }`}
                  >
                    <th scope="col" className="px-6 py-4 text-xs font-bold tracking-[0.16em] uppercase">
                      {isEn ? 'Unit Type' : 'Loại căn hộ'}
                    </th>
                    <th scope="col" className="px-6 py-4 text-xs font-bold tracking-[0.16em] uppercase">
                      {isEn ? 'Area' : 'Diện tích'}
                    </th>
                    <th scope="col" className="px-6 py-4 text-right text-xs font-bold tracking-[0.16em] uppercase">
                      {isEn ? 'Estimated Price' : 'Giá dự kiến'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60 dark:divide-white/10 text-sm">
                  {rows.map((row) => (
                    <tr key={row.type} className="transition-colors hover:bg-secondary/30 dark:hover:bg-white/5">
                      <td className="px-6 py-5 font-semibold text-foreground">{row.type}</td>
                      <td className="px-6 py-5 text-muted-foreground">{row.area}</td>
                      <td className={`px-6 py-5 text-right font-serif text-base font-bold ${
                        isDark ? 'text-[#e6c887]' : 'text-primary'
                      }`}>
                        {row.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-muted-foreground italic">
              {isEn
                ? '* Pricing is indicative for the initial launch phase and includes VAT and maintenance fund.'
                : '* Giá bán tham khảo giai đoạn giới thiệu, đã bao gồm VAT và kinh phí bảo trì theo quy định.'}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className={`mt-14 rounded-3xl border p-8 md:p-10 ${isDark ? 'border-white/15 bg-card/80 shadow-xl' : 'border-border bg-card'}`}>
              <h3 className="font-serif text-2xl font-bold text-foreground">
                {isEn ? 'Payment & Financing Schemes' : 'Phương thức thanh toán & chính sách hỗ trợ'}
              </h3>
              <ul className="mt-6 flex flex-col gap-4">
                {payments.map((item) => (
                  <li key={item} className="flex items-start gap-3.5 text-sm text-foreground/85">
                    <span className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${
                      isDark ? 'bg-[#e6c887]/20 text-[#e6c887]' : 'bg-primary/10 text-primary'
                    }`}>
                      <Check className="size-3 stroke-[3]" />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#dang-ky"
                  className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 text-xs font-bold tracking-[0.14em] uppercase transition-all duration-300 hover:scale-[1.02] shadow-lg ${
                    isDark
                      ? 'bg-gradient-to-r from-[#e6c887] via-[#f7e4b5] to-[#e6c887] text-[#072018] shadow-[0_10px_25px_-5px_rgba(230,200,135,0.4)]'
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  {isEn ? 'Get Latest Price Sheet' : 'Nhận bảng giá mới nhất'}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
