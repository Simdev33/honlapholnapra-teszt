"use client";
import TestimonialSlider2 from "@/components/shared/sliders/TestimonialSlider2";

const Testimonials2 = () => {
	return (
		<section className="tj-testimonial-section-2 section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered style-2">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
								Innovating Together
							</span>
							<h2 className="sec-title text-anim">
								Proven Impact Through Client Testimonial
							</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div
							className="testimonial-wrapper-2 wow fadeInUp"
							data-wow-delay=".5s"
						>
							<TestimonialSlider2 />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials2;
