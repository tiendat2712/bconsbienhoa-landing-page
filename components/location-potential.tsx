import { Reveal, SectionHeading } from '@/components/reveal'

const factors = [
  {
    no: '01',
    title: 'Toạ độ "kẹp giữa" hai đại lộ thương mại sầm uất',
    desc: 'Bcons Central Park nằm trên đường Phan Trung — trục đóng vai trò cầu nối trực tiếp giữa hai tuyến huyết mạch có giá trị thương mại cao nhất khu vực: Nguyễn Ái Quốc và Phạm Văn Thuận.',
    cards: [
      {
        title: 'Lưu lượng giao thương lớn',
        body: 'Thông thương dễ dàng ra hai đại lộ này giúp cư dân Bcons Tam Hiệp tiếp cận luồng giao thông chính của toàn thành phố. Bất động sản nằm trên các trục xương cá nối hai đại lộ lớn thường có biên độ tăng giá ổn định, nhờ hưởng lợi từ hoạt động kinh doanh, dịch vụ dày đặc bám dọc hai bên đường.',
      },
      {
        title: 'Tính thanh khoản cao',
        body: 'Vị trí Bcons Phan Trung đáp ứng tiêu chí "nhất cận thị, nhị cận giang, tam cận lộ". Nhu cầu mua để ở hoặc thuê căn hộ, mặt bằng tại khu lõi giữa hai tuyến đường này thường vượt nguồn cung — yếu tố hỗ trợ thanh khoản cho nhà đầu tư.',
      },
    ],
    links: [
      { label: 'giá bán Bcons Central Park Tam Hiệp', href: '/gia-ban' },
      { label: 'tiện ích nội khu dự án', href: '/#tien-ich' },
    ],
  },
  {
    no: '02',
    title: 'Đòn bẩy từ tuyến Metro Bến Thành – Suối Tiên – Đồng Nai',
    desc: 'Trên bản đồ liên kết vùng, góc dưới bên phải thể hiện định hướng quy hoạch kéo dài tuyến Metro Bến Thành – Suối Tiên về phía Đồng Nai. Đây là hạng mục hạ tầng đang ở giai đoạn định hướng, chưa triển khai.',
    cards: [
      {
        title: 'Giá trị bất động sản TOD',
        body: 'Tại nhiều đô thị đã vận hành đường sắt đô thị, bất động sản trong bán kính tiếp cận nhà ga thường được định giá cao hơn mặt bằng chung khu vực. Nếu tuyến kéo dài về Đồng Nai được triển khai, các dự án trung tâm như Bcons Central Park Biên Hòa nằm trong nhóm hưởng lợi.',
      },
      {
        title: 'Rút ngắn khoảng cách TP.HCM – Đồng Nai',
        body: 'Khi đi vào vận hành, tuyến Metro sẽ rút ngắn đáng kể thời gian di chuyển từ Đồng Nai vào trung tâm TP.HCM, tạo điều kiện cho làn sóng dịch chuyển dân cư ra vùng ven để có không gian sống rộng rãi hơn.',
      },
    ],
    links: [
      { label: 'tiến độ xây dựng Bcons Central Park', href: '/#tien-do' },
      { label: 'pháp lý dự án', href: '/#phap-ly' },
    ],
  },
  {
    no: '03',
    title: 'Hưởng lợi từ định hướng "Thành phố Sân bay"',
    desc: 'Bản đồ cho thấy dự án kết nối thuận lợi với cả hai sân bay của khu vực.',
    cards: [
      {
        title: 'Sân bay Biên Hòa',
        body: 'Nằm ở phía Tây Bắc dự án, kết nối qua Nguyễn Ái Quốc. Định hướng khai thác lưỡng dụng (quân sự và dân dụng) của sân bay Biên Hòa được kỳ vọng thúc đẩy kinh tế khu vực ngay sát Bcons Tam Hiệp.',
      },
      {
        title: 'Sân bay quốc tế Long Thành',
        body: 'Thông qua QL 1A và QL 51, cư dân dễ dàng tiếp cận sân bay Long Thành. Sự hình thành sân bay quốc tế kéo theo lượng lớn chuyên gia, kỹ sư và nhân sự cấp cao về làm việc — nhóm khách hàng mà vị trí trung tâm cùng tiện ích của dự án phù hợp để phục vụ.',
      },
    ],
    links: [
      { label: 'tiện ích Bcons Central Park Tam Hiệp', href: '/#tien-ich' },
      { label: 'mặt bằng Bcons Central Park', href: '/mat-bang' },
    ],
  },
  {
    no: '04',
    title: 'Nằm giữa vòng vây "thủ phủ công nghiệp"',
    desc: 'Qua các trục Phạm Văn Thuận và QL 1A, Bcons Central Park Tam Hiệp nằm gần các khu công nghiệp quy mô lớn: KCN Amata, KCN Biên Hòa và KCN Agtex Long Bình.',
    cards: [
      {
        title: 'Tiềm năng khai thác cho thuê',
        body: 'Chuyên gia nước ngoài và kỹ sư cấp cao làm việc tại các KCN này thường đòi hỏi tiêu chuẩn sống khắt khe: an ninh, gần trung tâm, tiện ích y tế và thương mại liền kề. Vị trí lõi trung tâm của Bcons Phan Trung đáp ứng đúng nhóm nhu cầu này, mở ra phương án đầu tư khai thác dòng tiền cho thuê.',
      },
    ],
    links: [
      { label: 'giá bán Bcons Central Park', href: '/gia-ban' },
      { label: 'nhà mẫu dự án', href: '/#nha-mau' },
    ],
  },
]

