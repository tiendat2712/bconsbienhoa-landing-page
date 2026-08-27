'use client'

import { MapPin, TrendingUp, Users, Building, ShieldCheck } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function LocationPotential() {
  const { theme, locale } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  const potentials = isEn
    ? [
        {
          icon: Users,
          title: 'High Rental & Housing Demand',
          desc: 'Surrounded by large industrial parks and university clusters, driving continuous rental yield from specialists and young families.',
        },
        {
          icon: Building,
          title: 'Direct Retail Corridor Frontage',
          desc: 'Phan Trung is one of the most vibrant dining and shopping avenues in Bien Hoa, securing high long-term commercial property value.',
        },
        {
          icon: TrendingUp,
          title: 'Regional Infrastructure Catalysts',
          desc: 'Benefiting from major transit projects: Ring Road 3, Metro Line 1 extension, and Long Thanh International Airport.',
        },
      ]
    : [
        {
          icon: Users,
          title: 'Nhu cầu thuê & an cư cao',
          desc: 'Khu vực tập trung chuyên gia làm việc tại KCN Amata, KCN Biên Hòa 2 và các trường đại học lân cận, nhu cầu thuê và mua ở thực luôn ổn định.',
        },
        {
          icon: Building,
          title: 'Trục phố thương mại đắt giá',
          desc: 'Đường Phan Trung là tuyến phố F&B, mua sắm sầm uất bậc nhất phường Tam Hiệp, mang lại giá trị gia tăng bền vững cho bất động sản.',
        },
        {
          icon: TrendingUp,
          title: 'Động lực từ hạ tầng liên vùng',
          desc: 'Hưởng lợi trực tiếp từ tuyến Vành đai 3, Metro Bến Thành – Suối Tiên kéo dài và Sân bay quốc tế Long Thành khi đi vào khai thác.',
        },
      ]

  return (
    <section className="bg-secondary/50 dark:bg-card/40 py-20 lg:py-24 transition-colors">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <SectionHeading
          eyebrow={isEn ? 'Growth Potential' : 'Tiềm năng phát triển'}
          title={isEn ? 'Why 236 Phan Trung Holds High Investment Value' : 'Vì sao vị trí 236 Phan Trung có tiềm năng tăng giá?'}
          description={isEn ? 'Key economic and urban catalysts driving property value.' : 'Những yếu tố giúp Bcons Central Park Tam Hiệp giữ giá trị và thanh khoản tốt.'}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {potentials.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className={`group flex h-full flex-col rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                isDark
                  ? 'border-white/10 bg-card/80 hover:border-[#e6c887]/50 shadow-lg'
                  : 'border-border bg-card hover:border-primary/40'
              }`}>
                <span className={`flex size-12 items-center justify-center rounded-2xl transition-colors ${
                  isDark ? 'bg-white/5 text-[#e6c887] group-hover:bg-[#e6c887] group-hover:text-[#072018]' : 'bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground'
                }`}>
                  <item.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
