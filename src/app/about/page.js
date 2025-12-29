'use client'

import Header from '@/components/Header'
import Image from 'next/image'

export default function About() {
    return (
        <div className="text-slate-800 bg-white">
            {/* HERO */}
            <section
                className="relative px-6 py-20 md:py-28 bg-cover bg-center bg-no-repeat breadcrumb"
                style={{
                    backgroundImage: "url('/images/hero-pic.jpg')",
                    backgroundAttachment: 'fixed',
                    minHeight: '550px',
                }}
            >
                <div className="absolute inset-0 bg-black/55" />
                <Header />

                <div className="relative max-w-6xl mx-auto flex flex-col items-center justify-center text-center h-full mt-32 text-white">
                    <h1 className="text-5xl md:text-6xl font-bold">ABOUT</h1>

                    <nav aria-label="Breadcrumb" className="mt-4 text-sm">
                        <ol className="flex items-center gap-2">
                            <li>
                                <a href="/" className="text-lg hover:underline">
                                    Home
                                </a>
                            </li>
                            <li aria-hidden className="text-lg">»</li>
                            <li className="font-medium text-lg">About</li>
                        </ol>
                    </nav>
                </div>
            </section>

            {/* ABOUT CONTENT */}
            <section className="mx-auto max-w-6xl px-6 py-24">
                <div className="grid lg:grid-cols-[5fr_7fr] gap-20 items-start">

                    {/* LEFT CONTENT */}
                    <div>
                        <div className="max-w-xl">
                            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                                Who I am
                            </h2>

                            <p className="text-lg leading-relaxed mb-4">
                                Abiola Oyetunde is a reflective storyteller, technical writer, copywriting specialist, and author driven by clarity, curiosity, and honest storytelling. My work focuses on clear, intentional stories that explore human experience, personal growth, creativity, and everyday moments that shape how we think and live.
                            </p>

                            <p className="text-lg leading-relaxed mb-4">
                                My writing spans long-form content, thoughtful copy, technical writing, and screenwriting, shaped by years of professional practice and real-world application. I value clear thinking and investing consistently in learning through industry workshops and training to refine my craft.
                                Writing, to me, is not noise.
                            </p>

                            <p className="text-lg leading-relaxed mb-4">
                                It is a deliberate act —translating complex ideas into clear, easy, simple language that improves understanding and user experience.
                                This platform is a portfolio space, offering an overview of my work, experience, and writing approach.
                            </p>
                        </div>

                        {/* FEATURES */}
                        <div className="grid sm:grid-cols-3 gap-10 pt-10 mt-12 border-t border-gray-200">
                            <div>
                                <span className="inline-flex items-center justify-center w-12 h-12 border border-black text-lg font-semibold mb-4">
                                    01
                                </span>
                                <h4 className="text-sm font-semibold uppercase mb-2">
                                    Thoughtful Writing
                                </h4>
                                <p className="text-sm text-gray-600">
                                    Carefully developed ideas, written with depth, clarity, and purpose.
                                </p>
                            </div>

                            <div>
                                <span className="inline-flex items-center justify-center w-12 h-12 border border-black text-lg font-semibold mb-4">
                                    02
                                </span>
                                <h4 className="text-sm font-semibold uppercase mb-2">
                                    Editorial Precision
                                </h4>
                                <p className="text-sm text-gray-600">
                                    Strong structure, clean language, and respect for the reader’s attention.
                                </p>
                            </div>

                            <div>
                                <span className="inline-flex items-center justify-center w-12 h-12 border border-black text-lg font-semibold mb-4">
                                    03
                                </span>
                                <h4 className="text-sm font-semibold uppercase mb-2">
                                    Original Voice
                                </h4>
                                <p className="text-sm text-gray-600">
                                    Writing that sounds human, grounded, and unmistakably personal.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="hidden lg:block sticky top-32">
                        <div className="relative w-full h-[620px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/hero-pic.jpg"
                                alt="editorial visual"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* MOBILE IMAGE */}
                    <div className="lg:hidden">
                        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/hero-pic.jpg"
                                alt="editorial visual"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
