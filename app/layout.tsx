import type { Metadata } from "next"
import { Poppins, Roboto } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { CookieConsent } from "@/components/cookie-consent"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"
import "@/vendor/ainex-react-nextjs-template/ainex/src/app/assets/css/ainex-icons.css"
import "@/vendor/ainex-react-nextjs-template/ainex/src/app/assets/css/animate.min.css"
import "@/vendor/ainex-react-nextjs-template/ainex/src/app/assets/css/bootstrap.min.css"
import "@/vendor/ainex-react-nextjs-template/ainex/src/app/assets/css/glightbox.min.css"
import "@/vendor/ainex-react-nextjs-template/ainex/src/app/assets/css/meanmenu.css"
import "@/vendor/ainex-react-nextjs-template/ainex/src/app/assets/css/nice-select2.css"
import "@/vendor/ainex-react-nextjs-template/ainex/src/app/globals.scss"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--tj-ff-heading",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  variable: "--tj-ff-body",
})

export const metadata: Metadata = {
  title: "Honlapholnapra.hu | Honlap. Holnapra.",
  description:
    "Professzionális weboldal készítés 1 naptól 1 hétig. Modern technológiákkal, Next.js és React alapokon építünk gyors és reszponzív weboldalakat.",
  keywords: "weboldal készítés, honlap készítés, next.js, react, webfejlesztés, magyar webfejlesztő",
  icons: {
    icon: [{ url: "/Honlapholnapra_logo_small.webp", type: "image/webp" }],
    shortcut: "/Honlapholnapra_logo_small.webp",
    apple: "/Honlapholnapra_logo_small.webp",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
  const gtagId = gaMeasurementId || googleAdsId

  return (
    <html lang="hu">
      {gtagId ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`} strategy="afterInteractive" />
          <Script id="google-gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              ${gaMeasurementId ? `gtag('config', '${gaMeasurementId}');` : ""}
              ${googleAdsId ? `gtag('config', '${googleAdsId}');` : ""}
            `}
          </Script>
        </>
      ) : null}
      <body className={`${poppins.variable} ${roboto.variable}`}>
        {children}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