export function LocationPotential() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Tiềm năng vị trí"
          title="Đánh giá vị trí Bcons Central Park: 4 yếu tố tạo dư địa tăng giá"
          description="Vị trí Bcons Central Park Phan Trung được đánh giá cao nhờ bốn yếu tố dưới đây — từ lợi thế hiện hữu của trục Phan Trung đến các hạ tầng đang quy hoạch quanh Bcons Tam Hiệp."
        />

        <div className="mt-12 flex flex-col">
          {factors.map((factor, index) => (
            <Reveal key={factor.no} delay={index * 0.05}>
              <article className="grid gap-6 border-t border-border py-12 md:grid-cols-[5rem_1fr] md:gap-10">
                <span
                  aria-hidden="true"
                  className="font-serif text-4xl leading-none text-accent/70 md:text-5xl"
                >
                  {factor.no}
                </span>
                <div>
                  <h3 className="font-serif text-xl leading-snug text-balance text-foreground md:text-2xl">
                    {factor.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-pretty text-muted-foreground">
                    {factor.desc}
                  </p>

                  <div className="mt-8 grid gap-5 md:grid-cols-2">
                    {factor.cards.map((card) => (
                      <div
                        key={card.title}
                        className="rounded-2xl border border-border bg-secondary/40 p-6"
                      >
                        <h4 className="font-serif text-lg text-foreground">{card.title}</h4>
                        <p className="mt-3 text-sm leading-relaxed text-pretty text-muted-foreground">
                          {card.body}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Tìm hiểu thêm:</span>
                    {factor.links.map((item, linkIndex) => (
                      <span key={item.href} className="flex items-center gap-3">
                        {linkIndex > 0 ? <span aria-hidden="true">·</span> : null}
                        <a href={item.href} className="text-primary underline underline-offset-4">
                          {item.label}
                        </a>
                      </span>
                    ))}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 rounded-3xl border border-border bg-secondary/40 p-8 md:p-10">
            <h3 className="font-serif text-xl text-foreground md:text-2xl">Tổng kết</h3>
            <p className="mt-4 leading-relaxed text-pretty text-muted-foreground md:text-lg">
              Tiềm năng tăng giá của Bcons Central Park không chỉ đến từ sự khan hiếm quỹ đất trung
              tâm hiện hữu, mà còn gắn với các hạ tầng tương lai (Metro, sân bay) và nhu cầu nhà ở
              thực tế từ các khu công nghiệp lân cận. Với người mua ở thực lẫn nhà đầu tư, đây là
              yếu tố nên cân nhắc cùng tiến độ bàn giao Quý II/2029.
            </p>
            <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Kiểm tra tiếp:</span>
              <a href="/#tien-do" className="text-primary underline underline-offset-4">
                tiến độ bàn giao dự án
              </a>
              <span aria-hidden="true">·</span>
              <a href="/#phap-ly" className="text-primary underline underline-offset-4">
                pháp lý Bcons Tam Hiệp
              </a>
            </p>
          </div>

          <p className="mt-8 max-w-3xl rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed text-pretty text-muted-foreground">
            Các hạng mục hạ tầng nêu trên (tuyến Metro kéo dài về Đồng Nai, khai thác lưỡng dụng sân
            bay Biên Hòa, sân bay quốc tế Long Thành) đang ở các giai đoạn quy hoạch và triển khai
            khác nhau, có thể thay đổi về tiến độ hoặc phương án. Nhận định về khả năng tăng giá mang
            tính tham khảo, không phải cam kết lợi nhuận.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
