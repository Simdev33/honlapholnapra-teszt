import BootstrapWrapper from "../wrappers/BootstrapWrapper";
import FaqItem from "./FaqItem";

const FaqCommon = () => {
	const items = [
		{
			title: "Are you licensed and insured?",
			desc: "Yes, absolutely. Our company is fully licensed and insured to operate in the AI and technology solutions sector. We comply with all industry standards and local regulations to ensure the safety, legality, and quality of our work. Whether we're developing custom AI applications, you can trust that you're working with certified professionals.",
			initActive: true,
		},
		{
			title: "Do you offer emergency services?",
			desc: "Absolutely! We provide 24/7 emergency electrical services to address urgent issues and keep your home or business safe. Signs include frequent circuit breaker trips, flickering lights, outdated fuse boxes, or the inability to handle modern appliances. Electrical services to address urgent issues and home or business.",
			initActive: false,
		},
		{
			title: "How long will my project take?",
			desc: "Project timelines can vary depending on complexity, scope, and integration needs. For example, a basic AI chatbot might be delivered within a week, while a full-scale smart automation system or data-driven AI solution may take several weeks to complete. After an initial consultation, we’ll provide a detailed project roadmap with milestones.",
			initActive: false,
		},
		{
			title: "Do you handle smart home installations?",
			desc: "Yes, we do! In addition to AI software solutions, we offer full smart home installation services. This includes setting up AI-powered security systems, voice-controlled automation, climate control, and more. Our team ensures seamless integration with your existing systems for a smarter, more connected living experience.",
			initActive: false,
		},
		{
			title: "How can I schedule an appointment?",
			desc: "Scheduling an appointment is simple. You can book directly through our website using the scheduling form, or contact us via phone or email. One of our representatives will reach out promptly to confirm your details and set up a convenient time. We also offer virtual appointments for initial project discussions.",
			initActive: false,
		},
	];
	return (
		<BootstrapWrapper>
			<div className="accordion tj-faq style-2" id="faqOne">
				{items?.length
					? items?.map((item, idx) => (
							<FaqItem key={idx} item={item} idx={idx} />
					  ))
					: ""}
			</div>
		</BootstrapWrapper>
	);
};

export default FaqCommon;
