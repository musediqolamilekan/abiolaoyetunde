import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity'

export async function GET() {
    try {
        const categories = await client.fetch(`
      *[_type == "category"] | order(title asc) {
        _id,
        title,
        "id": slug.current,
        description
      }
    `)

        return NextResponse.json(categories)
    } catch (error) {
        console.error('Categories API error:', error)
        return NextResponse.json([], { status: 500 })
    }
}
