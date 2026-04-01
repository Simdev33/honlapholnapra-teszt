"use client"

import { useState } from "react"
import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react"

const inputClassName =
  "glass-input w-full rounded-xl text-white placeholder:text-white/30 focus:outline-none"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@honlapholnapra.hu",
      href: "mailto:info@honlapholnapra.hu",
      iconClass:
        "bg-gradient-to-br from-violet-600 to-fuchsia-500 shadow-[0_16px_40px_rgba(168,85,247,0.35)]",
    },
    {
      icon: Phone,
      title: "Telefon",
      value: "+36 30 123 4567",
      href: "tel:+36301234567",
      iconClass:
        "bg-gradient-to-br from-cyan-600 to-sky-500 shadow-[0_16px_40px_rgba(6,182,212,0.32)]",
    },
    {
      icon: MapPin,
      title: "Iroda",
      value: "1052 Budapest, Váci utca 1.",
      href: "#",
      iconClass:
        "bg-gradient-to-br from-rose-500 to-amber-500 shadow-[0_16px_40px_rgba(244,63,94,0.28)]",
    },
  ] as const

  return (
    <section id="kapcsolat" className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[#7c3aed]/12 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/4 right-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-1/3 right-1/4 h-[280px] w-[280px] rounded-full bg-rose-500/8 blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2">
            <span className="relative z-10 bg-gradient-to-r from-[#a855f7] to-cyan-400 bg-clip-text text-sm font-medium text-transparent">
              Kapcsolat
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
            Kezdjük el a{" "}
            <span className="bg-gradient-to-r from-[#7c3aed] via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              projekted
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/50">
            Írj nekünk, és 24 órán belül válaszolunk.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            {contactInfo.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="glass-card glass-panel group flex items-center gap-5 rounded-2xl p-5 transition-all duration-300 hover:bg-white/[0.06]"
              >
                <div
                  className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${item.iconClass}`}
                >
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div className="relative z-10">
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-white/50 transition-colors group-hover:text-white/70">{item.value}</p>
                </div>
              </a>
            ))}

            <div className="glass-card glass-panel gradient-border rounded-3xl border-l-[3px] border-l-amber-400/70 p-8">
              <h3 className="relative z-10 mb-6 flex items-center gap-2 text-lg font-semibold text-white">
                <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.6)]" />
                Munkaidő
              </h3>
              <div className="relative z-10 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-cyan-200/45">Hétfő - Péntek</span>
                  <span className="font-medium text-white">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-cyan-200/45">Szombat</span>
                  <span className="font-medium text-white">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-cyan-200/45">Vasárnap</span>
                  <span className="font-medium text-rose-300/90">Zárva</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="glass glass-panel gradient-border rounded-3xl border-t border-t-cyan-400/25 p-8 md:p-10">
              {isSubmitted ? (
                <div className="relative z-10 flex min-h-[400px] flex-col items-center justify-center text-center">
                  <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 shadow-[0_18px_46px_rgba(16,185,129,0.35)]">
                    <CheckCircle className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-white">Köszönjük az üzenetet!</h3>
                  <p className="mb-8 max-w-sm text-white/50">
                    24 órán belül felvesszük veled a kapcsolatot.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="glass-button rounded-xl px-6 py-3 font-medium text-white"
                  >
                    Új üzenet küldése
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
                        Név *
                      </label>
                      <input id="name" required placeholder="Kovács János" className={`${inputClassName} h-12 px-4`} />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="janos@example.com"
                        className={`${inputClassName} h-12 px-4`}
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white">
                        Telefon
                      </label>
                      <input id="phone" type="tel" placeholder="+36 30 123 4567" className={`${inputClassName} h-12 px-4`} />
                    </div>
                    <div>
                      <label htmlFor="budget" className="mb-2 block text-sm font-medium text-white">
                        Költségkeret
                      </label>
                      <input
                        id="budget"
                        placeholder="pl. 200.000 - 300.000 Ft"
                        className={`${inputClassName} h-12 px-4`}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="project" className="mb-2 block text-sm font-medium text-white">
                      Projekt típusa
                    </label>
                    <input
                      id="project"
                      placeholder="pl. bemutatkozó oldal, webshop..."
                      className={`${inputClassName} h-12 px-4`}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
                      Üzenet *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Írd le röviden, milyen weboldalt szeretnél..."
                      className={`${inputClassName} resize-none px-4 py-3`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="glow-purple inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-[0_12px_40px_rgba(124,58,237,0.4)] transition-all hover:opacity-90 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      "Küldés..."
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Üzenet küldése
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
