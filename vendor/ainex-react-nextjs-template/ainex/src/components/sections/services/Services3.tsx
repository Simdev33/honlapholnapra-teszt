import ServiceCard3 from "@/components/shared/cards/ServiceCard3";
import getALlServices from "@/libs/getALlServices";

const Services3 = () => {
	const items = getALlServices()?.slice(0, 4);
	const lastIteme = items?.length - 1;
	return (
		<section className="tj-service-section section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered style-3">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
								<i className="tji-subtitle-2"></i>Our Best Services
							</span>
							<h2 className="sec-title text-anim">Explore Our Services</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div
							className="service-wrapper mb-40 wow fadeInUp"
							data-wow-delay=".4s"
						>
							{items?.length
								? items?.map((item, idx: number) => (
										<ServiceCard3
											key={idx}
											item={item}
											idx={idx}
											lastIteme={lastIteme}
										/>
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
			<div className="service-bottom-btn">
				<a className="text-btn" href="/services">
					<span className="btn-text">
						<span>More Services</span>
					</span>
					<span className="btn-icon">
						<span>
							<i className="tji-arrow-down"></i>
						</span>
					</span>
				</a>
			</div>
		</section>
	);
};

export default Services3;
