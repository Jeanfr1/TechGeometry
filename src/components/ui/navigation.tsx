
'use client'

import { Home, ShoppingCart, User, Search, Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./button"

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="shrink-0">
            <Home className="h-5 w-5" />
          </Button>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#" className="transition-colors hover:text-foreground/80">New Arrivals</a>
            <a href="#" className="transition-colors hover:text-foreground/80">Featured</a>
            <a href="#" className="transition-colors hover:text-foreground/80">Categories</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="shrink-0">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="shrink-0">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="shrink-0">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="shrink-0 relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
              0
            </span>
          </Button>
        </div>
      </div>
    </nav>
  )
}
