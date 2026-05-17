"use client";
import PrevNextNav, {
	OptionType,
} from "@/components/shared/others/PrevNextNav";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import { PortfolioType } from "@/libs/getPortfolio";
import Image from "next/image";
import Link from "next/link";
import CtaSidebar from "../cta/CtaSidebar";

interface PropType {
	option: OptionType;
	items: PortfolioType[];
	currentItem: PortfolioType;
}
const PortfolioDetailsPrimary = ({ option, items, currentItem }: PropType) => {
	const { currentId } = option || {};
	const { img2 = "/images/project/project-details-1.webp" } = currentItem || {};

	return (
		<section className="tj-blog-section section-gap">
			<div className="container">
				<div className="row row-gap-5">
					<div className="col-lg-8">
						<div className="post-details-wrapper">
							<div className="blog-images">
								<Image
									width={870}
									height={450}
									style={{ height: "auto" }}
									src={img2}
									alt="Images"
								/>
							</div>
							<h2 className="title">
								Redefining Intelligence for Tomorrow Technology.
							</h2>
							<div className="blog-text">
								<p>
									we are at the forefront of innovation, redefining how
									intelligence shapes the technology of tomorrow. Our focus is
									on building solutions that integrate artificial intelligence,
									machine learning, and next-generation technologies to
									transform industries and create smarter, more efficient
									systems. From predictive analytics and intelligent automation
									to adaptive algorithms and data-driven decision-making, our
									solutions empower businesses to stay ahead in a rapidly
									evolving world.With a commitment to pushing the boundaries of
									what’s possible.
								</p>
								<p>
									With a commitment to pushing the boundaries of what’s
									possible, we aim to create technology that doesn’t just solve
									problems but anticipates needs, adapts to changes, and drives
									sustainable growth. Whether it's building smart applications,
									advancing IoT ecosystems, or leveraging AI for business
									insights, we deliver solutions that are intelligent, scalable,
									and future-ready. Join us in shaping the future.
								</p>
								<h3>Project Overview</h3>
								<p>
									The objective of this project was to modernize and optimize
									the electrical infrastructure of an industrial facility to
									meet growing energy demands, enhance safety, and improve
									operational efficiency. The facility’s outdated power system
									required significant upgrades to keep pace with industry.
								</p>
								<ul>
									<li>
										<span>
											<i className="tji-check-2"></i>
										</span>
										AI-Driven Automation
									</li>
									<li>
										<span>
											<i className="tji-check-2"></i>
										</span>
										Predictive Analytics to explained
									</li>
									<li>
										<span>
											<i className="tji-check-2"></i>
										</span>
										Scalability and Adaptability
									</li>
									<li>
										<span>
											<i className="tji-check-2"></i>
										</span>
										Ready Integrations
									</li>
									<li>
										<span>
											<i className="tji-check-2"></i>
										</span>
										Custom Technology Solutions
									</li>
									<li>
										<span>
											<i className="tji-check-2"></i>
										</span>
										Key Deliverables
									</li>
									<li>
										<span>
											<i className="tji-check-2"></i>
										</span>
										Capacity Expansion
									</li>
								</ul>
								<h3>Project Galley</h3>
								<p>
									It begins with conceptual sketches and wireframes that
									illustrate the project’s vision, followed by snapshots of the
									design and development process, showcasing the innovative
									technologies.
								</p>
								<div className="images-wrap">
									<div className="row">
										<div className="col-sm-12">
											<div className="image-box">
												<PopupVideo>
													<Link
														className="gallery glightbox"
														data-gall="gallery"
														href="/images/project/project-gallery-1.webp"
														prefetch={false}
													>
														<Image
															width={870}
															height={420}
															style={{ height: "auto" }}
															src="/images/project/project-gallery-1.webp"
															alt="Image"
														/>
													</Link>
												</PopupVideo>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="image-box">
												<PopupVideo>
													<Link
														className="gallery glightbox"
														data-gall="gallery"
														href="/images/project/project-gallery-2.webp"
														prefetch={false}
													>
														<Image
															width={420}
															height={420}
															style={{ height: "auto" }}
															src="/images/project/project-gallery-2.webp"
															alt="Image"
														/>
													</Link>
												</PopupVideo>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="image-box">
												<PopupVideo>
													<Link
														className="gallery glightbox"
														data-gall="gallery"
														href="/images/project/project-gallery-3.webp"
														prefetch={false}
													>
														<Image
															width={420}
															height={420}
															style={{ height: "auto" }}
															src="/images/project/project-gallery-3.webp"
															alt="Image"
														/>
													</Link>
												</PopupVideo>
											</div>
										</div>
									</div>
								</div>
							</div>
							<PrevNextNav option={option} itemsUrl="/portfolios" />
						</div>
					</div>
					<div className="col-lg-4">
						<div className="tj-main-sidebar sticky-lg-top">
							<div className="tj-sidebar-widget widget-categories">
								<h4 className="widget-title">Project Info</h4>
								<div className="infos-item">
									<div className="project-icons">
										<i className="tji-user"></i>
									</div>
									<div className="project-text">
										<span>Clients</span>
										<h6 className="title">Innovate Interiors Group</h6>
									</div>
								</div>
								<div className="infos-item">
									<div className="project-icons">
										<i className="tji-budget"></i>
									</div>
									<div className="project-text">
										<span>Budget</span>
										<h6 className="title">$100M USD</h6>
									</div>
								</div>
								<div className="infos-item">
									<div className="project-icons">
										<i className="tji-location-2"></i>
									</div>
									<div className="project-text">
										<span>Location</span>
										<h6 className="title">Maplewood Heights, CA</h6>
									</div>
								</div>
								<div className="infos-item">
									<div className="project-icons">
										<i className="tji-chart"></i>
									</div>
									<div className="project-text">
										<span>Sector</span>
										<h6 className="title">Corporate Business</h6>
									</div>
								</div>
								<div className="infos-item">
									<div className="project-icons">
										<i className="tji-calendar"></i>
									</div>
									<div className="project-text">
										<span>Complete date</span>
										<h6 className="title">OCT 20, 2024</h6>
									</div>
								</div>
							</div>
							<div className="tj-sidebar-widget widget-feature-item">
								<CtaSidebar />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PortfolioDetailsPrimary;
