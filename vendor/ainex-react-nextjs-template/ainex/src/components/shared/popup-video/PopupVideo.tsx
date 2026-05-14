"use client";

import { ReactNode, useEffect } from "react";
interface PropType {
	children: ReactNode;
}
const PopupVideo = ({ children }: PropType) => {
	useEffect(() => {
		import("glightbox").then(({ default: GLightbox }) => {
			const lightbox = GLightbox({
				selector: ".glightbox",
			});
		});
	}, []);
	return children;
};

export default PopupVideo;
