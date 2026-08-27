'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
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
import { Reveal, SectionHeading } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function FloorPlanDetail() {
  const { theme, locale, t } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  const hotspots = isEn
    ? [
        {
          id: 'ho-boi',
          label: 'Resort Pool',
          note: 'Infinity pool located in southeast corner adjacent to amenities zone.',
          style: 'left-[74%] top-[38%]',
        },
        {
          id: 'cong-vien',
          label: 'Central Park',
          note: 'Over 7,700 sqm central landscaped park with water features and promenade.',
          style: 'left-[42%] top-[54%]',
        },
        {
          id: 'shophouse',
          label: 'Podium Shophouses',
          note: '113 commercial units encircling internal street frontages.',
          style: 'left-[26%] top-[86%]',
        },
      ]
    : [
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

  const plans = isEn
    ? [
        {
          id: 'tong-the',
          tab: 'Master Plan',
          name: 'Overall Project Master Plan',
          image: '/images/masterplan.png',
          area: '~3 ha (26,696 sqm)',
          structure: '5 Blocks · 22 Storeys',
          view: '2,820 Condos · 113 Shophouses',
          highlights: [
            'Layout of 5 high-rise towers embracing the lush central park',
            'Commercial podium and street-facing shophouse promenade',
            'Infinity pool and recreational facilities located at the project core',
          ],
        },
        {
          id: 'tang-dien-hinh',
          tab: 'Typical Floor Plan',
          name: 'Typical Tower Floor Layout',
          image: '/images/floorplan.png',
          area: '~28 – 32 units/floor',
          structure: 'High-speed elevator cluster',
          view: 'Dual-end ventilated corridors',
          highlights: [
            'Elevator cores and fire escape stairs centrally positioned in each block',
            'Zero dark units; every residence captures natural daylight and breeze',
            'Wide central corridors with natural ventilation at both ends',
          ],
        },
        {
          id: '1pn',
          tab: '1-Bedroom Plan',
          name: '1-Bedroom Apartment Layout',
          image: '/images/floorplan.png',
          area: '43 – 45 sqm',
          bed: '1 Bed · 1 Bath',
          view: 'Park / Internal courtyard view',
          highlights: [
            'Ideal for young professionals, singles, and long-term rental investors',
            'Open kitchen integrated seamlessly with spacious living room',
            'Estimated pricing: 2.0 – 2.3 billion VND',
          ],
        },
        {
          id: '2pn',
          tab: '2-Bedroom Plan',
          name: '2-Bedroom Apartment Layout',
          image: '/images/floorplan.png',
          area: '51 – 58 sqm',
          bed: '2 Bed · 2 Bath',
          view: 'Pool / City panorama',
          highlights: [
            'Core family residence model designed for 3 – 4 residents',
            'Both bedrooms feature exterior windows, separate laundry loggia',
            'Estimated pricing: 2.5 – 2.8 billion VND',
          ],
        },
      ]
    : [
        {
          id: 'tong-the',
          tab: 'Mặt bằng tổng thể',
          name: 'Mặt bằng tổng thể dự án',
          image: '/images/masterplan.png',
          area: '~3 ha (26.696 m²)',
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

  const [active, setActive] = useState(plans[0].id)
  const [lightbox, setLightbox] = useState<string | null>(null)

  const plan = plans.find((p) => p.id === active) ?? plans[0]

  return (
    <>
      <section className="bg-background pt-28 pb-16 md:pt-36 lg:pb-20 transition-colors">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <nav aria-label="Đường dẫn" className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className={`transition-colors ${isDark ? 'hover:text-[#e6c887]' : 'hover:text-primary'}`}>
              {t.nav.home}
            </Link>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <span className={isDark ? 'text-[#e6c887] font-semibold' : 'text-foreground'}>{t.nav.plans}</span>
          </nav>

          <Reveal>
            <h1 className="mt-6 font-serif text-3xl leading-tight text-balance text-foreground md:text-5xl font-bold">
              {isEn
                ? 'Bcons Central Park Tam Hiep Floor Plans: Master Plan & Layouts'
                : 'Mặt bằng Bcons Central Park Tam Hiệp: tổng thể, tầng và layout căn hộ'}
            </h1>
            <div className="mt-8 flex flex-col gap-5 leading-relaxed text-pretty text-muted-foreground md:text-lg">
              {isEn ? (
                <>
                  <p>
                    Bcons Central Park covers nearly 3 hectares at 236 Phan Trung, featuring 5 residential towers rising 22 storeys with 2,820 apartments and 113 commercial shophouses.
                  </p>
                  <p>
                    Explore master plans, typical tower layouts, and specific unit dimensions below. You can also view{' '}
                    <Link href="/gia-ban" className={`font-semibold underline underline-offset-4 ${isDark ? 'text-[#e6c887] hover:text-[#f7e4b5]' : 'text-primary'}`}>
                      indicative prices
                    </Link>{' '}
                    and{' '}
                    <Link href="/tien-ich" className={`font-semibold underline underline-offset-4 ${isDark ? 'text-[#e6c887] hover:text-[#f7e4b5]' : 'text-primary'}`}>
                      internal amenities
                    </Link>.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Mặt bằng Bcons Central Park được quy hoạch trên khu đất gần 3 ha tại 236 Phan Trung,
                    gồm 5 block cao 22 tầng với 2.820 căn hộ và 113 căn shophouse khối đế. Toàn bộ thiết
                    kế tối ưu theo nguyên tắc mở, giúp hầu hết các căn đều có ban công đón gió tự nhiên.
                  </p>
                  <p>
                    Khám phá bản vẽ tổng quan, mặt bằng tầng điển hình và layout chi tiết từng loại căn hộ
                    bên dưới. Bạn cũng có thể xem thêm{' '}
                    <Link href="/gia-ban" className={`font-semibold underline underline-offset-4 ${isDark ? 'text-[#e6c887] hover:text-[#f7e4b5]' : 'text-primary'}`}>
                      giá bán dự kiến
                    </Link>{' '}
                    và{' '}
                    <Link href="/tien-ich" className={`font-semibold underline underline-offset-4 ${isDark ? 'text-[#e6c887] hover:text-[#f7e4b5]' : 'text-primary'}`}>
                      tiện ích nội khu
                    </Link>{' '}
                    của toàn khu.
                  </p>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Master plan showcase */}
      <section className="bg-secondary/50 dark:bg-card/40 py-20 lg:py-24 transition-colors">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeading
            eyebrow={t.plans.eyebrow}
            title={isEn ? 'Overall Project Master Plan' : 'Mặt bằng tổng quan dự án'}
            description={isEn ? 'Layout of 5 high-rise blocks, central park and shophouses on nearly 3 hectares.' : 'Bố trí khối căn hộ, dãy shophouse và khu tiện ích trong tổng thể quỹ đất ~3 ha.'}
          />

          <Reveal delay={0.1}>
            <figure className="mt-12">
              <div className={`group relative overflow-hidden rounded-3xl border shadow-xl ${isDark ? 'border-white/15 bg-card/80' : 'border-border bg-card'}`}>
                <img
                  src="/images/masterplan.png"
                  alt="Mặt bằng tổng thể 3D Bcons Central Park Tam Hiệp"
                  className="w-full"
                />

                {hotspots.map((spot) => (
                  <div
                    key={spot.id}
                    className={`absolute ${spot.style} -translate-x-1/2 -translate-y-1/2`}
                  >
                    <div className="group/spot relative flex flex-col items-center">
                      <span className="flex size-4 items-center justify-center">
                        <span className={`absolute inline-flex size-4 animate-ping rounded-full ${isDark ? 'bg-[#e6c887]/60' : 'bg-accent/60'}`} />
                        <span className={`relative inline-flex size-3 rounded-full ${isDark ? 'bg-[#e6c887] ring-4 ring-[#e6c887]/30' : 'bg-accent ring-4 ring-accent/25'}`} />
                      </span>
                      <span className={`pointer-events-none mt-2 rounded-full px-3 py-1 text-[0.7rem] font-bold tracking-wide uppercase shadow-lg ${
                        isDark ? 'bg-[#e6c887] text-[#072018]' : 'bg-primary text-primary-foreground'
                      }`}>
                        {spot.label}
                      </span>
                      <span className={`pointer-events-none absolute bottom-full mb-2 w-48 rounded-xl border p-3 text-center text-xs leading-relaxed opacity-0 shadow-xl transition-opacity duration-300 group-hover/spot:opacity-100 ${
                        isDark ? 'border-white/15 bg-[#0c1c16] text-[#c2d3cb]' : 'border-border bg-card text-muted-foreground'
                      }`}>
                        {spot.note}
                      </span>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => setLightbox('/images/masterplan.png')}
                  className="absolute right-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-xs font-bold text-foreground shadow-lg backdrop-blur transition-transform hover:scale-105 cursor-pointer"
                >
                  <ZoomIn className={`size-4 ${isDark ? 'text-[#e6c887]' : 'text-primary'}`} />
                  {isEn ? 'Enlarge' : 'Xem lớn'}
                </button>
              </div>

              <figcaption className="mt-5 flex flex-wrap gap-3">
                {hotspots.map((spot) => (
                  <span
                    key={spot.id}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm ${
                      isDark ? 'border-white/10 bg-card/80 text-white/90' : 'border-border bg-card text-foreground/85'
                    }`}
                  >
                    <span className={`size-2 rounded-full ${isDark ? 'bg-[#e6c887]' : 'bg-accent'}`} />
                    {spot.label}
                  </span>
                ))}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Floor plan tabs */}
      <section className="bg-background py-20 lg:py-24 transition-colors">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeading
            eyebrow={t.plans.eyebrow}
            title={isEn ? 'Specific Unit Floor Layouts' : 'Mặt bằng từng loại căn hộ'}
            description={isEn ? 'Select a layout to view architectural dimensions.' : 'Chọn loại mặt bằng để xem thiết kế chi tiết và thông số từng dòng sản phẩm.'}
          />

          <div
            className="mt-10 flex flex-wrap gap-3"
            role="tablist"
            aria-label={isEn ? 'Floor plan types' : 'Danh sách loại mặt bằng'}
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
                    'rounded-full border px-5 py-2.5 text-sm font-bold transition-all duration-300 cursor-pointer',
                    isActive
                      ? isDark
                        ? 'border-[#e6c887] bg-[#e6c887] text-[#072018] shadow-lg'
                        : 'border-primary bg-primary text-primary-foreground shadow-lg'
                      : isDark
                      ? 'border-white/10 bg-card/80 text-white/85 hover:border-[#e6c887]/50 hover:text-[#e6c887]'
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
              <div className={`group relative overflow-hidden rounded-3xl border p-6 md:p-8 ${isDark ? 'border-white/15 bg-card/80' : 'border-border bg-secondary/40'}`}>
                <img
                  src={plan.image || '/placeholder.svg'}
                  alt={`${plan.name} Bcons Central Park`}
                  className="mx-auto h-72 w-full max-w-xl object-contain md:h-96"
                />
                <button
                  type="button"
                  onClick={() => setLightbox(plan.image)}
                  aria-label={isEn ? 'Enlarge plan' : 'Phóng to mặt bằng'}
                  className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg backdrop-blur transition-transform hover:scale-105 cursor-pointer"
                >
                  <ZoomIn className={`size-4 ${isDark ? 'text-[#e6c887]' : 'text-primary'}`} />
                </button>
              </div>

              <div className="flex flex-col">
                <h3 className="font-serif text-2xl font-bold text-foreground">{plan.name}</h3>
                <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    { icon: Maximize2, label: t.plans.areaLabel, value: plan.area },
                    { icon: BedDouble, label: t.plans.structureLabel, value: plan.structure || (plan as any).bed },
                    { icon: Compass, label: t.plans.viewLabel, value: plan.view },
                    { icon: Bath, label: isEn ? 'Handover' : 'Bàn giao', value: isEn ? 'Basic standard' : 'Thô / hoàn thiện cơ bản' },
                  ].map((row) => (
                    <div key={row.label} className={`rounded-2xl border p-4 ${isDark ? 'border-white/10 bg-card/80' : 'border-border bg-card'}`}>
                      <row.icon className={`size-4 transition-colors ${isDark ? 'text-[#e6c887]' : 'text-primary'}`} />
                      <dt className="mt-3 text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase font-bold">
                        {row.label}
                      </dt>
                      <dd className="mt-1 text-sm font-semibold text-foreground">{row.value}</dd>
                    </div>
                  ))}
                </dl>

                <ul className="mt-6 flex flex-col gap-3">
                  {plan.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground/85">
                      <Sparkles className={`mt-0.5 size-4 shrink-0 ${isDark ? 'text-[#e6c887]' : 'text-accent'}`} aria-hidden="true" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#dang-ky"
                  className={`mt-8 inline-flex items-center justify-center gap-2 self-start rounded-full px-7 py-3.5 text-xs font-bold tracking-[0.14em] uppercase transition-all duration-300 hover:scale-[1.02] shadow-lg ${
                    isDark
                      ? 'bg-gradient-to-r from-[#e6c887] via-[#f7e4b5] to-[#e6c887] text-[#072018] shadow-[0_10px_25px_-5px_rgba(230,200,135,0.4)]'
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  <Download className="size-4" />
                  {isEn ? 'Download PDF Plans' : 'Tải mặt bằng PDF'}
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
              className="absolute right-5 top-5 inline-flex size-11 items-center justify-center rounded-full bg-background text-foreground shadow-lg cursor-pointer"
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
