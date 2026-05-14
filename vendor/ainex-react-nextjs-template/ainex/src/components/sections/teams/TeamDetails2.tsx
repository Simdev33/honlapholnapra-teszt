import Socials1 from "@/components/shared/socials/Socials1";
import getTeamMembers from "@/libs/getTeamMembers";
import Image from "next/image";
import Link from "next/link";
interface PropType {
	currentItemId?: number | string;
}
const TeamDetails2 = ({ currentItemId }: PropType) => {
	const items = getTeamMembers();
	const currentId = currentItemId;
	const currentItem = items?.find(({ id }) => currentId === id);
	const { name, desig, img = "/images/team/team-1.webp" } = currentItem || {};

	return (
		<section className="team-details sidebar-sticky-container">
			<div className="container">
				<div className="row justify-content-center">
					{/* <!--  left --> */}
					<div className="col-12 col-md-8 col-lg-5">
						<div className="team-details__img sidebar-sticky">
							<Image
								width={616}
								height={864}
								style={{ height: "auto" }}
								src={img}
								alt=""
							/>
						</div>
					</div>
					{/* <!-- right --> */}
					<div className="col-12 col-lg-7 ">
						<div className="team-details__content">
							<h2 className="team-details__name">Hello, I am {name}</h2>
							<span className="team-details__desig">{desig}</span>
							<p>
								Our mission is to empowers businesses sizes thrive businesses ev
								changing marketplace We are committed to the delivering
								exceptional value through strategic inset innovative approaches.
								Our consulting of our missing empower.
							</p>
							<div className="team-details__contact-info">
								<ul>
									<li>
										<span>Email address</span>
										<Link href="mailto:eade.marren@ainex.com">
											eade.marren@ainex.com
										</Link>
									</li>
									<li>
										<span>Phone number</span>
										<Link href="tel:10095447818">+1 (009) 544-7818</Link>
									</li>
								</ul>
							</div>
							<div className="social-links style-2">
								<Socials1 />
							</div>
							<div className="team-details__experience">
								<h4 className="team-details__subtitle">Work experience</h4>
								<p>
									Our mission is to empowers businesses size to thrivie in ses
									ever changing marketplace We are committed to the delivering
									exceptionals the value thro strategic ins innovative
									approaches. Our consulting of our missing empowers businesses
									of all sizes Committed to the delivering exceptional in the
									values
								</p>
								<p>
									Our mission is to empowers businesses size to thrivie in ses
									ever changing marketplace We are committed to the delivering
									exceptionals the value thro strategic ins innovative
									approaches. Our consulting of our missing empowers
								</p>
								<div className="team-details__experience__list">
									<ul>
										<li>
											<i className="tji-check-2"></i>
											<p>
												We believe that the human essential start any successful
												project.
											</p>
										</li>
										<li>
											<i className="tji-check-2"></i>
											<p>
												We believe that the human essential start any successful
												project.
											</p>
										</li>
										<li>
											<i className="tji-check-2"></i>
											<p>
												We believe that the human essential start any successful
												project.
											</p>
										</li>
										<li>
											<i className="tji-check-2"></i>
											<p>
												We believe that the human essential start any successful
												project.
											</p>
										</li>
									</ul>
								</div>
							</div>
							<div className="team-details__skills">
								<h4 className="team-details__subtitle">Professional skills</h4>
								<p>
									Our mission is to empowers businesses size to thrivie in ses
									ever changing marketplace We are committed to the delivering
									exceptionals the value thro strategic ins innovative
									approaches. Our consulting of our missing empowers.
								</p>
								<ul className="tj-progress-list">
									<li>
										<h6 className="tj-progress-title">Business Consultants</h6>
										<div className="tj-progress">
											<span className="tj-progress-percent">82%</span>
											<div className="tj-progress-bar" data-percent="82"></div>
										</div>
									</li>
									<li>
										<h6 className="tj-progress-title">Client Communication</h6>
										<div className="tj-progress">
											<span className="tj-progress-percent">90%</span>
											<div className="tj-progress-bar" data-percent="90"></div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamDetails2;
