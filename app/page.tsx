import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Workflow } from "@/components/workflow"
import { Technology } from "@/components/technology"
import { Pricing } from "@/components/pricing"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <Workflow />
      <Technology />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
