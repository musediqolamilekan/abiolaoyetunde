'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

export default function About() {
    return (
        <section className="relative overflow-hidden mt-32 bg-neutral-800">
            <div className="absolute right-0 top-0 lg:w-2/5 h-40 lg:h-64 xl:h-96 hidden md:block">
                        <Image
                            src="/images/hero-visual.jpg"
                            alt="portrait"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
            <div className="">
                <div className="relative max-w-6xl mx-auto">
                    <div className="lg:max-w-3xl w-full relative">
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative lg:px-6 px-4 py-10 shadow-sm"
                            style={{ zIndex: 20 }}
                        >
                            <SectionHeading number="01" title="About Me" />
                            <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-heading font-light leading-tight">
                                <span className="mr-3">I</span>
                                <span className="font-black">advise</span>
                                <span className="ml-3">companies
                                    and NGOs in initiatives
                                    and campaigns</span>
                            </h2>

                            <p className="mt-6 text-white max-w-xl leading-relaxed">
                                I help teams and NGOs plan bold campaigns and clear initiatives.
                                I write strategy, shape voice, and craft stories that move people.
                            </p>

                            <div className="mt-8 space-y-6">
                                <p className="text-lg text-white leading-relaxed">
                                    I plan content that has a goal. I work with leaders to map out
                                    messages, design campaign flow, and write pieces that reach
                                    their audience. My work makes complex ideas simple and keeps
                                    readers engaged.
                                </p>

                                <p className="text-lg text-white leading-relaxed">
                                    I take briefs, build plans, and write the work. I also coach
                                    teams on voice and review content to ensure clarity and impact.
                                </p>
                            </div>

                            <div className="mt-10">
                                <a
                                    href="/contact"
                                    className="inline-block px-6 py-3 border bg-[#01a2bb] border-slate-800 text-sm"
                                >
                                    Get in touch
                                </a>
                            </div>
                        </motion.div>

                        <div className="absolute right-0 top-24 lg:top-28 w-8 lg:w-12 h-64 lg:h-96 bg-[#01a2bb]" style={{ transform: 'translateX(50%)' }} />
                    </div>
                </div>
            </div>
        </section>
    )
}
