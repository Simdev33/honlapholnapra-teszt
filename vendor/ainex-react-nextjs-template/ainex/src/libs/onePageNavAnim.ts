import { gsap } from "@/libs/gsap.config";

// contextSafe is a function that wraps a callback
type ContextSafeType = (callback: () => void) => () => void;

const onePageNavAnim = (contextSafe: ContextSafeType): void => {
	const animItems = gsap.utils.toArray<HTMLElement>(".tj-scroll-btn");

	if (animItems.length) {
		animItems.forEach((btn: HTMLElement) => {
			const onClickGood = contextSafe(() => {
				const sectionTarget = btn.getAttribute("data-target");
				if (!sectionTarget) return;

				// Ensure window exists (Next.js SSR-safe)
				gsap.to(window, {
					duration: 0.3,
					ease: "power2.out",
					scrollTo: { y: sectionTarget, offsetY: 70 },
				});
			});

			btn.addEventListener("click", onClickGood);
		});
	}
};

export default onePageNavAnim;
