"use client"

import { Gauge, Globe, Palette, Search, ShoppingCart, Smartphone } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Bemutatkozó oldal",
    description: "Professzionális céges weboldal, amely bemutatja vállalkozásod és szolgáltatásaidat.",
    accent: "from-violet-500 to-fuchsia-500 shadow-[0_16px_40px_rgba(168,85,247,0.32)]",
  },
  {
    icon: ShoppingCart,
    title: "Webshop",
    description: "Teljes értékű e-commerce megoldás online fizetéssel és készletkezeléssel.",
    accent: "from-indigo-500 to-violet-500 shadow-[0_16px_40px_rgba(99,102,241,0.32)]",
  },
  {
    icon: Smartphone,
    title: "Reszponzív dizájn",
    description: "Minden eszközön tökéletesen megjelenő, mobilbarát weboldalak.",
    accent: "from-cyan-500 to-sky-500 shadow-[0_16px_40px_rgba(34,211,238,0.28)]",
  },
  {
    icon: Search,
    title: "SEO optimalizálás",
    description: "Keresőoptimalizált tartalom a jobb Google találati helyezésért.",
    accent: "from-blue-500 to-indigo-500 shadow-[0_16px_40px_rgba(59,130,246,0.3)]",
  },
  {
    icon: Palette,
    title: "Egyedi dizájn",
    description: "Márkádhoz illeszkedő, egyedi vizuális megjelenés tervezés.",
    accent: "from-fuchsia-500 to-pink-500 shadow-[0_16px_40px_rgba(217,70,239,0.28)]",
  },
  {
    icon: Gauge,
    title: "Gyors betöltés",
    description: "Optimalizált teljesítmény és villámgyors oldalbetöltés.",
    accent: "from-violet-500 to-cyan-500 shadow-[0_16px_40px_rgba(124,58,237,0.28)]",
  },
]

export function Services() {
  return (
    <section id="szolgaltatasok" className="relative overflow-hidden py-32">
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[#7c3aed]/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2">
            <span className="text-sm text-[#a855f7]">Szolgáltatások</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
            Minden, ami a{" "}
            <span className="bg-gradient-to-r from-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent">
              sikerhez
            </span>{" "}
            kell
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/50">
            Teljes körű webfejlesztési szolgáltatásokat kínálunk, az ötlettől a kész weboldalig.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group glass-card glass-panel gradient-border rounded-3xl p-8 transition-all duration-500 hover:bg-white/[0.06] hover:scale-[1.02]"
            >
              <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} transition-transform duration-300 group-hover:scale-110`}>
                <service.icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="relative z-10 mb-3 text-xl font-semibold text-white">{service.title}</h3>
              <p className="relative z-10 leading-relaxed text-white/55">{service.description}</p>
              <div className="relative z-10 mt-6 h-1 w-0 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#a855f7] transition-all duration-500 group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
