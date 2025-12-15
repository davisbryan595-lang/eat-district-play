"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { clearAdminSession } from "@/lib/admin-auth"
import { UtensilsCrossed, Calendar, Gamepad2, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdminSidebarProps {
  activeSection: string
  onSelectSection: (section: string) => void
}

export function AdminSidebar({ activeSection, onSelectSection }: AdminSidebarProps) {
  const router = useRouter()

  const menuItems = [
    { id: "menu", label: "Menu Items", icon: UtensilsCrossed, description: "Food & Drinks" },
    { id: "events", label: "Events", icon: Calendar, description: "Events & Parties" },
    { id: "activities", label: "Activities", icon: Gamepad2, description: "Games & Activities" },
  ]

  const handleLogout = () => {
    clearAdminSession()
    router.push("/admin/login")
  }

  return (
    <aside className="w-64 bg-white border-r-4 border-[#fd812a] shadow-lg flex flex-col">
      {/* Header */}
      <div className="p-6 border-b-2 border-[#fd812a]/20">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity mb-2">
          <Image src="/images/logo.png" alt="District" width={40} height={40} />
          <div>
            <h1 className="font-mono font-bold text-gray-900 text-sm">DISTRICT</h1>
            <p className="text-xs text-[#fd812a]">Admin</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id
          return (
            <button
              key={item.id}
              onClick={() => onSelectSection(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all font-semibold flex items-center gap-3 ${
                isActive
                  ? "bg-gradient-to-r from-[#fd812a] to-orange-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-orange-50 hover:text-[#fd812a]"
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <div>
                <div className="text-sm">{item.label}</div>
                <div className={`text-xs font-normal ${isActive ? "text-white/80" : "text-gray-500"}`}>{item.description}</div>
              </div>
            </button>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t-2 border-[#fd812a]/20 space-y-3">
        <Button
          variant="outline"
          className="w-full border-2 border-gray-200 text-gray-700 hover:bg-gray-50 font-bold flex items-center justify-center gap-2"
          asChild
        >
          <Link href="/">
            <span>View Website</span>
          </Link>
        </Button>
        <Button onClick={handleLogout} className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold flex items-center justify-center gap-2">
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </div>
    </aside>
  )
}
