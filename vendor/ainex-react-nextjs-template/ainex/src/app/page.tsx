import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import About1 from "@/components/sections/about/About1";
import Blogs1 from "@/components/sections/blogs/Blogs1";
import Brands1 from "@/components/sections/brands/Brands1";
import Cta from "@/components/sections/cta/Cta";
import Funfact1 from "@/components/sections/funfacts/Funfact1";
import Hero from "@/components/sections/hero/Hero";
import Portfolios1 from "@/components/sections/portfolios/Portfolios1";
import PricingPlan1 from "@/components/sections/pricing-plan/PricingPlan1";
import Process from "@/components/sections/process/Process";
import Services1 from "@/components/sections/services/Services1";
import Testimonials1 from "@/components/sections/testimonials/Testimonials1";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Home() {
	return (
		<div>
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<Header isHeaderTop={true} />
					<main>
						<Hero />
						<Brands1 />
						<About1 />
						<Funfact1 />
						<Services1 />
						<Portfolios1 />
						<Testimonials1 />
						<PricingPlan1 />
						<Process />
						<Blogs1 />
						<Cta />
					</main>
					<Footer />
					<div className="bottom-gap-30"></div>
				</div>
			</div>
			<ClientWrapper />
			<BackToTop />
		</div>
	);
}
