'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionHeading from './SectionHeading'

export default function BetweenHeroText() {
    return (
        <section className="text-white flex justify-center items-center">
            <div className="container mx-auto px-4 lg:px-6">
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
                        I write from lived moments and quiet reflections. My work blends
                        experiences from Nigeria and the UK into pieces that read like a
                        conversation. I focus on clear, honest stories that hold feeling and
                        meaning.
                    </p>

                    <p className="mt-4 text-black text-lg leading-relaxed">
                        I write <span className="font-semibold" style={{ color: '#01a2bb' }}>travel notes</span>,{" "}
                        <span className="font-semibold" style={{ color: '#01a2bb' }}>late-night stories</span>,{" "}
                        and <span className="font-semibold" style={{ color: '#01a2bb' }}>practical guides</span> for life abroad.
                        Each piece aims to be welcoming, exact, and human.
                    </p>

                    <p className="mt-4 text-black text-lg leading-relaxed">
                        This space holds essays, short fiction, and honest reflections. Read
                        for company, for insight, or for the plain pleasure of a well-told
                        moment.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
