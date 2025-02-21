
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
    <div className={cn("w-full relative flex items-start justify-start sm:justify-center", className)}>
      <div className="flex items-center justify-center relative gap-4">
        <button
          className={cn(
            buttonSize,
            "rounded-full flex items-center justify-center",
            "bg-primary hover:bg-primary/90 transition-colors",
            "relative z-20"
          )}
          onClick={() => setActive(!active)}
        >
          <Plus 
            size={iconSize} 
            strokeWidth={3} 
            className="text-primary-foreground" 
            style={{
              transform: active ? 'rotate(45deg)' : 'rotate(0deg)',
              transition: 'transform 0.5s ease'
            }}
          />
        </button>
        
        {icons.map(({ Icon, href, className }, index) => (
          <motion.div
            key={index}
            className={cn(
              buttonSize,
              "rounded-full flex items-center justify-center",
              "bg-background shadow-lg hover:shadow-xl",
              "border border-border",
              className,
              "relative z-10"
            )}
            animate={{
              opacity: active ? 1 : 0,
              scale: active ? 1 : 0.9,
              x: active ? (index + 1) * 70 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: index * 0.1,
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
  )
}
