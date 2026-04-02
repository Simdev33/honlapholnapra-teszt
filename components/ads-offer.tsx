"use client"

import { scrollToSectionHash } from "@/lib/scroll-to-section"
import { BarChart3, Rocket, Target, Zap } from "lucide-react"

export function AdsOffer() {
  return (
    <section id="ads-offer" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-slate-50/60 to-white" />
      <div className="pointer-events-none absolute top-0 right-[-10%] h-[420px] w-[420px] rounded-full bg-blue-500/12 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-8%] h-[380px] w-[380px] rounded-full bg-orange-400/15 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-5 flex items-start gap-3">
          <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-[0_10px_26px_rgba(249,115,22,0.35)]">
            <Rocket className="h-5 w-5" />
          </div>
          <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Kész a tökéletes weboldal? Hozzunk rá azonnal fizető vevőket!
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-200/80 bg-gradient-to-br from-blue-50 to-white p-5 shadow-[0_10px_24px_rgba(37,99,235,0.14)]">
              <div className="mb-2 flex items-center gap-2">
                <Rocket className="h-4 w-4 text-blue-700" />
                <p className="text-base font-semibold text-blue-700">Digitális sportkocsi, indulásra készen</p>
              </div>
              <p className="leading-relaxed text-slate-700">
                Megépítettük a digitális sportkocsidat. De hiába a világ leggyorsabb weboldala, ha a garázsban áll,
                és senki sem talál rá.
              </p>
            </div>
            <div className="rounded-2xl border border-blue-200/80 bg-gradient-to-br from-blue-50 to-white p-5 shadow-[0_10px_24px_rgba(37,99,235,0.14)]">
              <div className="mb-2 flex items-center gap-2">
                <Target className="h-4 w-4 text-blue-700" />
                <p className="text-base font-semibold text-blue-700">A cél: top helyezés, azonnali forgalom</p>
              </div>
              <p className="leading-relaxed text-slate-700">
                Ne várj hónapokat arra, hogy a Google magától rátaláljon az oldaladra! A Honlapholnapra csapata nem
                engedi el a kezed az átadás után: profi Google Keresési (Search) kampányokkal azonnal a
                konkurenciád elé, a találati lista legtetejére repítjük a cégedet.
              </p>
            </div>
        </div>

        <div className="mt-10 mb-6 text-center">
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Miért vagy behozhatatlan előnyben, ha ránk bízod a hirdetéseket?
          </h3>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border border-blue-100 bg-white/85 p-6 shadow-[0_10px_26px_rgba(15,42,74,0.08)]">
            <div className="mb-3 flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-700" />
              <p className="font-semibold text-slate-900">Azonnali, forró érdeklődők</p>
            </div>
            <p className="text-sm font-medium text-blue-700">(Keresési kampányok)</p>
            <p className="mt-3 leading-relaxed text-slate-700">
              Mi nem vaktában lövöldözünk a neten. Amikor valaki beírja a Google-be a te szolgáltatásodat
              (pl. "duguláselhárítás azonnal" vagy "könyvelő iroda"), ő nem nézelődik. Ő vásárolni akar. Mi
              pont ekkor és pont neki fogjuk megmutatni a weboldaladat.
            </p>
          </article>

          <article className="rounded-2xl border border-blue-100 bg-white/85 p-6 shadow-[0_10px_26px_rgba(15,42,74,0.08)]">
            <div className="mb-3 flex items-center gap-2">
              <Zap className="h-5 w-5 text-blue-700" />
              <p className="font-semibold text-slate-900">A te titkos fegyvered</p>
            </div>
            <p className="text-sm font-medium text-blue-700">Olcsóbb kattintások</p>
            <p className="mt-3 leading-relaxed text-slate-700">
              A Google algoritmusa imádja a gyors weboldalakat. Mivel az oldaladat eleve villámgyors Next.js
              technológiával építettük fel, a Google magasabb "Minőségi mutatóval" jutalmazza a
              hirdetéseidet. Az eredmény? Kevesebb pénzből lehetsz első, mint a lassú weboldallal rendelkező
              versenytársaid.
            </p>
          </article>

          <article className="rounded-2xl border border-blue-100 bg-white/85 p-6 shadow-[0_10px_26px_rgba(15,42,74,0.08)]">
            <div className="mb-3 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-700" />
              <p className="font-semibold text-slate-900">Tűpontos mérés</p>
            </div>
            <p className="text-sm font-medium text-blue-700">Vakfoltok nélkül</p>
            <p className="mt-3 leading-relaxed text-slate-700">
              Sokan azért égetik a pénzt a Google Ads-ben, mert rosszul mérnek. Mivel mi magunk írtuk a
              weboldalad kódját, tizedmilliméter pontosan be tudjuk állítani a konverziókövetést. Fillérre
              pontosan látni fogod, melyik hirdetés hozta a vásárlót vagy az ajánlatkérést.
            </p>
          </article>
        </div>

        <div className="mt-8 rounded-2xl border border-blue-200/80 bg-gradient-to-r from-white via-slate-50 to-white p-6 text-center shadow-[0_10px_24px_rgba(15,42,74,0.08)]">
          <p className="text-lg leading-relaxed text-slate-800">
            Egy weboldal önmagában csak egy névjegykártya. A weboldal + Google Ads kombó viszont egy
            folyamatosan pörgő bevételtermelő gépezet. Ne hagyd a pénzt az asztalon (és a versenytársaknál)!
          </p>
          <div className="mt-6">
            <button
              type="button"
              onClick={() => scrollToSectionHash("#kapcsolat")}
              className="gradient-purple rounded-2xl px-8 py-4 text-base font-semibold text-white shadow-[0_14px_34px_rgba(249,115,22,0.28)] transition-opacity hover:opacity-90"
            >
              Kérek ajánlatot weboldalra + hirdetésre!
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
