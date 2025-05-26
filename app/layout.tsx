import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Adrian Putra Ramadhan - Full-Stack & AI Engineer",
  description:
    "Portfolio website of Adrian Putra Ramadhan, Full-Stack Developer and AI Engineer from Cilacap, Indonesia",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  )
}
