import Link from "next/link";

const ContactTop = () => {
	return (
		<div className="tj-contact-area section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span className="sub-title">
								<i className="tji-subtitle"></i>Contact info
							</span>
							<h2 className="sec-title">Reach Out To Us</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div className="contact-item style-2">
							<div className="contact-icon">
								<i className="tji-location"></i>
							</div>
							<h3 className="contact-title">Our Location</h3>
							<p>993 Renner Burg, West Rond, MT 94251-030</p>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div className="contact-item style-2">
							<div className="contact-icon">
								<i className="tji-envelop"></i>
							</div>
							<h3 className="contact-title">Email us</h3>
							<ul className="contact-list">
								<li>
									<Link href="mailto:support@ainex.com">support@ainex.com</Link>
								</li>
								<li>
									<Link href="mailto:info@ainex.com">info@ainex.com</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div className="contact-item style-2">
							<div className="contact-icon">
								<i className="tji-phone"></i>
							</div>
							<h3 className="contact-title">Call us</h3>
							<ul className="contact-list">
								<li>
									<Link href="tel:10095447818">+1 (009) 544-7818</Link>
								</li>
								<li>
									<Link href="tel:10098801810">+1 (009) 880-1810</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div className="contact-item style-2">
							<div className="contact-icon">
								<i className="tji-chat"></i>
							</div>
							<h3 className="contact-title">Live chat</h3>
							<ul className="contact-list">
								<li>
									<Link href="mailto:livechat@ainex.com">
										livechat@ainex.com
									</Link>
								</li>
								<li className="active">
									<Link href="/contact">Need help?</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactTop;
