"use client";
import getPortfolio from "@/libs/getPortfolio";
import { useMemo, useState } from "react";
import PortfolioCard2 from "../cards/PortfolioCard2";

const PortfolioItems = () => {
	const items = useMemo(() => getPortfolio()?.slice(0, 4) || [], []);
	const [currentIdx, setCurrentIdx] = useState(0);
	// handle current index
	const handleCurrentIdx = (idx: number) => {
		setCurrentIdx(idx);
	};
	return (
		<div className="project-wrapper-2 wow fadeInUp" data-wow-delay=".4s">
			{items?.length
				? items?.map((item, idx) => (
						<PortfolioCard2
							key={idx}
							item={item}
							idx={idx}
							currentIdx={currentIdx}
							handleCurrentIdx={handleCurrentIdx}
						/>
				  ))
				: ""}
		</div>
	);
};

export default PortfolioItems;
