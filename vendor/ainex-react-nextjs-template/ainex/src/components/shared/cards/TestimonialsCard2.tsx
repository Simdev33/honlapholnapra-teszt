import { TestimonialType } from "@/libs/getTestimonials";
import Image from "next/image";
interface PropType {
	item: TestimonialType;
}
const TestimonialsCard2 = ({ item }: PropType) => {
	const {
		authorName,
		authorDesig,
		desc2,
		img2 = "/images/testimonial/client-4.webp",
	} = item || {};
	return (
		<div className="testimonial-item-wrap">
			<div className="testimonial-item style-2">
				<span className="quote-icon">
					<i className="tji-quote"></i>
				</span>
				<div className="testimonial-author">
					<div className="author-inner">
						<div className="author-img">
							<Image
								width={120}
								height={120}
								style={{ height: "auto" }}
								src={img2}
								alt="Image"
							/>
						</div>
						<div className="author-header">
							<h5 className="title">{authorName}</h5>
							<span className="designation">{authorDesig}</span>
						</div>
					</div>
				</div>
				<div className="desc">
					<p>{desc2}</p>
				</div>
				<div className="rating-area">
					<div className="star-ratings">
						<div className="fill-ratings">
							<span>★★★★★</span>
						</div>
						<div className="empty-ratings">
							<span>★★★★★</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsCard2;
