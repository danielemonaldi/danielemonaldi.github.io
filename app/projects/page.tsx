import { PageHeader } from "@/components/sections/page-header"
import { ProjectCard } from "@/components/cards/project-card"
import { allProjects } from "@/data"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-12 pb-20">
      <PageHeader title="Projects" description="A selection of my software development projects" />

      <section className="container px-4 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allProjects.map((project, index) => (
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
          ))}
        </div>
      </section>
    </div>
  )
}
