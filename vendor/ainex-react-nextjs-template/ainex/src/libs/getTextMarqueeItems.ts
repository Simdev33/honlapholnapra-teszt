import items from "@/data/text-marquee.json";
export interface TextMarqueType {
	title: string;
	img: string;
}
const getTextMarqueeItems = () => {
	return items;
};

export default getTextMarqueeItems;
