const sliceText = (
	text: string,
	length: number,
	ext: boolean = true
): string => {
	return text.length > length
		? `${text.slice(0, ext ? length - 3 : length)}${ext ? "..." : ""}`
		: text;
};

export default sliceText;
