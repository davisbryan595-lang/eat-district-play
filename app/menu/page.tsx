"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MenuPage() {
  const [category, setCategory] = useState("appetizers")

  const foodMenu = {
    appetizers: [
      {
        name: "Loaded Nachos",
        price: "$12.99",
        description: "Crispy tortilla chips, queso, jalapeños, sour cream, guacamole",
      },
      {
        name: "Buffalo Wings",
        price: "$13.99",
        description: "10 wings tossed in your choice of sauce: Buffalo, BBQ, or Garlic Parmesan",
      },
      { name: "Mozzarella Sticks", price: "$9.99", description: "Golden fried mozzarella served with marinara" },
      { name: "Pretzel Bites", price: "$8.99", description: "Warm pretzel bites with beer cheese dip" },
    ],
    burgers: [
      {
        name: "District Burger",
        price: "$14.99",
        description: "Double smash patty, American cheese, lettuce, tomato, special sauce",
      },
      {
        name: "BBQ Bacon Burger",
        price: "$15.99",
        description: "Angus beef, crispy bacon, cheddar, BBQ sauce, onion rings",
      },
      { name: "Mushroom Swiss", price: "$14.99", description: "Sautéed mushrooms, Swiss cheese, garlic aioli" },
      { name: "Veggie Burger", price: "$12.99", description: "Plant-based patty, avocado, sprouts, chipotle mayo" },
    ],
    pizza: [
      { name: "Pepperoni Classic", price: "$16.99", description: '14" pizza loaded with premium pepperoni' },
      { name: "Meat Lovers", price: "$18.99", description: "Pepperoni, sausage, bacon, ham, ground beef" },
      { name: "Veggie Supreme", price: "$17.99", description: "Mushrooms, peppers, onions, olives, tomatoes" },
      { name: "BBQ Chicken", price: "$17.99", description: "Grilled chicken, BBQ sauce, red onions, cilantro" },
    ],
    entrees: [
      { name: "Fish & Chips", price: "$15.99", description: "Beer-battered cod, fries, coleslaw, tartar sauce" },
      { name: "Chicken Tenders", price: "$13.99", description: "Hand-breaded tenders with your choice of sauce" },
      {
        name: "Philly Cheesesteak",
        price: "$14.99",
        description: "Shaved ribeye, peppers, onions, provolone on a hoagie",
      },
      {
        name: "Caesar Salad",
        price: "$11.99",
        description: "Romaine, parmesan, croutons, Caesar dressing. Add chicken $4",
      },
    ],
  }

  const drinksMenu = {
    cocktails: [
      { name: "District Red", price: "$11", description: "Vodka, cranberry, lime, splash of soda" },
      { name: "Strike Out", price: "$12", description: "Whiskey, ginger beer, fresh lemon" },
      { name: "Spare Me", price: "$10", description: "Rum, pineapple, coconut cream" },
      { name: "Pin Drop", price: "$13", description: "Tequila, triple sec, fresh lime, salt rim" },
    ],
    beer: [
      { name: "Domestic Drafts", price: "$6", description: "Bud Light, Coors Light, Miller Lite" },
      { name: "Craft Drafts", price: "$8", description: "Rotating selection of local craft beers" },
      { name: "Premium Bottles", price: "$7", description: "Corona, Heineken, Blue Moon, Stella Artois" },
      { name: "IPA Selection", price: "$8", description: "Ask your server for current IPA options" },
    ],
    specials: [
      { name: "Happy Hour", price: "$5", description: "All domestic beers & well drinks. Mon-Fri 3-6PM" },
      { name: "Wine Wednesday", price: "$6", description: "All wines by the glass. Every Wednesday" },
      { name: "Thirsty Thursday", price: "$4", description: "Select cocktails. Every Thursday 7-11PM" },
      { name: "Pitcher Specials", price: "$22", description: "Domestic beer pitchers. Daily after 8PM" },
    ],
  }

  return (
    <>
      <Navigation />

      <div className="pt-20">
        {/* Hero */}
        <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-br from-orange-50 to-pink-50">
          <div className="absolute inset-0 opacity-30">
            <img src="/restaurant-food-drinks-on-table.jpg" alt="Menu" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 text-center">
            <h1 className="font-mono text-5xl md:text-7xl font-bold text-gray-900 mb-4">OUR MENU</h1>
            <p className="text-xl text-gray-700">Fuel Your Fun with Bold Flavors</p>
          </div>
        </section>

        {/* Food Menu */}
        <section id="food" className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
              <span className="text-[hsl(var(--district-orange))]">Food</span> Menu
            </h2>

            <Tabs defaultValue="appetizers" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-gray-200 mb-8">
                <TabsTrigger value="appetizers" className="data-[state=active]:bg-[hsl(var(--district-orange))] data-[state=active]:text-white">
                  Appetizers
                </TabsTrigger>
                <TabsTrigger value="burgers" className="data-[state=active]:bg-[hsl(var(--district-orange))] data-[state=active]:text-white">
                  Burgers
                </TabsTrigger>
                <TabsTrigger value="pizza" className="data-[state=active]:bg-[hsl(var(--district-orange))] data-[state=active]:text-white">
                  Pizza
                </TabsTrigger>
                <TabsTrigger value="entrees" className="data-[state=active]:bg-[hsl(var(--district-orange))] data-[state=active]:text-white">
                  Entrées
                </TabsTrigger>
              </TabsList>

              {Object.entries(foodMenu).map(([key, items]) => (
                <TabsContent key={key} value={key}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((item, index) => (
                      <Card
                        key={index}
                        className="bg-gradient-to-br from-white to-orange-50 border-[hsl(var(--district-orange))]/20 p-6 hover:border-[hsl(var(--district-orange))]/60 transition-colors shadow-md"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-mono text-xl font-bold text-gray-900">{item.name}</h3>
                          <span className="text-[hsl(var(--district-orange))] font-bold text-lg">{item.price}</span>
                        </div>
                        <p className="text-gray-700">{item.description}</p>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Drinks Menu */}
        <section id="drinks" className="py-20 bg-gradient-to-b from-blue-50 to-pink-50">
          <div className="container mx-auto px-4">
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
              <span className="text-[hsl(var(--district-green))]">Drinks</span> Menu
            </h2>

            <Tabs defaultValue="cocktails" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gray-200 mb-8">
                <TabsTrigger value="cocktails" className="data-[state=active]:bg-[hsl(var(--district-green))] data-[state=active]:text-white">
                  Cocktails
                </TabsTrigger>
                <TabsTrigger value="beer" className="data-[state=active]:bg-[hsl(var(--district-green))] data-[state=active]:text-white">
                  Beer
                </TabsTrigger>
                <TabsTrigger value="specials" className="data-[state=active]:bg-[hsl(var(--district-green))] data-[state=active]:text-white">
                  Specials
                </TabsTrigger>
              </TabsList>

              {Object.entries(drinksMenu).map(([key, items]) => (
                <TabsContent key={key} value={key}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((item, index) => (
                      <Card
                        key={index}
                        className="bg-gradient-to-br from-white to-green-50 border-[hsl(var(--district-green))]/20 p-6 hover:border-[hsl(var(--district-green))]/60 transition-colors shadow-md"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-mono text-xl font-bold text-gray-900">{item.name}</h3>
                          <span className="text-[hsl(var(--district-green))] font-bold text-lg">{item.price}</span>
                        </div>
                        <p className="text-gray-700">{item.description}</p>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-[hsl(var(--district-orange))] to-[hsl(var(--district-pink))]">
          <div className="container mx-auto px-4 text-center">
            <h3 className="font-mono text-3xl font-bold text-white mb-4">Ready to Order?</h3>
            <p className="text-white/90 mb-6">Visit us or call ahead for takeout</p>
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
              Call: 407-666-3002
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
