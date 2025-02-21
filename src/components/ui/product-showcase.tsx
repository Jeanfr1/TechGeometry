
'use client'

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Smartphone, Tablet, Watch, Headphones } from "lucide-react"

const products = [
  {
    icon: Smartphone,
    title: "Smartphones",
    description: "Latest flagship phones with cutting-edge technology",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Headphones,
    title: "Wireless Earbuds",
    description: "Premium audio with active noise cancellation",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Tablet,
    title: "Tablets",
    description: "Powerful devices for work and entertainment",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Watch,
    title: "Smartwatches",
    description: "Track your health and stay connected",
    gradient: "from-green-500 to-emerald-500"
  }
]

export function ProductShowcase() {
  return (
    <div className="py-16 bg-black/[0.96]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Our Featured Products
          </h2>
          <p className="mt-4 text-gray-400">
            Discover our collection of premium electronic devices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-800/50 transition-colors">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4`}>
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-400">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
