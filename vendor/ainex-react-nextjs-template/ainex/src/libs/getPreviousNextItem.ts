interface ItemWithId {
	id: number;
}
interface ParamType<T extends ItemWithId> {
	items: T[];
	currentId: number;
}

const getPreviousNextItem = <T extends ItemWithId>({
	items,
	currentId = 0,
}: ParamType<T>) => {
	const totalItems = items.length;
	// Find index of current item
	const currentIndex = items.findIndex(item => item.id === currentId);
	const prevItem = currentIndex > 0 ? items[currentIndex - 1] : items[0];
	const nextItem =
		currentIndex >= 0 && currentIndex < totalItems - 1
			? items[currentIndex + 1]
			: items[totalItems - 1];
	const prevId = prevItem.id;
	const nextId = nextItem.id;
	const isPrevItem = currentIndex > 0;
	const isNextItem = currentIndex >= 0 && currentIndex < totalItems - 1;
	const currentItem = items[currentIndex] || null;

	return { prevId, nextId, currentItem, isPrevItem, isNextItem };
};

export default getPreviousNextItem;
