import pricingPlans from "@/data/pricing-plans.json";
export interface PricingType {
	type: string;
	badge: string;
	monthlyPrice: number | string;
	yearlyPrice: number | string;
	shortPeriodName: string;
	longPeriodName: string;
	desc: string;
	buttonName: string;
	url: string;
	features: string[];
}
const getPricingPlans = () => {
	return pricingPlans;
};

export default getPricingPlans;
