import { ArrowRight, Check } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const rows = [
  { type: 'Căn 1 phòng ngủ', area: '38 – 45 m²', price: 'Từ 1,29 tỷ' },
  { type: 'Căn 2 phòng ngủ', area: '50 – 62 m²', price: 'Từ 1,75 tỷ' },
  { type: 'Căn 3 phòng ngủ', area: '72 – 85 m²', price: 'Từ 2,55 tỷ' },
  { type: 'Shophouse khối đế', area: '85 – 140 m²', price: 'Liên hệ' },
]

const policies = [
  'Thanh toán chỉ 1% mỗi tháng trong giai đoạn xây dựng',
  'Hỗ trợ vay tới 70% giá trị căn hộ, ân hạn gốc 24 tháng',
  'Chiết khấu tới 8% khi thanh toán nhanh',
  'Tặng gói nội thất hoặc phí quản lý 2 năm đầu',
]

export function Pricing() {
  return (
    <section id="gia-ban" className="scroll-mt-24 bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Giá bán"
          title="Bảng giá & chính sách thanh toán"
          description="Giá bán mang tính tham khảo tại thời điểm cập nhật và có thể thay đổi theo từng giỏ hàng. Liên hệ để nhận bảng giá chi tiết từng căn."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border bg-card">
              <table className="w-full text-left">
                <caption className="sr-only">Bảng giá bán theo loại căn hộ</caption>
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th scope="col" className="px-6 py-4 text-xs font-semibold tracking-[0.16em] uppercase">
                      Loại sản phẩm
                    </th>
                    <th scope="col" className="px-6 py-4 text-xs font-semibold tracking-[0.16em] uppercase">
                      Diện tích
                    </th>
                    <th scope="col" className="px-6 py-4 text-right text-xs font-semibold tracking-[0.16em] uppercase">
                      Giá từ
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {rows.map((row) => (
                    <tr key={row.type} className="transition-colors hover:bg-secondary/60">
                      <th scope="row" className="px-6 py-5 text-sm font-medium text-foreground">
                        {row.type}
                      </th>
                      <td className="px-6 py-5 text-sm text-muted-foreground">{row.area}</td>
                      <td className="px-6 py-5 text-right font-serif text-lg text-primary">
                        {row.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <a
              href="/gia-ban"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
            >
              Xem chi tiết giá bán và chính sách thanh toán
              <ArrowRight className="size-4" />
            </a>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="h-full rounded-3xl bg-primary p-8 text-primary-foreground">
              <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                Chính sách
              </p>
              <h3 className="mt-3 font-serif text-2xl leading-snug text-balance">
                Ưu đãi dành cho khách đặt chỗ sớm
              </h3>
              <ul className="mt-6 flex flex-col gap-4">
                {policies.map((policy) => (
                  <li key={policy} className="flex items-start gap-3 text-sm leading-relaxed text-primary-foreground/85">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    {policy}
                  </li>
                ))}
              </ul>
              <a
                href="#dang-ky"
                className="mt-8 flex items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:scale-[1.02]"
              >
                Nhận bảng giá mới nhất
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
