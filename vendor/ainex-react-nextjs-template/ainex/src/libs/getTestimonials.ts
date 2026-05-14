import testimonials from "@/data/testimonials.json";
export interface TestimonialType {
	id: number;
	authorName: string;
	authorDesig: string;
	img: string;
	img2: string;
	desc: string;
	desc2: string;
	desc3: string;
}
const getTestimonials = () => {
	return testimonials;
};

export default getTestimonials;
