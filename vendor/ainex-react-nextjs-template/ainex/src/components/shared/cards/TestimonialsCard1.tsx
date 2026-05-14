import { TestimonialType } from "@/libs/getTestimonials";
import Image from "next/image";
interface PropType {
	item: TestimonialType;
}
const TestimonialsCard1 = ({ item }: PropType) => {
	const {
		authorName,
		authorDesig,
		desc,
		img = "/images/testimonial/client-1.webp",
	} = item || {};
	return (
		<div className="testimonial-item">
			<div className="desc">
				<p>{desc}</p>
			</div>
			<div className="testimonial-author">
				<div className="author-inner">
					<div className="author-img">
						<Image
							width={120}
							height={120}
							style={{ height: "auto" }}
							src={img}
							alt="Image"
						/>
					</div>
					<div className="author-header">
						<h5 className="title">{authorName}</h5>
						<span className="designation">{authorDesig}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsCard1;
