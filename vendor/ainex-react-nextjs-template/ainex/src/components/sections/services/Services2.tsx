import ServiceSlider1 from "@/components/shared/sliders/ServiceSlider1";
const Services2 = () => {
	return (
		<section className="tj-service-section-2 section-gap">
			<div className="container-md">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered style-2">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
								Our Services
							</span>
							<h2 className="sec-title text-anim">
								Best Innovative Solution for Businesses
							</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div
							className="service-wrapper-2 wow fadeInUp"
							data-wow-delay=".4s"
						>
							<ServiceSlider1 />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services2;
