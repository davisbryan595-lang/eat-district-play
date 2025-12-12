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
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="font-mono text-3xl font-bold text-white mb-6">
                  <span className="text-[hsl(var(--district-red))]">Send</span> Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-semibold mb-2">Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-gray-900 border-gray-700 text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">Email *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-gray-900 border-gray-700 text-white"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-semibold mb-2">Phone</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-gray-900 border-gray-700 text-white"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">Location *</label>
                      <select
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-3 py-2"
                      >
                        <option value="sanford">Sanford, FL</option>
                        <option value="salina">Salina, KS</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-semibold mb-2">Event Type</label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-3 py-2"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="birthday">Birthday Party</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="group">Group Outing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">Number of Guests</label>
                      <Input
                        type="number"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="bg-gray-900 border-gray-700 text-white"
                        placeholder="10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Preferred Date</label>
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="bg-gray-900 border-gray-700 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Message</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-gray-900 border-gray-700 text-white min-h-[120px]"
                      placeholder="Tell us about your event or inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[hsl(var(--district-red))] hover:bg-[hsl(var(--district-red))]/90 text-white animate-red-glow"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="font-mono text-3xl font-bold text-white mb-6">
                  <span className="text-[hsl(var(--district-red))]">Get</span> In Touch
                </h2>

                <Card className="bg-gradient-to-br from-gray-900 to-black border-[hsl(var(--district-red))]/30 p-6">
                  <h3 className="font-mono text-2xl font-bold text-white mb-4">Sanford, FL</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[hsl(var(--district-red))] flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-300">123 Main Street</p>
                        <p className="text-gray-300">Sanford, FL 32771</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[hsl(var(--district-red))] flex-shrink-0" />
                      <a href="tel:407-666-3002" className="text-[hsl(var(--district-red))] hover:underline">
                        407-666-3002
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[hsl(var(--district-red))] flex-shrink-0" />
                      <a
                        href="mailto:sanford@districteatandplay.com"
                        className="text-[hsl(var(--district-red))] hover:underline"
                      >
                        sanford@districteatandplay.com
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[hsl(var(--district-red))] flex-shrink-0 mt-1" />
                      <div className="text-gray-300">
                        <p>Mon-Thu: 11AM - 11PM</p>
                        <p>Fri-Sat: 11AM - 2AM</p>
                        <p>Sunday: 11AM - 10PM</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="bg-gradient-to-br from-gray-900 to-black border-[hsl(var(--district-blue))]/30 p-6">
                  <h3 className="font-mono text-2xl font-bold text-white mb-4">Salina, KS</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[hsl(var(--district-blue))] flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-300">456 Oak Avenue</p>
                        <p className="text-gray-300">Salina, KS 67401</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[hsl(var(--district-blue))] flex-shrink-0" />
                      <a href="tel:785-555-0123" className="text-[hsl(var(--district-blue))] hover:underline">
                        785-555-0123
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[hsl(var(--district-blue))] flex-shrink-0" />
                      <a
                        href="mailto:salina@districteatandplay.com"
                        className="text-[hsl(var(--district-blue))] hover:underline"
                      >
                        salina@districteatandplay.com
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[hsl(var(--district-blue))] flex-shrink-0 mt-1" />
                      <div className="text-gray-300">
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
