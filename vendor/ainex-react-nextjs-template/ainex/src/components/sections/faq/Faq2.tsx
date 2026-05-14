import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FaqCommon from "@/components/shared/faq/FaqCommon";

const Faq2 = () => {
	return (
		<section className="tj-faq-section-2 section-gap">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-4">
						<div className="content-wrap">
							<div className="sec-heading">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-subtitle-2"></i>Cutting-edge solutions
								</span>
								<h2 className="sec-title text-anim">
									Best Innovative Solution for Business.
								</h2>
							</div>
							<p className="desc wow fadeInUp" data-wow-delay=".4s">
								Our team of experts combines innovation, and <br />
								strategy to deliver custom AI-dr.
							</p>
							<div className=" wow fadeInUp" data-wow-delay=".5s">
								<ButtonPrimary
									text="Contact Us"
									url="/contact"
									className="style-2"
								/>
							</div>
						</div>
					</div>
					<div className="col-lg-7">
						<FaqCommon />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq2;
