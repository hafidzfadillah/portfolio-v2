import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { Link, Project } from "@/content/site"

export function Stack({ items }: { items: string[] }) {
  if (items.length === 0) return null
  return (
    <ul aria-label="Technologies" className="flex flex-wrap gap-2">
      {items.map((s) => (
        <li key={s} className="chip">
          {s}
        </li>
      ))}
    </ul>
  )
}

export function Links({ items }: { items?: Link[] }) {
  if (!items?.length) return null
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((l) => (
        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="pill min-h-10 px-4 text-sm">
          {l.label} <ArrowUpRight aria-hidden className="h-4 w-4" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ))}
    </div>
  )
}

/** Full write-up of one project. Used inside <DetailsDialog>, but works anywhere (e.g. a future /projects/[id] page). */
export function ProjectDetail({ project }: { project: Project }) {
  const { title, label, summary, highlights, stack, links, image, current } = project
  return (
    <article className="flex flex-col gap-5">
      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 768px) 656px, calc(100vw - 80px)"
          className="h-auto w-full rounded-frame border border-hairline"
        />
      )}
      <p className="label flex items-center gap-2 pr-12">
        {current && <span className="status-dot" aria-hidden />}
        {label}
      </p>
      <h2 className="display -mt-1 text-[clamp(44px,8vw,72px)]">{title}</h2>
      {summary.map((p) => (
        <p key={p} className="text-[17px] leading-relaxed">
          {p}
        </p>
      ))}
      {highlights && (
        <div className="border-t border-hairline pt-5">
          <h3 className="label">Highlights</h3>
          <ul className="mt-3 flex flex-col gap-2">
            {highlights.map((h) => (
              <li key={h} className="flex gap-3 text-[15px] leading-relaxed">
                <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden />
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}
      <Stack items={stack} />
      <Links items={links} />
    </article>
  )
}
