'use client'
import {
  FaXTwitter,
  FaLinkedin,
  FaUpwork,
  FaInstagram,
} from 'react-icons/fa6'

export default function SocialLeft() {
  const items = [
    { href: 'https://www.upwork.com/freelancers/~0109f0ec7165fc87b3', label: 'Upwork', Icon: FaUpwork },
    { href: 'https://www.instagram.com/abiola_oyetunde?igsh=MTBwZXU0dWI1OTIzOA%3D%3D&utm_source=qr', label: 'Instagram', Icon: FaInstagram },
    { href: 'https://www.linkedin.com/in/oyetunde-abiola-17616647?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', label: 'LinkedIn', Icon: FaLinkedin },
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
              className="p-2 rounded-md bg-black text-slate-200 hover:bg-[#01a2bb] hover:text-black transition"
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
