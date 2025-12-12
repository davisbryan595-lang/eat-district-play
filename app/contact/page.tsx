"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "sanford",
    eventType: "general",
    guests: "",
    date: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.")
  }

  return (
    <>
      <Navigation />

      <div className="pt-20">
        {/* Hero */}
        <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
          <div className="absolute inset-0 opacity-30">
            <img src="/placeholder.svg?height=400&width=1600" alt="Contact" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 text-center">
            <h1 className="font-mono text-5xl md:text-7xl font-bold text-gray-900 mb-4 drop-shadow-lg">CONTACT US</h1>
            <p className="text-xl text-gray-800 font-semibold drop-shadow-md">Let's Plan Your Perfect Experience</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-b from-white via-purple-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="font-mono text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">Send</span> Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-900 font-semibold mb-2">Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white border-2 border-orange-300 text-gray-900 font-semibold focus:border-orange-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-900 font-semibold mb-2">Email *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white border-2 border-orange-300 text-gray-900 font-semibold focus:border-orange-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-900 font-semibold mb-2">Phone</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-white border-2 border-orange-300 text-gray-900 font-semibold focus:border-orange-500"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-900 font-semibold mb-2">Location *</label>
                      <select
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-white border-2 border-orange-300 text-gray-900 rounded-lg px-3 py-2 font-semibold focus:border-orange-500"
                      >
                        <option value="sanford">Sanford, FL</option>
                        <option value="salina">Salina, KS</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-900 font-semibold mb-2">Event Type</label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full bg-white border-2 border-orange-300 text-gray-900 rounded-lg px-3 py-2 font-semibold focus:border-orange-500"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="birthday">Birthday Party</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="group">Group Outing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-900 font-semibold mb-2">Number of Guests</label>
                      <Input
                        type="number"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="bg-white border-2 border-orange-300 text-gray-900 font-semibold focus:border-orange-500"
                        placeholder="10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Preferred Date</label>
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="bg-white border-2 border-orange-300 text-gray-900 font-semibold focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Message</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white border-2 border-orange-300 text-gray-900 font-semibold min-h-[120px] focus:border-orange-500"
                      placeholder="Tell us about your event or inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-bold shadow-lg hover:shadow-xl transition-all"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="font-mono text-3xl font-bold text-gray-900 mb-6">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Get</span> In Touch
                </h2>

                <Card className="bg-gradient-to-br from-white to-orange-100 border-4 border-orange-400 p-6 hover:border-orange-500 transition-all">
                  <h3 className="font-mono text-2xl font-bold text-orange-600 mb-4">Sanford, FL</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-700 font-semibold">123 Main Street</p>
                        <p className="text-gray-700 font-semibold">Sanford, FL 32771</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <a href="tel:407-666-3002" className="text-orange-600 hover:underline font-bold">
                        407-666-3002
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <a
                        href="mailto:sanford@districteatandplay.com"
                        className="text-orange-600 hover:underline font-bold"
                      >
                        sanford@districteatandplay.com
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                      <div className="text-gray-700 font-semibold">
                        <p>Mon-Thu: 11AM - 11PM</p>
                        <p>Fri-Sat: 11AM - 2AM</p>
                        <p>Sunday: 11AM - 10PM</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="bg-gradient-to-br from-white to-purple-100 border-4 border-purple-400 p-6 hover:border-purple-500 transition-all">
                  <h3 className="font-mono text-2xl font-bold text-purple-600 mb-4">Salina, KS</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-700 font-semibold">456 Oak Avenue</p>
                        <p className="text-gray-700 font-semibold">Salina, KS 67401</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      <a href="tel:785-555-0123" className="text-purple-600 hover:underline font-bold">
                        785-555-0123
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      <a
                        href="mailto:salina@districteatandplay.com"
                        className="text-purple-600 hover:underline font-bold"
                      >
                        salina@districteatandplay.com
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                      <div className="text-gray-700 font-semibold">
                        <p>Mon-Thu: 11AM - 11PM</p>
                        <p>Fri-Sat: 11AM - 1AM</p>
                        <p>Sunday: 12PM - 10PM</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
