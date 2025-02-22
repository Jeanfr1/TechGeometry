
'use client'

import { Github, Twitter, Linkedin, Instagram } from "lucide-react"
import { AnimatedSocialIcons } from "./floating-action-button"
import { BackgroundBeamsWithCollision } from "./background-beams-with-collision"

export function Footer() {
  const socialIcons = [
    {
      Icon: Github,
      href: "https://github.com",
      className: "hover:bg-accent"
    },
    {
      Icon: Twitter,
      href: "https://twitter.com",
      className: "hover:bg-accent"
    },
    {
      Icon: Linkedin,
      href: "https://linkedin.com",
      className: "hover:bg-accent"
    },
    {
      Icon: Instagram,
      href: "https://instagram.com",
      className: "hover:bg-accent"
    }
  ]

  return (
    <footer className="w-full bg-background">
      <BackgroundBeamsWithCollision>
        <div className="container relative z-20 mx-auto px-4">
          <h2 className="text-2xl md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
            Experience the Future{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span>of Shopping.</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span>of Shopping.</span>
              </div>
            </div>
          </h2>

          <div className="mt-12 relative z-10">
            <AnimatedSocialIcons
              icons={socialIcons}
              iconSize={24}
              className="mb-8"
            />
            <div className="text-center text-sm text-muted-foreground/80 hover:text-muted-foreground transition-colors">
              Made by <a href="https://github.com/agenceJaraujo" className="font-medium hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">agenceJaraujo</a>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </footer>
  )
}
