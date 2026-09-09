'use client'

import { MessageCircle, PhoneCall, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function Overview() {
  const { theme, locale } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  return (
    <section
      id="tong-quan"
      className="scroll-mt-24 relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-background dark:bg-[#071712] transition-colors"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-40 top-1/4 size-[500px] rounded-full bg-[#e6c887]/10 dark:bg-[#e6c887]/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 size-[400px] rounded-full bg-primary/10 dark:bg-primary/5 blur-[120px]" />

      {/* Golden Arc Background Decor spanning across behind the building */}
      <div className="pointer-events-none absolute left-0 bottom-0 w-full overflow-hidden select-none z-0">
        <img
          src="/images/over-decor1-3.svg"
          alt=""
          aria-hidden="true"
          className="w-full min-w-[1000px] lg:min-w-[1400px] h-auto max-h-[320px] lg:max-h-[420px] object-cover object-left-bottom opacity-85 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          {/* Left Column: Majestic Towers Cutout - Enlarged & Anchored */}
          <div className="relative lg:col-span-6 xl:col-span-6 flex items-end justify-center lg:justify-start">
            <Reveal delay={0.1} className="w-full flex items-end justify-center lg:justify-start">
              <img
                src="/images/hinh-copy-2-3.png"
                alt={
                  isEn
                    ? 'Bcons Central Park Residential Towers'
                    : 'Phối cảnh tháp căn hộ Bcons Central Park Tam Hiệp'
                }
                className="w-full max-w-[480px] h-auto lg:h-[460px] xl:h-[500px] lg:w-auto lg:max-w-none object-contain lg:object-left-bottom lg:-ml-6 xl:-ml-12 drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_25px_45px_rgba(0,0,0,0.7)] hover:scale-[1.01] transition-transform duration-700 select-none"
              />
            </Reveal>
          </div>

          {/* Right Column: Title + Verbatim Description + Integrated Strategic Advisor Bar */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center relative z-20">
            <Reveal delay={0.15}>
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-0.5 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-semibold text-[#b88728] dark:text-[#e6c887] bg-[#b88728]/10 dark:bg-[#e6c887]/10 border border-[#b88728]/25 dark:border-[#e6c887]/25 w-fit">
                {isEn ? 'OFFICIAL PROJECT INTRODUCTION' : 'GIỚI THIỆU DỰ ÁN & ĐƠN VỊ TƯ VẤN'}
              </div>

              {/* Headings */}
              <h2 className="mt-2.5 font-serif text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-bold tracking-tight text-foreground dark:text-white leading-[1.18]">
                {isEn ? 'In The Footsteps Of Heritage' : 'Theo Dòng Di Sản'}
                <span className="block mt-0.5 font-serif italic text-[#b88728] dark:text-[#e6c887] font-semibold">
                  {isEn ? 'Embracing Prosperous Living' : 'Thuận Lòng Phồn Vinh'}
                </span>
              </h2>

              {/* Description Paragraphs 1 & 2 */}
              <div className="mt-3.5 space-y-2.5 text-[13px] sm:text-[13.5px] leading-relaxed text-muted-foreground dark:text-[#c2d3cb] font-sans">
                <p>
                  {isEn
                    ? 'Bcons Central Park is the commercial brand name used to introduce and identify the residential condominium project located in Tam Hiep Ward, Dong Nai. The project envisions a modern living haven where residents enjoy premium convenience, effortless connectivity, and a harmoniously planned green environment.'
                    : 'Bcons Central Park là tên thương mại được sử dụng nhằm giới thiệu và nhận diện dự án căn hộ tọa lạc tại phường Tam Hiệp, Đồng Nai. Dự án hướng đến một không gian an cư hiện đại, nơi cư dân có thể tận hưởng nhịp sống tiện nghi, kết nối thuận lợi và môi trường sống được quy hoạch hài hòa.'}
                </p>
                <p>
                  {isEn
                    ? 'With a strategic focus on developing apartments tailored for authentic owner-occupiers and long-term investors, Bcons Central Park presents a compelling choice for discerning buyers seeking stability, prime urban amenities, and lasting capital appreciation.'
                    : 'Với định hướng phát triển dòng căn hộ phù hợp nhu cầu ở thực và đầu tư, Bcons Central Park mang đến lựa chọn đáng quan tâm cho khách hàng đang tìm kiếm một nơi an cư ổn định, dễ tiếp cận các tiện ích đô thị và có tiềm năng gia tăng giá trị trong dài hạn.'}
                </p>
              </div>

              {/* Paragraph 3 Replaced with Director Le Ngoc Long Consultation + Avatar & Instant Actions */}
              <div className="mt-3.5 rounded-xl border border-[#e6c887]/40 dark:border-[#e6c887]/25 bg-[#e6c887]/8 dark:bg-[#e6c887]/5 p-3 sm:p-3.5 backdrop-blur-sm">
                <div className="flex items-start gap-3 sm:gap-3.5">
                  {/* Director Avatar with Verified Ring */}
                  <div className="relative size-12 sm:size-13 shrink-0 mt-0.5">
                    <div className="size-full rounded-full overflow-hidden ring-2 ring-[#e6c887] shadow-md bg-slate-100 dark:bg-black/40">
                      <img
                        src="/images/manager_avt.jpg"
                        alt="Lê Ngọc Long - Giám đốc Sàn Kinh Doanh Bcons PS Land"
                        className="size-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span
                      title={isEn ? 'F1 Official Strategic Advisor' : 'Đại diện tư vấn F1 CĐT'}
                      className="absolute -bottom-0.5 -right-0.5 size-4 rounded-full bg-[#f5b82e] text-[#072018] flex items-center justify-center shadow-md ring-1 ring-background"
                    >
                      <ShieldCheck className="size-2.5 stroke-[2.5]" />
                    </span>
                  </div>

                  {/* Paragraph 3 Text & Direct Contacts */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-foreground/90 dark:text-[#c2d3cb] font-sans">
                      {isEn ? (
                        <>
                          This portal is directly advised and operated by{' '}
                          <strong className="font-semibold text-foreground dark:text-white">
                            Le Ngoc Long (Sales Director, Bcons PS Land)
                          </strong>{' '}
                          for official project consultation, unit introduction, and distribution.
                          Bcons PS Land is one of the primary distributors officially announced by
                          Bcons at the project kick-off ceremony.
                        </>
                      ) : (
                        <>
                          Trang thông tin này do{' '}
                          <strong className="font-semibold text-foreground dark:text-white">
                            Lê Ngọc Long (Giám đốc Sàn Kinh Doanh Bcons PS Land)
                          </strong>{' '}
                          trực tiếp phụ trách tư vấn, giới thiệu và phân phối sản phẩm thuộc dự án.
                          Bcons PS Land là một trong những đơn vị phân phối được Bcons công bố tại
                          chương trình kick-off dự án.
                        </>
                      )}
                    </p>

                    {/* Direct Call Hotline & Zalo Consultation Buttons */}
                    <div className="mt-2.5 flex items-center gap-2 flex-wrap">
                      <a
                        href="tel:0376671776"
                        className="inline-flex items-center gap-1.5 rounded-full bg-primary hover:bg-primary/90 text-white dark:bg-[#e6c887] dark:hover:bg-[#d6b772] dark:text-[#072018] px-3.5 py-1.5 text-xs font-bold font-sans shadow-sm transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
                      >
                        <PhoneCall className="size-3 stroke-[2.5]" />
                        <span>Hotline: 0376 671 776</span>
                      </a>
                      <a
                        href="https://zalo.me/0376671776"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border dark:border-white/20 bg-background/80 hover:bg-secondary dark:bg-white/5 dark:hover:bg-white/10 text-foreground dark:text-white px-3 py-1.5 text-xs font-bold font-sans transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
                      >
                        <MessageCircle className="size-3 text-[#0068FF] dark:text-[#38bdf8]" />
                        <span>Chat Zalo</span>
                      </a>
                      <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-primary dark:text-[#e6c887]">
                        ✓ Tư vấn 1-1 trực tiếp CĐT
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
