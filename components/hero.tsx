import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { site } from "@/content/site"

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden px-4 pb-20 pt-28 sm:px-8 md:pb-28 md:pt-36">
      {/* The single light source: a soft accent wash, CSS only. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[20%] -top-[30%] -z-10 aspect-square w-[min(1100px,120vw)] rounded-full"
        style={{
          background: "radial-gradient(closest-side, var(--accent), transparent)",
          opacity: "var(--glow-opacity)",
        }}
      />

      {/* Sized from measured glyph widths: "FADILLAH" ≈ 3.87em (two lines), full name ≈ 7.1em (one line). */}
      <h1 className="display text-[calc((100vw-2rem)/3.9)] sm:text-[min(calc((100vw-4rem)/4.05),200px)] lg:text-[min(calc((100vw-4rem)/7.3),246px)]">
        <span className="block lg:inline">{site.firstName}</span>{" "}
        <span className="block lg:inline">{site.lastName}</span>
      </h1>

      <div className="mx-auto mt-10 grid max-w-page gap-10 md:mt-16 md:grid-cols-[1fr_minmax(0,360px)] md:items-end">
        <div className="max-w-xl">
          <p className="label flex items-center gap-2">
            <span className="status-dot" aria-hidden />
            {site.title} · {site.experience}
          </p>
          <p className="mt-5 text-[22px] font-medium leading-[1.3] tracking-[-0.01em] text-ink md:text-[28px]">
            {site.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="pill">
              Contact me
            </a>
            <a href={site.cv} download className="pill">
              Download CV <ArrowDown aria-hidden className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-card bg-sunken max-md:max-h-[460px]">
          <Image
            src={site.photo.src}
            alt={site.photo.alt}
            fill
            priority
            sizes="(min-width: 768px) 360px, calc(100vw - 32px)"
            className="object-cover object-[40%_60%]"
          />
        </div>
      </div>
    </section>
  )
}
