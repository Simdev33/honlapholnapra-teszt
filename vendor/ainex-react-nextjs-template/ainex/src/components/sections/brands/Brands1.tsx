import BrandSlider1 from "@/components/shared/brands/BrandSlider1";
interface PropType {
	type?: number | string;
}
const Brands1 = ({ type = 0 }: PropType) => {
	return (
		<section
			id="client"
			className={`tj-client-section ${
				type === 2 ? "section-gap-bottom" : "section-gap"
			} wow fadeInUp`}
			data-wow-delay=".4s"
			data-wow-duration="0.8s"
		>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="client-content wow fadeInUp" data-wow-delay=".3s">
							<h5 className="sec-title">
								<span className="client-numbers">2000+</span> Trusted Client
								over the World
							</h5>
						</div>
						<BrandSlider1 />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Brands1;
