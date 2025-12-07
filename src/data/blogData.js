// data/blogData.js
// Core blog categories, subcategories, and example posts.
// Keep this file as the single source of truth for categories, tags and example posts.

export const categories = [
    {
        id: 'travel',
        title: 'Travel & Adventures',
        purpose: 'Take readers on your journeys — real, raw, and inspiring.',
        subcategories: [
            'My Travel Stories',
            'City & Culture Reviews',
            'Travel Tips',
        ],
    },
    {
        id: 'lifestyle',
        title: 'Lifestyle & Real Talk',
        purpose: 'Share thoughts, self-growth, and relatable life moments.',
        subcategories: [
            'Personal Growth',
            'Adulting & Life Abroad',
            'Heart Talks',
        ],
    },
    {
        id: 'entertainment',
        title: 'Entertainment & Pop Culture',
        purpose: 'Light, fun, and engaging takes on what’s trending.',
        subcategories: [
            'Movies & Series Reviews',
            'Music & Vibes',
            'Celebrity & Culture Talk',
        ],
    },
    {
        id: 'bedtime',
        title: 'Bedtime Stories',
        purpose: 'Juicy and emotional short stories for nighttime reading.',
        subcategories: ['Love & Romance', 'The "Juicy" Corner', 'Midnight Reflections'],
    },
    {
        id: 'creative',
        title: 'Creative Corner',
        purpose: 'A home for screenwriting, short stories, and creative lessons.',
        subcategories: ['Behind the Script', "Writer's Journal", 'Short Originals'],
    },
    {
        id: 'tech',
        title: 'Technology & Digital Life',
        purpose: 'Help readers adapt to modern work, creativity and tools.',
        subcategories: [
            'Freelancing & Remote Work Tools',
            'Tech for Creatives',
            'Digital Lifestyle & Trends',
            'AI & The Future of Work',
        ],
    },
]

// Example posts — expand with real content or fetch from a CMS later.
export const posts = [
    {
        id: 'ibenobeach-2025',
        title: 'A Nigerian at Ibeno Beach: Why That Trip Changed Me',
        category: 'travel',
        subcategory: 'My Travel Stories',
        tags: ['Ibeno', 'Beach', 'Reflection'],
        date: '2025-03-12',
        excerpt: 'A raw note on a day at Ibeno that shifted how I see home and possibility.',
        // img: '/images/posts/ibeno.jpg',
        gradient:
            'bg-[radial-gradient(80%_80%_at_30%_20%,#fbcfe8,transparent),radial-gradient(80%_80%_at_70%_80%,#fde68a,transparent)]',
        slug: 'a-nigerian-at-ibeno-beach',
    },
    {
        id: 'life-enfield-hatfield',
        title: 'Life in Enfield vs Hatfield: Two UK Cities, Two Different Vibes',
        category: 'travel',
        subcategory: 'City & Culture Reviews',
        tags: ['UK', 'Cities', 'Culture'],
        date: '2025-05-01',
        excerpt: 'A practical, honest comparison for anyone moving between these two towns.',
        // img: '/images/posts/enfield-hatfield.jpg',
        gradient:
            'bg-[radial-gradient(80%_80%_at_30%_20%,#93c5fd,transparent),radial-gradient(80%_80%_at_70%_80%,#a7f3d0,transparent)]',
        slug: 'life-in-enfield-vs-hatfield',
    },
    {
        id: 'kindness-changed-my-day',
        title: 'The Kindness That Changed My Day',
        category: 'lifestyle',
        subcategory: 'Personal Growth',
        tags: ['Reflection', 'Kindness'],
        date: '2025-02-10',
        excerpt: 'A short memory about a small act and the ripple it made in my week.',
        // img: '/images/posts/kindness.jpg',
        gradient:
            'bg-[radial-gradient(80%_80%_at_30%_20%,#fef3c7,transparent),radial-gradient(80%_80%_at_70%_80%,#fbcfe8,transparent)]',
        slug: 'the-kindness-that-changed-my-day',
    },
    {
        id: '5-nigerian-movies',
        title: '5 Nigerian Movies That Deserve Global Recognition',
        category: 'entertainment',
        subcategory: 'Movies & Series Reviews',
        tags: ['Nollywood', 'Cinema', 'Reviews'],
        date: '2025-04-04',
        excerpt: 'My picks of Nigerian films with the storytelling and craft to cross borders.',
        // img: '/images/posts/nollywood-picks.jpg',
        gradient:
            'bg-[radial-gradient(80%_80%_at_30%_20%,#c7d2fe,transparent),radial-gradient(80%_80%_at_70%_80%,#fef08a,transparent)]',
        slug: '5-nigerian-movies-global-recognition',
    },
    {
        id: 'the-stranger-in-summer',
        title: 'The Stranger I Met in Summer',
        category: 'bedtime',
        subcategory: 'Love & Romance',
        tags: ['Short Story', 'Romance'],
        date: '2025-06-08',
        excerpt: 'A short, late-night story about a meeting that felt like fate.',
        // img: '/images/posts/stranger-summer.jpg',
        gradient:
            'bg-[radial-gradient(80%_80%_at_30%_20%,#fbcfe8,transparent),radial-gradient(80%_80%_at_70%_80%,#fecaca,transparent)]',
        slug: 'the-stranger-i-met-in-summer',
    },
    {
        id: '5-free-tools',
        title: '5 Free Tools That Made Freelancing Easier for Me',
        category: 'tech',
        subcategory: 'Freelancing & Remote Work Tools',
        tags: ['Freelance', 'Tools', 'Productivity'],
        date: '2025-01-20',
        excerpt: 'Practical tools I used to streamline work, tracking and delivery as a remote writer.',
        // img: '/images/posts/tools.jpg',
        gradient:
            'bg-[radial-gradient(80%_80%_at_30%_20%,#67e8f9,transparent),radial-gradient(80%_80%_at_70%_80%,#a7f3d0,transparent)]',
        slug: '5-free-tools-freelancing',
    },
]
