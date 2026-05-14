import BlogDetailsPrimary from "@/components/sections/blogs/BlogDetailsPrimary";
import HeroInner from "@/components/sections/hero/HeroInner";
import getBlogs from "@/libs/getBlogs";
import getPreviousNextItem from "@/libs/getPreviousNextItem";

interface PropType {
	currentItemId: number;
}
const BlogDetailsMain = ({ currentItemId }: PropType) => {
	const items = getBlogs();
	const currentId = currentItemId;
	const { prevId, nextId, currentItem, isPrevItem, isNextItem } =
		getPreviousNextItem({ items, currentId });
	const { title } = currentItem || {};
	return (
		<div>
			<HeroInner
				title={title ? title : "Blog Details"}
				text={"Blog Details"}
				breadcrums={[{ name: "Blogs", path: "/blogs" }]}
			/>
			<BlogDetailsPrimary
				option={{
					currentId,
					prevId,
					nextId,
					isPrevItem,
					isNextItem,
				}}
				items={items}
				currentItem={currentItem}
			/>
		</div>
	);
};

export default BlogDetailsMain;
