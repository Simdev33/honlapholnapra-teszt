"use client";
import getPortfolio from "@/libs/getPortfolio";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PortfolioCard1 from "../cards/PortfolioCard1";

const PortfoliosSlider1 = () => {
	const showableItems = getPortfolio()?.slice(0, 4);
	const items = [...showableItems, ...showableItems];

	return (
		<Swiper
			initialSlide={1}
			slidesPerView={1.15}
			spaceBetween={15}
			loop={true}
			speed={1500}
			loopAdditionalSlides={4}
			autoplay={{
				delay: 3000,
			}}
			pagination={{
				el: ".swiper-pagination-area",
				clickable: true,
			}}
			breakpoints={{
				576: {
					slidesPerView: 1.25,
					spaceBetween: 20,
					centeredSlides: true,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 30,
					centeredSlides: false,
				},
			}}
			modules={[Pagination, Autoplay]}
			className="project-slider"
		>
			{items?.length
				? items?.map((item, idx) => (
						<SwiperSlide key={idx}>
							<PortfolioCard1 item={item} />
						</SwiperSlide>
				  ))
				: ""}
			<div className="swiper-pagination-area"></div>
		</Swiper>
	);
};

export default PortfoliosSlider1;
