import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PortfolioItems from "@/components/shared/portfolios/PortfolioItems";
const Portfolios2 = () => {
	return (
		<section className="tj-project-section-2 section-gap section-gap-x sidebar-sticky-container">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="content-wrap sidebar-sticky">
							<div className="sec-heading style-2">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
									Our Projects
								</span>
								<h2 className="sec-title text-anim">
									Transforming Ideas into Reality
								</h2>
							</div>
							<p className="desc wow fadeInUp" data-wow-delay=".3s">
								Specialize in delivering AI-powered solution <br />
								revolutionize the businesses.
							</p>
							<div
								className=" d-none d-lg-block wow fadeInUp"
								data-wow-delay=".4s"
							>
								<ButtonPrimary text="Explore More" url="/portfolios" />
							</div>
						</div>
					</div>
					<div className="col-lg-8">
						<PortfolioItems />
						<div className="d-lg-none text-center mt-40">
							<ButtonPrimary text="Explore More" url="/portfolios" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolios2;
