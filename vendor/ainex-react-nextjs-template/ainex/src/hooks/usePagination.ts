"use client";
import { useState } from "react";

interface UsePaginationPropType<T> {
	filteredItems?: T[];
	currentLimit?: number;
	pagiItemsLengthPerView?: number;
}

export interface UsePaginationReturnType<T> {
	currentItems: T[];
	totalItems: number;
	currentpage: number;
	setCurrentpage: (value: number) => void;
	paginationItems: number[];
	currentPaginationItems: number[];
	showMore: boolean | "left" | "right";
	totalPages: number;
	handleCurrentPage: (e: React.MouseEvent, id: number) => void;
	firstItem: number;
	lastItem: number;
}

const usePagination = <T>({
	filteredItems = [],
	currentLimit = 6,
	pagiItemsLengthPerView = 6,
}: UsePaginationPropType<T>): UsePaginationReturnType<T> => {
	const [currentpage, setCurrentpage] = useState<number>(0);
	const limit = currentLimit;
	const skip = limit * currentpage;
	const currentItems = filteredItems.slice(skip, skip + limit);
	const totalItems = filteredItems.length;
	const totalCurrentItems = currentItems.length;
	const totalPages = Math.ceil(totalItems / limit);
	const paginationItems = Array.from({ length: totalPages }, (_, idx) => idx);

	const handleCurrentPage = (e: React.MouseEvent, id: number) => {
		e.preventDefault();
		setCurrentpage(id);
	};

	let showMore: boolean | "left" | "right" = false;
	let currentPaginationItems = paginationItems;

	if (totalPages > pagiItemsLengthPerView) {
		showMore = currentpage + 1 > totalPages / 2 ? "left" : "right";

		let sliceStartPoint =
			currentpage >= totalPages - (pagiItemsLengthPerView < 6 ? 2 : 3)
				? -(pagiItemsLengthPerView - 2)
				: currentpage < pagiItemsLengthPerView - 3
				? 0
				: showMore === "left"
				? currentpage - 1
				: currentpage - (pagiItemsLengthPerView - 4);

		let sliceEndPoint =
			currentpage >= totalPages - (pagiItemsLengthPerView < 6 ? 2 : 3)
				? totalPages
				: currentpage < pagiItemsLengthPerView - 3
				? pagiItemsLengthPerView - 2
				: showMore === "left"
				? currentpage + (pagiItemsLengthPerView - 3)
				: currentpage + 2;

		// Clamp sliceStartPoint
		sliceStartPoint = Math.max(0, sliceStartPoint);
		currentPaginationItems = paginationItems.slice(
			sliceStartPoint,
			sliceEndPoint
		);
	}

	return {
		currentItems,
		totalItems,
		currentpage,
		setCurrentpage,
		paginationItems,
		currentPaginationItems,
		showMore,
		totalPages,
		handleCurrentPage,
		firstItem: skip + 1,
		lastItem:
			totalItems < limit
				? totalItems
				: skip + (totalCurrentItems < limit ? totalCurrentItems : limit),
	};
};

export default usePagination;
