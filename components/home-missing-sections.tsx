import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import {
	BarChart3,
	Clock3,
	Code2,
	Gauge,
	Globe2,
	LifeBuoy,
	MonitorSmartphone,
	Rocket,
	Search,
	ShieldCheck,
	Target,
	Zap,
	type LucideIcon,
} from "lucide-react";

type CardItem = {
	icon: LucideIcon;
	problem?: string;
	solutionTitle?: string;
	solution?: string;
	title?: string;
	desc?: string;
	kicker?: string;
};

const painPoints: CardItem[] = [
	{
		icon: Clock3,
		problem: 'A probléma: "Kifutok az időből, azonnal kell egy oldal a kampányomhoz!"',
		solutionTitle: "A mi megoldásunk: Reakcióidő bajnokok vagyunk.",
		solution:
			"Nincs időd heteket várni egy grafikusra és egy kódolóra. Nálunk az üzleted sebességével halad a fejlesztés. Honlap, holnapra.",
	},
	{
		icon: Gauge,
		problem: 'A probléma: "Lassú az oldalam, és a vevők elmenekülnek."',
		solutionTitle: "A mi megoldásunk: Villámgyors betöltés.",
		solution:
			"Ma már senki sem vár 3 másodpercnél többet egy weboldalra. A Next.js technológia garantálja az azonnali betöltést és az akadásmentes élményt.",
	},
	{
		icon: Search,
		problem: 'A probléma: "Nem találják meg a cégemet a Google-ben."',
		solutionTitle: "A mi megoldásunk: Keresőoptimalizálásra született kód.",
		solution:
			"Az általunk írt tiszta kód már az alapoktól kezdve Google-barát, így nem kell utólag százezreket költened technikai SEO-ra.",
	},
	{
		icon: LifeBuoy,
		problem: 'A probléma: "Azt sem tudom, hogyan kezdjek hozzá."',
		solutionTitle: "A mi megoldásunk: Teljes körű technikai kivitelezés.",
		solution:
			"Segítünk a domain névtől a céges e-mailen át az élesítésig, közérthetően elmagyarázva minden fontos döntést.",
	},
];

const technologies: CardItem[] = [
	{
		title: "Next.js",
		desc: "A legmodernebb React keretrendszer szerveroldali rendereléshez.",
		icon: Code2,
	},
	{
		title: "React",
		desc: "A Meta által fejlesztett komponens-alapú frontend könyvtár.",
		icon: MonitorSmartphone,
	},
	{
		title: "Node.js",
		desc: "Gyors és skálázható backend JavaScript futtatókörnyezet.",
		icon: Globe2,
	},
];

const techFeatures = [
	{ icon: MonitorSmartphone, title: "Reszponzív", desc: "Minden eszközön tökéletes" },
	{ icon: Search, title: "SEO optimalizált", desc: "Jobb Google helyezés" },
	{ icon: Zap, title: "Villámgyors", desc: "Optimalizált sebesség" },
	{ icon: ShieldCheck, title: "Biztonságos", desc: "Modern védelem" },
];

const adBenefits: CardItem[] = [
	{
		icon: Rocket,
		title: "Azonnali láthatóság",
		desc: "Míg a hagyományos SEO hónapokig tart, a célzott hirdetésekkel akár már a weboldalad átadásának másnapján érkezhetnek a potenciális vevők.",
	},
	{
		icon: Target,
		title: "Olcsóbb kattintások",
		desc: 'A Google algoritmusa imádja az általunk készített, gyors oldalakat. A jobb "Minőségi mutató" miatt kevesebb pénzből érhetsz el jobb helyezést.',
	},
	{
		icon: BarChart3,
		title: "Tökéletes mérés",
		desc: "Mivel mi írtuk az oldal kódját, a vásárlások és ajánlatkérések mérését tizedmilliméter pontosan állítjuk be.",
	},
];

const adOfferItems: CardItem[] = [
	{
		icon: Target,
		kicker: "Azonnali, forró érdeklődők",
		title: "Keresési kampányok",
		desc: 'Amikor valaki beírja a Google-be a te szolgáltatásodat, ő nem nézelődik. Ő vásárolni akar. Mi pont ekkor mutatjuk meg neki a weboldaladat.',
	},
	{
		icon: Rocket,
		kicker: "A te titkos fegyvered",
		title: "Olcsóbb kattintások",
		desc: 'A villámgyors Next.js oldal magasabb "Minőségi mutatóval" segítheti a hirdetéseidet, így kevesebb pénzből lehetsz előrébb.',
	},
	{
		icon: BarChart3,
		kicker: "Tűpontos mérés",
		title: "Vakfoltok nélkül",
		desc: "A konverziókövetést pontosan beállítjuk, így látni fogod, melyik hirdetés hozta a vásárlót vagy az ajánlatkérést.",
	},
];

