"use client";
import { useEffect, useState } from "react";

const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const handleScroll = () => {
			const scrollTop =
				window.pageYOffset ||
				document.documentElement.scrollTop ||
				document.body.scrollTop ||
				0;

			setIsVisible(scrollTop > 300);
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // run once initially

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const scrollToTop = () => {
		if (typeof window === "undefined") return;

		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div
			onClick={scrollToTop}
			className={`back-to-top-wrapper ${
				isVisible ? "back-to-top-btn-show" : ""
			}`}
		>
			<button id="back_to_top" type="button" className="back-to-top-btn">
				<span>
					<i className="tji-rocket"></i>
				</span>
			</button>
		</div>
	);
};

export default BackToTop;
