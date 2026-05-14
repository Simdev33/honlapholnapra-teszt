"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, Fragment } from "react";

interface PropType {
	isOffcanvasOpen: boolean;
	handleOffcanvasClose: () => void;
}

const OffcanvasPopup: FC<PropType> = ({
	isOffcanvasOpen,
	handleOffcanvasClose,
}) => {
	return (
		<Fragment>
			<div
				className={`body-overlay ${isOffcanvasOpen ? "opened" : ""}`}
				onClick={handleOffcanvasClose}
			></div>

			<div
				className={`tj-offcanvas-area d-none d-lg-block ${
					isOffcanvasOpen ? "opened" : ""
				}`}
			>
				<div className="hamburger_bg"></div>
				<div
					className="hamburger_bg"
					style={{ backgroundImage: "url('/images/funfact/bg-funfact.webp')" }}
				></div>
				<div className="hamburger_wrapper">
					<div className="hamburger_inner">
						<div className="hamburger_top d-flex align-items-center justify-content-between">
							<div className="hamburger_logo">
								<Link href="/" className="mobile_logo">
									<Image
										width={636}
										height={154}
										style={{ height: "auto" }}
										src="/images/logos/logo.webp"
										alt="Logo"
									/>
								</Link>
							</div>
							<div className="hamburger_close">
								<button
									className="hamburger_close_btn"
									onClick={handleOffcanvasClose}
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
						<div className="offcanvas-text">
							<p>
								Developing personalize our customer journeys to increase
								satisfaction & loyalty of our expansion recognized by industry
								leaders.
							</p>
						</div>
						<div className="hamburger-search-area">
							<h5 className="hamburger-title">Search Now!</h5>
							<div className="hamburger_search">
								<form method="get" action="index.html">
									<button type="submit">
										<i className="tji-search"></i>
									</button>
									<input
										type="search"
										autoComplete="off"
										name="search"
										placeholder="Search here..."
									/>
								</form>
							</div>
						</div>
						<div className="hamburger-infos">
							<h5 className="hamburger-title">Contact Info</h5>
							<div className="contact-info">
								<div className="contact-item">
									<span className="subtitle">Phone</span>
									<Link className="contact-link" href="tel:+1(009)544-7818">
										+1 (009) 544-7818
									</Link>
								</div>
								<div className="contact-item">
									<span className="subtitle">Email</span>
									<Link className="contact-link" href="mailto:info@Ainex.com">
										info@ainex.com
									</Link>
								</div>
								<div className="contact-item">
									<span className="subtitle">Location</span>
									<span className="contact-link">
										993 Renner Burg, West Rond, MT 94251-030
									</span>
								</div>
							</div>
						</div>
					</div>

					<div className="hamburger-socials">
						<h5 className="hamburger-title">Follow Us</h5>
						<div className="social-links style-2">
							<ul>
								<li>
									<Link href="https://www.facebook.com/" target="_blank">
										<i className="tji-facebook"></i>
									</Link>
								</li>
								<li>
									<Link href="https://www.linkedin.com/" target="_blank">
										<i className="tji-linkedin"></i>
									</Link>
								</li>
								<li>
									<Link href="https://www.instagram.com/" target="_blank">
										<i className="tji-instagram"></i>
									</Link>
								</li>
								<li>
									<Link href="https://x.com/" target="_blank">
										<i className="tji-x-twitter"></i>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default OffcanvasPopup;
