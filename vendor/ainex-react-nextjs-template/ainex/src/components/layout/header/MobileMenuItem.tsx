"use client";

import Link from "next/link";
import { FC, ReactNode, useState } from "react";

interface MobileMenuItemProps {
	children?: ReactNode;
	text: string;
	url?: string;
	submenuClass?: string;
}

const MobileMenuItem: FC<MobileMenuItemProps> = ({
	children,
	text,
	url,
	submenuClass,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault(); // prevent page jump
		setIsOpen(prev => !prev);
	};

	return (
		<li className={`has-dropdown ${isOpen ? "dropdown-opened" : ""}`}>
			<Link href={url ?? "#"}>{text}</Link>

			<ul
				className={`sub-menu ${submenuClass ?? ""}`}
				style={{ display: !isOpen ? "none" : "" }}
			>
				{children}
			</ul>

			<Link
				className={`mean-expand ${isOpen ? "mean-clicked" : ""}`}
				href="#"
				style={{ fontSize: "18px" }}
				onClick={handleClick}
			>
				<i className="tji-arrow-menu"></i>
			</Link>
		</li>
	);
};

export default MobileMenuItem;
