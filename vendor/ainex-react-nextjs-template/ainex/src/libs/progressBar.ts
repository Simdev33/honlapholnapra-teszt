import { gsap } from "@/libs/gsap.config";

// Define a type for elements we expect
type ProgressContainer = HTMLElement;
type ProgressBar = HTMLElement;
type PercentText = HTMLElement;

const progressBar = () => {
	const progressContainers =
		gsap.utils.toArray<ProgressContainer>(".tj-progress");

	if (!progressContainers.length) return;

	progressContainers.forEach(progressContainer => {
		const targetedProgressBar =
			progressContainer.querySelector<ProgressBar>(".tj-progress-bar");

		if (!targetedProgressBar) return;

		const percentAttr = targetedProgressBar.getAttribute("data-percent");
		const completedPercent = percentAttr ? parseInt(percentAttr, 10) : 0;

		// GSAP initial state
		gsap.set(targetedProgressBar, { width: "0" });

		// GSAP animation
		gsap.to(targetedProgressBar, {
			width: `${completedPercent}%`,
			ease: "power2.out",
			duration: 2,
			scrollTrigger: {
				trigger: progressContainer,
				start: "top 90%",
				end: "top 30%",
			},
			onUpdate: function () {
				const progressValue = Math.round(this.progress() * 100);
				const displayPercent = Math.round(
					(completedPercent * progressValue) / 100
				);

				const percentageText = progressContainer.querySelector<PercentText>(
					".tj-progress-percent"
				);

				if (percentageText) {
					percentageText.textContent = `${displayPercent}%`;
				}
			},
		});
	});
};

export default progressBar;
