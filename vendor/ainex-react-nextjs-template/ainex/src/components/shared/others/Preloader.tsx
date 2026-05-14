import Image from "next/image";

const Preloader = () => {
	return (
		<div className="preloader">
			<div className="loading-container">
				<div className="loading"></div>
				<div id="loading-icon">
					<Image
						width={73}
						height={76}
						style={{ height: "auto" }}
						src="/images/logos/logo-icon.webp"
						alt="Loading"
					/>
				</div>
			</div>
		</div>
	);
};

export default Preloader;
