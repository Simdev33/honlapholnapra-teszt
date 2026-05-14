import Link from "next/link";

const Hero = () => {
	return (
		<section className="tj-banner-section hh-hero-section">
			<div className="hh-hero-shell">
				<div className="hh-hero-copy wow fadeInUp" data-wow-delay=".2s">
					<span className="hh-hero-eyebrow">
						<i className="tji-subtitle"></i>Weboldal akár 24 óra alatt
					</span>
					<h1 className="hh-hero-title">
						Szó szerint értjük:
						<br />
						<span>Honlap. Holnapra.</span>
					</h1>
					<p className="hh-hero-lead">
						Letisztult, villámgyors és konverzióra optimalizált Next.js weboldalt építünk,
						projektmérettől függően akár ténylegesen 24 óra alatt.
					</p>
					<div className="hh-hero-actions">
						<Link href="#kapcsolat" className="tj-primary-btn">
							<div className="btn-inner">
								<span className="btn-icon h-icon">
									<i className="tji-arrow-right"></i>
								</span>
								<span className="btn-text">Kérek ajánlatot</span>
								<span className="btn-icon">
									<i className="tji-arrow-right"></i>
								</span>
							</div>
						</Link>
						<Link href="#services" className="hh-hero-secondary">
							Hogyan működik?
						</Link>
					</div>
					<div className="hh-hero-stats">
						<div>
							<strong>100+</strong>
							<span>Elkészült projekt</span>
						</div>
						<div>
							<strong>24h</strong>
							<span>Leggyorsabb indulás</span>
						</div>
						<div>
							<strong>99%</strong>
							<span>Ügyfél-elégedettség</span>
						</div>
					</div>
				</div>

				<div className="hh-hero-visual wow fadeInUp" data-wow-delay=".35s">
					<img src="/honlapholnapra-process-visual.png" alt="Modern weboldal készítés" />
					<div className="hh-hero-visual-badge">Next.js + SEO + Ads</div>
					<div className="hh-hero-visual-panel">
						<span>Gyors indulás</span>
						<strong>Prémium weboldal, felesleges körök nélkül.</strong>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
