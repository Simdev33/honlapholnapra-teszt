"use client";

import { CalendarDays } from "lucide-react";
import Link from "next/link";
import { FC, FormEvent, useMemo, useRef, useState } from "react";

interface HeaderTopProps {
	type?: number;
}

const HeaderTop: FC<HeaderTopProps> = ({ type }) => {
	const [isBookingOpen, setIsBookingOpen] = useState(false);
	const [selectedDate, setSelectedDate] = useState("");
	const [selectedTime, setSelectedTime] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitError, setSubmitError] = useState<string | null>(null);
	const dateInputRef = useRef<HTMLInputElement>(null);

	const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);
	const timeSlots = useMemo(
		() =>
			Array.from({ length: 10 }, (_, i) => {
				const hour = 9 + i;
				const start = `${hour.toString().padStart(2, "0")}:00`;
				const end = `${(hour + 1).toString().padStart(2, "0")}:00`;
				return `${start}-${end}`;
			}),
		[]
	);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setSubmitted(false);
		setSubmitError(null);
		setIsSubmitting(true);

		try {
			const response = await fetch("/api/booking", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					date: selectedDate,
					time: selectedTime,
					name,
					email,
					phone,
				}),
			});

			if (!response.ok) {
				throw new Error("A küldés sikertelen volt.");
			}

			setSubmitted(true);
			setSelectedDate("");
			setSelectedTime("");
			setName("");
			setEmail("");
			setPhone("");
		} catch {
			setSubmitError("Valami hiba történt küldés közben. Kérlek próbáld újra.");
		} finally {
			setIsSubmitting(false);
		}
	};

	const openDatePicker = () => {
		if (!dateInputRef.current) {
			return;
		}
		const input = dateInputRef.current as HTMLInputElement & { showPicker?: () => void };
		if (typeof input.showPicker === "function") {
			input.showPicker();
		} else {
			input.focus();
		}
	};

	return (
		<>
			<div
				className={`header-top${type === 2 ? " style-2" : ""}`}
				style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 2000 }}
			>
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<div className="header-top-content">
								<div style={{ position: "relative" }}>
									<button
										type="button"
										onClick={() => setIsBookingOpen((prev) => !prev)}
										style={{
											display: "inline-flex",
											alignItems: "center",
											gap: "8px",
											padding: "8px 14px",
											borderRadius: "999px",
											border: "1px solid rgba(255, 29, 156, 0.45)",
											background: "rgba(255, 29, 156, 0.12)",
											color: "#f7f4ff",
											fontSize: "13px",
											fontWeight: 600,
										}}
									>
										<CalendarDays size={16} color="#ff0b88" />
										Foglalj ingyenes megbeszélést
									</button>

									{isBookingOpen && (
										<div
											style={{
												position: "absolute",
												top: "calc(100% + 10px)",
												left: 0,
												width: "calc(100vw - 24px)",
												minWidth: "min(420px, calc(100vw - 24px))",
												maxWidth: "560px",
												padding: "12px",
												borderRadius: "12px",
												border: "1px solid rgba(255, 29, 156, 0.35)",
												background: "rgba(11, 1, 20, 0.98)",
												boxShadow: "0 10px 28px rgba(0,0,0,0.35)",
												zIndex: 1000,
											}}
										>
											<form
												onSubmit={handleSubmit}
												style={{ display: "grid", gap: "8px", gridTemplateColumns: "1fr 1fr" }}
											>
												<div style={{ position: "relative" }}>
													<input
														ref={dateInputRef}
														className="hh-booking-date-input"
														type="date"
														min={minDate}
														value={selectedDate}
														onChange={(e) => setSelectedDate(e.target.value)}
														required
														style={{ ...inputStyle, paddingRight: "42px", width: "100%" }}
													/>
													<button
														type="button"
														onClick={openDatePicker}
														aria-label="Naptár megnyitása"
														style={calendarButtonStyle}
													>
														<CalendarDays size={15} />
													</button>
												</div>
												<select
													value={selectedTime}
													onChange={(e) => setSelectedTime(e.target.value)}
													required
													style={inputStyle}
												>
													<option value="">Idősáv</option>
													{timeSlots.map((slot) => (
														<option key={slot} value={slot}>
															{slot}
														</option>
													))}
												</select>
												<input
													type="text"
													placeholder="Név"
													value={name}
													onChange={(e) => setName(e.target.value)}
													required
													style={inputStyle}
												/>
												<input
													type="email"
													placeholder="Email cím"
													value={email}
													onChange={(e) => setEmail(e.target.value)}
													required
													style={inputStyle}
												/>
												<input
													type="tel"
													placeholder="Mobilszám"
													value={phone}
													onChange={(e) => setPhone(e.target.value)}
													required
													style={{ ...inputStyle, gridColumn: "1 / -1" }}
												/>
												<button type="submit" style={submitStyle} disabled={isSubmitting}>
													{isSubmitting ? "Küldés..." : "Időpont foglalása"}
												</button>
											</form>
											{submitError && (
												<p style={{ margin: "8px 0 0", color: "#fda4af", fontSize: "12px" }}>
													{submitError}
												</p>
											)}
											{submitted && (
												<p style={{ margin: "8px 0 0", color: "#86efac", fontSize: "12px" }}>
													Rögzítettük a kérést, hamarosan visszaigazolunk emailben.
												</p>
											)}
										</div>
									)}
								</div>
								<div className="header-info">
									<div className="info-item">
										<span>
											<i className="tji-envelop-2"></i>
										</span>
										<Link href="mailto:info@honlapholnapra.hu">info@honlapholnapra.hu</Link>
									</div>
									<div className="info-item">
										<span>
											<i className="tji-phone-2"></i>
										</span>
										<Link href="tel:+36301940601">+36 30 194 0601</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div style={{ height: "52px" }} />
		</>
	);
};

const inputStyle: React.CSSProperties = {
	padding: "8px 10px",
	borderRadius: "8px",
	border: "1px solid rgba(255,255,255,0.2)",
	background: "rgba(22, 8, 38, 0.95)",
	color: "#ffffff",
	fontSize: "13px",
};

const submitStyle: React.CSSProperties = {
	gridColumn: "1 / -1",
	padding: "9px 12px",
	borderRadius: "8px",
	border: "1px solid rgba(255, 29, 156, 0.65)",
	background: "linear-gradient(90deg, #ff0b88 0%, #a95cff 100%)",
	color: "#fff",
	fontSize: "13px",
	fontWeight: 700,
	cursor: "pointer",
};

const calendarButtonStyle: React.CSSProperties = {
	position: "absolute",
	right: "8px",
	top: "50%",
	transform: "translateY(-50%)",
	height: "26px",
	width: "26px",
	borderRadius: "6px",
	border: "1px solid rgba(255,255,255,0.25)",
	background: "rgba(255,255,255,0.08)",
	color: "#fff",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	cursor: "pointer",
};

export default HeaderTop;
