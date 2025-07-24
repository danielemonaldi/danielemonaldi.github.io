import type { TimelineItem } from "@/components/ui/timeline"

export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  category: "web" | "mobile" | "desktop" | "ai"
  githubUrl?: string
  isAcademic?: boolean
}

export const allProjects: Project[] = [
  {
    title: "PyTimegrapher",
    description: "Timegrapher app that analyzes mechanical watch accuracy",
    image: "images/projects/pytimegrapher.png",
    category: "desktop",
    tags: ["Python"],
    githubUrl: "https://github.com/danielemonaldi/PyTimegrapher",
    isAcademic: false,
  },
  {
    title: "WatchCollection",
    description: "Ontology-based app for managing a watch collection",
    image: "images/projects/watchcollection.png",
    category: "desktop",
    tags: ["Java"],
    githubUrl: "https://github.com/danielemonaldi/WatchCollection",
    isAcademic: true,
  },
  {
    title: "Gamezen",
    description: "Android app for an e-commerce of board games. Project for my High School Diploma",
    image: "images/projects/gamezen.png",
    category: "mobile",
    tags: ["Java", "Android"],
    githubUrl: "https://github.com/danielemonaldi/GameZen-Android",
    isAcademic: true,
  },
]

export const featuredProjects = allProjects.slice(0, 3)

export const educationItems: TimelineItem[] = [
  {
    title: "MSc In Computer Science",
    subtitle: "University of Camerino, Camerino, Italy",
    period: "2024 - now",
    description: "-",
  },
  {
    title: "Bachelor in IT for Digital Communication",
    subtitle: "University of Camerino, Camerino, Italy",
    period: "2021 - 2024",
    description: "Focus on software development and algorithms",
  },
  {
    title: "High School Diploma",
    subtitle: "I.T.T. G. & M. Montani, Fermo, Italy",
    period: "2016 - 2021",
    description: "Scientific and technological curriculum",
  },
]

export const experienceItems: TimelineItem[] = [
  {
    title: "Front-End Testing Intern",
    subtitle: "Sigma S.p.A.",
    period: "2024 (3 months)",
    description:
      "Internship focused on automated front-end testing. Worked with Cypress, Puppeteer, and Playwright to design and execute end-to-end tests for web applications. Collaborated with the development team to ensure UI reliability and maintain code quality.",
  },
]
