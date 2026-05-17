"use client";
import getTestimonials from "@/libs/getTestimonials";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialsCard1 from "../cards/TestimonialsCard1";

const TestimonialSlider1 = () => {
	const items = getTestimonials()?.slice(0, 3);

	return (
		<Swiper
			slidesPerView={1}
			spaceBetween={28}
			loop={true}
			speed={1500}
			autoplay={{
				delay: 5000,
			}}
			navigation={{
				nextEl: ".slider-next",
				prevEl: ".slider-prev",
			}}
			pagination={{
				el: ".swiper-pagination-area",
				clickable: true,
			}}
			modules={[Pagination, Autoplay, Navigation]}
			className="swiper-container testimonial-slider"
		>
			{items?.length
				? items?.map((item, idx) => (
						<SwiperSlide key={idx}>
							<TestimonialsCard1 item={item} />
						</SwiperSlide>
				  ))
				: ""}
			<div className="swiper-pagination-area pagination-1"></div>
		</Swiper>
	);
};

export default TestimonialSlider1;
