import HeroInner from "@/components/sections/hero/HeroInner";
import ServicesDetailsPrimary from "@/components/sections/services/ServicesDetailsPrimary";
import getALlServices from "@/libs/getALlServices";
import getPreviousNextItem from "@/libs/getPreviousNextItem";

interface PropType {
	currentItemId: number;
}
const ServiceDetailsMain = ({ currentItemId }: PropType) => {
	const items = getALlServices();
	const currentId = currentItemId;
	const { prevId, nextId, currentItem, isPrevItem, isNextItem } =
		getPreviousNextItem({ items, currentId });
	const { title } = currentItem || {};
	return (
		<div>
			<HeroInner
				title={title ? title : "Service Details"}
				text={"Service Details"}
				breadcrums={[{ name: "Services", path: "/services" }]}
			/>
			<ServicesDetailsPrimary
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

export default ServiceDetailsMain;
