import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/sections/page-header"
import { EducationTimeline } from "@/components/timeline/education-timeline"
import { WorkExperienceTimeline } from "@/components/timeline/work-experience-timeline"
import { Download } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="flex flex-col gap-12 pb-20">
      <PageHeader title="Resume" description="My professional experience and education" />
      
      {/*
      <div className="container px-4 md:px-6 -mt-6">
        <div className="flex justify-center">
          <Button size="lg" className="gap-2" asChild>
            <a href="/documents/daniele-monaldi-cv.pdf" download="Daniele-Monaldi-CV.pdf">
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
      */}

      <section className="container px-4 md:px-6">
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>About Me</CardTitle>
            <CardDescription>Professional summary</CardDescription>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>
              I am a passionate Software developer with expertise in modern technologies. My approach combines
              technical excellence with creative problem-solving to deliver exceptional user experiences.
            </p>
            <p>
              Throughout my career, I've focused on building responsive, accessible, and performant applications
              that meet both user needs and business objectives. I enjoy collaborating with cross-functional teams and
              continuously expanding my knowledge in the rapidly evolving tech landscape.
            </p>
            <p>
              When I'm not coding, I pursue my passions for automotive design and horology, which inspire my attention
              to detail and precision in my professional work.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Work Experience</CardTitle>
              <CardDescription>My professional journey</CardDescription>
            </CardHeader>
            <CardContent>
              <WorkExperienceTimeline />
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Education</CardTitle>
              <CardDescription>My academic background</CardDescription>
            </CardHeader>
            <CardContent>
              <EducationTimeline />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
