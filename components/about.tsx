"use client"

import { Clock3, Gauge, ShieldCheck } from "lucide-react"

const guarantees = [
  {
    icon: Clock3,
    title: "Sebesség, bürokratikus körök nélkül",
    description:
      "A nevünk kötelez. Nem tartunk felesleges, órákig tartó meetingeket a semmiről. Kifejlesztettünk egy olyan sziklaszilárd, saját rendszert, amivel a projekt méretétől függően akár ténylegesen 24 óra alatt át tudjuk adni a kész, működő weboldaladat.",
    accent: "from-orange-500 to-red-500 shadow-[0_16px_40px_rgba(249,115,22,0.3)]",
  },
  {
    icon: ShieldCheck,
    title: "Mérnöki precizitás, nem \"összegányolás\"",
    description:
      "Nem sablonokat foltozgatunk, és nem telepítünk 30 felesleges bővítményt, amitől másnap összeomlik az oldalad. Tiszta, modern és hackertámadások ellen védett kódot írunk.",
    accent: "from-slate-900 to-blue-700 shadow-[0_16px_40px_rgba(15,23,42,0.3)]",
  },
  {
    icon: Gauge,
    title: "Weboldal helyett bevételtermelő gépezet",
    description:
      "Minket nem csak az érdekel, hogy \"szép\" legyen a dizájn. Minket az érdekel, hogy az oldalad pénzt termeljen neked. Villámgyors betöltéssel, Google-barát (SEO) alapokkal, és profi Google Ads kampánykezeléssel gondoskodunk arról, hogy a befektetésed a lehető leghamarabb megtérüljön.",
    accent: "from-orange-500 to-blue-600 shadow-[0_16px_40px_rgba(249,115,22,0.28)]",
  },
]

export function About() {
  return (
    <section id="rolunk" className="relative overflow-hidden py-32">
      <div className="absolute right-0 top-1/2 h-[420px] w-[420px] rounded-full bg-orange-400/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2">
            <span className="text-sm text-orange-600">Rólunk</span>
          </div>
          <h2 className="mb-8 text-4xl font-bold text-slate-900 sm:text-5xl">
            A csapat, akinek elege lett a{" "}
            <span className="text-fuchsia-300">hónapokig tartó hitegetésből</span>
            .
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass-card glass-panel gradient-border rounded-3xl p-8 md:p-10">
            <p className="mb-6 border-l-4 border-orange-300 pl-4 text-[1.15rem] leading-relaxed text-slate-800">
              Ismered azt az érzést, amikor kifizetsz egy halom pénzt egy weboldalra, aztán a fejlesztő
              hetekig nem veszi fel a telefont? Vagy amikor végre átadják az oldalt, de az olyan lassú,
              hogy a vásárlóid a betöltés felénél inkább átmennek a konkurenciához?
            </p>
            <p className="mb-6 text-xl font-semibold leading-relaxed text-slate-900">
              Na, nekünk pontosan ebből a <span className="text-orange-600">"piaci sztenderdből"</span> lett elegünk.
            </p>
            <p className="mb-6 leading-relaxed text-slate-700 md:text-[1.02rem]">
              A Honlapholnapra nem azért jött létre, mert hiányzott még egy tucat-ügynökség a piacra,
              akik ugyanazokat az elavult, sablonos doboz-megoldásokat (<span className="font-medium text-orange-600">khm, WordPress</span>) árulják. Azért
              alapítottuk meg a céget, mert úgy döntöttünk: felborítjuk a játékszabályokat.
            </p>
            <p className="leading-relaxed text-slate-700 md:text-[1.02rem]">
              <span className="font-semibold text-slate-900">A mi küldetésünk egyszerű:</span> Elhozzuk a világ legnagyobb tech-óriásai (mint a Netflix vagy a
              TikTok) által használt csúcstechnológiát - a <span className="font-semibold text-orange-600">Next.js-t</span> - a te vállalkozásod számára. És
              mindezt olyan sebességgel tesszük, ami eddig lehetetlennek tűnt az iparágban.
            </p>
          </div>

          <div className="glass-card glass-panel gradient-border rounded-3xl p-8">
            <h3 className="mb-6 text-2xl font-bold text-slate-900">Miért pont velünk dolgozz? (A mi garanciánk)</h3>
            <div className="space-y-6">
              {guarantees.map((item) => (
                <div key={item.title} className="rounded-2xl border border-fuchsia-400/25 bg-[#160f3d]/88 p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.accent}`}
                    >
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                  </div>
                  <p className="leading-relaxed text-slate-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-fuchsia-400/30 bg-gradient-to-r from-[#120b35] via-[#1a0f42] to-[#120b35] p-7 text-center shadow-[0_16px_44px_rgba(2,0,14,0.45)]">
          <p className="text-lg leading-relaxed text-slate-800 md:text-xl">
            Nem beszélünk mellé, és nem raboljuk az idődet. Ha egy olyan partnert keresel, aki a
            megoldásokon pörög a kifogások helyett, akkor jó helyen jársz.
          </p>
          <p className="mt-4 bg-gradient-to-r from-orange-500 to-blue-700 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
            Építsük meg a jövőbiztos weboldaladat. Akár holnapra.
          </p>
        </div>
      </div>
    </section>
  )
}
