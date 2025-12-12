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
        <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-br from-[#fd812a]/20 via-[#ffda00]/20 to-purple-200">
          <div className="absolute inset-0 opacity-30">
            <img src="/party-celebration-people-having-fun.jpg" alt="Events" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 text-center">
            <h1 className="font-mono text-5xl md:text-7xl font-bold text-gray-900 mb-4 drop-shadow-lg">EVENTS & PARTIES</h1>
            <p className="text-xl text-gray-800 font-semibold drop-shadow-md">Make Every Celebration Unforgettable</p>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
              Perfect For <span className="bg-gradient-to-r from-[#fd812a] to-[#ffda00] bg-clip-text text-transparent">Every</span> Occasion
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-white to-orange-100 border-4 border-[#fd812a] p-8 text-center hover:scale-105 transition-all hover:shadow-lg hover:border-[#fd812a]/80">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#fd812a]/20 to-[#fd812a]/30 flex items-center justify-center mx-auto mb-4">
                  <PartyPopper className="w-8 h-8 text-[#fd812a]" />
                </div>
                <h3 className="font-mono text-xl font-bold text-gray-900 mb-2">Birthday Parties</h3>
                <p className="text-gray-700 font-semibold">Kids & adults love our birthday packages</p>
              </Card>

              <Card className="bg-gradient-to-br from-white to-yellow-100 border-4 border-[#ffda00] p-8 text-center hover:scale-105 transition-all hover:shadow-lg hover:border-[#ffda00]/80">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ffda00]/20 to-[#ffda00]/30 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-[#ffda00]" />
                </div>
                <h3 className="font-mono text-xl font-bold text-gray-900 mb-2">Corporate Events</h3>
                <p className="text-gray-700 font-semibold">Team building & company celebrations</p>
              </Card>

              <Card className="bg-gradient-to-br from-white to-cyan-100 border-4 border-[#02ffff] p-8 text-center hover:scale-105 transition-all hover:shadow-lg hover:border-[#02ffff]/80">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#02ffff]/20 to-[#02ffff]/30 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#02ffff]" />
                </div>
                <h3 className="font-mono text-xl font-bold text-gray-900 mb-2">Group Outings</h3>
                <p className="text-gray-700 font-semibold">Friends, family, & social groups</p>
              </Card>

              <Card className="bg-gradient-to-br from-white to-purple-100 border-4 border-purple-400 p-8 text-center hover:scale-105 transition-all hover:shadow-lg hover:border-purple-500">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-mono text-xl font-bold text-gray-900 mb-2">Special Events</h3>
                <p className="text-gray-700 font-semibold">Fundraisers, leagues, & tournaments</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Weekly Events */}
        <section className="py-20 bg-gradient-to-b from-purple-50 to-pink-50">
          <div className="container mx-auto px-4">
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
              <span className="bg-gradient-to-r from-[#ffda00] to-[#fd812a] bg-clip-text text-transparent">Weekly</span> Events
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              {[
                { day: "Monday", event: "Industry Night", desc: "50% off for hospitality workers with valid ID", color: "orange" },
                { day: "Tuesday", event: "Trivia Night", desc: "Test your knowledge, win prizes! 7PM start", color: "orange" },
                { day: "Wednesday", event: "Wine Down Wednesday", desc: "$6 all wines by the glass", color: "yellow" },
                { day: "Thursday", event: "Retro Game Night", desc: "Classic arcade tournaments with prizes", color: "orange" },
                { day: "Friday", event: "Cosmic Bowling", desc: "Glow bowling with DJ 9PM-1AM", color: "orange" },
                { day: "Saturday", event: "Live Music", desc: "Local bands every Saturday night", color: "yellow" },
                { day: "Sunday", event: "Family Fun Day", desc: "Kids bowl free with adult purchase", color: "cyan" },
              ].map((item, index) => {
                const colorClasses = {
                  orange: "border-[#fd812a] hover:border-[#fd812a]/80",
                  yellow: "border-[#ffda00] hover:border-[#ffda00]/80",
                  cyan: "border-[#02ffff] hover:border-[#02ffff]/80"
                };
                const dayColors = {
                  orange: "text-[#fd812a]",
                  yellow: "text-[#ffda00]",
                  cyan: "text-[#02ffff]"
                };
                const buttonColors = {
                  orange: "border-[#fd812a] text-[#fd812a] hover:bg-[#fd812a]",
                  yellow: "border-[#ffda00] text-[#ffda00] hover:bg-[#ffda00]",
                  cyan: "border-[#02ffff] text-[#02ffff] hover:bg-[#02ffff]"
                };
                return (
                  <Card key={index} className={`bg-white border-4 p-6 ${colorClasses[item.color]} transition-all hover:shadow-lg`}>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="md:w-32">
                        <span className={`font-mono text-2xl font-bold ${dayColors[item.color]}`}>{item.day}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-mono text-xl font-bold text-gray-900 mb-1">{item.event}</h3>
                        <p className="text-gray-700 font-semibold">{item.desc}</p>
                      </div>
                      <Button
                        variant="outline"
                        className={`border-2 ${buttonColors[item.color]} hover:text-white font-bold md:w-auto bg-white transition-all`}
                      >
                        Learn More
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#fd812a] via-purple-500 to-[#02ffff]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">Ready to Book Your Event?</h2>
            <p className="text-xl text-white/98 mb-8 max-w-2xl mx-auto font-semibold drop-shadow-md">
              Our event coordinators are standing by to help plan your perfect celebration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-bold shadow-lg hover:shadow-xl transition-all" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent font-bold shadow-lg hover:shadow-xl transition-all"
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
