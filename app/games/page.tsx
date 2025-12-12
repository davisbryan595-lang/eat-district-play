import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function GamesPage() {
  const activities = [
    {
      name: "Bowling",
      description: "16 state-of-the-art lanes with cosmic bowling on weekends",
      price: "$6 per game",
      image: "/bowling-lanes-modern.jpg",
      color: "orange",
    },
    {
      name: "Arcade",
      description: "100+ classic and modern arcade games",
      price: "Games from $0.50",
      image: "/arcade-games-neon.jpg",
      color: "green",
    },
    {
      name: "Axe Throwing",
      description: "Professional axe throwing lanes with safety instruction",
      price: "$25 per person/hour",
      image: "/axe-throwing-target.jpg",
      color: "purple",
    },
    {
      name: "VR Experience",
      description: "Immersive virtual reality gaming stations",
      price: "$15 per 30 minutes",
      image: "/vr-gaming-headset.jpg",
      color: "pink",
    },
    {
      name: "Pool Tables",
      description: "6 professional billiards tables",
      price: "$10 per hour",
      image: "/pool-table-billiards.jpg",
      color: "blue",
    },
    {
      name: "Karaoke",
      description: "Private karaoke rooms available on weekends",
      price: "$50 per hour",
      image: "/karaoke-microphone-stage.jpg",
      color: "orange",
    },
  ]

  return (
    <>
      <Navigation />

      <div className="pt-20">
        {/* Hero */}
        <section className="relative h-[40vh] flex items-center justify-center bg-black">
          <div className="absolute inset-0 opacity-30">
            <img src="/bowling-arcade-entertainment.jpg" alt="Games" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 text-center">
            <h1 className="font-mono text-5xl md:text-7xl font-bold text-white mb-4">GAMES & ACTIVITIES</h1>
            <p className="text-xl text-gray-300">Endless Entertainment Awaits</p>
          </div>
        </section>

        {/* Activities Grid */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities.map((activity, index) => (
                <Card
                  key={index}
                  className={`bg-gradient-to-br from-gray-900 to-black border-[hsl(var(--district-${activity.color}))]/30 overflow-hidden group hover:scale-105 transition-transform duration-300`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={activity.image || "/placeholder.svg"}
                      alt={activity.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-mono text-2xl font-bold text-white mb-1">{activity.name}</h3>
                      <p className={`text-[hsl(var(--district-${activity.color}))] font-bold`}>{activity.price}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-400 mb-4">{activity.description}</p>
                    <Button
                      className={`w-full bg-[hsl(var(--district-${activity.color}))] hover:bg-[hsl(var(--district-${activity.color}))]/90`}
                      asChild
                    >
                      <Link href="/contact">Reserve Now</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Party Packages */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-white text-center mb-12">
              <span className="text-[hsl(var(--district-red))]">Party</span> Packages
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-black border-[hsl(var(--district-red))]/30 p-8">
                <h3 className="font-mono text-2xl font-bold text-white mb-4">Basic Package</h3>
                <p className="text-4xl font-bold text-[hsl(var(--district-red))] mb-6">$299</p>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>• 2 hours of bowling (up to 10 people)</li>
                  <li>• Pizza & soft drinks</li>
                  <li>• $20 arcade card</li>
                  <li>• Private party area</li>
                </ul>
                <Button className="w-full bg-[hsl(var(--district-red))]" asChild>
                  <Link href="/contact">Book This Package</Link>
                </Button>
              </Card>

              <Card className="bg-black border-[hsl(var(--district-blue))]/30 p-8 ring-2 ring-[hsl(var(--district-blue))]/50">
                <div className="text-center mb-4">
                  <span className="bg-[hsl(var(--district-blue))] text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
                <h3 className="font-mono text-2xl font-bold text-white mb-4">Premium Package</h3>
                <p className="text-4xl font-bold text-[hsl(var(--district-blue))] mb-6">$599</p>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>• 3 hours unlimited activities (up to 20)</li>
                  <li>• Full food & drink buffet</li>
                  <li>• $50 arcade card per person</li>
                  <li>• 1 hour axe throwing session</li>
                  <li>• Dedicated party host</li>
                </ul>
                <Button className="w-full bg-[hsl(var(--district-blue))]" asChild>
                  <Link href="/contact">Book This Package</Link>
                </Button>
              </Card>

              <Card className="bg-black border-[hsl(var(--district-gold))]/30 p-8">
                <h3 className="font-mono text-2xl font-bold text-white mb-4">Ultimate Package</h3>
                <p className="text-4xl font-bold text-[hsl(var(--district-gold))] mb-6">$999</p>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>• 4 hours full venue access (up to 30)</li>
                  <li>• Premium catering & open bar</li>
                  <li>• Unlimited arcade & activities</li>
                  <li>• VR experience included</li>
                  <li>• Professional DJ & lighting</li>
                  <li>• Party coordinator & staff</li>
                </ul>
                <Button
                  className="w-full bg-[hsl(var(--district-gold))] text-black hover:bg-[hsl(var(--district-gold))]/90"
                  asChild
                >
                  <Link href="/contact">Book This Package</Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
