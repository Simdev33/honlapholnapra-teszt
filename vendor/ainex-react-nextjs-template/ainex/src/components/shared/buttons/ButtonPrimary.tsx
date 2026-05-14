"use client";

import Link from "next/link";

interface ButtonPrimaryProps {
	className?: string;
	text: string;
	isTextBtn?: boolean;
	url?: string;
	type?: "button" | "submit" | "reset";
	iconName?: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
	className = "",
	text,
	isTextBtn = false,
	url = "/",
	type,
	iconName,
}) => {
	const btnIcon = iconName ? iconName : "tji-arrow-right";

	return type ? (
		<button type={type} className={`tj-primary-btn ${className}`}>
			<div className="btn-inner">
				<span className="btn-icon h-icon">
					<i className={btnIcon}></i>
				</span>
				<span className="btn-text">{text}</span>
				<span className="btn-icon">
					<i className={btnIcon}></i>
				</span>
			</div>
		</button>
	) : (
		<Link
			href={url}
			className={`${isTextBtn ? "text-btn" : "tj-primary-btn"} ${className}`}
		>
			<div className="btn-inner">
				<span className="btn-icon h-icon">
					<i className={btnIcon}></i>
				</span>
				<span className="btn-text">{text}</span>
				<span className="btn-icon">
					<i className={btnIcon}></i>
				</span>
			</div>
		</Link>
	);
};

export default ButtonPrimary;
