"use client";

import { scrollToHash } from "@/libs/scrollToHash";
import Link from "next/link";
import { MouseEvent } from "react";

const FooterServiceNavs = () => {
	const handleClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
		if (!href.includes("#")) {
			return;
		}
		event.preventDefault();
		scrollToHash(href);
	};

	return (
		<ul>
			<li>
				<Link href="#services" onClick={handleClick("#services")}>24 órás Expressz megoldás</Link>
			</li>
			<li>
				<Link href="#services" onClick={handleClick("#services")}>Komplex és egyedi rendszerek</Link>
			</li>
			<li>
				<Link href="#services" onClick={handleClick("#services")}>Villámgyors betöltés</Link>
			</li>
			<li>
				<Link href="#services" onClick={handleClick("#services")}>SEO-ra született kód</Link>
			</li>
			<li>
				<Link href="#pricing" onClick={handleClick("#pricing")}>Professzionális csomag</Link>
			</li>
			<li>
				<Link href="#kapcsolat" onClick={handleClick("#kapcsolat")}>Google Ads támogatás</Link>
			</li>
		</ul>
	);
};

export default FooterServiceNavs;
