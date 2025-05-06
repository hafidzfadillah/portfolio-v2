"use client"

import { useRef, useEffect } from "react"
import { TechSkillIcon } from "@/components/tech-skill-icon"

interface AutoScrollingSkillsProps {
  className?: string
}

const skills = [
  "Kotlin",
  "Java",
  "Flutter",
  "Firebase",
  "MySQL",
  "Laravel",
  "Python",
  "Android",
  "Git",
]

export function AutoScrollingSkills({ className }: AutoScrollingSkillsProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const duplicatedSkills = [...skills, ...skills] // Duplicate skills for seamless scrolling

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let startTime: number | null = null
    const duration = 30000 // Time to complete one full scroll (ms)

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = (elapsed % duration) / duration

      // Calculate scroll position
      const totalWidth = scrollContainer.scrollWidth / 2
      const newPosition = progress * totalWidth

      // Apply scroll position
      scrollContainer.scrollLeft = newPosition

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className={`${className} overflow-hidden`}>
      <h2 className="text-3xl font-bold text-center mb-10">Technical Skills</h2>

      <div
        ref={scrollRef}
        className="flex overflow-x-hidden pointer-events-none"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
        }}
      >
        <div className="flex gap-8 px-4">
          {duplicatedSkills.map((skill, index) => (
            <div key={`${skill}-${index}`} className="flex-shrink-0 w-32">
              <TechSkillIcon name={skill} />
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar for Chrome, Safari and Opera */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
