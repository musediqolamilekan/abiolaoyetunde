import Link from 'next/link'
import Image from 'next/image'
import { posts as allPosts, categories as allCategories } from '../../../data/blogData'

export default async function PostPage(props) {
    const resolvedProps = await props
    const params = resolvedProps?.params ? await resolvedProps.params : {}
    const slug = params?.slug ?? ''
    const currentPost = allPosts.find((p) => p.slug === slug)

    if (!currentPost) {
        return (
            <div className="text-slate-100">
                <h1 className="text-3xl font-semibold">Post not found</h1>
                <p className="mt-4 text-slate-400">We could not find the article you're looking for.</p>
                <div className="mt-6">
                    <Link href="/blog" className="text-[#01a2bb]">Return to Blog</Link>
                </div>
            </div>
        )
    }

    const chrono = [...allPosts].sort((a, b) => new Date(a.date) - new Date(b.date))
    const currentIndex = chrono.findIndex((p) => p.slug === slug)
    const prevPost = currentIndex > 0 ? chrono[currentIndex - 1] : null
    const nextPost = currentIndex !== -1 && currentIndex < chrono.length - 1 ? chrono[currentIndex + 1] : null

    const related = [...allPosts]
        .filter((p) => p.category === currentPost.category && p.slug !== currentPost.slug)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 2)

    return (
        <div className="text-slate-100">
            <div className="grid lg:grid-cols-3 gap-10">
                <article className="lg:col-span-2">
                    <div className='relative h-[520px] md:h-[560px] lg:h-[520px] w-full mb-6'>
                        {currentPost.img ? (
                            <div className="relative group">
                                <div
                                    aria-hidden
                                    className="absolute -right-6 -top-6 w-[calc(100%+48px)] h-[calc(100%+48px)] rounded-md border-2 border-[#01a2bb] opacity-80"
                                    style={{ zIndex: 0 }}
                                />
                                <div className="relative h-80 w-full rounded-md overflow-hidden shadow-lg" style={{ zIndex: 10 }}>
                                    <Image
                                        src={currentPost.img}
                                        alt={currentPost.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-black/60 transition-opacity duration-400 group-hover:bg-black/10" />
                                </div>
                            </div>
                        ) : (
                            <div className={`absolute inset-0 ${currentPost.gradient}`} />
                        )}
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-xs bg-[#01a2bb] text-black px-3 py-1 rounded font-semibold">
                                {findCategoryTitle(currentPost.category)}
                            </span>
                            <div className="text-xs text-slate-400">{formatDate(currentPost.date)}</div>
                            <div className="text-xs text-slate-400"> / By {currentPost.author ?? 'Author'}</div>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-heading font-semibold my-6 text-slate-100">
                            {currentPost.title}
                        </h1>
                        {currentPost.excerpt && <p className="text-slate-300 mb-8">{currentPost.excerpt}</p>}
                    </div>
                    <div className="prose prose-invert max-w-none text-slate-200">
                        {currentPost.content ? (
                            <div dangerouslySetInnerHTML={{ __html: currentPost.content }} />
                        ) : currentPost.body ? (
                            <div dangerouslySetInnerHTML={{ __html: currentPost.body }} />
                        ) : (
                            <>
                                <h2 className="mt-6 text-2xl text-slate-100">Cursus iaculis etiam in</h2>
                                <p className="mt-4 text-slate-300">
                                    {currentPost.excerpt ??
                                        'No additional content available for this article.'}
                                </p>
                            </>
                        )}
                    </div>
                    <div className="flex items-center justify-between my-8">
                        {prevPost ? (
                            <Link href={`/blog/${prevPost.slug}`} className="text-slate-300 hover:text-[#01a2bb]">
                                ← Previous Post
                            </Link>
                        ) : <div />}

                        {nextPost ? (
                            <Link href={`/blog/${nextPost.slug}`} className="text-slate-300 hover:text-[#01a2bb]">
                                Next Post →
                            </Link>
                        ) : <div />}
                    </div>
                    <div className="my-8" />
                    <section className="mt-12 bg-neutral-900/20 p-8 rounded-lg">
                        <h3 className="text-2xl font-heading mb-6">Related Posts</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {related.length === 0 ? (
                                <p className="text-slate-400">No related posts found.</p>
                            ) : (
                                related.map((r) => (
                                    <article key={r.id} className="group">
                                        <Link href={`/blog/${r.slug}`} className="block rounded overflow-hidden">
                                            <div className="relative h-44 md:h-40 rounded-md overflow-hidden">
                                                {r.img ? (
                                                    <Image
                                                        src={r.img}
                                                        alt={r.title}
                                                        fill
                                                        style={{ objectFit: 'cover' }}
                                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                ) : (
                                                    <div className={`absolute inset-0 ${r.gradient}`} />
                                                )}
                                            </div>

                                            <div className="mt-4">
                                                <div className="text-xs text-[#01a2bb] font-semibold">{findCategoryTitle(r.category)}</div>
                                                <h4 className="mt-2 text-lg font-semibold text-slate-100 hover:text-[#01a2bb]">{r.title}</h4>
                                                <div className="text-xs text-slate-400 mt-2">{formatDate(r.date)}</div>
                                            </div>
                                        </Link>
                                    </article>
                                ))
                            )}
                        </div>
                    </section>

                    <section className="mt-12 bg-neutral-900/20 p-6 rounded">
                        <h3 className="text-2xl font-heading mb-4">Leave a Comment</h3>
                        <p className="text-sm text-slate-400 mb-4">Your email address will not be published. Required fields are marked *</p>

                        <form className="space-y-4">
                            <textarea placeholder="Type here.." rows={6} className="w-full p-4 bg-neutral-900/20 border border-neutral-700 rounded text-slate-100 focus:ring-0 outline-0 outline-none" />
                            <div className="grid md:grid-cols-3 gap-4">
                                <input type="text" placeholder="Name*" className="p-3 bg-neutral-900/20 border border-neutral-700 rounded text-slate-100 focus:ring-0 outline-0 outline-none" />
                                <input type="email" placeholder="Email*" className="p-3 bg-neutral-900/20 border border-neutral-700 rounded text-slate-100 focus:ring-0 outline-0 outline-none" />
                                <input type="text" placeholder="Website" className="p-3 bg-neutral-900/20 border border-neutral-700 rounded text-slate-100 focus:ring-0 outline-0 outline-none" />
                            </div>

                            <div className="flex items-center gap-3">
                                <input id="remember" type="checkbox" className="w-4 h-4 text-[#01a2bb] bg-slate-700 border-slate-600 rounded" />
                                <label htmlFor="remember" className="text-sm text-slate-400">Save my name, email, and website in this browser for the next time I comment.</label>
                            </div>

                            <button type="button" className="inline-block px-6 py-3 bg-[#01a2bb] text-black font-medium rounded">
                                Post Comment »
                            </button>
                        </form>
                    </section>
                </article>

                <aside className="lg:col-span-1">
                    <div className="space-y-8">
                        <div className="bg-neutral-900/20 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
                            <ul className="space-y-3">
                                {allPosts.slice(0, 6).map((r) => (
                                    <li key={r.id}>
                                        <Link href={`/blog/${r.slug}`} className="text-slate-100 hover:text-[#01a2bb]">{r.title}</Link>
                                        <div className="text-xs text-slate-400">{formatDate(r.date)}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-neutral-900/20 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-4">Categories</h3>
                            <ul className="space-y-2">
                                {allCategories.map((c) => (
                                    <li key={c.id}>
                                        <Link href={`/blog/category/${c.id}`} className="text-slate-200 hover:text-[#01a2bb]">
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

/* ---------- helpers ---------- */

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
        return dt.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
    } catch {
        return d
    }
}
