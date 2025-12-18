import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import { notFound } from 'next/navigation'
import { serverClient } from '@/lib/sanityServer'
import { urlFor } from '@/lib/sanity'

const POSTS_PER_PAGE = 6

export async function generateMetadata(props) {
    const params = await props.params
    let slug = params?.category
    if (Array.isArray(slug)) slug = slug[0]

    if (!slug) {
        return {
            title: 'Blog Categories',
            description: 'Browse blog categories',
        }
    }

    const category = await serverClient.fetch(CATEGORY_META_QUERY, { slug })

    if (!category) {
        return {
            title: 'Category not found',
        }
    }

    const title = `Category: ${category.title}`
    const description =
        category.purpose ??
        `Read articles filed under the ${category.title} category.`

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
        },
        twitter: {
            card: 'summary',
            title,
            description,
        },
    }
}


/* ---------------- SANITY QUERY ---------------- */

const CATEGORY_POSTS_QUERY = `
{
  "category": *[_type == "category" && slug.current == $slug][0]{
    title
  },
  "posts": *[
    _type == "post" &&
    category->slug.current == $slug
  ] | order(publishedAt desc) [$start...$end]{
    _id,
    title,
    excerpt,
    publishedAt,
    "slug": slug.current,
    "image": mainImage,
    "author": author->name
  },
  "total": count(*[
    _type == "post" &&
    category->slug.current == $slug
  ])
}
`

const CATEGORY_META_QUERY = `
*[_type == "category" && slug.current == $slug][0]{
  title,
  purpose
}
`


/* ---------------- PAGE ---------------- */

export default async function CategoryPage(props) {
    /* 1️⃣ Await params (REQUIRED in new Next.js) */
    const params = await props.params
    const searchParams = await props.searchParams

    let slug = params?.category
    if (Array.isArray(slug)) slug = slug[0]

    if (!slug) {
        notFound()
    }

    /* 2️⃣ Parse page safely */
    const page = Math.max(1, Number(searchParams?.page) || 1)
    const start = (page - 1) * POSTS_PER_PAGE
    const end = start + POSTS_PER_PAGE

    /* 3️⃣ Fetch data */
    const data = await serverClient.fetch(CATEGORY_POSTS_QUERY, {
        slug,
        start,
        end,
    })

    /* 4️⃣ Soft fallback (no notFound after fetch) */
    if (!data?.category) {
        return (
            <div className="container mx-auto px-6 py-32 text-center">
                <h2 className="text-2xl font-semibold mb-4">
                    Category not found
                </h2>
                <Link href="/blog" className="underline">
                    Back to blog
                </Link>
            </div>
        )
    }

    const { category, posts, total } = data
    const totalPages = Math.ceil(total / POSTS_PER_PAGE)

    return (
        <>
            {/* ---------- HERO ---------- */}
            <section
                className="relative px-6 py-20 md:py-28 bg-cover bg-center breadcrumb bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/breadcrumb.jpg')",
                    backgroundAttachment: 'fixed',
                    minHeight: '550px',
                }}
            >
                <div className="absolute inset-0 bg-black/55" />
                <Header />

                <div className="relative container mx-auto flex flex-col items-center justify-center text-center h-full mt-32 text-white">
                    <h1 className="text-5xl md:text-6xl font-bold">
                        Category Archives: {category.title}
                    </h1>

                    <nav className="mt-4 text-lg">
                        <ol className="flex items-center gap-2">
                            <li><Link href="/">Home</Link></li>
                            <li>»</li>
                            <li className="font-medium">{category.title}</li>
                        </ol>
                    </nav>
                </div>
            </section>

            {/* ---------- POSTS ---------- */}
            <section className="container mx-auto px-6 py-20">
                {posts.length === 0 && (
                    <div className="py-24 text-center">
                        <p className="text-lg text-gray-600">
                            No posts in this category yet.
                        </p>
                        <Link
                            href="/blog"
                            className="inline-block mt-6 px-6 py-3 border border-black text-black text-sm hover:bg-black hover:text-white transition"
                        >
                            Back to Blog
                        </Link>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <article key={post._id} className="border border-neutral-200">
                            <Link href={`/blog/${post.slug}`}>
                                <div className="relative h-[260px]">
                                    {post.image && (
                                        <Image
                                            src={urlFor(post.image).url()}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                        />
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
                                    {formatDate(post.publishedAt)}
                                </div>

                                <p className="mt-6 text-base text-neutral-700 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <div className="mt-8 flex items-center justify-center gap-6 text-xs uppercase tracking-wide">
                                    <span className="text-gray-700 font-bold">
                                        By {post.author ?? 'Abiola Oyetunde'}
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

                {/* ---------- PAGINATION ---------- */}
                {totalPages > 1 && (
                    <div className="mt-20 flex justify-between items-center">
                        <Pager
                            href={`/blog/category/${slug}?page=${page - 1}`}
                            disabled={page === 1}
                            label="Previous"
                            arrow="←"
                        />
                        <Pager
                            href={`/blog/category/${slug}?page=${page + 1}`}
                            disabled={page === totalPages}
                            label="Next"
                            arrow="→"
                        />
                    </div>
                )}
            </section>
        </>
    )
}

/* ---------------- UI ---------------- */

function Pager({ href, disabled, label, arrow }) {
    if (disabled) {
        return (
            <span className="text-sm font-medium text-black opacity-30">
                {label}
            </span>
        )
    }

    return (
        <Link href={href} className="group text-sm font-medium text-black">
            <span className="relative block overflow-hidden h-5">
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                    {label}
                </span>
                <span className="absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full">
                    {arrow} {label}
                </span>
            </span>
        </Link>
    )
}

/* ---------------- HELPERS ---------------- */

function formatDate(date) {
    return new Date(date).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}
