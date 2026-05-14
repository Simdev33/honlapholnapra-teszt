// src/libs/getNavItems.ts
import navItems from "@/data/nav-items.json";
export interface NavItemSubItem {
	id: number;
	name: string;
	path: string;
	badge?: string | null;
	isComming?: boolean;
	icon?: string;
	isActive?: boolean;
}

export interface NavItemSubMenu {
	id: number;
	name: string;
	path: string;
	items?: NavItemSubItem[];
	isActive?: boolean;
}

export interface NavItemPropsType {
	id: number;
	name: string;
	path: string;
	submenu?: (NavItemSubItem | NavItemSubMenu)[];
	isActive?: boolean;
}
// Return typed array
const getNavItems = () => {
	return navItems?.length ? navItems : [];
};

export default getNavItems;
