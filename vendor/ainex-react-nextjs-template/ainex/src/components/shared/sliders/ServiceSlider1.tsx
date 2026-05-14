"use client";
import getALlServices from "@/libs/getALlServices";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard2 from "../cards/ServiceCard2";

const ServiceSlider1 = () => {
	const showableItems = getALlServices()?.slice(0, 4);
	const items = [...showableItems];
	return (
		<Swiper
			slidesPerView={1.15}
			spaceBetween={15}
			loop={true}
			speed={1500}
			autoplay={{
				delay: 4000,
			}}
			pagination={{
				el: ".swiper-pagination-area",
				clickable: true,
			}}
			breakpoints={{
				420: {
					slidesPerView: 1.4,
				},
				576: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 28,
				},
			}}
			modules={[Pagination, Autoplay]}
			className="service-slider"
		>
			{items?.length
				? items?.map((item, idx) => (
						<SwiperSlide key={idx}>
							<ServiceCard2 item={item} idx={idx} />
						</SwiperSlide>
				  ))
				: ""}
			<div className="swiper-pagination-area"></div>
		</Swiper>
	);
};

export default ServiceSlider1;
