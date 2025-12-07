'use client'
import { useMemo } from 'react'
import PostCard from './PostCard'
import { posts } from '../data/blogData'
import SectionHeading from './SectionHeading'

export default function LatestPosts() {
    const [left, right] = useMemo(() => {
        const L = [], R = []
        posts.forEach((p, i) => (i % 2 === 0 ? L : R).push(p))
        return [L, R]
    }, [])

    return (
        <section className="w-full mt-32 text-slate-100">
            <div className="py-8">
                <SectionHeading number="02" title="Latetst Posts" />
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-8">
                        {left.map((item) => (
                            <PostCard key={item.id} item={item} />
                        ))}
                    </div>

                    <div className="space-y-8">
                        {right.map((item) => (
                            <PostCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-10 flex justify-center items-center">
                <a
                    href="/contact"
                    className="inline-block px-6 py-3 border border-slate-800 text-sm hover:bg-[#01a2bb] transition-colors"
                >
                    Read More
                </a>
            </div>
        </section>
    )
}
