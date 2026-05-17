"use client";

import initSmoothScroller from "@/libs/initSmoothScroller";
import onePageNavAnim from "@/libs/onePageNavAnim";
import progressBar from "@/libs/progressBar";
import sidebarSticky from "@/libs/sidebarSticky";
import textReavealAnim from "@/libs/textReavealAnim";
import titleAnim from "@/libs/titleAnim";
import tjStackAnimation from "@/libs/tjStackAnimation";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
type ContextSafeType = (callback: () => void) => () => void;
const ClientWrapper: React.FC = () => {
	useEffect(() => {
		import("wow.js").then(module => {
			const WOW = module.default as any;
			new WOW().init();
		});
	}, []);
	useGSAP((context, contextSafe) => {
		initSmoothScroller();
		titleAnim();
		textReavealAnim();
		sidebarSticky();
		onePageNavAnim(contextSafe as ContextSafeType);
		tjStackAnimation();
		progressBar();
	});
	return null;
};

export default ClientWrapper;
