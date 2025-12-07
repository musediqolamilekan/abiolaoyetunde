import Link from 'next/link'


export default function BlogIndex() {
    // replace with dynamic fetch from markdown/CMS
    const posts = [
        { slug: 'how-to-write-better', title: 'How to write better', date: '2025-01-10' },
        { slug: 'story-structure', title: 'Story structure for essays', date: '2025-02-02' },
    ]


    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl font-heading">Blog</h1>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
                {posts.map(p => (
                    <Link key={p.slug} href={`/blog/${p.slug}`} className="block p-6 border rounded-lg">
                        <h3 className="text-xl font-semibold">{p.title}</h3>
                        <div className="mt-2 text-sm text-slate-500">{p.date}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}