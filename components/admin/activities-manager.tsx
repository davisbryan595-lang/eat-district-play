"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Edit2, Trash2, Save, X } from "lucide-react"

interface Activity {
  id: string
  name: string
  description: string
  price: string
  capacity?: string
  duration?: string
  image?: string
  color: "orange" | "green" | "purple" | "pink" | "blue"
}

const STORAGE_KEY = "district_activities"

const DEFAULT_ACTIVITIES: Activity[] = [
  {
    id: "1",
    name: "Bowling",
    description: "16 state-of-the-art lanes with cosmic bowling on weekends",
    price: "$6 per game",
    capacity: "64",
    duration: "1 hour",
    image: "",
    color: "orange",
  },
  {
    id: "2",
    name: "Arcade",
    description: "100+ classic and modern arcade games",
    price: "Games from $0.50",
    capacity: "Unlimited",
    duration: "Varies",
    image: "",
    color: "green",
  },
  {
    id: "3",
    name: "Axe Throwing",
    description: "Professional axe throwing lanes with safety instruction",
    price: "$25 per person/hour",
    capacity: "20",
    duration: "1 hour",
    image: "",
    color: "purple",
  },
  {
    id: "4",
    name: "VR Experience",
    description: "Immersive virtual reality gaming stations",
    price: "$15 per 30 minutes",
    capacity: "8",
    duration: "30 minutes",
    image: "",
    color: "pink",
  },
]

const COLORS = ["orange", "green", "purple", "pink", "blue"] as const

