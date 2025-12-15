'use client'
import React from 'react'

/**
 * SectionHeading
 * Props:
 *  - number: string | number
 *  - title: string
 *  - titleColor: string        (optional, defaults to currentColor)
 *  - className: string
 */
export default function SectionHeading({
    number = '01',
    title = '',
    titleColor = '#FFFFFF',
    lineBgColor='#FFFFFF',
    className = '',
}) {
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

                <h2
                    className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold leading-tight"
                    style={{ color: titleColor }}
                >
                    {title}
                </h2>
            </div>

            <div className="flex-1">
                <span
                    className="block h-px lg:w-[30%] w-full"
                    style={{ backgroundColor: lineBgColor }}
                    aria-hidden
                />
            </div>
        </div>
    )
}
