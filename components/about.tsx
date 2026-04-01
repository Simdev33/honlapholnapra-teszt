"use client"

import { Award, Clock, Lightbulb, Shield, Target, Users, Zap } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "100+",
    label: "Elégedett ügyfél",
    accent: "from-violet-500 to-fuchsia-500 shadow-[0_16px_40px_rgba(168,85,247,0.3)]",
  },
  {
    icon: Award,
    value: "5+",
    label: "Év tapasztalat",
    accent: "from-indigo-500 to-violet-500 shadow-[0_16px_40px_rgba(99,102,241,0.3)]",
  },
  {
    icon: Clock,
    value: "150+",
    label: "Elkészült projekt",
    accent: "from-cyan-500 to-sky-500 shadow-[0_16px_40px_rgba(34,211,238,0.28)]",
  },
  {
    icon: Zap,
    value: "24h",
    label: "Leggyorsabb projekt",
    accent: "from-blue-500 to-indigo-500 shadow-[0_16px_40px_rgba(59,130,246,0.28)]",
  },
]

const values = [
  {
    icon: Clock,
    title: "Gyorsaság",
    description: "Az időd értékes. Gyorsan dolgozunk, minőség feláldozása nélkül.",
    accent: "from-violet-500 to-fuchsia-500 shadow-[0_16px_40px_rgba(168,85,247,0.28)]",
  },
  {
    icon: Target,
    title: "Minőség",
    description: "Minden projektet a legmagasabb színvonalon készítünk el.",
    accent: "from-indigo-500 to-violet-500 shadow-[0_16px_40px_rgba(99,102,241,0.28)]",
  },
  {
    icon: Lightbulb,
    title: "Innováció",
    description: "A legújabb trendeket és technológiákat követjük.",
    accent: "from-cyan-500 to-blue-500 shadow-[0_16px_40px_rgba(34,211,238,0.26)]",
  },
  {
    icon: Shield,
    title: "Megbízhatóság",
    description: "Amit ígérünk, azt tartjuk. Határidőre szállítunk.",
    accent: "from-fuchsia-500 to-pink-500 shadow-[0_16px_40px_rgba(217,70,239,0.26)]",
  },
]

export function About() {
  return (
    <section id="rolunk" className="relative overflow-hidden py-32">
      <div className="absolute right-0 top-1/2 h-[400px] w-[400px] rounded-full bg-[#ec4899]/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div>
            <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2">
              <span className="text-sm text-[#a855f7]">Rólunk</span>
            </div>
            <h2 className="mb-8 text-4xl font-bold text-white sm:text-5xl">
              A{" "}
              <span className="bg-gradient-to-r from-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent">
                honlapholnapra
              </span>{" "}
              csapata
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-white/50">
              Szenvedélyes webfejlesztők vagyunk, akik hisznek abban, hogy minden vállalkozásnak jár egy professzionális online jelenlét.
            </p>
            <p className="mb-12 leading-relaxed text-white/50">
              Több mint 5 éves tapasztalattal tudjuk, mire van szükség ahhoz, hogy egy weboldal ne csak szép legyen, hanem eredményeket is hozzon.
            </p>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card glass-panel rounded-3xl p-5 text-center group">
                  <div className={`relative z-10 mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.accent} transition-transform duration-300 group-hover:scale-110`}>
                    <stat.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="relative z-10 text-2xl font-bold text-white">{stat.value}</div>
                  <div className="relative z-10 mt-1 text-xs text-white/45">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="glass-card glass-panel gradient-border rounded-3xl p-6 transition-all duration-500 hover:bg-white/[0.06]"
              >
                <div className={`relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${value.accent}`}>
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="relative z-10 mb-2 text-lg font-semibold text-white">{value.title}</h3>
                <p className="relative z-10 text-sm leading-relaxed text-white/55">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
