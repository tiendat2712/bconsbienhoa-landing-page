import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const cards = [
  {
    kind: 'Chi tiết dự án',
    title: 'Giá bán Bcons Central Park',
    desc: 'Bảng giá 1 – 3 phòng ngủ, chính sách thanh toán và ưu đãi hiện hành.',
    href: '/gia-ban',
  },
  {
    kind: 'Chi tiết dự án',
    title: 'Tiện ích Bcons Central Park',
    desc: 'Công viên nội khu 7.700+ m², hồ bơi, gym/yoga và tiện ích ngoại khu.',
    href: '/#tien-ich',
  },
  {
    kind: 'Chi tiết dự án',
    title: 'Nhà mẫu Bcons Central Park',
    desc: 'Không gian thực tế căn hộ mẫu, vật liệu và phong cách bàn giao.',
    href: '/#nha-mau',
  },
  {
    kind: 'Chi tiết dự án',
    title: 'Vị trí Bcons Phan Trung, Tam Hiệp',
    desc: 'Toạ độ 236 Phan Trung, kết nối vùng và khoảng cách tới các khu công nghiệp.',
    href: '/vi-tri',
  },
]

const chips = [
  { label: 'Tổng quan dự án', href: '/#tong-quan' },
  { label: 'Giá bán', href: '/gia-ban' },
  { label: 'Vị trí', href: '/vi-tri' },
  { label: 'Tiện ích', href: '/#tien-ich' },
  { label: 'Pháp lý', href: '/#phap-ly' },
  { label: 'Nhà mẫu', href: '/#nha-mau' },
  { label: 'Tiến độ', href: '/#tien-do' },
  { label: 'Tin tức', href: '/#tin-tuc' },
]

export function FloorPlanRelated() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <Reveal>
          <h2 className="font-serif text-3xl leading-tight text-balance text-foreground md:text-4xl">
            Xem thêm về Bcons Central Park Tam Hiệp
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-pretty text-muted-foreground">
            Những nội dung thường đi kèm mặt bằng Bcons Central Park, giúp bạn hoàn thiện bức tranh
            về dự án trước khi quyết định.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.06}>
              <a
                href={card.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <span className="text-[0.68rem] font-semibold tracking-[0.2em] text-accent uppercase">
                  {card.kind}
                </span>
                <span className="mt-3 flex items-center gap-2 font-serif text-xl text-foreground">
                  {card.title}
                  <ArrowUpRight className="size-4 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {card.desc}
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-16 border-t border-border pt-10">
            <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              Toàn bộ chuyên mục Bcons Central Park
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {chips.map((chip) => (
                <a
                  key={chip.label}
                  href={chip.href}
                  className="rounded-full border border-border bg-card px-5 py-2.5 text-sm text-foreground/85 transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {chip.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
