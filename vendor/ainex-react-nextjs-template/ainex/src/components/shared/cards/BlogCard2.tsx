import { BlogType } from "@/libs/getBlogs";
import makePath from "@/libs/makePath";
import makeWowDelay from "@/libs/makeWowDelay";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
interface PropType {
	item: BlogType;
	idx: number;
}
const BlogCard2 = ({ item, idx = 0 }: PropType) => {
	const {
		title,
		id,
		img = "images/blog/blog-1.webp",
		desc2,
		category,
		date,
		author,
	} = item || {};
	const formattedDate = moment(date).format("MMM DD, YYYY");
	return (
		<div
			className="blog-item style-2 wow fadeInUp"
			data-wow-delay={makeWowDelay(idx, 0.2, 2)}
		>
			<div className="blog-thumb">
				<Link href={`/blogs/${id}`}>
					<Image width={870} height={450} src={img} alt="Image" />
				</Link>
				<span className="categories">
					<Link href={`/blogs?category=${makePath(category)}`}>{category}</Link>
				</span>
			</div>
			<div className="blog-content">
				<div className="blog-meta">
					<span>
						By <Link href={`/blogs/${id}`}>{author}</Link>
					</span>
					<span>{formattedDate}</span>
				</div>
				<h4 className="title">
					<Link href={`/blogs/${id}`}>{title}</Link>
				</h4>
				<p className="desc">{desc2}</p>
				<Link className="text-btn" href={`/blogs/${id}`}>
					<span className="btn-text">
						<span>Read More</span>
					</span>
					<span className="btn-icon">
						<span>
							<i className="tji-arrow-right"></i>
						</span>
					</span>
				</Link>
			</div>
		</div>
	);
};

export default BlogCard2;
