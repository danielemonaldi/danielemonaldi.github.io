import { Github, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/config/site"

interface SocialIconsProps {
  className?: string
}

export function SocialIcons({ className = "" }: SocialIconsProps) {
  return (
    <div className={`flex gap-4 ${className}`}>
      <Link
        href={siteConfig.links.github}
        className="rounded-full bg-muted p-2 transition-colors hover:bg-primary hover:text-primary-foreground"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="h-5 w-5" />
        <span className="sr-only">GitHub</span>
      </Link>
      <Link
        href={siteConfig.links.linkedin}
        className="rounded-full bg-muted p-2 transition-colors hover:bg-primary hover:text-primary-foreground"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin className="h-5 w-5" />
        <span className="sr-only">LinkedIn</span>
      </Link>
    </div>
  )
}
