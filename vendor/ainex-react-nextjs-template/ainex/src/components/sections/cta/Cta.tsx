import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";

const Cta = () => {
	return (
		<section className="tj-cta-section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="cta-area wow fadeInUp" data-wow-delay=".3s">
							<div className="cta-content">
								<h2 className="title text-anim">
									Ready to Elevate Your Business with AI?
								</h2>
								<ButtonPrimary
									text="Get Started Today"
									url="/contact"
									className="btn-light"
								/>
							</div>
							<div className="cta-img">
								<Image
									width={578}
									height={448}
									style={{ height: "auto" }}
									src="/images/cta/cta-bg.webp"
									alt="Image"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cta;
