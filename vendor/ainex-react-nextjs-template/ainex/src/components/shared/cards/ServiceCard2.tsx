import { ServiceType } from "@/libs/getALlServices";
import modifyNumber from "@/libs/modifyNumber";
import Image from "next/image";
import Link from "next/link";
interface PropType {
	item: ServiceType;
	idx: number;
}
const ServiceCard2 = ({ item, idx = 0 }: PropType) => {
	const {
		title,
		desc,
		id = 0,
		img = "/images/service/service-1.webp",
		iconName,
	} = item || {};
	return (
		<div className="service-item style-2">
			<div className="service-inner">
				<div className="service-content">
					<h4 className="title">
						<Link href={`/services/${id}`}>{title}</Link>
					</h4>
					<p className="desc">{desc}</p>
				</div>
				<div className="service-img">
					<Image width={490} height={360} src={img} alt="Image" />
					<Link className="text-btn" href={`/services/${id}`}>
						<span className="btn-text">
							<span>Learn More</span>
						</span>
						<span className="btn-icon">
							<span>
								<i className="tji-arrow-right"></i>
							</span>
						</span>
					</Link>
				</div>
			</div>
			<span className="item-count">{modifyNumber(id)}.</span>
		</div>
	);
};

export default ServiceCard2;
