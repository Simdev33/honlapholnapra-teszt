import portfolio from "@/data/portfolio.json";
export interface PortfolioType {
	id: number | string;
	title: string;
	title2: string;
	img: string;
	img2: string;
	desc: string;
	category: string;
}
const getPortfolio = () => {
	return portfolio;
};

export default getPortfolio;
