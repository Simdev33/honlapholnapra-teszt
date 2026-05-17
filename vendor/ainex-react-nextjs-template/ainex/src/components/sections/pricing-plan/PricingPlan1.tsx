"use client";

import PricingCard1 from "@/components/shared/cards/PricingCard1";
import getPricingPlans from "@/libs/getPricingItems";
import { useMemo } from "react";

const PricingPlan1 = () => {
	const items = useMemo(() => getPricingPlans(), []);
	const isChecked = false;
	return (
		<section id="pricing" className="tj-pricing-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
								<i className="tji-subtitle"></i>Csomagok
							</span>
							<h2 className="sec-title text-anim">
								Átlátható árazás, valódi üzleti eredménnyel
							</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="row row-gap-4">
							{items?.length
								? items?.map((item, idx) => (
										<div key={idx} className="col-xl-4 col-md-6">
											<PricingCard1 item={item} isChecked={isChecked} />
										</div>
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PricingPlan1;
