import FaqCommon from "@/components/shared/faq/FaqCommon";
import FaqItem from "@/components/shared/faq/FaqItem";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Image from "next/image";
interface PropType {
	type?: number;
}
const Faq3 = ({ type }: PropType) => {
	const items = [
		{
			title: "What services does your agency offer?",
			desc: "We provide end-to-end AI and technology consulting services, including AI strategy development, custom software solutions, machine learning model deployment, data analysis, automation integration, and smart system design. Whether you need a full-scale digital transformation or a targeted AI feature, we’ve got you covered.",
			initActive: true,
		},
		{
			title: "Who can benefit from your AI services?",
			desc: "Our services are ideal for businesses of all sizes looking to enhance efficiency, improve decision-making, and leverage AI to drive innovation. This includes industries like healthcare, finance, retail, and manufacturing. Our services are ideal for businesses of all sizes looking to enhance efficiency, improve decision-making, and leverage AI to drive innovation.",
			initActive: false,
		},
		{
			title: "What types of AI solutions do you specialize?",
			desc: "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we’ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
			initActive: false,
		},
		{
			title: "How does your AI technology improve business?",
			desc: "Our AI technology helps businesses automate repetitive tasks, make smarter decisions with data-driven insights, personalize customer experiences, reduce operational costs, and increase overall efficiency. From marketing to logistics, we tailor AI to drive measurable impact across departments.",
			initActive: false,
		},
		{
			title: "Do you offer custom AI solutions?",
			desc: "Yes, we specialize in building custom AI solutions tailored to your business goals and industry needs. Our team works closely with clients to understand their challenges and develop AI models, applications, or systems that deliver real value and performance.",
			initActive: false,
		},
	];
	return (
		<section
			className={`tj-faq-section${
				type === 2 ? "-2" : " section-gap-x"
			} section-gap`}
		>
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-5 order-2 order-lg-1">
						<div className="faq-img wow fadeInLeft" data-wow-delay=".3s">
							<Image
								width={722}
								height={1113}
								src="/images/faq/faq.webp"
								alt=""
							/>
						</div>
					</div>
					<div className="col-lg-7 order-1 order-lg-2">
						<div className={`sec-heading ${type === 2 ? "" : "style-2"}`}>
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
								{type === 2 ? <i className="tji-subtitle"></i> : ""}
								Support & FAQs
							</span>
							<h2 className="sec-title text-anim">
								Explore Our FAQs to Get Quick Answers
							</h2>
						</div>
						{type === 2 ? (
							<FaqCommon />
						) : (
							<BootstrapWrapper>
								<div className={`accordion tj-faq`} id="faqOne">
									{items?.length
										? items?.map((item, idx) => (
												<FaqItem key={idx} item={item} idx={idx} />
										  ))
										: ""}
								</div>
							</BootstrapWrapper>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq3;
