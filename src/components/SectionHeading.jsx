// components/SectionHeading.jsx
'use client'
import React from 'react'

/**
 * SectionHeading
 * Props:
 *  - number: string | number  (e.g. "02")
 *  - title: string            (e.g. "Some things I've built")
 *  - className: string        (optional extra classes)
 *
 * Designed to match the reference: small colored number, large title, thin rule to the right.
 */
export default function SectionHeading({ number = '01', title = '', className = '' }) {
    return (
        <div className={`flex items-center gap-6 mb-10 ${className}`}>
            <div className="flex items-center gap-4">
                <span
                    className="inline-block text-sm font-medium"
                    style={{ color: '#01a2bb' }}
                    aria-hidden
                >
                    {String(number).padStart(2, '0')}.
                </span>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-slate-100 leading-tight">
                    {title}
                </h2>
            </div>

            <div className="flex-1">
                <span
                    className="block h-px bg-white lg:w-[30%] w-full"
                    aria-hidden
                />
            </div>
        </div>
    )
}
