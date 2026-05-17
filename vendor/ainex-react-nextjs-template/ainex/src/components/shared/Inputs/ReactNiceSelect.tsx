"use client";

import { useEffect, useState } from "react";

export interface NiceSelectOptionType {
	value: string | number;
	optionName: string;
}

interface ReactNiceSelectProps {
	options: NiceSelectOptionType[];
	selectedIndex?: number;
	getSelectedOption?: (option: NiceSelectOptionType) => void;
	className?: string;
}

const ReactNiceSelect = ({
	options = [],
	selectedIndex = 0,
	getSelectedOption = () => {},
	className,
}: ReactNiceSelectProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState<
		NiceSelectOptionType | undefined
	>(options[0]);
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [isFocused, setIsFocused] = useState(true);

	// Sync with selectedIndex
	useEffect(() => {
		setSelectedOption(options[selectedIndex]);
		setCurrentIndex(selectedIndex);
	}, [options, selectedIndex]);

	const { value, optionName } = selectedOption || {};

	const handleSelect = (option: NiceSelectOptionType, idx: number) => {
		setIsFocused(true);
		setCurrentIndex(idx);
		setSelectedOption(option);
		getSelectedOption(option);
	};

	return (
		<div
			data-lenis-prevent
			className={`nice-select orderby ${isOpen ? "open" : ""} ${
				className ? className : ""
			}`}
			tabIndex={0}
			onClick={() => setIsOpen(prev => !prev)}
			onBlur={() => setIsOpen(false)}
		>
			<span className="current">{optionName || ""}</span>

			<div className="nice-select-dropdown">
				<ul className="list">
					{options.length > 0 &&
						options.map((option, idx) => (
							<li
								key={idx}
								data-value={option.value}
								className={`option ${currentIndex === idx ? "selected" : ""} ${
									currentIndex === idx && isFocused ? "focus" : ""
								}`}
								onClick={() => handleSelect(option, idx)}
								onBlur={() => setIsFocused(false)}
							>
								{option.optionName}
							</li>
						))}
				</ul>
			</div>
		</div>
	);
};

export default ReactNiceSelect;
