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

export const posts = [
    {
        id: 'ibenobeach-2025',
        title: 'A Nigerian at Ibeno Beach: Why That Trip Changed Me',
        category: 'travel',
        subcategory: 'My Travel Stories',
        tags: ['Ibeno', 'Beach', 'Reflection'],
        date: '2025-03-12',
        excerpt: 'A raw note on a day at Ibeno that shifted how I see home and possibility.',
        img: '/images/blog/blog-1.jpg',
        gradient:
            'bg-[radial-gradient(80%_80%_at_30%_20%,#fbcfe8,transparent),radial-gradient(80%_80%_at_70%_80%,#fde68a,transparent)]',
        slug: 'a-nigerian-at-ibeno-beach',
        content: `
            <p>I had heard about Ibeno Beach long before I ever stood on its sand. Stories of endless shoreline, quiet mornings, and a calm that felt different from city life. But nothing prepared me for what that day did to my perspective.</p>

            <p>Standing there, watching the waves arrive without hurry, I realised how rarely I allow myself to slow down. Life had become a constant loop of deadlines, expectations, and plans for what comes next. At Ibeno, none of that mattered.</p>

            <blockquote>
                <q>Sometimes, a place does not change you by being extraordinary, but by reminding you who you were before the noise.</q>
            </blockquote>

            <p>That trip reminded me that beauty exists close to home. That reflection does not always require travel across borders. Sometimes, it takes a quiet beach, a long walk, and permission to sit with your thoughts.</p>
        `,
    },

    {
        id: 'life-enfield-hatfield',
        title: 'Life in Enfield vs Hatfield: Two UK Cities, Two Different Vibes',
        category: 'travel',
        subcategory: 'City & Culture Reviews',
        tags: ['UK', 'Cities', 'Culture'],
        date: '2025-05-01',
        excerpt: 'A practical, honest comparison for anyone moving between these two towns.',
        img: '/images/blog/blog-3.jpg',
        gradient:
            'bg-[radial-gradient(80%_80%_at_30%_20%,#93c5fd,transparent),radial-gradient(80%_80%_at_70%_80%,#a7f3d0,transparent)]',
        slug: 'life-in-enfield-vs-hatfield',
        content: `
            <p>Living in Enfield and Hatfield taught me that two places can sit close on a map yet feel worlds apart. Enfield moves fast. It feels busy, layered, and always in motion.</p>

            <p>Hatfield, on the other hand, feels quieter and more contained. It suits people who enjoy predictability and routine. There is comfort in its calm, but also moments where it feels limited.</p>

            <p>The choice between the two depends on what stage of life you are in. If you crave energy, diversity, and movement, Enfield delivers. If peace and structure matter more, Hatfield might feel like home.</p>
        `,
    },

    {
        id: 'kindness-changed-my-day',
        title: 'The Kindness That Changed My Day',
        category: 'lifestyle',
        subcategory: 'Personal Growth',
        tags: ['Reflection', 'Kindness'],
        date: '2025-02-10',
        excerpt: 'A short memory about a small act and the ripple it made in my week.',
        img: '/images/blog/blog-4.jpg',
        gradient:
            'bg-[radial-gradient(80%_80%_at_30%_20%,#fef3c7,transparent),radial-gradient(80%_80%_at_70%_80%,#fbcfe8,transparent)]',
        slug: 'the-kindness-that-changed-my-day',
        content: `
            <p>It was an ordinary day until it wasn’t. I was tired, distracted, and ready to get home. Then a stranger offered help without being asked.</p>

            <p>That small act stayed with me longer than I expected. It softened my mood and changed how I treated people for the rest of the week.</p>

            <blockquote>
                Kindness rarely announces itself. It arrives quietly and leaves a lasting mark.
            </blockquote>

            <p>Moments like that remind me that we influence one another more than we realise, even in passing.</p>
        `,
    },

    {
        id: '5-nigerian-movies',
        title: '5 Nigerian Movies That Deserve Global Recognition',
        category: 'entertainment',
        subcategory: 'Movies & Series Reviews',
        tags: ['Nollywood', 'Cinema', 'Reviews'],
        date: '2025-04-04',
        excerpt: 'My picks of Nigerian films with the storytelling and craft to cross borders.',
        img: '/images/blog/blog-6.jpg',
        gradient:
            'bg-[radial-gradient(80%_80%_at_30%_20%,#c7d2fe,transparent),radial-gradient(80%_80%_at_70%_80%,#fef08a,transparent)]',
        slug: '5-nigerian-movies-global-recognition',
        content: `
            <p>Nigerian cinema has evolved beyond local audiences. Some films now stand confidently on global stages, not because they imitate Hollywood, but because they tell authentic stories well.</p>

            <p>The movies on this list succeed through strong writing, grounded performances, and themes that travel across cultures. They prove that Nollywood’s future is not limited by geography.</p>

            <p>What matters most is honesty. When stories are rooted in truth, people everywhere listen.</p>
        `,
    },

    {
        id: 'the-stranger-in-summer',
        title: 'The Stranger I Met in Summer',
        category: 'bedtime',
        subcategory: 'Love & Romance',
        tags: ['Short Story', 'Romance'],
        date: '2025-06-08',
        excerpt: 'A short, late-night story about a meeting that felt like fate.',
        img: '/images/blog/blog-7.jpg',
        gradient:
            'bg-[radial-gradient(80%_80%_at_30%_20%,#fbcfe8,transparent),radial-gradient(80%_80%_at_70%_80%,#fecaca,transparent)]',
        slug: 'the-stranger-i-met-in-summer',
        content: `
            <p>We met by accident, or at least that is how it appeared. A conversation that started casually soon felt familiar, as though we had met before.</p>

            <p>Summer nights have a way of making moments feel longer. The laughter, the pauses, the unspoken understanding. It all mattered.</p>

            <p>Some stories are not meant to last forever. They exist to remind us that connection can appear when we least expect it.</p>
        `,
    },

    {
        id: '5-free-tools',
        title: '5 Free Tools That Made Freelancing Easier for Me',
        category: 'tech',
        subcategory: 'Freelancing & Remote Work Tools',
        tags: ['Freelance', 'Tools', 'Productivity'],
        date: '2025-01-20',
        excerpt: 'Practical tools I used to streamline work, tracking and delivery as a remote writer.',
        img: '/images/blog/blog-8.jpg',
        gradient:
            'bg-[radial-gradient(80%_80%_at_30%_20%,#67e8f9,transparent),radial-gradient(80%_80%_at_70%_80%,#a7f3d0,transparent)]',
        slug: '5-free-tools-freelancing',
        content: `
            <p>Freelancing became easier when I stopped chasing complex tools and focused on what actually worked.</p>

            <p>The tools I rely on are simple, reliable, and free. They help me track tasks, communicate clearly, and deliver work without stress.</p>

            <p>Good tools do not replace discipline, but they remove friction. That difference matters more than most people realise.</p>
        `,
    },

    /* ---------- NEW ARTICLES ---------- */

    {
        id: 'writing-discipline',
        title: 'How I Built a Writing Discipline Without Burning Out',
        category: 'lifestyle',
        subcategory: 'Writing Life',
        tags: ['Writing', 'Routine', 'Focus'],
        date: '2025-06-22',
        excerpt: 'What helped me stay consistent without turning writing into pressure.',
        img: '/images/blog/blog-9.jpg',
        gradient:
            'bg-[radial-gradient(80%_80%_at_30%_20%,#e9d5ff,transparent),radial-gradient(80%_80%_at_70%_80%,#fde68a,transparent)]',
        slug: 'writing-discipline-without-burnout',
        content: `
            <p>For a long time, I believed discipline meant forcing myself to write every day. That belief nearly made me quit.</p>

            <p>What worked instead was creating space. Short sessions. Clear boundaries. Writing when my mind was ready, not when guilt demanded it.</p>

            <blockquote>
                Consistency grows from respect for your energy, not punishment.
            </blockquote>

            <p>Writing became sustainable once I treated it as a craft, not a test of endurance.</p>
        `,
    },

    {
        id: 'tech-and-quiet',
        title: 'Why I Protect My Quiet in a Tech-Driven World',
        category: 'tech',
        subcategory: 'Digital Life',
        tags: ['Focus', 'Technology', 'Mindfulness'],
        date: '2025-07-02',
        excerpt: 'A personal reflection on attention, noise, and choosing silence.',
        img: '/images/blog/blog-10.jpg',
        gradient:
            'bg-[radial-gradient(80%_80%_at_30%_20%,#bbf7d0,transparent),radial-gradient(80%_80%_at_70%_80%,#bae6fd,transparent)]',
        slug: 'protecting-quiet-in-tech-world',
        content: `
            <p>Technology connects us, but it also competes for attention relentlessly. Notifications, feeds, and endless updates make silence feel uncomfortable.</p>

            <p>I learned that protecting quiet is not rejection of technology. It is choosing how and when to engage.</p>

            <p>Quiet gives clarity. And clarity improves everything I create.</p>
        `,
    },
]
