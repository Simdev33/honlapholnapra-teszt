"use client";

import { UsePaginationReturnType } from "@/hooks/usePagination";
import modifyNumber from "@/libs/modifyNumber";

interface PropType<T> {
	paginationDetails: UsePaginationReturnType<T>;
	type?: number;
}

const Paginations = <T,>({ paginationDetails, type }: PropType<T>) => {
	if (!paginationDetails) return null;

	const {
		currentpage,
		handleCurrentPage,
		currentPaginationItems,
		paginationItems,
	} = paginationDetails;

	const handleBackToTop = () => {
		setTimeout(() => {
			if (typeof window !== "undefined") {
				window.scrollTo({ top: 400, left: 0, behavior: "smooth" });
			}
		}, 10);
	};

	const handlePrevPage = (e: React.MouseEvent<HTMLButtonElement>) => {
		handleCurrentPage(e, currentpage - 1);
	};

	const handleNextPage = (e: React.MouseEvent<HTMLButtonElement>) => {
		handleCurrentPage(e, currentpage + 1);
	};

	const handleCorrespondentPage = (
		e: React.MouseEvent<HTMLButtonElement>,
		page: number
	) => {
		handleCurrentPage(e, page);
	};

	return (
		<div
			className={`tj-pagination d-flex${
				type === 2 ? "" : " justify-content-center"
			}`}
		>
			<ul className="pagination-list d-flex list-unstyled mb-0">
				{currentpage > 0 && (
					<li onClick={handleBackToTop}>
						<button
							type="button"
							className="page-numbers prev"
							onClick={handlePrevPage}
						>
							<i className="tji-arrow-left"></i>
						</button>
					</li>
				)}

				{currentPaginationItems.map(page => (
					<li key={page} onClick={handleBackToTop}>
						<button
							type="button"
							className={`page-numbers${
								page === currentpage ? " current" : ""
							}`}
							onClick={e => handleCorrespondentPage(e, page)}
						>
							{modifyNumber(page + 1)}
						</button>
					</li>
				))}

				{currentpage < paginationItems.length - 1 && (
					<li onClick={handleBackToTop}>
						<button
							type="button"
							className="page-numbers next"
							onClick={handleNextPage}
						>
							<i className="tji-arrow-right"></i>
						</button>
					</li>
				)}
			</ul>
		</div>
	);
};

export default Paginations;
