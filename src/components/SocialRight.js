// components/SocialRight.jsx
'use client'
import Link from 'next/link'

export default function SocialRight() {
    const email = 'info@abiolaoyetunde.com'
    return (
        <div className="fixed right-6 bottom-6 z-50 lg:flex flex-col items-center hidden">
            <a
                href={`mailto:${email}`}
                aria-label={`Email ${email}`}
                className="mb-4 block group"
            >
                <span
                    className="block text-sm font-medium select-all text-[#01a2bb] transition-colors group-hover:text-[#01a2bb]"
                    style={{
                        writingMode: 'vertical-rl',
                        textOrientation: 'mixed',
                        lineHeight: 1.2,
                    }}
                >
                    info@abiolaoyetunde.com
                </span>
            </a>
            <div className="w-px h-48 bg-slate-600/50" />
        </div>
    )
}
