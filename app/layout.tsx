import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import Script from "next/script"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hafidz Fadillah | Mobile Developer",
  description:
    "Personal portfolio website of Hafidz Fadillah, a Mobile Developer with expertise in Android Native and Flutter development.",
  keywords: [
    "Hafidz Fadillah",
    "Mobile Developer",
    "Android Developer",
    "Flutter Developer",
    "Kotlin",
    "Java",
    "Dart",
    "Portfolio",
    "Mobile Apps",
    "Indonesia",
  ],
  authors: [{ name: "Hafidz Fadillah", url: "https://github.com/hafidzfadillah" }],
  creator: "Hafidz Fadillah",
  publisher: "Hafidz Fadillah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hafidzfadillah.com",
    title: "Hafidz Fadillah | Mobile Developer",
    description: "Mobile Developer with expertise in Android Native and Flutter development",
    siteName: "Hafidz Fadillah Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hafidz Fadillah - Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hafidz Fadillah | Mobile Developer",
    description: "Mobile Developer with expertise in Android Native and Flutter development",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Replace with your actual verification code
  },
  alternates: {
    canonical: "https://hafidzfadillah.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </ThemeProvider>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <Script
          id="schema-script"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Hafidz Fadillah",
              url: "https://hafidzfadillah.com",
              jobTitle: "Mobile Developer",
              worksFor: {
                "@type": "Organization",
                name: "PT GITS Indonesia",
              },
              alumniOf: {
                "@type": "Organization",
                name: "Bangkit Academy",
              },
              sameAs: ["https://github.com/hafidzfadillah", "https://linkedin.com/in/hfidzfadillah"],
              knowsAbout: ["Android Development", "Flutter", "Kotlin", "Java", "Dart", "Mobile App Development"],
            }),
          }}
        />
      </body>
    </html>
  )
}
