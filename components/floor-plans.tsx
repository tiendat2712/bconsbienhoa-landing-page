'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, BedDouble, Compass, Maximize2 } from 'lucide-react'
import { SectionHeading } from '@/components/reveal'

const plans = [
  {
    id: '1pn',
    name: 'Căn 1 phòng ngủ',
    area: '38 – 45 m²',
    bed: '1 PN + 1 WC',
    view: 'Hướng công viên nội khu',
    note: 'Phù hợp người trẻ độc thân hoặc đầu tư cho thuê gần các khu công nghiệp.',
  },
  {
    id: '2pn',
    name: 'Căn 2 phòng ngủ',
    area: '50 – 62 m²',
    bed: '2 PN + 2 WC',
    view: 'Hướng hồ bơi / thành phố',
    note: 'Loại căn chủ lực, tối ưu diện tích sử dụng cho gia đình 3 – 4 người.',
  },
  {
    id: '3pn',
    name: 'Căn 3 phòng ngủ',
    area: '72 – 85 m²',
    bed: '3 PN + 2 WC',
    view: 'Căn góc, hai mặt thoáng',
    note: 'Số lượng giới hạn, logia rộng và phòng khách liên thông bếp.',
  },
  {
    id: 'shop',
    name: 'Shophouse khối đế',
    area: '85 – 140 m²',
    bed: 'Mặt tiền thương mại',
    view: 'Tiếp giáp trục nội khu',
    note: 'Khai thác kinh doanh trực tiếp từ cộng đồng gần 3.000 cư dân.',
  },
]

export function FloorPlans() {
  const [active, setActive] = useState(plans[1].id)
  const plan = plans.find((item) => item.id === active) ?? plans[0]

  return (
    <section id="mat-bang" className="scroll-mt-24 bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Mặt bằng"
          title="Chọn loại căn phù hợp với gia đình bạn"
          description="Bốn dòng sản phẩm với diện tích linh hoạt từ 38 m² đến 140 m², thiết kế tối ưu ánh sáng tự nhiên và không có căn hộ tối."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div
            className="flex flex-col gap-3"
            role="tablist"
            aria-label="Danh sách loại căn hộ"
          >
            {plans.map((item) => {
              const isActive = item.id === active
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(item.id)}
                  className={[
                    'flex items-center justify-between gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-300',
                    isActive
                      ? 'border-primary bg-primary text-primary-foreground shadow-[0_20px_45px_-24px_rgba(15,56,44,0.8)]'
                      : 'border-border bg-card text-foreground hover:border-primary/35 hover:bg-card',
                  ].join(' ')}
                >
                  <span>
                    <span className="block font-serif text-lg">{item.name}</span>
                    <span
                      className={[
                        'mt-0.5 block text-sm',
                        isActive ? 'text-primary-foreground/70' : 'text-muted-foreground',
                      ].join(' ')}
                    >
                      {item.area}
                    </span>
                  </span>
                  <ArrowUpRight
                    className={[
                      'size-5 transition-transform duration-300',
                      isActive ? 'text-accent' : 'text-muted-foreground/60',
                    ].join(' ')}
                  />
                </button>
              )
            })}
          </div>

          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-3xl border border-border bg-card"
          >
            <div className="bg-background p-6 md:p-8">
              <img
                src="/images/floorplan.png"
                alt={`Mặt bằng chi tiết ${plan.name}`}
                className="mx-auto h-64 w-full max-w-lg object-contain md:h-80"
              />
            </div>
            <div className="border-t border-border p-6 md:p-8">
              <h3 className="font-serif text-2xl text-foreground">{plan.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{plan.note}</p>
              <dl className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: Maximize2, label: 'Diện tích', value: plan.area },
                  { icon: BedDouble, label: 'Cấu trúc', value: plan.bed },
                  { icon: Compass, label: 'Tầm nhìn', value: plan.view },
                ].map((row) => (
                  <div key={row.label} className="rounded-2xl bg-secondary/70 p-4">
                    <row.icon className="size-4 text-primary" />
                    <dt className="mt-3 text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                      {row.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-foreground">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
