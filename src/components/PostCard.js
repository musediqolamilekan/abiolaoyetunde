'use client'
import Image from 'next/image'

export default function PostCard({ item }) {
    return (
        <a
            href={`/blog/${item.slug}`}
            className="group block bg-transparent rounded-xl overflow-hidden"
        >
            <div className="relative rounded-xl overflow-hidden">
                <div className="relative h-[220px] md:h-[260px] lg:h-60 w-full">
                    {item.img ? (
                        <Image
                            src={item.img}
                            alt={item.title}
                            fill
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 filter grayscale contrast-90 group-hover:grayscale-0"
                            priority={false}
                        />
                    ) : (
                        <div className={`absolute inset-0 ${item.gradient}`} />
                    )}
                    <div className="absolute inset-0 bg-[#01a2bb]/55 transition-opacity duration-400 group-hover:bg-black/10" />
                    <div className="absolute left-4 top-4 z-10">
                        <span className="inline-block text-xs font-medium uppercase tracking-wider text-slate-200 bg-black/40 px-3 py-1 rounded">
                            {findCategoryTitle(item.category)}
                        </span>
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#01a2bb] transition-colors">
                        {item.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-400 line-clamp-3">
                        {item.excerpt}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags?.map((t) => (
                            <span
                                key={t}
                                className="text-xs px-2 py-1 bg-neutral-800 text-slate-300 rounded-md"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between text-xs text-gray-300">
                        <span>{formatDate(item.date)}</span>
                        <span className="opacity-80">{item.subcategory}</span>
                    </div>
                </div>
            </div>
        </a>
    )
}

// small helpers kept here to avoid extra imports
function findCategoryTitle(catId) {
    const map = {
        travel: 'Travel',
        lifestyle: 'Lifestyle',
        entertainment: 'Entertainment',
        bedtime: 'Bedtime',
        creative: 'Creative',
        tech: 'Tech',
    }
    return map[catId] ?? catId
}

function formatDate(d) {
    try {
        const dt = new Date(d)
        return dt.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
    } catch {
        return d
    }
}
