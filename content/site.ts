// Single source of truth for all copy on the site. Edit text here, not in components.
// Rule: no numbers, metrics, claims or technologies that aren't in the brief.

export type Link = { label: string; href: string }

export type Project = {
  id: string
  title: string
  /** Tracked micro-label: role / org and period. */
  label: string
  /** Short copy shown on the card. */
  summary: string[]
  /** Extra points shown only in the detail view. Projects without highlights get no "Details" button. */
  highlights?: string[]
  stack: string[]
  links?: Link[]
  /** Screenshot. Omit for client work (NDA) — the card renders a typographic composition instead. */
  image?: { src: string; alt: string; width: number; height: number }
  featured?: boolean
  small?: boolean
  /** Ongoing — shows the green status dot. */
  current?: boolean
}

export type Role = {
  title: string
  company: string
  period: string
  notes: string[]
}

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hafidz.dev",
  name: "Hafidz Fadillah",
  firstName: "Hafidz",
  lastName: "Fadillah",
  title: "Software Engineer",
  experience: "4+ years",
  tagline: "Mobile roots, full-stack reach. I take over live systems and make them stable and easy to extend.",
  description:
    "Hafidz Fadillah is a software engineer with 4+ years of experience — mobile roots, now also web and backend. Freelance clients and recruiters: get in touch or download the CV.",
  photo: { src: "/images/hafidz.webp", alt: "Portrait of Hafidz Fadillah standing in a hillside tea plantation" },
  cv: "/cv/hafidz-fadillah-cv.pdf",
  email: "hafidzfadillah23@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/hafidzfadillah" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/hfidzfadillah" },
  ] satisfies Link[],
}

export const nav: Link[] = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export const projects: Project[] = [
  {
    id: "binabola",
    title: "BinaBola",
    label: "Co-founder · 2024 — Present",
    summary: [
      "Sports-tech platform for live match annotation in football and futsal with stat recaps, plus an AI venue cam for football and tennis. Used at Unileague and Piala Futsal by.U, and actively by Papua Football Academy.",
    ],
    highlights: [
      "Continued and finished the MVP in a team of six engineers.",
      "Handled features, bugs and servers (Docker, Nginx, CI/CD).",
      "Rebuilt the whole environment after a hosting outage.",
      "Added automated DB backups, Portainer and documentation.",
    ],
    stack: ["Remix", "Go", "Docker", "Nginx", "CI/CD"],
    links: [{ label: "binabola.id", href: "https://binabola.id" }],
    image: { src: "/images/binabola.png", alt: "BinaBola app screens on mobile phones", width: 960, height: 540 },
    featured: true,
    current: true,
  },
  {
    id: "akoja",
    title: "Akoja ERP",
    label: "PT Akselerasi Informasi Indonesia · 2025 — 2026",
    summary: [
      "Enterprise ERP moving several divisions from manual processes to integrated workflows, with a Flutter mobile app and a Next.js web app.",
    ],
    highlights: [
      "Built modules for several divisions.",
      "Reworked mobile draft storage: server drafts, auto save, and offline local storage that syncs when back online.",
      "Split a large class mixing UI and logic into an MVVM structure.",
      "Implemented attendance with a face recognition API and time-manipulation detection.",
    ],
    stack: ["Flutter", "Next.js", "Golang","Laravel"],
  },
  {
    id: "pancasona",
    title: "Pancasona Tata Nusa",
    label: "Company profile · 2026",
    summary: ["Company profile website built with Next.js and server-side rendering."],
    stack: ["Next.js"],
    links: [{ label: "pancasonatatanusa.id", href: "https://www.pancasonatatanusa.id/" }],
  },
  {
    id: "yamaha",
    title: "Motorbike E-Catalogue",
    label: "PT GITS Indonesia · Intern · Mar — May 2025",
    summary: [
      "Motorcycle e-catalogue app for a Japanese motorbike brand project, built with FlutterFlow in an Agile/Scrum team.",
    ],
    highlights: ["Interactive product display.", "Spec comparison."],
    stack: ["FlutterFlow"],
  },
  {
    id: "fitlife",
    title: "FitLife",
    label: "Competition project · 2023",
    summary: [
      "Lifestyle app with gamification, food detection and classification, and an AI chatbot.",
    ],
    highlights: [
      "2nd Best Team, Mobile App category, IIT Competition by Intermedia Universitas Amikom Purwokerto (October 2023).",
    ],
    stack: ["Flutter", "Laravel"],
    image: { src: "/images/fitlife.png", alt: "FitLife app screens", width: 960, height: 540 },
  },
  {
    id: "yt-sentiment",
    title: "YouTube Sentiment Analysis",
    label: "College project",
    summary: ["Sentiment analysis project on YouTube data."],
    stack: [],
    links: [{ label: "GitHub repo", href: "https://github.com/hafidzfadillah/yt-sentiment" }],
    small: true,
  },
]

export const experience: Role[] = [
  {
    title: "Mobile & Frontend Developer",
    company: "PT Akselerasi Informasi Indonesia",
    period: "May 2025 — Nov 2026",
    notes: ["Freelance May – Aug 2025, contract since Aug 2025."],
  },
  {
    title: "Co-founder & Full Stack Engineer",
    company: "BinaBola",
    period: "Late 2024 — Present",
    notes: ["Full time until Feb 2025, part time since Mar 2025."],
  },
  {
    title: "Mobile Engineer (Intern)",
    company: "PT GITS Indonesia",
    period: "Mar — May 2025",
    notes: [],
  },
  {
    title: "Mobile Developer",
    company: "PT Pineapple Technology Indonesia",
    period: "Sep 2021 — Oct 2024",
    notes: [
      "Live PPOB products: mobile credit and data, electricity and water bills, travel tickets. Android (Java) and Flutter.",
      "Started as Android Developer Intern, Mar – Aug 2021.",
    ],
  },
  {
    title: "Mobile Developer (Intern)",
    company: "PT Neuronworks Indonesia",
    period: "Sep — Dec 2020",
    notes: [],
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: "Mobile", items: ["Flutter / Dart", "Android (Kotlin / Java)", "FlutterFlow"] },
  { group: "Web", items: ["Next.js", "Remix", "TypeScript / JavaScript", "Laravel"] },
  { group: "Backend & data", items: ["Go", "Prisma ORM", "MySQL", "Firebase", "REST API"] },
  { group: "DevOps", items: ["Docker", "Nginx", "CI/CD", "Git"] },
]

export const recognition: { title: string; issuer: string; date: string }[] = [
  {
    title: "Graduated with Distinction — Mobile Development path, top 10%",
    issuer: "Bangkit Academy",
    date: "Jul 2024",
  },
  { title: "Best Entrepreneur-track Capstone Project (BinaBola)", issuer: "Bangkit Academy", date: "Jul 2024" },
  {
    title: "2nd Best Team, Mobile App — IIT Competition",
    issuer: "Intermedia Universitas Amikom Purwokerto",
    date: "Oct 2023",
  },
]

export const certifications: { title: string; issuer: string }[] = [
  { title: "Android Intermediate", issuer: "Dicoding" },
  { title: "Dasar AI", issuer: "Dicoding" },
  { title: "Machine Learning untuk Android", issuer: "Dicoding" },
]
