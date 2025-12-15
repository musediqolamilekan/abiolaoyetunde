'use client'
import Header from '@/components/Header'
import Image from 'next/image'

export default function About() {
    return (
        <div className="text-slate-800 bg-white">
            {/* HERO */}
            <section
                className="relative px-6 py-20 md:py-28 bg-cover breadcrumb bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/hero-pic.jpg')",
                    backgroundAttachment: 'fixed',
                    minHeight: '550px',
                }}
            >
                <div className="absolute inset-0 bg-black/55" />
                <Header />

                <div className="relative container mx-auto flex flex-col items-center justify-center text-center h-full mt-32 text-white">
                    <h1 className="text-5xl md:text-6xl font-bold">
                        ABOUT
                    </h1>

                    <nav aria-label="Breadcrumb" className="mt-4 text-sm">
                        <ol className="flex items-center gap-2">
                            <li>
                                <a href="/" className="text-lg hover:underline">
                                    Home
                                </a>
                            </li>
                            <li aria-hidden className="text-lg">»</li>
                            <li className="font-medium text-lg">
                                About
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>

            {/* ABOUT CONTENT */}
            <section className="container mx-auto px-6 py-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                            Who We Are
                        </h2>

                        <p className="text-lg leading-relaxed mb-6">
                            I am a writer and author driven by clarity, curiosity, and honest storytelling.
                            My work focuses on ideas that sit quietly beneath the surface, the kind that only
                            reveal themselves when words are handled with care.
                        </p>

                        <p className="text-lg leading-relaxed mb-6">
                            Over the years, I have written essays, articles, and long-form pieces that explore
                            human experience, personal growth, creativity, and the everyday moments that shape
                            how we think and live. I value structure, rhythm, and meaning in equal measure.
                        </p>

                        <p className="text-lg leading-relaxed mb-10">
                            Writing, to me, is not noise. It is a deliberate act. Each sentence is placed with
                            intention, each paragraph designed to guide the reader gently forward without
                            distraction or excess.
                        </p>

                        {/* FEATURES */}
                        <div className="grid sm:grid-cols-3 gap-8 mt-12">
                            <div>
                                <div className="mb-4">
                                    <span className="inline-flex items-center justify-center w-12 h-12 border border-black text-lg font-semibold">
                                        01
                                    </span>
                                </div>
                                <h4 className="text-sm font-semibold uppercase mb-2">
                                    Thoughtful Writing
                                </h4>
                                <p className="text-sm text-gray-600">
                                    Carefully developed ideas, written with depth, clarity, and purpose.
                                </p>
                            </div>

                            <div>
                                <div className="mb-4">
                                    <span className="inline-flex items-center justify-center w-12 h-12 border border-black text-lg font-semibold">
                                        02
                                    </span>
                                </div>
                                <h4 className="text-sm font-semibold uppercase mb-2">
                                    Editorial Precision
                                </h4>
                                <p className="text-sm text-gray-600">
                                    Strong structure, clean language, and respect for the reader’s attention.
                                </p>
                            </div>

                            <div>
                                <div className="mb-4">
                                    <span className="inline-flex items-center justify-center w-12 h-12 border border-black text-lg font-semibold">
                                        03
                                    </span>
                                </div>
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
                    <div className="relative">
                        <div className="lg:hidden flex justify-center">
                            <div className="relative w-full h-[420px] rounded-3xl bg-neutral-800 p-3">
                                <div className="relative w-full h-full rounded-2xl bg-neutral-700 p-3">
                                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
                                        <Image
                                            src="/images/hero-pic.jpg"
                                            alt="editorial visual"
                                            fill
                                            className="object-cover grayscale transition duration-500"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:block hidden overflow-hidden z-15 opacity-[0.9965] transform translate-x-0 translate-y-0 origin-center">
                            <div className="relative z-11 text-white w-[760px] h-[585px] min-w-0 min-h-0 max-w-none max-h-none opacity-100 transform translate-x-0 translate-y-0 origin-center visible">
                                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg" style={{ zIndex: 10 }}>
                                    <Image
                                        src="/images/hero-pic.jpg"
                                        alt="editorial visual"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="transition duration-500"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
