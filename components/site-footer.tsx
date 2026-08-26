const columns = [
  {
    title: 'Dự án',
    links: [
      { label: 'Tổng quan', href: '#tong-quan' },
      { label: 'Vị trí', href: '#vi-tri' },
      { label: 'Tiện ích', href: '#tien-ich' },
      { label: 'Mặt bằng', href: '#mat-bang' },
    ],
  },
  {
    title: 'Thông tin',
    links: [
      { label: 'Giá bán', href: '#gia-ban' },
      { label: 'Pháp lý', href: '#phap-ly' },
      { label: 'Chủ đầu tư', href: '#chu-dau-tu' },
      { label: 'Tiến độ', href: '#tien-do' },
    ],
  },
  {
    title: 'Hỗ trợ',
    links: [
      { label: 'Nhà mẫu', href: '#nha-mau' },
      { label: 'Tin tức', href: '#tin-tuc' },
      { label: 'Đăng ký tư vấn', href: '#dang-ky' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,0.85fr)]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary font-serif text-lg text-primary-foreground">
                B
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg text-foreground">Bcons</span>
                <span className="text-[0.6rem] font-semibold tracking-[0.28em] text-muted-foreground uppercase">
                  Central Park
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Trang thông tin dự án Bcons Central Park Tam Hiệp (Bcons Tam Hiệp, Bcons Phan Trung,
              Bcons Biên Hòa) — 236 Phan Trung, phường Tam Hiệp, Biên Hòa, Đồng Nai.
            </p>
            <p className="mt-4 text-sm font-medium text-primary">Hotline: 0938 000 111</p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-semibold tracking-[0.18em] text-foreground uppercase">
                {column.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bcons Central Park. Thông tin mang tính tham khảo.</p>
          <p>Hình ảnh và giá bán có thể thay đổi theo công bố của chủ đầu tư.</p>
        </div>
      </div>
    </footer>
  )
}
