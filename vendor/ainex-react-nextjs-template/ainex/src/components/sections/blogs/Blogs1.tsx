import BlogCard1 from "@/components/shared/cards/BlogCard1";
import getBlogs from "@/libs/getBlogs";

const Blogs1 = () => {
	const items = getBlogs().slice(0, 3);
	return (
		<section className="tj-blog-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div
							className="sec-heading sec-heading-centered wow fadeInUp"
							data-wow-delay=".3s"
						>
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
								<i className="tji-subtitle"></i>Insights & Updates
							</span>
							<h2 className="sec-title text-anim">Read Our Blog & News</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					{items?.length
						? items?.map((item, idx) => (
								<div key={idx} className="col-xl-4 col-md-6">
									<BlogCard1 item={item} idx={idx} />
								</div>
						  ))
						: ""}
				</div>
			</div>
		</section>
	);
};

export default Blogs1;
