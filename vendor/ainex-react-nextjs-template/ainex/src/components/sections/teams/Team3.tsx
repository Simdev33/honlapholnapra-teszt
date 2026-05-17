"use client";

import TeamCard from "@/components/shared/cards/TeamCard";
import Paginations from "@/components/shared/others/Paginations";
import usePagination from "@/hooks/usePagination";
import getTeamMembers from "@/libs/getTeamMembers";
import makeWowDelay from "@/libs/makeWowDelay";
import { useMemo } from "react";

const Team3 = () => {
	const items = useMemo(() => getTeamMembers(), []);
	const limit = 8;
	// Get pagination details from hook
	const paginationDetails = usePagination({
		filteredItems: items,
		currentLimit: limit,
	});
	const { currentItems } = paginationDetails;
	const totalItems = items.length;
	const totalItemsToShow = currentItems?.length || 0;

	return (
		<section className="tj-team-section-3 section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-subtitle"></i>Meet Our Team
							</span>
							<h2 className="sec-title text-anim">
								The Minds Behind the Innovation
							</h2>
						</div>
					</div>
				</div>

				{/* Team List */}
				<div className="row row-gap-4">
					{currentItems && currentItems.length > 0 ? (
						currentItems.map((item, idx) => (
							<div
								key={idx}
								className="col-lg-3 col-sm-6 wow fadeInUp"
								data-wow-delay={makeWowDelay(idx % 4, 0.3, 2)}
							>
								<TeamCard item={item} />
							</div>
						))
					) : (
						<div className="col-12 text-center">No Data found.</div>
					)}
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

export default Team3;
