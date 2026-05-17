"use client";

import { FC, useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export interface FunfactProps {
	currentValue?: number;
	symbol?: string;
	sup?: string;
	type?: number;
}

// Custom hook to check if element is in viewport
const useIsInViewport = () => {
	const [isInViewport, setIsInViewport] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsInViewport(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, []);

	return { ref, isInViewport };
};

const FunfactSingle: FC<FunfactProps> = ({
	currentValue = 0,
	symbol = "",
	sup = "",
	type = 0,
}) => {
	const { ref, isInViewport } = useIsInViewport();

	return (
		<div
			ref={ref}
			className={`${type === 2 ? "experience-year" : "inline-content"}`}
		>
			{isInViewport ? (
				<CountUp
					start={0}
					end={currentValue}
					duration={1}
					delay={0}
					useEasing={false}
					className="counter"
				/>
			) : (
				<span className="counter">{currentValue}</span>
			)}

			{sup && <sup className={`${type === 2 ? "" : "count-plus"}`}>{sup}</sup>}
			{symbol && <span className="count-plus">{symbol}</span>}
		</div>
	);
};

export default FunfactSingle;
