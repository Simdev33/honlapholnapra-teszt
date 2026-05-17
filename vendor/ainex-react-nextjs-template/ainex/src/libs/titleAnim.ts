import { gsap, SplitText } from "@/libs/gsap.config";

const titleAnim = () => {
	const animItems = gsap.utils.toArray<HTMLElement>(".text-anim");
	if (animItems.length > 0) {
		const staggerAmount = 0.02;
		const translateXValue = 20;
		const delayValue = 0.3;
		const easeType = "power2.out";
		animItems.forEach(element => {
			element.classList.add("start-anim");
			const split = new (SplitText as any)(element, {
				types: "chars, words",
			});

			gsap.from(split.chars, {
				duration: 1,
				delay: delayValue,
				x: translateXValue,
				autoAlpha: 0,
				stagger: staggerAmount,
				ease: easeType,
				scrollTrigger: {
					trigger: element,
					start: "top 85%",
				},
			});
		});
	}
};

export default titleAnim;
