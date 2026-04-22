"use client"

import { useEffect } from "react"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { trackLeadConversion } from "@/lib/google-tracking"

export default function KoszonjukPage() {
  useEffect(() => {
    trackLeadConversion()
  }, [])

  return (
    <main className="min-h-screen bg-background px-6 py-24 text-foreground">
      <section className="mx-auto w-full max-w-3xl">
        <div className="glass glass-panel gradient-border rounded-3xl border-t border-t-emerald-400/30 p-8 text-center md:p-12">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 shadow-[0_18px_46px_rgba(16,185,129,0.35)]">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          <h1 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">Köszönjük az üzeneted!</h1>
          <p className="mx-auto mb-8 max-w-lg text-slate-600">
            Megkaptuk a megkeresésedet, és 24 órán belül felvesszük veled a kapcsolatot.
          </p>
          <Link href="/" className="glass-button inline-flex rounded-xl px-6 py-3 font-medium text-slate-900">
            Vissza a főoldalra
          </Link>
        </div>
      </section>
    </main>
  )
}
