import TeamCard from "@/components/shared/cards/TeamCard";
import getTeamMembers from "@/libs/getTeamMembers";

const Team1 = () => {
	const items = getTeamMembers()?.slice(0, 4);

	return (
		<section className="tj-team-section-2 section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-subtitle-2"></i> Passionate Innovators
							</span>
							<h2 className="sec-title text-anim">
								The Minds Behind the Innovation
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					{items?.length
						? items.map((item, idx) => (
								<div
									key={idx}
									className="col-lg-3 col-sm-6  wow fadeInUp"
									data-wow-delay=".3s"
								>
									<TeamCard item={item} />
								</div>
						  ))
						: ""}
				</div>
			</div>
		</section>
	);
};

export default Team1;
