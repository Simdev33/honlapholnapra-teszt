import Image from "next/image";
import Link from "next/link";

const ErrorPrimary = () => {
	return (
		<section className="tj-error-section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="tj-error-wrap text-center">
							<div className="tj-error-content">
								<div className="error-img">
									<Image
										width={800}
										height={490}
										style={{ height: "auto" }}
										src="/images/404/error.webp"
										alt=""
									/>
								</div>
								<h2 className="error-title text-anim">Opps! Page Not Found</h2>
								<div className="error-desc">
									You are here because you entered the address of a page that no
									longer exists or has been moved to a different address
								</div>

								<Link className="tj-primary-btn error-btn" href="/">
									<div className="btn-inner">
										<span className="btn-icon h-icon">
											<i className="tji-home"></i>
										</span>
										<span className="btn-text">Back to Home Page</span>
										<span className="btn-icon">
											<i className="tji-home"></i>
										</span>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ErrorPrimary;
