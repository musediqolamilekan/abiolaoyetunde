'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionHeading from './SectionHeading'

export default function BetweenHeroText() {
    return (
        <section className="text-white flex justify-center items-center">
            <div className="max-w-6xl mx-auto px-4 lg:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold leading-tight">
                        The voice behind the stories
                    </h2>

                    <p className="mt-6 text-black text-lg leading-relaxed">
                                I write from lived moments and quiet reflections, shaped by work across global audiences and contexts.
                            </p>

                            <p className="mt-6 text-black text-lg leading-relaxed">
                                My writing blends personal insight with professional experience, developed through collaborations with major companies and names in the US, UK, Canada, Germany, China, Philippines, New Zealand, Australia, and beyond as well as working for one of the most viewed financial experts on Quora.
                            </p>
                            <p className="mt-6 text-black text-lg leading-relaxed">
                                The words read like a conversation—clear, grounded, and attentive to meaning.
                            </p>
                            <p className="mt-6 text-black text-lg leading-relaxed">
                                This space brings together essays, short fiction, travel notes, late-night reflections, and practical guides shaped by real-world experience.
                            </p>
                            <p className="mt-6 text-black text-lg leading-relaxed">
                                Read for company, for insight, or simply for the quite pleasure of a well-told moment.
                            </p>
                </motion.div>
            </div>
        </section>
    )
}
