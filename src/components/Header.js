'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [open])

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
    ]

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl bg-black/10' : ''
                }`}
        >
            <div className="relative container px-4 mx-auto">
                <div
                    className={`relative z-10 pointer-events-auto flex items-center justify-between py-7 bg-transparent transition-colors ${scrolled ? 'text-black' : 'text-white'
                        }`}
                >
                    <Link href="/" className="text-xl font-black tracking-wide">
                        ABIOLA
                    </Link>

                    <nav className="hidden md:flex items-center gap-10">
                        {navItems.map((item) => {
                            const isActive =
                                item.href === '/'
                                    ? pathname === '/'
                                    : pathname.startsWith(item.href)

                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`text-sm tracking-wide font-medium transition-colors ${scrolled
                                            ? isActive
                                                ? 'text-black'
                                                : 'text-gray-900 hover:text-black'
                                            : isActive
                                                ? 'text-white'
                                                : 'text-slate-300 hover:text-white'
                                        }`}
                                >
                                    <span
                                        className={`block py-2 transition-colors ${isActive
                                                ? scrolled
                                                    ? 'border-y border-black'
                                                    : 'border-y border-white'
                                                : ''
                                            }`}
                                    >
                                        {item.label.toUpperCase()}
                                    </span>
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Mobile button */}
                    <button
                        onClick={() => setOpen(true)}
                        aria-label="Open menu"
                        className={`md:hidden w-10 h-10 flex items-center justify-center border transition-colors ${scrolled ? 'border-black text-black' : 'border-neutral-600 text-white'
                            }`}
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <path d="M3 7h18M3 12h18M3 17h18" />
                        </svg>
                    </button>
                </div>

            </div>
            <div
                className={`fixed inset-0 bg-black transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setOpen(false)}
            />
            <aside
                className={`fixed top-0 left-0 h-screen w-[92vw] max-w-[360px] bg-black text-white z-1001 transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'
                    }`}
                role="dialog"
                aria-modal="true"
            >
                <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-800">
                    <span className="text-xl font-black">ABIOLA</span>
                    <button
                        onClick={() => setOpen(false)}
                        aria-label="Close menu"
                        className="w-10 h-10 flex items-center justify-center border border-neutral-700"
                    >
                        ✕
                    </button>
                </div>

                <nav className="px-6 py-4">
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center justify-between py-4 border-b border-dashed border-neutral-700"
                                >
                                    <span className="text-sm uppercase tracking-wide">
                                        {item.label}
                                    </span>
                                    <span className="text-neutral-400">+</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </header>
    )
}
