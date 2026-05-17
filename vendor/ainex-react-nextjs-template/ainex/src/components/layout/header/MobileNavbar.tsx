"use client";

import getNavItems, { NavItemPropsType } from "@/libs/getNavItems";
import { scrollToHash } from "@/libs/scrollToHash";
import Link from "next/link";
import { MouseEvent } from "react";

interface MobileNavbarProps {
	onNavigate?: () => void;
}

const MobileNavbar = ({ onNavigate }: MobileNavbarProps) => {
	const navItems = getNavItems();
	const plainNavs = navItems as NavItemPropsType[];

	const handleNavClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
		if (href.startsWith("#")) {
			event.preventDefault();
			scrollToHash(href);
		}
		onNavigate?.();
	};

	return (
		<div className="hamburger_menu">
			<div className="mobile_menu mean-container">
				<div className="mean-bar">
					<Link
						href="#nav"
						className="meanmenu-reveal"
						style={{ right: 0, left: "auto" }}
					>
						<span>
							<span>
								<span></span>
							</span>
						</span>
					</Link>
					<nav className="mean-nav">
						<ul>
							{plainNavs.map((item, idx) => (
								<li key={idx} className={idx === plainNavs.length - 1 ? "mean-last" : ""}>
									<Link href={item?.path ?? "#"} onClick={handleNavClick(item?.path ?? "#")}>
										{item?.name}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
