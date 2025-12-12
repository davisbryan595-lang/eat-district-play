import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Users, Briefcase, PartyPopper } from "lucide-react"
import Link from "next/link"

export default function EventsPage() {
  return (
    <>
      <Navigation />

      <div className="pt-20">
        {/* Hero */}
        <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-br from-pink-200 via-orange-200 to-purple-200">
          <div className="absolute inset-0 opacity-30">
            <img src="/party-celebration-people-having-fun.jpg" alt="Events" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 text-center">
            <h1 className="font-mono text-5xl md:text-7xl font-bold text-gray-900 mb-4 drop-shadow-lg">EVENTS & PARTIES</h1>
            <p className="text-xl text-gray-800 font-semibold drop-shadow-md">Make Every Celebration Unforgettable</p>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-white text-center mb-12">
              Perfect For <span className="text-[hsl(var(--district-red))]">Every</span> Occasion
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-gray-900 to-black border-[hsl(var(--district-red))]/30 p-8 text-center hover:scale-105 transition-transform">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--district-red))]/20 flex items-center justify-center mx-auto mb-4">
                  <PartyPopper className="w-8 h-8 text-[hsl(var(--district-red))]" />
                </div>
                <h3 className="font-mono text-xl font-bold text-white mb-2">Birthday Parties</h3>
                <p className="text-gray-400">Kids & adults love our birthday packages</p>
              </Card>

              <Card className="bg-gradient-to-br from-gray-900 to-black border-[hsl(var(--district-blue))]/30 p-8 text-center hover:scale-105 transition-transform">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--district-blue))]/20 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-[hsl(var(--district-blue))]" />
                </div>
                <h3 className="font-mono text-xl font-bold text-white mb-2">Corporate Events</h3>
                <p className="text-gray-400">Team building & company celebrations</p>
              </Card>

              <Card className="bg-gradient-to-br from-gray-900 to-black border-[hsl(var(--district-gold))]/30 p-8 text-center hover:scale-105 transition-transform">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--district-gold))]/20 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[hsl(var(--district-gold))]" />
                </div>
                <h3 className="font-mono text-xl font-bold text-white mb-2">Group Outings</h3>
                <p className="text-gray-400">Friends, family, & social groups</p>
              </Card>

              <Card className="bg-gradient-to-br from-gray-900 to-black border-[hsl(var(--district-red))]/30 p-8 text-center hover:scale-105 transition-transform">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--district-red))]/20 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-[hsl(var(--district-red))]" />
                </div>
                <h3 className="font-mono text-xl font-bold text-white mb-2">Special Events</h3>
                <p className="text-gray-400">Fundraisers, leagues, & tournaments</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Weekly Events */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-white text-center mb-12">
              <span className="text-[hsl(var(--district-red))]">Weekly</span> Events
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              {[
                { day: "Monday", event: "Industry Night", desc: "50% off for hospitality workers with valid ID" },
                { day: "Tuesday", event: "Trivia Night", desc: "Test your knowledge, win prizes! 7PM start" },
                { day: "Wednesday", event: "Wine Down Wednesday", desc: "$6 all wines by the glass" },
                { day: "Thursday", event: "Retro Game Night", desc: "Classic arcade tournaments with prizes" },
                { day: "Friday", event: "Cosmic Bowling", desc: "Glow bowling with DJ 9PM-1AM" },
                { day: "Saturday", event: "Live Music", desc: "Local bands every Saturday night" },
                { day: "Sunday", event: "Family Fun Day", desc: "Kids bowl free with adult purchase" },
              ].map((item, index) => (
                <Card key={index} className="bg-black border-[hsl(var(--district-red))]/20 p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-32">
                      <span className="font-mono text-2xl font-bold text-[hsl(var(--district-red))]">{item.day}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-mono text-xl font-bold text-white mb-1">{item.event}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                    <Button
                      variant="outline"
                      className="border-[hsl(var(--district-red))] text-[hsl(var(--district-red))] hover:bg-[hsl(var(--district-red))] hover:text-white md:w-auto bg-transparent"
                    >
                      Learn More
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[hsl(var(--district-red))]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-white mb-6">Ready to Book Your Event?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our event coordinators are standing by to help plan your perfect celebration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                asChild
              >
                <Link href="tel:407-666-3002">Call: 407-666-3002</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
