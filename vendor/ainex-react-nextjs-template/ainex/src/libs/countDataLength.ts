// Define parameter type
interface ParamType<T> {
	data: T[];
	filterKey: keyof T;
	filterValue?: string;
}

// Generic function
const countDataLength = <T>({
	data,
	filterKey,
	filterValue,
}: ParamType<T>): number => {
	if (!filterValue) return 0;
	const length = data?.filter(dataSingle => {
		const currentValue = dataSingle[filterKey];
		if (typeof currentValue !== "string") return false;
		return currentValue.toLowerCase() === filterValue.toLowerCase();
	})?.length;

	return length ?? 0;
};

export default countDataLength;
