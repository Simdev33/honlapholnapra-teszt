"use client";
export interface FaqItemType {
	title: string;
	desc: string;
	initActive: boolean;
}
interface FaqItemPropType {
	item: FaqItemType;
	idx: number;
}
const FaqItem = ({ item, idx = 0 }: FaqItemPropType) => {
	const { title, desc, initActive } = item;

	return (
		<div className="accordion-item wow fadeInUp" data-wow-delay=".3s">
			<button
				className={`faq-title ${initActive ? "" : "collapsed"}`}
				type="button"
				data-bs-toggle="collapse"
				data-bs-target={`#faq-${idx + 1}`}
				aria-expanded={initActive ? true : false}
			>
				{title}
			</button>
			<div
				id={`faq-${idx + 1}`}
				className={`collapse ${initActive ? "show" : ""}`}
				data-bs-parent="#faqOne"
			>
				<div className="accordion-body faq-text">
					<p>{desc}</p>
				</div>
			</div>
		</div>
	);
};

export default FaqItem;
