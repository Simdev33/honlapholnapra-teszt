"use client";
import PortfolioCard1 from "@/components/shared/cards/PortfolioCard1";
import Paginations from "@/components/shared/others/Paginations";
import usePagination from "@/hooks/usePagination";
import getPortfolio from "@/libs/getPortfolio";
import makeWowDelay from "@/libs/makeWowDelay";
import { useMemo } from "react";
const Portfolios4 = () => {
	const items = useMemo(() => getPortfolio(), []);
	const limit = 6;
	// Get pagination details from hook
	const paginationDetails = usePagination({
		filteredItems: items,
		currentLimit: limit,
	});
	const { currentItems } = paginationDetails;
	const totalItems = items.length;
	const totalItemsToShow = currentItems?.length || 0;
	return (
		<section className="tj-project-section-3 section-gap">
			<div className="container">
				<div className="row row-gap-4">
					{currentItems?.length
						? currentItems?.map((item, idx) => (
								<div
									key={idx}
									className="col-lg-6 wow fadeInUp"
									data-wow-delay={makeWowDelay(idx % 2, 0.3)}
								>
									<PortfolioCard1 item={item} />
								</div>
						  ))
						: ""}
				</div>
				{/* Pagination */}
				{totalItemsToShow < totalItems ? (
					<Paginations paginationDetails={paginationDetails} />
				) : (
					""
				)}
			</div>
		</section>
	);
};

export default Portfolios4;
