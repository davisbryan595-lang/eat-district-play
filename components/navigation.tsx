"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { name: "Home", href: "/" },
    {
      name: "Menu",
      href: "/menu",
      submenu: [
        { name: "Food", href: "/menu#food" },
        { name: "Drinks", href: "/menu#drinks" },
        { name: "Specials", href: "/menu#specials" },
      ],
    },
    {
      name: "Games & Activities",
      href: "/games",
      submenu: [
        { name: "Bowling", href: "/games#bowling" },
        { name: "Arcade", href: "/games#arcade" },
        { name: "Axe Throwing", href: "/games#axe-throwing" },
        { name: "VR Experience", href: "/games#vr" },
      ],
    },
    { name: "Events & Parties", href: "/events" },
    { name: "Locations", href: "/locations" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black shadow-lg" : "bg-black/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src="/images/logo.png" alt="District Eat & Play" width={60} height={60} className="w-14 h-14" />
            <div className="hidden md:block">
              <div className="font-mono text-xl font-bold text-white tracking-wider">DISTRICT</div>
              <div className="text-xs text-[hsl(var(--district-red))] tracking-widest">EAT & PLAY</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-white font-semibold text-sm tracking-wide hover:text-[hsl(var(--district-red))] transition-colors flex items-center gap-1"
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Mega Dropdown */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 bg-black border border-[hsl(var(--district-red))]/20 rounded-lg shadow-xl min-w-[200px] py-2">
                    {item.submenu.map((subItem, index) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-6 py-3 text-white hover:bg-[hsl(var(--district-red))]/10 hover:text-[hsl(var(--district-red))] transition-all"
                        style={{
                          animationDelay: `${index * 50}ms`,
                        }}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              asChild
            >
              <Link href="/contact">Book Now</Link>
            </Button>
            <Button
              className="bg-[hsl(var(--district-red))] text-white hover:bg-[hsl(var(--district-red))]/90 animate-red-glow"
              asChild
            >
              <Link href="tel:407-666-3002">Call: 407-666-3002</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            {menuItems.map((item) => (
              <div key={item.name} className="py-2">
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-white font-semibold hover:text-[hsl(var(--district-red))]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-8 space-y-2 mt-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-1 text-sm text-gray-300 hover:text-[hsl(var(--district-red))]"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 mt-4 space-y-2">
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/contact">Book Now</Link>
              </Button>
              <Button className="w-full bg-[hsl(var(--district-red))]" asChild>
                <Link href="tel:407-666-3002">Call: 407-666-3002</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
