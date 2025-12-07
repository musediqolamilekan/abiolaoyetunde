'use client'
import {
  FaXTwitter,
  FaLinkedin,
  FaUpwork,
  FaInstagram,
} from 'react-icons/fa6'

export default function SocialLeft() {
  const items = [
    { href: 'https://upwork.com', label: 'GitHub', Icon: FaUpwork },
    { href: 'https://instagram.com/yourusername', label: 'Instagram', Icon: FaInstagram },
    { href: 'https://twitter.com/yourusername', label: 'Twitter', Icon: FaXTwitter },
    { href: 'https://linkedin.com/in/olamilekan-musediq-a2b10b234', label: 'LinkedIn', Icon: FaLinkedin },
  ]

  return (
    <div className="fixed left-6 bottom-6 z-50 lg:flex flex-col items-center hidden">
      <ul className="flex flex-col gap-4 mb-4">
        {items.map(({ href, label, Icon }) => (
          <li key={label} className="flex justify-center">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-md bg-black/60 text-slate-200 hover:bg-[#01a2bb] hover:text-black transition"
            >
              <Icon size={18} />
            </a>
          </li>
        ))}
      </ul>
      <div className="w-px h-48 bg-slate-500/50"></div>
    </div>
  )
}