export function ActivitiesManager() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editForm, setEditForm] = useState<Activity | null>(null)
  const [newActivity, setNewActivity] = useState<Activity>({
    id: "",
    name: "",
    description: "",
    price: "",
    capacity: "",
    duration: "",
    image: "",
    color: "orange",
  })
  const [showNewForm, setShowNewForm] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    setActivities(saved ? JSON.parse(saved) : DEFAULT_ACTIVITIES)
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(activities))
  }, [activities])

  const addActivity = () => {
    if (!newActivity.name || !newActivity.price) return
    const activity: Activity = {
      ...newActivity,
      id: Date.now().toString(),
    }
    setActivities([...activities, activity])
    setNewActivity({
      id: "",
      name: "",
      description: "",
      price: "",
      capacity: "",
      duration: "",
      image: "",
      color: "orange",
    })
    setShowNewForm(false)
  }

  const deleteActivity = (id: string) => {
    setActivities(activities.filter((activity) => activity.id !== id))
  }

  const startEdit = (activity: Activity) => {
    setEditingId(activity.id)
    setEditForm({ ...activity })
  }

  const saveEdit = () => {
    if (!editForm) return
    setActivities(activities.map((activity) => (activity.id === editingId ? editForm : activity)))
    setEditingId(null)
    setEditForm(null)
  }

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { border: string; bg: string; text: string; button: string }> = {
      orange: {
        border: "border-[#fd812a]/20 hover:border-[#fd812a]",
        bg: "bg-orange-50",
        text: "text-[#fd812a]",
        button: "from-[#fd812a] to-orange-600",
      },
      green: {
        border: "border-[#ffda00]/20 hover:border-[#ffda00]",
        bg: "bg-yellow-50",
        text: "text-[#ffda00]",
        button: "from-[#ffda00] to-yellow-500",
      },
      purple: {
        border: "border-purple-400/20 hover:border-purple-400",
        bg: "bg-purple-50",
        text: "text-purple-600",
        button: "from-purple-500 to-purple-600",
      },
      pink: {
        border: "border-[#02ffff]/20 hover:border-[#02ffff]",
        bg: "bg-cyan-50",
        text: "text-[#02ffff]",
        button: "from-[#02ffff] to-cyan-400",
      },
      blue: {
        border: "border-blue-400/20 hover:border-blue-400",
        bg: "bg-blue-50",
        text: "text-blue-600",
        button: "from-blue-500 to-blue-600",
      },
    }
    return colorMap[color] || colorMap.orange
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-mono text-3xl font-bold text-gray-900">Games & Activities</h1>
          <p className="text-gray-600 font-semibold mt-1">Manage bowling, arcade, axe throwing, and more</p>
        </div>
        <Button
          onClick={() => setShowNewForm(!showNewForm)}
          className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Activity
        </Button>
      </div>

      {/* Add New Activity Form */}
      {showNewForm && (
        <Card className="border-2 border-purple-400 p-6 bg-purple-50">
          <h3 className="font-mono text-xl font-bold text-gray-900 mb-4">Add New Activity</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Activity Name</label>
              <Input
                value={newActivity.name}
                onChange={(e) => setNewActivity({ ...newActivity, name: e.target.value })}
                placeholder="e.g., Laser Tag"
                className="border-2 border-purple-300"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Color Theme</label>
              <select
                value={newActivity.color}
                onChange={(e) => setNewActivity({ ...newActivity, color: e.target.value as Activity["color"] })}
                className="w-full border-2 border-purple-300 rounded-lg px-3 py-2 font-semibold"
              >
                {COLORS.map((col) => (
                  <option key={col} value={col}>
                    {col.charAt(0).toUpperCase() + col.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Price</label>
              <Input
                value={newActivity.price}
                onChange={(e) => setNewActivity({ ...newActivity, price: e.target.value })}
                placeholder="e.g., $15 per person"
                className="border-2 border-purple-300"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Capacity</label>
              <Input
                value={newActivity.capacity}
                onChange={(e) => setNewActivity({ ...newActivity, capacity: e.target.value })}
                placeholder="e.g., 20 people"
                className="border-2 border-purple-300"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Duration</label>
              <Input
                value={newActivity.duration}
                onChange={(e) => setNewActivity({ ...newActivity, duration: e.target.value })}
                placeholder="e.g., 1 hour"
                className="border-2 border-purple-300"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Image URL (Optional)</label>
              <Input
                value={newActivity.image}
                onChange={(e) => setNewActivity({ ...newActivity, image: e.target.value })}
                placeholder="e.g., /activity-image.jpg"
                className="border-2 border-purple-300"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-900 mb-2">Description</label>
              <Textarea
                value={newActivity.description}
                onChange={(e) => setNewActivity({ ...newActivity, description: e.target.value })}
                placeholder="Describe this activity..."
                className="border-2 border-purple-300 min-h-[80px]"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <Button
              onClick={addActivity}
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold"
            >
              Add Activity
            </Button>
            <Button variant="outline" onClick={() => setShowNewForm(false)} className="border-2 border-gray-300">
              Cancel
            </Button>
          </div>
        </Card>
      )}

      {/* Activities Grid */}
      <div className="grid grid-cols-1 gap-4">
        {activities.map((activity) => {
          const colorClasses = getColorClasses(activity.color)
          return editingId === activity.id && editForm ? (
            <Card key={activity.id} className="border-2 border-blue-400 p-6 bg-blue-50">
              <h4 className="font-mono font-bold text-gray-900 mb-4">Editing: {activity.name}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  placeholder="Activity name"
                  className="border-2 border-blue-300"
                />
                <select
                  value={editForm.color}
                  onChange={(e) => setEditForm({ ...editForm, color: e.target.value as Activity["color"] })}
                  className="border-2 border-blue-300 rounded-lg px-3 py-2 font-semibold"
                >
                  {COLORS.map((col) => (
                    <option key={col} value={col}>
                      {col.charAt(0).toUpperCase() + col.slice(1)}
                    </option>
                  ))}
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
                <Input
                  value={editForm.duration}
                  onChange={(e) => setEditForm({ ...editForm, duration: e.target.value })}
                  placeholder="Duration"
                  className="border-2 border-blue-300"
                />
                <Input
                  value={editForm.image}
                  onChange={(e) => setEditForm({ ...editForm, image: e.target.value })}
                  placeholder="Image URL"
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
            <Card key={activity.id} className={`border-2 ${colorClasses.border} p-6 transition-all hover:shadow-md`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className={`font-mono text-lg font-bold text-gray-900 mb-2`}>{activity.name}</h3>
                  <p className="text-gray-700 font-semibold mb-3">{activity.description}</p>
                  <div className={`flex items-center gap-4 text-sm font-semibold ${colorClasses.text} mb-3`}>
                    {activity.price && <span>{activity.price}</span>}
                    {activity.capacity && <span>Capacity: {activity.capacity}</span>}
                    {activity.duration && <span>Duration: {activity.duration}</span>}
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button
                    onClick={() => startEdit(activity)}
                    size="sm"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold flex items-center gap-1"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </Button>
                  <Button
                    onClick={() => deleteActivity(activity.id)}
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
        })}
      </div>

      {activities.length === 0 && (
        <Card className="border-2 border-dashed border-gray-300 p-12 text-center">
          <p className="text-gray-600 font-semibold">No activities created yet. Add your first activity!</p>
        </Card>
      )}
    </div>
  )
}
