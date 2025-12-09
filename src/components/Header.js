'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [open])

    const navItems = [
        { id: '01', label: 'About', href: '#about' },
        { id: '02', label: 'Blog', href: '/blog' },
        { id: '03', label: 'Contact', href: '/contact' },
        { id: '04', label: 'Resume', href: '/resume.pdf' },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
            <div
                className={`pointer-events-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 transition-all duration-300 mx-4 ${scrolled ? 'bg-transparent backdrop-blur-2xl text-white' : 'bg-[#0a0a0a] text-white'
                    }`}
            >
                <div className="flex items-center gap-3">
                    <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${scrolled ? 'bg-black' : 'bg-white'
                            }`}
                        aria-hidden
                    />
                    <span className="font-bold tracking-tight">Abiola</span>
                </div>
                <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
                    {navItems.map((n) => (
                        <Link
                            key={n.id}
                            href={n.href}
                            className={`flex items-center gap-2 text-sm font-medium transition ${scrolled ? 'text-slate-200 hover:text-white' : 'text-slate-100 hover:text-white'
                                }`}
                        >
                            <span className="text-[#01a2bb] font-semibold">{n.id}.</span>
                            <span>{n.label}</span>
                        </Link>
                    ))}
                </nav>
                <div className="md:hidden flex items-center gap-3">
                    <button
                        onClick={() => setOpen(true)}
                        aria-label="Open menu"
                        className="relative inline-flex items-center justify-center w-10 h-10 rounded border border-dashed border-slate-400 bg-transparent text-slate-200"
                    >
                        {/* hamburger */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M3 7h18M3 12h18M3 17h18" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
            <div
                className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setOpen(false)}
                aria-hidden
            />
            <aside
                className={`fixed top-0 left-0 h-full w-[92vw] max-w-[360px] z-50 transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'
                    }`}
                role="dialog"
                aria-modal="true"
            >
                <div className="h-full bg-[#0a0a0a] text-white flex flex-col">
                    <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800">
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-white/10" />
                            <span className="font-semibold">Abiola</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setOpen(false)}
                                aria-label="Close menu"
                                className="w-10 h-10 inline-flex items-center justify-center rounded border border-dashed border-slate-700 text-slate-200"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <nav className="p-6 overflow-auto">
                        <ul className="space-y-6">
                            {navItems.map((n) => (
                                <li key={n.id}>
                                    <Link
                                        href={n.href}
                                        onClick={() => setOpen(false)}
                                        className="flex items-center gap-3 px-2 py-3 rounded hover:bg-white/5 transition"
                                    >
                                        <span className="text-[#01a2bb] font-semibold">{n.id}.</span>
                                        <span className="text-lg font-medium">{n.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="mt-auto p-6 border-t border-slate-800">
                        <a href="mailto:abiolaoyetunde@gmail.com" className="text-sm text-slate-300 hover:text-white">
                            abiolaoyetunde@gmail.com
                        </a>
                    </div>
                </div>
            </aside>
        </header>
    )
}
