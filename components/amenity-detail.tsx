import {
  ChevronRight,
  Waves,
  Dumbbell,
  Trees,
  ShoppingBag,
  Store,
  ShoppingCart,
  GraduationCap,
  Cross,
} from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const internalAmenities = [
  {
    icon: Trees,
    title: 'Công viên nội khu 7.700+ m²',
    desc: 'Mảng xanh mặt đất, lối dạo bộ và tiểu cảnh nước bao quanh 5 block căn hộ.',
  },
  {
    icon: Waves,
    title: 'Hồ bơi tràn bờ',
    desc: 'Hồ bơi theo tiêu chuẩn resort với khu tắm nắng dành riêng cho cư dân.',
  },
  {
    icon: Dumbbell,
    title: 'Khu Gym / Yoga',
    desc: 'Phòng tập thể hình và yoga trong khu sinh hoạt cộng đồng của dự án.',
  },
  {
    icon: ShoppingBag,
    title: 'Dãy shophouse thương mại',
    desc: '113 căn shophouse khối đế phục vụ mua sắm, ẩm thực và dịch vụ tại chỗ.',
  },
]

const externalAmenities = [
  {
    icon: ShoppingCart,
    title: 'Chợ Tam Hiệp',
    dist: '~500 m',
    desc: 'Chợ dân sinh và Chợ Tân Phong ngay sát khu dân cư hiện hữu.',
  },
  {
    icon: Store,
    title: 'Siêu thị & TTTM',
    dist: '~1 km',
    desc: 'Co.opmart, Big C, Vincom Plaza và Aeon Mall Đồng Nai trong bán kính ngắn.',
  },
  {
    icon: GraduationCap,
    title: 'Trường học',
    dist: '~500 m',
    desc: 'Tiểu học Tân Hiệp, THCS/THPT và Đại học Lạc Hồng, CĐ Kỹ thuật Đồng Nai.',
  },
  {
    icon: Cross,
    title: 'Bệnh viện',
    dist: '~1 km',
    desc: 'Bệnh viện Đồng Nai 2, Tâm Hồng Phước và BV Quốc tế Hoàn Mỹ Đồng Nai.',
  },
]

export function AmenityDetail() {
  return (
    <>
      <section className="bg-background pt-28 pb-16 md:pt-36 lg:pb-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <nav aria-label="Đường dẫn" className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="transition-colors hover:text-primary">
              Trang chủ
            </a>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <span className="text-foreground">Tiện ích</span>
          </nav>

          <Reveal>
            <h1 className="mt-6 font-serif text-3xl leading-tight text-balance text-foreground md:text-5xl">
              Tiện ích nội khu &amp; ngoại khu Bcons Central Park Tam Hiệp
            </h1>
            <div className="mt-8 flex flex-col gap-5 leading-relaxed text-pretty text-muted-foreground md:text-lg">
              <p>
                Điểm khác biệt lớn nhất của Bcons Central Park Tam Hiệp so với các dự án cùng phân
                khúc tại khu vực trung tâm là mảng xanh nội khu hơn 7.700+ m² — hiếm có ở một dự án
                nằm ngay lõi đô thị hiện hữu thay vì vùng ven còn nhiều quỹ đất trống.
              </p>
              <p>
                Bên cạnh không gian xanh, cư dân còn có hồ bơi, khu gym/yoga và dãy shophouse thương
                mại phục vụ sinh hoạt tại chỗ. Nhờ vị trí giữa khu dân cư hiện hữu, các tiện ích
                ngoại khu như chợ, siêu thị, trường học, bệnh viện đều chỉ cách vài phút di chuyển —
                không phải chờ hạ tầng hình thành như nhiều khu đô thị mới.
              </p>
              <p>
                Hệ tiện ích này gắn chặt với{' '}
                <a href="/vi-tri" className="text-primary underline underline-offset-4">
                  vị trí Bcons Central Park Biên Hòa
                </a>{' '}
                — lợi thế của một dự án nằm trong lõi hiện hữu — và được phân bổ quanh khối đế theo{' '}
                <a href="/mat-bang" className="text-primary underline underline-offset-4">
                  mặt bằng Bcons Central Park
                </a>
                .
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <figure className="relative mt-12 overflow-hidden rounded-3xl">
              <img
                src="/images/project-pool.jpg"
                alt="Công viên nội khu hơn 7.700 m² và hồ bơi tràn bờ giữa các block Bcons Central Park Tam Hiệp"
                className="h-72 w-full object-cover md:h-[28rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/25 to-foreground/10" />
              <figcaption className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 p-8 text-center md:p-12">
                <span className="font-serif text-4xl text-primary-foreground md:text-6xl">
                  7.700+ m<sup className="text-2xl md:text-4xl">2</sup>
                </span>
                <span className="text-xs font-semibold tracking-[0.28em] text-primary-foreground/90 uppercase md:text-sm">
                  Không gian xanh
                </span>
                <span className="text-sm text-primary-foreground/80">
                  giữa trung tâm Phường Tam Hiệp
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section id="tien-ich-noi-khu" className="scroll-mt-24 bg-secondary/50 py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Tiện ích nội khu"
            title="Không gian sống & tiện ích trong khuôn viên dự án"
            description="Điểm nhấn lớn nhất của Bcons Central Park là công viên nội khu hơn 7.700+ m², cùng chuỗi tiện ích thiết thực phục vụ sinh hoạt hằng ngày của cư dân."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {internalAmenities.map((item, index) => (
              <Reveal key={item.title} delay={0.06 * index}>
                <div className="group flex h-full gap-5 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_28px_60px_-34px_rgba(15,56,44,0.55)]">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <item.icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="tien-ich-ngoai-khu" className="scroll-mt-24 bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Tiện ích ngoại khu"
            title="Tiện ích ngoại khu lân cận trong vài phút di chuyển"
            description="Chỉ 3 – 5 phút di chuyển từ dự án, cư dân dễ dàng tiếp cận đầy đủ tiện ích của trung tâm Biên Hòa."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {externalAmenities.map((item, index) => (
              <Reveal key={item.title} delay={0.05 * index}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/35">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <item.icon className="size-5" />
                  </span>
                  <div className="mt-5 flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-lg text-foreground">{item.title}</h3>
                    <span className="shrink-0 text-xs font-semibold text-accent">{item.dist}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <figure className="mt-14 overflow-hidden rounded-3xl border border-border bg-card">
              <img
                src="/images/location-map.jpg"
                alt="Bản đồ liên kết vùng thể hiện khoảng cách từ Bcons Central Park tới trường học, trung tâm thương mại và bệnh viện tại Biên Hòa"
                className="w-full"
              />
              <figcaption className="p-5 text-sm leading-relaxed text-pretty text-muted-foreground">
                Bản đồ tiện ích liên kết vùng Bcons Central Park Tam Hiệp — khoảng cách tới trường
                học, trung tâm thương mại, bệnh viện và các đầu mối giao thông (nguồn: chủ đầu tư).
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>
    </>
  )
}
