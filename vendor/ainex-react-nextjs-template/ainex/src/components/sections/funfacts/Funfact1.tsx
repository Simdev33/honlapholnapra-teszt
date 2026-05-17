import FunfactSingle from "@/components/shared/funfact/FunfactSingle";

const Funfact1 = () => {
	const items = [
		{
			id: 1,
			iconName: "tji-hand",
			title: "Elkészült projekt",
			desc: "Gyorsan szállított, élesített és üzletileg működő weboldalak.",
			currentValue: 100,
			symbol: "+",
		},
		{
			id: 2,
			iconName: "tji-trophy",
			title: "Leggyorsabb átfutás",
			desc: "A projektmérettől függően akár ténylegesen 24 órás indulás.",
			currentValue: 24,
			symbol: "h",
		},
		{
			id: 3,
			iconName: "tji-team",
			title: "Ügyfél-elégedettség",
			desc: "Nálunk a végeredmény nem csak szép, hanem konverzióra is optimalizált.",
			currentValue: 99,
			symbol: "%",
		},
	];
	return (
		<section className="tj-countup-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
								<i className="tji-subtitle"></i>Miért minket válassz?
							</span>
							<h2 className="sec-title text-anim">
								Gyorsaság, minőség, mérhető eredmény
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					{items?.map(
						({ iconName, title, desc, currentValue, symbol }, idx) => (
							<div className="col-lg-4" key={idx}>
								<div className="countup-item-wrap">
									<div className="countup-item style-1">
										<FunfactSingle
											currentValue={currentValue}
											symbol={symbol}
										/>
										<span className="count-text">{title}</span>
										<p className="desc">{desc}</p>
										<span className="count-icon">
											<i className={iconName}></i>
										</span>
									</div>
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</section>
	);
};

export default Funfact1;
