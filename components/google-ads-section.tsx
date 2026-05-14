"use client"

import { BarChart3, Rocket, Target } from "lucide-react"

const benefits = [
  {
    icon: Rocket,
    title: "Azonnali láthatóság",
    description:
      "Míg a hagyományos SEO hónapokig tart, a célzott hirdetésekkel akár már a weboldalad átadásának másnapján érkezhetnek a potenciális vevők.",
  },
  {
    icon: Target,
    title: "Olcsóbb kattintások",
    description:
      'A Google algoritmusa imádja az általunk készített, gyors oldalakat. A jobb "Minőségi mutató" miatt kevesebb pénzből érhetsz el jobb helyezést a konkurenciádnál.',
  },
  {
    icon: BarChart3,
    title: "Tökéletes mérés",
    description:
      "Mivel mi írtuk az oldal kódját, a vásárlások és ajánlatkérések mérését tizedmilliméter pontosan állítjuk be. Látni fogod, melyik hirdetés hozza a pénzt.",
  },
]

export function GoogleAdsSection() {
  return (
    <section id="google-ads" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0428] via-[#090322] to-[#0a0324] pointer-events-none" />
      <div className="absolute top-0 right-[-10%] h-[460px] w-[460px] rounded-full bg-fuchsia-500/20 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-8%] h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <div className="glass mb-6 inline-flex items-center rounded-full border border-fuchsia-400/40 bg-[#160e3b]/80 px-4 py-2">
            <span className="text-sm font-medium text-fuchsia-300">Google Ads szolgáltatás</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-slate-900 sm:text-5xl">
            Honlap holnapra,{" "}
            <span className="text-fuchsia-300">vevők holnaputánra</span>
          </h2>
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-slate-700">
            Kész a tökéletes weboldalad? Hozzunk rá azonnal fizető vevőket! Megépítettük neked a tökéletes
            "sportkocsit" - a villámgyors Next.js weboldaladat. Most öntsünk bele üzemanyagot! Nem hagyunk
            magadra az oldal átadása után sem: profi Google Ads kampányokkal azonnal a keresők élére
            repítjük a cégedet.
          </p>
        </div>

        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Miért éri meg ránk bízni a hirdetéseket is?</h3>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {benefits.map((item) => (
            <article key={item.title} className="glass-card glass-panel gradient-border rounded-3xl p-7">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500 shadow-[0_12px_30px_rgba(249,115,22,0.35)]">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="mb-3 text-xl font-semibold text-slate-900">{item.title}</h4>
              <p className="leading-relaxed text-slate-700">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
