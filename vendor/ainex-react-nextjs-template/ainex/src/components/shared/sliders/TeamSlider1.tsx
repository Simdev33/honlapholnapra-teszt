"use client";
import getTeamMembers from "@/libs/getTeamMembers";
import { useMemo } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TeamCard from "../cards/TeamCard";

const TeamSlider1 = () => {
	const items = useMemo(() => getTeamMembers()?.slice(0, 5) || [], []);

	return (
		<Swiper
			slidesPerView={1.15}
			spaceBetween={15}
			loop={true}
			speed={800}
			autoplay={{
				delay: 3000,
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
			breakpoints={{
				576: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1200: {
					slidesPerView: 4,
					spaceBetween: 28,
				},
			}}
			className="team-slider"
		>
			{items?.length
				? items?.map((item, idx) => (
						<SwiperSlide key={idx}>
							<TeamCard item={item} />
						</SwiperSlide>
				  ))
				: ""}
			<div className="swiper-pagination-area"></div>
		</Swiper>
	);
};

export default TeamSlider1;
