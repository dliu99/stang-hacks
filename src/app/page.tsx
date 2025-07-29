import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, Clock, MapPin, Trophy, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from 'next/image'
import { FaDiscord, FaLinkedin } from "react-icons/fa";

export default function StangHacksLanding() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="text-2xl  text-gray-900">Stang Hacks</div>
            <div className="hidden md:flex space-x-12">
              <a href="#schedule" className="text-lg text-gray-600 hover:text-gray-900 transition-colors">
                Schedule
              </a>
              <a href="#faq" className="text-lg text-gray-600 hover:text-gray-900 transition-colors">
                FAQ
              </a>
              <a href="#judges" className="text-lg text-gray-600 hover:text-gray-900 transition-colors">
                Judges
              </a>
              <a href="#sponsors" className="text-lg text-gray-600 hover:text-gray-900 transition-colors">
                Sponsors
              </a>
              <a href="#team" className="text-lg text-gray-600 hover:text-gray-900 transition-colors">
                Team
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 relative">
        <div className="container mx-auto text-center">
          <div className="max-w-5xl mx-auto">
            {/* Logo Space */}
            <div className="mb-4">
              <div className="w-full h-40 mx-auto  rounded-lg flex flex-row items-center justify-center gap-4">
                <Image src="/translaptop.webp" alt="Stang Hacks Logo" width={160} height={160} className="mr-5"/>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900  tracking-tighter">Stang Hacks</h1>
              </div>
              
              {/*<p className="text-2xl md:text-3xl lg:text-4xl text-gray-600 mb-12">Build the future in 48 hours</p>*/}
            </div>

            {/* Signup CTA */}
            <div className="mb-12">
              <p className="text-lg text-gray-500">Saturday, January 24th 2026</p>
              <p className="text-lg text-gray-500">8:00 AM - 8:00 PM</p>
              <div className="flex flex-row items-center justify-center gap-2">
                <MapPin className="h-6 w-6 text-gray-500" />
                <p className="text-lg text-gray-500">Workday Center, Monte Vista High School</p>
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
        <div className="absolute bottom-8 right-8 flex space-x-4">
          <Link
            href="https://discord.gg/3qHzFUuW6b"
            className="w-14 h-14  text-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            target="_blank"
          >
            <FaDiscord className="w-10 h-10 text-indigo-600 hover:text-indigo-800 transition-colors" />
          </Link>
          <Link
            href="#"
            className="w-14 h-14  text-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <FaLinkedin className="w-10 h-10 text-blue-600 hover:text-blue-800 transition-colors" />
          </Link>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">Schedule</h2>
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
      <section id="faq" className="py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">FAQ</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>What is this?</AccordionTrigger>
                <AccordionContent>
                  This hackathon is a 12-hour event where students come together to build innovative projects, learn new
                  technologies, and compete for prizes. No prior experience required!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Who can participate?</AccordionTrigger>
                <AccordionContent>
                  All middle and high school students are welcome! Whether you're a beginner, vibe coder, experienced developer, or none of the above, there's a place for you.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What should I bring?</AccordionTrigger>
                <AccordionContent>
                  Bring your laptop, charger, and any hardware you want to use. We'll provide food, drinks, and plugs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How much does it cost?</AccordionTrigger>
                <AccordionContent>
                  Stang Hacks is completely free! This includes meals, snacks, swag, and all workshop materials.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Judges Section */}
      <section id="judges" className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">Judges</h2>
          <div className="grid md:grid-cols-1 gap-8 max-w-sm mx-auto items-center justify-center">
            {[1].map((i) => (
              <Card key={i} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-lg mb-1">Your Name Here</h3>
                  <p className="text-gray-600 text-sm mb-2">Software Engineer at Acme Inc.</p>
                  <p className="text-gray-700 text-sm">Interested in judging? Contact us at <p className="underline-offset-3 underline">stanghacks@gmail.com</p></p>
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
      <section id="sponsors" className="py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">Sponsors & Prizes</h2>

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
      <section id="team" className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">Organizing Team</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold mb-1">Team Member</h3>
                  <p className="text-gray-600 text-sm mb-2">Role</p>
                  <p className="text-gray-500 text-xs">Computer Science</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center">
          <p className="text-gray-600 mb-4">© 2024 Stang Hacks. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              Contact
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              Code of Conduct
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
