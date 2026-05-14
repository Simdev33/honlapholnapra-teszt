import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "./assets/css/ainex-icons.css";
import "./assets/css/animate.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/glightbox.min.css";
import "./assets/css/meanmenu.css";
import "./assets/css/nice-select2.css";
import "./globals.scss";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	variable: "--tj-ff-heading",
});

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700", "900"],
	style: ["normal", "italic"],
	variable: "--tj-ff-body",
});

export const metadata: Metadata = {
	title: "Ainex - AI Agency & Technology React NextJs Template",
	description: "Ainex - AI Agency & Technology React NextJs Template",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} ${roboto.variable}`}>
				{children}
			</body>
		</html>
	);
}
