import BlogSingle from "@/components/shared/blogs/BlogSingle";
import Paginations from "@/components/shared/others/Paginations";
import BlogSidebar from "@/components/shared/sidebar/BlogSidebar";
import usePagination from "@/hooks/usePagination";
import { BlogType } from "@/libs/getBlogs";
import { useEffect } from "react";
interface PropType {
	filteredItems: BlogType[];
}
const BlogsPrimary = ({ filteredItems }: PropType) => {
	const items = filteredItems?.length ? [...filteredItems] : [];
	const limit = 3;
	// get pagination details
	const paginationDetails = usePagination({
		filteredItems: items,
		currentLimit: limit,
	});
	const { currentItems, setCurrentpage } = paginationDetails;
	const totalItems = items.length;
	const totalItemsToShow = currentItems?.length || 0;
	useEffect(() => {
		setCurrentpage(0);
	}, [totalItems]);
	return (
		<section className="tj-blog-section section-gap">
			<div className="container">
				<div className="row row-gap-5">
					<div className="col-lg-8">
						<div className="tj-post-wrapper">
							{currentItems?.length
								? currentItems?.map((blog, idx) => (
										<BlogSingle key={idx} blog={blog} idx={idx} />
								  ))
								: ""}

							{/* <!-- pagination --> */}
							{totalItemsToShow < totalItems ? (
								<Paginations paginationDetails={paginationDetails} type={2} />
							) : (
								""
							)}
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

export default BlogsPrimary;
