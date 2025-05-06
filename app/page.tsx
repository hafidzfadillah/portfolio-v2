"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { ContactForm } from "@/components/contact-form"
import { ProjectModal, type Project } from "@/components/project-modal"
import { AutoScrollingSkills } from "@/components/auto-scrolling-skills"
import { FadeIn, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from "@/components/framer-animations"
import { trackEvent } from "@/components/analytics"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Building,
  GraduationCap,
  ArrowRight,
  Award,
  Code,
  Download,
  ExternalLink,
  Moon,
  Sun,
} from "lucide-react"
import { Trophy, Medal, Plus } from "@/components/icons"
import { useTheme } from "next-themes"

// Project data
const projects: Project[] = [
  {
    id: "binabola",
    title: "BinaBola",
    description: "Platform supporting Indonesian youth football with training modules and tracking.",
    longDescription:
      "BinaBola is a comprehensive platform designed to support the improvement of Indonesian youth football. It provides licensed training modules, tracking capabilities, and integration with evaluation systems.",
    image: "/project-images/binabola.png",
    badges: ["Flutter", "Dart", "Firebase", "GPS Tracking", "REST API"],
    award: "Best Entrepreneur Project",
    features: [
      "Licensed Training Module with video tutorials",
      "Running Tracker with performance analytics",
      "Integration with SSB evaluation reporting",
      "Live Local Football Competition Updates",
      "Player profile and progress tracking",
    ],
    demoUrl: "https://binabola.com",
    githubUrl: "https://github.com/hafidzfadillah/binabola",
  },
  {
    id: "fitlife",
    title: "FitLife",
    description: "Lifestyle app tracking diet, workouts, and nutrition with AI trainer-bot Pandan.",
    longDescription:
      "FitLife is a comprehensive health and fitness application that helps users track their diet, workout progress, and detect food nutrition. The app features an AI-powered virtual trainer named Pandan that provides personalized guidance.",
    image: "/project-images/fitlife.png",
    badges: ["Flutter", "Dart", "Firebase", "Machine Learning", "AI", "Computer Vision"],
    award: "2nd Place IIT Competition",
    features: [
      "Personal information questionnaire for customized programs",
      "AI-generated fitness and nutrition plans",
      "Daily login reward system",
      "Comprehensive tracking for food intake, hydration, exercise, and vitality",
      "Food nutrition detection using computer vision",
      "AI pose correction for proper exercise form",
      "Interactive chatbot assistant",
      "In-app reward system for AI features",
    ],
    demoUrl: "https://fitlife-app.com",
    githubUrl: "https://hafidzfadillah/fitlife",
  },
  {
    id: "kspay",
    title: "KSPay Mobile",
    description: "All-in-one payment solution for bills, top-ups, and travel services.",
    longDescription:
      "KSPay Mobile is an all-in-one solution for payments and financial transaction needs. Users can pay bills, top-up credit and data packages, and purchase travel services quickly and securely.",
    image: "/project-images/kspay.png",
    badges: ["Android Native", "Kotlin", "Java", "RESTful API", "Payment Gateway"],
    features: [
      "Topup services for mobile credit, e-money, and gaming vouchers",
      "Payment Point Online Banking for utilities and services",
      "Ticket booking for trains, flights, and shuttle services",
      "Package delivery integration with JNE",
      "Secure transaction processing",
      "Transaction history and reporting",
    ],
    demoUrl: "https://kspay.com",
    githubUrl: "https://github.com/hafidzfadillah/kspay",
  },
  {
    id: "inginbelajar",
    title: "InginBelajar",
    description: "Video-based course app for culinary and marketing learning materials.",
    longDescription:
      "InginBelajar is an online video-based course application focusing on culinary and marketing learning materials. The platform offers a variety of courses with multi-resolution video support and membership options.",
    image: "/project-images/inginbelajar.png",
    badges: ["Flutter", "Dart", "Firebase", "Video Streaming", "Dynamic Links"],
    features: [
      "Online video-based courses with multi-resolution support",
      "Dynamic home-page content controlled via dashboard",
      "Membership subscription system",
      "Course sharing via Firebase dynamic links",
      "Offline viewing capabilities",
      "Progress tracking for enrolled courses",
    ],
    demoUrl: "https://inginbelajar.com",
    githubUrl: "https://github.com/hafidzfadillah/inginbelajar",
  },
  {
    id: "ytanalysis",
    title: "YT Sentiment Analysis",
    description: "Platform analyzing sentiment of YouTube videos based on comments.",
    longDescription:
      "The YouTube Videos Sentiment Analysis platform analyzes the sentiment of YouTube videos based on user comments. It provides insights into audience reception and helps content creators understand viewer sentiment.",
    image: "/project-images/ytanalysis.png",
    badges: ["Python", "Machine Learning", "NLP", "YouTube API", "Data Analysis"],
    features: [
      "Comment extraction from YouTube videos",
      "Sentiment analysis using natural language processing",
      "Visual data representation and insights",
      "Trend analysis over time",
      "Keyword extraction and topic modeling",
    ],
    githubUrl: "https://github.com/hafidzfadillah/yt-sentiment",
  },
]

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    // Track event when a project is viewed
    trackEvent("view_project", "portfolio", project.title)
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
  }

  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Hafidz_Fadillah_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Track resume download event
    trackEvent("download_resume", "portfolio", "Resume Downloaded")
  }

  const handleExternalLinkClick = (url: string, type: string, name: string) => {
    // Track external link clicks
    trackEvent("click_external_link", type, name)
    window.open(url, "_blank")
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
    trackEvent("toggle_theme", "ui", theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Navbar onDownloadResume={handleDownloadResume} />

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
        onExternalLinkClick={handleExternalLinkClick}
      />

      {/* Hero Section with Gradient */}
      <section
        id="home"
        className="relative pt-32 pb-20 md:py-32 px-4 bg-gradient-to-br from-emerald-50 via-white to-zinc-50 dark:from-emerald-950 dark:via-zinc-900 dark:to-zinc-950"
      >
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <FadeInLeft className="w-full md:w-1/2">
              <div className="inline-block px-4 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium mb-6">
                Mobile Developer
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hello, I'm <span className="text-emerald-600 dark:text-emerald-500">Hafidz Fadillah</span>
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                Creating innovative mobile solutions with Flutter, Kotlin, and Java. 3+ years of experience building
                user-centric applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  className="bg-emerald-600 hover:bg-emerald-700 rounded-full"
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    trackEvent("navigate", "portfolio", "Contact Section")
                  }}
                >
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Button>
                <Button variant="outline" className="rounded-full" onClick={handleDownloadResume}>
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </Button>
              </div>
            </FadeInLeft>
            <FadeInRight className="w-full md:w-1/2 flex justify-center items-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-600 shadow-lg shadow-emerald-100 dark:shadow-emerald-900/20 animate-float">
                <Image
                  src="/profile-photo.png"
                  alt="Hafidz Fadillah"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </FadeInRight>
          </div>
        </div>

        {/* Floating cards with key info */}
        <div className="container mx-auto max-w-6xl relative mt-16 hidden md:block">
          <StaggerContainer className="grid grid-cols-3 gap-6">
            <StaggerItem>
              <Card className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full">
                    <Code className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Mobile Developer</h3>
                    <p className="text-sm text-zinc-500">Android & Flutter</p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Bangkit Graduate</h3>
                    <p className="text-sm text-zinc-500">With Distinction</p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white dark:bg-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-50 dark:bg-emerald-900/20 rounded-bl-full opacity-50"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <FadeInLeft className="w-full md:w-2/5 flex justify-center items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-tl-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-br-xl"></div>
                <div className="relative aspect-square rounded-xl overflow-hidden border-8 border-white dark:border-zinc-800 shadow-xl">
                  <Image src="/profile-photo.png" alt="Hafidz Fadillah" fill className="object-cover object-top" />
                </div>
              </div>
            </FadeInLeft>
            <FadeInRight className="w-full md:w-3/5">
              <div className="inline-block px-4 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium mb-4">
                About Me
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Mobile Developer with a passion for creating innovative solutions
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                Dynamic mobile application developer with 3 years of experience creating user-centric mobile solutions.
                Proficient in Java, Kotlin, and Flutter/Dart for cross-platform development. I specialize in building
                high-performance, feature-rich applications that deliver exceptional user experiences.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                My journey in mobile development began with Android native development using Java and Kotlin, and later
                expanded to cross-platform development with Flutter. I'm passionate about clean code, intuitive UI/UX,
                and implementing the latest mobile development best practices.
              </p>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-zinc-50 to-emerald-50 dark:from-zinc-950 dark:to-emerald-950/50">
        <div className="container mx-auto max-w-6xl">
          <FadeIn>
            <AutoScrollingSkills />
          </FadeIn>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-4 bg-gradient-to-br from-zinc-50 to-emerald-50 dark:from-zinc-950 dark:to-emerald-950/50"
      >
        <div className="container mx-auto max-w-6xl">
          <FadeIn className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium mb-4">
              My Journey
            </div>
            <h2 className="text-3xl font-bold">Work Experience</h2>
          </FadeIn>

          <div className="space-y-8">
            {/* Experience Timeline */}
            <StaggerContainer className="space-y-8">
              <StaggerItem>
                <div className="relative pl-8 border-l-2 border-emerald-600 pb-8">
                  <div className="absolute w-4 h-4 bg-emerald-600 rounded-full -left-[9px] top-0"></div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <h3 className="text-xl font-semibold">Mobile Engineer (Intern)</h3>
                    <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                      <Building className="h-4 w-4" />
                      <span>PT GITS Indonesia</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                      <Calendar className="h-4 w-4" />
                      <span>Feb 2025 - May 2025</span>
                    </div>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Collaborated with product teams, participated in sprint planning, and reduced feature implementation
                    time by 20%.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="relative pl-8 border-l-2 border-emerald-600 pb-8">
                  <div className="absolute w-4 h-4 bg-emerald-600 rounded-full -left-[9px] top-0"></div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <h3 className="text-xl font-semibold">Mobile Development Path</h3>
                    <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                      <Building className="h-4 w-4" />
                      <span>Bangkit Academy</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                      <Calendar className="h-4 w-4" />
                      <span>Feb 2024 - Jul 2024</span>
                    </div>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Graduated with Distinction (top 10%) and developed BinaBola as the top Entrepreneur-track Capstone
                    Project.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="relative pl-8 border-l-2 border-emerald-600 pb-8">
                  <div className="absolute w-4 h-4 bg-emerald-600 rounded-full -left-[9px] top-0"></div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <h3 className="text-xl font-semibold">Mobile Developer</h3>
                    <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                      <Building className="h-4 w-4" />
                      <span>PT. Pineapple Technology Indonesia</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                      <Calendar className="h-4 w-4" />
                      <span>Sep 2021 - Jan 2024</span>
                    </div>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Maintained and improved PPOB solutions, developed projects for internal needs and clients.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="relative pl-8 border-l-2 border-emerald-600">
                  <div className="absolute w-4 h-4 bg-emerald-600 rounded-full -left-[9px] top-0"></div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <h3 className="text-xl font-semibold">Mobile Developer Intern</h3>
                    <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                      <Building className="h-4 w-4" />
                      <span>PT. Neuronworks Indonesia</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                      <Calendar className="h-4 w-4" />
                      <span>Sep 2020 - Dec 2020</span>
                    </div>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Developed proficiency in Dart/Flutter, gained experience with GitLab, and contributed to UI slicing.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Projects Section - Redesigned as a grid */}
      <section id="projects" className="py-20 px-4 bg-white dark:bg-zinc-900 relative">
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-emerald-50 dark:bg-emerald-900/20 rounded-tr-full opacity-50"></div>
        <div className="container mx-auto max-w-6xl relative">
          <FadeIn className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium mb-4">
              My Work
            </div>
            <h2 className="text-3xl font-bold">Featured Projects</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards */}
            {projects.map((project) => (
              <StaggerItem key={project.id}>
                <Card className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-zinc-800 hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      {project.award && (
                        <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100">
                          {project.award.length > 15 ? `${project.award.substring(0, 15)}...` : project.award}
                        </Badge>
                      )}
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.badges.slice(0, 3).map((badge, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {badge}
                        </Badge>
                      ))}
                      {project.badges.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.badges.length - 3}
                        </Badge>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-between group-hover:text-emerald-600 transition-colors"
                      onClick={() => openProjectModal(project)}
                    >
                      View Details <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}

            {/* Add Project Card */}
            <StaggerItem>
              <Card className="group overflow-hidden border-dashed border-2 border-zinc-200 dark:border-zinc-700 bg-transparent hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 flex items-center justify-center h-full hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="bg-zinc-100 dark:bg-zinc-800 rounded-full p-4 inline-flex mb-4">
                    <Plus className="h-8 w-8 text-zinc-400 dark:text-zinc-500" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">More Projects</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                    View my GitHub for additional projects and contributions
                  </p>
                  <Button
                    variant="ghost"
                    className="mt-4 text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 dark:hover:text-emerald-400"
                    onClick={() =>
                      handleExternalLinkClick("https://github.com/hafidzfadillah", "social", "GitHub Profile")
                    }
                  >
                    Visit GitHub <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        id="achievements"
        className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-zinc-50 dark:from-emerald-950/30 dark:to-zinc-950"
      >
        <div className="container mx-auto max-w-6xl">
          <FadeIn className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium mb-4">
              Recognition
            </div>
            <h2 className="text-3xl font-bold">Achievements</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Achievement Cards with Icons */}
            <StaggerItem>
              <Card className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full">
                      <Award className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Bangkit Academy Distinction</h3>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                        Graduated with Distinction in the top 10% of Android Development Cohort
                      </p>
                      <p className="text-xs text-zinc-500 mt-2">July 2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full">
                      <Trophy className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Best Entrepreneur Track Project</h3>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                        BinaBola selected as Best Capstone Team, receiving funding for Incubation Program
                      </p>
                      <p className="text-xs text-zinc-500 mt-2">July 2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full">
                      <Medal className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">IITC x Grab 2023</h3>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                        2nd place in "Mobile App" category with FitLife application
                      </p>
                      <p className="text-xs text-zinc-500 mt-2">October 2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white dark:bg-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
        <div className="container mx-auto max-w-6xl relative">
          <FadeIn className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium mb-4">
              Get In Touch
            </div>
            <h2 className="text-3xl font-bold">Contact Me</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeInLeft>
              <Card className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white border-none shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Let's work together</h3>
                  <p className="mb-8 opacity-90">Feel free to reach out for collaborations or just a friendly chat.</p>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm opacity-80">Email</p>
                        <p className="font-medium">hafidzfadillah23@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm opacity-80">Phone</p>
                        <p className="font-medium">+6285720019793</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm opacity-80">Location</p>
                        <p className="font-medium">Bandung, West Java, Indonesia</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <a
                      href="https://github.com/hafidzfadillah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
                      onClick={() => trackEvent("click_social", "social", "GitHub")}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href="https://linkedin.com/in/hfidzfadillah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
                      onClick={() => trackEvent("click_social", "social", "LinkedIn")}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </FadeInLeft>

            <FadeInRight>
              <ContactForm />
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-zinc-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-emerald-500">Hafidz Fadillah</h3>
              <p className="text-zinc-400">Mobile Developer</p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/hafidzfadillah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                onClick={() => trackEvent("click_social", "social", "GitHub Footer")}
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/hfidzfadillah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                onClick={() => trackEvent("click_social", "social", "LinkedIn Footer")}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:hafidzfadillah23@gmail.com"
                className="text-zinc-400 hover:text-white transition-colors"
                onClick={() => trackEvent("click_contact", "contact", "Email Footer")}
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-zinc-400 text-sm">
            <p>© {new Date().getFullYear()} Hafidz Fadillah. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
