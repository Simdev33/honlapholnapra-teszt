import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";

const Hero2 = () => {
	return (
		<section className="tj-banner-section-2">
			<div className="banner-area">
				<div className="banner-left-box">
					<div className="banner-video-area">
						<div className="banner-video wow fadeInDown" data-wow-delay=".2s">
							<video
								loop
								muted
								autoPlay
								playsInline
								poster="/images/hero/hero-video-thumb-2.webp"
							>
								<source src="/video/hero-2.mp4" type="video/mp4" />
							</video>
						</div>
					</div>
					<div className="banner-content">
						<span className="sub-title wow fadeInUp" data-wow-delay=".2s">
							<i className="tji-stars"></i>Smarter Tech for Tomorrow.
						</span>
						<h1 className="banner-title text-anim">
							Master Future Best Intelligence Imagination.
						</h1>
						<div className="banner-btn-area wow fadeInUp" data-wow-delay=".7s">
							<ButtonPrimary text="Learn More" url="/about" />
							<ButtonPrimary
								text="Contact Us"
								url="/contact"
								className="style-2"
							/>
						</div>
					</div>
					<div className="banner-shape">
						<Image
							width={345}
							height={230}
							style={{ height: "auto" }}
							src="/images/shape/pattern-bg.svg"
							alt=""
						/>
					</div>
				</div>
				<div className="banner-right-box">
					<div className="banner-img">
						<Image
							width={1806}
							height={1612}
							src="/images/hero/hero-img-2.webp"
							alt=""
						/>
					</div>
					<div className="rating-box-area">
						<div className="rating-box wow fadeInUp" data-wow-delay=".3s">
							<h2 className="title">4.8</h2>
							<div className="rating-area">
								<div className="star-ratings">
									<div className="fill-ratings">
										<span>★★★★★</span>
									</div>
									<div className="empty-ratings">
										<span>★★★★★</span>
									</div>
								</div>
								<span className="rating-text">(80+ Clients Reviews)</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero2;
