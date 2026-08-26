'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BedDouble,
  Bath,
  Compass,
  Maximize2,
  Sparkles,
  ChevronRight,
  Download,
  X,
  ZoomIn,
} from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const hotspots = [
  {
    id: 'ho-boi',
    label: 'Hồ bơi',
    note: 'Hồ bơi tràn bờ khu vực đông nam, kề khối tiện ích và sân vườn.',
    style: 'left-[74%] top-[38%]',
  },
  {
    id: 'cong-vien',
    label: 'Công viên nội khu',
    note: 'Công viên trung tâm hơn 7.700 m² với quảng trường nước và đường dạo.',
    style: 'left-[42%] top-[54%]',
  },
  {
    id: 'shophouse',
    label: 'Dãy shophouse',
    note: '113 căn thương mại khối đế bao quanh trục nội khu, mặt tiền kinh doanh.',
    style: 'left-[26%] top-[86%]',
  },
]

const plans = [
  {
    id: 'tong-the',
    tab: 'Mặt bằng tổng thể',
    name: 'Mặt bằng tổng thể dự án',
    image: '/images/masterplan.png',
    area: '~3  ha (26.696 m²)',
    structure: '5 block · 22 tầng nổi',
    view: '2.820 căn hộ · 113 shophouse',
    highlights: [
      'Bố trí 5 block cao 22 tầng ôm trọn công viên trung tâm',
      'Khối đế thương mại và dãy shophouse bao quanh mặt đường',
      'Hồ bơi, khu tiện ích và sân vườn nằm ở lõi dự án',
    ],
  },
  {
    id: 'tang-dien-hinh',
    tab: 'Mặt bằng tầng điển hình',
    name: 'Mặt bằng tầng điển hình',
    image: '/images/floorplan.png',
    area: '~28 – 32 căn/tầng',
    structure: '2 thang máy + thang bộ',
    view: 'Hành lang thông thoáng 2 đầu',
    highlights: [
      'Lõi thang máy và thang thoát hiểm bố trí trung tâm mỗi block',
      'Không có căn hộ tối, mọi căn đều tiếp cận ánh sáng tự nhiên',
      'Hành lang giữa rộng, thông gió tự nhiên hai đầu block',
    ],
  },
  {
    id: '1pn',
    tab: 'Căn hộ 1PN',
    name: 'Mặt bằng căn hộ 1 phòng ngủ',
    image: '/images/floorplan.png',
    area: '43 – 45 m²',
    structure: '1 PN · 1 WC',
    view: 'Ban công hướng công viên',
    highlights: [
      'Phù hợp người độc thân, chuyên gia trẻ thuê/ở dài hạn',
      'Bếp mở liên thông phòng khách tối ưu diện tích',
      'Giá dự kiến 2,0 – 2,3 tỷ đồng',
    ],
  },
  {
    id: '2pn',
    tab: 'Căn hộ 2PN',
    name: 'Mặt bằng căn hộ 2 phòng ngủ',
    image: '/images/floorplan.png',
    area: '51 – 58 m²',
    structure: '2 PN · 2 WC',
    view: 'Ban công hướng hồ bơi / thành phố',
    highlights: [
      'Loại căn chủ lực dành cho gia đình 3 – 4 người',
      'Hai phòng ngủ đều có cửa sổ, logia phơi riêng',
      'Giá dự kiến 2,5 – 2,8 tỷ đồng',
    ],
  },
]

