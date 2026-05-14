import makePath from "./makePath";
import makeText from "./makeText";

export type CollectionType =
	| "category"
	| "brand"
	| "tags"
	| "size"
	| "color"
	| "author"
	| "role"
	| "search"
	| "popularity"
	| "new"
	| "price-descending"
	| "price-ascending"
	| "rating";

export interface ItemType {
	type?: string;
	category?: string;
	brand?: string;
	tags?: string[];
	size?: string;
	color?: string;
	author?: string | undefined;
	author_role?: string;
	title?: string;
	soldUnits?: number;
	date?: string | number | undefined;
	price?: number;
	reviews?: number;
	[key: string]: any;
}

const filterItems = <T extends ItemType>(
	items: T[] = [],
	collection: CollectionType,
	filterItem?: string,
	isProducts = false
): T[] => {
	switch (collection) {
		case "category":
			return items.filter(
				({ type, category }) =>
					makePath(isProducts ? type : category) === filterItem
			);

		case "brand":
			return items.filter(({ brand }) => makePath(brand) === filterItem);

		case "tags":
			return items.filter(({ tags }) => {
				const filterableTags = tags?.map(tag => tag.toLowerCase());
				return (
					filterableTags?.includes(makeText(filterItem || "", false)) ?? false
				);
			});

		case "size":
			return items.filter(({ size }) => makePath(size) === filterItem);

		case "color":
			return items.filter(({ color }) => makePath(color) === filterItem);

		case "author":
			return items.filter(({ author }) => makePath(author) === filterItem);

		case "role":
			return items.filter(
				({ author_role }) => makePath(author_role ?? "") === filterItem
			);

		case "search":
			if (!filterItem) return [];
			const searchText = new RegExp(makeText(filterItem || "", false), "i");
			return items.filter(({ title }) => searchText.test(title || ""));

		case "popularity":
			return [...items].sort((a, b) => (b.soldUnits ?? 0) - (a.soldUnits ?? 0));

		case "price-descending":
			return [...items].sort((a, b) => (b.price ?? 0) - (a.price ?? 0));

		case "price-ascending":
			return [...items].sort((a, b) => (a.price ?? 0) - (b.price ?? 0));

		case "rating":
			return [...items].sort((a, b) => (b.reviews ?? 0) - (a.reviews ?? 0));

		default:
			return items;
	}
};

export default filterItems;
