import Link from 'next/link'
import Image from 'next/image'
import { posts as allPosts, categories as allCategories } from '../../../data/blogData'
import Header from '@/components/Header'

export default async function PostPage(props) {
    const resolvedProps = await props
    const params = resolvedProps?.params ? await resolvedProps.params : {}
    const slug = params?.slug ?? ''

    const currentPost = allPosts.find((p) => p.slug === slug)

    if (!currentPost) {
        return (
            <div className="container mx-auto px-6 py-20">
                <h1 className="text-3xl font-semibold">Post not found</h1>
                <Link href="/blog" className="text-[#01a2bb] mt-4 inline-block">
                    Return to Blog
                </Link>
            </div>
        )
    }

    const chrono = [...allPosts].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
    )
    const currentIndex = chrono.findIndex((p) => p.slug === slug)
    const prevPost = currentIndex > 0 ? chrono[currentIndex - 1] : null
    const nextPost =
        currentIndex !== -1 && currentIndex < chrono.length - 1
            ? chrono[currentIndex + 1]
            : null

    return (
        <>
            {/* HERO */}
            <section
                className="relative px-6 py-20 md:py-28 bg-cover bg-center breadcrumb bg-no-repeat"
                style={{
                    backgroundImage: `url(${currentPost.img})`,
                    backgroundAttachment: 'fixed',
                    minHeight: '550px',
                }}
            >
                {/* dark overlay */}
                <div className="absolute inset-0 bg-black/55" />

                <Header />

                <div className="relative container mx-auto flex flex-col items-center justify-center text-center h-full mt-32 text-white">
                    <h1 className="text-5xl md:text-6xl font-bold">
                        BLOG
                    </h1>

                    <nav className="mt-4 text-lg">
                        <ol className="flex items-center gap-2">
                            <li>
                                <Link href="/" className="hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>»</li>
                            <li>
                                <Link
                                    href={`/blog/category/${currentPost.category}`}
                                    className="hover:underline"
                                >
                                    {findCategoryTitle(currentPost.category)}
                                </Link>
                            </li>
                            <li>»</li>
                            <li className="font-medium">
                                {currentPost.title}
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>

            {/* CONTENT */}
            <section className="container mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-3 gap-14">
                    {/* ARTICLE */}
                    <article className="lg:col-span-2">
                        <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-black">
                            {currentPost.title}
                        </h1>

                        {currentPost.excerpt && (
                            <p className="text-lg text-gray-700 mb-10">
                                {currentPost.excerpt}
                            </p>
                        )}

                        {/* MAIN CONTENT */}
                       <div
  className="
    prose 
    prose-lg 
    max-w-none
    [&_p]:text-black
    [&_h1]:text-black
    [&_h2]:text-black
    [&_h3]:text-black
    [&_h4]:text-black
    [&_strong]:text-black
    [&_em]:text-black
    [&_li]:text-black
    [&_blockquote]:text-black
    [&_blockquote]:border-black
    [&_a]:text-black
  "
>
    <div
        dangerouslySetInnerHTML={{
            __html: currentPost.content ?? currentPost.body ?? '',
        }}
    />
</div>


                        {/* META ROW */}
                        <div className="mt-14 flex flex-wrap gap-4 text-sm uppercase tracking-wide text-black border-t pt-6">
                            <span>
                                AUTHOR <strong>{currentPost.author ?? 'Abiola Oyetunde'}</strong>
                            </span>
                            <span>|</span>
                            <span>COMMENTS {currentPost.comments ?? 0}</span>
                            <span>|</span>
                            <span>
                                TAGS{' '}
                                <em className="lowercase">
                                    {currentPost.tags?.join(', ') ?? '—'}
                                </em>
                            </span>
                            <span>|</span>
                            <span>
                                CATEGORIES{' '}
                                <em className="lowercase">
                                    {findCategoryTitle(currentPost.category)}
                                </em>
                            </span>
                            <span>|</span>
                            <span>
                                DATE{' '}
                                <em className="lowercase">
                                    {formatDate(currentPost.date)}
                                </em>
                            </span>
                        </div>

                        {/* PREV / NEXT */}
                        <div className="flex justify-between items-center mt-16 text-sm font-medium">
                            {prevPost ? (
                                <Link href={`/blog/${prevPost.slug}`}>
                                    ← Previous
                                </Link>
                            ) : (
                                <span />
                            )}

                            {nextPost ? (
                                <Link href={`/blog/${nextPost.slug}`}>
                                    Next →
                                </Link>
                            ) : (
                                <span />
                            )}
                        </div>

                        {/* ABOUT AUTHOR */}
                        <section className="mt-20 border-t pt-10">
                            <h3 className="text-2xl font-semibold mb-6 text-black">
                                About Author
                            </h3>

                            <div className="flex items-start gap-6">
                                <div className="w-20 h-20 bg-gray-300 flex items-center justify-center">
                                    <span className="text-gray-500 text-4xl">👤</span>
                                </div>

                                <div>
                                    <p className="font-semibold text-gray-700">
                                        {currentPost.author ?? 'Abiola Oyetunde'}{' '}
                                        <span className="text-sm font-normal text-gray-500">
                                            / administrator
                                        </span>
                                    </p>
                                    <p className="mt-2 text-gray-700">
                                        Share a little biographical information to fill out your
                                        profile. This may be shown publicly.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </article>

                    {/* SIDEBAR */}
                    <aside>
                        <h3 className="text-lg font-semibold mb-6 uppercase text-black">
                            Categories
                        </h3>

                        <ul className="space-y-4 text-black">
                            {allCategories.map((c) => (
                                <li
                                    key={c.id}
                                    className="flex items-center justify-between text-sm"
                                >
                                    <Link
                                        href={`/blog/category/${c.id}`}
                                        className="flex items-center gap-2 hover:underline"
                                    >
                                        <span>›</span>
                                        <span>{c.title}</span>
                                    </Link>
                                    <span className="text-gray-500">
                                        ({countPosts(c.id)})
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>
            </section>
        </>
    )
}

/* ---------- helpers ---------- */

function findCategoryTitle(catId) {
    const map = {}
    allCategories.forEach((c) => (map[c.id] = c.title))
    return map[catId] ?? catId
}

function countPosts(catId) {
    return allPosts.filter((p) => p.category === catId).length
}

function formatDate(d) {
    return new Date(d).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}
