"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Download } from "lucide-react"

interface NavbarProps {
  onDownloadResume?: () => void
}

export function Navbar({ onDownloadResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-emerald-600">
            Hafidz<span className="text-zinc-800 dark:text-white">Fadillah</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#about"
              className="text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
            >
              Contact
            </Link>
            <ThemeToggle />
            <Button className="bg-emerald-600 hover:bg-emerald-700 rounded-full" onClick={onDownloadResume}>
              <Download className="mr-2 h-4 w-4" /> Resume
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="rounded-full">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 w-full rounded-full"
              onClick={() => {
                onDownloadResume?.()
                setIsMenuOpen(false)
              }}
            >
              <Download className="mr-2 h-4 w-4" /> Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
