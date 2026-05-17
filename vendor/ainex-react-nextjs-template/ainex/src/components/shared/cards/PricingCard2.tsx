import { PricingType } from "@/libs/getPricingItems";
import makePath from "@/libs/makePath";
import makeWowDelay from "@/libs/makeWowDelay";
import Link from "next/link";

interface PropType {
	item: PricingType;
	isChecked: boolean;
	idx: number;
}
const PricingCard2 = ({ item, isChecked, idx }: PropType) => {
	const {
		type,
		badge,
		monthlyPrice,
		yearlyPrice,
		shortPeriodName,
		longPeriodName,
		desc,
		buttonName,
		url = "/contact",
		features,
	} = item || {};

	return (
		<div
			className={`pricing-box style-2 wow fadeInUp ${
				makePath(type) === "pro_plan" ? "active" : ""
			}`}
			data-wow-delay={makeWowDelay(idx, 0.1, 2)}
		>
			<div className="pricing-box-inner">
				<div className="pricing-badge">
					<span>
						<span>{badge}</span>
					</span>
				</div>
				<div className="pricing-header">
					<h6 className="package-name">{type}</h6>
					<div className="package-price">
						<span className="package-currency">$</span>
						<span className="price-number">
							{isChecked ? yearlyPrice : monthlyPrice}
						</span>
						<span
							className="package-period"
							data-year-period="/year"
							data-month-period="/month"
						>
							/{isChecked ? longPeriodName : shortPeriodName}
						</span>
					</div>
					<div className="package-desc">
						<p>Specialize in delivering AI-powered solution revolutionize.</p>
					</div>
					<div className="pricing-btn">
						<Link className="text-btn" href={url}>
							<span className="btn-text">
								<span>{buttonName}</span>
							</span>
							<span className="btn-icon">
								<i className="tji-arrow-right"></i>
							</span>
						</Link>
					</div>
				</div>
				<div className="list-style-3">
					<h6 className="title">Included:</h6>
					<ul>
						{" "}
						{features?.length
							? features?.map((feature, idx) => (
									<li key={idx + 10}>
										<i className="tji-check"></i>
										{feature}
									</li>
							  ))
							: ""}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default PricingCard2;
