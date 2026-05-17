import PortfoliosSlider1 from "@/components/shared/sliders/PortfoliosSlider1";
const Portfolios1 = () => {
	return (
		<section className="tj-project-section overflow-hidden section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
								<i className="tji-subtitle"></i>Our Projects
							</span>
							<h2 className="sec-title text-anim">
								Crafting Tomorrow’s Solutions Now
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="container p-0">
				<div className="row">
					<div className="col-12">
						<div className="project-wrapper wow fadeInUp" data-wow-delay=".4s">
							<PortfoliosSlider1 />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolios1;
