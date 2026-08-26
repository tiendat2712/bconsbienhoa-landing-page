import { ArrowUpRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const posts = [
  {
    tag: 'Thị trường',
    date: '12/08/2026',
    title: 'Biên Hòa hưởng lợi gì khi sân bay Long Thành vận hành?',
    image: '/images/aerial-location.png',
  },
  {
    tag: 'Dự án',
    date: '02/08/2026',
    title: 'Cập nhật tiến độ thi công block A – B tháng 8',
    image: '/images/hero-towers.png',
  },
  {
    tag: 'Kinh nghiệm',
    date: '21/07/2026',
    title: 'Mua căn hộ trả chậm 1%/tháng: cần lưu ý điều gì?',
    image: '/images/interior-living.png',
  },
]

export function News() {
  return (
    <section id="tin-tuc" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Tin tức"
          title="Thông tin mới nhất về dự án và khu vực"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.title} delay={0.06 * index}>
              <a
                href="#tin-tuc"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-34px_rgba(15,56,44,0.5)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={post.image || '/placeholder.svg'}
                    alt={post.title}
                    className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="rounded-full bg-secondary px-3 py-1 font-semibold text-primary">
                      {post.tag}
                    </span>
                    <time>{post.date}</time>
                  </div>
                  <h3 className="mt-4 font-serif text-xl leading-snug text-balance text-foreground">
                    {post.title}
                  </h3>
                  <span className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-semibold text-primary">
                    Đọc tiếp
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
