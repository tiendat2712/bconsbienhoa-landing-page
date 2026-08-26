import {
  Baby,
  Dumbbell,
  Flower2,
  ParkingCircle,
  ShoppingBag,
  Sparkles,
  Users,
  Waves,
} from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const amenities = [
  { icon: Waves, title: 'Hồ bơi tràn bờ', desc: 'Hồ bơi resort với khu tắm nắng riêng biệt.' },
  { icon: Flower2, title: 'Công viên nội khu', desc: 'Hơn 10.000 m² cảnh quan và đường chạy bộ.' },
  { icon: Dumbbell, title: 'Gym & yoga', desc: 'Phòng tập trang bị máy móc hiện đại.' },
  { icon: Baby, title: 'Khu trẻ em', desc: 'Sân chơi và nhà trẻ ngay trong khuôn viên.' },
  { icon: ShoppingBag, title: 'Shophouse khối đế', desc: 'Trung tâm thương mại, cửa hàng tiện lợi.' },
  { icon: Users, title: 'Sinh hoạt cộng đồng', desc: 'Sảnh sự kiện và BBQ ngoài trời.' },
  { icon: ParkingCircle, title: 'Hầm đỗ xe', desc: 'Hai tầng hầm, đủ chỗ cho toàn khu.' },
  { icon: Sparkles, title: 'An ninh 24/7', desc: 'Camera toàn khu và thẻ từ thang máy.' },
]

export function Amenities() {
  return (
    <section id="tien-ich" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Tiện ích"
          title="Hơn 30 tiện ích nội khu cho một nhịp sống trọn vẹn"
          description="Mọi nhu cầu hằng ngày của gia đình đều nằm trong bán kính vài bước chân — từ thể thao, thư giãn đến mua sắm và giáo dục."
        />

        <Reveal delay={0.1} className="mt-12">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="/images/amenity-pool.png"
              alt="Hồ bơi và khu cảnh quan nội khu dự án"
              className="h-72 w-full object-cover md:h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
            <p className="absolute bottom-6 left-6 max-w-md font-serif text-2xl text-balance text-primary-foreground md:text-3xl">
              Không gian xanh là tiện ích xa xỉ nhất của một đô thị
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((item, index) => (
            <Reveal key={item.title} delay={0.04 * index}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/35 hover:shadow-[0_28px_60px_-34px_rgba(15,56,44,0.55)]">
                <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-serif text-lg text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
