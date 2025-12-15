'use client'

import { useMemo, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { posts, categories } from '@/data/blogData'

const POSTS_PER_PAGE = 6

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState('all')
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState('')
    const [indicator, setIndicator] = useState({ left: 0, width: 0 })

    const recentPosts = posts.slice(0, 3)

    const filteredPosts = useMemo(() => {
        if (query.trim()) {
            const q = query.toLowerCase()
            return posts.filter(
                (p) =>
                    p.title.toLowerCase().includes(q) ||
                    p.excerpt.toLowerCase().includes(q)
            )
        }

        if (activeCategory === 'all') return posts
        return posts.filter((p) => p.category === activeCategory)
    }, [activeCategory, query])

    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)

    const visiblePosts = useMemo(() => {
        const start = (page - 1) * POSTS_PER_PAGE
        return filteredPosts.slice(start, start + POSTS_PER_PAGE)
    }, [filteredPosts, page])

    const allCategories = [{ id: 'all', title: 'All' }, ...categories]

    const handleCategoryClick = (id) => {
        setActiveCategory(id)
        setQuery('')
        setPage(1)
    }

    /* desktop indicator only */
    useEffect(() => {
        const el = document.querySelector(`[data-cat="${activeCategory}"]`)
        if (!el) return

        setIndicator({
            left: el.offsetLeft,
            width: el.offsetWidth,
        })
    }, [activeCategory])

    return (
        <section className="container mx-auto lg:px-6 px-4 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-14">

                {/* SIDEBAR — desktop only */}
                <aside className="hidden lg:block space-y-14">
                    <Search query={query} setQuery={setQuery} setPage={setPage} />
                    <RecentPosts posts={recentPosts} />
                </aside>

                {/* MAIN */}
                <main>
                    {/* CATEGORY FILTER */}
                    <div className="relative mb-14">
                        <div className="flex flex-wrap justify-center lg:justify-start lg:gap-6 gap-2 text-sm font-medium uppercase tracking-wide">
                            {allCategories.map((cat) => {
                                const active = activeCategory === cat.id

                                return (
                                    <button
                                        key={cat.id}
                                        data-cat={cat.id}
                                        onClick={() => handleCategoryClick(cat.id)}
                                        className={`px-2 py-2 text-base text-black transition ${active
                                                ? 'border-y border-black'
                                                : 'hover:underline'
                                            }`}
                                    >
                                        {cat.title}
                                    </button>
                                )
                            })}
                        </div>

                        {/* DESKTOP animated indicator */}
                        <span
                            className="hidden lg:block absolute top-0 h-px bg-black transition-all duration-300"
                            style={{
                                width: indicator.width,
                                transform: `translateX(${indicator.left}px)`,
                            }}
                        />
                        <span
                            className="hidden lg:block absolute bottom-0 h-px bg-black transition-all duration-300"
                            style={{
                                width: indicator.width,
                                transform: `translateX(${indicator.left}px)`,
                            }}
                        />
                    </div>

                    {/* POSTS GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {visiblePosts.map((post) => (
                            <article
                                key={post.id}
                                className="border border-neutral-200"
                            >
                                <Link href={`/blog/${post.slug}`}>
                                    <div className="relative h-[260px]">
                                        <Image
                                            src={post.img}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </Link>

                                <div className="p-8 text-center">
                                    <Link href={`/blog/${post.slug}`}>
                                        <h2 className="text-lg text-black font-semibold hover:underline">
                                            {post.title}
                                        </h2>
                                    </Link>

                                    <div className="mt-2 text-xs text-neutral-500 uppercase">
                                        {getCategoryTitle(post.category)} ·{' '}
                                        {formatDate(post.date)}
                                    </div>

                                    <p className="mt-6 text-base text-neutral-700 leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-8 flex items-center justify-center gap-6 text-xs uppercase tracking-wide">
                                        <span className="text-gray-700">
                                            By {post.author ?? 'Abiola Oyetunde'}
                                        </span>
                                        <span className="text-gray-700">
                                            Comments {post.comments ?? 0}
                                        </span>
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="text-gray-700 hover:underline"
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* PAGINATION */}
                    {totalPages > 1 && (
                        <div className="mt-20 flex justify-between items-center">
                            <Pager
                                disabled={page === 1}
                                label="Previous"
                                onClick={() => setPage((p) => p - 1)}
                                arrow="←"
                            />
                            <Pager
                                disabled={page === totalPages}
                                label="Next"
                                onClick={() => setPage((p) => p + 1)}
                                arrow="→"
                            />
                        </div>
                    )}

                    {/* MOBILE SIDEBAR — bottom */}
                    <div className="mt-24 space-y-16 lg:hidden">
                        <Search query={query} setQuery={setQuery} setPage={setPage} />
                        <RecentPosts posts={recentPosts} />
                    </div>
                </main>
            </div>
        </section>
    )
}

/* ---------- components ---------- */

function Search({ query, setQuery, setPage }) {
    return (
        <div>
            <h4 className="text-sm font-bold mb-4 uppercase text-black">Search</h4>
            <div className="flex border border-neutral-300">
                <input
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                        setPage(1)
                    }}
                    className="flex-1 px-4 py-2 text-sm outline-none text-black"
                />
                <button className="bg-black text-white px-4">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M11.25 2.75C6.14154 2.75 2 6.89029 2 11.998C2 17.1056 6.14154 21.2459 11.25 21.2459C13.5335 21.2459 15.6238 20.4187 17.2373 19.0475L20.7182 22.5287C21.011 22.8216 21.4859 22.8217 21.7788 22.5288C22.0717 22.2359 22.0718 21.761 21.7789 21.4681L18.2983 17.9872C19.6714 16.3736 20.5 14.2826 20.5 11.998C20.5 6.89029 16.3585 2.75 11.25 2.75ZM3.5 11.998C3.5 7.71905 6.96962 4.25 11.25 4.25C15.5304 4.25 19 7.71905 19 11.998C19 16.2769 15.5304 19.7459 11.25 19.7459C6.96962 19.7459 3.5 16.2769 3.5 11.998Z" fill="#FFFFFF" /> </svg>
                </button>
            </div>
        </div>
    )
}

function RecentPosts({ posts }) {
    return (
        <div>
            <h4 className="text-lg font-bold mb-4 uppercase text-black">Recent Post</h4>
            <ul className="space-y-3 text-sm">
                {posts.map((p) => (
                    <li key={p.id}>
                        <Link href={`/blog/${p.slug}`} className="font-medium text-gray-900 hover:underline">
                            {p.title}
                        </Link>
                        <div className="text-sm text-gray-700">
                            {formatDate(p.date)}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function Pager({ disabled, onClick, label, arrow }) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className="group text-sm font-medium disabled:opacity-30"
        >
            <span className="relative block overflow-hidden h-5">
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                    {label}
                </span>
                <span className="absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full">
                    {arrow} {label}
                </span>
            </span>
        </button>
    )
}

/* ---------- helpers ---------- */

function formatDate(date) {
    return new Date(date).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

function getCategoryTitle(id) {
    const map = {
        travel: 'Travel & Adventures',
        audio: 'Audio',
        creativity: 'Creativity',
        goals: 'Goals',
        news: 'News',
        soft_skills: 'Soft Skills',
        technology: 'Technology',
        video: 'Video',
    }
    return map[id] ?? id
}
