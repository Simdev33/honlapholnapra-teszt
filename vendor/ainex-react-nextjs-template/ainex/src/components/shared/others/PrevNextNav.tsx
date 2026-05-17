"use client";

import Link from "next/link";
export interface OptionType {
	currentId: number;
	isPrevItem: boolean;
	isNextItem: boolean;
	prevId: number;
	nextId: number;
}
interface PropType {
	option: OptionType;
	itemsUrl?: string;
	type?: number;
}
const PrevNextNav = ({ option, itemsUrl = "/services", type }: PropType) => {
	const { isPrevItem, prevId, isNextItem, nextId } = option || {};
	return (
		<div className={`tj-post__navigation${type === 2 ? "" : " mb-0"}`}>
			{/* <!-- previous post --> */}
			<div
				className="tj-nav__post previous"
				style={{ visibility: isPrevItem ? "visible" : "hidden" }}
			>
				<div className="tj-nav-post__nav prev_post">
					<Link href={isPrevItem ? `${itemsUrl}/${prevId}` : "#"}>
						<span>
							<i className="tji-arrow-left"></i>
						</span>
						Previous
					</Link>
				</div>
			</div>
			<div className="tj-nav-post__grid">
				<Link href={itemsUrl}>
					<i className="tji-window"></i>
				</Link>
			</div>
			{/* <!-- next post --> */}
			<div
				className="tj-nav__post next"
				style={{ visibility: isNextItem ? "visible" : "hidden" }}
			>
				<div className="tj-nav-post__nav next_post">
					<Link href={isNextItem ? `${itemsUrl}/${nextId}` : "#"}>
						Next
						<span>
							<i className="tji-arrow-right"></i>
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PrevNextNav;
