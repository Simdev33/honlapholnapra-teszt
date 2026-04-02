"use client"

import { Check, Sparkles } from "lucide-react"
import { scrollToSectionHash } from "@/lib/scroll-to-section"

const plans = [
  {
    name: "Alap",
    price: "149.000",
    description: "Tökéletes induláshoz kis vállalkozásoknak.",
    duration: "1-2 nap",
    features: [
      "Legfeljebb 5 oldal",
      "Reszponzív dizájn",
      "Kapcsolati űrlap",
      "SEO alapbeállítás",
      "1 hónap támogatás",
    ],
    highlighted: false,
    accent: "bg-blue-100 text-blue-700",
  },
  {
    name: "Professzionális",
    price: "299.000",
    description: "Ideális növekvő vállalkozásoknak.",
    duration: "3-5 nap",
    features: [
      "Legfeljebb 15 oldal",
      "Egyedi dizájn",
      "Blog rendszer",
      "Haladó SEO",
      "Analitika integráció",
      "3 hónap támogatás",
      "Tartalomkezelő rendszer",
    ],
    highlighted: true,
    accent: "gradient-purple text-white",
  },
  {
    name: "Prémium",
    price: "499.000+",
    description: "Komplex projektekhez és webshopokhoz.",
    duration: "1-2 hét",
    features: [
      "Korlátlan oldalszám",
      "E-commerce funkciók",
      "Fizetési integráció",
      "Egyedi funkciók",
      "Teljesítmény optimalizálás",
      "6 hónap támogatás",
      "Prioritásos ügyfélszolgálat",
    ],
    highlighted: false,
    accent: "bg-cyan-100 text-cyan-700",
  },
]

export function Pricing() {
  return (
    <section id="arak" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2">
            <span className="relative z-10 text-sm text-blue-700">Csomagok</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-slate-900 sm:text-5xl">
            Átlátható{" "}
            <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
              árazás
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Válaszd ki az igényeidnek megfelelő csomagot.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative ${plan.highlighted ? "scale-105" : ""}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 z-20 -translate-x-1/2">
                  <div className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white gradient-purple">
                    <Sparkles className="h-4 w-4" />
                    Legnépszerűbb
                  </div>
                </div>
              )}

              <div
                className={`gradient-border relative flex h-full flex-col rounded-3xl p-8 transition-all duration-500 ${
                  plan.highlighted
                    ? "glass glass-panel overflow-hidden glow-purple"
                    : "glass-card glass-panel overflow-hidden hover:bg-white/[0.06]"
                }`}
              >
                <div className="relative z-10 mb-8 text-center">
                  <h3 className="mb-4 text-xl font-semibold text-slate-900">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-lg text-slate-500">Ft</span>
                  </div>
                  <p className="mt-2 text-sm text-blue-700">Kivitelezés: {plan.duration}</p>
                  <p className="mt-3 text-sm text-slate-600">{plan.description}</p>
                </div>

                <ul className="relative z-10 mb-8 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${plan.accent}`}>
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#kapcsolat"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSectionHash("#kapcsolat")
                  }}
                  className={`relative z-10 mt-auto block w-full cursor-pointer rounded-2xl py-4 text-center font-semibold transition-all ${
                    plan.highlighted
                      ? "gradient-purple text-white hover:opacity-90"
                      : "glass-button text-slate-800 hover:bg-white/10"
                  }`}
                >
                  Ajánlatot kérek
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
