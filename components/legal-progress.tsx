import { Award, FileCheck2, HardHat, Hourglass } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const legal = [
  { icon: FileCheck2, title: 'Sổ hồng lâu dài', desc: 'Căn hộ sở hữu vĩnh viễn, không giới hạn 50 năm.' },
  { icon: HardHat, title: 'Giấy phép xây dựng', desc: 'Đã được cấp phép và triển khai thi công phần móng.' },
  { icon: Award, title: 'Ngân hàng bảo lãnh', desc: 'Hợp đồng mua bán có bảo lãnh của ngân hàng.' },
  { icon: Hourglass, title: 'Tiến độ minh bạch', desc: 'Cập nhật hình ảnh thi công định kỳ hằng tháng.' },
]

const timeline = [
  { phase: 'Giai đoạn 1', period: 'Q2/2025', desc: 'Hoàn thiện pháp lý, khởi công phần móng.' },
  { phase: 'Giai đoạn 2', period: 'Q1/2026', desc: 'Thi công phần thân block A & B.' },
  { phase: 'Giai đoạn 3', period: 'Q3/2026', desc: 'Cất nóc block A & B, triển khai block C & D.' },
  { phase: 'Giai đoạn 4', period: 'Q4/2027', desc: 'Hoàn thiện cảnh quan và bàn giao căn hộ.' },
]

export function LegalProgress() {
  return (
    <>
      <section id="phap-ly" className="scroll-mt-24 bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Pháp lý"
            title="Nền tảng pháp lý rõ ràng, an tâm xuống tiền"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {legal.map((item, index) => (
              <Reveal key={item.title} delay={0.05 * index}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                  <item.icon className="size-5 text-primary" />
                  <h3 className="mt-4 font-serif text-lg text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div id="chu-dau-tu" className="mt-16 scroll-mt-24 grid gap-10 rounded-3xl border border-border bg-secondary/50 p-8 md:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                Chủ đầu tư
              </p>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-balance text-foreground">
                Tập đoàn Bcons — 15 năm kiến tạo an cư
              </h3>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="leading-relaxed text-pretty text-muted-foreground">
                Bcons là nhà phát triển quen thuộc với dòng căn hộ vừa tầm tại khu vực Bình Dương —
                TP.HCM, với hàng loạt dự án đã bàn giao như Bcons Suối Tiên, Bcons Miền Đông, Bcons
                Plaza, Bcons Polaris. Bcons Central Park Tam Hiệp là bước tiến đầu tiên của tập đoàn
                tại thị trường Biên Hòa, kế thừa triết lý: sản phẩm đúng giá trị, giao nhà đúng hẹn.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="tien-do" className="scroll-mt-24 bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            tone="dark"
            eyebrow="Tiến độ"
            title="Lộ trình triển khai dự án"
            description="Tiến độ thi công được cập nhật liên tục và gắn với các mốc thanh toán trong hợp đồng mua bán."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-primary-foreground/15 md:grid-cols-4">
            {timeline.map((item, index) => (
              <Reveal key={item.phase} delay={0.06 * index}>
                <div className="h-full bg-primary-foreground/5 p-7 transition-colors duration-300 hover:bg-primary-foreground/10">
                  <p className="font-serif text-2xl text-accent">{item.period}</p>
                  <p className="mt-3 text-xs font-semibold tracking-[0.16em] text-primary-foreground/60 uppercase">
                    {item.phase}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
