import { Check, ChevronRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const rows = [
  { type: '1 Phòng ngủ', area: '43 – 45 m²', price: '2,0 – 2,3 tỷ đồng' },
  { type: '2 Phòng ngủ', area: '51 – 58 m²', price: '2,5 – 2,8 tỷ đồng' },
  { type: '3 Phòng ngủ', area: '85 – 86 m²', price: '3,4 – 3,8 tỷ đồng' },
]

const payments = [
  'Thanh toán chia nhỏ theo tiến độ xây dựng, mỗi đợt dự kiến 2 – 5% giá trị căn hộ',
  'Ngân hàng đối tác hỗ trợ vay đến 70% giá trị căn hộ',
  'Chính sách ân hạn nợ gốc, hỗ trợ lãi suất giai đoạn xây dựng (chờ công bố chính thức)',
  'Chiết khấu thêm cho khách hàng thanh toán nhanh vượt tiến độ',
]

export function PricingDetail() {
  return (
    <>
      <section className="bg-background pt-28 pb-16 md:pt-36 lg:pb-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <nav aria-label="Đường dẫn" className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="transition-colors hover:text-primary">
              Trang chủ
            </a>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <span className="text-foreground">Giá bán</span>
          </nav>

          <Reveal>
            <h1 className="mt-6 font-serif text-3xl leading-tight text-balance text-foreground md:text-5xl">
              Chi tiết giá bán Bcons Central Park Tam Hiệp
            </h1>
            <div className="mt-8 flex flex-col gap-5 leading-relaxed text-pretty text-muted-foreground md:text-lg">
              <p>
                Bcons Central Park giá hiện dao động từ 2,0 đến 3,8 tỷ đồng, tuỳ loại căn hộ (1 – 3
                phòng ngủ, diện tích 43 – 86 m²), tầng, hướng view và chính sách áp dụng tại thời
                điểm mở bán chính thức từ chủ đầu tư. Đây là mức giá tham khảo trong giai đoạn giới
                thiệu dự án.
              </p>
              <p>
                Dự án áp dụng chính sách thanh toán chia nhỏ theo tiến độ xây dựng, hỗ trợ vay ngân
                hàng và các ưu đãi cho khách thanh toán nhanh — chi tiết ở bảng bên dưới. Bạn cũng
                có thể tham khảo{' '}
                <a href="/mat-bang" className="text-primary underline underline-offset-4">
                  mặt bằng Bcons Central Park
                </a>{' '}
                để chọn loại căn phù hợp trước khi so sánh giá.
              </p>
              <p>
                Người mua thường so sánh Bcons Tam Hiệp giá với các dự án cùng khu vực; khi đối
                chiếu, nên xét cùng lúc mặt bằng (diện tích tim tường hay thông thuỷ),{' '}
                <a href="/#phap-ly" className="text-primary underline underline-offset-4">
                  pháp lý
                </a>{' '}
                và{' '}
                <a href="/#tien-do" className="text-primary underline underline-offset-4">
                  tiến độ xây dựng
                </a>{' '}
                — ba yếu tố quyết định giá trị thực của mức giá được chào.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/50 py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <SectionHeading eyebrow="Giá bán" title="Giá bán dự kiến từ 2,0 tỷ đồng" />

          <Reveal delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card">
              <table className="w-full text-left">
                <caption className="sr-only">
                  Bảng giá bán dự kiến Bcons Central Park Tam Hiệp theo loại căn hộ
                </caption>
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th scope="col" className="px-6 py-4 text-xs font-semibold tracking-[0.16em] uppercase">
                      Loại căn hộ
                    </th>
                    <th scope="col" className="px-6 py-4 text-xs font-semibold tracking-[0.16em] uppercase">
                      Diện tích
                    </th>
                    <th scope="col" className="px-6 py-4 text-right text-xs font-semibold tracking-[0.16em] uppercase">
                      Giá dự kiến
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

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-pretty text-muted-foreground">
              Mức giá chỉ mang tính tham khảo và có thể thay đổi theo chính sách, tầng, hướng view và
              thời điểm công bố chính thức từ chủ đầu tư.
            </p>

            <a
              href="#dang-ky"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02]"
            >
              Nhận bảng giá mới nhất
            </a>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-16 border-t border-border pt-12">
              <h2 className="font-serif text-2xl text-foreground md:text-3xl">
                Phương thức thanh toán
              </h2>
              <ul className="mt-8 grid gap-4 md:grid-cols-2">
                {payments.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed text-foreground/85"
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="size-3 text-primary" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-pretty text-muted-foreground">
                Chính sách thanh toán và ưu đãi trên mang tính tham khảo giai đoạn giới thiệu dự án,
                sẽ được cập nhật theo công bố chính thức từ chủ đầu tư và ngân hàng đối tác.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
