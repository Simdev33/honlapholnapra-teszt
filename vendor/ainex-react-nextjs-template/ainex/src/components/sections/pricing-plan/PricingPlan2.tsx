"use client";

import PricingCard2 from "@/components/shared/cards/PricingCard2";
import getPricingPlans from "@/libs/getPricingItems";
import { useMemo, useState } from "react";

const PricingPlan2 = () => {
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const items = useMemo(() => getPricingPlans(), []);
	return (
		<section className="tj-pricing-section-2 section-gap sidebar-sticky-container">
			<div className="container">
				<div className="row row-gap-4">
					<div className="col-lg-5">
						<div className="content-wrap sidebar-sticky">
							<div className="sec-heading style-3">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
									<i className="tji-subtitle-2"></i>Our Pricing
								</span>
								<h2 className="sec-title text-anim">
									Flexible Pricing, Powerful Tangible Results
								</h2>
							</div>
							<p className="desc">
								Specialize in delivering AI-powered solution <br />{" "}
								revolutionize the businesses.
							</p>
							<div className="pricing-tab wow fadeInUp" data-wow-delay="0.3s">
								<button
									className={`nav-link monthly${isChecked ? "" : " active"}`}
									onClick={e => setIsChecked(false)}
								>
									monthly
								</button>
								<button
									className={`nav-link yearly ${isChecked ? " active" : ""}`}
									onClick={e => setIsChecked(true)}
								>
									yearly
								</button>
							</div>
						</div>
					</div>
					<div className="col-lg-7">
						{items?.length
							? items?.map((item, idx) => (
									<PricingCard2
										key={idx}
										item={item}
										isChecked={isChecked}
										idx={idx}
									/>
							  ))
							: ""}
					</div>
				</div>
			</div>
		</section>
	);
};

export default PricingPlan2;
