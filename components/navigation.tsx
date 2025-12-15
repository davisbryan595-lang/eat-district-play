"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import { LoginModal } from "@/components/login-modal"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [loginOpen, setLoginOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const submenuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const menuItemsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Animate mobile menu open/close
  useEffect(() => {
    if (!mobileMenuRef.current) return

    if (isOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, height: 0 },
        { opacity: 1, height: "auto", duration: 0.4, ease: "power2.out" }
      )
    } else {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        height: 0,
        duration: 0.3,
        ease: "power2.in",
      })
    }
  }, [isOpen])

  // Animate submenu dropdowns
  useEffect(() => {
    menuItems.forEach((item) => {
      const submenuEl = submenuRefs.current[item.name]
      if (!submenuEl) return

      if (activeDropdown === item.name) {
        gsap.fromTo(
          submenuEl,
          { opacity: 0, height: 0, marginTop: 0 },
          { opacity: 1, height: "auto", marginTop: 8, duration: 0.3, ease: "back.out" }
        )
      } else {
        gsap.to(submenuEl, {
          opacity: 0,
          height: 0,
          marginTop: 0,
          duration: 0.2,
          ease: "power2.in",
        })
      }
    })
  }, [activeDropdown])

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

  const toggleMobileDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg border-b-4 border-[#fd812a]" : "bg-white/95 backdrop-blur-md border-b-4 border-[#fd812a]/50"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src="/images/logo.png" alt="District Eat & Play" width={60} height={60} className="w-14 h-14" />
            <div className="hidden md:block">
              <div className="font-mono text-xl font-bold text-gray-900 tracking-wider">DISTRICT</div>
              <div className="text-xs text-[#fd812a] tracking-widest">EAT & PLAY</div>
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
                  className="px-4 py-2 text-gray-800 font-semibold text-sm tracking-wide hover:text-white hover:bg-gradient-to-r hover:from-[#fd812a] hover:to-pink-500 rounded-lg transition-all flex items-center gap-1"
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Mega Dropdown */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 bg-white border-2 border-[#fd812a] rounded-lg shadow-xl min-w-[200px] py-2">
                    {item.submenu.map((subItem, index) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-6 py-3 text-gray-800 hover:bg-gradient-to-r hover:from-[#fd812a]/10 hover:to-pink-100 hover:text-[#fd812a] font-semibold transition-all"
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
              className="border-2 border-[#02ffff] text-[#02ffff] hover:bg-[#02ffff] hover:text-gray-900 bg-white font-bold transition-all"
              onClick={() => setLoginOpen(true)}
            >
              Login
            </Button>
            <Button
              variant="outline"
              className="border-2 border-[#02ffff] text-[#02ffff] hover:bg-[#02ffff] hover:text-gray-900 bg-white font-bold transition-all"
              asChild
            >
              <Link href="/contact">Book Now</Link>
            </Button>
            <Button
              className="bg-gradient-to-r from-[#fd812a] to-pink-500 text-white hover:from-[#fd812a]/90 hover:to-pink-600 font-bold shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <Link href="tel:407-666-3002">Call: 407-666-3002</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-gray-800 p-2 hover:bg-[#fd812a]/10 rounded-lg transition-colors" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden overflow-hidden border-t-2 border-[#fd812a] bg-gradient-to-b from-white to-orange-50"
          >
            <div className="py-4">
              {menuItems.map((item) => (
                <div key={item.name} className="py-2">
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className="flex-1 px-4 py-2 text-gray-800 font-semibold hover:text-white hover:bg-gradient-to-r hover:from-[#fd812a] hover:to-pink-500 rounded-lg transition-all block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className="px-4 py-2 hover:text-[#fd812a] transition-colors"
                        aria-label={`Toggle ${item.name} submenu`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {item.submenu && (
                    <div
                      ref={(el) => {
                        if (el) submenuRefs.current[item.name] = el
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pl-8 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-1 text-sm text-gray-700 hover:text-[#fd812a] font-semibold transition-colors"
                            onClick={() => {
                              setIsOpen(false)
                              setActiveDropdown(null)
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 mt-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full bg-white border-2 border-[#02ffff] text-[#02ffff] hover:bg-[#02ffff] hover:text-gray-900 font-bold"
                  onClick={() => {
                    setLoginOpen(true)
                    setIsOpen(false)
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-white border-2 border-[#02ffff] text-[#02ffff] hover:bg-[#02ffff] hover:text-gray-900 font-bold"
                  asChild
                >
                  <Link href="/contact">Book Now</Link>
                </Button>
                <Button
                  className="w-full bg-gradient-to-r from-[#fd812a] to-pink-500 hover:from-[#fd812a]/90 hover:to-pink-600 text-white font-bold"
                  asChild
                >
                  <Link href="tel:407-666-3002">Call: 407-666-3002</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>

    <LoginModal open={loginOpen} onOpenChange={setLoginOpen} />
    </>
  )
}
