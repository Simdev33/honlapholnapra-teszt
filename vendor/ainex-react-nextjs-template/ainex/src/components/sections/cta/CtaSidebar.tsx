import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";

const CtaSidebar = () => {
	return (
		<div className="feature-box">
			<div className="feature-content">
				<h2 className="title">Transform with AI</h2>
				<p className="desc">
					Specialize delivering AI-powered solution revolutionize the
					businesses.
				</p>
				<ButtonPrimary text="Get Started" url="/contact" />
			</div>
			<div className="feature-images">
				<Image
					width={540}
					height={776}
					src="/images/service/ad-img.webp"
					alt=""
				/>
			</div>
		</div>
	);
};

export default CtaSidebar;
