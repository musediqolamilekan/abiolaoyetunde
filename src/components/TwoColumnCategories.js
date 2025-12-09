'use client'
import Link from 'next/link'
import Image from 'next/image'
import PostCard from './PostCard'
import { posts } from '../data/blogData'

export default function TwoColumnCategories() {
    const lifestyle = posts.filter((p) => p.category === 'lifestyle')
    const entertainment = posts.filter((p) => p.category === 'entertainment')

    const leftMain = lifestyle[0] ?? null
    const leftSmall = lifestyle.slice(1, 3)

    const rightMain = entertainment[0] ?? null
    const rightSmall = entertainment.slice(1, 3)

    return (
        <section className="text-slate-100">
            <div className="grid md:grid-cols-2 gap-10">
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-heading font-semibold">Lifestyle &amp; Real Talk</h3>
                        <Link href="/blog/category/lifestyle" className="text-sm text-slate-400 hover:text-[#01a2bb]">
                            View All →
                        </Link>
                    </div>
                    {leftMain && (
                        <div className="mb-6">
                            <PostCard item={leftMain} />
                        </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {leftSmall.map((p) => (
                            <SmallCard key={p.id} item={p} />
                        ))}
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-heading font-semibold">Entertainment & Pop Culture</h3>
                        <Link href="/blog/category/entertainment" className="text-sm text-slate-400 hover:text-[#01a2bb]">
                            View All →
                        </Link>
                    </div>

                    {rightMain && (
                        <div className="mb-6">
                            <PostCard item={rightMain} />
                        </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {rightSmall.map((p) => (
                            <SmallCard key={p.id} item={p} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

/**
 * SmallCard
 * compact card variant used below featured PostCard.
 * - smaller image thumbnail on the left for wide screens
 * - stacked on small screens
 */
function SmallCard({ item }) {
    return (
        <Link
            href={`/blog/${item.slug}`}
            className="group flex items-start gap-4 rounded-lg overflow-hidden hover:bg-slate-800 p-2 transition-colors"
        >
            <div className="relative shrink-0 h-28 w-36 rounded-md overflow-hidden bg-slate-800">
                {item.img ? (
                    <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    />
                ) : (
                    <div className={`absolute inset-0 ${item.gradient}`} />
                )}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
            </div>

            <div className="flex-1">
                <div className="text-xs text-[#01a2bb] font-semibold">{findCategoryTitle(item.category)}</div>
                <h4 className="mt-1 text-sm font-semibold text-slate-100 group-hover:text-[#01a2bb]">
                    {item.title}
                </h4>
                <div className="mt-2 text-xs text-slate-400">{formatDate(item.date)}</div>
            </div>
        </Link>
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
