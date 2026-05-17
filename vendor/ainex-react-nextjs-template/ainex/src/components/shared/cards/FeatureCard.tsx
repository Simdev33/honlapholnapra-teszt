import { FeatureType } from "@/libs/getAllFeatures";
import makeWowDelay from "@/libs/makeWowDelay";

interface PropType {
	item: FeatureType;
	idx: number;
}
const FeatureCard = ({ item, idx }: PropType) => {
	const { icon, title, desc } = item || {};
	return (
		<div
			className="choose-box wow fadeInUp"
			data-wow-delay={makeWowDelay(idx, 0.2, 2)}
		>
			<div className="choose-inner">
				<div className="choose-icon">
					<i className={icon}></i>
				</div>
				<div className="choose-content">
					<h4 className="title">{title}</h4>
					<p className="desc">{desc}</p>
				</div>
			</div>
			<span className="count-icon"></span>
		</div>
	);
};

export default FeatureCard;
