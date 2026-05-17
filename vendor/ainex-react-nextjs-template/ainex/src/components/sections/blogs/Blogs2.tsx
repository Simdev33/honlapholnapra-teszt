import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import BlogCard2 from "@/components/shared/cards/BlogCard2";
import getBlogs from "@/libs/getBlogs";

const Blogs2 = () => {
	const items = getBlogs().slice(0, 3);
	return (
		<section className="tj-blog-section-2 section-gap fix">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap style-2">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								Insights & Updates
							</span>
							<div className="heading-wrap-content">
								<div className="sec-heading style-2">
									<h2 className="sec-title text-anim">
										The Minds Behind Blog & News
									</h2>
								</div>
								<div
									className=" d-none d-lg-block wow fadeInUp"
									data-wow-delay=".5s"
								>
									{" "}
									<ButtonPrimary
										text="More Blog"
										url="/blogs"
										className="style-2"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					{items?.length
						? items?.map((item, idx) => (
								<div key={idx} className="col-xl-4 col-md-6">
									<BlogCard2 item={item} idx={idx} />
								</div>
						  ))
						: ""}
				</div>
				<div className="d-lg-none text-center mt-40">
					<ButtonPrimary text="More Blog" url="/blogs" className="style-2" />
				</div>
			</div>
		</section>
	);
};

export default Blogs2;
