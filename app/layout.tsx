import type { Metadata, Viewport } from "next"
import { Inter, Inter_Tight, Reddit_Sans_Condensed } from "next/font/google"
import "./globals.css"
import { Analytics } from "@/components/analytics"
import { site } from "@/content/site"

const display = Reddit_Sans_Condensed({ subsets: ["latin"], weight: "900", variable: "--font-display" })
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" })
const label = Inter_Tight({ subsets: ["latin"], weight: "500", variable: "--font-label" })

const title = `${site.name} — ${site.title}`

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: { card: "summary_large_image", title, description: site.description, images: ["/og-image.png"] },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0f100f" },
  ],
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: site.title,
  email: `mailto:${site.email}`,
  sameAs: site.socials.map((s) => s.href),
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${label.variable}`}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <Analytics />
      </body>
    </html>
  )
}
