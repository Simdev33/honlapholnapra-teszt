"use client";

import getTextMarqueeItems from "@/libs/getTextMarqueeItems";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TextMarqueeSlider = () => {
	const items = getTextMarqueeItems();
	return (
		<div className="marquee-area">
			<Swiper
				slidesPerView="auto"
				spaceBetween={0}
				freeMode={true}
				centeredSlides={true}
				loop={true}
				speed={7000}
				allowTouchMove={false}
				autoplay={{
					delay: 1,
					disableOnInteraction: false,
				}}
				className="marquee-slider"
				modules={[Autoplay]}
			>
				{items?.length
					? items?.map(({ img = "tji-marquee-icon", title }, idx) => (
							<SwiperSlide key={idx} className="marquee-item">
								<h4 className="marquee-text">{title}</h4>
								<div className="marquee-icon">
									<i className={img}></i>
								</div>
							</SwiperSlide>
					  ))
					: ""}
			</Swiper>
		</div>
	);
};

export default TextMarqueeSlider;
