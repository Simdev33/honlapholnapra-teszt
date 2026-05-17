"use client";
import TestimonialSlider3 from "@/components/shared/sliders/TestimonialSlider3";

const Testimonials3 = () => {
	return (
		<section className="tj-testimonial-section section-gap section-gap-x">
			<div className="container-fluid gx-sm-0">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered style-3">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
								<i className="tji-subtitle-2"></i>Client Testimonials
							</span>
							<h2 className="sec-title text-anim">
								Proven Impact Through Testimonial
							</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div
							className="testimonial-wrapper-3 wow fadeInUp"
							data-wow-delay=".5s"
						>
							<TestimonialSlider3 />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials3;
