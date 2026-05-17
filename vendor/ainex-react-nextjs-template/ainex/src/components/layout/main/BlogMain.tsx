"use client";

import { useSearchParams } from "next/navigation";
import { FC, useMemo } from "react";

import BlogsPrimary from "@/components/sections/blogs/BlogsPrimary";
import HeroInner from "@/components/sections/hero/HeroInner";
import filterItems from "@/libs/filterItems";
import getBlogs, { BlogType } from "@/libs/getBlogs"; // make sure getBlogs exports BlogItemType
import makeText from "@/libs/makeText";

const BlogMain: FC = () => {
	const allItems = useMemo<BlogType[]>(() => getBlogs(), []) || [];

	// Get search params
	const searchParams = useSearchParams();
	const category = searchParams?.get("category") ?? "";
	const tag = searchParams?.get("tag") ?? "";

	// Determine collection type
	const collectionType = category ? "category" : tag ? "tags" : undefined;

	// Determine filter item
	const filterItem = category || tag || undefined;

	// Filter Items
	const filteredItems = filterItems(
		allItems,
		collectionType as any,
		filterItem,
		false
	);

	// Determine HeroInner title and text
	const heroTitle = category
		? `${makeText(category, true)}`
		: tag
		? `${makeText(tag, true)}`
		: "Blogs";

	const heroText = category ? `Categories` : tag ? `Tags` : "Blogs";

	const breadcrums = category || tag ? [{ name: "Blogs", path: "/blogs" }] : [];

	return (
		<div>
			<HeroInner title={heroTitle} text={heroText} breadcrums={breadcrums} />
			<BlogsPrimary filteredItems={filteredItems} />
		</div>
	);
};

export default BlogMain;
