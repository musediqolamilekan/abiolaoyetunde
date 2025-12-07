'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}
const lineAnim = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export default function Hero() {
    return (<section className="container mx-auto px-6 py-20 md:py-28"> <div className="grid md:grid-cols-2 items-center gap-8">
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
            <motion.h1
                variants={lineAnim}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-heading leading-[0.95] tracking-tight"
            > <span className="font-light">Looking </span> <span className="italic font-light ml-2">for my next</span>
            </motion.h1>
            <motion.h1
                variants={lineAnim}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-heading leading-[0.9] tracking-tight"
            >
                <span className="font-black block">opportunity</span>
            </motion.h1>

            <motion.h1 variants={lineAnim} className="text-3xl sm:text-4xl md:text-5xl font-heading leading-tight">
                <span className="font-medium">to make </span>
                <span className="italic font-medium">a</span>
                <span className="font-black"> change.</span>
            </motion.h1>

            <motion.h1 variants={lineAnim} className="text-3xl sm:text-4xl md:text-5xl font-heading leading-tight">
                <span className="italic">The </span>

                <span
                    className="inline-block align-middle ml-2 px-2 py-1 -mx-1 rounded-sm"
                    style={{ backgroundColor: '#01a2bb' }}
                >
                    <span className="font-black text-black">digital</span>
                </span>

                <span className="ml-3">way.</span>
            </motion.h1>

            <motion.p
                variants={lineAnim}
                className="mt-6 text-base md:text-lg text-slate-500 max-w-xl"
            >
                I write sharp articles, long-form essays, and short stories that connect.
                My work blends lived experience and clear structure to make readers feel and act.
            </motion.p>

            <motion.div variants={lineAnim} className="mt-6 flex items-center gap-4">
                <Link
                    href="/contact"
                    className="inline-block px-6 py-3 rounded-md bg-[#01a2bb] text-black font-medium shadow-sm"
                >
                    Let’s Connect
                </Link>

                <Link
                    href="/blog"
                    className="inline-block px-6 py-3 rounded-md border border-slate-700 text-slate-200 hover:bg-white/5 transition"
                >
                    Read blog
                </Link>
            </motion.div>
        </motion.div>

        <div className="block">
            <div className="group relative w-full h-80 md:h-96 lg:h-144 rounded-2xl overflow-visible hero__image mt-10 lg:mt-0">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg" style={{ zIndex: 10 }}>
                    <Image
                        src="/images/hero-visual.jpg"
                        alt="editorial visual"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                        priority
                    />
                    <div className="absolute inset-0 bg-[#01a2bb]/55 transition-opacity duration-400 group-hover:bg-black/10" />
                </div>
            </div>
        </div>
    </div>
    </section>
    )
}
