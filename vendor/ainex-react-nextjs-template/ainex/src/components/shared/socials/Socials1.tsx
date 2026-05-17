import Link from "next/link";

const Socials1 = () => {
	return (
		<ul>
			<li>
				<Link href="https://www.facebook.com/" target="_blank">
					<i className="tji-facebook"></i>
				</Link>
			</li>
			<li>
				<Link href="https://www.linkedin.com/" target="_blank">
					<i className="tji-linkedin"></i>
				</Link>
			</li>
			<li>
				<Link href="https://www.instagram.com/" target="_blank">
					<i className="tji-instagram"></i>
				</Link>
			</li>
			<li>
				<Link href="https://x.com/" target="_blank">
					<i className="tji-x-twitter"></i>
				</Link>
			</li>
		</ul>
	);
};

export default Socials1;
