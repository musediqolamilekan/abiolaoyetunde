'use client'
import Link from 'next/link'
import PostCard from './PostCard'
import { posts } from '@/data/blogData'

export default function TravelSection() {
  const travelPosts = posts.filter((p) => p.category === 'travel').slice(0, 3)

  if (travelPosts.length === 0) return null

  return (
    <section className="text-slate-100">
      <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold">Travel &amp; Adventures</h2>
          <Link href="/blog/category/travel" className="text-sm text-slate-400 hover:text-[#01a2bb]">
            View all →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {travelPosts.map((p) => (
            <PostCard key={p.id} item={p} />
          ))}
        </div>
    </section>
  )
}
