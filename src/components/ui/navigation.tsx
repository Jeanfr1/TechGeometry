
'use client'

import { Home, ShoppingCart, User, Search, Heart } from "lucide-react"
import { NavBar } from "./tubelight-navbar"

export function Navigation() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Shop', url: '/shop', icon: ShoppingCart },
    { name: 'Wishlist', url: '/wishlist', icon: Heart },
    { name: 'Search', url: '/search', icon: Search },
    { name: 'Account', url: '/account', icon: User }
  ]

  return (
    <nav className="relative w-full h-24">
      <NavBar items={navItems} className="sm:pt-4" />
    </nav>
  )
}
