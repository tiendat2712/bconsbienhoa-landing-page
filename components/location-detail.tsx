import { ArrowRight, Check, ChevronRight, ExternalLink, TriangleAlert } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const reasons = [
  'Khu dân cư hiện hữu lâu đời, sinh hoạt thuận tiện',
  'Tiếp cận nhanh chợ, siêu thị, bệnh viện, trường học',
  'Nằm giữa khu kinh doanh sầm uất của Biên Hòa',
  'Không phải chờ hạ tầng hình thành như khu vực mới quy hoạch',
]

const connections = [
  { time: '1 phút', place: 'Ra trục Phan Trung, kết nối Nguyễn Ái Quốc' },
  { time: '3 phút', place: 'Chợ Tam Hiệp, Vincom Plaza Biên Hòa' },
  { time: '5 phút', place: 'Bệnh viện Đa khoa Đồng Nai, BV Hoàn Mỹ' },
  { time: '7 phút', place: 'Trung tâm hành chính TP. Đồng Nai' },
  { time: '10 phút', place: 'KCN Amata, KCN Biên Hòa 2' },
  { time: '15 phút', place: 'Sân bay Biên Hòa, Lotte Mart' },
  { time: '30 phút', place: 'Sân bay quốc tế Long Thành (QL 51)' },
  { time: '45 phút', place: 'TP. Thủ Đức, TP.HCM qua Quốc lộ 1K' },
]

const regional = [
  'Kết nối nhanh đến Phạm Văn Đồng, Quốc lộ 1K hướng TP. Thủ Đức, TP.HCM',
  'Tiếp cận Quốc lộ 1A, Vành đai 3 đi các tỉnh thành lân cận',
  'Gần các khu công nghiệp lớn: KCN Amata, KCN Biên Hòa 2',
  'Thuận tiện di chuyển đến sân bay quốc tế Long Thành',
]

const mapQuery = '236+Phan+Trung,+Tam+Hiep,+Bien+Hoa,+Dong+Nai'

