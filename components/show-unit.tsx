import { ArrowRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const specs = [
  'Bàn giao hoàn thiện cơ bản, sơn nước toàn bộ',
  'Sàn gạch cao cấp 60×60, trần thạch cao khu vực bếp',
  'Thiết bị vệ sinh Inax, cửa chính chống cháy',
  'Hệ thống điện âm tường, chờ sẵn máy lạnh các phòng',
]

export function ShowUnit() {
  return (
    <section id="nha-mau" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative">
            <img
              src="/images/interior-living.png"
              alt="Không gian phòng khách căn hộ mẫu"
              className="aspect-4/3 w-full rounded-3xl object-cover"
            />
            <div className="absolute -bottom-6 -right-2 hidden rounded-2xl border border-border bg-card px-6 py-5 shadow-[0_30px_60px_-30px_rgba(15,56,44,0.5)] sm:block">
              <p className="text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                Nhà mẫu
              </p>
              <p className="mt-1 font-serif text-lg text-primary">Mở cửa tham quan hằng ngày</p>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Nhà mẫu"
            title="Trải nghiệm căn hộ thật trước khi quyết định"
            description="Nhà mẫu được dựng 1:1 theo mặt bằng bàn giao, giúp bạn hình dung chính xác công năng, chiều cao trần và ánh sáng tự nhiên của căn hộ."
          />

          <Reveal delay={0.1} className="mt-8">
            <ul className="flex flex-col gap-3">
              {specs.map((spec) => (
                <li key={spec} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {spec}
                </li>
              ))}
            </ul>

            <a
              href="#dang-ky"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              Đặt lịch tham quan nhà mẫu
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
