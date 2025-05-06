"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TechSkillIcon } from "@/components/tech-skill-icon"
import { cn } from "@/lib/utils"

interface SkillsCarouselProps {
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
  "REST API",
  "GraphQL",
  "Dart",
]

export function SkillsCarousel({ className }: SkillsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(5)
  const containerRef = useRef<HTMLDivElement>(null)

  // Determine how many items to show based on container width
  useEffect(() => {
    const updateVisibleItems = () => {
      if (!containerRef.current) return

      const containerWidth = containerRef.current.offsetWidth

      if (containerWidth < 400) {
        setVisibleItems(2)
      } else if (containerWidth < 640) {
        setVisibleItems(3)
      } else if (containerWidth < 768) {
        setVisibleItems(4)
      } else {
        setVisibleItems(5)
      }
    }

    updateVisibleItems()
    window.addEventListener("resize", updateVisibleItems)

    return () => {
      window.removeEventListener("resize", updateVisibleItems)
    }
  }, [])

  const totalSlides = Math.ceil(skills.length / visibleItems)
  const maxIndex = skills.length - visibleItems

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - visibleItems, 0))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + visibleItems, maxIndex))
  }

  const visibleSkills = skills.slice(currentIndex, currentIndex + visibleItems)

  return (
    <div className={cn("relative", className)} ref={containerRef}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">Technical Skills</h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-8 w-8"
            onClick={goToPrevious}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-8 w-8"
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out gap-4 justify-center"
          style={{ transform: `translateX(0)` }}
        >
          {visibleSkills.map((skill, index) => (
            <div key={`${skill}-${index}`} className="flex-shrink-0" style={{ width: `calc(100% / ${visibleItems})` }}>
              <TechSkillIcon name={skill} />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-4 gap-1">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === Math.floor(currentIndex / visibleItems)
                ? "w-4 bg-emerald-600"
                : "w-2 bg-zinc-300 dark:bg-zinc-700"
            }`}
            onClick={() => setCurrentIndex(index * visibleItems)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
