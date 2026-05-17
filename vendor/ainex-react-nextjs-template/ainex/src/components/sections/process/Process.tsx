import ProcessCard from "@/components/shared/cards/ProcessCard";
import Image from "next/image";

const Process = () => {
	const items = [
		{
			id: 1,
			iconName: "tji-discovery",
			title: "Konzultáció",
			duration: "1-2 óra",
			desc: "Megbeszéljük az igényeidet, céljaidat és a weboldal funkcióit.",
		},
		{
			id: 2,
			iconName: "tji-development",
			title: "Tervezés és fejlesztés",
			duration: "1-2 nap",
			desc: "Elkészítjük a wireframe-et és modern technológiákkal felépítjük az oldalt.",
		},
		{
			id: 3,
			iconName: "tji-technology",
			title: "Fejlesztés",
			duration: "2-5 nap",
			desc: "Felépítjük az oldalt, beállítjuk a funkciókat és elkészítjük a tartalmi szerkezetet.",
		},
		{
			id: 4,
			iconName: "tji-rocket",
			title: "Indítás",
			duration: "1 nap",
			desc: "Teszteljük, optimalizáljuk és élesítjük a weboldalt.",
		},
		{
			id: 5,
			iconName: "tji-team",
			title: "Támogatás",
			duration: "Folyamatos",
			desc: "Karbantartás, frissítések és technikai támogatás.",
		},
	];
	return (
		<div
			id="process"
			className="tj-working-process section-gap section-gap-x fix sidebar-sticky-container"
		>
			<div className="container">
				<div className="row align-items-stretch">
					<div className="col-lg-6 order-lg-1 order-2">
						<div className="hh-process-sticky-wrap sidebar-sticky">
							<div className="working-img wow fadeInLeft" data-wow-delay=".3s">
								<div className="hh-process-visual">
									<Image
										src="/honlapholnapra-process-visual.png"
										alt="Átlátható weboldal készítési folyamat"
										fill
										className="hh-process-visual-image"
										sizes="(max-width: 991px) 100vw, 560px"
									/>
									<div className="hh-process-visual-orb"></div>
									<div className="hh-process-visual-line"></div>
									<div className="hh-process-visual-line hh-process-visual-line-2"></div>
									<div className="hh-process-visual-copy">
										<span>Workflow</span>
										<h4>Átlátható folyamat, gyors szállítással.</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 order-lg-2 order-1">
						<div className="sec-heading">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
								<i className="tji-subtitle"></i>Folyamat
							</span>
							<h2 className="sec-title text-anim">
								Így dolgozunk, lépésről lépésre
							</h2>
						</div>
						<div className="working-process-area">
							{items?.length
								? items?.map((item, idx) => (
										<ProcessCard key={idx} item={item} idx={idx} />
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Process;
