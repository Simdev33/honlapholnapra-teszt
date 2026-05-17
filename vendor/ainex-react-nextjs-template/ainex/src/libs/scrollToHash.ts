"use client";

const EXTRA_SCROLL_GAP_PX = 40;

function getElementHeight(selector: string): number {
	const element = document.querySelector(selector);
	if (!(element instanceof HTMLElement)) {
		return 0;
	}
	const computed = window.getComputedStyle(element);
	if (computed.display === "none" || computed.visibility === "hidden") {
		return 0;
	}
	return element.getBoundingClientRect().height;
}

function getScrollOffsetPx(): number {
	const topBarHeight = getElementHeight(".hh-has-fixed-topbar .header-top");
	const headerHeight =
		getElementHeight(".hh-has-fixed-topbar .header-area.sticky") ||
		getElementHeight(".hh-has-fixed-topbar .header-area.header-absolute");
	return topBarHeight + headerHeight + EXTRA_SCROLL_GAP_PX;
}

export function scrollToHash(href: string): boolean {
	const hashIndex = href.indexOf("#");
	if (hashIndex < 0 || hashIndex === href.length - 1) {
		return false;
	}
	const hash = href.slice(hashIndex);

	const target = document.querySelector(hash);
	if (!(target instanceof HTMLElement)) {
		return false;
	}

	const top = target.getBoundingClientRect().top + window.scrollY - getScrollOffsetPx();
	const nextUrl = `${window.location.pathname}${window.location.search}${hash}`;
	if (window.location.hash !== hash) {
		window.history.replaceState(null, "", nextUrl);
	}
	window.scrollTo({
		top: Math.max(top, 0),
		behavior: "smooth",
	});
	return true;
}