export function PainPointsSection() {
	return (
		<section id="fajdalompontok" className="tj-service-section section-gap section-gap-x hh-pain-points-section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
								<i className="tji-subtitle"></i>Mire kínálunk megoldást?
							</span>
							<h2 className="sec-title text-anim">
								Fájdalompontok helyett eredmények
							</h2>
							<p className="desc wow fadeInUp" data-wow-delay="0.3s">
								Nem sablonválaszokat adunk, hanem konkrét üzleti problémákra adunk gyors és mérhető megoldást.
							</p>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					{painPoints.map((item, idx) => (
						<div className="col-xl-3 col-md-6" key={idx}>
							<div className="hh-info-card h-100">
								<div className="hh-info-card-icon">
									<item.icon size={30} strokeWidth={1.8} />
								</div>
								<div className="hh-info-card-content">
									<h5>{item.problem}</h5>
									<p className="desc">
										<strong>{item.solutionTitle}</strong>
										<span>{item.solution}</span>
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export function GoogleAdsSection() {
	return (
		<section id="google-ads" className="tj-service-section section-gap section-gap-x hh-google-ads-section">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-5">
						<div className="sec-heading">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
								<i className="tji-subtitle"></i>Google Ads szolgáltatás
							</span>
							<h2 className="sec-title text-anim">
								Honlap holnapra, vevők holnaputánra
							</h2>
							<p className="desc wow fadeInUp" data-wow-delay="0.3s">
								Kész a tökéletes weboldalad? Hozzunk rá azonnal fizető vevőket! Profi Google Ads kampányokkal azonnal a keresők élére repítjük a cégedet.
							</p>
						</div>
					</div>
					<div className="col-lg-7">
						<div className="row row-gap-4">
							{adBenefits.map((item, idx) => (
								<div className="col-md-4" key={idx}>
									<div className="hh-info-card h-100">
										<div className="hh-info-card-icon">
											<item.icon size={30} strokeWidth={1.8} />
										</div>
										<div className="hh-info-card-content">
											<h5>{item.title}</h5>
											<p className="desc">{item.desc}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export function TechnologySection() {
	return (
		<section id="technology" className="tj-countup-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
								<i className="tji-subtitle"></i>Technológia
							</span>
							<h2 className="sec-title text-anim">Modern tech stack</h2>
							<p className="desc wow fadeInUp" data-wow-delay="0.3s">
								A legújabb és legmegbízhatóbb technológiákat használjuk.
							</p>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					{technologies.map((item, idx) => (
						<div className="col-lg-4" key={idx}>
							<div className="hh-info-card hh-info-card-featured h-100">
								<div className="hh-info-card-icon">
									<item.icon size={32} strokeWidth={1.8} />
								</div>
								<div className="hh-info-card-content">
									<h3>{item.title}</h3>
									<p className="desc">{item.desc}</p>
									<span className="hh-card-tag">Használjuk</span>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="row row-gap-4 mt-4">
					{techFeatures.map((item, idx) => (
						<div className="col-xl-3 col-md-6" key={idx}>
							<div className="hh-info-card h-100">
								<div className="hh-info-card-icon">
									<item.icon size={30} strokeWidth={1.8} />
								</div>
								<div className="hh-info-card-content">
									<h5>{item.title}</h5>
									<p className="desc">{item.desc}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export function AdsOfferSection() {
	return (
		<section id="ads-offer" className="tj-service-section section-gap section-gap-x hh-ads-offer-section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
								<i className="tji-subtitle"></i>Digitális sportkocsi, indulásra készen
							</span>
							<h2 className="sec-title text-anim">
								Kész a tökéletes weboldal? Hozzunk rá azonnal fizető vevőket!
							</h2>
							<p className="desc wow fadeInUp" data-wow-delay="0.3s">
								Egy weboldal önmagában csak egy névjegykártya. A weboldal + Google Ads kombó viszont egy folyamatosan pörgő bevételtermelő gépezet.
							</p>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					{adOfferItems.map((item, idx) => (
						<div className="col-lg-4" key={idx}>
							<div className="hh-info-card h-100">
								<div className="hh-info-card-icon">
									<item.icon size={30} strokeWidth={1.8} />
								</div>
								<div className="hh-info-card-content">
									<span className="hh-card-tag">{item.kicker}</span>
									<h5>{item.title}</h5>
									<p className="desc">{item.desc}</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="row mt-5">
					<div className="col-12 text-center">
						<ButtonPrimary text="Kérek ajánlatot weboldalra + hirdetésre!" url="#kapcsolat" />
					</div>
				</div>
			</div>
		</section>
	);
}
