"use client";

import Link from "next/link";

import countDataLength from "@/libs/countDataLength";
import filterItems from "@/libs/filterItems";
import getBlogCategories from "@/libs/getBlogCategories";
import getBlogs, { BlogType } from "@/libs/getBlogs"; // make sure BlogType is exported
import makePath from "@/libs/makePath";
import modifyNumber from "@/libs/modifyNumber";

const BlogCategoriesWidget = () => {
	const categories: string[] = getBlogCategories();
	const blogs: BlogType[] = getBlogs();

	return (
		<div className="tj-sidebar-widget widget-categories">
			<h4 className="widget-title">Categories</h4>
			<ul>
				{categories.length > 0 &&
					categories.map((category, idx) => {
						// Filter blogs for this category
						const filteredBlogs = filterItems(
							blogs,
							"category",
							makePath(category)
						);

						// Count blogs
						const count = countDataLength({
							data: filteredBlogs,
							filterKey: "category",
							filterValue: category,
						});

						return (
							<li key={idx}>
								<Link href={`/blogs?category=${makePath(category)}`}>
									{category}{" "}
									<span className="number">({modifyNumber(count)})</span>
								</Link>
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default BlogCategoriesWidget;
