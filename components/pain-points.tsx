"use client"

import { Gauge, Search, Zap } from "lucide-react"

const painPoints = [
  {
    icon: Zap,
    problem: 'A probléma: "Kifutok az időből, azonnal kell egy oldal a kampányomhoz!"',
    solutionTitle: "A mi megoldásunk: Reakcióidő bajnokok vagyunk.",
    solution:
      "Nincs időd heteket várni egy grafikusra és egy kódolóra. Nálunk az üzleted sebességével halad a fejlesztés. Honlap, holnapra.",
    accent: "from-orange-500 to-red-500 shadow-[0_16px_40px_rgba(249,115,22,0.3)]",
  },
  {
    icon: Gauge,
    problem: 'A probléma: "Lassú az oldalam, és a vevők elmenekülnek."',
    solutionTitle: "A mi megoldásunk: Villámgyors betöltés.",
    solution:
      "Ma már senki sem vár 3 másodpercnél többet egy weboldalra. A Next.js technológia garantálja az azonnali betöltést és az akadásmentes élményt, ami nemcsak a vevőidnek jó, hanem a bevételedet is maximalizálja.",
    accent: "from-blue-700 to-cyan-600 shadow-[0_16px_40px_rgba(37,99,235,0.3)]",
  },
  {
    icon: Search,
    problem: 'A probléma: "Nem találják meg a cégemet a Google-ben."',
    solutionTitle: "A mi megoldásunk: Keresőoptimalizálásra (SEO) született kód.",
    solution:
      "Hiába gyors az oldal, ha láthatatlan. Az általunk írt tiszta kód már az alapoktól kezdve a Google kedvence. Nálunk nem kell utólag százezreket költened technikai SEO-ra.",
    accent: "from-violet-600 to-fuchsia-500 shadow-[0_16px_40px_rgba(139,92,246,0.28)]",
  },
]

export function PainPoints() {
  return (
    <section id="fajdalompontok" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute top-0 left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2">
            <span className="text-sm text-blue-700">Mire kínálunk megoldást?</span>
          </div>
          <h2 className="mb-5 text-4xl font-bold text-slate-900 sm:text-5xl">
            Fájdalompontok{" "}
            <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
              helyett eredmények
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Nem sablonválaszokat adunk, hanem konkrét üzleti problémákra adunk gyors és mérhető megoldást.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-3">
          {painPoints.map((item) => (
            <article key={item.problem} className="glass-card glass-panel gradient-border rounded-3xl p-8">
              <div
                className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent}`}
              >
                <item.icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="mb-4 text-lg font-bold leading-snug text-slate-900">{item.problem}</h3>
              <p className="mb-3 text-sm font-semibold text-blue-800">{item.solutionTitle}</p>
              <p className="leading-relaxed text-slate-700">{item.solution}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
