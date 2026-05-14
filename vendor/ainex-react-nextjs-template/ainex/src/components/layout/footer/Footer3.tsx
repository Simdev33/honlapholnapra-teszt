import Socials1 from "@/components/shared/socials/Socials1";
import Image from "next/image";
import Link from "next/link";
import FooterQuickLinkNavs from "./FooterQuickLinkNavs";
import FooterServiceNavs from "./FooterServiceNavs";

const Footer3 = () => {
	return (
		<footer className="tj-footer-section footer-3 section-gap-top section-gap-x">
			<div className="footer-top-area">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="footer-cta">
								<div
									className="sec-heading style-3 wow fadeInUp"
									data-wow-delay=".5s"
								>
									<span className="sub-title">
										<i className="tji-subtitle-2"></i>Get Started
									</span>
									<h2 className="sec-title">
										Let’s Launch AI-Powered Project{" "}
										<Image
											width={76}
											height={77}
											style={{ height: "auto" }}
											src="/images/shape/hand.webp"
											alt=""
										/>{" "}
										Here.
									</h2>
								</div>
								<div
									className="circle-text-wrap wow fadeInUp"
									data-wow-delay=".7s"
								>
									<span
										className="circle-text"
										style={{
											backgroundImage: "url('/images/cta/circle-text.webp')",
										}}
									></span>
									<Link className="circle-icon" href="/contact">
										<span>
											<i className="tji-plane-2"></i>
										</span>
									</Link>
								</div>
								<div className="cta-bg wow fadeIn" data-wow-delay=".3s">
									<Image
										width={798}
										height={565}
										src="/images/cta/line-pattern.webp"
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-main-area style-2">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-xl-3 col-md-6">
							<div className="footer-widget footer-col-1">
								<div className="footer-logo">
									<Link href="/">
										<Image
											width={636}
											height={154}
											style={{ height: "auto" }}
											src="/images/logos/logo.webp"
											alt="Logo"
										/>
									</Link>
								</div>
								<div className="footer-text">
									<p>
										Understanding client needs, defining goals, and designing
										tailored AI crafting's solutions.
									</p>
								</div>
								<div className="social-links style-2">
									<Socials1 />
								</div>
							</div>
						</div>
						<div className="col-xxl-2 col-xl-3 col-md-6">
							<div className="footer-widget widget-nav-menu footer-col-2">
								<h5 className="title">Quick Links</h5>
								<FooterQuickLinkNavs />
							</div>
						</div>
						<div className="col-xl-3 col-md-6">
							<div className="footer-widget widget-nav-menu footer-col-3">
								<h5 className="title">Our Services</h5>
								<FooterServiceNavs />
							</div>
						</div>
						<div className="col-xxl-4 col-xl-3 col-md-6">
							<div className="footer-widget widget-subscribe footer-col-4">
								<h3 className="title">Subscribe to Our Newsletter.</h3>
								<div className="subscribe-form">
									<form action="#">
										<input
											type="email"
											name="email"
											placeholder="Enter email*"
										/>
										<button type="submit">
											<i className="tji-plane"></i>
										</button>
										<label htmlFor="agree">
											<input id="agree" type="checkbox" />
											Agree to our <Link href="#">Terms & Condition?</Link>
										</label>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="tj-copyright-area-2">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="copyright-text">
									<p>
										&copy; 2025 
										<Link
											href="https://themeforest.net/user/theme-junction/portfolio"
											target="_blank"
										>
											Ainex
										</Link>{" "}
										All right reserved
									</p>
								</div>
								<div className="copyright-menu">
									<ul>
										<li>
											<Link href="/contact">Privacy Policy</Link>
										</li>
										<li>
											<Link href="/contact">Terms & Condition</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer3;
