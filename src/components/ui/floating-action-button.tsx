
'use client'

import { motion } from "framer-motion"
import { Plus, LucideIcon } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface SocialIcon {
  Icon: LucideIcon
  href?: string
  className?: string
}

interface AnimatedSocialIconsProps {
  icons: SocialIcon[]
  className?: string
  iconSize?: number
}

export function AnimatedSocialIcons({
  icons,
  className,
  iconSize = 20
}: AnimatedSocialIconsProps) {
  const [active, setActive] = useState(false)

  const buttonSize = "size-10 sm:size-16"

  return (
    <div className={cn("w-full flex justify-center", className)}>
      <div className="relative flex flex-col sm:flex-row items-center gap-4">
        <button
          className={cn(
            buttonSize,
            "rounded-full flex items-center justify-center",
            "bg-primary hover:bg-primary/90 transition-all duration-300",
            "relative z-30 shadow-lg hover:shadow-primary/25 hover:scale-110",
            "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
          )}
          onClick={() => setActive(!active)}
          aria-label={active ? "Close social menu" : "Open social menu"}
        >
          <Plus
            size={iconSize}
            strokeWidth={3}
            className="text-primary-foreground transition-transform duration-300"
            style={{
              transform: active ? 'rotate(45deg)' : 'rotate(0deg)',
            }}
          />
        </button>

        <div className="flex sm:flex-row flex-col items-center gap-4">
          {icons.map(({ Icon, href, className }, index) => (
            <motion.div
              key={index}
              className={cn(
                buttonSize,
                "rounded-full flex items-center justify-center",
                "bg-background/80 backdrop-blur-sm",
                "shadow-lg hover:shadow-xl",
                "border border-border/50",
                "hover:border-primary/50 hover:bg-background",
                className,
                "relative z-20"
              )}
              initial={{ opacity: 0, scale: 0.9, y: 0 }}
              animate={{
                opacity: active ? 1 : 0,
                scale: active ? 1 : 0.9,
                y: active ? 0 : -20,
                x: active ? (window.innerWidth >= 640 ? (index + 1) * 5 : 0) : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                delay: index * 0.05,
              }}
            >
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full h-full"
                  onClick={(e) => {
                    e.stopPropagation()
                  }}
                >
                  <Icon
                    size={iconSize}
                    className="text-muted-foreground transition-all hover:text-foreground hover:scale-110"
                  />
                </a>
              ) : (
                <Icon
                  size={iconSize}
                  className="text-muted-foreground transition-all hover:text-foreground hover:scale-110"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
