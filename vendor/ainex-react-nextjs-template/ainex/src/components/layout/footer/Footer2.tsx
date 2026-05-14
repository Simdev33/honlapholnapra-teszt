import Socials1 from "@/components/shared/socials/Socials1";
import Image from "next/image";
import Link from "next/link";
import FooterQuickLinkNavs from "./FooterQuickLinkNavs";
import FooterServiceNavs from "./FooterServiceNavs";

const Footer2 = () => {
	return (
		<footer className="tj-footer-section footer-2 section-gap-x">
			<div className="footer-top-area">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="footer-widget widget-subscribe-2">
								<h2 className="title wow fadeInLeft" data-wow-delay=".3s">
									Subscribe to Our Newsletter{" "}
									<Image
										width={76}
										height={77}
										style={{ height: "auto" }}
										src="/images/shape/bell.webp"
										alt=""
									/>
								</h2>
								<div
									className="subscribe-form wow fadeInRight"
									data-wow-delay=".4s"
								>
									<form action="#">
										<input
											type="email"
											name="email"
											placeholder="Enter email*"
										/>
										<button type="submit">
											<i className="tji-plane"></i> Subscribe
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
						<div className="col-xl-3 col-md-6">
							<div className="footer-widget widget-contact foote-col-4">
								<h5 className="title">Contact Info</h5>
								<div className="footer-contact-info">
									<div className="contact-item">
										<span>993 Renner Burg, West Rond, MT 94251-030, USA.</span>
									</div>
									<div className="contact-item">
										<Link href="tel:10095447818">P: +1 (009) 544-7818</Link>
										<Link href="mailto:support@ainex.com">
											E: support@ainex.com
										</Link>
									</div>
									<div className="contact-item">
										<span>
											<i className="tji-clock"></i> Mon-Fri 10am-10pm
										</span>
									</div>
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

export default Footer2;
