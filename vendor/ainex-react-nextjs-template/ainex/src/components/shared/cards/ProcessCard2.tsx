import makeWowDelay from "@/libs/makeWowDelay";
import modifyNumber from "@/libs/modifyNumber";
export interface ProcessType {
	id: number;
	iconName: string;
	title: string;
	desc: string;
}
interface PropType {
	item: ProcessType;
	idx: number;
}
const ProcessCard2 = ({ item, idx = 0 }: PropType) => {
	const { title, iconName = "tji-discovery", desc, id } = item || {};
	return (
		<div
			className="process-item-wrap style-2 wow fadeInUp"
			data-wow-delay={makeWowDelay(idx, 0.3, 2)}
		>
			<div className="process-item">
				<div className="process-icon">
					<span>
						<i className={iconName}></i>
					</span>
				</div>
				<div className="process-content">
					<h4 className="title">{title}</h4>
					<p className="desc">{desc}</p>
				</div>
				<div className="process-step">
					<span>Step {modifyNumber(idx + 1)}.</span>
				</div>
			</div>
		</div>
	);
};

export default ProcessCard2;
