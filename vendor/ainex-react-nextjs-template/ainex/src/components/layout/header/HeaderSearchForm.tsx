"use client";

import { FC, Fragment } from "react";

interface HeaderSearchFormProps {
	isSearchOpen: boolean;
	handleSearchClose: () => void;
}

const HeaderSearchForm: FC<HeaderSearchFormProps> = ({
	isSearchOpen = false,
	handleSearchClose,
}) => {
	return (
		<Fragment>
			<div className={`search_popup ${isSearchOpen ? "search-opened" : ""}`}>
				<div className="search_close">
					<button
						type="button"
						className="search_close_btn"
						onClick={handleSearchClose}
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
				<div className="container">
					<div className="row">
						<div className="col-xxl-12">
							<div className="tj_search_wrapper">
								<div className="search_form">
									<form>
										<div className="search_input">
											<h4 className="title">
												Search Projects, Service or Blog.
											</h4>
											<div className="search-box">
												<input
													className="search-input-field"
													type="search"
													placeholder="Search here..."
													required
												/>
												<button type="submit">
													<i className="tji-search"></i>
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className={`search-popup-overlay ${isSearchOpen ? "opened" : ""}`}
				onClick={handleSearchClose}
			></div>
		</Fragment>
	);
};

export default HeaderSearchForm;
