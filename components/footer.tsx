import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-orange-50 via-purple-50 to-pink-50 text-gray-900 border-t-4 border-orange-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div>
            <Image src="/images/logo.png" alt="District Eat & Play" width={80} height={80} className="mb-4" />
            <h3 className="font-mono text-2xl font-bold mb-2 text-gray-900">DISTRICT</h3>
            <p className="text-[hsl(var(--district-orange))] font-semibold mb-4">Eat. Drink. Play. Repeat.</p>
            <p className="text-sm text-gray-700">
              The ultimate entertainment destination for unforgettable experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-lg font-bold mb-4 text-gray-900">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-gray-700 font-semibold hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 px-3 py-2 rounded-lg transition-all inline-block">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-gray-700 font-semibold hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 px-3 py-2 rounded-lg transition-all inline-block">
                  Games & Activities
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-700 font-semibold hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 px-3 py-2 rounded-lg transition-all inline-block">
                  Events & Parties
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="text-gray-700 font-semibold hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 px-3 py-2 rounded-lg transition-all inline-block"
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-700 font-semibold hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 px-3 py-2 rounded-lg transition-all inline-block">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 font-semibold hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 px-3 py-2 rounded-lg transition-all inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-mono text-lg font-bold mb-4 text-gray-900">Locations</h4>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-orange-600 mb-1">Sanford, FL</p>
                <p className="text-sm text-gray-700 flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-500" />
                  123 Main Street, Sanford, FL 32771
                </p>
              </div>
              <div>
                <p className="font-semibold text-purple-600 mb-1">Salina, KS</p>
                <p className="text-sm text-gray-700 flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-500" />
                  456 Oak Avenue, Salina, KS 67401
                </p>
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-mono text-lg font-bold mb-4 text-gray-900">Get In Touch</h4>
            <div className="space-y-3 mb-6">
              <a
                href="tel:407-666-3002"
                className="flex items-center gap-2 text-gray-700 font-semibold hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 px-3 py-2 rounded-lg transition-all w-fit"
              >
                <Phone className="w-4 h-4" />
                407-666-3002
              </a>
              <a
                href="mailto:info@districteatandplay.com"
                className="flex items-center gap-2 text-gray-700 font-semibold hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 px-3 py-2 rounded-lg transition-all w-fit"
              >
                <Mail className="w-4 h-4" />
                info@districteatandplay.com
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center hover:from-blue-500 hover:to-blue-700 text-white transition-all hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center hover:from-pink-500 hover:to-orange-500 text-white transition-all hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center hover:from-cyan-500 hover:to-blue-600 text-white transition-all hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center hover:from-red-600 hover:to-pink-700 text-white transition-all hover:scale-110"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-sm text-gray-700">
          <p>&copy; {new Date().getFullYear()} District Eat & Play. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
