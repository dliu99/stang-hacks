import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from 'next/image'
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";
import { TeamMemberCard } from "@/components/team-member-card";

export default function StangHacksLanding() {
  return (
    <div className="min-h-screen font-sans dark w-full bg-background">
      {/* Navigation */}
      <nav className="fixed top-10 w-full z-50 backdrop-blur-sm hidden md:flex md:backdrop-blur-sm">
        <div className="container mx-auto px-4 py-1">
          <div className="flex items-center justify-between">
            <ScrollToTopButton />
            <div className="hidden md:flex space-x-12">
              <a href="#sponsors" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                Sponsors
              </a>
              <a href="#judges" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                Judges
              </a>
              <a href="#schedule" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                Schedule
              </a>
              <a href="#faq" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </a>
              <a href="#team" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                Team
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden pt-10">
        {/* Background Image */}
        <Image
          src="/bg.webp"
          alt="Background"
          fill
          className="object-cover object-center absolute inset-0 w-full h-full z-0 opacity-70"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" aria-hidden="true"></div>
        <div className="container mx-auto text-center relative z-20">
          <div className="max-w-5xl mx-auto">
            {/* Logo Space */}
            <div className="mb-2">
              <div className="w-full h-auto mx-auto  rounded-lg flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                <Image src="/mainlogo.webp" alt="Stang Hacks Logo" width={160} height={160} className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 sm:mr-5"/>
                <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-foreground tracking-tighter text-center sm:text-left">Stang Hacks</h1>
              </div>
              
              {/*<p className="text-2xl md:text-3xl lg:text-4xl text-gray-600 mb-12">Build the future in 48 hours</p>*/}
            </div>

            {/* Signup CTA */}
            <div className="mb-12">
              
              <p className="text-lg text-muted-foreground">March 2026 • 8:00 AM - 8:00 PM</p>
              <div className="flex flex-row items-center justify-center gap-2">
                <MapPin className="h-6 w-6 text-muted-foreground" />
                <p className="text-lg text-muted-foreground"><Link href="https://maps.app.goo.gl/MQeFJdvqLqPB5M22A" target="_blank" className="underline-offset-3 underline hover:text-foreground transition-colors">Zoho Corporation</Link>, Pleasanton, CA</p>
              </div>
              <Button size="lg" className="rounded-lg px-12 py-6 mt-12 h-14 w-50 hover:scale-105 transition-all hover:border-1 border-white text-xl" asChild>
                <Link href="https://luma.com/bi8uvliv" target="_blank">
                  <ExternalLink className="mr-3 h-20 w-20" />Sign Up
                </Link>
                
              </Button>
              
            </div>

            {/* Event Details */}
            <div className="grid gap-12 text-center">
              
              
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 z-20 absolute bottom-4 right-4 md:absolute md:bottom-8 md:right-8">
          <Link
            href="#"
            className="w-12 h-12 md:w-14 md:h-14 text-white rounded-md flex items-center justify-center hover:border-1 hover:border-white transition-colors"
          >
            <FaLinkedin className="w-8 h-8 md:w-10 md:h-10  hover:text-blue-650 transition-colors" />
          </Link>
          <Link
            href="https://discord.gg/dSmvmQnEpw"
            className="w-12 h-12 md:w-14 md:h-14 text-white rounded-md flex items-center justify-center hover:border-1 hover:border-white transition-colors"
            target="_blank"
          >
            <FaDiscord className="w-8 h-8 md:w-10 md:h-10 hover:text-indigo-650 transition-colors" />
          </Link>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-24 px-4 bg-primary relative">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground">
            The Tri-Valley's biggest, greatest, and bestest
            </h2>
            <p className="text-lg md:text-xl text-foreground  leading-relaxed">
              Whether you're a seasoned developer
              or just starting your coding journey, come solve problems and bring ideas to life at Stang Hacks.
            </p>
          </div>
        </div>

        {/* Wavy Border */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C300,100 900,20 1200,60 L1200,120 L0,120 Z"
              className="fill-[#1c2433]"
            />
          </svg>
        </div>
      </section>

      {/* Landing Info Section */}
      <section className="py-12 px-4 bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground">The Cutting Edge</h3>
                <p className="text-muted-foreground">
                  At Stang Hacks, you'll get exclusive access to the coolest tools in tech and AI like{" "}
                  <Link
                    href="https://v0.dev/"
                    className="text-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    v0
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="https://vapi.ai/"
                    className="text-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vapi
                  </Link>{" "}
                  to build anything you can imagine.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Connect</h3>
                <p className="text-muted-foreground">
                  Network with fellow developers, build lasting industry connections, and make new friends!
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Make Bread</h3>
                <p className="text-muted-foreground">
                  Compete with 200+ hackers for <span className="text-foreground hover:text-primary transition-colors">$1000+</span> in cold hard cash. Even if you don't win, you'll walk home with free swag, snacks, and a great experience!
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
{/* Sponsors/Prizes Section */}
<section id="sponsors" className="py-24 px-4 bg-muted">
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

       
          <div>
            {/*<h3 className="text-2xl font-semibold text-center mb-8">Sponsors</h3>*/}
            <div className="flex flex-col gap-8 max-w-3xl mx-auto justify-center">
              {/* Partner Section */}
              <div>
                <h4 className="text-xl font-semibold text-center mb-8 text-foreground">Partner</h4>
                <div className="flex flex-row gap-8 justify-center items-center mb-4">
                  <Link href="https://vercel.com" target="_blank" className="flex items-center justify-center  hover:transition-all hover:scale-105 hover:translate-y-1">
                    <Image src="/sponsors/vercel.svg" alt="Vercel" width={160} height={160} />
                  </Link>
                  <Link href="https://hackclub.com" target="_blank" className="flex items-center justify-center hover:transition-all hover:scale-105 hover:translate-y-1">
                    <Image src="/sponsors/hcb.png" alt="Hack Club Bank" width={60} height={60} />
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-center mb-8 text-foreground">Gold</h4>
                <div className="flex flex-row gap-8 justify-center items-center mb-4">
                  <Link href="https://vapi.ai" target="_blank" className="flex items-center justify-center  hover:transition-all hover:scale-105 hover:translate-y-1">
                    <Image src="/sponsors/vapi.png" alt="Vapi" width={160} height={100} />
                  </Link>
                  <Link href="https://omi.me" target="_blank" className="flex items-center justify-center  hover:transition-all hover:scale-105 hover:translate-y-1">
                    <Image src="/sponsors/omi.png" alt="Omi" width={160} height={100} />
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-center mb-8 text-foreground">Silver</h4>
                <div className="flex flex-row gap-8 justify-center items-center mb-4">
                <Link href="https://www.pcbway.com" target="_blank" className="flex items-center justify-center  hover:transition-all hover:scale-105 hover:translate-y-1">
                    <Image src="/sponsors/pcbway.webp" alt="PCBWay" width={160} height={70} />
                  </Link>
                  <Link href="https://vly.ai" target="_blank" className="flex items-center justify-center  hover:transition-all hover:scale-105 hover:translate-y-1">
                    <Image src="/sponsors/vly.png" alt="Vly" width={70} height={70} />
                  </Link>
                </div>
              </div>
              {/*<div>
                <h4 className="text-xl font-semibold text-center mb-8 text-foreground">Silver</h4>
                <div className="flex flex-row gap-8 justify-center items-center mb-4">
                  <Link href="https://cerebras.ai" target="_blank" className="flex items-center justify-center  hover:transition-all hover:scale-105 hover:translate-y-1">
                    <Image src="/sponsors/cerebras.png" alt="Cerebras" width={160} height={160} />
                  </Link>
                </div>
              </div>*/}
              {/* Special Section */}
              <div>
                <h4 className="text-xl font-semibold text-center mb-8 text-foreground">Special</h4>
                <div className="flex flex-row gap-8 justify-center items-center mb-8">
                <Link href="https://nordvpn.com" target="_blank" className="flex items-center justify-center hover:transition-all hover:scale-105 hover:translate-y-1">
                    <Image src="/sponsors/nord.svg" alt="NordVPN" width={90} height={90} />
                  </Link>
                  <Link href="https://artofproblemsolving.com" target="_blank" className="flex items-center justify-center hover:transition-all hover:scale-105 hover:translate-y-1">
                    <Image src="/sponsors/aops.svg" alt="AoPS" width={160} height={160} />
                  </Link>
                  <Link href="https://notion.so" target="_blank" className="flex items-center justify-center hover:transition-all hover:scale-105 hover:translate-y-1">
                    <Image src="/sponsors/notion.png" alt="Notion" width={60} height={60} />
                  </Link>
                  <Link href="https://kahoot.com" target="_blank" className="flex items-center justify-center hover:transition-all hover:scale-105 hover:translate-y-1">
                    <Image src="/sponsors/kahoot.svg" alt="Kahoot!" width={160} height={160} />
                  </Link>
                  
                </div>
                <h1 className="text-center text-muted-foreground text-sm mb-6">and more on the way -- stay posted!</h1>
                
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-muted-foreground text-sm flex justify-center items-center text-center max-w-xs">
                <p>
                  Help us make this event possible! Check out our{" "}
                  <Link
                    target="_blank"
                    href="https://drive.google.com/file/d/16v6rj2K391AgSjCoPI6MJk3YIcDykynS/view?usp=sharing"
                    className="underline-offset-3 underline"
                  >
                    prospectus
                  </Link>{" "}
                  for more information or email us at <span className="underline-offset-3 underline">team@stanghacks.com</span>.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Judges Section */}
      <section id="judges" className="py-24 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-foreground">Judges</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Mahesh Chaudhari", role: "Assistant Professor @ University of San Francisco", linkedinUrl: "https://www.linkedin.com/in/maheshchaudhari/" },
              
              {name: "Siva Iyer", role: "SVP/Head of Software Engineering @ Federal Reserve Financial Services", "linkedinUrl": "https://www.linkedin.com/in/siva-iyer-670a33/"},
              {name: "Bharat Rane", role: "Platform Engineering Director @ Moody's Corporation", linkedinUrl: "https://www.linkedin.com/in/bharatrane/"},
              { name: "Shantanoo Kirtane", role: "Principal Engineer @ Walmart Tech", linkedinUrl: "https://www.linkedin.com/in/shantanoo-kirtane-47017215/" },
              
              
            ].map((judge, i) => (
              <div key={i} className="flex flex-col">
                <TeamMemberCard {...judge}/>
              </div>
              
            ))}


          </div>
          {/*<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
          {[{ name: "TBD", role: "TBD", linkedinUrl: "TBD" }].map((judge, i) => (
                <div key={i} className="flex flex-col">
                  <TeamMemberCard {...judge}/>
                </div>
              ))}
          </div>
          */}
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-24 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-foreground">Schedule</h2>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader >
                <CardTitle >./schedule.md</CardTitle>
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
                  <span>Workshop - How to Win Hackathons (for beginners)</span>
                  <span className="font-medium">10:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Lunch Break</span>
                  <span className="font-medium">12:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Workshop - Basics of Microcontrollers</span>
                  <span className="font-medium">1:00 PM</span>
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
      <section id="faq" className="pt-24 py-12 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-foreground">FAQ</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-foreground">What is this?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  This hackathon is a 12-hour event where students come together to build innovative projects, learn new
                  technologies, and compete for prizes. Just come and create a web app, mobile app, or anything else you can think of -- no prior experience required!
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

      {/* What You'll Get Section */}
      <section className="pb-24 px-4 bg-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 bg-background/50 rounded-lg border">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 text-foreground">What You'll Get</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Free pizza and drinks
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Guidance from experienced developers
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Access to industry experts and judges
                  </li>
                </ul>
                <ul className="space-y-3 text-muted-foreground">

                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Portfolio-worthy projects to showcase
                  </li>
                  <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Enough API credits to go to the moon
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Tech bro swag
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Team Section */}
      <section id="team" className="py-12 md:py-24 px-2 md:px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-12 text-foreground">Team</h2>
          <h1 className="text-lg sm:text-xl md:text-lg lg:text-3xl font-bold text-center mb-4 text-foreground">Directors</h1>
          <div className="flex justify-center mb-8">
            <div className="flex flex-col">
              <TeamMemberCard
                name="Devin Liu"
                role="Lead Director"
                linkedinUrl="https://www.linkedin.com/in/devin-liu-6aa1b9325/"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 max-w-4xl mx-auto mb-20">
            {[
              { name: "Thomas Liu", role: "Director of Outreach", linkedinUrl: "https://www.linkedin.com/in/thomas-liu-380042231/" },
              { name: "Ayush Rane", role: "Director of Sponsorships", linkedinUrl: "https://www.linkedin.com/in/ayush-rane-344b02260/" },
              { name: "Shlok Madhekar", role: "Director of Operations", linkedinUrl: "https://www.linkedin.com/in/shlok-madhekar-b281872a1" },
            ].map((member, i) => (
              <div key={i} className="flex flex-col">
                <TeamMemberCard {...member}/>
              </div>
            ))}
          </div>
          <h1 className="text-lg sm:text-xl md:text-lg lg:text-3xl font-bold text-center mb-8 text-foreground">Team</h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 max-w-4xl mx-auto">
            {[
              { name: "Christian Egli", role: "Operations",linkedinUrl: "https://www.linkedin.com/in/christian-egli-4a7187344" },
              { name: "Braden Luu", role:"Sponsorships", linkedinUrl: "#" },
              { name: "Anish Dhamija", role: "Sponsorships",linkedinUrl: "https://www.linkedin.com/in/anish-dhamija-5b93712b3" },
              { name: "Dylan Chauhan", role: "Recruitment", linkedinUrl: "#" },
              { name: "Risha Bhat", role: "Outreach", linkedinUrl: "https://www.linkedin.com/in/risha-bhat-250297341/" },
              { name: "Ilina Iyer", role:"Outreach", linkedinUrl: "https://www.linkedin.com/in/ilinai/" },
              
              { name: "Jacob Chiu", role: "Volunteer", linkedinUrl: "#" },
              { name: "Scott Wang", role: "Volunteer", linkedinUrl: "#" },
              { name: "Tejas Nagarkar", role: "Food Quality Testing Intern", linkedinUrl: "https://www.linkedin.com/in/tejas-tj-nagarkar-740298309/" },
            ].map((member, i) => (
              <div key={i} className="flex flex-col">
                <TeamMemberCard {...member}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-secondary">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground mb-4">© 2026 Stang Hacks - Questions? Contact us on the <Link href="https://discord.gg/3qHzFUuW6b" className="underline-offset-3 underline hover:text-foreground transition-colors">discord</Link> or at <span className="underline-offset-3 underline">team@stanghacks.com</span></p>

        </div>
      </footer>
    </div>
  )
}
