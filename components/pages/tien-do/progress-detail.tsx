'use client'

import { Calendar, CheckCircle2, ChevronRight, Clock, HardHat, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Reveal, SectionHeading } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function ProgressDetail() {
  const { theme, locale, t } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  const milestones = isEn
    ? [
        {
          date: '27/05/2026',
          title: 'Official Project Groundbreaking',
          status: 'COMPLETED',
          done: true,
          desc: 'Groundbreaking ceremony and initial site excavation preparation across the 3 ha parcel.',
        },
        {
          date: 'Q3/2026',
          title: 'Piling & Foundation Execution',
          status: 'IN PROGRESS',
          done: false,
          desc: 'Executing test piling, mass bored piles and diaphragm wall protection for 5 blocks.',
        },
        {
          date: 'Q2/2027',
          title: 'Basement & Podium Completion',
          status: 'UPCOMING',
          done: false,
          desc: 'Completing smart underground basements and ground-level commercial podium.',
        },
        {
          date: 'Q4/2028',
          title: 'Topping Out All 5 Blocks',
          status: 'UPCOMING',
          done: false,
          desc: 'Completing the 22-storey reinforced concrete structural frames for all 5 blocks.',
        },
        {
          date: 'Q2/2029',
          title: 'Apartment Handover to Homeowners',
          status: 'ESTIMATED',
          done: false,
          desc: 'Final architectural fit-out and handing over finished apartments to residents.',
        },
      ]
    : [
        {
          date: '27/05/2026',
          title: 'Lễ khởi công chính thức',
          status: 'ĐÃ HOÀN THÀNH',
          done: true,
          desc: 'Tổ chức lễ động thổ, hoàn tất quây tôn và san lấp mặt bằng toàn khu đất gần 3 ha.',
        },
        {
          date: 'Q3/2026',
          title: 'Thi công ép cọc & móng hầm',
          status: 'ĐANG TRIỂN KHAI',
          done: false,
          desc: 'Ép cọc thử tải, thi công cọc đại trà và tường vây tầng hầm cho 5 block.',
        },
        {
          date: 'Q2/2027',
          title: 'Hoàn thành khối đế thương mại',
          status: 'SẮP TỚI',
          done: false,
          desc: 'Hoàn thành sàn hầm và khối đế thương mại shophouse tầng 1 – 2.',
        },
        {
          date: 'Q4/2028',
          title: 'Cất nóc 5 block căn hộ',
          status: 'SẮP TỚI',
          done: false,
          desc: 'Hoàn thành kết cấu bê tông cốt thép 22 tầng nổi cho toàn bộ 5 block.',
        },
        {
          date: 'Q2/2029',
          title: 'Bàn giao căn hộ cho cư dân',
          status: 'DỰ KIẾN',
          done: false,
          desc: 'Nghiệm thu PCCC, hoàn thiện nội thất cơ bản và bàn giao nhà chính thức.',
        },
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
            <span className={isDark ? 'text-[#e6c887] font-semibold' : 'text-foreground'}>{t.nav.progress}</span>
          </nav>

          <Reveal>
            <h1 className="mt-6 font-serif text-3xl leading-tight text-balance text-foreground md:text-5xl font-bold">
              {isEn
                ? 'Construction Milestones & Handover Schedule: Bcons Central Park'
                : 'Tiến độ xây dựng Bcons Central Park Tam Hiệp mới nhất 2026'}
            </h1>

            <div className="mt-8 flex flex-col gap-5 leading-relaxed text-pretty text-muted-foreground md:text-lg">
              {isEn ? (
                <>
                  <p>
                    Following the official groundbreaking ceremony on May 27, 2026, Bcons Central Park Tam Hiep is maintaining high construction discipline with estimated handover in Q2/2029.
                  </p>
                  <p>
                    Track the chronological milestones below for actual on-site progress.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Bcons Tam Hiệp tiến độ là một trong những điểm tựa vững chắc nhất của dự án: Sau lễ
                    khởi công chính thức ngày 27/05/2026, dự án đang được triển khai khẩn trương với mục
                    tiêu bàn giao nhà vào Quý II/2029 theo đúng cam kết từ Tập đoàn Bcons.
                  </p>
                  <p>
                    Dưới đây là các mốc tiến độ chính và hình ảnh cập nhật thực tế từ công trường 236 Phan Trung.
                  </p>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-secondary/40 dark:bg-card/40 py-20 lg:py-24 border-y border-border/60 dark:border-white/10 transition-colors">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <SectionHeading
            eyebrow={t.legal.progressEyebrow}
            title={isEn ? 'Milestone Timeline' : 'Lộ trình triển khai'}
            description={isEn ? 'Timeline from groundbreaking to key handover in Q2/2029.' : 'Các giai đoạn xây dựng từ khởi công đến khi trao chìa khóa cho cư dân.'}
          />

          <div className="mt-14 relative">
            <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-border dark:bg-white/15" />

            <div className="space-y-10">
              {milestones.map((m, idx) => {
                const isLeft = idx % 2 === 0
                return (
                  <Reveal key={idx} delay={0.06 * idx}>
                    <div className="relative flex flex-col sm:flex-row items-start">
                      {/* Central Badge */}
                      <div className={`absolute left-4 sm:left-1/2 -translate-x-1/2 flex size-9 items-center justify-center rounded-full border-2 shadow-md z-10 ${
                        m.done
                          ? isDark ? 'border-[#e6c887] bg-[#e6c887] text-[#072018]' : 'border-primary bg-primary text-primary-foreground'
                          : idx === 1
                          ? isDark ? 'border-[#e6c887] bg-[#071611] text-[#e6c887] animate-pulse' : 'border-accent bg-background text-accent animate-pulse'
                          : isDark ? 'border-white/20 bg-[#071611] text-muted-foreground' : 'border-border bg-card text-muted-foreground'
                      }`}>
                        {m.done ? (
                          <CheckCircle2 className="size-4" />
                        ) : idx === 1 ? (
                          <HardHat className="size-4" />
                        ) : (
                          <Clock className="size-4" />
                        )}
                      </div>

                      {/* Content Card */}
                      <div className={`ml-12 sm:ml-0 sm:w-1/2 ${
                        isLeft ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:ml-auto'
                      }`}>
                        <div className={`p-6 rounded-2xl border shadow-sm transition-all duration-300 ${
                          idx === 1
                            ? isDark ? 'border-[#e6c887]/60 bg-card/90 ring-1 ring-[#e6c887]/30 shadow-lg' : 'border-accent/40 bg-card ring-1 ring-accent/20'
                            : isDark ? 'border-white/10 bg-card/80' : 'border-border bg-card'
                        }`}>
                          <div className={`flex items-center gap-2 text-xs font-bold ${
                            isLeft ? 'sm:justify-end' : ''
                          }`}>
                            <span className={isDark ? 'text-[#e6c887]' : 'text-accent'}>{m.date}</span>
                            <span className={`px-2 py-0.5 rounded-full text-[10px] tracking-wider uppercase ${
                              m.done
                                ? isDark ? 'bg-[#e6c887]/20 text-[#e6c887]' : 'bg-primary/10 text-primary'
                                : idx === 1
                                ? isDark ? 'bg-[#e6c887] text-[#072018]' : 'bg-accent/15 text-accent font-bold'
                                : 'bg-secondary text-muted-foreground'
                            }`}>
                              {m.status}
                            </span>
                          </div>

                          <h3 className="mt-2 font-serif text-lg font-bold text-foreground">
                            {m.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {m.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
