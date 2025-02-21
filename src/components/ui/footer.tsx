
'use client'

import { Github, Twitter, Linkedin, Instagram } from "lucide-react"
import { AnimatedSocialIcons } from "./floating-action-button"

export function Footer() {
  const socialIcons = [
    { 
      Icon: Github,
      href: "https://github.com",
      className: "hover:bg-accent"
    },
    { 
      Icon: Twitter,
      href: "https://twitter.com" 
    },
    { 
      Icon: Linkedin,
      href: "https://linkedin.com" 
    },
    { 
      Icon: Instagram,
      href: "https://instagram.com" 
    }
  ]

  return (
    <footer className="w-full py-8 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSocialIcons 
          icons={socialIcons}
          iconSize={20}
          className="mb-4"
        />
        <div className="text-center text-sm text-muted-foreground">
          Made by <a href="https://github.com/agenceJaraujo" className="font-medium hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">agenceJaraujo</a>
        </div>
      </div>
    </footer>
  )
}
