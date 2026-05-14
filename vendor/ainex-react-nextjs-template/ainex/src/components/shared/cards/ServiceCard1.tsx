import { ServiceType } from "@/libs/getALlServices";
import modifyNumber from "@/libs/modifyNumber";
import Image from "next/image";
import Link from "next/link";
interface PropType {
	item: ServiceType;
	idx: number;
}
const ServiceCard1 = ({ item, idx = 0 }: PropType) => {
	const { title, desc, img = "/24h.webp" } = item || {};
	return (
		<div className="service-item-wrap">
			<div className="service-item style-1">
				<div className="service-img">
					<div className="hh-service-thumb">
						<Image
							src={img}
							alt={title ?? "Szolgaltatas kep"}
							fill
							className="hh-service-thumb-image"
							sizes="(max-width: 991px) 100vw, 490px"
						/>
					</div>
					<span className="item-count">{modifyNumber(idx + 1)}.</span>
				</div>
				<div className="service-content">
					<h3 className="title">
						<Link href="#kapcsolat">{title}</Link>
					</h3>
					<p className="desc">{desc}</p>
					<ul className="list-style-2">
						<li>Gyors fejlesztes</li>
						<li>Modern technologia</li>
						<li>Merheto eredmeny</li>
					</ul>
				</div>
				<Link className="service-link" href="#kapcsolat">
					<span>
						<i className="tji-arrow-right-long"></i>
					</span>
				</Link>
			</div>
		</div>
	);
};

export default ServiceCard1;
