import About from '@/components/About'
import ContactUs from '@/components/ContactUs'
import Hero from '@/components/Hero'
import LatestPosts from '@/components/LatestPosts'
import Section from '@/components/Section'
import Image from 'next/image'


export default function Home() {
  return (
    <div>
      <Hero />
      <section className="mt-16">
        <Section />
        <About />
        <LatestPosts />
        <ContactUs />
      </section>
    </div>
  )
}