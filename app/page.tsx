import { Code, Car, Watch } from "lucide-react"
import { HeroSection } from "@/components/sections/hero-section"
import { PassionCard } from "@/components/cards/passion-card"
import { LatestProjects } from "@/components/sections/latest-projects"
import { SectionHeading } from "@/components/ui/section-heading"

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <HeroSection />

      <LatestProjects />

      <section className="container px-4 md:px-6">
        <SectionHeading
          title="My Passions"
          description="Discover what I'm passionate about and what motivates me every day"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <PassionCard
            title="Programming"
            description="Software development, web development, and new technologies"
            icon={<Code className="h-10 w-10" />}
            href="/projects"
            color="bg-gradient-to-br from-blue-500 to-purple-600"
          />
          <PassionCard
            title="Cars"
            description="Automotive design, performance, and engine technology"
            icon={<Car className="h-10 w-10" />}
            href="/passions"
            color="bg-gradient-to-br from-red-500 to-orange-600"
          />
          <PassionCard
            title="Watches"
            description="Mechanical precision, design and history of timepieces"
            icon={<Watch className="h-10 w-10" />}
            href="/passions"
            color="bg-gradient-to-br from-emerald-500 to-teal-600"
          />
        </div>
      </section>
    </div>
  )
}
