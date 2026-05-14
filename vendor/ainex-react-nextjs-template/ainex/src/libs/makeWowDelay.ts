const makeWowDelay = (
	delay: number = 0,
	startingDelay: number = 0,
	type: number = 0
) => {
	const delayFloat = parseFloat(delay < 10 ? `.${delay}` : `1.${delay}`);
	const wowDelay = delayFloat + startingDelay + (type === 2 ? 0 : delayFloat);
	return `${wowDelay.toFixed(1)}s`;
};

export default makeWowDelay;
