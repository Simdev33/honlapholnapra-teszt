"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PrevNextNav, {
	OptionType,
} from "@/components/shared/others/PrevNextNav";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import BlogSidebar from "@/components/shared/sidebar/BlogSidebar";
import { BlogType } from "@/libs/getBlogs";
import makePath from "@/libs/makePath";
import modifyNumber from "@/libs/modifyNumber";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

interface PropType {
	option: OptionType;
	items: BlogType[];
	currentItem: BlogType;
}
const BlogDetailsPrimary = ({ option, items, currentItem }: PropType) => {
	const { currentId } = option || {};
	const {
		img = "/images/blog/blog-1.webp",
		id,
		tags,
		title,
		author,
		date,
		totalComment = 0,
	} = currentItem || {};
	const formattedDate = moment(date).format("D MMMM, YYYY");

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
									src={img}
									alt="Images"
								/>
							</div>
							<h2 className="title">{title}</h2>
							<div className="blog-category-two">
								<div className="category-item">
									<div className="cate-images">
										<Image
											width={120}
											height={120}
											src="/images/blog/author.webp"
											alt="Images"
										/>
									</div>
									<div className="cate-text">
										<span className="degination">Authored by</span>
										<h6 className="title">
											<Link href={`/blogs/${id}`}>{author}</Link>
										</h6>
									</div>
								</div>
								<div className="category-item">
									<div className="cate-icons">
										<i className="tji-calendar"></i>
									</div>
									<div className="cate-text">
										<span className="degination">Date Released</span>
										<h6 className="text">{formattedDate}</h6>
									</div>
								</div>
								<div className="category-item">
									<div className="cate-icons">
										<i className="tji-comment"></i>
									</div>
									<div className="cate-text">
										<span className="degination">Comments</span>
										<h6 className="text">
											{modifyNumber(totalComment)} Comments
										</h6>
									</div>
								</div>
							</div>
							<div className="blog-text">
								<p>
									In today’s data-driven world, businesses that harness the
									power of data are positioned to thrive. Data has become more
									than just numbers—it's a valuable asset that can drive
									decision-making, improve operations, and create new
									opportunities. The challenge lies in how businesses extract
									actionable insights from vast amounts of data and use it to
									their advantage. Data enables businesses to make informed
									decisions based on evidence rather than guesswork. By
									analyzing patterns and trends, Data enables businesses to make
									informed decisions based on evidence.
								</p>
								<p>
									Customer experience is a key differentiator in today’s
									competitive market. Data allows businesses to gain a deep
									understanding of their customers' preferences, needs, and pain
									points. By leveraging this data, companies can create
									personalized experiences, recommend relevant products.
								</p>
								<blockquote>
									<p>
										Without data, you're just another person with an opinion.
										The power of data lies not in its collection, but in its
										ability to inform and guide decision-making.
									</p>
									<cite>Kevin Hooks</cite>
								</blockquote>
								<h3>Kye lessons of Electricals</h3>
								<p>
									Electrical materials, including wires, tools, and equipment,
									should be handled with care. Improper handling can lead to
									electrical accidents. Ensure that all materials are stored
									properly, away from wet or damp areas, and that tools are in
									good working order. All cables should be properly insulated,
									and live wires should be clearly marked to prevent accidental
									contact. Electrical materials, including wires, tools.
								</p>
								<div className="images-wrap">
									<div className="row">
										<div className="col-sm-6">
											<div className="image-box">
												<Image
													width={420}
													height={420}
													style={{ height: "auto" }}
													src="/images/blog/blog-6.webp"
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
													src="/images/blog/blog-7.webp"
													alt="Image"
												/>
											</div>
										</div>
									</div>
								</div>
								<p>
									Good communication on electrical sites is critical for safety.
									Workers should be equipped with two-way radios or other
									communication devices to relay important information,
									especially in emergency situations. Team members should also
									conduct pre-task meetings to review safety procedures.
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
										Comprehensive Training
									</li>
									<li>
										<span>
											<i className="tji-check-2"></i>
										</span>
										ersonal Protective
									</li>
									<li>
										<span>
											<i className="tji-check-2"></i>
										</span>
										Conduct Regular Safety
									</li>
								</ul>
								<div className="blog-video">
									<Image
										width={870}
										height={498}
										style={{ height: "auto" }}
										src="/images/blog/blog-video.webp"
										alt="Video"
									/>
									<PopupVideo>
										<Link
											className="video-btn video-popup glightbox"
											href="https://www.youtube.com/watch?v=MLpWrANjFbI&ab_channel=eidelchteinadvogados"
										>
											<span>
												<i className="tji-play"></i>
											</span>
										</Link>
									</PopupVideo>
								</div>
								<h3>Conclusions</h3>
								<p>
									At the heart of every successful electrical project is a
									commitment to safety. By adhering to best practices, from
									proper training and PPE usage to conducting regular safety
									audits and implementing emergency response protocols, we
									create an environment where workers can perform.
								</p>
								<p>
									Make safety a non-negotiable part of our daily routines. At
									Gripz, we are committed to ensuring the highest safety
									standards on every electrical site we work on, because safety
									always.
								</p>
							</div>
							<div className="tj-tags-post">
								<div className="tagcloud">
									<span>Tags:</span>
									{tags?.length
										? tags?.map((tag, idx) => (
												<Link key={idx} href={`/blogs?tag=${makePath(tag)}`}>
													{tag}
												</Link>
										  ))
										: ""}
								</div>
								<div className="post-share">
									<ul>
										<li> Share:</li>
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
							<PrevNextNav option={option} itemsUrl="/blogs" type={2} />

							<div className="tj-comments-container">
								<div className="tj-comments-wrap">
									<div className="comments-title">
										<h3 className="title">Top Comments (02)</h3>
									</div>
									<div className="tj-latest-comments">
										<ul>
											<li className="tj-comment">
												<div className="comment-content">
													<div className="comment-avatar">
														<Image
															width={120}
															height={120}
															style={{ height: "auto" }}
															src="/images/blog/avatar-1.webp"
															alt="Image"
														/>
													</div>
													<div className="comments-header">
														<div className="avatar-name">
															<h6 className="title">
																<Link href={`/blogs/${id}`}>Brandon</Link>
															</h6>
														</div>
														<div className="comment-text">
															<span className="date">
																June 18, 2025 at 06:00 pm
															</span>
															<Link className="reply" href={`/blogs/${id}`}>
																Reply
															</Link>
														</div>
														<div className="desc">
															<p>
																"This is a great reminder of how important
																safety is on electrical sites. It's easy to get
																caught up in the rush of a project, but taking
																the time to follow these safety practices can
																prevent accidents and save lives. I appreciate
																the emphasis!"
															</p>
														</div>
													</div>
												</div>
											</li>
											<li className="tj-comment">
												<ul className="children">
													<li className="tj-comment">
														<div className="comment-content">
															<div className="comment-avatar">
																<Image
																	width={120}
																	height={120}
																	style={{ height: "auto" }}
																	src="/images/blog/author.webp"
																	alt="Image"
																/>
															</div>
															<div className="comments-header">
																<div className="avatar-name">
																	<h6 className="title">
																		<Link href={`/blogs/${id}`}>
																			Burdee Nicolas
																		</Link>
																	</h6>
																</div>
																<div className="comment-text">
																	<span className="date">
																		June 18, 2025 at 06:00 pm
																	</span>
																	<Link className="reply" href={`/blogs/${id}`}>
																		Reply
																	</Link>
																</div>
																<div className="desc">
																	<p>
																		"This is a great reminder of how important
																		safety is on electrical sites. It's easy to
																		get caught up in the rush of a project, but
																		taking the time to follow these safety
																		practices can prevent accidents and save
																		lives. I appreciate the emphasis!"
																	</p>
																</div>
															</div>
														</div>
													</li>
												</ul>
											</li>
											<li className="tj-comment">
												<div className="comment-content">
													<div className="comment-avatar">
														<Image
															width={120}
															height={120}
															style={{ height: "auto" }}
															src="/images/blog/avatar-2.webp"
															alt="Image"
														/>
													</div>
													<div className="comments-header">
														<div className="avatar-name">
															<h6 className="title">
																<Link href={`/blogs/${id}`}>Robert Fox</Link>
															</h6>
														</div>
														<div className="comment-text">
															<span className="date">
																June 18, 2025 at 06:00 pm
															</span>
															<Link className="reply" href={`/blogs/${id}`}>
																Reply
															</Link>
														</div>
														<div className="desc">
															<p>
																"As someone working in electrical contracting, I
																couldn’t agree more with these best practices.
																It’s easy to overlook certain safety measures,
																but the tips provided here are essential for
																keeping the team safe. Regular inspections and
																clear communication"
															</p>
														</div>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div className="tj-comments__container">
									<div className="comment-respond">
										<h3 className="comment-reply-title">Leave a Comment</h3>
										<div className="row">
											<div className="col-lg-12">
												<div className="form-input">
													<textarea
														id="comment"
														name="message"
														placeholder="Write Your Comment *"
													></textarea>
												</div>
											</div>
											<div className="col-lg-4">
												<div className="form-input">
													<input
														type="text"
														id="name"
														name="name"
														placeholder="Full Name *"
														required={true}
													/>
												</div>
											</div>
											<div className="col-lg-4">
												<div className="form-input">
													<input
														type="email"
														id="emailOne"
														name="name"
														placeholder="Your Email *"
														required={true}
													/>
												</div>
											</div>
											<div className="col-lg-4">
												<div className="form-input">
													<input
														type="text"
														id="website"
														name="name"
														placeholder="Website"
														required={true}
													/>
												</div>
											</div>
											<div className="comments-btn">
												<ButtonPrimary type="submit" text="Post Now" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<BlogSidebar />
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogDetailsPrimary;
