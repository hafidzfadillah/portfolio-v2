"use client"
import Image from "next/image"
import { X, ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export type Project = {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  badges: string[]
  award?: string
  demoUrl?: string
  githubUrl?: string
  features?: string[]
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
  onExternalLinkClick?: (url: string, type: string, name: string) => void
}

export function ProjectModal({ project, isOpen, onClose, onExternalLinkClick }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white dark:bg-zinc-900">
        <div className="relative h-64 md:h-80 w-full">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-contain bg-white dark:bg-zinc-800"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          {project.award && (
            <div className="absolute bottom-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {project.award}
            </div>
          )}
        </div>

        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          </DialogHeader>

          <div className="mt-4 space-y-6">
            <p className="text-zinc-600 dark:text-zinc-400">{project.longDescription || project.description}</p>

            {project.features && project.features.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.badges.map((badge, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              {project.demoUrl && (
                <Button
                  className="bg-emerald-600 hover:bg-emerald-700"
                  onClick={() => onExternalLinkClick?.(project.demoUrl!, "demo", `${project.title} Demo`)}
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="outline"
                  onClick={() => onExternalLinkClick?.(project.githubUrl!, "github", `${project.title} GitHub`)}
                >
                  <Github className="mr-2 h-4 w-4" /> View Code
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
