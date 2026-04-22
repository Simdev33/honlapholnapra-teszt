declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
const googleAdsConversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL

export function trackLeadConversion() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return
  }

  if (!googleAdsId || !googleAdsConversionLabel) {
    return
  }

  window.gtag("event", "conversion", {
    send_to: `${googleAdsId}/${googleAdsConversionLabel}`,
  })

  window.gtag("event", "generate_lead", {
    event_category: "contact",
    event_label: "uzenet_kuldese",
  })
}
