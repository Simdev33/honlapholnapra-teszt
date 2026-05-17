import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Contact2 from "@/components/sections/contacts/Contact2";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import TeamDetails2 from "@/components/sections/teams/TeamDetails2";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getTeamMembers, { TeamSingleType } from "@/libs/getTeamMembers";
import { notFound } from "next/navigation";

// Load team items
const items: TeamSingleType[] = getTeamMembers();

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
export default async function TeamDetails({ params }: PropsType) {
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
						<HeroInner title="Team details" text="Team details" />
						<TeamDetails2 currentItemId={currentId} />
						<Contact2 />
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
