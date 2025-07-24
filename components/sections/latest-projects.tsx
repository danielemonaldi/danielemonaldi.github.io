"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { featuredProjects } from "@/data"
import { ProjectCard } from "@/components/cards/project-card"

export function LatestProjects() {
  return (
    <section className="container px-4 md:px-6">
      <SectionHeading
        title="Recent Projects"
        description="A selection of my most recent work in software development"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              category={project.category}
              image={project.image}
              githubUrl={project.githubUrl || "#"}
              isAcademic={project.isAcademic}
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button asChild>
          <Link href="/projects">
            View all projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
