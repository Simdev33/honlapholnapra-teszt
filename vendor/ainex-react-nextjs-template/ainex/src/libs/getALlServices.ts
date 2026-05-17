import services from "@/data/services.json";
export interface ServiceType {
	id: number;
	title: string;
	img: string;
	img2: string;
	iconName: string;
	desc: string;
}
const getALlServices = () => {
	return services;
};

export default getALlServices;
