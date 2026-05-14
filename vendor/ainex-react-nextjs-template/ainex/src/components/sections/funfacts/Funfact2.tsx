import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import Image from "next/image";

const Funfact2 = () => {
	const items = [
		{
			id: 1,
			iconName: "tji-hand",
			title: "Engaged Customers",
			desc: "Our customers are not just clients—they are active participants in our journey.",
			currentValue: 10,
			symbol: "K+",
		},
		{
			id: 2,
			iconName: "tji-trophy",
			title: "Customer Success Stories",
			desc: "Our customers are not just clients—they are active participants in our journey.",
			currentValue: 800,
			symbol: "+",
		},
		{
			id: 3,
			iconName: "tji-team",
			title: "Team of Professionals",
			desc: "Our customers are not just clients—they are active participants in our journey.",
			currentValue: 250,
			symbol: "+",
		},
	];
	return (
		<section className="tj-countup-section-2 section-gap section-gap-x">
			<div className="bg-image">
				<Image
					width={1800}
					height={1001}
					src="/images/funfact/bg-funfact.webp"
					alt=""
				/>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-2 d-flex flex-wrap justify-content-between align-items-start">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
								Passionate Innovators
							</span>
							<h2 className="sec-title text-anim">
								The Intelligent Choice for Business
							</h2>
							<p className="desc wow fadeInUp" data-wow-delay="0.5s">
								Revolutionize the way you work the our solutions designed to
								meet the unique.
							</p>
						</div>
					</div>
				</div>
				<div className="row row-gap-5">
					{items?.map(
						({ iconName, title, desc, currentValue, symbol }, idx) => (
							<div className="col-md-4" key={idx}>
								<div
									className={`countup-item style-2${idx === 2 ? " p-0" : ""}`}
								>
									<span className="count-icon">
										<i className={iconName}></i>
									</span>
									<FunfactSingle currentValue={currentValue} symbol={symbol} />
									<span className="count-text">{title}</span>
									{idx < 2 ? (
										<div
											className={`count-separator${idx === 1 ? " sep-2" : ""}`}
										></div>
									) : (
										""
									)}
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</section>
	);
};

export default Funfact2;
