import Image from "next/image"
import { DetailsDialog } from "@/components/details-dialog"
import { Links, ProjectDetail, Stack } from "@/components/project-detail"
import type { Project } from "@/content/site"

export function ProjectCard({ project }: { project: Project }) {
  const { title, label, summary, stack, links, image, featured, small, current } = project

  const visual = image ? (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes={featured ? "(min-width: 1024px) 680px, 100vw" : "(min-width: 768px) 560px, 100vw"}
      className="h-auto w-full rounded-frame border border-hairline"
    />
  ) : small ? null : (
    // No screenshot (client confidentiality or not yet available): a typographic composition instead.
    <div aria-hidden className="flex aspect-[16/9] flex-col justify-between overflow-hidden rounded-frame bg-sunken p-5 [container-type:inline-size]">
      <span className="label">{stack.join(" · ")}</span>
      {/* Non-breaking hyphen keeps "E-catalogue" on one line. */}
      <span className="display text-[clamp(32px,13cqw,80px)] leading-[0.85]">{title.replace("-", "\u2011")}</span>
    </div>
  )

  return (
    // Reveal on the wrapper so its transition doesn't fight the card's hover transition.
    <div data-reveal className={featured ? "md:col-span-2" : undefined}>
    <article
      className={`card flex h-full flex-col gap-6 p-6 transition-transform duration-200 ease-[var(--ease-out)] hover:-translate-y-0.5 md:p-8 ${
        featured ? "lg:grid lg:grid-cols-[1.5fr_1fr] lg:items-center lg:gap-10" : ""
      }`}
    >
      {visual}
      <div className="flex flex-col gap-4">
        <p className="label flex items-center gap-2">
          {current && <span className="status-dot" aria-hidden />}
          {label}
        </p>
        <h3 className={`font-semibold tracking-[-0.02em] text-ink ${small ? "text-xl" : "text-2xl md:text-[28px]"}`}>
          {title}
        </h3>
        {summary.map((p) => (
          <p key={p} className="text-[15px] leading-relaxed">
            {p}
          </p>
        ))}
        <Stack items={stack} />
        {(project.highlights || links) && (
          <div className="flex flex-wrap gap-2">
            {project.highlights && (
              <DetailsDialog label="Details" title={title}>
                <ProjectDetail project={project} />
              </DetailsDialog>
            )}
            <Links items={links} />
          </div>
        )}
      </div>
    </article>
    </div>
  )
}
