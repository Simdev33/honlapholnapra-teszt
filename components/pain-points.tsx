"use client"

import { Gauge, LifeBuoy, Search, Zap } from "lucide-react"

const painPoints = [
  {
    icon: Zap,
    problem: 'A probléma: "Kifutok az időből, azonnal kell egy oldal a kampányomhoz!"',
    solutionTitle: "A mi megoldásunk: Reakcióidő bajnokok vagyunk.",
    solution:
      "Nincs időd heteket várni egy grafikusra és egy kódolóra. Nálunk az üzleted sebességével halad a fejlesztés. Honlap, holnapra.",
    iconColor: "text-fuchsia-400",
  },
  {
    icon: Gauge,
    problem: 'A probléma: "Lassú az oldalam, és a vevők elmenekülnek."',
    solutionTitle: "A mi megoldásunk: Villámgyors betöltés.",
    solution:
      "Ma már senki sem vár 3 másodpercnél többet egy weboldalra. A Next.js technológia garantálja az azonnali betöltést és az akadásmentes élményt, ami nemcsak a vevőidnek jó, hanem a bevételedet is maximalizálja.",
    iconColor: "text-cyan-400",
  },
  {
    icon: Search,
    problem: 'A probléma: "Nem találják meg a cégemet a Google-ben."',
    solutionTitle: "A mi megoldásunk: Keresőoptimalizálásra (SEO) született kód.",
    solution:
      "Hiába gyors az oldal, ha láthatatlan. Az általunk írt tiszta kód már az alapoktól kezdve a Google kedvence. Nálunk nem kell utólag százezreket költened technikai SEO-ra.",
    iconColor: "text-sky-400",
  },
  {
    icon: LifeBuoy,
    problem: 'A probléma: "Azt sem tudom, hogyan kezdjek hozzá, teljesen elvesztem a technikai részletekben."',
    solutionTitle: "A mi megoldásunk: Teljes körű mentorálás és technikai kivitelezés a nulláról.",
    solution:
      'Levesszük a válladról a technikai terhet. Segítünk a megfelelő domain név kiválasztásától a céges e-mail címek létrehozásán át egészen az oldal élesítéséig. Nálunk nincs "buta kérdés": mindent beállítunk és elmagyarázunk közérthetően, hogy neked csak az üzleteddel kelljen foglalkoznod.',
    iconColor: "text-fuchsia-300",
  },
]

export function PainPoints() {
  return (
    <section id="fajdalompontok" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute top-0 left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-orange-400/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2">
            <span className="text-sm text-orange-600">Mire kínálunk megoldást?</span>
          </div>
          <h2 className="mb-5 text-4xl font-bold text-slate-900 sm:text-5xl">
            Fájdalompontok{" "}
            <span className="text-fuchsia-300">helyett eredmények</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Nem sablonválaszokat adunk, hanem konkrét üzleti problémákra adunk gyors és mérhető megoldást.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((item) => (
            <div key={item.problem} className="ainex-count-wrap">
              <article className="ainex-count-card">
                <span className="ainex-count-icon">
                  <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                </span>

                <h3 className="mb-4 min-h-[6.2rem] pr-20 text-lg font-bold leading-snug text-slate-900">{item.problem}</h3>
                <p className="mb-3 text-sm font-semibold text-orange-600">{item.solutionTitle}</p>
                <p className="leading-relaxed text-slate-700">{item.solution}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
