import HeroInner from "@/components/sections/hero/HeroInner";
import PortfolioDetailsPrimary from "@/components/sections/portfolios/PortfolioDetailsPrimary";
import getPortfolio from "@/libs/getPortfolio";
import getPreviousNextItem from "@/libs/getPreviousNextItem";

interface PropType {
	currentItemId: number;
}
const PortfolioDetailsMain = ({ currentItemId }: PropType) => {
	const items = getPortfolio();
	const currentId = currentItemId;
	const { prevId, nextId, currentItem, isPrevItem, isNextItem } =
		getPreviousNextItem({ items, currentId });
	const { title } = currentItem || {};
	return (
		<div>
			<HeroInner
				title={title ? title : "Project Details"}
				text={"Project Details"}
				breadcrums={[{ name: "Projects", path: "/portfolios" }]}
			/>
			<PortfolioDetailsPrimary
				option={{
					currentId,
					prevId,
					nextId,
					isPrevItem,
					isNextItem,
				}}
				items={items}
				currentItem={currentItem}
			/>
		</div>
	);
};

export default PortfolioDetailsMain;
