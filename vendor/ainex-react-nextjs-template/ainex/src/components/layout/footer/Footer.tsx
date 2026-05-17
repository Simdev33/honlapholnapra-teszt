"use client";

import { scrollToHash } from "@/libs/scrollToHash";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent } from "react";
import FooterQuickLinkNavs from "./FooterQuickLinkNavs";
import FooterServiceNavs from "./FooterServiceNavs";

const Footer = () => {
	const handleFooterMenuClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
		if (!href.includes("#")) {
			return;
		}
		event.preventDefault();
		scrollToHash(href);
	};

	return (
		<footer className="tj-footer-section footer-1 section-gap-x">
			<div className="footer-top-shape"></div>
			<div className="footer-main-area">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-xl-3 col-md-6">
							<div className="footer-widget footer-col-1">
								<div className="footer-logo">
									<Link href="/">
										<Image
											width={240}
											height={58}
											style={{ height: "auto" }}
											src="/Honlapholnapra_logo_small.webp"
											alt="Logo"
										/>
									</Link>
								</div>
								<div className="footer-text">
									<p>
										Professzionális weboldal készítés modern technológiákkal,
										gyorsan és megbízhatóan.
									</p>
								</div>
							</div>
						</div>
						<div className="col-xxl-2 col-xl-3 col-md-6">
							<div className="footer-widget widget-nav-menu footer-col-2">
								<h5 className="title">Gyorslinkek</h5>
								<FooterQuickLinkNavs />
							</div>
						</div>
						<div className="col-xl-3 col-md-6">
							<div className="footer-widget widget-nav-menu footer-col-3">
								<h5 className="title">Szolgáltatások</h5>
								<FooterServiceNavs />
							</div>
						</div>
						<div className="col-xxl-4 col-xl-3 col-md-6">
							<div className="footer-widget widget-subscribe footer-col-4">
								<h3 className="title">Kapcsolatfelvétel</h3>
								<div className="subscribe-form">
									<form action="#">
										<input
											type="email"
											name="email"
											placeholder="Email címed"
										/>
										<button type="submit">
											<i className="tji-plane"></i>
										</button>
										<label htmlFor="agree">
											<input id="agree" type="checkbox" />
											Hozzájárulok az adatkezeléshez.
										</label>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="tj-copyright-area">
				<div className="copyright-wrap">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="copyright-content-area">
									<div className="copyright-text">
										<p>
											&copy; {new Date().getFullYear()} honlapholnapra.hu.
											Minden jog fenntartva.
										</p>
									</div>
									<div className="copyright-menu">
										<ul>
											<li>
												<Link href="#kapcsolat" onClick={handleFooterMenuClick("#kapcsolat")}>Adatkezelés</Link>
											</li>
											<li>
												<Link href="#kapcsolat" onClick={handleFooterMenuClick("#kapcsolat")}>Kapcsolat</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
