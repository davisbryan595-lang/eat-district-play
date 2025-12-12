import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, NavigationIcon } from "lucide-react"

export default function LocationsPage() {
  const locations = [
    {
      city: "Sanford, FL",
      address: "123 Main Street, Sanford, FL 32771",
      phone: "407-666-3002",
      hours: {
        weekday: "Mon-Thu: 11AM - 11PM",
        weekend: "Fri-Sat: 11AM - 2AM",
        sunday: "Sunday: 11AM - 10PM",
      },
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.123456789!2d-81.2729!3d28.8028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQ4JzEwLjEiTiA4McKwMTYnMjIuNCJX!5e0!3m2!1sen!2sus!4v1234567890",
    },
    {
      city: "Salina, KS",
      address: "456 Oak Avenue, Salina, KS 67401",
      phone: "785-555-0123",
      hours: {
        weekday: "Mon-Thu: 11AM - 11PM",
        weekend: "Fri-Sat: 11AM - 1AM",
        sunday: "Sunday: 12PM - 10PM",
      },
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3091.123456789!2d-97.6114!3d38.8403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDUwJzI1LjEiTiA5N8KwMzYnNDEuMCJX!5e0!3m2!1sen!2sus!4v1234567890",
    },
  ]

  return (
    <>
      <Navigation />

      <div className="pt-20">
        {/* Hero */}
        <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-br from-[#ffda00]/20 via-[#fd812a]/20 to-[#02ffff]/20">
          <div className="absolute inset-0 opacity-30">
            <img src="/modern-entertainment-venue-exterior.jpg" alt="Locations" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 text-center">
            <h1 className="font-mono text-5xl md:text-7xl font-bold text-gray-900 mb-4 drop-shadow-lg">OUR LOCATIONS</h1>
            <p className="text-xl text-gray-800 font-semibold drop-shadow-md">Visit Us in Florida or Kansas</p>
          </div>
        </section>

        {/* Locations */}
        <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {locations.map((location, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Info Card */}
                  <Card className={`bg-gradient-to-br from-white p-8 border-4 transition-all hover:shadow-lg ${index === 0 ? "to-orange-100 border-orange-400 hover:border-orange-500" : "to-purple-100 border-purple-400 hover:border-purple-500"}`}>
                    <h2 className="font-mono text-4xl font-bold text-gray-900 mb-6">
                      <span className={index === 0 ? "text-orange-600" : "text-purple-600"}>{location.city}</span>
                    </h2>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <MapPin className={`w-6 h-6 flex-shrink-0 mt-1 ${index === 0 ? "text-orange-500" : "text-purple-500"}`} />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                          <p className="text-gray-700 font-semibold">{location.address}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Phone className={`w-6 h-6 flex-shrink-0 mt-1 ${index === 0 ? "text-orange-500" : "text-purple-500"}`} />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                          <a href={`tel:${location.phone}`} className={`font-bold hover:underline ${index === 0 ? "text-orange-600" : "text-purple-600"}`}>
                            {location.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Clock className={`w-6 h-6 flex-shrink-0 mt-1 ${index === 0 ? "text-orange-500" : "text-purple-500"}`} />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Hours</h3>
                          <div className="space-y-1 text-gray-700 font-semibold">
                            <p>{location.hours.weekday}</p>
                            <p>{location.hours.weekend}</p>
                            <p>{location.hours.sunday}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex gap-4">
                      <Button className={`flex-1 font-bold text-white ${index === 0 ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700" : "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"}`}>
                        <NavigationIcon className="w-4 h-4 mr-2" />
                        Get Directions
                      </Button>
                      <Button variant="outline" className={`flex-1 font-bold border-2 ${index === 0 ? "border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white" : "border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white"}`}>
                        Call Now
                      </Button>
                    </div>
                  </Card>

                  {/* Map */}
                  <div className="h-[400px] rounded-lg overflow-hidden border border-[hsl(var(--district-red))]/20">
                    <iframe
                      src={location.mapEmbed}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map of ${location.city}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
          <div className="container mx-auto px-4 text-center">
            <h3 className="font-mono text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">Can't Wait to Visit?</h3>
            <p className="text-white/98 mb-6 text-lg font-semibold drop-shadow-md">Book your experience online or give us a call</p>
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-bold shadow-lg hover:shadow-xl transition-all">
              Book Now
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
