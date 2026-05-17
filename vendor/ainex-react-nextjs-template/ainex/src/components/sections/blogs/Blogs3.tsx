import BlogCard1 from "@/components/shared/cards/BlogCard1";
import getBlogs from "@/libs/getBlogs";

const Blogs3 = () => {
	const items = getBlogs().slice(0, 3);
	return (
		<section className="tj-blog-section-3 section-gap section-separator">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered style-3">
							<span className="sub-title">
								<i className="tji-subtitle-2"></i>Recent Blogs
							</span>
							<h2 className="sec-title text-anim">
								The Minds Behind Blog and News
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					{items?.length
						? items?.map((item, idx) => (
								<div key={idx} className="col-xl-4 col-md-6">
									<BlogCard1 item={item} idx={idx} type={2} />
								</div>
						  ))
						: ""}
				</div>
			</div>
		</section>
	);
};

export default Blogs3;
