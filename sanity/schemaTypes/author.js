export default {
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Full Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'image',
            title: 'Profile Image',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'text',
            rows: 4,
        },
        {
            name: 'isOwner',
            title: 'Site Owner (Abiol)',
            type: 'boolean',
            initialValue: false,
            description: 'Mark true for Abiol Oyetunde',
        },
    ],
}
