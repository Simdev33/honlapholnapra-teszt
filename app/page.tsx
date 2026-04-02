import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { PainPoints } from "@/components/pain-points"
import { GoogleAdsSection } from "@/components/google-ads-section"
import { Workflow } from "@/components/workflow"
import { Technology } from "@/components/technology"
import { Pricing } from "@/components/pricing"
import { About } from "@/components/about"
import { AdsOffer } from "@/components/ads-offer"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <PainPoints />
      <GoogleAdsSection />
      <Workflow />
      <Technology />
      <Pricing />
      <About />
      <AdsOffer />
      <Contact />
      <Footer />
    </main>
  )
}
