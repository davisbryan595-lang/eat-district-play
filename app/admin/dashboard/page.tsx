"use client"

import { useState } from "react"
import { AdminGuard } from "@/components/admin/admin-guard"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { MenuManager } from "@/components/admin/menu-manager"
import { EventsManager } from "@/components/admin/events-manager"
import { ActivitiesManager } from "@/components/admin/activities-manager"

type AdminSection = "menu" | "events" | "activities"

export default function AdminDashboardPage() {
  const [activeSection, setActiveSection] = useState<AdminSection>("menu")

  return (
    <AdminGuard>
      <div className="flex h-screen bg-gray-50">
        <AdminSidebar activeSection={activeSection} onSelectSection={setActiveSection} />

        <main className="flex-1 overflow-auto">
          <div className="p-8">
            {activeSection === "menu" && <MenuManager />}
            {activeSection === "events" && <EventsManager />}
            {activeSection === "activities" && <ActivitiesManager />}
          </div>
        </main>
      </div>
    </AdminGuard>
  )
}
