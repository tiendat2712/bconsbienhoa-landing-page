import { Building2, CalendarClock, Landmark, LayoutGrid } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const facts = [
  { label: 'Tên dự án', value: 'Bcons Central Park Tam Hiệp' },
  { label: 'Vị trí', value: '236 Phan Trung, P. Tam Hiệp, Biên Hòa' },
  { label: 'Chủ đầu tư', value: 'Tập đoàn Bcons' },
  { label: 'Quy mô', value: 'Gần 3 ha, 4 block căn hộ' },
  { label: 'Loại hình', value: 'Căn hộ chung cư, shophouse khối đế' },
  { label: 'Pháp lý', value: 'Sổ hồng sở hữu lâu dài' },
]

const stats = [
  { icon: Building2, value: '4', label: 'Block căn hộ' },
  { icon: LayoutGrid, value: '~2.900', label: 'Sản phẩm' },
  { icon: Landmark, value: '30%', label: 'Mật độ xây dựng' },
  { icon: CalendarClock, value: 'Q4/2027', label: 'Dự kiến bàn giao' },
]

export function Overview() {
  return (
    <section id="tong-quan" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Tổng quan"
              title="Một khu đô thị xanh giữa lõi trung tâm Biên Hòa"
              description="Bcons Central Park được quy hoạch với tỉ lệ cây xanh và tiện ích nội khu vượt trội, hướng đến chuẩn sống resort ngay trong lòng thành phố công nghiệp năng động nhất Đồng Nai."
            />

            <Reveal delay={0.1} className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_50px_-30px_rgba(15,56,44,0.5)]"
                >
                  <stat.icon className="size-5 text-primary" />
                  <p className="mt-4 font-serif text-2xl text-foreground">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-3xl border border-border bg-card">
              <img
                src="/images/aerial-location.png"
                alt="Toàn cảnh khu vực dự án nhìn từ trên cao"
                className="h-64 w-full object-cover md:h-72"
              />
              <dl className="divide-y divide-border">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex flex-col gap-1 px-6 py-4 transition-colors hover:bg-secondary/60 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                  >
                    <dt className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                      {fact.label}
                    </dt>
                    <dd className="text-sm font-medium text-foreground sm:text-right">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
