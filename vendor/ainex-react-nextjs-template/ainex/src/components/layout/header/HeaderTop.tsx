"use client";

import Link from "next/link";
import { FC } from "react";

interface HeaderTopProps {
	type?: number;
}

const HeaderTop: FC<HeaderTopProps> = ({ type }) => {
	return (
		<div className={`header-top${type === 2 ? " style-2" : ""}`}>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<div className="header-top-content">
							<p className="topbar-text">
								<i className="tji-idea"></i>Innovating Tomorrow, Today{" "}
								<Link href="/contact">Click here</Link>
							</p>
							<div className="header-info">
								<div className="info-item">
									<span>
										<i className="tji-envelop-2"></i>
									</span>
									<Link href="mailto:hello@ainex.com">hello@ainex.com</Link>
								</div>
								<div className="info-item">
									<span>
										<i className="tji-phone-2"></i>
									</span>
									<Link href="tel:8089091313">808-909-1313</Link>
								</div>
								<div className="info-item">
									<div className="social-links">
										<ul>
											<li>
												<Link href="https://www.facebook.com/" target="_blank">
													FB
												</Link>
											</li>
											<li>
												<Link href="https://www.instagram.com/" target="_blank">
													IN
												</Link>
											</li>
											<li>
												<Link href="https://www.linkedin.com/" target="_blank">
													LN
												</Link>
											</li>
											<li>
												<Link href="https://x.com/" target="_blank">
													TW
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderTop;
