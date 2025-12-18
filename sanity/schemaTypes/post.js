export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'author' }],
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'category' }],
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'subcategory',
            title: 'Subcategory',
            type: 'string',
            description: 'Optional (matches category subcategories)',
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'tag' }] }],
        },
        {
            name: 'publishedAt',
            title: 'Publish Date',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
        },
        {
            name: 'mainImage',
            title: 'Hero Image',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'body',
            title: 'Content',
            type: 'array',
            of: [
                { type: 'block' },
                {
                    type: 'image',
                    options: { hotspot: true },
                },
            ],
        },
        {
            name: 'featured',
            title: 'Featured Post',
            type: 'boolean',
            initialValue: false,
        },
    ],
}
