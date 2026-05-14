import { TeamSingleType } from "@/libs/getTeamMembers";
import Image from "next/image";
import Link from "next/link";
interface PropType {
	item: TeamSingleType;
}
const TeamCard = ({ item }: PropType) => {
	const { id, name, desig, img = "/images/team/team-1.webp" } = item || {};
	return (
		<div className="team-item">
			<div className="team-img">
				<Image
					width={616}
					height={864}
					style={{ height: "auto" }}
					src={img}
					alt=""
				/>
			</div>
			<div className="team-content">
				<h5 className="title">
					<Link href={`/team/${id}`}>{name}</Link>
				</h5>
				<span className="designation">{desig}</span>
			</div>
			<div className="social-links style-2">
				<span className="share-icon">
					<i className="tji-share"></i>
				</span>
				<ul>
					<li>
						<Link href="https://www.facebook.com/" target="_blank">
							<i className="tji-facebook"></i>
						</Link>
					</li>
					<li>
						<Link href="https://www.linkedin.com/" target="_blank">
							<i className="tji-linkedin"></i>
						</Link>
					</li>
					<li>
						<Link href="https://www.instagram.com/" target="_blank">
							<i className="tji-instagram"></i>
						</Link>
					</li>
					<li>
						<Link href="https://x.com/" target="_blank">
							<i className="tji-x-twitter"></i>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default TeamCard;
