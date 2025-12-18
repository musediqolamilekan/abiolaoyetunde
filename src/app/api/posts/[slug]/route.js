import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity'

const query = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    excerpt,
    publishedAt,
    body,
    "category": category->slug.current,
    "categoryTitle": category->title,
    "author": author->name,
    "image": mainImage
  }
`

export async function GET(req, { params }) {
    const post = await client.fetch(query, { slug: params.slug })

    if (!post) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    return NextResponse.json(post)
}
