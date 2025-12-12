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
        <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200">
          <div className="absolute inset-0 opacity-30">
            <img src="/bowling-arcade-entertainment.jpg" alt="Games" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 text-center">
            <h1 className="font-mono text-5xl md:text-7xl font-bold text-gray-900 mb-4 drop-shadow-lg">GAMES & ACTIVITIES</h1>
            <p className="text-xl text-gray-800 font-semibold drop-shadow-md">Endless Entertainment Awaits</p>
          </div>
        </section>

        {/* Activities Grid */}
        <section className="py-20 bg-gradient-to-b from-white via-yellow-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities.map((activity, index) => {
                const colorMap = {
                  orange: { border: "border-orange-400 hover:border-orange-500", gradient: "from-orange-500 to-orange-600", bg: "to-orange-100" },
                  green: { border: "border-green-400 hover:border-green-500", gradient: "from-green-500 to-green-600", bg: "to-green-100" },
                  purple: { border: "border-purple-400 hover:border-purple-500", gradient: "from-purple-500 to-purple-600", bg: "to-purple-100" },
                  pink: { border: "border-pink-400 hover:border-pink-500", gradient: "from-pink-500 to-pink-600", bg: "to-pink-100" },
                  blue: { border: "border-blue-400 hover:border-blue-500", gradient: "from-blue-500 to-blue-600", bg: "to-blue-100" },
                };
                const colors = colorMap[activity.color];
                return (
                  <Card
                    key={index}
                    className={`bg-white border-4 ${colors.border} overflow-hidden group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-mono text-2xl font-bold text-white mb-1 drop-shadow-lg">{activity.name}</h3>
                        <p className={`text-white font-bold drop-shadow-md`}>{activity.price}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-4 font-semibold">{activity.description}</p>
                      <Button
                        className={`w-full bg-gradient-to-r ${colors.gradient} hover:opacity-90 text-white font-bold transition-all`}
                        asChild
                      >
                        <Link href="/contact">Reserve Now</Link>
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Party Packages */}
        <section className="py-20 bg-gradient-to-b from-purple-50 to-pink-50">
          <div className="container mx-auto px-4">
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
              <span className="text-[hsl(var(--district-orange))]">Party</span> Packages
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-white to-orange-50 border-[hsl(var(--district-orange))]/30 p-8 shadow-lg">
                <h3 className="font-mono text-2xl font-bold text-gray-900 mb-4">Basic Package</h3>
                <p className="text-4xl font-bold text-[hsl(var(--district-orange))] mb-6">$299</p>
                <ul className="space-y-3 text-gray-700 mb-8">
                  <li>• 2 hours of bowling (up to 10 people)</li>
                  <li>• Pizza & soft drinks</li>
                  <li>• $20 arcade card</li>
                  <li>• Private party area</li>
                </ul>
                <Button className="w-full bg-[hsl(var(--district-orange))] hover:bg-[hsl(var(--district-orange))]/90 text-white" asChild>
                  <Link href="/contact">Book This Package</Link>
                </Button>
              </Card>

              <Card className="bg-gradient-to-br from-white to-green-50 border-[hsl(var(--district-green))]/30 p-8 ring-2 ring-[hsl(var(--district-green))]/50 shadow-lg">
                <div className="text-center mb-4">
                  <span className="bg-[hsl(var(--district-green))] text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
                <h3 className="font-mono text-2xl font-bold text-gray-900 mb-4">Premium Package</h3>
                <p className="text-4xl font-bold text-[hsl(var(--district-green))] mb-6">$599</p>
                <ul className="space-y-3 text-gray-700 mb-8">
                  <li>• 3 hours unlimited activities (up to 20)</li>
                  <li>• Full food & drink buffet</li>
                  <li>• $50 arcade card per person</li>
                  <li>• 1 hour axe throwing session</li>
                  <li>• Dedicated party host</li>
                </ul>
                <Button className="w-full bg-[hsl(var(--district-green))] hover:bg-[hsl(var(--district-green))]/90 text-white" asChild>
                  <Link href="/contact">Book This Package</Link>
                </Button>
              </Card>

              <Card className="bg-gradient-to-br from-white to-purple-50 border-[hsl(var(--district-purple))]/30 p-8 shadow-lg">
                <h3 className="font-mono text-2xl font-bold text-gray-900 mb-4">Ultimate Package</h3>
                <p className="text-4xl font-bold text-[hsl(var(--district-purple))] mb-6">$999</p>
                <ul className="space-y-3 text-gray-700 mb-8">
                  <li>• 4 hours full venue access (up to 30)</li>
                  <li>• Premium catering & open bar</li>
                  <li>• Unlimited arcade & activities</li>
                  <li>• VR experience included</li>
                  <li>• Professional DJ & lighting</li>
                  <li>• Party coordinator & staff</li>
                </ul>
                <Button
                  className="w-full bg-[hsl(var(--district-purple))] hover:bg-[hsl(var(--district-purple))]/90 text-white"
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
