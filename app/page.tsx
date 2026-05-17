import Footer from "@/components/layout/footer/Footer"
import Header from "@/components/layout/header/Header"
import HeaderTop from "@/components/layout/header/HeaderTop"
import About1 from "@/components/sections/about/About1"
import Contact2 from "@/components/sections/contacts/Contact2"
import Funfact1 from "@/components/sections/funfacts/Funfact1"
import Hero from "@/components/sections/hero/Hero"
import PricingPlan1 from "@/components/sections/pricing-plan/PricingPlan1"
import Process from "@/components/sections/process/Process"
import Services1 from "@/components/sections/services/Services1"
import { BlogCarouselSection } from "@/components/blog-carousel-section"
import BackToTop from "@/components/shared/others/BackToTop"
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper"
import {
  AdsOfferSection,
  GoogleAdsSection,
  PainPointsSection,
  TechnologySection,
} from "@/components/home-missing-sections"

export default function Home() {
  return (
    <div className="hh-has-fixed-topbar">
      <HeaderTop />
      <Header isStickyHeader={true} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Header />
          <main>
            <Hero />
            <Services1 />
            <PainPointsSection />
            <GoogleAdsSection />
            <Funfact1 />
            <Process />
            <TechnologySection />
            <PricingPlan1 />
            <About1 />
            <AdsOfferSection />
            <BlogCarouselSection />
            <Contact2 />
          </main>
          <Footer />
          <div className="bottom-gap-30"></div>
        </div>
      </div>
      <ClientWrapper />
      <BackToTop />
    </div>
  )
}
