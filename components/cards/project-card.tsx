"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { motion } from "framer-motion"
import { Tag } from "@/components/ui/tag"
import { CategoryBadge } from "@/components/ui/category-badge"
import { AcademicBadge } from "@/components/ui/academic-badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  category: "web" | "mobile" | "desktop" | "ai"
  image: string
  githubUrl: string
  isAcademic?: boolean
}

export function ProjectCard({ title, description, tags, category, image, githubUrl, isAcademic }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden transition-all hover:shadow-lg h-full flex flex-col">
        <div className="relative">
          <img src={image || "/placeholder.svg"} alt={title} className="h-48 w-full object-cover" />
        </div>

        <CardContent className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-3">{title}</h3>

          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <CategoryBadge category={category} />
            {isAcademic && <AcademicBadge />}
          </div>

          <p className="text-muted-foreground mb-4 flex-grow">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>

          <div className="mt-auto">
            <Button size="sm" variant="outline" asChild className="w-full bg-transparent">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
