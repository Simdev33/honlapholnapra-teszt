import ProcessCard2 from "@/components/shared/cards/ProcessCard2";

const Process2 = () => {
	const items = [
		{
			id: 1,
			iconName: "tji-discovery",
			title: "Discovery & Strategy",
			desc: "Understanding client needs, defining goals, and designing tailored our AI solutions. Building, training deploying into existing.",
		},
		{
			id: 2,
			iconName: "tji-development",
			title: "Development & Integration",
			desc: "Understanding client needs, defining goals, and designing tailored our AI solutions. Building, training deploying into existing.",
		},
		{
			id: 3,
			iconName: "tji-support",
			title: "Optimization & Support",
			desc: "Understanding client needs, defining goals, and designing tailored our AI solutions. Building, training deploying into existing.",
		},
	];
	return (
		<div className="tj-working-process-2 section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered style-3">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
								<i className="tji-subtitle-2"></i>How Its Work
							</span>
							<h2 className="sec-title text-anim">
								Building Success, One Step at a Time
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					{items?.length
						? items?.map((item, idx) => (
								<div key={idx} className="col-lg-4">
									<ProcessCard2 item={item} idx={idx} />
								</div>
						  ))
						: ""}
				</div>
			</div>
		</div>
	);
};

export default Process2;
