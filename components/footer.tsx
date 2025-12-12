import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-[hsl(var(--district-red))]/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div>
            <Image src="/images/logo.png" alt="District Eat & Play" width={80} height={80} className="mb-4" />
            <h3 className="font-mono text-2xl font-bold mb-2">DISTRICT</h3>
            <p className="text-[hsl(var(--district-red))] font-semibold mb-4">Eat. Drink. Play. Repeat.</p>
            <p className="text-sm text-gray-400">
              The ultimate entertainment destination for unforgettable experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-[hsl(var(--district-red))] transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-gray-400 hover:text-[hsl(var(--district-red))] transition-colors">
                  Games & Activities
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-[hsl(var(--district-red))] transition-colors">
                  Events & Parties
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="text-gray-400 hover:text-[hsl(var(--district-red))] transition-colors"
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-[hsl(var(--district-red))] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[hsl(var(--district-red))] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-mono text-lg font-bold mb-4">Locations</h4>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-[hsl(var(--district-red))] mb-1">Sanford, FL</p>
                <p className="text-sm text-gray-400 flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  123 Main Street, Sanford, FL 32771
                </p>
              </div>
              <div>
                <p className="font-semibold text-[hsl(var(--district-red))] mb-1">Salina, KS</p>
                <p className="text-sm text-gray-400 flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  456 Oak Avenue, Salina, KS 67401
                </p>
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-mono text-lg font-bold mb-4">Get In Touch</h4>
            <div className="space-y-3 mb-6">
              <a
                href="tel:407-666-3002"
                className="flex items-center gap-2 text-gray-400 hover:text-[hsl(var(--district-red))] transition-colors"
              >
                <Phone className="w-4 h-4" />
                407-666-3002
              </a>
              <a
                href="mailto:info@districteatandplay.com"
                className="flex items-center gap-2 text-gray-400 hover:text-[hsl(var(--district-red))] transition-colors"
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
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[hsl(var(--district-red))] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[hsl(var(--district-red))] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[hsl(var(--district-red))] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[hsl(var(--district-red))] transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} District Eat & Play. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
