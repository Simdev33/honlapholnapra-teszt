"use client";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Error({ error, reset }: any) {
	return (
		<div>
			<Header isStickyHeader={true} headerType={2} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<div className="top-gap-20"></div>
					<Header headerType={2} isNotAbsolute={true} />
					<main>
						<HeroInner title="Error 500" text="Error 500" />
						<section className="tj-error-section">
							<div className="container">
								<div className="row">
									<div className="col-12">
										<div className="tj-error-wrap text-center">
											<div className="tj-error-content">
												<h2 className="error-title text-anim">
													Opps! Something Went Wrong
												</h2>
												<div className="error-desc">
													A runtime error occurred in the application. Please
													retry or return to the previous page.
												</div>

												<button
													className="tj-primary-btn error-btn"
													onClick={() => reset()}
												>
													<div className="btn-inner">
														<span className="btn-icon h-icon">
															<i className="tji-home"></i>
														</span>
														<span className="btn-text">Try again</span>
														<span className="btn-icon">
															<i className="tji-arrow-right"></i>
														</span>
													</div>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<Cta />
					</main>
					<Footer />
					<div className="bottom-gap-30"></div>
				</div>
			</div>
			<ClientWrapper />
			<BackToTop />
		</div>
	);
}
