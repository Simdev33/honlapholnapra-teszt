"use client";
import TestimonialSlider1 from "@/components/shared/sliders/TestimonialSlider1";

const Testimonials1 = () => {
	return (
		<section className="tj-testimonial-section section-gap section-gap-x">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-6">
						<div className="content-wrap">
							<div className="sec-heading">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
									<i className="tji-subtitle"></i>Innovating Together
								</span>
								<h2 className="sec-title text-anim">
									Trusted Collaborations Leading Innovators
								</h2>
							</div>
							<p className="desc wow fadeInUp" data-wow-delay=".3s">
								Specialize in delivering AI-powered solution revolutionize the
								way businesses operate. By leveraging the latest.
							</p>
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
							<div
								className="slider-navigation d-lg-inline-flex d-none wow fadeInUp"
								data-wow-delay=".3s"
							>
								<div className="slider-prev">
									<span className="anim-icon">
										<i className="tji-arrow-left"></i>
										<i className="tji-arrow-left"></i>
									</span>
								</div>
								<div className="slider-next">
									<span className="anim-icon">
										<i className="tji-arrow-right"></i>
										<i className="tji-arrow-right"></i>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div
							className="testimonial-wrapper wow fadeInUp"
							data-wow-delay=".5s"
						>
							<span className="quote-icon">
								<i className="tji-quote"></i>
							</span>
							<TestimonialSlider1 />
						</div>
						<div className="mobile-navigation">
							<div className="slider-navigation d-inline-flex d-lg-none">
								<div className="slider-prev">
									<span className="anim-icon">
										<i className="tji-arrow-left"></i>
										<i className="tji-arrow-left"></i>
									</span>
								</div>
								<div className="slider-next">
									<span className="anim-icon">
										<i className="tji-arrow-right"></i>
										<i className="tji-arrow-right"></i>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials1;
