"use client";
import getTestimonials from "@/libs/getTestimonials";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialsCard3 from "../cards/TestimonialsCard3";

const TestimonialSlider3 = () => {
	const showableItems = getTestimonials()?.slice(0, 3);
	const items = [...showableItems, ...showableItems];

	return (
		<Swiper
			slidesPerView={1}
			spaceBetween={15}
			loop={true}
			speed={1500}
			autoplay={{
				delay: 5000,
			}}
			pagination={{
				el: ".swiper-pagination-area",
				clickable: true,
			}}
			modules={[Pagination, Autoplay]}
			breakpoints={{
				576: {
					slidesPerView: 1.3,
					centeredSlides: true,
				},
				768: {
					slidesPerView: 1.7,
					spaceBetween: 20,
					centeredSlides: true,
				},
				992: {
					slidesPerView: 2.5,
					spaceBetween: 20,
					centeredSlides: true,
				},
				1200: {
					slidesPerView: 2.7,
					spaceBetween: 28,
					centeredSlides: true,
				},
			}}
			className="testimonial-slider-3"
		>
			{items?.length
				? items?.map((item, idx) => (
						<SwiperSlide key={idx}>
							<TestimonialsCard3 item={item} />
						</SwiperSlide>
				  ))
				: ""}
			<div className="swiper-pagination-area"></div>
		</Swiper>
	);
};

export default TestimonialSlider3;
