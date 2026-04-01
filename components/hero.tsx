"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { scrollToSectionHash } from "@/lib/scroll-to-section"

export function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="orb orb-purple -top-40 -left-40 h-[600px] w-[600px]" />
        <div className="orb orb-blue top-1/2 -right-40 h-[500px] w-[500px]" style={{ animationDelay: "-2s" }} />
        <div className="orb orb-pink bottom-20 left-1/4 h-[400px] w-[400px]" style={{ animationDelay: "-4s" }} />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[32%] bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.14),transparent_52%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_25%,rgba(168,85,247,0.11),transparent_24%),radial-gradient(circle_at_70%_35%,rgba(59,130,246,0.08),transparent_18%)]" />
      {/* Vignette a rács alá kerül; különben elnyeli a vonalakat */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,0,20,0.55)_72%,rgba(3,0,20,0.82)_100%)]" />

      <div className="hero-grid pointer-events-none absolute inset-0 z-[2]" />
      <div className="hero-grid-floor pointer-events-none absolute inset-x-[-12%] bottom-[-18%] z-[2] h-[54%]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-20 text-center">
        <div className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 animate-fade-in">
          <Sparkles className="h-4 w-4 text-[#a855f7]" />
          <span className="relative z-10 text-sm text-white/80">Weboldal akár 24 óra alatt</span>
        </div>

        <h1 className="mb-8 text-5xl font-bold tracking-tight leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="text-white">Professzionális</span>
          <br />
          <span className="bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#c084fc] bg-clip-text text-transparent">
            weboldal
          </span>
          <br />
          <span className="text-white">holnapra kész</span>
        </h1>

        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-white/55 sm:text-xl">
          Modern technológiákkal építünk gyors, reszponzív weboldalakat.
          <br className="hidden sm:block" />
          Next.js és React alapokon, 1 naptól 1 hétig elkészülve.
        </p>

        <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#kapcsolat"
            onClick={(e) => {
              e.preventDefault()
              scrollToSectionHash("#kapcsolat")
            }}
            className="group relative inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-2xl px-8 py-4 text-base font-semibold text-white gradient-purple glow-purple transition-transform hover:scale-105"
          >
            <span className="relative z-10">Ingyenes konzultáció</span>
            <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0" />
          </a>
          <a
            href="#munkamenet"
            onClick={(e) => {
              e.preventDefault()
              scrollToSectionHash("#munkamenet")
            }}
            className="glass-button inline-flex cursor-pointer items-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold text-white"
          >
            Hogyan dolgozunk?
          </a>
        </div>

        <div className="glass glass-panel mx-auto max-w-5xl rounded-[2rem] p-4 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "100+", label: "Elkészült projekt" },
              { value: "24h", label: "Leggyorsabb átfutás" },
              { value: "99%", label: "Ügyfél-elégedettség" },
              { value: "0 Ft", label: "Konzultáció" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card glass-panel rounded-2xl p-6 text-center">
                <div className="relative z-10 mb-2 text-3xl font-bold text-white sm:text-4xl">{stat.value}</div>
                <div className="relative z-10 text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-2">
          <div className="h-2 w-1 animate-bounce rounded-full bg-[#7c3aed]" />
        </div>
      </div>
    </section>
  )
}
