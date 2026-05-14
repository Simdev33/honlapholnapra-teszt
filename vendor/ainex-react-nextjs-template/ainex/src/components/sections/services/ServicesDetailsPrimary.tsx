"use client";
import FaqCommon from "@/components/shared/faq/FaqCommon";
import PrevNextNav, {
	OptionType,
} from "@/components/shared/others/PrevNextNav";
import { ServiceType } from "@/libs/getALlServices";
import Image from "next/image";
import Link from "next/link";
import CtaSidebar from "../cta/CtaSidebar";

interface PropType {
	option: OptionType;
	items: ServiceType[];
	currentItem: ServiceType;
}
const ServicesDetailsPrimary = ({ option, items, currentItem }: PropType) => {
	const { currentId } = option || {};
	const { img2 = "/images/service/service-details-1.webp" } = currentItem || {};
	const sidebarItems = items?.slice(0, 6);
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
								Empowering Innovation with Custom Technology Solutions.
							</h2>
							<div className="blog-text">
								<p>
									We specialize in crafting bespoke technology solutions
									tailored to the unique needs of your business. From custom
									software development and IoT integration to AI-powered tools
									and cloud computing, we provide innovative systems that
									streamline processes, enhance productivity, and drive growth.
									Whether you’re looking to modernize legacy systems, automate
									workflows, or build intelligent applications, our team of
									experts ensures every solution is scalable, secure, and
									aligned with your goals. By combining cutting-edge technology.
								</p>
								<p>
									Deep understanding of your business, we deliver powerful tools
									that not only solve your challenges but also empower you to
									stay ahead in an ever-evolving digital landscape. ensure that
									our technology not only solves immediate challenges but also
									positions your business for long-term success in an
									ever-evolving digital world.
								</p>
								<ul>
									<li>
										<span>
											<i className="tji-check-2"></i>
										</span>
										Discover our expertise
									</li>
									<li>
										<span>
											<i className="tji-check-2"></i>
										</span>
										Journey and commitment to explained
									</li>
									<li>
										<span>
											<i className="tji-check-2"></i>
										</span>
										Meet our team and learn
									</li>
									<li>
										<span>
											<i className="tji-check-2"></i>
										</span>
										Meet our team
									</li>
									<li>
										<span>
											<i className="tji-check-2"></i>
										</span>
										Consultation and Discovery
									</li>
									<li>
										<span>
											<i className="tji-check-2"></i>
										</span>
										Routine Maintenance
									</li>
									<li>
										<span>
											<i className="tji-check-2"></i>
										</span>
										Troubleshooting
									</li>
								</ul>
								<div className="images-wrap">
									<div className="row">
										<div className="col-sm-6">
											<div className="image-box">
												<Image
													width={420}
													height={420}
													style={{ height: "auto" }}
													src="/images/service/service-7.webp"
													alt="Image"
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="image-box">
												<Image
													width={420}
													height={420}
													style={{ height: "auto" }}
													src="/images/service/service-8.webp"
													alt="Image"
												/>
											</div>
										</div>
									</div>
								</div>
								<h3>Our Range of Maintenance Services</h3>
								<p>
									We specialize in crafting bespoke technology solutions
									tailored to the unique needs of your business. From custom
									software development and IoT integration to AI-powered tools
									and cloud computing, we provide innovative systems that
									streamline processes, enhance productivity, and drive growth.
									Whether you’re looking to modernize legacy systems, automate
									workflows, or build intelligent applications, our team of
									experts.
								</p>
								<div className="details-content-box">
									<div className="service-details-item">
										<span className="number">01.</span>
										<h6 className="title">
											Unmatched Precision <br /> in Every Build
										</h6>
										<div className="desc">
											<p>
												Our dedicated team is bring your vision to life. With a
												commitment to craftsmanship and attention to detai.
											</p>
										</div>
									</div>
									<div className="service-details-item">
										<div className="service-number">
											<span className="number">02.</span>
											<h6 className="title">
												Sustainable Technical <br />
												Practices
											</h6>
											<div className="desc">
												<p>
													Our dedicated team is bring your vision to life. With
													a commitment to craftsmanship and attention to detai.
												</p>
											</div>
										</div>
									</div>
									<div className="service-details-item">
										<div className="service-number">
											<span className="number">03.</span>
											<h6 className="title">
												Comprehensive Project Management
											</h6>
											<div className="desc">
												<p>
													Our dedicated team is bring your vision to life. With
													a commitment to craftsmanship and attention to detai.
												</p>
											</div>
										</div>
									</div>
								</div>
								<h3>Frequently asked questions</h3>
								<FaqCommon />
							</div>
							<PrevNextNav option={option} itemsUrl="/services" />
						</div>
					</div>
					<div className="col-lg-4">
						<div className="tj-main-sidebar sticky-lg-top">
							<div className="tj-sidebar-widget service-categories">
								<h4 className="widget-title">More services</h4>
								<ul>
									{sidebarItems?.length
										? sidebarItems?.map(({ title, id }, idx) => (
												<li key={idx}>
													<Link
														className={`${currentId === id ? "active" : ""}`}
														href={`/services/${id}`}
													>
														{title}
														<span className="icon">
															<i className="tji-arrow-right-3"></i>
														</span>
													</Link>
												</li>
										  ))
										: ""}
								</ul>
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

export default ServicesDetailsPrimary;
