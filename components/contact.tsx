'use client'

import { useState } from 'react'
import { ArrowRight, Check, Mail, MapPin, Phone } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section
      id="dang-ky"
      className="relative isolate scroll-mt-24 overflow-hidden bg-primary py-20 text-primary-foreground lg:py-28"
    >
      <div
        className="absolute inset-0 -z-10 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-towers.png')" }}
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Đăng ký tư vấn
          </p>
          <h2 className="mt-5 font-serif text-3xl leading-tight text-balance md:text-4xl lg:text-[2.75rem]">
            Nhận bảng giá, mặt bằng và chính sách mới nhất
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-pretty text-primary-foreground/75">
            Chuyên viên dự án sẽ gửi trực tiếp giỏ hàng còn lại, phương án thanh toán phù hợp với
            dòng tiền của bạn và sắp xếp lịch tham quan nhà mẫu.
          </p>

          <div className="mt-10 flex flex-col gap-5">
            {[
              { icon: Phone, label: 'Hotline', value: '0938 000 111' },
              { icon: Mail, label: 'Email', value: 'sales@bconscentralpark.vn' },
              { icon: MapPin, label: 'Nhà mẫu', value: '236 Phan Trung, P. Tam Hiệp, Biên Hòa' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-primary-foreground/25 bg-primary-foreground/10">
                  <item.icon className="size-4 text-accent" />
                </span>
                <span>
                  <span className="block text-[0.7rem] tracking-[0.16em] text-primary-foreground/55 uppercase">
                    {item.label}
                  </span>
                  <span className="block text-sm font-medium">{item.value}</span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <form
            className="rounded-3xl border border-border bg-card p-7 text-foreground md:p-9"
            onSubmit={(event) => {
              event.preventDefault()
              setSent(true)
            }}
          >
            <div className="grid gap-5">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  Họ và tên
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Nguyễn Văn A"
                  className="h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/15"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="tel" className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                    Số điện thoại
                  </label>
                  <input
                    id="tel"
                    name="tel"
                    type="tel"
                    required
                    inputMode="tel"
                    placeholder="09xx xxx xxx"
                    className="h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/15"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="type" className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                    Loại căn quan tâm
                  </label>
                  <select
                    id="type"
                    name="type"
                    defaultValue="2pn"
                    className="h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/15"
                  >
                    <option value="1pn">1 phòng ngủ</option>
                    <option value="2pn">2 phòng ngủ</option>
                    <option value="3pn">3 phòng ngủ</option>
                    <option value="shop">Shophouse</option>
                  </select>
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="note" className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  Ghi chú
                </label>
                <textarea
                  id="note"
                  name="note"
                  rows={4}
                  placeholder="Tôi muốn xem giỏ hàng tầng trung, hướng công viên..."
                  className="rounded-xl border border-border bg-background px-4 py-3 text-sm leading-relaxed outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/15"
                />
              </div>
              <button
                type="submit"
                className="group flex h-13 items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_18px_40px_-14px_rgba(15,56,44,0.9)]"
              >
                {sent ? (
                  <>
                    <Check className="size-4" />
                    Cảm ơn bạn, chúng tôi sẽ liên hệ ngay
                  </>
                ) : (
                  <>
                    Gửi thông tin
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
