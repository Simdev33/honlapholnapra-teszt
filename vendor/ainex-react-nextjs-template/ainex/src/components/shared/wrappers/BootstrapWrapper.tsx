"use client";

import { ReactNode, useEffect } from "react";
interface BootstrapWrapperProps {
	children: ReactNode;
}
const BootstrapWrapper = ({ children }: BootstrapWrapperProps) => {
	useEffect(() => {
		import("bootstrap/dist/js/bootstrap.bundle.min.js");
	}, []);

	return <>{children}</>;
};

export default BootstrapWrapper;
