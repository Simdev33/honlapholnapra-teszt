"use client";

import useActiveLink from "@/hooks/useActiveLink";
import getNavItems, { NavItemPropsType } from "@/libs/getNavItems";
import Link from "next/link";

const Navbar = () => {
	const makeActiveLink = useActiveLink();
	const navItems = getNavItems();
	const preparedNavs = navItems.map(item => makeActiveLink(item as NavItemPropsType));
	return (
		<div className="menu-area d-none d-lg-inline-flex align-items-center">
			<nav id="mobile-menu" className="mainmenu">
				<ul>
					{preparedNavs.map((item, idx) => (
						<li key={idx} className={item?.isActive ? "current-menu-ancestor" : ""}>
							<Link href={item?.path ?? "#"}>{item?.name}</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
