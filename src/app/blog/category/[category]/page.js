'use client'

import { useMemo, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { posts, categories } from '@/data/blogData'
import Header from '@/components/Header'

const POSTS_PER_PAGE = 6

export default function CategoryPage() {
    const { category } = useParams()
    const [page, setPage] = useState(1)

    const filteredPosts = useMemo(() => {
        return posts.filter((p) => p.category === category)
    }, [category])

    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)

    const visiblePosts = useMemo(() => {
        const start = (page - 1) * POSTS_PER_PAGE
        return filteredPosts.slice(start, start + POSTS_PER_PAGE)
    }, [filteredPosts, page])

    const categoryTitle =
        categories.find((c) => c.id === category)?.title ?? category

    return (
        <>
            <section
                className="relative px-6 py-20 md:py-28 bg-cover breadcrumb bg-center hero-sect bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/breadcrumb.jpg')",
                    backgroundPosition: "50%",
                    backgroundAttachment: "fixed",
                    minHeight: "550px",
                }}
            >
                <div className="absolute inset-0 bg-black/55" />
                <Header />

                {/* Centered content */}
                <div className="relative container mx-auto flex flex-col items-center justify-center text-center h-full mt-32 text-white">
                    <h1 className="text-5xl md:text-6xl font-bold">
                        Category Archives: {categoryTitle}
                    </h1>

                    <nav
                        aria-label="Breadcrumb"
                        className="mt-4 text-sm"
                    >
                        <ol className="flex items-center gap-2">
                            <li>
                                <a href="/" className="text-lg">
                                    Home
                                </a>
                            </li>
                            <li aria-hidden className='text-lg'>»</li>
                            <li className="font-medium text-lg">
                                {categoryTitle}
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>
            <section className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                {/* Title */}
                                <Link href={`/blog/${post.slug}`}>
                                    <h2 className="text-lg text-black font-semibold hover:underline">
                                        {post.title}
                                    </h2>
                                </Link>

                                <div className="mt-2 text-xs text-neutral-500 uppercase">
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

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-20 flex justify-between items-center">
                        {/* Previous */}
                        <button
                            disabled={page === 1}
                            onClick={() => setPage((p) => p - 1)}
                            className="group text-sm font-medium text-black disabled:opacity-30"
                        >
                            <span className="relative block overflow-hidden h-5">
                                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                                    Previous
                                </span>
                                <span className="absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full">
                                    ← Previous
                                </span>
                            </span>
                        </button>

                        {/* Next */}
                        <button
                            disabled={page === totalPages}
                            onClick={() => setPage((p) => p + 1)}
                            className="group text-sm font-medium text-black disabled:opacity-30"
                        >
                            <span className="relative block overflow-hidden h-5">
                                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                                    Next
                                </span>
                                <span className="absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full">
                                    Next →
                                </span>
                            </span>
                        </button>
                    </div>
                )}
            </section>
        </>
    )
}

/* helpers */
function formatDate(date) {
    return new Date(date).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}
