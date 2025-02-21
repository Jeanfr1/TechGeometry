
'use client'

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Spotlight } from "@/components/ui/spotlight"
import { cn } from "@/lib/utils"

const products = [
  {
    id: 1,
    name: "MacBook Air M2",
    price: 1199,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    category: "Laptop",
    description: "M2 chip, 13-inch display",
    gradient: "from-purple-500/20 via-transparent to-blue-500/20"
  },
  {
    id: 2,
    name: "Galaxy Watch 6",
    price: 299,
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
    category: "Smartwatch",
    description: "Advanced health tracking",
    gradient: "from-emerald-500/20 via-transparent to-teal-500/20"
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: 249,
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7",
    category: "Audio",
    description: "Active noise cancellation",
    gradient: "from-pink-500/20 via-transparent to-rose-500/20"
  },
  {
    id: 4,
    name: "iPad Air",
    price: 599,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
    category: "Tablet",
    description: "M1 chip, 10.9-inch display",
    gradient: "from-orange-500/20 via-transparent to-amber-500/20"
  }
]

export function ProductGrid() {
  return (
    <section className="py-20 bg-black/[0.96]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
            Latest Arrivals
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our newest collection of premium devices, featuring cutting-edge technology 
            and elegant design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="relative overflow-hidden bg-zinc-900/50 border-zinc-800 h-[400px] backdrop-blur-sm">
                <Spotlight
                  className="-top-20 left-0"
                  size={200}
                />
                <CardContent className="p-6 h-full flex flex-col">
                  <div className={cn(
                    "flex-1 rounded-lg overflow-hidden mb-6 relative",
                    "bg-gradient-to-br",
                    product.gradient,
                    "group-hover:scale-105 transition-transform duration-500"
                  )}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover mix-blend-overlay"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {product.category}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-white">
                          ${product.price}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">
                      {product.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
