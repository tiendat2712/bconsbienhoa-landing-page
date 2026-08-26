import { Navigation } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const connections = [
  { time: '1 phút', place: 'Quốc lộ 1A, đường Phan Trung' },
  { time: '3 phút', place: 'Chợ Tam Hiệp, siêu thị Big C' },
  { time: '5 phút', place: 'Bệnh viện Đa khoa Đồng Nai' },
  { time: '7 phút', place: 'Trung tâm hành chính Biên Hòa' },
  { time: '10 phút', place: 'KCN Amata, KCN Biên Hòa 1 & 2' },
  { time: '25 phút', place: 'Sân bay Long Thành (cao tốc)' },
]

export function Location() {
  return (
    <section id="vi-tri" className="scroll-mt-24 bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Vị trí"
          title="Tọa độ kết nối của Biên Hòa"
          description="Nằm trên trục Phan Trung — cửa ngõ nối Quốc lộ 1A, dự án thừa hưởng toàn bộ hạ tầng hiện hữu của thành phố, đồng thời hưởng lợi từ cao tốc và sân bay quốc tế Long Thành."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-primary-foreground/20">
              <img
                src="/images/aerial-location.png"
                alt="Bản đồ vị trí và các trục giao thông quanh dự án"
                className="h-80 w-full object-cover md:h-[26rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full border border-primary-foreground/25 bg-primary/70 px-5 py-3 backdrop-blur-md">
                <Navigation className="size-4 text-accent" />
                <span className="text-sm font-medium">236 Phan Trung, P. Tam Hiệp, Biên Hòa</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <ul className="flex flex-col">
              {connections.map((item) => (
                <li
                  key={item.place}
                  className="group flex items-baseline gap-6 border-b border-primary-foreground/15 py-5 transition-colors last:border-b-0 hover:bg-primary-foreground/5"
                >
                  <span className="w-20 shrink-0 font-serif text-xl text-accent">{item.time}</span>
                  <span className="text-primary-foreground/85 transition-transform duration-300 group-hover:translate-x-1">
                    {item.place}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
