"use client";
import { BlogType } from "@/libs/getBlogs";
import makePath from "@/libs/makePath";
import makeWowDelay from "@/libs/makeWowDelay";
import modifyNumber from "@/libs/modifyNumber";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";
interface PropsType {
	blog?: BlogType;
	idx?: number;
}
const BlogSingle = ({ blog, idx }: PropsType) => {
	const {
		id,
		img = "/images/blog/blog-1.webp",
		title,
		category,
		date,
		totalComment = 0,
		author,
	} = blog ? blog : {};
	const formattedDate = moment(date).format("MMM DD, YYYY");

	return (
		<article
			className="tj-post-item wow fadeInUp"
			data-wow-delay={makeWowDelay(idx, 0.3, 2)}
		>
			<div className="tj-post-thumb">
				<Link href={`/blogs/${id}`}>
					<Image src={img} alt="" width={870} height={450} />
				</Link>
				<span className="categories">
					<Link href={`/blogs?category=${makePath(category)}`}>{category}</Link>
				</span>
			</div>
			<div className="tj-post-content">
				<div className="tj-post-meta">
					<span>
						By <Link href={`/blogs/${id}`}>{author}</Link>
					</span>
					<span>{formattedDate}</span>
					<span>Comments ({modifyNumber(totalComment)})</span>
				</div>
				<h3 className="title">
					<Link href={`/blogs/${id}`}>{title}</Link>
				</h3>
				<p className="desc">
					we are at the forefront of innovation, redefining how intelligence
					shapes the technology of tomorrow. Our focus is on building solutions
					that integrate artificial intelligence, machine learning, and
					next-generation technologies to transform industries and create
					smarter, more efficient systems.
				</p>
				<div className="tj-post-btn">
					<ButtonPrimary text={"Read More"} url={`/blogs/${id}`} />
				</div>
			</div>
		</article>
	);
};

export default BlogSingle;
