"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { trackLeadConversion } from "@/lib/google-tracking"

export default function KoszonjukPage() {
  useEffect(() => {
    trackLeadConversion()
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#090326_0%,#080320_58%,#06021a_100%)]" />
      <div className="pointer-events-none absolute top-[-12%] left-[-6%] h-[420px] w-[420px] rounded-full bg-fuchsia-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-8%] bottom-[-14%] h-[420px] w-[420px] rounded-full bg-violet-500/22 blur-[120px]" />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl items-center px-6 py-24">
        <div
          className="glass glass-panel gradient-border w-full rounded-[2rem] border border-fuchsia-400/35 px-8 text-center sm:px-14"
          style={{ paddingTop: "5.5rem", paddingBottom: "5.5rem" }}
        >
          <div className="mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 shadow-[0_20px_48px_rgba(16,185,129,0.35)]">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>

          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/45 bg-fuchsia-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-fuchsia-200">
            Sikeres üzenetküldés
          </span>

          <h1 className="mb-5 text-4xl font-bold leading-tight text-white sm:text-6xl">Köszönjük az üzeneted!</h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-indigo-100 sm:text-xl">
            Megkaptuk a megkeresésedet, és 24 órán belül felvesszük veled a kapcsolatot.
          </p>

          <div style={{ marginTop: "1.75rem" }}>
            <Link href="/" className="ainex-cta-btn mx-auto w-full justify-center sm:w-auto">
              <span>Vissza a főoldalra</span>
              <span className="ainex-cta-icon">
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
