'use client'
import Link from 'next/link'
import Image from 'next/image'
import { posts } from '@/data/blogData'

export default function LatestTech() {
    const tech = posts.filter((p) => p.category === 'tech').slice(0, 2)

    if (tech.length === 0) return null

    return (
        <>
            <div className="flex items-start justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-heading font-semibold">Technology & Digital Life</h2>
                <Link href="/blog/category/tech" className="text-sm text-slate-400 hover:text-[#01a2bb]">
                    View All →
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tech.map((item) => (
                    <article key={item.id} className="group relative rounded-lg overflow-hidden">
                        <div className="relative w-full h-64 md:h-[420px]">
                            {item.img ? (
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    priority={false}
                                />
                            ) : (
                                <div className={`absolute inset-0 ${item.gradient}`} />
                            )}
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/40 group-hover:via-black/20 transition-colors" />
                            <div className="absolute left-6 bottom-6 right-6">
                                <div className="flex items-center gap-3">
                                    <span className="inline-block bg-[#01a2bb] text-black text-xs font-semibold px-3 py-1 rounded">
                                        Technology
                                    </span>
                                    <span className="text-xs text-slate-200/80">{formatDate(item.date)}</span>
                                </div>

                                <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-white leading-tight">
                                    <Link href={`/blog/${item.slug}`} className="inline-block">
                                        {item.title}
                                    </Link>
                                </h3>

                                {item.excerpt && (
                                    <p className="mt-3 max-w-xl text-slate-100/90 hidden md:block">{item.excerpt}</p>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </>
    )
}

function formatDate(d) {
    try {
        const dt = new Date(d)
        return dt.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
    } catch {
        return d
    }
}
