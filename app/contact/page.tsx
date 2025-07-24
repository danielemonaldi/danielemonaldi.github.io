import { PageHeader } from "@/components/sections/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin } from "lucide-react"
import { SocialIcons } from "@/components/ui/social-icons"
import { siteConfig } from "@/config/site"

export default function ContactPage() {
  const mailtoLink = `mailto:${siteConfig.contact.email}?subject=Portfolio Contact&body=Hi Daniele,%0D%0A%0D%0AI would like to get in touch with you.%0D%0A%0D%0ABest regards`

  return (
    <div className="flex flex-col gap-12 pb-20">
      <PageHeader title="Contact" description="Have a project in mind? Let's get in touch" />

      <section className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>Click the button below to open your email client</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Ready to start a conversation? Click the button below to open your email client. I'll get back to you as soon as possible!
              </p>
              <Button asChild size="lg" className="w-full">
                <a href={mailtoLink}>
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact information</CardTitle>
              <CardDescription>Other ways to get in touch with me</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">{siteConfig.contact.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">{siteConfig.contact.location}</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 font-medium">Social Media</h3>
                <SocialIcons />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
