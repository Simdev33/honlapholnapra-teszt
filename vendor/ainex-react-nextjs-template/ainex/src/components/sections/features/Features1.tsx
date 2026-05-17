import FeatureCard from "@/components/shared/cards/FeatureCard";
import getAllFeatures from "@/libs/getAllFeatures";

const Features1 = () => {
	const items = getAllFeatures();
	return (
		<section className="tj-choose-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered style-2">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
								Why Choose Us?
							</span>
							<h2 className="sec-title text-anim">
								Empowering Business Cutting Edge
							</h2>
							<p className="desc wow fadeInUp" data-wow-delay="0.5s">
								Specialize in delivering AI-powered solution revolutionize the
								businesses of our operator.
							</p>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					{items?.length
						? items.map((item, idx) => (
								<div key={idx} className="col-xl-3 col-md-6">
									<FeatureCard item={item} idx={idx} />
								</div>
						  ))
						: ""}
				</div>
			</div>
		</section>
	);
};

export default Features1;
