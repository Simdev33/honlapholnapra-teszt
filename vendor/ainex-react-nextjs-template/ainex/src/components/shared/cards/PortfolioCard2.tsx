"use client";
import { PortfolioType } from "@/libs/getPortfolio";
import Image from "next/image";
import Link from "next/link";
interface PropType {
	item: PortfolioType;
	idx: number;
	currentIdx: number;
	handleCurrentIdx: (idx: number) => void;
}
const PortfolioCard2 = ({
	item,
	idx = 0,
	currentIdx,
	handleCurrentIdx,
}: PropType) => {
	const {
		title2,
		img = "/images/project/project-1.webp",
		id,
		category = "Connect",
	} = item || {};
	const handleMouseEnter = () => {
		handleCurrentIdx(idx);
	};
	return (
		<div
			className={`project-item style-2 hover-item ${
				idx === currentIdx ? "active" : ""
			}`}
			onMouseEnter={handleMouseEnter}
		>
			<div className="project-content">
				<h4 className="title">
					<Link href={`/portfolios/${id}`}>{title2}</Link>
				</h4>
				<Link className="icon-btn" href={`/portfolios/${id}`}>
					<i className="tji-arrow-right-long"></i>
				</Link>
			</div>
			<div className="project-img">
				<Image width={615} height={478} src={img} alt="" />
			</div>
			<span className="categories">
				<Link href={`/portfolios/${id}`}>{category}</Link>
			</span>
		</div>
	);
};

export default PortfolioCard2;
