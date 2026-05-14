import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BlogDetailsMain from "@/components/layout/main/BlogDetailsMain";
import Cta from "@/components/sections/cta/Cta";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getBlogs, { BlogType } from "@/libs/getBlogs";
import { notFound } from "next/navigation";

// Load team items
const items: BlogType[] = getBlogs();

// ------------------------------
// TYPES
// ------------------------------
interface PropsType {
	params: {
		id: string;
	};
}

// ------------------------------
// PAGE COMPONENT
// ------------------------------
export default async function BlogDetails({ params }: PropsType) {
	const { id } = await params;
	const currentId = Number(id);
	const item = items.find(item => item.id === currentId);

	if (!item) {
		notFound();
	}

	return (
		<div>
			<Header isStickyHeader={true} headerType={2} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<div className="top-gap-20"></div>
					<Header headerType={2} isNotAbsolute={true} />
					<main>
						<BlogDetailsMain currentItemId={currentId} />
						<Cta />
					</main>
					<Footer />
					<div className="bottom-gap-30"></div>
				</div>
			</div>
			<ClientWrapper />
			<BackToTop />
		</div>
	);
}

// ------------------------------
// STATIC PARAMS
// ------------------------------
export async function generateStaticParams() {
	return items.map(({ id = 0 }) => ({
		id: id.toString(),
	}));
}
