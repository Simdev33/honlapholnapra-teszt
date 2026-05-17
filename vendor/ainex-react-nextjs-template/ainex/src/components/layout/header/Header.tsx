"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import useIsSticky from "@/hooks/useIsSticky";
import { FC, Fragment, useState } from "react";
import HeaderSearchForm from "./HeaderSearchForm";
import HeaderTop from "./HeaderTop";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";
import OffcanvasPopup from "./OffcanvasPopup";

interface HeaderProps {
	headerType?: number;
	headerTopType?: number;
	isHeaderTop?: boolean;
	isStickyHeader?: boolean;
	isNotAbsolute?: boolean;
	isCasvas?: boolean;
}

const Header: FC<HeaderProps> = ({
	headerType = 1,
	headerTopType = 0,
	isHeaderTop = false,
	isStickyHeader = false,
	isNotAbsolute = false,
	isCasvas = false,
}) => {
	// --------------------
	// State
	// --------------------
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
	const isSticky = useIsSticky(isStickyHeader);

	// --------------------
	// Handlers
	// --------------------
	const openSearch = () => setIsSearchOpen(true);
	const closeSearch = () => setIsSearchOpen(false);

	const openMobileMenu = () => setIsMobileMenuOpen(true);
	const closeMobileMenu = () => setIsMobileMenuOpen(false);

	const openOffcanvas = () => setIsOffcanvasOpen(true);
	const closeOffcanvas = () => setIsOffcanvasOpen(false);

	// --------------------
	// Header class
	// --------------------
	const headerClasses = [
		"header-area",
		headerType === 3 ? "header-3" : headerType === 2 ? "header-2" : "header-1",
		isStickyHeader
			? `header-duplicate header-sticky ${isSticky ? "sticky" : ""}`
			: !isNotAbsolute
			? "header-absolute"
			: "",
	]
		.filter(Boolean)
		.join(" ");
	return (
		<Fragment>
			<header className={headerClasses}>
				{isHeaderTop && <HeaderTop type={headerTopType} />}
				<div className="header-bottom">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12">
								<div className="header-wrapper">
									{/* Logo */}
									<Logo
										headerType={headerType}
										isStickyHeader={isStickyHeader}
									/>

									{/* Navbar */}
									<Navbar />

									{/* Header right */}
									<div className="header-right-item d-none d-lg-inline-flex">
										{headerType === 3 && (
											<div
												className="menu_bar menu_offcanvas d-lg-inline-flex d-none"
												onClick={openOffcanvas}
											>
												<span></span>
												<span></span>
											</div>
										)}

										{headerType !== 3 && (
											<div className="header-button">
												<ButtonPrimary text="Ajánlatkérés" url="#kapcsolat" />
											</div>
										)}
									</div>

									{/* Mobile menu bar */}
									<div
										className="menu_bar mobile_menu_bar d-lg-none"
										onClick={openMobileMenu}
									>
										<span></span>
										<span></span>
										<span></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			{/* Mobile Menu */}
			<MobileMenu
				isMobileMenuOpen={isMobileMenuOpen}
				handleMobileClose={closeMobileMenu}
			/>

			{/* Offcanvas */}
			{isCasvas && (
				<OffcanvasPopup
					handleOffcanvasClose={closeOffcanvas}
					isOffcanvasOpen={isOffcanvasOpen}
				/>
			)}

			{/* Search Overlay */}
			<HeaderSearchForm
				handleSearchClose={closeSearch}
				isSearchOpen={isSearchOpen}
			/>
		</Fragment>
	);
};

export default Header;
