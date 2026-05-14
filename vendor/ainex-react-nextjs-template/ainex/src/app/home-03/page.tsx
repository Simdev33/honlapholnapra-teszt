import Footer3 from "@/components/layout/footer/Footer3";
import Header from "@/components/layout/header/Header";
import About3 from "@/components/sections/about/About3";
import Blogs3 from "@/components/sections/blogs/Blogs3";
import Brands1 from "@/components/sections/brands/Brands1";
import Hero3 from "@/components/sections/hero/Hero3";
import Portfolios3 from "@/components/sections/portfolios/Portfolios3";
import PricingPlan2 from "@/components/sections/pricing-plan/PricingPlan2";
import Process2 from "@/components/sections/process/Process2";
import Services3 from "@/components/sections/services/Services3";
import Testimonials3 from "@/components/sections/testimonials/Testimonials3";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Faq() {
	return (
		<div>
			<Header isStickyHeader={true} headerType={3} isCasvas={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<div className="top-gap-75"></div>
					<Header
						headerType={3}
						isHeaderTop={true}
						headerTopType={2}
						isCasvas={true}
					/>
					<main>
						<Hero3 />
						<Brands1 />
						<Process2 />
						<About3 />
						<Services3 />
						<Portfolios3 />
						<Testimonials3 />
						<PricingPlan2 />
						<Blogs3 />
					</main>
					<Footer3 />
					<div className="bottom-gap-30"></div>
				</div>
			</div>
			<ClientWrapper />
			<BackToTop />
		</div>
	);
}
