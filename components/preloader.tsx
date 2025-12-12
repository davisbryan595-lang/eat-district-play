"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-6 animate-spin">
          <Image src="/images/logo.png" alt="Loading" fill className="object-contain" />
        </div>
        <div className="animate-red-glow">
          <h2 className="font-mono text-3xl font-bold text-white mb-2">DISTRICT</h2>
          <p className="text-[hsl(var(--district-red))] font-semibold tracking-wider">LOADING...</p>
        </div>
      </div>
    </div>
  )
}
