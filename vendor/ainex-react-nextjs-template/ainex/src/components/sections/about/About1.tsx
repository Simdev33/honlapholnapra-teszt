import Link from "next/link";
import Image from "next/image";

const About1 = () => {
	return (
		<section id="about" className="tj-about-section">
			<div className="container">
				<div className="row">
					<div className="col-xl-4 col-lg-5 order-lg-1 order-2">
						<div
							className="about-img wow fadeInLeft"
							data-wow-delay=".3s"
							data-wow-duration="0.8s"
						>
							<div className="hh-about-visual">
								<div className="hh-about-visual-grid"></div>
								<div className="hh-about-logo-mark">
									<Image
										src="/Honlapholnapra_logo_small.webp"
										alt="Honlapholnapra logo"
										width={180}
										height={180}
									/>
								</div>
								<div className="hh-about-visual-content">
									<span>Honlap Holnapra</span>
									<h4>Gyors fejlesztés, valódi eredmények.</h4>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-8 col-lg-7 order-lg-2 order-1">
						<div className="about-content-area">
							<div className="sec-heading">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-subtitle"></i>Rólunk
								</span>
								<h2 className="sec-title title-highlight">
									A csapat, akinek elege lett a hónapokig tartó hitegetésből.{" "}
									Modern Next.js technológiával gyors, stabil és bevételtermelő
									weboldalakat építünk.
								</h2>
							</div>
							<div
								className="about-bottom-area wow fadeInUp"
								data-wow-delay=".4s"
								data-wow-duration="0.8s"
							>
								<ul className="list-style-1">
									<li>Sebesség, bürokrácia nélkül</li>
									<li>Mérnöki precizitás</li>
									<li>Villámgyors betöltés</li>
									<li>SEO-barát technikai alapok</li>
									<li>Google Ads támogatás</li>
								</ul>
								<div className="btn-hover-wrapper">
									<Link className="about-btn btn-hover-inner hh-about-btn" href="#kapcsolat">
										<span className="text-wrap">
											<span className="btn-text hh-about-btn-text">
												<span>
													Ismerj meg
													<br />
													minket
												</span>
											</span>
											<span className="btn-icon">
												<span>
													<i className="tji-arrow-right"></i>
												</span>
											</span>
										</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About1;
