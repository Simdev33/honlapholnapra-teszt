"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Mail, Phone, Send } from "lucide-react"

const inputClassName =
  "glass-input w-full rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none"

export function Contact() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitError(null)
    setIsSubmitting(true)
    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      budget: String(formData.get("budget") ?? "").trim(),
      project: String(formData.get("project") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error("A küldés sikertelen volt.")
      }

      form.reset()
      router.push("/koszonjuk")
    } catch (_error) {
      setSubmitError("Valami hiba történt küldés közben. Kérlek próbáld újra.")
    } finally {
      setIsSubmitting(false)
    }
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
      value: "+36 30 194 0601",
      href: "tel:+36301940601",
      iconClass:
        "bg-gradient-to-br from-cyan-600 to-sky-500 shadow-[0_16px_40px_rgba(6,182,212,0.32)]",
    },
  ] as const

  return (
    <section id="kapcsolat" className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-500/12 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/4 right-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-1/3 right-1/4 h-[280px] w-[280px] rounded-full bg-rose-500/8 blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2">
            <span className="relative z-10 bg-gradient-to-r from-blue-800 to-cyan-500 bg-clip-text text-sm font-medium text-transparent">
              Kapcsolat
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-slate-900 sm:text-5xl">
            Kezdjük el a{" "}
            <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              projekted
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
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
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 transition-colors group-hover:text-slate-800">{item.value}</p>
                </div>
              </a>
            ))}

            <div className="glass-card glass-panel gradient-border rounded-3xl border-l-[3px] border-l-amber-400/70 p-8">
              <h3 className="relative z-10 mb-6 flex items-center gap-2 text-lg font-semibold text-slate-900">
                <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.6)]" />
                Munkaidő
              </h3>
              <div className="relative z-10 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Hétfő - Péntek</span>
                  <span className="font-medium text-slate-800">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Szombat</span>
                  <span className="font-medium text-slate-800">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Vasárnap</span>
                  <span className="font-medium text-rose-600">Zárva</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="glass glass-panel gradient-border rounded-3xl border-t border-t-cyan-400/25 p-8 md:p-10">
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-800">
                      Név *
                    </label>
                    <input id="name" name="name" required placeholder="Kovács János" className={`${inputClassName} h-12 px-4`} />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-800">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="janos@example.com"
                      className={`${inputClassName} h-12 px-4`}
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-800">
                      Telefon
                    </label>
                    <input id="phone" name="phone" type="tel" placeholder="+36 30 194 0601" className={`${inputClassName} h-12 px-4`} />
                  </div>
                  <div>
                    <label htmlFor="budget" className="mb-2 block text-sm font-medium text-slate-800">
                      Költségkeret
                    </label>
                    <input
                      id="budget"
                      name="budget"
                      placeholder="pl. 200.000 - 300.000 Ft"
                      className={`${inputClassName} h-12 px-4`}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="project" className="mb-2 block text-sm font-medium text-slate-800">
                    Projekt típusa
                  </label>
                  <input
                    id="project"
                    name="project"
                    placeholder="pl. bemutatkozó oldal, webshop..."
                    className={`${inputClassName} h-12 px-4`}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-800">
                    Üzenet *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Írd le röviden, milyen weboldalt szeretnél..."
                    className={`${inputClassName} resize-none px-4 py-3`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="gradient-purple glow-purple inline-flex items-center gap-2 rounded-2xl px-8 py-4 font-semibold text-white transition-all hover:opacity-90 disabled:opacity-50"
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
                {submitError ? <p className="text-sm font-medium text-rose-600">{submitError}</p> : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
