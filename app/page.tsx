"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Preloader } from "@/components/preloader"
import { Utensils, Wine, Gamepad2, Calendar, Star, ChevronRight } from "lucide-react"

export default function HomePage() {

  return (
    <>
      <Preloader />
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#ffda00]/10 via-[#fd812a]/10 to-[#02ffff]/10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-orange-100/40 to-purple-100/30 z-0" />

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 animate-fade-in">
          <div className="hero-logo mb-8 animate-scale-in">
            <Image
              src="/images/logo.png"
              alt="District Eat & Play"
              width={200}
              height={200}
              priority
              className="mx-auto drop-shadow-2xl"
            />
          </div>

          <h1 className="hero-heading font-mono text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-4 tracking-wider drop-shadow-lg animate-slide-down">
            DISTRICT
          </h1>

          <p className="hero-tagline text-2xl md:text-4xl font-bold mb-12 tracking-wide animate-slide-down-delayed">
            <span className="text-[#02ffff]">Eat.</span> <span className="text-[#ffda00]">Play.</span> <span className="text-[#fd812a]">Repeat.</span>
          </p>

          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delayed">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#fd812a] to-pink-500 hover:from-[#fd812a]/90 hover:to-pink-600 text-white text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <Link href="/contact">Book Your Experience</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#02ffff] text-[#02ffff] hover:bg-[#02ffff] hover:text-gray-900 text-lg px-8 py-6 bg-white font-bold transition-all"
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
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="section-heading font-mono text-4xl md:text-6xl font-bold text-gray-900 text-center mb-16 animate-fade-in-scroll">
            Experience The <span className="text-[#fd812a]">Ultimate</span> Entertainment
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Food Card */}
            <Card className="feature-card bg-gradient-to-br from-white to-orange-100 border-4 border-[#fd812a] p-8 hover:scale-105 transition-transform duration-300 group shadow-lg hover:shadow-2xl hover:border-orange-500 animate-fade-in-scroll">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#fd812a]/20 to-[#fd812a]/30 flex items-center justify-center mb-6 group-hover:from-[#fd812a]/30 group-hover:to-[#fd812a]/40 transition-all">
                <Utensils className="w-10 h-10 text-[#fd812a] font-bold" />
              </div>
              <h3 className="font-mono text-3xl font-bold text-gray-900 mb-4">FOOD</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Savor mouthwatering burgers, gourmet pizzas, loaded nachos, and more. Our chef-crafted menu features
                bold flavors that fuel your fun.
              </p>
              <Button
                variant="ghost"
                className="text-[#fd812a] hover:text-white hover:bg-gradient-to-r hover:from-[#fd812a] hover:to-orange-600 font-bold p-0 transition-all"
                asChild
              >
                <Link href="/menu#food">
                  Explore Menu <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </Card>

            {/* Drinks Card */}
            <Card className="feature-card bg-gradient-to-br from-white to-green-100 border-4 border-[#ffda00] p-8 hover:scale-105 transition-transform duration-300 group shadow-lg hover:shadow-2xl hover:border-[#ffda00]/80 animate-fade-in-scroll">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ffda00]/20 to-[#ffda00]/30 flex items-center justify-center mb-6 group-hover:from-[#ffda00]/30 group-hover:to-[#ffda00]/40 transition-all">
                <Wine className="w-10 h-10 text-[#ffda00] font-bold" />
              </div>
              <h3 className="font-mono text-3xl font-bold text-gray-900 mb-4">DRINKS</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                From craft cocktails to ice-cold beers, our full bar serves up signature drinks that keep the good times
                flowing all night long.
              </p>
              <Button
                variant="ghost"
                className="text-[#ffda00] hover:text-white hover:bg-gradient-to-r hover:from-[#ffda00] hover:to-yellow-500 font-bold p-0 transition-all"
                asChild
              >
                <Link href="/menu#drinks">
                  View Bar Menu <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </Card>

            {/* Games Card */}
            <Card className="feature-card bg-gradient-to-br from-white to-purple-100 border-4 border-[#02ffff] p-8 hover:scale-105 transition-transform duration-300 group shadow-lg hover:shadow-2xl hover:border-[#02ffff]/80 animate-fade-in-scroll">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center mb-6 group-hover:from-purple-300 group-hover:to-purple-400 transition-all">
                <Gamepad2 className="w-10 h-10 text-purple-600 font-bold" />
              </div>
              <h3 className="font-mono text-3xl font-bold text-gray-900 mb-4">GAMES</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Bowling, arcade games, axe throwing, VR experiences, and more. Endless entertainment for groups of all
                sizes and skill levels.
              </p>
              <Button
                variant="ghost"
                className="text-purple-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-600 font-bold p-0 transition-all"
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
      <section ref={eventsRef} className="py-20 bg-gradient-to-b from-green-50 via-pink-50 to-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title font-mono text-4xl md:text-6xl font-bold text-gray-900 text-center mb-4">
            <span className="text-[hsl(var(--district-orange))]">Featured</span> Events
          </h2>
          <p className="text-center text-gray-700 text-lg mb-12">Never a dull moment at District</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="event-card bg-white border-4 border-orange-400 overflow-hidden group shadow-lg hover:shadow-xl hover:border-orange-500 transition-all">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/bowling-lanes-neon-lights.jpg"
                  alt="Cosmic Bowling"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    FRIDAYS
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-mono text-2xl font-bold text-gray-900 mb-2">Cosmic Bowling Night</h3>
                <p className="text-gray-700 mb-4">Glow-in-the-dark bowling with DJ and drink specials</p>
                <div className="flex items-center gap-2 text-sm text-gray-600 font-semibold">
                  <Calendar className="w-4 h-4 text-orange-500" />
                  <span>Every Friday, 9PM - 1AM</span>
                </div>
              </div>
            </Card>

            <Card className="event-card bg-white border-4 border-green-400 overflow-hidden group shadow-lg hover:shadow-xl hover:border-green-500 transition-all">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/arcade-games-retro-neon.jpg"
                  alt="Retro Game Night"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    THURSDAYS
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-mono text-2xl font-bold text-gray-900 mb-2">Retro Game Night</h3>
                <p className="text-gray-700 mb-4">Classic arcade tournaments with prizes</p>
                <div className="flex items-center gap-2 text-sm text-gray-600 font-semibold">
                  <Calendar className="w-4 h-4 text-green-500" />
                  <span>Every Thursday, 7PM - 11PM</span>
                </div>
              </div>
            </Card>

            <Card className="event-card bg-white border-4 border-purple-400 overflow-hidden group shadow-lg hover:shadow-xl hover:border-purple-500 transition-all">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/sports-bar-game-watching-crowd.jpg"
                  alt="Watch Party"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    GAME DAYS
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-mono text-2xl font-bold text-gray-900 mb-2">Game Day Watch Parties</h3>
                <p className="text-gray-700 mb-4">Big screens, cold drinks, and game-day specials</p>
                <div className="flex items-center gap-2 text-sm text-gray-600 font-semibold">
                  <Calendar className="w-4 h-4 text-purple-500" />
                  <span>All Major Sporting Events</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 font-bold shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title font-mono text-4xl md:text-6xl font-bold text-gray-900 text-center mb-16">
            What Our <span className="text-[hsl(var(--district-orange))]">Guests</span> Say
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
                className="bg-gradient-to-br from-white to-orange-100 border-4 border-pink-400 p-6 shadow-lg hover:shadow-xl hover:border-pink-500 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-pink-500 text-pink-500"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed font-medium">{review.text}</p>
                <p className="font-bold text-gray-900">- {review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-mono text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">Ready to Experience District?</h2>
          <p className="text-xl text-white/98 mb-8 max-w-2xl mx-auto font-semibold drop-shadow-md">
            Book your lane, reserve a party room, or just drop by. We're ready to make your night unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transition-all" asChild>
              <Link href="/contact">Book Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 bg-transparent font-bold shadow-lg hover:shadow-xl transition-all"
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
