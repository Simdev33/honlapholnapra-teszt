import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieConsent } from "@/components/cookie-consent"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Honlapholnapra.hu | Weboldal Készítés Gyorsan",
  description:
    "Professzionális weboldal készítés 1 naptól 1 hétig. Modern technológiákkal, Next.js és React alapokon építünk gyors és reszponzív weboldalakat.",
  keywords: "weboldal készítés, honlap készítés, next.js, react, webfejlesztés, magyar webfejlesztő",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased`}>
        {children}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
