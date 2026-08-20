import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const siteUrl = "https://mobiwave.co.ke"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MobiWave Innovations | Telecom & Communication APIs in Kenya",
    template: "%s | MobiWave Innovations",
  },
  description:
    "Kenya's telecommunications and communications technology provider for Bulk SMS, Bulk Email, USSD, WhatsApp messaging, Shortcodes, and M-Pesa integrations.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName: "MobiWave Innovations",
    title: "MobiWave Innovations | Telecom & Communication APIs in Kenya",
    description:
      "Bulk SMS, Bulk Email, USSD, WhatsApp messaging, Shortcodes, and M-Pesa integrations for businesses and developers in Kenya.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MobiWave Innovations | Telecom & Communication APIs in Kenya",
    description:
      "Communication APIs and messaging services for Kenyan businesses and developers.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="script-src 'self' 'unsafe-inline' 'unsafe-eval'; object-src 'none';"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
