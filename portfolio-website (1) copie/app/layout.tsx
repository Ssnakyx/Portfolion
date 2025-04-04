import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hamed Kaffa | Computer Science Student & Developer",
  description:
    "Personal portfolio showcasing Hamed Kaffa's projects and skills as a Computer Science student and developer.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'