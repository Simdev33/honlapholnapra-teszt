import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ServiceCard1 from "@/components/shared/cards/ServiceCard1";
import getALlServices from "@/libs/getALlServices";

const Services1 = () => {
	const items = getALlServices()?.slice(0, 4);
	return (
		<section id="services" className="tj-service-section section-gap section-gap-x sidebar-sticky-container hh-services-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="content-wrap sidebar-sticky">
							<div className="sec-heading">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
									<i className="tji-subtitle"></i>Hogyan lehetséges ez?
								</span>
								<h2 className="sec-title text-anim">
									A titkunk: Prémium technológia, okos rendszerekkel
								</h2>
							</div>
							<p className="desc wow fadeInUp" data-wow-delay=".3s">
								A legtöbb ügynökség lassú, mert elavult rendszerekkel dolgozik.
								<br />
								Mi Next.js alapokon, villámgyorsan és precízen szállítunk.
							</p>

							<div
								className="d-none d-lg-block wow fadeInUp"
								data-wow-delay=".4s"
							>
								<ButtonPrimary text="Részletek" url="#kapcsolat" />
							</div>
						</div>
					</div>
					<div className="col-lg-8">
						<div className="service-wrapper wow fadeInUp" data-wow-delay=".4s">
							{items?.length
								? items?.map((item, idx: number) => (
										<ServiceCard1 key={idx} item={item} idx={idx} />
								  ))
								: ""}
						</div>
						<div className="d-lg-none text-center mt-40">
							<ButtonPrimary text="Részletek" url="#kapcsolat" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services1;