export function FloorPlanDetail() {
  const [active, setActive] = useState(plans[0].id)
  const [lightbox, setLightbox] = useState<string | null>(null)
  const plan = plans.find((item) => item.id === active) ?? plans[0]

  return (
    <>
      {/* Hero */}
      <section className="bg-background pt-28 pb-16 md:pt-36 lg:pb-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <nav aria-label="Đường dẫn" className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="transition-colors hover:text-primary">
              Trang chủ
            </a>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <span className="text-foreground">Mặt bằng</span>
          </nav>

          <Reveal>
            <h1 className="mt-6 font-serif text-3xl leading-tight text-balance text-foreground md:text-5xl">
              Mặt bằng tổng thể &amp; thiết kế căn hộ Bcons Central Park Tam Hiệp
            </h1>
            <div className="mt-8 flex flex-col gap-5 leading-relaxed text-pretty text-muted-foreground md:text-lg">
              <p>
                Trên quỹ đất ~3 ha (khoảng 26.696 m²), Bcons Central Park Tam Hiệp được quy hoạch
                thành 5 block căn hộ cao 22 tầng nổi và 2 tầng hầm, cung cấp 2.820 căn hộ ở và 113
                căn thương mại dịch vụ (shophouse).
              </p>
              <p>
                Sản phẩm chia thành 3 loại diện tích — 1, 2 và 3 phòng ngủ — nhằm phục vụ cả nhu cầu
                ở thực lẫn đầu tư cho thuê. Xem mặt bằng tổng thể và mặt bằng chi tiết từng loại căn
                hộ bên dưới, kèm mức giá dự kiến tương ứng.
              </p>
              <p>
                Mặt bằng chỉ trả lời được câu hỏi &quot;ở có thoải mái không&quot;; để quyết định
                mua, đọc kèm{' '}
                <a href="/gia-ban" className="text-primary underline underline-offset-4">
                  giá bán Bcons Central Park
                </a>{' '}
                theo từng loại căn và{' '}
                <a href="/vi-tri" className="text-primary underline underline-offset-4">
                  vị trí Bcons Phan Trung
                </a>{' '}
                của toàn khu.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Master plan showcase */}
      <section className="bg-secondary/50 py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Mặt bằng"
            title="Mặt bằng tổng quan dự án"
            description="Bố trí khối căn hộ, dãy shophouse và khu tiện ích trong tổng thể quỹ đất ~3 ha. Rê chuột vào các điểm nổi bật để xem chi tiết từng phân khu."
          />

          <Reveal delay={0.1}>
            <figure className="mt-12">
              <div className="group relative overflow-hidden rounded-3xl border border-border bg-card">
                <img
                  src="/images/masterplan.png"
                  alt="Mặt bằng tổng thể 3D Bcons Central Park Tam Hiệp: 5 block căn hộ, công viên nội khu, hồ bơi và dãy shophouse"
                  className="w-full"
                />

                {hotspots.map((spot) => (
                  <div
                    key={spot.id}
                    className={`absolute ${spot.style} -translate-x-1/2 -translate-y-1/2`}
                  >
                    <div className="group/spot relative flex flex-col items-center">
                      <span className="flex size-4 items-center justify-center">
                        <span className="absolute inline-flex size-4 animate-ping rounded-full bg-accent/60" />
                        <span className="relative inline-flex size-3 rounded-full bg-accent ring-4 ring-accent/25" />
                      </span>
                      <span className="pointer-events-none mt-2 rounded-full bg-primary px-3 py-1 text-[0.7rem] font-semibold tracking-wide text-primary-foreground uppercase shadow-lg">
                        {spot.label}
                      </span>
                      <span className="pointer-events-none absolute bottom-full mb-2 w-48 rounded-xl border border-border bg-card p-3 text-center text-xs leading-relaxed text-muted-foreground opacity-0 shadow-xl transition-opacity duration-300 group-hover/spot:opacity-100">
                        {spot.note}
                      </span>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => setLightbox('/images/masterplan.png')}
                  className="absolute right-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold text-foreground shadow-lg backdrop-blur transition-transform hover:scale-105"
                >
                  <ZoomIn className="size-4" />
                  Xem lớn
                </button>
              </div>

              <figcaption className="mt-5 flex flex-wrap gap-3">
                {hotspots.map((spot) => (
                  <span
                    key={spot.id}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/85"
                  >
                    <span className="size-2 rounded-full bg-accent" />
                    {spot.label}
                  </span>
                ))}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Floor plan tabs */}
      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Thiết kế căn hộ"
            title="Mặt bằng từng loại căn hộ"
            description="Chọn loại mặt bằng để xem thiết kế chi tiết và thông số từng dòng sản phẩm."
          />

          <div
            className="mt-10 flex flex-wrap gap-3"
            role="tablist"
            aria-label="Danh sách loại mặt bằng"
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
                    'rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300',
                    isActive
                      ? 'border-primary bg-primary text-primary-foreground shadow-[0_16px_36px_-20px_rgba(15,56,44,0.8)]'
                      : 'border-border bg-card text-foreground/85 hover:border-primary/40 hover:text-primary',
                  ].join(' ')}
                >
                  {item.tab}
                </button>
              )
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12"
            >
              <div className="group relative overflow-hidden rounded-3xl border border-border bg-secondary/40 p-6 md:p-8">
                <img
                  src={plan.image || '/placeholder.svg'}
                  alt={`${plan.name} Bcons Central Park`}
                  className="mx-auto h-72 w-full max-w-xl object-contain md:h-96"
                />
                <button
                  type="button"
                  onClick={() => setLightbox(plan.image)}
                  aria-label="Phóng to mặt bằng"
                  className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg backdrop-blur transition-transform hover:scale-105"
                >
                  <ZoomIn className="size-4" />
                </button>
              </div>

              <div className="flex flex-col">
                <h3 className="font-serif text-2xl text-foreground">{plan.name}</h3>
                <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    { icon: Maximize2, label: 'Diện tích', value: plan.area },
                    { icon: BedDouble, label: 'Cấu trúc', value: plan.structure },
                    { icon: Compass, label: 'Tầm nhìn', value: plan.view },
                    { icon: Bath, label: 'Bàn giao', value: 'Thô / hoàn thiện cơ bản' },
                  ].map((row) => (
                    <div key={row.label} className="rounded-2xl border border-border bg-card p-4">
                      <row.icon className="size-4 text-primary" />
                      <dt className="mt-3 text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                        {row.label}
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-foreground">{row.value}</dd>
                    </div>
                  ))}
                </dl>

                <ul className="mt-6 flex flex-col gap-3">
                  {plan.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground/85">
                      <Sparkles className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#dang-ky"
                  className="mt-8 inline-flex items-center justify-center gap-2 self-start rounded-full bg-primary px-7 py-3.5 text-xs font-semibold tracking-[0.14em] text-primary-foreground uppercase transition-all duration-300 hover:scale-[1.02]"
                >
                  <Download className="size-4" />
                  Tải mặt bằng PDF
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Xem mặt bằng phóng to"
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Đóng"
              className="absolute right-5 top-5 inline-flex size-11 items-center justify-center rounded-full bg-background text-foreground shadow-lg"
            >
              <X className="size-5" />
            </button>
            <motion.img
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.94 }}
              src={lightbox || '/placeholder.svg'}
              alt="Mặt bằng Bcons Central Park phóng to"
              className="max-h-[88vh] max-w-[92vw] rounded-2xl bg-card object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
