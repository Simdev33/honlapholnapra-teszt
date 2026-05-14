"use client"

import { ArrowRight, Check, Sparkles } from "lucide-react"
import { scrollToSectionHash } from "@/lib/scroll-to-section"

const plans = [
  {
    name: "Alap",
    badge: "50% off",
    price: "99.000",
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
    accent: "bg-fuchsia-500/15 text-fuchsia-300",
  },
  {
    name: "Professzionális",
    badge: "Popular",
    price: "199.000",
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
    badge: "Essential",
    price: "399.000+",
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
    accent: "bg-violet-500/15 text-violet-200",
  },
]

export function Pricing() {
  return (
    <section id="arak" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/8 to-transparent pointer-events-none" />
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-fuchsia-500/12 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2">
            <span className="relative z-10 text-sm font-medium text-fuchsia-300">Csomagok</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-slate-900 sm:text-5xl">
            Átlátható{" "}
            <span className="text-fuchsia-300">árazás</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Válaszd ki az igényeidnek megfelelő csomagot.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => (
            <div key={plan.name} className="relative">
              <div className={`ainex-pricing-card h-full ${plan.highlighted ? "active" : ""}`}>
                <div className="ainex-pricing-badge">
                  <span className="inline-flex items-center gap-1.5">
                    {plan.highlighted ? <Sparkles className="h-3.5 w-3.5" /> : null}
                    {plan.badge}
                  </span>
                </div>

                <div className="mb-7">
                  <h3 className="mb-3 text-3xl font-semibold text-slate-900">{plan.name}</h3>
                  <div className="mb-1 flex items-baseline gap-2">
                    <span className="text-6xl leading-none font-bold text-slate-900">{plan.price}</span>
                    <span className="text-2xl text-slate-500">Ft</span>
                  </div>
                  <p className="text-sm text-fuchsia-300">Kivitelezés: {plan.duration}</p>
                  <p className="mt-4 max-w-xs text-base text-slate-600">{plan.description}</p>
                </div>

                <a
                  href="#kapcsolat"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSectionHash("#kapcsolat")
                  }}
                  className={`ainex-pricing-btn ${plan.highlighted ? "is-active" : "is-outline"}`}
                >
                  <span>Ajánlatot kérek</span>
                  <span className="ainex-pricing-btn-icon">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </a>

                <div className="mt-8">
                  <h4 className="mb-4 text-2xl font-semibold text-slate-900">Tartalmazza:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className="ainex-pricing-check">
                          <Check className="h-3 w-3" />
                        </span>
                        <span className="text-base text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
