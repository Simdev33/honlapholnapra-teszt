/**
 * Fix fejléc miatti offset görgetéskor. Ugyanaz a logika, mint a headerben.
 * Nagyobb érték → kevesebbet görget (a cím feljebb esik a nézetben).
 */
export const SECTION_SCROLL_OFFSET_DESKTOP_PX = 88
export const SECTION_SCROLL_OFFSET_MOBILE_PX = 96
export const SECTION_SCROLL_LG_MIN_WIDTH_PX = 1024

export function getSectionScrollOffsetPx(): number {
  if (typeof window === "undefined") {
    return SECTION_SCROLL_OFFSET_DESKTOP_PX
  }
  return window.matchMedia(`(min-width: ${SECTION_SCROLL_LG_MIN_WIDTH_PX}px)`).matches
    ? SECTION_SCROLL_OFFSET_DESKTOP_PX
    : SECTION_SCROLL_OFFSET_MOBILE_PX
}

/** Ugyanazon oldalon lévő #szekcióhoz görget (Next.js Link hash nélkül gyakran nem működik). */
export function scrollToSectionHash(href: string): boolean {
  if (!href.startsWith("#") || href.length < 2) {
    return false
  }

  const target = document.querySelector(href)
  if (!(target instanceof HTMLElement)) {
    return false
  }

  const top = target.getBoundingClientRect().top + window.scrollY - getSectionScrollOffsetPx()
  window.history.replaceState(null, "", href)
  window.scrollTo({
    top: Math.max(top, 0),
    behavior: "smooth",
  })
  return true
}
