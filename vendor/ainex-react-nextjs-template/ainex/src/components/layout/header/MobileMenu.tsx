"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, Fragment } from "react";
import MobileNavbar from "./MobileNavbar";

interface MobileMenuProps {
	isMobileMenuOpen: boolean;
	handleMobileClose: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({
	isMobileMenuOpen,
	handleMobileClose,
}) => {
	return (
		<Fragment>
			<div
				className={`body-overlay ${isMobileMenuOpen ? "opened" : ""}`}
				onClick={handleMobileClose}
			></div>

			<div
				className={`hamburger-area d-lg-none ${
					isMobileMenuOpen ? "opened" : ""
				}`}
			>
				<div className="hamburger_bg"></div>
				<div
					className="hamburger_bg"
					style={{
						background:
							"radial-gradient(120% 120% at 0% 0%, #6f2cff 0%, #2a0c63 45%, #12072f 100%)",
					}}
				></div>
				<div className="hamburger_wrapper">
					<div className="hamburger_inner">
						<div className="hamburger_top d-flex align-items-center justify-content-between">
							<div className="hamburger_logo">
								<Link href="/" className="mobile_logo">
									<Image
										width={240}
										height={58}
										style={{ height: "auto" }}
										src="/Honlapholnapra_logo_small.webp"
										alt="Logo"
									/>
								</Link>
							</div>
							<div className="hamburger_close">
								<button
									className="hamburger_close_btn"
									onClick={handleMobileClose}
								>
									<svg
										width="18"
										height="18"
										viewBox="0 0 18 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M17 1L1 17"
											stroke="currentColor"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M1 1L17 17"
											stroke="currentColor"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							</div>
						</div>
						<MobileNavbar />
						<div className="hamburger-infos">
							<h5 className="hamburger-title">Contact Info</h5>
							<div className="contact-info">
								<div className="contact-item">
									<span className="subtitle">Phone</span>
									<Link className="contact-link" href="tel:+36301940601">
										+36 30 194 0601
									</Link>
								</div>
								<div className="contact-item">
									<span className="subtitle">Email</span>
									<Link className="contact-link" href="mailto:info@honlapholnapra.hu">
										info@honlapholnapra.hu
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default MobileMenu;
