import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, Clock, MapPin, Trophy, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function StangHacksLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">Stang Hacks</div>
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
            <div className="mb-12">
              <div className="w-40 h-40 mx-auto bg-gray-100 rounded-lg flex items-center justify-center mb-8">
                <span className="text-gray-400 text-lg">Logo</span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 mb-6">Stang Hacks</h1>
              <p className="text-2xl md:text-3xl lg:text-4xl text-gray-600 mb-12">Build the future in 48 hours</p>
            </div>

            {/* Signup CTA */}
            <div className="mb-16">
              <Button size="lg" className="text-xl px-12 py-6 h-auto">
                <ExternalLink className="mr-3 h-6 w-6" />
                Register Now
              </Button>
              <p className="text-lg text-gray-500 mt-6">Registration closes March 15th</p>
            </div>

            {/* Event Details */}
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="flex flex-col items-center">
                <Calendar className="h-12 w-12 text-gray-600 mb-4" />
                <h3 className="font-semibold text-xl text-gray-900 mb-2">Date</h3>
                <p className="text-lg text-gray-600">March 22-24, 2024</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="h-12 w-12 text-gray-600 mb-4" />
                <h3 className="font-semibold text-xl text-gray-900 mb-2">Duration</h3>
                <p className="text-lg text-gray-600">48 Hours</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-12 w-12 text-gray-600 mb-4" />
                <h3 className="font-semibold text-xl text-gray-900 mb-2">Location</h3>
                <p className="text-lg text-gray-600">Campus Center</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links - Bottom Left */}
        <div className="absolute bottom-8 left-8 flex space-x-4">
          <Link
            href="#"
            className="w-14 h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors"
          >
            <span className="text-lg font-bold">D</span>
          </Link>
          <Link
            href="#"
            className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
          >
            <span className="text-lg font-bold">in</span>
          </Link>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">Schedule</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Friday, March 22</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">6:00 PM</span>
                    <span>Registration & Check-in</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">7:00 PM</span>
                    <span>Opening Ceremony</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">8:00 PM</span>
                    <span>Hacking Begins!</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Sunday, March 24</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">12:00 PM</span>
                    <span>Submissions Due</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">1:00 PM</span>
                    <span>Project Presentations</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">4:00 PM</span>
                    <span>Awards & Closing</span>
                  </div>
                </CardContent>
              </Card>
            </div>
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
                <AccordionTrigger>What is a hackathon?</AccordionTrigger>
                <AccordionContent>
                  A hackathon is a 48-hour event where students come together to build innovative projects, learn new
                  technologies, and compete for prizes. No prior experience required!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Who can participate?</AccordionTrigger>
                <AccordionContent>
                  All university students are welcome! Whether you're a beginner or experienced developer, designer, or
                  entrepreneur - there's a place for you.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What should I bring?</AccordionTrigger>
                <AccordionContent>
                  Bring your laptop, charger, and any hardware you want to use. We'll provide food, drinks, and a place
                  to sleep if needed.
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
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-lg mb-1">Judge Name</h3>
                  <p className="text-gray-600 text-sm mb-2">Senior Engineer at Tech Co</p>
                  <p className="text-gray-500 text-sm">Expert in AI/ML and full-stack development</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors/Prizes Section */}
      <section id="sponsors" className="py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">Sponsors & Prizes</h2>

          {/* Prizes */}
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
          </div>

          {/* Sponsors */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8">Sponsors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-100 h-24 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Sponsor Logo</span>
                </div>
              ))}
            </div>
          </div>
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
