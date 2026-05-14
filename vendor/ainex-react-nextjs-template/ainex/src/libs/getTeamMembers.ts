import teamMembers from "@/data/team-members.json";
export interface TeamSingleType {
	id: number;
	name: string;
	img: string;
	desig: string;
}
const getTeamMembers = () => {
	return teamMembers;
};

export default getTeamMembers;
