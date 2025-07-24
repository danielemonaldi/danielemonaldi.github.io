import { PageHeader } from "@/components/sections/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Car, Watch, Wrench, Heart, Clock } from "lucide-react"

export default function PassionsPage() {
  return (
    <div className="flex flex-col gap-12 pb-20">
      <PageHeader title="My Passions" description="Beyond programming, here's what drives and inspires me" />

      <section className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Programming */}
          <Card className="overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <img
                src="images/passions/coding.jpg"
                alt="Programming"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-2">
                  <Code className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            <CardHeader>
              <CardTitle>Coding</CardTitle>
              <CardDescription>Software development and technology</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I'm passionate about creating innovative digital solutions using modern technologies like React,
                Next.js, and TypeScript. I love exploring new frameworks and staying up-to-date with the latest
                development trends.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-muted px-3 py-1 text-xs">Python</span>
                <span className="rounded-full bg-muted px-3 py-1 text-xs">Java</span>
                <span className="rounded-full bg-muted px-3 py-1 text-xs">Next.js</span>
                <span className="rounded-full bg-muted px-3 py-1 text-xs">TypeScript</span>
                <span className="rounded-full bg-muted px-3 py-1 text-xs">Node.js</span>
              </div>
            </CardContent>
          </Card>

          {/* Cars */}
          <Card className="overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <img
                src="images/passions/f40.jpg"
                alt="Cars"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="rounded-lg bg-gradient-to-br from-red-500 to-orange-600 p-2">
                  <Car className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            <CardHeader>
              <CardTitle>Automotive</CardTitle>
              <CardDescription>Design, performance, and engineering</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I'm fascinated by automotive design, mechanics, and performance. From classic Italian supercars to
                modern vehicles, I follow the technological evolution of the automotive industry with great
                interest.
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Wrench className="h-4 w-4" />
                  <span>Engineering</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="h-4 w-4" />
                  <span>Design</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Watches */}
          <Card className="overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/images/passions/tudor.jpg"
                alt="Watches"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 p-2">
                  <Watch className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            <CardHeader>
              <CardTitle>Horology</CardTitle>
              <CardDescription>Precision mechanics and craftsmanship</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Watches represent the perfect blend of precision mechanics, design, and craftsmanship. I appreciate both
                vintage timepieces and modern innovations, especially mechanical movements and their intricate
                engineering.
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>Mechanical</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="h-4 w-4" />
                  <span>Vintage</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
