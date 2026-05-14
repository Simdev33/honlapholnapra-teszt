import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Image from "next/image";
import Link from "next/link";

const About3 = () => {
	return (
		<section className="tj-about-section-3 section-gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="about-content-area style-3">
							<div className="sec-heading style-3">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-subtitle-2"></i>About our Company
								</span>
								<h2 className="sec-title title-highlight">
									Driving Innovations Through Our and Technology, Delivering Our
									Expert Solutions are Best that Transform Businesses.
								</h2>
							</div>
							<div className="about-bottom-area-3">
								<div className="experience-wrap">
									<FunfactSingle currentValue={13} sup="+" type={2} />
									<h6 className="experience-text">
										We have 10+ Years of working Experiences.
									</h6>
								</div>
								<div className="about-content">
									<p className="desc">
										Our team of experts combines innovation, and strategy to
										deliver custom AI-driven tools and services empower
										transformation.
									</p>
									<ul className="list-style-1 text-white">
										<li>Artificial Intelligence</li>
										<li>Identity Management</li>
										<li>Local Insights</li>
										<li>Business Analytics</li>
									</ul>
									<ButtonPrimary text="Read More" url="/about" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="about-img-area-2">
							<div
								className="about-img wow fadeInLeft"
								data-wow-delay=".3s"
								data-wow-duration="0.8s"
							>
								<Image
									width={768}
									height={1029}
									src="/images/about/about-img-3.webp"
									alt="Image"
								/>
							</div>
							<div className="video-wrap">
								<PopupVideo>
									<Link
										className="video-btn video-popup glightbox"
										href="https://www.youtube.com/watch?v=MLpWrANjFbI&amp;ab_channel=eidelchteinadvogados"
									>
										<span className="video-text">Let’s See How we did it.</span>
										<span className="video-icon">
											<i className="tji-play"></i>
										</span>
									</Link>
								</PopupVideo>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About3;
