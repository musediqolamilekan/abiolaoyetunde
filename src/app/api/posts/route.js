import { client } from '@/lib/sanity'
import { NextResponse } from 'next/server'

const query = `
  *[_type == "post" && defined(slug.current)]
  | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    "category": category->slug.current,
    "categoryTitle": category->title,
    "author": author->name,
    "image": mainImage
  }
`

export async function GET() {
    const posts = await client.fetch(query)
    return NextResponse.json(posts)
}
