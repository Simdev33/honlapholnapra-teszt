"use client"

import { Clock3, Wrench } from "lucide-react"

export function Services() {
  return (
    <section id="szolgaltatasok" className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#090326] via-[#080320] to-[#07021a]" />
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-orange-400/12 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2">
            <span className="text-sm text-orange-600">Hogyan lehetséges ez?</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-slate-900 sm:text-5xl">
            A titkunk:{" "}
            <span className="text-fuchsia-300">Prémium technológia</span>
            , okos rendszerekkel.
          </h2>
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-slate-600">
            A legtöbb ügynökség azért lassú, mert elavult rendszerekkel (pl. WordPress) küszködik, vagy
            a nulláról kezdi a kódolást. Mi a jövő technológiájában, a Next.js-ben dolgozunk.
            Kifejlesztettünk egy saját, sziklaszilárd és moduláris alapot, amire villámgyorsan, mégis
            hajszálpontosan tudjuk felépíteni a te egyedi arculatodat.
          </p>
        </div>

        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Gyorsaság, a te igényeidre szabva:</h3>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <article className="glass-card glass-panel gradient-border rounded-3xl p-8">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-[0_16px_40px_rgba(249,115,22,0.35)]">
              <Clock3 className="h-7 w-7 text-white" />
            </div>
            <h4 className="mb-3 text-2xl font-bold text-slate-900">A 24 órás Expressz megoldás</h4>
            <p className="leading-relaxed text-slate-700">
              Egy terméket, szolgáltatást vagy eseményt akarsz azonnal piacra dobni? Szükséged van egy
              profi bemutatkozó oldalra vagy landing page-re? Ha az anyagok (szövegek, képek)
              rendelkezésre állnak, a megbeszéléstől számított 24 órán belül élesítjük a kész,
              Google-barát oldaladat.
            </p>
          </article>

          <article className="glass-card glass-panel gradient-border rounded-3xl p-8">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-blue-700 shadow-[0_16px_40px_rgba(15,23,42,0.28)]">
              <Wrench className="h-7 w-7 text-white" />
            </div>
            <h4 className="mb-3 text-2xl font-bold text-slate-900">Komplex és egyedi rendszerek</h4>
            <p className="leading-relaxed text-slate-700">
              Webshopot, egyedi ügyfélportált vagy többszáz aloldalas cégbemutatót szeretnél? Ezeknél a
              projekteknél a precizitás és az összetettség miatt több időre van szükségünk. De
              garantáljuk: a Next.js alapoknak köszönhetően ezeket is a piaci átlagnál jóval gyorsabban
              és stabilabban adjuk át. Nálunk nincsenek hónapokig csúszó határidők.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
