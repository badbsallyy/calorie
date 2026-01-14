import {
  Header,
  Hero,
  Features,
  HowItWorks,
  AIShowcase,
  Pricing,
  Testimonials,
  FAQ,
  Contact,
  CTA,
  Footer,
} from "@/components/sections"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <AIShowcase />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
    </main>
  )
}
