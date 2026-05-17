"use client";

import { scrollToHash } from "@/libs/scrollToHash";
import Link from "next/link";
import { MouseEvent } from "react";

const FooterQuickLinkNavs = () => {
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
				<Link href="/">Kezdőlap</Link>
			</li>
			<li>
				<Link href="#about" onClick={handleClick("#about")}>Rólunk</Link>
			</li>
			<li>
				<Link href="#services" onClick={handleClick("#services")}>Szolgáltatások</Link>
			</li>
			<li>
				<Link href="#process" onClick={handleClick("#process")}>Folyamat</Link>
			</li>
			<li>
				<Link href="#pricing" onClick={handleClick("#pricing")}>Árak</Link>
			</li>
			<li>
				<Link href="#kapcsolat" onClick={handleClick("#kapcsolat")}>Kapcsolat</Link>
			</li>
		</ul>
	);
};

export default FooterQuickLinkNavs;
