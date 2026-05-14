import features from "@/data/features.json";
export interface FeatureType {
	id: number | string;
	title: string;
	icon: string;
	desc: string;
}
const getAllFeatures = () => {
	return features;
};

export default getAllFeatures;
