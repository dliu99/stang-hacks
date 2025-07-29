import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from 'next/image'
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";

export default function StangHacksLanding() {
  return (
    <div className="min-h-screen  font-sans dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-sm ">
        <div className="container mx-auto px-4 py-1">
          <div className="flex items-center justify-between">
            <ScrollToTopButton />
            <div className="hidden md:flex space-x-12">
              <a href="#schedule" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                Schedule
              </a>
              <a href="#faq" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </a>
              <a href="#judges" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                Judges
              </a>
              <a href="#sponsors" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                Sponsors
              </a>
              <a href="#team" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                Team
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
        {/* Background Image */}
        <Image
          src="/bg.webp"
          alt="Background"
          fill
          className="object-cover object-center absolute inset-0 w-full h-full z-0 opacity-40"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80 z-10 pointer-events-none" aria-hidden="true"></div>
        <div className="container mx-auto text-center relative z-20">
          <div className="max-w-5xl mx-auto">
            {/* Logo Space */}
            <div className="mb-4">
              <div className="w-full h-auto mx-auto  rounded-lg flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                <Image src="/translaptop.webp" alt="Stang Hacks Logo" width={160} height={160} className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 sm:mr-5"/>
                <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-foreground tracking-tighter text-center sm:text-left">Stang Hacks</h1>
              </div>
              
              {/*<p className="text-2xl md:text-3xl lg:text-4xl text-gray-600 mb-12">Build the future in 48 hours</p>*/}
            </div>

            {/* Signup CTA */}
            <div className="mb-12">
              <p className="text-lg text-muted-foreground">Saturday, January 24th 2026</p>
              <p className="text-lg text-muted-foreground">8:00 AM - 8:00 PM</p>
              <div className="flex flex-row items-center justify-center gap-2">
                <MapPin className="h-6 w-6 text-muted-foreground" />
                <p className="text-lg text-muted-foreground">Workday Center, Monte Vista High School</p>
              </div>
              <Button size="lg" className="text-xl px-12 py-6 mt-12 h-16 w-50" asChild>
                <Link href="https://forms.gle/1234567890" target="_blank">
                  <ExternalLink className="mr-3 h-20 w-20" />Sign Up
                </Link>
                
              </Button>
              
            </div>

            {/* Event Details */}
            <div className="grid gap-12 text-center">
              
              
            </div>
          </div>
        </div>

        {/* Social Links - Bottom Left */}
        <div className="absolute bottom-8 right-8 flex space-x-4 z-20">
          
          <Link
            href="#"
            className="w-12 h-12 md:w-14 md:h-14 text-white rounded-full flex items-center justify-center hover:bg-muted transition-colors"
          >
            <FaLinkedin className="w-8 h-8 md:w-10 md:h-10 text-blue-600 hover:text-blue-650 transition-colors" />
          </Link>
          <Link
            href="https://discord.gg/3qHzFUuW6b"
            className="w-12 h-12 md:w-14 md:h-14 text-white rounded-full flex items-center justify-center hover:bg-muted transition-colors"
            target="_blank"
          >
            <FaDiscord className="w-8 h-8 md:w-10 md:h-10 text-indigo-600 hover:text-indigo-650 transition-colors" />
          </Link>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-24 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-foreground">Schedule</h2>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>/event-schedule.md</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Registration & Check-in</span>
                  <span className="font-medium">8:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Opening Ceremony</span>
                  <span className="font-medium">8:30 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Hacking Begins!</span>
                  <span className="font-medium">9:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Lunch Break</span>
                  <span className="font-medium">12:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Workshop - TBD</span>
                  <span className="font-medium">1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Workshop - TBD</span>
                  <span className="font-medium">4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Submissions Due</span>
                  <span className="font-medium">6:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Judging</span>
                  <span className="font-medium">6:45 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Awards Ceremony</span>
                  <span className="font-medium">7:30 PM</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-foreground">FAQ</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-foreground">What is this?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  This hackathon is a 12-hour event where students come together to build innovative projects, learn new
                  technologies, and compete for prizes. No prior experience required!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-foreground">Who can participate?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  All middle and high school students are welcome! Whether you're a beginner, vibe coder, experienced developer, or none of the above, there's a place for you.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-foreground">What should I bring?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Bring your laptop, charger, and any hardware you want to use. We'll provide food, drinks, and plugs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-foreground">How much does it cost?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Stang Hacks is completely free! This includes meals, snacks, swag, and all workshop materials.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Judges Section */}
      <section id="judges" className="py-24 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-foreground">Judges</h2>
          <div className="grid md:grid-cols-1 gap-8 max-w-sm mx-auto items-center justify-center">
            {[1].map((i) => (
              <Card key={i} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-lg text-foreground">Your Name Here</h3>
                  <p className="text-muted-foreground text-sm mb-4">Software Engineer at Acme Inc.</p>
                  <p className="text-muted-foreground text-sm">Interested in judging? Contact us at <span className="underline-offset-3 underline">stanghacks@gmail.com</span></p>
                </CardContent>
              </Card>
              ))}
            {/*[1, 2, 3].map((i) => (
              <Card key={i} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-lg mb-1">Judge Name</h3>
                  <p className="text-gray-600 text-sm mb-2">Senior Engineer at Tech Co</p>
                  <p className="text-gray-500 text-sm">Expert in AI/ML and full-stack development</p>
                </CardContent>
              </Card>
              ))*/}
          </div>
        </div>
      </section>

      {/* Sponsors/Prizes Section */}
      <section id="sponsors" className="py-24 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-foreground">Sponsors & Prizes</h2>

          {/* 
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8">Prizes</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h4 className="font-semibold text-lg mb-2">1st Place</h4>
                  <p className="text-2xl font-bold text-gray-900 mb-2">$5,000</p>
                  <p className="text-gray-600">Plus internship opportunities</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Trophy className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h4 className="font-semibold text-lg mb-2">2nd Place</h4>
                  <p className="text-2xl font-bold text-gray-900 mb-2">$3,000</p>
                  <p className="text-gray-600">Plus tech swag bundle</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Trophy className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-lg mb-2">3rd Place</h4>
                  <p className="text-2xl font-bold text-gray-900 mb-2">$1,000</p>
                  <p className="text-gray-600">Plus mentorship program</p>
                </CardContent>
              </Card>
            </div>
          </div>Prizes */}

          {/* Sponsors 
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8">Sponsors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-100 h-24 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Your Logo</span>
                </div>
              ))}
            </div>
          </div>*/}

        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-foreground">Organizing Team</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold mb-1">Team Member</h3>
                  <p className="text-muted-foreground text-sm mb-2">Role</p>
                  <p className="text-muted-foreground text-xs">Computer Science</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-secondary">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground mb-4">© 2024 Stang Hacks - Questions? Contact us on the discord or at <span className="underline-offset-3 underline">stanghacks@gmail.com</span></p>

        </div>
      </footer>
    </div>
  )
}
