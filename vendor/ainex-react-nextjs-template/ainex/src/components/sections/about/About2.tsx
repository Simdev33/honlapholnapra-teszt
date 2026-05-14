import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import TextMarqueeSlider from "@/components/shared/sliders/TextMarqueeSlider";
import Image from "next/image";
interface PropType {
	type?: number | string;
}
const About2 = ({ type }: PropType) => {
	return (
		<section
			className={`tj-about-section-2 section-gap-x ${
				type === 2 ? "" : "section-gap-top"
			}`}
		>
			<div className="about-wrapper">
				<div className="about-area">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="about-content-area style-2">
									<div className="sec-heading style-2">
										<span
											className="sub-title wow fadeInUp"
											data-wow-delay=".3s"
										>
											Explore Our Services
										</span>
										<h2 className="sec-title text-anim">
											Driving Innovation Through AI and New Technology,
											Delivering Tailored
										</h2>
									</div>
									<div className="about-bottom-area-2">
										<div
											className="company-logo wow fadeInLeft"
											data-wow-delay=".3s"
										>
											<Image
												width={199}
												height={228}
												style={{ height: "auto" }}
												src="/images/logos/logo-2.webp"
												alt="Image"
											/>
										</div>
										<div className="mission-vision-wrap">
											<div
												className="mission-vision-box wow fadeInRight"
												data-wow-delay=".5s"
											>
												<h4 className="title">Our Mission</h4>
												<p className="desc">
													Revolutionize the way you work the our solutions
													designed to meet the unique challenges of today’s
													business landscape revolutionize.
												</p>
											</div>
											<div
												className="mission-vision-box wow fadeInRight"
												data-wow-delay=".5s"
											>
												<h4 className="title">Our Vision</h4>
												<p className="desc">
													Revolutionize the way you work the our solutions
													designed to meet the unique challenges of today’s
													business landscape revolutionize.
												</p>
											</div>
											<div className=" wow fadeInUp" data-wow-delay=".5s"></div>
											<ButtonPrimary
												text="Read More"
												url="/about"
												className="style-2"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="about-img-area">
						<div
							className="about-img wow fadeInLeft"
							data-wow-delay=".3s"
							data-wow-duration="0.8s"
						>
							<Image
								width={1250}
								height={1205}
								loading="eager"
								priority
								src="/images/about/about-img-2.webp"
								alt="Image"
							/>
						</div>
					</div>
				</div>
				<TextMarqueeSlider />
			</div>
		</section>
	);
};

export default About2;
