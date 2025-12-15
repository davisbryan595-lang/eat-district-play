"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Edit2, Trash2, Save, X, Calendar } from "lucide-react"

interface Event {
  id: string
  name: string
  description: string
  date: string
  time: string
  price?: string
  capacity?: string
  image?: string
  recurring?: "weekly" | "monthly" | "once"
}

const STORAGE_KEY = "district_events"

const DEFAULT_EVENTS: Event[] = [
  {
    id: "1",
    name: "Cosmic Bowling Night",
    description: "Glow-in-the-dark bowling with DJ and drink specials",
    date: "2024-01-12",
    time: "21:00",
    price: "Free",
    capacity: "40",
    recurring: "weekly",
    image: "",
  },
  {
    id: "2",
    name: "Retro Game Night",
    description: "Classic arcade tournaments with prizes",
    date: "2024-01-11",
    time: "19:00",
    price: "$5",
    capacity: "50",
    recurring: "weekly",
    image: "",
  },
  {
    id: "3",
    name: "Game Day Watch Parties",
    description: "Big screens, cold drinks, and game-day specials",
    date: "2024-01-13",
    time: "14:00",
    price: "Free",
    capacity: "100",
    recurring: "once",
    image: "",
  },
]

export function EventsManager() {
  const [events, setEvents] = useState<Event[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editForm, setEditForm] = useState<Event | null>(null)
  const [newEvent, setNewEvent] = useState<Event>({
    id: "",
    name: "",
    description: "",
    date: "",
    time: "18:00",
    price: "Free",
    capacity: "",
    recurring: "once",
    image: "",
  })
  const [showNewForm, setShowNewForm] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    setEvents(saved ? JSON.parse(saved) : DEFAULT_EVENTS)
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events))
  }, [events])

  const addEvent = () => {
    if (!newEvent.name || !newEvent.date) return
    const event: Event = {
      ...newEvent,
      id: Date.now().toString(),
    }
    setEvents([...events, event])
    setNewEvent({
      id: "",
      name: "",
      description: "",
      date: "",
      time: "18:00",
      price: "Free",
      capacity: "",
      recurring: "once",
      image: "",
    })
    setShowNewForm(false)
  }

  const deleteEvent = (id: string) => {
    setEvents(events.filter((event) => event.id !== id))
  }

  const startEdit = (event: Event) => {
    setEditingId(event.id)
    setEditForm({ ...event })
  }

  const saveEdit = () => {
    if (!editForm) return
    setEvents(events.map((event) => (event.id === editingId ? editForm : event)))
    setEditingId(null)
    setEditForm(null)
  }

  const sortedEvents = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-mono text-3xl font-bold text-gray-900">Events & Parties</h1>
          <p className="text-gray-600 font-semibold mt-1">Manage upcoming events and special occasions</p>
        </div>
        <Button
          onClick={() => setShowNewForm(!showNewForm)}
          className="bg-gradient-to-r from-[#ffda00] to-yellow-500 hover:from-[#ffda00]/90 hover:to-yellow-600 text-gray-900 font-bold flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Event
        </Button>
      </div>

      {/* Add New Event Form */}
      {showNewForm && (
        <Card className="border-2 border-[#ffda00] p-6 bg-yellow-50">
          <h3 className="font-mono text-xl font-bold text-gray-900 mb-4">Create New Event</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Event Name</label>
              <Input
                value={newEvent.name}
                onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
                placeholder="e.g., Birthday Party Special"
                className="border-2 border-[#ffda00]/30"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Date</label>
              <Input
                type="date"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                className="border-2 border-[#ffda00]/30"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Time</label>
              <Input
                type="time"
                value={newEvent.time}
                onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                className="border-2 border-[#ffda00]/30"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Recurring</label>
              <select
                value={newEvent.recurring}
                onChange={(e) => setNewEvent({ ...newEvent, recurring: e.target.value as Event["recurring"] })}
                className="w-full border-2 border-[#ffda00]/30 rounded-lg px-3 py-2 font-semibold"
              >
                <option value="once">One-time</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Price</label>
              <Input
                value={newEvent.price}
                onChange={(e) => setNewEvent({ ...newEvent, price: e.target.value })}
                placeholder="e.g., $25 or Free"
                className="border-2 border-[#ffda00]/30"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Capacity</label>
              <Input
                value={newEvent.capacity}
                onChange={(e) => setNewEvent({ ...newEvent, capacity: e.target.value })}
                placeholder="e.g., 50"
                className="border-2 border-[#ffda00]/30"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-900 mb-2">Description</label>
              <Textarea
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                placeholder="Tell guests what to expect..."
                className="border-2 border-[#ffda00]/30 min-h-[80px]"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-900 mb-2">Image URL (Optional)</label>
              <Input
                value={newEvent.image}
                onChange={(e) => setNewEvent({ ...newEvent, image: e.target.value })}
                placeholder="e.g., /event-image.jpg"
                className="border-2 border-[#ffda00]/30"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <Button
              onClick={addEvent}
              className="bg-gradient-to-r from-[#ffda00] to-yellow-500 hover:from-[#ffda00]/90 hover:to-yellow-600 text-gray-900 font-bold"
            >
              Create Event
            </Button>
            <Button variant="outline" onClick={() => setShowNewForm(false)} className="border-2 border-gray-300">
              Cancel
            </Button>
          </div>
        </Card>
      )}

      {/* Events List */}
      <div className="space-y-4">
        {sortedEvents.map((event) =>
          editingId === event.id && editForm ? (
            <Card key={event.id} className="border-2 border-blue-400 p-6 bg-blue-50">
              <h4 className="font-mono font-bold text-gray-900 mb-4">Editing: {event.name}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  placeholder="Event name"
                  className="border-2 border-blue-300"
                />
                <Input
                  type="date"
                  value={editForm.date}
                  onChange={(e) => setEditForm({ ...editForm, date: e.target.value })}
                  className="border-2 border-blue-300"
                />
                <Input
                  type="time"
                  value={editForm.time}
                  onChange={(e) => setEditForm({ ...editForm, time: e.target.value })}
                  className="border-2 border-blue-300"
                />
                <select
                  value={editForm.recurring}
                  onChange={(e) => setEditForm({ ...editForm, recurring: e.target.value as Event["recurring"] })}
                  className="border-2 border-blue-300 rounded-lg px-3 py-2 font-semibold"
                >
                  <option value="once">One-time</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
                <Input
                  value={editForm.price}
                  onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
                  placeholder="Price"
                  className="border-2 border-blue-300"
                />
                <Input
                  value={editForm.capacity}
                  onChange={(e) => setEditForm({ ...editForm, capacity: e.target.value })}
                  placeholder="Capacity"
                  className="border-2 border-blue-300"
                />
                <div className="md:col-span-2">
                  <Textarea
                    value={editForm.description}
                    onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                    placeholder="Description"
                    className="border-2 border-blue-300 min-h-[80px]"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <Button onClick={saveEdit} className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold flex items-center gap-2">
                  <Save className="w-4 h-4" />
                  Save
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setEditingId(null)}
                  className="border-2 border-gray-300 flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </Button>
              </div>
            </Card>
          ) : (
            <Card key={event.id} className="border-2 border-[#ffda00]/20 p-6 hover:border-[#ffda00] transition-all hover:shadow-md">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-mono text-lg font-bold text-gray-900">{event.name}</h3>
                    <span className="text-xs bg-[#ffda00]/20 text-[#ffda00] px-2 py-1 rounded-full font-semibold capitalize">{event.recurring}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm font-semibold text-gray-700 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-[#ffda00]" />
                      {new Date(event.date).toLocaleDateString()} at {event.time}
                    </span>
                    {event.price && <span className="text-[#ffda00] font-bold">{event.price}</span>}
                    {event.capacity && <span>Capacity: {event.capacity}</span>}
                  </div>
                  <p className="text-gray-700 font-semibold">{event.description}</p>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button
                    onClick={() => startEdit(event)}
                    size="sm"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold flex items-center gap-1"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </Button>
                  <Button
                    onClick={() => deleteEvent(event.id)}
                    size="sm"
                    className="bg-red-500 hover:bg-red-600 text-white font-bold flex items-center gap-1"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </Button>
                </div>
              </div>
            </Card>
          )
        )}
      </div>

      {events.length === 0 && (
        <Card className="border-2 border-dashed border-gray-300 p-12 text-center">
          <p className="text-gray-600 font-semibold">No events created yet. Start by adding your first event!</p>
        </Card>
      )}
    </div>
  )
}
