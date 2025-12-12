"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Preloader } from "@/components/preloader"
import { Utensils, Wine, Gamepad2, Calendar, Star, ChevronRight } from "lucide-react"

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const eventsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize GSAP animations after component mounts
    if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      // Hero animations
      gsap.from(".hero-logo", {
        scale: 0,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "back.out(1.7)",
      })

      gsap.from(".hero-tagline", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 1,
      })

      gsap.from(".hero-cta", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: 1.3,
      })

      // Feature cards stagger
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      })

      // Events carousel
      gsap.from(".event-card", {
        scrollTrigger: {
          trigger: eventsRef.current,
          start: "top 80%",
        },
        x: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
      })

      // Section title animations
      gsap.utils.toArray(".section-title").forEach((title: any) => {
        gsap.from(title, {
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
          },
          x: -100,
          opacity: 0,
          duration: 0.8,
        })
      })
    }
  }, [])

  return (
    <>
      <Preloader />
      <Navigation />

      {/* Hero Section with Video Background */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-orange-100/50 to-purple-100/50 z-10" />
          <iframe
            className="absolute inset-0 w-full h-full object-cover"
            src="https://www.youtube.com/embed/yygDVuZDgVw?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&playlist=yygDVuZDgVw"
            title="District Eat & Play"
            allow="autoplay; fullscreen"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4">
          <div className="hero-logo mb-8">
            <Image
              src="/images/logo.png"
              alt="District Eat & Play"
              width={200}
              height={200}
              className="mx-auto drop-shadow-2xl"
            />
          </div>

          <h1 className="hero-tagline font-mono text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-4 tracking-wider drop-shadow-lg">
            DISTRICT
          </h1>

          <p className="hero-tagline text-2xl md:text-4xl text-[hsl(var(--district-orange))] font-bold mb-12 tracking-wide">
            Eat. Drink. Play. Repeat.
          </p>

          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[hsl(var(--district-orange))] hover:bg-[hsl(var(--district-orange))]/90 text-white text-lg px-8 py-6 animate-orange-glow"
              asChild
            >
              <Link href="/contact">Book Your Experience</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white text-lg px-8 py-6 bg-white"
              asChild
            >
              <Link href="/menu">View Menu</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-800 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gray-800 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title font-mono text-4xl md:text-6xl font-bold text-gray-900 text-center mb-16">
            Experience The <span className="text-[hsl(var(--district-orange))]">Ultimate</span> Entertainment
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Food Card */}
            <Card className="feature-card bg-gradient-to-br from-white to-orange-50 border-[hsl(var(--district-orange))]/30 p-8 hover:scale-105 transition-transform duration-300 group shadow-lg">
              <div className="w-20 h-20 rounded-full bg-[hsl(var(--district-orange))]/15 flex items-center justify-center mb-6 group-hover:bg-[hsl(var(--district-orange))]/25 transition-colors">
                <Utensils className="w-10 h-10 text-[hsl(var(--district-orange))]" />
              </div>
              <h3 className="font-mono text-3xl font-bold text-gray-900 mb-4">FOOD</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Savor mouthwatering burgers, gourmet pizzas, loaded nachos, and more. Our chef-crafted menu features
                bold flavors that fuel your fun.
              </p>
              <Button
                variant="ghost"
                className="text-[hsl(var(--district-orange))] hover:text-white hover:bg-[hsl(var(--district-orange))]/20 p-0"
                asChild
              >
                <Link href="/menu#food">
                  Explore Menu <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </Card>

            {/* Drinks Card */}
            <Card className="feature-card bg-gradient-to-br from-white to-green-50 border-[hsl(var(--district-green))]/30 p-8 hover:scale-105 transition-transform duration-300 group shadow-lg">
              <div className="w-20 h-20 rounded-full bg-[hsl(var(--district-green))]/15 flex items-center justify-center mb-6 group-hover:bg-[hsl(var(--district-green))]/25 transition-colors">
                <Wine className="w-10 h-10 text-[hsl(var(--district-green))]" />
              </div>
              <h3 className="font-mono text-3xl font-bold text-gray-900 mb-4">DRINKS</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                From craft cocktails to ice-cold beers, our full bar serves up signature drinks that keep the good times
                flowing all night long.
              </p>
              <Button
                variant="ghost"
                className="text-[hsl(var(--district-green))] hover:text-white hover:bg-[hsl(var(--district-green))]/20 p-0"
                asChild
              >
                <Link href="/menu#drinks">
                  View Bar Menu <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </Card>

            {/* Games Card */}
            <Card className="feature-card bg-gradient-to-br from-white to-purple-50 border-[hsl(var(--district-purple))]/30 p-8 hover:scale-105 transition-transform duration-300 group shadow-lg">
              <div className="w-20 h-20 rounded-full bg-[hsl(var(--district-purple))]/15 flex items-center justify-center mb-6 group-hover:bg-[hsl(var(--district-purple))]/25 transition-colors">
                <Gamepad2 className="w-10 h-10 text-[hsl(var(--district-purple))]" />
              </div>
              <h3 className="font-mono text-3xl font-bold text-gray-900 mb-4">GAMES</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Bowling, arcade games, axe throwing, VR experiences, and more. Endless entertainment for groups of all
                sizes and skill levels.
              </p>
              <Button
                variant="ghost"
                className="text-[hsl(var(--district-purple))] hover:text-white hover:bg-[hsl(var(--district-purple))]/20 p-0"
                asChild
              >
                <Link href="/games">
                  See All Activities <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Carousel */}
      <section ref={eventsRef} className="py-20 bg-gradient-to-b from-blue-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title font-mono text-4xl md:text-6xl font-bold text-gray-900 text-center mb-4">
            <span className="text-[hsl(var(--district-orange))]">Featured</span> Events
          </h2>
          <p className="text-center text-gray-700 text-lg mb-12">Never a dull moment at District</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="event-card bg-white border-[hsl(var(--district-orange))]/20 overflow-hidden group shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/bowling-lanes-neon-lights.jpg"
                  alt="Cosmic Bowling"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[hsl(var(--district-orange))] text-white text-xs font-bold px-3 py-1 rounded-full">
                    FRIDAYS
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-mono text-2xl font-bold text-gray-900 mb-2">Cosmic Bowling Night</h3>
                <p className="text-gray-700 mb-4">Glow-in-the-dark bowling with DJ and drink specials</p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Every Friday, 9PM - 1AM</span>
                </div>
              </div>
            </Card>

            <Card className="event-card bg-white border-[hsl(var(--district-green))]/20 overflow-hidden group shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/arcade-games-retro-neon.jpg"
                  alt="Retro Game Night"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[hsl(var(--district-green))] text-white text-xs font-bold px-3 py-1 rounded-full">
                    THURSDAYS
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-mono text-2xl font-bold text-gray-900 mb-2">Retro Game Night</h3>
                <p className="text-gray-700 mb-4">Classic arcade tournaments with prizes</p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Every Thursday, 7PM - 11PM</span>
                </div>
              </div>
            </Card>

            <Card className="event-card bg-white border-[hsl(var(--district-purple))]/20 overflow-hidden group shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/sports-bar-game-watching-crowd.jpg"
                  alt="Watch Party"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[hsl(var(--district-purple))] text-white text-xs font-bold px-3 py-1 rounded-full">
                    GAME DAYS
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-mono text-2xl font-bold text-gray-900 mb-2">Game Day Watch Parties</h3>
                <p className="text-gray-700 mb-4">Big screens, cold drinks, and game-day specials</p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>All Major Sporting Events</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-[hsl(var(--district-orange))] hover:bg-[hsl(var(--district-orange))]/90 text-white px-8"
              asChild
            >
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="section-title font-mono text-4xl md:text-6xl font-bold text-white text-center mb-16">
            What Our <span className="text-[hsl(var(--district-red))]">Guests</span> Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                rating: 5,
                text: "Best entertainment venue in Florida! The bowling is amazing, food is delicious, and the staff is incredibly friendly. Perfect for date nights!",
              },
              {
                name: "Mike R.",
                rating: 5,
                text: "Hosted my company party here and it was a huge success. The axe throwing was a hit, and the private event space was perfect for our group of 50.",
              },
              {
                name: "Jessica L.",
                rating: 5,
                text: "Love the cosmic bowling nights! Great atmosphere, awesome music, and the drink specials are unbeatable. This place knows how to party!",
              },
            ].map((review, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border-[hsl(var(--district-red))]/20 p-6"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[hsl(var(--district-gold))] text-[hsl(var(--district-gold))]"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{review.text}</p>
                <p className="font-semibold text-white">- {review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[hsl(var(--district-red))] to-[hsl(var(--district-blue))]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-mono text-4xl md:text-6xl font-bold text-white mb-6">Ready to Experience District?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your lane, reserve a party room, or just drop by. We're ready to make your night unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6" asChild>
              <Link href="/contact">Book Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 bg-transparent"
              asChild
            >
              <Link href="tel:407-666-3002">Call: 407-666-3002</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
