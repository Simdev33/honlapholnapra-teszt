"use client";

import useActiveLink from "@/hooks/useActiveLink";
import getNavItems, { NavItemPropsType } from "@/libs/getNavItems";
import { scrollToHash } from "@/libs/scrollToHash";
import Link from "next/link";
import { MouseEvent } from "react";

const Navbar = () => {
	const makeActiveLink = useActiveLink();
	const navItems = getNavItems();
	const preparedNavs = navItems.map(item => makeActiveLink(item as NavItemPropsType));

	const handleNavClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
		if (!href.startsWith("#")) {
			return;
		}
		event.preventDefault();
		scrollToHash(href);
	};

	return (
		<div className="menu-area d-none d-lg-inline-flex align-items-center">
			<nav id="mobile-menu" className="mainmenu">
				<ul>
					{preparedNavs.map((item, idx) => (
						<li key={idx} className={item?.isActive ? "current-menu-ancestor" : ""}>
							<Link href={item?.path ?? "#"} onClick={handleNavClick(item?.path ?? "#")}>
								{item?.name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
