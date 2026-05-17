"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

const Contact2 = () => {
	const router = useRouter();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitError, setSubmitError] = useState<string | null>(null);
	const [project, setProject] = useState("Projekt típusa");

	const handleProjectChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setProject(event.target.value);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSubmitError(null);
		setIsSubmitting(true);
		const form = e.currentTarget;
		const formData = new FormData(form);

		const payload = {
			name: String(formData.get("name") ?? "").trim(),
			email: String(formData.get("email") ?? "").trim(),
			phone: String(formData.get("phone") ?? "").trim(),
			budget: String(formData.get("budget") ?? "").trim(),
			project: String(formData.get("project") ?? "").trim(),
			message: String(formData.get("message") ?? "").trim(),
		};

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			});

			if (!response.ok) {
				throw new Error("A küldés sikertelen volt.");
			}

			form.reset();
			router.push("/koszonjuk");
		} catch {
			setSubmitError("Valami hiba történt küldés közben. Kérlek próbáld újra.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="kapcsolat" className="contact-team-details section-gap-bottom hh-contact-section">
			<div className="container">
				<div className="contact-team-details-inner">
					<div className="row justify-content-between">
						<div className="col-xxl-5 col-lg-6">
							<div className="sec-heading">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-subtitle"></i>Kapcsolat
								</span>
								<h2 className="sec-title text-anim">
									Kezdjük el a projekted
								</h2>
								<p className="desc wow fadeInUp" data-wow-delay="0.3s">
									Írj nekünk, és 24 órán belül válaszolunk. Egy gyors konzultáció
									után pontos ajánlatot adunk a projektedre.
								</p>
								<h6
									className="contact-team-details-message wow fadeInUp"
									data-wow-delay="0.5s"
								>
									<Link href="mailto:support@ainex.com">
										{" "}
										<i className="tji-chat"></i>info@honlapholnapra.hu
									</Link>
								</h6>
							</div>
						</div>
						<div className="col-xxl-6 col-lg-6">
							<div className="contact-form">
								<form id="contact-form" onSubmit={handleSubmit}>
									<div className="row">
										<div className="col-sm-6">
											<div className="form-input">
												<input
													type="text"
													name="name"
													placeholder="Név *"
													required
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-input">
												<input
													type="email"
													name="email"
													placeholder="Email cím *"
													required
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-input">
												<input
													type="tel"
													name="phone"
													placeholder="Telefonszám"
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-input">
												<input
													type="text"
													name="budget"
													placeholder="pl. 200.000 - 300.000 Ft"
												/>
											</div>
										</div>
										<div className="col-sm-12">
											<div className="form-input">
												<select
													name="project"
													value={project}
													onChange={handleProjectChange}
													className="hh-contact-select"
												>
													<option value="Projekt típusa">Projekt típusa</option>
													<option value="Bemutatkozó oldal">Bemutatkozó oldal</option>
													<option value="Landing page">Landing page</option>
													<option value="Webshop">Webshop</option>
													<option value="Egyedi rendszer">Egyedi rendszer</option>
													<option value="SEO / Ads támogatás">SEO / Ads támogatás</option>
													<option value="Még nem tudom">Még nem tudom</option>
												</select>
											</div>
										</div>
										<div className="col-sm-12">
											<div className="form-input message-input">
												<textarea
													name="message"
													id="message"
													placeholder="Írd le röviden, milyen weboldalt szeretnél... *"
													required
												></textarea>
											</div>
										</div>
										<div className="submit-btn">
											<ButtonPrimary
												type="submit"
												text={isSubmitting ? "Küldés..." : "Üzenet küldése"}
											/>
										</div>
										{submitError ? (
											<div className="col-sm-12">
												<p className="text-danger mt-3">{submitError}</p>
											</div>
										) : null}
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact2;
