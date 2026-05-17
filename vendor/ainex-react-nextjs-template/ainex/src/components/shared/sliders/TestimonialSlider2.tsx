"use client";
import getTestimonials from "@/libs/getTestimonials";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialsCard2 from "../cards/TestimonialsCard2";

const TestimonialSlider2 = () => {
	const showableItems = getTestimonials()?.slice(0, 3);
	const items = [...showableItems, ...showableItems];

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
			modules={[Pagination, Autoplay]}
			breakpoints={{
				576: {
					slidesPerView: 1.3,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
					centeredSlides: true,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 28,
					centeredSlides: true,
				},
			}}
			className="testimonial-slider-2"
		>
			{items?.length
				? items?.map((item, idx) => (
						<SwiperSlide key={idx}>
							<TestimonialsCard2 item={item} />
						</SwiperSlide>
				  ))
				: ""}
			<div className="swiper-pagination-area"></div>
		</Swiper>
	);
};

export default TestimonialSlider2;
