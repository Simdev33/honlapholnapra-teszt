"use client"

import { Code2, HeartHandshake, MessageSquare, PenTool, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Konzultáció",
    description: "Megbeszéljük az igényeidet, céljaidat és a weboldal funkcióit.",
    duration: "1-2 óra",
    accent: "from-orange-500 to-rose-500 shadow-[0_16px_40px_rgba(249,115,22,0.32)]",
  },
  {
    icon: PenTool,
    title: "Tervezés",
    description: "Elkészítjük a weboldal wireframe-jét és vizuális terveit.",
    duration: "1-2 nap",
    accent: "from-slate-900 to-blue-700 shadow-[0_16px_40px_rgba(15,23,42,0.3)]",
  },
  {
    icon: Code2,
    title: "Fejlesztés",
    description: "Modern technológiákkal megépítjük a weboldalt.",
    duration: "2-5 nap",
    accent: "from-blue-600 to-cyan-500 shadow-[0_16px_40px_rgba(37,99,235,0.28)]",
  },
  {
    icon: Rocket,
    title: "Indítás",
    description: "Teszteljük, optimalizáljuk és élesítjük a weboldalt.",
    duration: "1 nap",
    accent: "from-orange-500 to-blue-600 shadow-[0_16px_40px_rgba(59,130,246,0.28)]",
  },
  {
    icon: HeartHandshake,
    title: "Támogatás",
    description: "Karbantartás, frissítések és technikai támogatás.",
    duration: "Folyamatos",
    accent: "from-blue-700 to-cyan-500 shadow-[0_16px_40px_rgba(37,99,235,0.28)]",
  },
]

export function Workflow() {
  return (
    <section id="munkamenet" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#090326] via-[#080320] to-[#07021a] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent pointer-events-none" />
      <div className="absolute left-0 top-1/2 h-[400px] w-[400px] rounded-full bg-orange-400/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2">
            <span className="text-sm text-orange-600">Folyamat</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-slate-900 sm:text-5xl">
            Így{" "}
            <span className="text-fuchsia-300">dolgozunk</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Átlátható, gyors és hatékony folyamat az elejétől a végéig.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 hidden w-px bg-gradient-to-b from-transparent via-orange-400/35 to-transparent lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative flex flex-col items-center gap-8 lg:flex-row ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                } ${index > 0 ? "lg:mt-[-40px]" : ""}`}
              >
                <div className={`flex-1 ${index % 2 === 1 ? "lg:text-right" : ""}`}>
                  <div
                    className={`glass-card glass-panel gradient-border max-w-md rounded-3xl p-8 transition-all duration-500 hover:bg-white/[0.06] ${
                      index % 2 === 1 ? "lg:ml-auto" : ""
                    }`}
                  >
                    <div className={`relative z-10 mb-4 flex items-center gap-4 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${step.accent}`}>
                        <step.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className={index % 2 === 1 ? "lg:text-right" : ""}>
                        <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                        <span className="text-sm text-orange-600">{step.duration}</span>
                      </div>
                    </div>
                    <p className="relative z-10 leading-relaxed text-slate-600">{step.description}</p>
                  </div>
                </div>

                <div className="glass relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full glow-purple">
                  <span className="bg-gradient-to-r from-orange-500 to-blue-700 bg-clip-text text-xl font-bold text-transparent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="hidden flex-1 lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
