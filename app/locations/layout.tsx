import type { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Our Locations - District Eat & Play",
  description: "Visit District Eat & Play in Sanford, FL or Salina, KS. Find hours, directions, and contact information for both locations.",
}

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
