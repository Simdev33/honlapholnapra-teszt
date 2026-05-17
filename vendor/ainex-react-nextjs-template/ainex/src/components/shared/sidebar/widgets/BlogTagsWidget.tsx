"use client";

import Link from "next/link";
import { FC } from "react";

import getBlogTags from "@/libs/getBlogTags";
import makePath from "@/libs/makePath";

const BlogTagsWidget: FC = () => {
	const tags: string[] = getBlogTags();

	return (
		<div className="tj-sidebar-widget widget-tag-cloud">
			<h4 className="widget-title">Tags</h4>
			<nav>
				<div className="tagcloud">
					{tags.length > 0 &&
						tags.map((tag, idx) => (
							<Link key={idx} href={`/blogs?tag=${makePath(tag)}`}>
								{tag}
							</Link>
						))}
				</div>
			</nav>
		</div>
	);
};

export default BlogTagsWidget;
