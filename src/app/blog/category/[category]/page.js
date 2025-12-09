// app/blog/category/[category]/page.jsx
import Link from 'next/link'
import Image from 'next/image'
import { posts as allPosts, categories as allCategories } from '../../../../data/blogData'

export default async function CategoryPage(props) {
    const resolvedProps = await props
    const params = resolvedProps?.params ? await resolvedProps.params : {}
    const searchParams = resolvedProps?.searchParams ? await resolvedProps.searchParams : {}
    const category = params?.category ?? ''

    const pageParam = Array.isArray(searchParams?.page) ? searchParams.page[0] : searchParams?.page
    const page = Math.max(1, parseInt(pageParam || '1', 10))

    const cat = allCategories.find((c) => c.id === category)
    const categoryPosts = allPosts
        .filter((p) => p.category === category)
        .sort((a, b) => new Date(b.date) - new Date(a.date))

    const PER_PAGE = 6
    const total = categoryPosts.length
    const totalPages = Math.max(1, Math.ceil(total / PER_PAGE))
    const safePage = Math.min(page, totalPages)
    const paginated = categoryPosts.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE)

    const recent = allPosts.slice(0, 6)

    return (
        <div className="text-slate-100">
            <header className="mb-10">
                <h1 className="text-4xl md:text-5xl font-heading font-semibold">
                    {cat ? cat.title : formatTitleFromSlug(category)}
                </h1>
            </header>
            <div className="grid lg:grid-cols-3 gap-10">
                <section className="lg:col-span-2 space-y-12">
                    {paginated.length === 0 ? (
                        <div className="rounded-lg p-8 bg-neutral-900">
                            <p className="text-slate-300">
                                No posts found in this category yet. Check back later or browse other categories.
                            </p>
                            <div className="mt-6">
                                <Link href="/blog" className="inline-block px-5 py-2 border border-neutral-800 text-sm rounded">
                                    View all posts
                                </Link>
                            </div>
                        </div>
                    ) : (
                        paginated.map((p) => (
                            <article key={p.id} className="group block rounded-lg overflow-hidden">
                                <Link href={`/blog/${p.slug}`} className="block">
                                    <div className="relative h-64 rounded-md overflow-hidden">
                                        {p.img ? (
                                            <Image
                                                src={p.img}
                                                alt={p.title}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                                className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                            />
                                        ) : (
                                            <div className={`absolute inset-0 ${p.gradient}`} />
                                        )}
                                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                                    </div>

                                    <div className="mt-6">
                                        <div className="flex items-center gap-3">
                                            <span className="inline-block bg-[#01a2bb] text-black text-xs font-semibold px-3 py-1 rounded">
                                                {findCategoryTitle(p.category)}
                                            </span>
                                            <span className="text-xs text-slate-400">{formatDate(p.date)}</span>
                                        </div>

                                        <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-slate-100 group-hover:text-amber-200">
                                            {p.title}
                                        </h2>

                                        {p.excerpt && <p className="mt-3 text-slate-300 max-w-3xl">{p.excerpt}</p>}

                                        <div className="mt-3">
                                            <span className="text-sm text-[#01a2bb]">
                                                Read More →
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                                {p.id !== paginated[paginated.length - 1].id && (
                                    <div className="my-12 border-t border-slate-700/40" />
                                )}
                            </article>
                        ))
                    )}
                    {totalPages > 1 && (
                        <div className="flex items-center justify-between mt-6">
                            <div>
                                <span className="text-sm text-slate-400">
                                    Page {safePage} of {totalPages}
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <PaginationButton
                                    disabled={safePage <= 1}
                                    href={`/blog/category/${category}?page=${safePage - 1}`}
                                    label="Prev"
                                />
                                <div className="hidden md:flex items-center gap-2">
                                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                                        .filter((n) => {
                                            if (n === 1 || n === totalPages) return true
                                            if (Math.abs(n - safePage) <= 1) return true
                                            return false
                                        })
                                        .map((n, idx, arr) => (
                                            <span key={n}>
                                                {idx > 0 && arr[idx - 1] !== n - 1 ? <span className="px-2">…</span> : null}
                                                <Link
                                                    href={`/blog/category/${category}?page=${n}`}
                                                    className={`px-3 py-1 rounded ${n === safePage ? 'bg-[#01a2bb] text-black' : 'bg-slate-800 text-slate-200'}`}
                                                >
                                                    {n}
                                                </Link>
                                            </span>
                                        ))}
                                </div>

                                <PaginationButton
                                    disabled={safePage >= totalPages}
                                    href={`/blog/category/${category}?page=${safePage + 1}`}
                                    label="Next"
                                />
                            </div>
                        </div>
                    )}
                </section>
                <aside className="lg:col-span-1">
                    <div className="space-y-8">
                        <div className="bg-neutral-900 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
                            <ul className="space-y-3">
                                {recent.map((r) => (
                                    <li key={r.id}>
                                        <Link href={`/blog/${r.slug}`} className="text-slate-100 hover:text-[#01a2bb]">
                                            {r.title}
                                        </Link>
                                        <div className="text-xs text-slate-400">{formatDate(r.date)}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-neutral-900 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-4">Categories</h3>
                            <ul className="space-y-2">
                                {allCategories.map((c) => (
                                    <li key={c.id}>
                                        <Link href={`/blog/category/${c.id}`} className={`text-slate-200 hover:text-[#01a2bb]`}>
                                            {c.title}
                                            <span className="text-xs text-slate-400 ml-2">({countPosts(c.id)})</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}

/* ---------------- helpers ---------------- */

function PaginationButton({ href, label, disabled }) {
    return disabled ? (
        <span className="px-4 py-2 rounded bg-slate-800 text-slate-600 text-sm">{label}</span>
    ) : (
        <Link href={href} className="px-4 py-2 rounded bg-slate-700 hover:bg-slate-600 text-sm">
            {label}
        </Link>
    )
}

function findCategoryTitle(catId) {
    const map = {}
    allCategories.forEach((c) => (map[c.id] = c.title))
    return map[catId] ?? (catId ?? '')
}

function countPosts(catId) {
    return allPosts.filter((p) => p.category === catId).length
}

function formatDate(d) {
    try {
        const dt = new Date(d)
        return dt.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
    } catch {
        return d
    }
}

function formatTitleFromSlug(slug) {
    if (!slug) return ''
    return String(slug)
        .split('-')
        .map((s) => (s ? s[0].toUpperCase() + s.slice(1) : s))
        .join(' ')
}
