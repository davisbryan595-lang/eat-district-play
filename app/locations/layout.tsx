import type { Metadata } from "next"

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
      <link rel="preload" as="image" href="/modern-entertainment-venue-exterior.jpg" />
      {children}
    </>
  )
}
