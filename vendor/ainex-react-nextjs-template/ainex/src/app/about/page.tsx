import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import About2 from "@/components/sections/about/About2";
import Achievement from "@/components/sections/achievement/Achievement";
import Cta from "@/components/sections/cta/Cta";
import Faq2 from "@/components/sections/faq/Faq2";
import HeroInner from "@/components/sections/hero/HeroInner";
import Team1 from "@/components/sections/teams/Team1";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function About() {
	return (
		<div>
			<Header isStickyHeader={true} headerType={2} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<div className="top-gap-20"></div>
					<Header headerType={2} isNotAbsolute={true} />
					<main>
						<HeroInner title="About Us" text="About Us" />
						<About2 />
						<Achievement />
						<Team1 />
						<Faq2 />
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
