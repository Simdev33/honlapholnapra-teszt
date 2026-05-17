"use client";

import {
	NavItemPropsType,
	NavItemSubItem,
	NavItemSubMenu,
} from "@/libs/getNavItems";
import { usePathname } from "next/navigation";

// Force certain paths to be inactive
const makeForcelyInactive = (
	pathname: string,
	currentPathname: string
): boolean => {
	const inactivePaths = [
		"/services",
		"/services/1",
		"/portfolios",
		"/portfolios/1",
		"/blogs",
		"/blogs/1",
		"/blog-grid",
		"/blog-sidebar",
		"/contact",
	];
	const isInactive = inactivePaths.includes(pathname);
	return isInactive ? false : pathname === currentPathname;
};

// Check if a nav item is active
const checkActive = (
	item: NavItemPropsType | NavItemSubMenu | NavItemSubItem,
	currentPathname: string,
	isRestricted: boolean = false
): boolean => {
	// Check main path
	if ("path" in item && item.path) {
		if (
			isRestricted
				? makeForcelyInactive(item.path, currentPathname)
				: item.path === currentPathname
		) {
			return true;
		}
	}

	// Check submenu recursively
	if ("submenu" in item && item.submenu?.length) {
		return item.submenu.some(sub =>
			checkActive(sub, currentPathname, isRestricted)
		);
	}

	// Check items recursively
	if ("items" in item && item.items?.length) {
		return item.items.some(sub =>
			checkActive(sub, currentPathname, isRestricted)
		);
	}

	return false;
};

export default function useActiveLink() {
	const currentPathname = usePathname();
	const makeActiveLink = <T extends NavItemPropsType | NavItemSubMenu>(
		modifiableObject: T
	): T & {
		isActive: boolean;
		submenu?: (NavItemSubItem | NavItemSubMenu)[];
	} => {
		const isPages = modifiableObject.name === "Pages";
		// Map submenu safely
		const newSubmenu =
			"submenu" in modifiableObject && modifiableObject.submenu
				? modifiableObject.submenu.map(submenuItem => {
						const newItems =
							"items" in submenuItem && submenuItem.items
								? submenuItem.items.map(item => ({
										...item,
										isActive: checkActive(item, currentPathname, isPages),
								  }))
								: undefined;

						return {
							...submenuItem,
							isActive: checkActive(submenuItem, currentPathname, isPages),
							items: newItems,
						};
				  })
				: undefined;

		return {
			...modifiableObject,
			isActive: checkActive(modifiableObject, currentPathname, isPages),
			submenu: newSubmenu,
		};
	};

	return makeActiveLink;
}
