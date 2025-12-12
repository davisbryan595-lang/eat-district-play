import type React from "react"
import type { Metadata } from "next"
import { Rajdhani, Oswald } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
})

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
})

export const metadata: Metadata = {
  title: "District Eat & Play - Eat. Drink. Play. Repeat.",
  description:
    "The ultimate entertainment venue featuring bowling, arcade games, axe throwing, delicious food, craft cocktails, and more. Perfect for parties, events, and unforgettable nights out.",
  keywords:
    "bowling, arcade, entertainment venue, restaurant, bar, axe throwing, party venue, corporate events, Sanford FL, Salina KS",
  openGraph: {
    title: "District Eat & Play - Eat. Drink. Play. Repeat.",
    description: "The ultimate entertainment venue featuring bowling, arcade, food, drinks, and more.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} ${oswald.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
