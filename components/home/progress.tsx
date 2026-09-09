'use client'

import React from 'react'
import Link from 'next/link'
import { Calendar, Clock, Building2, Home, Check, ArrowRight, HardHat, RefreshCw } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function Progress() {
  const { locale } = useSitePreferences()
  const isEn = locale === 'en'

  // Top 4 KPI Summary Cards matching media_1788972721953.png
  const summaryKpis = [
    {
      icon: Calendar,
      label: isEn ? 'GROUNDBREAKING DATE' : 'NGÀY KHỞI CÔNG',
      value: '27/05/2026',
    },
    {
      icon: HardHat,
      label: isEn ? 'CONSTRUCTION DURATION' : 'THỜI GIAN THI CÔNG',
      value: isEn ? '36 months' : '36 tháng',
    },
    {
      icon: Clock,
      label: isEn ? 'ESTIMATED HANDOVER' : 'DỰ KIẾN BÀN GIAO',
      value: isEn ? 'Q2/2029' : 'Quý II/2029',
    },
    {
      icon: Building2,
      label: isEn ? 'CURRENT STATUS' : 'TRẠNG THÁI HIỆN TẠI',
      value: isEn ? 'Under foundation work' : 'Đang thi công phần móng',
      isHighlighted: true,
    },
  ]

  // 7 Construction Milestones matching media_1788972721953.png
  const milestones = [
    {
      id: 1,
      title: isEn ? 'Groundbreaking' : 'Khởi công',
      date: '27/05/2026',
      status: isEn ? 'Completed' : 'Hoàn thành',
      state: 'completed',
    },
    {
      id: 2,
      title: isEn ? 'Site Preparation' : 'Chuẩn bị mặt bằng',
      date: '06/2026',
      status: isEn ? 'Completed' : 'Hoàn thành',
      state: 'completed',
    },
    {
      id: 3,
      title: isEn ? 'Mass Piling' : 'Ép cọc đại trà',
      date: '07/2026',
      status: isEn ? 'Completed' : 'Hoàn thành',
      state: 'completed',
    },
    {
      id: 4,
      title: isEn ? 'Foundation Work' : 'Thi công móng',
      date: '08/2026',
      status: isEn ? 'In Progress' : 'Đang thực hiện',
      state: 'active',
    },
    {
      id: 5,
      title: isEn ? 'Basement Structure' : 'Thi công tầng hầm',
      date: isEn ? 'Estimated' : 'Dự kiến',
      status: isEn ? 'Q4/2026' : 'Quý IV/2026',
      state: 'upcoming',
    },
    {
      id: 6,
      title: isEn ? 'Superstructure' : 'Thi công phần thân',
      date: isEn ? 'Estimated' : 'Dự kiến',
      status: '2027 – 2028',
      state: 'upcoming',
    },
    {
      id: 7,
      title: isEn ? 'Handover' : 'Bàn giao',
      date: isEn ? 'Estimated' : 'Dự kiến',
      status: isEn ? 'Q2/2029' : 'Quý II/2029',
      state: 'upcoming',
    },
  ]

  return (
    <section
      id="tien-do"
      className="scroll-mt-24 bg-[#f8fafc] dark:bg-[#07130f] py-16 sm:py-20 lg:py-24 transition-colors duration-500 relative overflow-hidden"
    >
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute -left-40 top-1/3 size-[450px] rounded-full bg-primary/5 dark:bg-[#e6c887]/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/3 size-[450px] rounded-full bg-[#e6c887]/10 dark:bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={isEn ? 'CONSTRUCTION MILESTONES' : 'TIẾN ĐỘ THỰC TẾ'}
          title={
            isEn
              ? 'Construction Progress'
              : 'Tiến Độ Thực Tế Dự Án'
          }
          subtitle={
            isEn
              ? 'Live Updates From Site'
              : 'Cập Nhật Minh Bạch Tại Công Trường'
          }
          description={
            isEn
              ? 'Live construction updates from the site, committing to on-schedule handover and rigorous Bcons quality standards.'
              : 'Minh bạch tiến độ thi công thực tế tại công trường, cam kết bàn giao đúng hạn theo tiêu chuẩn chất lượng Bcons.'
          }
        />

        {/* 1. TOP 4 KPI SUMMARY CARDS */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {summaryKpis.map((kpi, idx) => {
            const Icon = kpi.icon
            return (
              <Reveal key={idx} delay={0.05 * idx}>
                <div className="h-full rounded-2xl bg-white dark:bg-[#071912] p-5 sm:p-6 border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4">
                  <div className="size-12 sm:size-13 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center shrink-0 border border-slate-200/60 dark:border-white/5">
                    <Icon className="size-6 text-primary dark:text-[#e6c887]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400 font-sans line-clamp-1">
                      {kpi.label}
                    </p>
                    <p
                      className={`text-base sm:text-lg font-bold font-serif tracking-tight mt-0.5 ${
                        kpi.isHighlighted
                          ? 'text-emerald-700 dark:text-emerald-400'
                          : 'text-[#072018] dark:text-white'
                      }`}
                    >
                      {kpi.value}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* 2. MAIN HORIZONTAL STEPPER TIMELINE CARD */}
        <Reveal delay={0.2} className="mt-6 sm:mt-8">
          <div className="rounded-2xl sm:rounded-3xl bg-white dark:bg-[#071912] border border-slate-200/90 dark:border-white/10 p-6 sm:p-8 lg:p-10 shadow-md">
            {/* Card Header: Title + Latest Update Date */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-slate-100 dark:border-white/10">
              <h3 className="font-serif text-lg sm:text-xl font-bold uppercase tracking-normal text-[#072018] dark:text-white">
                {isEn ? 'LIVE PROJECT CONSTRUCTION TIMELINE' : 'TIẾN ĐỘ THỰC TẾ DỰ ÁN'}
              </h3>
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-sans">
                <RefreshCw className="size-3.5 text-primary dark:text-[#e6c887]" />
                <span>
                  {isEn ? 'Latest update: ' : 'Cập nhật mới nhất: '}
                  <strong className="text-foreground dark:text-slate-200">05/09/2026</strong>
                </span>
              </div>
            </div>

            {/* Stepper Timeline: Horizontally Scrollable on small screens */}
            <div className="mt-8 overflow-x-auto pb-4 pt-2 -mx-2 px-2 scrollbar-thin">
              <div className="min-w-[760px] sm:min-w-[850px] relative">
                {/* Horizontal Progress Track Lines */}
                <div className="absolute top-[22px] left-[7%] right-[7%] h-[3px] bg-slate-200 dark:bg-white/10 -z-0">
                  {/* Completed Green Line spanning milestones 1 to 4 */}
                  <div className="h-full bg-emerald-500 w-[50%]" />
                </div>

                {/* 7 Milestone Columns */}
                <div className="grid grid-cols-7 relative z-10 text-center">
                  {milestones.map((item) => {
                    const isCompleted = item.state === 'completed'
                    const isActive = item.state === 'active'

                    return (
                      <div key={item.id} className="flex flex-col items-center px-1">
                        {/* Circle Node Icon */}
                        <div className="relative mb-3.5">
                          {isCompleted && (
                            <div className="size-11 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-sm">
                              <Check className="size-5 stroke-[3]" />
                            </div>
                          )}

                          {isActive && (
                            <div className="size-12 rounded-full bg-[#f5b82e] dark:bg-[#e6c887] text-[#072018] flex items-center justify-center shadow-lg ring-4 ring-[#f5b82e]/30 dark:ring-[#e6c887]/40">
                              <Building2 className="size-6 stroke-[2.2]" />
                            </div>
                          )}

                          {!isCompleted && !isActive && (
                            <div className="size-11 rounded-full bg-slate-100 dark:bg-white/10 text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-inner">
                              {item.id === 7 ? (
                                <Home className="size-5 stroke-[1.8]" />
                              ) : (
                                <Building2 className="size-5 stroke-[1.8]" />
                              )}
                            </div>
                          )}
                        </div>

                        {/* Title */}
                        <h4
                          className={`text-xs sm:text-[13px] font-bold leading-tight font-sans ${
                            isActive
                              ? 'text-[#072018] dark:text-[#e6c887]'
                              : isCompleted
                              ? 'text-slate-900 dark:text-white'
                              : 'text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {item.title}
                        </h4>

                        {/* Date */}
                        <p className="text-[11px] text-muted-foreground mt-1 font-sans">
                          {item.date}
                        </p>

                        {/* Status Badge */}
                        <div className="mt-2">
                          {isCompleted && (
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 font-sans">
                              {item.status}
                            </span>
                          )}

                          {isActive && (
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-[#fef3c7] text-[#92400e] dark:bg-[#e6c887]/25 dark:text-[#e6c887] font-sans">
                              {item.status}
                            </span>
                          )}

                          {!isCompleted && !isActive && (
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10.5px] font-medium bg-slate-100 text-slate-600 dark:bg-white/5 dark:text-slate-400 font-sans">
                              {item.status}
                            </span>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Card Footer: Detailed Link to dedicated progress page */}
            <div className="mt-8 pt-5 border-t border-slate-100 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-sans">
              <p>
                {isEn ? (
                  <>
                    Construction supervised directly by Bcons Group and accredited consulting entities.{' '}
                    <Link
                      href="/tien-do"
                      className="font-bold text-primary dark:text-[#e6c887] hover:underline"
                    >
                      View full photo log & flycam
                    </Link>
                    .
                  </>
                ) : (
                  <>
                    Tiến độ được giám sát trực tiếp bởi Bcons Group và các đơn vị tư vấn độc lập.{' '}
                    <Link
                      href="/tien-do"
                      className="font-bold text-primary dark:text-[#e6c887] hover:underline"
                    >
                      Xem nhật ký ảnh công trường & flycam
                    </Link>
                    .
                  </>
                )}
              </p>

              <a
                href="#dang-ky"
                className="inline-flex items-center gap-1.5 font-bold text-primary dark:text-[#e6c887] hover:underline shrink-0"
              >
                <span>{isEn ? 'Receive progress alerts via Zalo' : 'Nhận thông báo tiến độ qua Zalo'}</span>
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
