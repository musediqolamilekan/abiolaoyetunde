'use client'
import Link from 'next/link'
import Image from 'next/image'
import { posts as allPosts } from '../../data/blogData'
import TravelSection from '@/components/TravelSection'
import LatestTech from '@/components/LatestTech'
import Lifestyle from '@/components/Lifestyle'
import TwoColumnCategories from '@/components/TwoColumnCategories'
import BedTime from '@/components/BedTime'
import Creative from '@/components/Creative'

export default function BlogIndex() {
    // fallback in case not enough posts
    const featured = allPosts[0]
    const right = allPosts.slice(1, 4) // show up to 3 stacked items
    const headlines = allPosts.slice(4, 10) // next few for the headline strip

    return (
        <div className="text-slate-200">
            <section className="grid lg:grid-cols-2 gap-8">
                {/* Left: big featured */}
                {featured && (
                    <Link
                        href={`/blog/${featured.slug}`}
                        className="group relative block rounded-xl overflow-hidden shadow-lg"
                    >
                        <div className="relative h-96 md:h-[520px]">
                            {featured.img ? (
                                <Image
                                    src={featured.img}
                                    alt={featured.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                />
                            ) : (
                                <div className={`absolute inset-0 ${featured.gradient}`} />
                            )}

                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

                            <div className="absolute left-6 bottom-6 right-6">
                                <div className="flex items-center gap-3">
                                    <span className="inline-block bg-[#01a2bb] text-black text-xs font-semibold px-3 py-1 rounded">
                                        {findCategoryTitle(featured.category)}
                                    </span>
                                    <span className="text-xs text-slate-300">{formatDate(featured.date)}</span>
                                </div>

                                <h2 className="mt-4 text-3xl md:text-3xl lg:text-3xl font-semibold text-white leading-tight">
                                    {featured.title}
                                </h2>

                                {featured.excerpt && (
                                    <p className="mt-3 max-w-2xl text-slate-200/90">{featured.excerpt}</p>
                                )}
                            </div>
                        </div>
                    </Link>
                )}
                <div className="flex flex-col gap-6">
                    {right.map((p) => (
                        <Link
                            key={p.id}
                            href={`/blog/${p.slug}`}
                            className="group grid grid-cols-3 gap-4 items-center rounded-lg overflow-hidden"
                        >
                            <div className="relative col-span-1 h-36 w-full rounded-md overflow-hidden">
                                {p.img ? (
                                    <Image
                                        src={p.img}
                                        alt={p.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="object-cover transition-transform duration-400 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                    />
                                ) : (
                                    <div className={`absolute inset-0 ${p.gradient}`} />
                                )}
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                            </div>

                            <div className="col-span-2">
                                <div className="flex items-center gap-3">
                                    <span className="text-xs bg-slate-800/60 text-slate-200 px-2 py-1 rounded">
                                        {findCategoryTitle(p.category)}
                                    </span>
                                    <span className="text-xs text-slate-400">{formatDate(p.date)}</span>
                                </div>

                                <h3 className="mt-2 text-lg font-semibold text-slate-100 group-hover:text-[#01a2bb]">
                                    {p.title}
                                </h3>

                                {p.excerpt && <p className="mt-2 text-sm text-slate-400 line-clamp-2">{p.excerpt}</p>}
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            <div className="my-12 border-t border-slate-700/40" />
            <section className="py-4">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                    {headlines.length ? (
                        headlines.map((h) => (
                            <Link
                                key={h.id}
                                href={`/blog/${h.slug}`}
                                className="block text-slate-300 hover:text-white transition"
                            >
                                <div className="text-xs rounded mb-2">
                                    <span>Editor picks | </span>
                                    <span>{findCategoryTitle(h.category)}</span>
                                </div>
                                <div className="text-sm font-semibold">{h.title}</div>
                            </Link>
                        ))
                    ) : (
                        allPosts.slice(0, 6).map((h) => (
                            <Link
                                key={h.id}
                                href={`/blog/${h.slug}`}
                                className="block text-slate-300 hover:text-white transition"
                            >
                                <div className="text-xs rounded mb-2">
                                    <span>Editor picks | </span>
                                    <span>{findCategoryTitle(h.category)}</span>
                                </div>
                                <div className="text-sm font-semibold">{h.title}</div>
                            </Link>
                        ))
                    )}
                </div>
            </section>
            <div className="my-12 border-t border-slate-700/40" />
            <TravelSection />
            <div className="my-12 border-t border-slate-700/40" />
            <LatestTech />
            <div className="my-12 border-t border-slate-700/40" />
            <Lifestyle />
            <div className="my-12 border-t border-slate-700/40" />
            <TwoColumnCategories />
            <div className="my-12 border-t border-slate-700/40" />
            <BedTime />
            <div className="my-12 border-t border-slate-700/40" />
            <Creative />
        </div>
    )
}

// helpers
function findCategoryTitle(catId) {
    const map = {
        travel: 'Travel',
        lifestyle: 'Lifestyle',
        entertainment: 'Entertainment',
        bedtime: 'Bedtime Stories',
        creative: 'Creative',
        tech: 'Tech',
    }
    return map[catId] ?? catId
}

function formatDate(d) {
    try {
        const dt = new Date(d)
        return dt.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
    } catch {
        return d
    }
}
