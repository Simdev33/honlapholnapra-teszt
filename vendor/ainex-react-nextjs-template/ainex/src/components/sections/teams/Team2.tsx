import TeamSlider1 from "@/components/shared/sliders/TeamSlider1";

const Team2 = () => {
	return (
		<section className="tj-team-section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap style-2">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								Meet Our Team
							</span>
							<div className="heading-wrap-content">
								<div className="sec-heading style-2">
									<h2 className="sec-title text-anim">
										The Minds Behind the Innovation
									</h2>
								</div>
								<div
									className="slider-navigation-2 d-none d-lg-inline-flex wow fadeInUp"
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
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="team-wrapper wow fadeInUp" data-wow-delay=".5s">
							<TeamSlider1 />
						</div>
						<div className="d-lg-none text-center mt-40">
							<div className="slider-navigation-2 d-inline-flex">
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

export default Team2;
