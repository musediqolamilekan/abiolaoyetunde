export default {
    name: 'tag',
    title: 'Tag',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Tag Name',
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
    ],
}
