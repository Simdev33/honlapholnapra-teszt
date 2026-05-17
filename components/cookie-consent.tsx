"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Cookie } from "lucide-react"
import { cn } from "@/lib/utils"

const STORAGE_KEY = "honlapholnapra-cookie-consent"

type ConsentValue = "all" | "essential"

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true)
      }
    } catch {
      setVisible(true)
    }
  }, [])

  const save = (value: ConsentValue) => {
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      /* ignore */
    }
    setVisible(false)
  }

  if (!mounted || !visible) {
    return null
  }

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] flex justify-center px-3 pb-4 pt-2 sm:px-4 sm:pb-6"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
    >
      <div
        className={cn(
          "pointer-events-auto relative w-full max-w-4xl rounded-2xl border border-white/20",
          "bg-gradient-to-b from-white/[0.14] via-white/[0.07] to-white/[0.04]",
          "shadow-[0_20px_56px_rgba(2,0,18,0.55),inset_0_1px_0_rgba(255,255,255,0.22)]",
          "backdrop-blur-[28px] backdrop-saturate-200",
        )}
      >
        <div className="pointer-events-none absolute inset-[1px] rounded-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_45%)]" />
        <div className="relative z-10 flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:gap-5 sm:p-4">
          <div className="flex shrink-0 justify-center sm:justify-start">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 shadow-[0_12px_32px_rgba(124,58,237,0.35)]">
              <Cookie className="h-5 w-5 text-white" aria-hidden />
            </div>
          </div>
          <div className="min-w-0 flex-1 text-center sm:text-left">
            <h2 id="cookie-consent-title" className="mb-0.5 text-sm font-semibold text-white sm:text-base">
              Sütik (cookie-k)
            </h2>
            <p id="cookie-consent-desc" className="text-sm leading-relaxed text-white">
              A weboldal működéséhez szükséges sütiket használunk, és — ha elfogadod — anonim látogatási
              statisztikát is (pl. oldalmegtekintések). Részletek az{" "}
              <Link href="#" className="text-pink-400 underline-offset-2 hover:text-pink-300 hover:underline">
                adatvédelmi tájékoztatóban
              </Link>
              .
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:w-auto sm:min-w-[180px]">
            <button
              type="button"
              onClick={() => save("all")}
              className="rounded-xl px-4 py-2 text-sm font-semibold text-white gradient-purple shadow-[0_8px_24px_rgba(124,58,237,0.35)] transition-opacity hover:opacity-90"
            >
              Összes elfogadása
            </button>
            <button
              type="button"
              onClick={() => save("essential")}
              className="glass-button rounded-xl px-4 py-2 text-sm font-medium text-white"
            >
              Csak szükséges
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
