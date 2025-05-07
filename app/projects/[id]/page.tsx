"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { FadeIn, FadeInLeft, FadeInRight } from "@/components/framer-animations"
import { trackEvent } from "@/components/analytics"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { projects } from "@/data/projects"

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Find the project with the matching ID
    const foundProject = projects.find((p) => p.id === params.id)

    if (foundProject) {
      setProject(foundProject)
      // Track page view
      trackEvent("view_project_page", "portfolio", foundProject.title)
    } else {
      // If project not found, redirect to projects section
      router.push("/#projects")
    }

    setLoading(false)
  }, [params.id, router])

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.txt"
    link.download = "Hafidz_Fadillah_Resume.txt"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    trackEvent("download_resume", "portfolio", "Resume Downloaded")
  }

  const handleExternalLinkClick = (url: string, type: string, name: string) => {
    trackEvent("click_external_link", type, name)
    window.open(url, "_blank")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950">
        <div className="animate-pulse text-emerald-600">Loading...</div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link href="/#projects">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Navbar onDownloadResume={handleDownloadResume} />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link href="/#projects" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>

          <FadeIn>
            <div className="relative h-64 md:h-96 w-full mb-8 rounded-xl overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
              {project.award && (
                <div className="absolute bottom-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.award}
                </div>
              )}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInLeft className="md:col-span-2">
              <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">{project.longDescription || project.description}</p>

              {project.features && project.features.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                  <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
                    {project.features.map((feature: string, index: number) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-4 mt-8">
                {project.demoUrl && (
                  <Button
                    className="bg-emerald-600 hover:bg-emerald-700"
                    onClick={() => handleExternalLinkClick(project.demoUrl, "demo", `${project.title} Demo`)}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    onClick={() => handleExternalLinkClick(project.githubUrl, "github", `${project.title} GitHub`)}
                  >
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </Button>
                )}
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-md">
                <h2 className="text-xl font-semibold mb-4">Project Details</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Technologies</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.badges.map((badge: string, index: number) => (
                        <Badge key={index} variant="outline" className="text-sm">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {project.year && (
                    <div>
                      <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Year</h3>
                      <p>{project.year}</p>
                    </div>
                  )}

                  {project.client && (
                    <div>
                      <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Client</h3>
                      <p>{project.client}</p>
                    </div>
                  )}

                  {project.role && (
                    <div>
                      <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">My Role</h3>
                      <p>{project.role}</p>
                    </div>
                  )}

                  {project.award && (
                    <div>
                      <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Award</h3>
                      <p>{project.award}</p>
                    </div>
                  )}
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="py-8 px-4 bg-zinc-100 dark:bg-zinc-900">
        <div className="container mx-auto max-w-4xl text-center">
          <Link href="/#projects" className="text-emerald-600 hover:text-emerald-700">
            Back to Projects
          </Link>
          <p className="mt-4 text-sm text-zinc-500">© {new Date().getFullYear()} Hafidz Fadillah</p>
        </div>
      </footer>
    </div>
  )
}
