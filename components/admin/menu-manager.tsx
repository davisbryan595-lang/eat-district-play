"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Edit2, Trash2, Save, X } from "lucide-react"

interface MenuItem {
  id: string
  name: string
  category: "appetizers" | "burgers" | "pizza" | "entrees" | "cocktails" | "beer" | "specials"
  price: string
  description: string
  image?: string
}

const STORAGE_KEY = "district_menu_items"

const DEFAULT_ITEMS: MenuItem[] = [
  { id: "1", name: "Loaded Nachos", category: "appetizers", price: "$12.99", description: "Crispy tortilla chips, queso, jalapeños, sour cream, guacamole", image: "" },
  { id: "2", name: "Buffalo Wings", category: "appetizers", price: "$13.99", description: "10 wings with choice of sauce", image: "" },
  { id: "3", name: "District Burger", category: "burgers", price: "$14.99", description: "Double smash patty, American cheese, lettuce, tomato, special sauce", image: "" },
  { id: "4", name: "Pepperoni Classic", category: "pizza", price: "$16.99", description: "14\" pizza loaded with premium pepperoni", image: "" },
  { id: "5", name: "District Red", category: "cocktails", price: "$11", description: "Vodka, cranberry, lime, splash of soda", image: "" },
]

export function MenuManager() {
  const [items, setItems] = useState<MenuItem[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editForm, setEditForm] = useState<MenuItem | null>(null)
  const [newItem, setNewItem] = useState<MenuItem>({
    id: "",
    name: "",
    category: "appetizers",
    price: "",
    description: "",
    image: "",
  })
  const [showNewForm, setShowNewForm] = useState(false)
  const [filter, setFilter] = useState<string>("all")

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    setItems(saved ? JSON.parse(saved) : DEFAULT_ITEMS)
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const categories = ["appetizers", "burgers", "pizza", "entrees", "cocktails", "beer", "specials"]

  const addItem = () => {
    if (!newItem.name || !newItem.price) return
    const item: MenuItem = {
      ...newItem,
      id: Date.now().toString(),
    }
    setItems([...items, item])
    setNewItem({ id: "", name: "", category: "appetizers", price: "", description: "", image: "" })
    setShowNewForm(false)
  }

  const deleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const startEdit = (item: MenuItem) => {
    setEditingId(item.id)
    setEditForm({ ...item })
  }

  const saveEdit = () => {
    if (!editForm) return
    setItems(items.map((item) => (item.id === editingId ? editForm : item)))
    setEditingId(null)
    setEditForm(null)
  }

  const filteredItems = filter === "all" ? items : items.filter((item) => item.category === filter)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-mono text-3xl font-bold text-gray-900">Menu Items</h1>
          <p className="text-gray-600 font-semibold mt-1">Manage your food & drink menu</p>
        </div>
        <Button
          onClick={() => setShowNewForm(!showNewForm)}
          className="bg-gradient-to-r from-[#fd812a] to-orange-600 hover:from-[#fd812a]/90 hover:to-orange-700 text-white font-bold flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Item
        </Button>
      </div>

      {/* Add New Item Form */}
      {showNewForm && (
        <Card className="border-2 border-[#fd812a] p-6 bg-orange-50">
          <h3 className="font-mono text-xl font-bold text-gray-900 mb-4">Add New Item</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Item Name</label>
              <Input
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                placeholder="e.g., Loaded Nachos"
                className="border-2 border-[#fd812a]/30"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Category</label>
              <select
                value={newItem.category}
                onChange={(e) => setNewItem({ ...newItem, category: e.target.value as MenuItem["category"] })}
                className="w-full border-2 border-[#fd812a]/30 rounded-lg px-3 py-2 font-semibold"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Price</label>
              <Input
                value={newItem.price}
                onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                placeholder="e.g., $12.99"
                className="border-2 border-[#fd812a]/30"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Image URL (Optional)</label>
              <Input
                value={newItem.image}
                onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
                placeholder="e.g., /image.jpg"
                className="border-2 border-[#fd812a]/30"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-900 mb-2">Description</label>
              <Textarea
                value={newItem.description}
                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                placeholder="Describe this item..."
                className="border-2 border-[#fd812a]/30 min-h-[80px]"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <Button
              onClick={addItem}
              className="bg-gradient-to-r from-[#fd812a] to-orange-600 hover:from-[#fd812a]/90 hover:to-orange-700 text-white font-bold"
            >
              Add Item
            </Button>
            <Button variant="outline" onClick={() => setShowNewForm(false)} className="border-2 border-gray-300">
              Cancel
            </Button>
          </div>
        </Card>
      )}

      {/* Filter */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            filter === "all" ? "bg-gradient-to-r from-[#fd812a] to-orange-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          All Items
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              filter === cat ? "bg-gradient-to-r from-[#fd812a] to-orange-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 gap-4">
        {filteredItems.map((item) =>
          editingId === item.id && editForm ? (
            <Card key={item.id} className="border-2 border-blue-400 p-6 bg-blue-50">
              <h4 className="font-mono font-bold text-gray-900 mb-4">Editing: {item.name}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  placeholder="Item name"
                  className="border-2 border-blue-300"
                />
                <Input
                  value={editForm.price}
                  onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
                  placeholder="Price"
                  className="border-2 border-blue-300"
                />
                <select
                  value={editForm.category}
                  onChange={(e) => setEditForm({ ...editForm, category: e.target.value as MenuItem["category"] })}
                  className="border-2 border-blue-300 rounded-lg px-3 py-2 font-semibold"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                  ))}
                </select>
                <Input
                  value={editForm.image || ""}
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
            <Card key={item.id} className="border-2 border-[#fd812a]/20 p-6 hover:border-[#fd812a] transition-all hover:shadow-md">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-mono text-lg font-bold text-gray-900">{item.name}</h3>
                    <span className="text-xs bg-[#fd812a]/20 text-[#fd812a] px-2 py-1 rounded-full font-semibold">{item.category}</span>
                  </div>
                  <p className="text-gray-700 font-semibold mb-2">{item.description}</p>
                  <p className="text-[#fd812a] font-bold text-lg">{item.price}</p>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button
                    onClick={() => startEdit(item)}
                    size="sm"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold flex items-center gap-1"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </Button>
                  <Button
                    onClick={() => deleteItem(item.id)}
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

      {filteredItems.length === 0 && (
        <Card className="border-2 border-dashed border-gray-300 p-12 text-center">
          <p className="text-gray-600 font-semibold">No items found in this category</p>
        </Card>
      )}
    </div>
  )
}
