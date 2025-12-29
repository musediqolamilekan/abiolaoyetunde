'use client'

import Header from '@/components/Header'
import BlogPage from '@/components/BlogPage'

export default function BlogIndex() {
    return (
        <div className="text-slate-200">
            <section
                className="relative px-6 py-20 md:py-28 bg-cover bg-center breadcrumb bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/blogBg.jpg')",
                    backgroundPosition: "50%",
                    backgroundAttachment: "fixed",
                    minHeight: "550px",
                }}
            >
                <div className="absolute inset-0 bg-black/55" />
                <Header />
                <div className="relative max-w-6xl mx-auto flex flex-col items-center justify-center text-center h-full mt-32 text-white">
                    <h1 className="text-5xl md:text-6xl font-bold text-white">
                        BLOG
                    </h1>

                    <nav
                        aria-label="Breadcrumb"
                        className="mt-4 text-sm text-white"
                    >
                        <ol className="flex items-center gap-2">
                            <li>
                                <a href="/" className="text-lg">
                                    Home
                                </a>
                            </li>
                            <li aria-hidden className='text-lg'>»</li>
                            <li className="font-medium text-lg">
                                Blog
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>
            <BlogPage />
        </div>
    )
}
