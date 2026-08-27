'use client'

import { ArrowRight, Check, ChevronRight, ExternalLink, TriangleAlert } from 'lucide-react'
import Link from 'next/link'
import { Reveal, SectionHeading } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function LocationDetail() {
  const { theme, locale, t } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  const reasons = isEn
    ? [
        'Established long-standing residential neighborhood with complete day-to-day conveniences',
        'Swift access to traditional markets, modern shopping malls, top hospitals, and schools',
        'Direct frontage on one of Bien Hoa’s premier commercial and retail streets',
        'No waiting for future amenities or urban infrastructure to materialize',
      ]
    : [
        'Khu dân cư hiện hữu lâu đời, sinh hoạt thuận tiện',
        'Tiếp cận nhanh chợ, siêu thị, bệnh viện, trường học',
        'Nằm giữa khu kinh doanh sầm uất của Biên Hòa',
        'Không phải chờ hạ tầng hình thành như khu vực mới quy hoạch',
      ]

  const connections = isEn
    ? [
        { time: '1 min', place: 'Direct access to Phan Trung, Nguyen Ai Quoc axis' },
        { time: '3 mins', place: 'Tam Hiep Market, Vincom Plaza Bien Hoa' },
        { time: '5 mins', place: 'Dong Nai General Hospital, Hoan My Hospital' },
        { time: '7 mins', place: 'Dong Nai City Administrative Center' },
        { time: '10 mins', place: 'Amata Industrial Park, Bien Hoa 2 IP' },
        { time: '15 mins', place: 'Bien Hoa Airport, Lotte Mart' },
        { time: '30 mins', place: 'Long Thanh Int. Airport (QL 51)' },
        { time: '45 mins', place: 'Thu Duc City, HCMC via QL 1K' },
      ]
    : [
        { time: '1 phút', place: 'Ra trục Phan Trung, kết nối Nguyễn Ái Quốc' },
        { time: '3 phút', place: 'Chợ Tam Hiệp, Vincom Plaza Biên Hòa' },
        { time: '5 phút', place: 'Bệnh viện Đa khoa Đồng Nai, BV Hoàn Mỹ' },
        { time: '7 phút', place: 'Trung tâm hành chính TP. Đồng Nai' },
        { time: '10 phút', place: 'KCN Amata, KCN Biên Hòa 2' },
        { time: '15 phút', place: 'Sân bay Biên Hòa, Lotte Mart' },
        { time: '30 phút', place: 'Sân bay quốc tế Long Thành (QL 51)' },
        { time: '45 phút', place: 'TP. Thủ Đức, TP.HCM qua Quốc lộ 1K' },
      ]

  const regional = isEn
    ? [
        'Swift connectivity to Pham Van Dong Blvd and National Route 1K toward Thu Duc City, HCMC',
        'Direct link to National Route 1A and Ring Road 3 connecting southeastern economic provinces',
        'Adjacent to major manufacturing hubs: Amata Industrial Park, Bien Hoa 2 Industrial Park',
        'Convenient expressway transit to Long Thanh International Airport',
      ]
    : [
        'Kết nối nhanh đến Phạm Văn Đồng, Quốc lộ 1K hướng TP. Thủ Đức, TP.HCM',
        'Tiếp cận Quốc lộ 1A, Vành đai 3 đi các tỉnh thành lân cận',
        'Gần các khu công nghiệp lớn: KCN Amata, KCN Biên Hòa 2',
        'Thuận tiện di chuyển đến sân bay quốc tế Long Thành',
      ]

  const mapQuery = '236+Phan+Trung,+Tam+Hiep,+Bien+Hoa,+Dong+Nai'

  return (
    <>
      <section className="bg-background pt-28 pb-16 md:pt-36 lg:pb-20 transition-colors">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <nav aria-label="Đường dẫn" className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className={`transition-colors ${isDark ? 'hover:text-[#e6c887]' : 'hover:text-primary'}`}>
              {t.nav.home}
            </Link>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <span className={isDark ? 'text-[#e6c887] font-semibold' : 'text-foreground'}>{t.nav.location}</span>
          </nav>

          <Reveal>
            <h1 className="mt-6 font-serif text-3xl leading-tight text-balance text-foreground md:text-5xl font-bold">
              {isEn
                ? 'Prime Location of Bcons Central Park Tam Hiep at 236 Phan Trung, Bien Hoa'
                : 'Vị trí dự án Bcons Central Park Tam Hiệp tại Phan Trung, Biên Hòa, Đồng Nai'}
            </h1>
            <div className="mt-8 flex flex-col gap-5 leading-relaxed text-pretty text-muted-foreground md:text-lg">
              {isEn ? (
                <>
                  <p>
                    Bcons Central Park is situated at 236 Phan Trung, Tam Hiep Ward, Dong Nai Province (formerly Bien Hoa City).
                    Phan Trung is renowned as one of the most vibrant commercial, dining, and financial avenues in the region.
                  </p>
                  <p>
                    Unlike new suburban developments that require years to populate, this property is situated right in the
                    beating heart of an established urban community with instant access to schools, hospitals, and transit.
                  </p>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/50 dark:bg-card/40 py-20 lg:py-24 transition-colors">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <SectionHeading
            eyebrow={t.location.eyebrow}
            title={isEn ? 'Location on Google Maps' : 'Vị trí Bcons Central Park trên bản đồ Biên Hòa, Đồng Nai'}
            description={t.location.address}
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <div className={`overflow-hidden rounded-3xl border shadow-xl ${isDark ? 'border-white/15 bg-card/80' : 'border-border bg-card'}`}>
                <iframe
                  title="Bản đồ vị trí Bcons Central Park"
                  src={`https://www.google.com/maps?q=${mapQuery}&hl=${isEn ? 'en' : 'vi'}&z=15&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[22rem] w-full border-0 md:h-[26rem]"
                />
                <div className="flex items-center justify-between p-4 text-xs text-muted-foreground border-t border-border dark:border-white/10">
                  <span>236 Phan Trung, Tam Hiệp, TP. Biên Hòa</span>
                  <a
                    href="https://maps.google.com/?q=236+Phan+Trung,+Tam+Hiep,+Bien+Hoa,+Dong+Nai"
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-1 font-bold ${isDark ? 'text-[#e6c887] hover:underline' : 'text-primary hover:underline'}`}
                  >
                    {isEn ? 'Google Maps directions' : 'Chỉ đường Google Maps'}
                    <ExternalLink className="size-3" />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-6">
                <div className={`rounded-3xl border p-6 md:p-8 ${isDark ? 'border-white/15 bg-card/80 shadow-xl' : 'border-border bg-card'}`}>
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    {isEn ? 'Core Advantages of 236 Phan Trung' : 'Lợi thế của vị trí 236 Phan Trung'}
                  </h3>
                  <ul className="mt-5 flex flex-col gap-3">
                    {reasons.map((r) => (
                      <li key={r} className="flex items-start gap-3 text-sm text-foreground/85">
                        <span className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${
                          isDark ? 'bg-[#e6c887]/20 text-[#e6c887]' : 'bg-primary/10 text-primary'
                        }`}>
                          <Check className="size-3 stroke-[3]" />
                        </span>
                        <span className="leading-relaxed">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`rounded-3xl border p-6 md:p-8 ${isDark ? 'border-white/15 bg-card/80 shadow-xl' : 'border-border bg-card'}`}>
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    {isEn ? 'Regional Connectivity' : 'Kết nối vùng thuận tiện'}
                  </h3>
                  <ul className="mt-5 flex flex-col gap-3">
                    {regional.map((r) => (
                      <li key={r} className="flex items-start gap-3 text-sm text-foreground/85">
                        <ArrowRight className={`mt-0.5 size-4 shrink-0 ${isDark ? 'text-[#e6c887]' : 'text-accent'}`} />
                        <span className="leading-relaxed">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Transit Times Table */}
      <section className="bg-background py-20 lg:py-24 transition-colors">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <SectionHeading
            eyebrow={t.location.eyebrow}
            title={isEn ? 'Transit Time to Key Destinations' : 'Thời gian di chuyển đến các điểm đến chính'}
          />

          <Reveal delay={0.1}>
            <div className={`mt-10 overflow-hidden rounded-3xl border shadow-xl ${isDark ? 'border-white/15 bg-card/80' : 'border-border bg-card'}`}>
              <table className="w-full text-left">
                <caption className="sr-only">
                  {isEn ? 'Transit times' : 'Bảng thời gian di chuyển từ Bcons Central Park'}
                </caption>
                <thead>
                  <tr
                    className={`transition-colors duration-500 ${
                      isDark
                        ? 'bg-gradient-to-r from-[#e6c887] via-[#f7e4b5] to-[#e6c887] text-[#072018]'
                        : 'bg-primary text-primary-foreground'
                    }`}
                  >
                    <th scope="col" className="px-6 py-4 text-xs font-bold tracking-[0.16em] uppercase">
                      {isEn ? 'Transit Time' : 'Thời gian'}
                    </th>
                    <th scope="col" className="px-6 py-4 text-xs font-bold tracking-[0.16em] uppercase">
                      {isEn ? 'Destination & Connectivity' : 'Điểm đến & Tuyến đường'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60 dark:divide-white/10 text-sm">
                  {connections.map((c) => (
                    <tr key={c.place} className="transition-colors hover:bg-secondary/30 dark:hover:bg-white/5">
                      <td className={`px-6 py-4.5 font-serif text-base font-bold whitespace-nowrap ${
                        isDark ? 'text-[#e6c887]' : 'text-primary'
                      }`}>
                        {c.time}
                      </td>
                      <td className="px-6 py-4.5 text-foreground/90">{c.place}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