export function LocationDetail() {
  return (
    <>
      <section className="bg-background pt-28 pb-16 md:pt-36 lg:pb-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <nav aria-label="Đường dẫn" className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="transition-colors hover:text-primary">
              Trang chủ
            </a>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <span className="text-foreground">Vị trí</span>
          </nav>

          <Reveal>
            <h1 className="mt-6 font-serif text-3xl leading-tight text-balance text-foreground md:text-5xl">
              Vị trí dự án Bcons Central Park Tam Hiệp tại Phan Trung, Biên Hòa, Đồng Nai
            </h1>
            <div className="mt-8 flex flex-col gap-5 leading-relaxed text-pretty text-muted-foreground md:text-lg">
              <p>
                Vị trí dự án Bcons Central Park Tam Hiệp toạ lạc tại 236 Phan Trung, Phường Tam
                Hiệp, Thành phố Đồng Nai (khu vực TP. Biên Hòa cũ), ngay trục đường Phan Trung —
                một trong những tuyến phố quy tụ nhiều thương hiệu F&amp;B, mua sắm, tài chính và
                dịch vụ sầm uất bậc nhất khu vực. Chính mặt tiền này là lý do dự án được thị trường
                gọi là Bcons Phan Trung, bên cạnh tên Bcons Tam Hiệp theo tên phường.
              </p>
              <p>
                Khác với các dự án đô thị mới cần thời gian dài để hình thành dân cư, đây là vị trí
                nằm giữa khu dân cư hiện hữu, sinh hoạt thuận tiện gần như ngay khi bàn giao. Từ
                đây, cư dân kết nối nhanh tới Phạm Văn Đồng, Quốc lộ 1K hướng TP. Thủ Đức, TP.HCM,
                cũng như các khu công nghiệp lớn như Amata và Biên Hòa 2.
              </p>
              <p>
                Nếu bạn đang cân nhắc mức đầu tư, xem thêm{' '}
                <a href="/gia-ban" className="text-primary underline underline-offset-4">
                  giá bán Bcons Central Park
                </a>{' '}
                và{' '}
                <a href="/mat-bang" className="text-primary underline underline-offset-4">
                  mặt bằng căn hộ 43 – 86 m²
                </a>{' '}
                để hoàn thiện bức tranh về dự án trước khi quyết định.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/50 py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Vị trí"
            title="Vị trí Bcons Central Park trên bản đồ Biên Hòa, Đồng Nai"
            description="Bcons Central Park Tam Hiệp toạ lạc tại 236 Phan Trung, Phường Tam Hiệp, Thành phố Đồng Nai (khu vực TP. Biên Hòa cũ), ngay lõi trung tâm sầm uất của thành phố."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-border bg-card">
                <iframe
                  title="Bản đồ vị trí Bcons Central Park — 236 Phan Trung, Tam Hiệp, Đồng Nai"
                  src={`https://www.google.com/maps?q=${mapQuery}&hl=vi&z=15&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[22rem] w-full border-0 md:h-[26rem]"
                />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                236 Phan Trung, Phường Tam Hiệp, Thành phố Đồng Nai (khu vực TP. Biên Hòa cũ)
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-primary underline underline-offset-4"
              >
                Chỉ đường trên Google Maps
                <ExternalLink className="size-3.5" aria-hidden="true" />
              </a>
            </Reveal>

            <Reveal delay={0.12}>
              <h3 className="font-serif text-2xl text-foreground">Vì sao vị trí quan trọng?</h3>
              <ul className="mt-6 flex flex-col gap-4">
                {reasons.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/85">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="size-3 text-primary" />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 flex items-start gap-3 rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground">
                <TriangleAlert className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                Giao thông đường Phan Trung và khu Tam Hiệp có thể đông vào giờ cao điểm.
              </p>

              <a
                href="#dang-ky"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-xs font-semibold tracking-[0.14em] text-primary-foreground uppercase transition-all duration-300 hover:scale-[1.02]"
              >
                Đăng ký tham quan thực tế vị trí dự án
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-20 border-t border-border pt-14">
              <h2 className="font-serif text-2xl text-foreground md:text-3xl">
                Kết nối vùng Bcons Central Park
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-pretty text-muted-foreground">
                Bản đồ liên kết vùng cho thấy dự án nằm trên đường Phan Trung — trục nối tr��c tiếp
                hai đại lộ Nguyễn Ái Quốc và Phạm Văn Thuận, trong bán kính 15 phút tới sân bay
                Biên Hòa, các khu công nghiệp Amata, Biên Hòa, Agtex Long Bình và hướng tuyến Metro
                Bến Thành – Suối Tiên – Đồng Nai. Vùng bán kính này cũng bao trọn hệ{' '}
                <a href="/tien-ich" className="text-primary underline underline-offset-4">
                  tiện ích Bcons Central Park Tam Hiệp
                </a>{' '}
                cả nội khu lẫn ngoại khu.
              </p>

              <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card">
                <img
                  src="/images/location-map.jpg"
                  alt="Bản đồ liên kết vùng Bcons Central Park Tam Hiệp với các trục giao thông, khu công nghiệp và sân bay"
                  className="w-full"
                />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-pretty text-muted-foreground">
                Bản đồ liên kết vùng Bcons Central Park Tam Hiệp (Bcons Phan Trung, Bcons Biên Hòa)
                — nguồn: chủ đầu tư. Một số hạ tầng trên bản đồ đang ở giai đoạn quy hoạch.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {regional.map((item) => (
                  <p
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed text-foreground/85"
                  >
                    <ArrowRight className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-20 border-t border-border pt-14">
              <h2 className="font-serif text-2xl text-foreground md:text-3xl">
                Thời gian di chuyển từ dự án
              </h2>
              <ul className="mt-8 grid gap-x-10 md:grid-cols-2">
                {connections.map((item) => (
                  <li
                    key={item.place}
                    className="group flex items-baseline gap-6 border-b border-border py-5"
                  >
                    <span className="w-20 shrink-0 font-serif text-xl text-primary">
                      {item.time}
                    </span>
                    <span className="leading-relaxed text-foreground/85 transition-transform duration-300 group-hover:translate-x-1">
                      {item.place}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-pretty text-muted-foreground">
                Thời gian di chuyển mang tính tham khảo, đo trong điều kiện giao thông bình thường
                và có thể thay đổi vào giờ cao điểm.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
