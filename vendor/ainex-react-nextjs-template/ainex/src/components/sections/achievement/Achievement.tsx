import Image from "next/image";

const Achievement = () => {
	return (
		<section className="tj-achievement-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-subtitle-2"></i>Our Achievements
							</span>
							<div className="heading-wrap-content">
								<div className="sec-heading">
									<h2 className="sec-title text-anim">
										Empowering Solutions Optimization
									</h2>
								</div>
								<p className="desc wow fadeInUp" data-wow-delay=".3s">
									Our team of experts combines innovation, and strategy to
									deliver custom AI-driven tools and services empower
									transformation.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					<div className="col-lg-6 order-2 order-lg-1">
						<div
							className="achievement-img wow fadeInLeft"
							data-wow-delay=".3s"
						>
							<Image
								width={645}
								height={487}
								src="/images/achievement/achievement.webp"
								alt="Image"
							/>
						</div>
					</div>
					<div className="col-lg-6 order-1 order-lg-2">
						<div
							className="achievement-area wow fadeInRight"
							data-wow-delay=".3s"
						>
							<div className="achievement-item">
								<div className="content">
									<span className="no">01.</span>
									<h4 className="title">
										Pioneers of Digital Innovation Award in SEO
									</h4>
								</div>
								<span className="year">2025</span>
							</div>
							<div className="achievement-item">
								<div className="content">
									<span className="no">02.</span>
									<h4 className="title">
										Excellence in User Experience Design Award
									</h4>
								</div>
								<span className="year">2024</span>
							</div>
							<div className="achievement-item">
								<div className="content">
									<span className="no">03.</span>
									<h4 className="title">
										Best Interactive Website Design of the Year
									</h4>
								</div>
								<span className="year">2022</span>
							</div>
							<div className="achievement-item">
								<div className="content">
									<span className="no">04.</span>
									<h4 className="title">
										Creative Visionary Award for Web Design
									</h4>
								</div>
								<span className="year">2021</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Achievement;
