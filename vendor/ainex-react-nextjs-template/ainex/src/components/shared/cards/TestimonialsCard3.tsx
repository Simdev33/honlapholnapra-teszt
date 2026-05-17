import { TestimonialType } from "@/libs/getTestimonials";
import Image from "next/image";
interface PropType {
	item: TestimonialType;
}
const TestimonialsCard3 = ({ item }: PropType) => {
	const {
		authorName,
		authorDesig,
		desc3,
		img2 = "/images/testimonial/client-4.webp",
	} = item || {};
	return (
		<div className="testimonial-item-wrap">
			<div className="testimonial-item style-3">
				<span className="quote-icon">
					<i className="tji-quote"></i>
				</span>
				<div className="desc">
					<p>{desc3}</p>
				</div>
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
							<h4 className="title">{authorName}</h4>
							<span className="designation">{authorDesig}</span>
						</div>
					</div>
				</div>
				<div className="circle-shape"></div>
			</div>
		</div>
	);
};

export default TestimonialsCard3;
