'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Header from './Header'

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}
const lineAnim = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export default function Hero() {
    return (
        <section
            className="px-6 py-20 md:py-28 bg-cover bg-center bg-no-repeat hero-sect relative"
            style={{ backgroundImage: "url('/images/hero.jpg')", backgroundPosition: "50%", backgroundAttachment: "fixed", minHeight: "990px" }}
        >
            <Header />
            <div className='container mx-auto px-6 relative lg:mt-0 mt-32'>
                <div className="grid md:grid-cols-2 items-center gap-8 relative">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="space-y-6 text-center"
                    >
                        <motion.h1
                            variants={lineAnim}
                            className="text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight font-black"
                        >
                            Words that think and move
                        </motion.h1>

                        <motion.p
                            variants={lineAnim}
                            className="text-lg text-white leading-relaxed"
                        >
                            I write essays, articles, and stories shaped by real experience. <br />
                            Each piece is built with clarity, rhythm, and intent. <br />
                            The goal is simple: make ideas land and linger. <br />
                            Writing that stays with the reader.
                        </motion.p>

                        <motion.div variants={lineAnim} className="flex items-center justify-center gap-4">
                            <Link
                                href="/blog"
                                className="inline-block px-6 py-3 rounded-md border border-slate-700 text-slate-200 hover:bg-white/5 transition"
                            >
                                Read blog
                            </Link>
                        </motion.div>
                    </motion.div>
                    <div className="lg:hidden flex justify-center">
                        <div className="relative w-[320px] h-[420px] rounded-3xl bg-neutral-800 p-3">
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
                        <div className="relative z-11 text-white w-[460px] h-[585px] min-w-0 min-h-0 max-w-none max-h-none opacity-100 transform translate-x-0 translate-y-0 origin-center visible">
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg" style={{ zIndex: 10 }}>
                                <Image
                                    src="/images/hero-pic.jpg"
                                    alt="editorial visual"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="grayscale transition duration-500 hover:grayscale-0"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                    <div className="absolute hidden lg:block pointer-events-auto left-[626px] top-[300px] z-9 translate-x-[21.575px] translate-y-[-2.375px] visible perspective-[601px]">
                        <div className="absolute block overflow-hidden origin-center translate-x-0 translate-y-0 transform">
                            <div className="z-9 text-white w-[406px] h-[406px] min-w-0 min-h-0 max-w-none max-h-none opacity-100 origin-center translate-x-0 translate-y-0 transform visible">
                                <Image
                                    src="/images/pattern-box.png"
                                    alt="editorial visual"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="relative w-full h-auto"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                    <div className="absolute hidden lg:block pointer-events-auto left-[894px] top-[250px] z-10 translate-x-[17.26px] translate-y-[-1.9px] visible perspective-[601px]">
                        <div className="absolute block overflow-hidden origin-center translate-x-0 translate-y-0 transform">
                            <div className="z-10 cursor-pointer text-white w-[406px] h-[406px] min-w-0 min-h-0 max-w-none max-h-none opacity-100 origin-center translate-x-0 translate-y-0 transform visible">
                                <Image
                                    src="/images/box.png"
                                    alt="editorial visual"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="relative w-full h-auto"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
