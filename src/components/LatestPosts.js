'use client'

import Image from 'next/image'
import Link from 'next/link'
import SectionHeading from './SectionHeading'
import { posts } from '../data/blogData'

export default function LatestPosts() {
    const latestSix = posts.slice(0, 6)

    return (
        <section className="w-full lg:mt-32 mt-0">
            <div className="py-8">
                <div className='container mx-auto px-4'>
                    <SectionHeading number="02" title="Latest Posts" titleColor='#000000' lineBgColor='#000000' />
                </div>

                {/* GRID – NO GAP */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3">
                    {latestSix.map((item) => (
                        <Link
                            key={item.id}
                            href={`/blog/${item.slug}`}
                            className="relative group h-[500px] overflow-hidden"
                        >
                            {/* Image */}
                            {item.img ? (
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            ) : (
                                <div className={`absolute inset-0 ${item.gradient}`} />
                            )}

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />

                            {/* Content inside image */}
                            <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                                <span className="text-md uppercase font-bold tracking-wider text-[#01a2bb]">
                                    {item.category}
                                </span>

                                <h3 className="mt-2 text-2xl font-bold leading-snug text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-base text-slate-300 line-clamp-2">
                                    {item.excerpt}
                                </p>

                                <span className="mt-3 text-sm text-slate-400">
                                    {formatDate(item.date)}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex justify-center">
                <a
                    href="/blog"
                    className="inline-block px-6 py-3 border text-black border-slate-800 text-sm hover:bg-[#01a2bb] hover:text-white transition-colors"
                >
                    Read More
                </a>
            </div>
        </section>
    )
}

function formatDate(d) {
    try {
        return new Date(d).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        })
    } catch {
        return d
    }
}
