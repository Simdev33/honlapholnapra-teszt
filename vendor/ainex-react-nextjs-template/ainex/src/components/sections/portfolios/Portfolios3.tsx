import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PortfolioCard1 from "@/components/shared/cards/PortfolioCard1";
import getPortfolio from "@/libs/getPortfolio";
import makeWowDelay from "@/libs/makeWowDelay";
const Portfolios3 = () => {
	const items = getPortfolio()?.slice(0, 4);
	return (
		<section className="tj-project-section-3 section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-subtitle-2"></i>Proud Projects
							</span>
							<div className="heading-wrap-content">
								<div className="sec-heading style-3">
									<h2 className="sec-title text-anim">
										Breaking Boundaries, Building Dreams.
									</h2>
								</div>
								<div
									className="project-button d-none d-lg-inline-flex wow fadeInUp"
									data-wow-delay=".5s"
								>
									<ButtonPrimary text="Explore More" url="/portfolios" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					{items?.length
						? items?.map((item, idx) => (
								<div
									key={idx}
									className="col-lg-6 wow fadeInUp"
									data-wow-delay={makeWowDelay(idx, 0.1)}
								>
									<PortfolioCard1 item={item} />
								</div>
						  ))
						: ""}
				</div>
				<div
					className="d-lg-none text-center mt-40 wow fadeInUp"
					data-wow-delay=".5s"
				>
					<ButtonPrimary text="Explore More" url="/portfolios" />
				</div>
			</div>
		</section>
	);
};

export default Portfolios3;
