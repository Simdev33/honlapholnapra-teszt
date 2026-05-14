import { gsap, SplitText } from "@/libs/gsap.config";
const textReavealAnim = (): void => {
	const animItems = gsap.utils.toArray(".title-highlight");
	if (animItems.length) {
		const highlightText = new (SplitText as any)(animItems, {
			type: "lines",
			linesClass: "line",
		});

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".title-highlight",
				scrub: 1,
				start: "top 80%",
				end: "bottom center",
			},
		});
		tl.to(".line", {
			"--highlight-offset": "100%",
			stagger: 0.4,
		});
	}
};

export default textReavealAnim;
