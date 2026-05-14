"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface LogoProps {
	headerType: number;
	isStickyHeader: boolean;
}

const Logo: FC<LogoProps> = ({ headerType, isStickyHeader }) => {
	const logoSrc = "/Honlapholnapra_logo_small.webp";

	return (
		<div className="site_logo">
			<Link className="logo hh-header-brand" href="/">
				<Image
					src={logoSrc}
					alt="Logo"
					width={140}
					height={34}
					className="hh-header-brand-logo"
					style={{ height: "auto" }}
				/>
				<span className="hh-header-brand-text">honlapholnapra.hu</span>
			</Link>
		</div>
	);
};

export default Logo;
