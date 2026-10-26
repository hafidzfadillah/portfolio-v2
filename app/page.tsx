import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { Contact, Experience, Footer, Recognition, Skills, Work } from "@/components/sections"
import { Reveal } from "@/components/reveal"

// Static page re-rendered daily so the footer year stays current.
export const revalidate = 86400

export default function Home() {
  return (
    <>
      <a
        href="#work"
        className="pill pill-accent sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-20 focus:z-[60]"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <Recognition />
        <Contact />
      </main>
      <Footer />
      <Reveal />
    </>
  )
}
