'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeading from './SectionHeading'
import { urlFor } from '@/lib/sanity'

export default function LatestPosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('/api/posts?limit=6')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setPosts(data)
            } catch (err) {
                console.error(err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [])

    return (
        <section className="w-full lg:mt-32 mt-0">
            <div className="py-8">
                <div className="max-w-6xl mx-auto px-4">
                    <SectionHeading
                        number="02"
                        title="Latest Posts"
                        titleColor="#000000"
                        lineBgColor="#000000"
                    />
                </div>
                <div className="grid lg:grid-cols-2 xl:grid-cols-3">
                    {loading &&
                        Array.from({ length: 6 }).map((_, i) => (
                            <SkeletonCard key={i} />
                        ))}
                    {!loading && !error && posts.length === 0 && (
                        <div className="col-span-full flex flex-col items-center justify-center py-24 text-center">
                            <h3 className="text-lg text-black">
                                No posts yet. Stories will appear here soon.
                            </h3>
                            <Link
                                href="/blog"
                                className="mt-4 inline-block px-6 py-3 border border-slate-700 text-black text-sm hover:bg-[#01a2bb] hover:text-white transition"
                            >
                                Visit Blog
                            </Link>
                        </div>
                    )}
                    {!loading &&
                        !error &&
                        posts.map((item) => (
                            <Link
                                key={item._id}
                                href={`/blog/${item.slug}`}
                                className="relative group h-[500px] overflow-hidden"
                            >
                                {item.image ? (
                                    <Image
                                        src={urlFor(item.image).url()}
                                        alt={item.title}
                                        loading="lazy"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-neutral-800" />
                                )}

                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />

                                <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                                    <span className="text-md uppercase font-bold tracking-wider text-[#01a2bb]">
                                        {item.categoryTitle}
                                    </span>

                                    <h3 className="mt-2 text-2xl font-bold leading-snug text-white">
                                        {item.title}
                                    </h3>

                                    {item.excerpt && (
                                        <p className="mt-2 text-base text-slate-300 line-clamp-2">
                                            {item.excerpt}
                                        </p>
                                    )}

                                    <span className="mt-3 text-sm text-slate-400">
                                        {formatDate(item.publishedAt)}
                                    </span>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
            {!loading && posts.length > 0 && (
                <div className="mt-10 flex justify-center">
                    <Link
                        href="/blog"
                        className="inline-block px-6 py-3 border border-slate-800 text-sm text-black hover:bg-[#01a2bb] hover:text-white transition-colors"
                    >
                        Read More
                    </Link>
                </div>
            )}
        </section>
    )
}

/* ---------- Skeleton Card ---------- */

function SkeletonCard() {
    return (
        <div className="relative h-[500px] overflow-hidden bg-neutral-900 animate-pulse">
            <div className="absolute inset-0 bg-neutral-800" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 space-y-3">
                <div className="h-4 w-24 bg-neutral-700 rounded" />
                <div className="h-6 w-3/4 bg-neutral-700 rounded" />
                <div className="h-4 w-full bg-neutral-700 rounded" />
                <div className="h-3 w-32 bg-neutral-700 rounded mt-2" />
            </div>
        </div>
    )
}

/* ---------- Helpers ---------- */

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
