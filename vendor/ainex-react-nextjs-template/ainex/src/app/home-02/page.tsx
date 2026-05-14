import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import About2 from "@/components/sections/about/About2";
import Blogs2 from "@/components/sections/blogs/Blogs2";
import Brands1 from "@/components/sections/brands/Brands1";
import Faq3 from "@/components/sections/faq/Faq3";
import Features1 from "@/components/sections/features/Features1";
import Funfact2 from "@/components/sections/funfacts/Funfact2";
import Hero2 from "@/components/sections/hero/Hero2";
import Portfolios2 from "@/components/sections/portfolios/Portfolios2";
import Services2 from "@/components/sections/services/Services2";
import Team2 from "@/components/sections/teams/Team2";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Home2() {
	return (
		<div>
			<Header isStickyHeader={true} headerType={2} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<div className="top-gap-20"></div>
					<Header headerType={2} isNotAbsolute={true} />
					<main>
						<Hero2 />
						<Features1 />
						<About2 type={2} />
						<Services2 />
						<Portfolios2 />
						<Testimonials2 />
						<Funfact2 />
						<Team2 />
						<Faq3 />
						<Blogs2 />
						<Brands1 type={2} />
					</main>
					<Footer2 />
					<div className="bottom-gap-30"></div>
				</div>
			</div>
			<ClientWrapper />
			<BackToTop />
		</div>
	);
}
