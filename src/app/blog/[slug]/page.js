import Link from 'next/link'
import Header from '@/components/Header'
import { notFound } from 'next/navigation'
import { serverClient } from '@/lib/sanityServer'
import { PortableText } from 'next-sanity'

/* ---------------- SANITY QUERIES ---------------- */

const POST_QUERY = `
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  excerpt,
  body,
  publishedAt,
  "tags": tags[]->title,
  "slug": slug.current,
  "category": category->{
    title,
    "id": slug.current
  },
  "image": mainImage.asset->url,
  "author": author->{
    name,
    bio,
    isOwner,
    "image": image.asset->url
  }
}
`


const ALL_POSTS_QUERY = `
*[_type == "post"] | order(publishedAt asc){
  "slug": slug.current,
  publishedAt
}
`

const CATEGORIES_QUERY = `
*[_type == "category"]{
  title,
  "id": slug.current,
  "postCount": count(*[
    _type == "post" &&
    references(^._id)
  ])
}
`


/* ---------------- PAGE ---------------- */

export default async function PostPage({ params }) {
    const resolved = await params
    let slug = resolved?.slug ?? resolved?.params?.slug ?? null
    if (Array.isArray(slug)) slug = slug[0]

    if (!slug) {
        notFound()
    }

    const [currentPost, chrono, categories] = await Promise.all([
        serverClient.fetch(POST_QUERY, { slug }),
        serverClient.fetch(ALL_POSTS_QUERY),
        serverClient.fetch(CATEGORIES_QUERY),
    ])

    if (!currentPost) {
        notFound()
    }

    const currentIndex = chrono.findIndex((p) => p.slug === slug)
    const prevPost = currentIndex > 0 ? chrono[currentIndex - 1] : null
    const nextPost =
        currentIndex !== -1 && currentIndex < chrono.length - 1
            ? chrono[currentIndex + 1]
            : null

    return (
        <>
            <section
                className="relative px-6 py-20 md:py-28 bg-cover breadcrumb bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${currentPost.image})`,
                    backgroundAttachment: 'fixed',
                    minHeight: '550px',
                }}
            >
                <div className="absolute inset-0 bg-black/55" />
                <Header />

                <div className="relative container mx-auto flex flex-col items-center justify-center text-center h-full mt-32 text-white">
                    <h1 className="text-5xl md:text-6xl font-bold">BLOG</h1>

                    <nav className="mt-4 text-lg">
                        <ol className="flex items-center gap-2">
                            <li>
                                <Link href="/" className="hover:underline">Home</Link>
                            </li>
                            <li>»</li>
                            <li>
                                <Link
                                    href={`/blog/category/${currentPost.category.id}`}
                                    className="hover:underline"
                                >
                                    {currentPost.category.title}
                                </Link>
                            </li>
                            <li>»</li>
                            <li className="font-medium">{currentPost.title}</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section className="container mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-3 gap-14">
                    <article className="lg:col-span-2">
                        <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-black">
                            {currentPost.title}
                        </h1>

                        {currentPost.excerpt && (
                            <p className="text-lg text-gray-700 mb-10">
                                {currentPost.excerpt}
                            </p>
                        )}

                        <div
                            className="
    prose prose-lg max-w-none
    [&_p]:text-black
    [&_h1]:text-black
    [&_h2]:text-black
    [&_h3]:text-black
    [&_h4]:text-black
    [&_li]:text-black
    [&_strong]:text-black
    [&_em]:text-black
    [&_blockquote]:border-black
    [&_blockquote]:text-black
    [&_a]:text-black
  "
                        >
                            <PortableText value={currentPost.body} />
                        </div>

                        <div className="mt-14 flex flex-wrap gap-4 text-sm uppercase tracking-wide text-black border-t pt-6">
                            <span>
                                AUTHOR <strong>{currentPost.author?.name ?? 'Abiola Oyetunde'}</strong>
                            </span>
                            <span>|</span>
                            <span>
                                TAGS <em className="lowercase">{currentPost.tags?.join(', ') ?? '—'}</em>
                            </span>
                            <span>|</span>
                            <span>
                                DATE <em>{formatDate(currentPost.publishedAt)}</em>
                            </span>
                        </div>

                        <div className="flex justify-between items-center mt-16 text-sm font-medium">
                            {prevPost ? (
                                <Link href={`/blog/${prevPost.slug}`}>← Previous</Link>
                            ) : <span />}
                            {nextPost ? (
                                <Link href={`/blog/${nextPost.slug}`}>Next →</Link>
                            ) : <span />}
                        </div>

                        <section className="mt-20 border-t pt-10">
                            <h3 className="text-2xl font-semibold mb-6 text-black">
                                About Author
                            </h3>

                            <div className="flex items-start gap-6">
                                <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 shrink-0">
                                    {currentPost.author?.image ? (
                                        <img
                                            src={currentPost.author.image}
                                            alt={currentPost.author.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-500 text-xl">
                                            A
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <p className="font-semibold text-gray-800 flex items-center gap-2">
                                        <span>{currentPost.author?.name ?? 'Abiola Oyetunde'}</span>

                                        {currentPost.author?.isOwner && (
                                            <span
                                                className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#01a2bb]"
                                                title="Verified author"
                                            >
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    className="w-3 h-3 text-white fill-current"
                                                >
                                                    <path d="M9.6 16.2L5.4 12l1.4-1.4 2.8 2.8 6.6-6.6L17.6 8l-8 8.2z" />
                                                </svg>
                                            </span>
                                        )}
                                    </p>
                                    {currentPost.author?.bio && (
                                        <p className="mt-2 text-gray-700">
                                            {currentPost.author.bio}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </section>

                    </article>

                    <aside>
                        <h3 className="text-lg font-semibold mb-6 uppercase text-black">
                            Categories
                        </h3>

                        <ul className="space-y-4 text-black">
                            {categories.map((c) => (
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
                                        ({c.postCount})
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

/* ---------------- SKELETON ---------------- */

export function Loading() {
    return (
        <div className="container mx-auto px-6 py-32 animate-pulse space-y-6">
            <div className="h-10 w-3/4 bg-neutral-300" />
            <div className="h-6 w-full bg-neutral-200" />
            <div className="h-6 w-5/6 bg-neutral-200" />
            <div className="h-6 w-4/6 bg-neutral-200" />
        </div>
    )
}

/* ---------------- HELPERS ---------------- */

function formatDate(d) {
    return new Date(d).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}
