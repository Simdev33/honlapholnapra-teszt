import Link from "next/link";

const FooterQuickLinkNavs = () => {
	return (
		<ul>
			<li>
				<Link href="/">Kezdőlap</Link>
			</li>
			<li>
				<Link href="#about">Rólunk</Link>
			</li>
			<li>
				<Link href="#services">Szolgáltatások</Link>
			</li>
			<li>
				<Link href="#process">Folyamat</Link>
			</li>
			<li>
				<Link href="#pricing">Árak</Link>
			</li>
			<li>
				<Link href="#kapcsolat">Kapcsolat</Link>
			</li>
		</ul>
	);
};

export default FooterQuickLinkNavs;
