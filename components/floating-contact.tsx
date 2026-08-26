import { MessageCircle, Phone, Send } from 'lucide-react'

const actions = [
  { icon: MessageCircle, label: 'Nhắn tin Facebook', href: '#dang-ky' },
  { icon: Send, label: 'Chat Zalo', href: '#dang-ky' },
  { icon: Phone, label: 'Gọi hotline 0938 000 111', href: 'tel:0938000111' },
]

export function FloatingContact() {
  return (
    <div className="fixed right-4 bottom-6 z-40 flex flex-col gap-3">
      {actions.map((action) => (
        <a
          key={action.label}
          href={action.href}
          aria-label={action.label}
          className="group flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_16px_36px_-14px_rgba(15,56,44,0.8)] transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-accent-foreground"
        >
          <action.icon className="size-5" />
        </a>
      ))}
    </div>
  )
}
