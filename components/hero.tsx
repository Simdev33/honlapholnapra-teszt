"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { scrollToSectionHash } from "@/lib/scroll-to-section"

export function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="orb orb-purple -top-40 -left-40 h-[600px] w-[600px]" />
        <div className="orb orb-blue top-1/2 -right-40 h-[500px] w-[500px]" style={{ animationDelay: "-2s" }} />
        <div className="orb orb-pink bottom-20 left-1/4 h-[400px] w-[400px]" style={{ animationDelay: "-4s" }} />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[32%] bg-[radial-gradient(circle_at_50%_0%,rgba(255,11,136,0.2),transparent_52%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,11,136,0.14),transparent_24%),radial-gradient(circle_at_70%_35%,rgba(157,77,255,0.16),transparent_18%)]" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(9,3,30,0.25)_72%,rgba(6,2,20,0.78)_100%)]" />

      <div className="hero-grid pointer-events-none absolute inset-0 z-[2]" />
      <div className="hero-grid-floor pointer-events-none absolute inset-x-[-12%] bottom-[-18%] z-[2] h-[54%]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-6 pb-20 pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <div className="glass mb-7 inline-flex items-center gap-2 rounded-full px-4 py-2">
            <Sparkles className="h-4 w-4 text-fuchsia-400" />
            <span className="relative z-10 text-sm font-medium text-indigo-100">Weboldal akár 24 óra alatt</span>
          </div>

          <h1 className="mb-7 text-5xl font-bold leading-[1.02] tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
            Szó szerint értjük:
            <br />
            <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
              Honlap. Holnapra.
            </span>
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Nem csak egy hangzatos szlogen. Letisztult, villámgyors és konverzióra optimalizált Next.js
            weboldaladat projektmérettől függően akár ténylegesen 24 óra alatt átadjuk. Prémium minőség,
            kompromisszumok és hetekig tartó várakozás nélkül.
          </p>

          <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row">
            <a
              href="#kapcsolat"
              onClick={(e) => {
                e.preventDefault()
                scrollToSectionHash("#kapcsolat")
              }}
              className="ainex-cta-btn w-full sm:w-auto"
            >
              <span>Kérek egy azonnali ajánlatot!</span>
              <span className="ainex-cta-icon">
                <ArrowRight className="h-5 w-5" />
              </span>
            </a>
            <a
              href="#munkamenet"
              onClick={(e) => {
                e.preventDefault()
                scrollToSectionHash("#munkamenet")
              }}
              className="glass-button inline-flex cursor-pointer items-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold text-slate-800"
            >
              Hogyan dolgozunk?
            </a>
          </div>

          <div className="grid max-w-2xl gap-4 sm:grid-cols-2">
            {[
              { value: "100+", label: "Elkészült projekt" },
              { value: "24h", label: "Leggyorsabb átfutás" },
              { value: "99%", label: "Ügyfél-elégedettség" },
              { value: "0 Ft", label: "Konzultáció" },
            ].map((stat) => (
              <div key={stat.label} className="glass-panel rounded-2xl border border-fuchsia-400/30 bg-[#160826] p-5 shadow-[0_12px_30px_rgba(2,0,14,0.45)]">
                <div className="mb-1 text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass glass-panel gradient-border rounded-[2rem] p-6 sm:p-8">
          <div className="relative z-10">
            <p className="mb-3 inline-flex rounded-full border border-fuchsia-400/45 bg-fuchsia-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-fuchsia-300">
              Gyors indulás
            </p>
            <h3 className="mb-3 text-2xl font-bold text-slate-900 sm:text-3xl">Ainex stílus, Honlap Holnapra tartalom</h3>
            <p className="mb-7 leading-relaxed text-slate-600">
              Modern, agency-szintű megjelenés, átlátható blokkok, erős CTA-k, és fókusz a konverzión.
              Ugyanaz az üzenet, új vizuális szint.
            </p>
            <div className="space-y-3">
              {["Prémium UI komponensek", "Konverziófókuszú CTA-k", "Modern kártya- és gombstílus"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-fuchsia-400/30 bg-[#140d38]/82 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-violet-400" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-fuchsia-400/35 bg-[#140d38]/90 p-2 shadow-[0_8px_20px_rgba(2,0,14,0.38)]">
          <div className="h-2 w-1 animate-bounce rounded-full bg-fuchsia-400" />
        </div>
      </div>
    </section>
  )
}
