"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { X } from "lucide-react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { url: "/bowling-lanes-cosmic-lights.jpg", alt: "Cosmic Bowling" },
    { url: "/arcade-games-neon-colorful.jpg", alt: "Arcade Games" },
    { url: "/axe-throwing-target-bullseye.jpg", alt: "Axe Throwing" },
    { url: "/placeholder.svg?height=400&width=600", alt: "Delicious Food" },
    { url: "/placeholder.svg?height=400&width=600", alt: "Craft Cocktails" },
    { url: "/placeholder.svg?height=400&width=600", alt: "Party Time" },
    { url: "/placeholder.svg?height=400&width=600", alt: "VR Experience" },
    { url: "/placeholder.svg?height=400&width=600", alt: "Pool Tables" },
    { url: "/placeholder.svg?height=400&width=600", alt: "Good Times" },
    { url: "/placeholder.svg?height=400&width=600", alt: "Birthday Party" },
    { url: "/placeholder.svg?height=400&width=600", alt: "Game Day" },
    { url: "/placeholder.svg?height=400&width=600", alt: "Live Music" },
  ]

  return (
    <>
      <Navigation />

      <div className="pt-20">
        {/* Hero */}
        <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-br from-green-200 via-pink-200 to-orange-200">
          <div className="absolute inset-0 opacity-30">
            <img src="/placeholder.svg?height=400&width=1600" alt="Gallery" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 text-center">
            <h1 className="font-mono text-5xl md:text-7xl font-bold text-gray-900 mb-4 drop-shadow-lg">GALLERY</h1>
            <p className="text-xl text-gray-800 font-semibold drop-shadow-md">See What Makes District Special</p>
          </div>
        </section>

        {/* Masonry Gallery */}
        <section className="py-20 bg-gradient-to-b from-white to-pink-50">
          <div className="container mx-auto px-4">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {images.map((image, index) => {
                const colors = ["border-orange-400", "border-green-400", "border-purple-400", "border-pink-400", "border-blue-400", "border-yellow-400"];
                const color = colors[index % colors.length];
                return (
                  <div
                    key={index}
                    className="break-inside-avoid cursor-pointer group"
                    onClick={() => setSelectedImage(index)}
                  >
                    <div className={`relative overflow-hidden rounded-lg border-4 ${color} hover:border-opacity-100 transition-all hover:shadow-lg group-hover:scale-105`}>
                      <img
                        src={image.url || "/placeholder.svg"}
                        alt={image.alt}
                        className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <span className="text-white font-mono font-bold opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg">
                          View Full Size
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-[hsl(var(--district-red))] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={images[selectedImage].url || "/placeholder.svg"}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        )}

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
          <div className="container mx-auto px-4 text-center">
            <h3 className="font-mono text-3xl font-bold text-white mb-4 drop-shadow-lg">Ready to Create Your Own Memories?</h3>
            <p className="text-white/98 mb-6 font-semibold drop-shadow-md">Come experience District for yourself</p>
            <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all">
              Book Your Visit
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
