'use client'

import { useMemo, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'

const POSTS_PER_PAGE = 6

export default function BlogPage() {
    const [posts, setPosts] = useState([])
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const [activeCategory, setActiveCategory] = useState('all')
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState('')
    const [indicator, setIndicator] = useState({ left: 0, width: 0 })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const postsRes = await fetch('/api/posts')

                if (!postsRes.ok) throw new Error('Posts API failed')

                const postsData = await postsRes.json()
                setPosts(Array.isArray(postsData) ? postsData : [])
                try {
                    const catsRes = await fetch('/api/categories')
                    if (catsRes.ok) {
                        const catsData = await catsRes.json()
                        setCategories(Array.isArray(catsData) ? catsData : [])
                    }
                } catch {
                    setCategories([])
                }
            } catch (e) {
                console.error(e)
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    const recentPosts = posts.slice(0, 3)

    const filteredPosts = useMemo(() => {
        if (query.trim()) {
            const q = query.toLowerCase()
            return posts.filter(
                (p) =>
                    p.title.toLowerCase().includes(q) ||
                    p.excerpt?.toLowerCase().includes(q)
            )
        }

        if (activeCategory === 'all') return posts
        return posts.filter((p) => p.category === activeCategory)
    }, [posts, activeCategory, query])

    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)

    const visiblePosts = useMemo(() => {
        const start = (page - 1) * POSTS_PER_PAGE
        return filteredPosts.slice(start, start + POSTS_PER_PAGE)
    }, [filteredPosts, page])

    const allCategories = [{ id: 'all', title: 'All' }, ...categories]

    const handleCategoryClick = (id) => {
        setLoading(true)
        setActiveCategory(id)
        setQuery('')
        setPage(1)

        setTimeout(() => {
            setLoading(false)
        }, 300)
    }

    useEffect(() => {
        setLoading(true)

        const t = setTimeout(() => {
            setLoading(false)
        }, 300)

        return () => clearTimeout(t)
    }, [activeCategory, page])



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
                <aside className="hidden lg:block space-y-14">
                    <Search query={query} setQuery={setQuery} setPage={setPage} />
                    {loading ? <RecentSkeleton /> : <RecentPosts posts={recentPosts} />}
                </aside>
                <main>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {loading &&
                            Array.from({ length: POSTS_PER_PAGE }).map((_, i) => (
                                <PostSkeleton key={i} />
                            ))}

                        {!loading && visiblePosts.length === 0 && (
                            <EmptyState />
                        )}

                        {!loading &&
                            visiblePosts.map((post) => (
                                <article key={post._id} className="border border-neutral-200">
                                    <Link href={`/blog/${post.slug}`}>
                                        <div className="relative h-[260px]">
                                            {post.image ? (
                                                <Image
                                                    src={urlFor(post.image).url()}
                                                    alt={post.title}
                                                    loading="lazy"
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 bg-neutral-200" />
                                            )}
                                        </div>
                                    </Link>

                                    <div className="p-8 text-center">
                                        <Link href={`/blog/${post.slug}`}>
                                            <h2 className="text-lg text-black font-semibold hover:underline">
                                                {post.title}
                                            </h2>
                                        </Link>

                                        <div className="mt-2 text-xs text-neutral-500 uppercase">
                                            {post.categoryTitle} · {formatDate(post.publishedAt)}
                                        </div>

                                        <p className="mt-6 text-base text-neutral-700 leading-relaxed">
                                            {post.excerpt}
                                        </p>

                                        <div className="mt-8 flex items-center justify-center gap-6 text-xs uppercase tracking-wide">
                                            <span className="text-gray-700 font-bold">
                                                By {post.author || 'Abiola Oyetunde'}
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

                    {totalPages > 1 && !loading && (
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

                    <div className="mt-24 space-y-16 lg:hidden">
                        <Search query={query} setQuery={setQuery} setPage={setPage} />
                        {loading ? <RecentSkeleton /> : <RecentPosts posts={recentPosts} />}
                    </div>
                </main>
            </div>
        </section>
    )
}

/* ---------- Empty State ---------- */

function EmptyState() {
    return (
        <div className="col-span-full py-32 text-center">
            <h3 className="text-2xl font-semibold text-black">
                No stories yet
            </h3>
            <p className="mt-4 text-neutral-600 max-w-md mx-auto">
                This space is reserved for thoughtful writing. New posts will
                appear here soon.
            </p>
            <Link
                href="/"
                className="inline-block mt-8 px-6 py-3 border border-black text-black text-sm hover:bg-black hover:text-white transition"
            >
                Back to Home
            </Link>
        </div>
    )
}

/* ---------- Skeletons ---------- */

function PostSkeleton() {
    return (
        <div className="border border-neutral-200 animate-pulse">
            <div className="h-[260px] bg-neutral-200" />
            <div className="p-8 space-y-4">
                <div className="h-4 bg-neutral-300 w-3/4 mx-auto" />
                <div className="h-3 bg-neutral-300 w-1/3 mx-auto" />
                <div className="h-3 bg-neutral-300 w-full" />
                <div className="h-3 bg-neutral-300 w-5/6 mx-auto" />
            </div>
        </div>
    )
}

function RecentSkeleton() {
    return (
        <ul className="space-y-3 animate-pulse">
            {Array.from({ length: 3 }).map((_, i) => (
                <li key={i} className="h-4 bg-neutral-300 w-full" />
            ))}
        </ul>
    )
}

/* ---------- unchanged helpers ---------- */

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
                <button className="bg-black text-white px-4">Search</button>
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
                    <li key={p._id}>
                        <Link href={`/blog/${p.slug}`} className="font-medium text-gray-900 hover:underline">
                            {p.title}
                        </Link>
                        <div className="text-sm text-gray-700">
                            {formatDate(p.publishedAt)}
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

function formatDate(date) {
    return new Date(date).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}
