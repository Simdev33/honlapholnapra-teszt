"use client"

import { Search, Shield, Smartphone, Zap } from "lucide-react"

const technologies = [
  {
    name: "Next.js",
    description: "A legmodernebb React keretrendszer szerveroldali rendereléshez.",
    color: "from-slate-900 to-orange-500",
  },
  {
    name: "React",
    description: "A Meta által fejlesztett komponens-alapú frontend könyvtár.",
    color: "from-blue-700 to-cyan-500",
  },
  {
    name: "Node.js",
    description: "Gyors és skálázható backend JavaScript futtatókörnyezet.",
    color: "from-orange-500 to-blue-700",
  },
]

const features = [
  {
    icon: Smartphone,
    title: "Reszponzív",
    description: "Minden eszközön tökéletes",
    accent: "from-orange-500 to-rose-500 shadow-[0_16px_40px_rgba(249,115,22,0.3)]",
  },
  {
    icon: Search,
    title: "SEO optimalizált",
    description: "Jobb Google helyezés",
    accent: "from-slate-900 to-blue-700 shadow-[0_16px_40px_rgba(15,23,42,0.28)]",
  },
  {
    icon: Zap,
    title: "Villámgyors",
    description: "Optimalizált sebesség",
    accent: "from-blue-600 to-cyan-500 shadow-[0_16px_40px_rgba(34,211,238,0.28)]",
  },
  {
    icon: Shield,
    title: "Biztonságos",
    description: "Modern védelem",
    accent: "from-orange-500 to-blue-600 shadow-[0_16px_40px_rgba(99,102,241,0.3)]",
  },
]

export function Technology() {
  return (
    <section id="technologia" className="relative overflow-hidden py-32">
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-400/12 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2">
            <span className="text-sm text-orange-600">Technológia</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-slate-900 sm:text-5xl">
            Modern{" "}
            <span className="text-fuchsia-300">tech stack</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            A legújabb és legmegbízhatóbb technológiákat használjuk.
          </p>
        </div>

        <div className="mb-16 grid gap-6 lg:grid-cols-3">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group glass-card glass-panel gradient-border rounded-3xl p-8 transition-all duration-500 hover:bg-white/[0.06]"
            >
              <h3 className="relative z-10 mb-4 text-4xl font-bold text-fuchsia-300">
                {tech.name}
              </h3>
              <p className="relative z-10 leading-relaxed text-slate-600">{tech.description}</p>
              <div className="relative z-10 mt-6 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-orange-500" />
                <span className="text-sm text-orange-600">Használjuk</span>
              </div>
            </div>
          ))}
        </div>

        <div className="glass glass-panel rounded-3xl p-8 md:p-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="relative z-10 text-center group">
                <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.accent} transition-transform duration-300 group-hover:scale-110`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
