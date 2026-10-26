import { ArrowDown, ArrowUpRight } from "lucide-react"
import { certifications, experience, projects, recognition, site, skills } from "@/content/site"
import { ProjectCard } from "@/components/project-card"

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="px-4 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-page">
        <header data-reveal className="mb-12 text-center md:mb-16">
          <p className="label">{eyebrow}</p>
          <h2 id={`${id}-title`} className="display mt-4 text-[clamp(56px,9vw,88px)]">
            {title}
          </h2>
        </header>
        {children}
      </div>
    </section>
  )
}

/** Marco-style split: a short statement on the left, cards on the right (desktop). */
function Split({ statement, children }: { statement: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
      <div data-reveal className="lg:sticky lg:top-28 lg:self-start">
        {statement}
      </div>
      <div>{children}</div>
    </div>
  )
}

const statementClass = "text-[22px] font-medium leading-[1.3] tracking-[-0.01em] text-ink md:text-[26px]"

export function Work() {
  return (
    <Section id="work" eyebrow="Projects" title="Selected work">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Section>
  )
}

export function Experience() {
  return (
    <Section id="experience" eyebrow={`${site.experience} · 2020 — Present`} title="Experience">
      <Split
        statement={
          <>
            <p className={statementClass}>Started on Android and Flutter, shipping live products. Now also web and backend.</p>
            <a href={site.cv} download className="pill mt-6">
              Download CV <ArrowDown aria-hidden className="h-4 w-4" />
            </a>
          </>
        }
      >
        <ol data-reveal className="card divide-y divide-hairline px-6 md:px-8">
          {experience.map((r) => (
            <li key={r.company + r.title} className="py-6 md:py-7">
              <p className="label">{r.period}</p>
              <h3 className="mt-2 text-lg font-semibold tracking-[-0.01em] text-ink">{r.title}</h3>
              <p className="text-[15px]">{r.company}</p>
              {r.notes.map((n) => (
                <p key={n} className="mt-2 text-[15px] leading-relaxed text-muted">
                  {n}
                </p>
              ))}
            </li>
          ))}
        </ol>
      </Split>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="Toolbox" title="Skills">
      <Split statement={<p className={statementClass}>Mobile first, with the web, backend and server work to ship end to end.</p>}>
        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((g) => (
            <div key={g.group} data-reveal className="card p-6">
              <h3 className="label">{g.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Split>
    </Section>
  )
}

export function Recognition() {
  return (
    <Section id="recognition" eyebrow="Awards & certifications" title="Recognition">
      <ul className="grid gap-6 md:grid-cols-3">
        {recognition.map((r) => (
          <li key={r.title} data-reveal className="card flex flex-col gap-3 p-6">
            <p className="label">
              {r.issuer} · {r.date}
            </p>
            <h3 className="text-lg font-semibold leading-snug tracking-[-0.01em] text-ink">{r.title}</h3>
          </li>
        ))}
      </ul>
      <div data-reveal className="mt-10 flex flex-col items-center gap-4">
        <h3 className="label">Certifications · {certifications[0].issuer}</h3>
        <ul className="flex flex-wrap justify-center gap-2">
          {certifications.map((c) => (
            <li key={c.title} className="chip">
              {c.title}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export function Contact() {
  return (
    <Section id="contact" eyebrow="Freelance & full-time" title="Let's talk">
      <Split
        statement={
          <p className={statementClass}>
            Have a project that needs shipping, or a live system that needs to be stable? Recruiters and clients: email me
            or grab the CV.
          </p>
        }
      >
        <div data-reveal className="card flex flex-col gap-6 p-6 md:p-8">
          <div>
            <p className="label">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block break-all text-[clamp(20px,3.2vw,30px)] font-semibold tracking-[-0.02em] text-ink underline decoration-accent decoration-2 underline-offset-[6px]"
            >
              {site.email}
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={site.cv} download className="pill">
              Download CV <ArrowDown aria-hidden className="h-4 w-4" />
            </a>
            {site.socials.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="pill">
                {s.label} <ArrowUpRight aria-hidden className="h-4 w-4" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ))}
          </div>
        </div>
      </Split>
    </Section>
  )
}

export function Footer() {
  return (
    <footer className="px-4 pb-10 sm:px-8">
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <a href="#top" className="rounded-sm hover:text-ink">
          Back to top
        </a>
      </div>
    </footer>
  )
}
