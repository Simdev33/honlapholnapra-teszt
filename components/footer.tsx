"use client"

import Image from "next/image"
import Link from "next/link"
import { scrollToSectionHash } from "@/lib/scroll-to-section"

const navigation = {
  services: [
    { name: "Bemutatkozó oldal", href: "#szolgaltatasok" },
    { name: "Webshop", href: "#szolgaltatasok" },
    { name: "Landing page", href: "#szolgaltatasok" },
    { name: "SEO optimalizálás", href: "#szolgaltatasok" },
  ],
  company: [
    { name: "Rólunk", href: "#rolunk" },
    { name: "Folyamat", href: "#munkamenet" },
    { name: "Technológia", href: "#technologia" },
    { name: "Árak", href: "#arak" },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-fuchsia-400/25">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07021a] to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="glass glass-panel rounded-3xl px-8 py-10 md:px-10 md:py-12">
          <div className="relative z-10 grid gap-12 lg:grid-cols-3">
            <div>
              <Link href="/" className="group inline-flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 transition-opacity group-hover:opacity-90">
                  <Image
                    src="/Honlapholnapra_logo_small.webp"
                    alt="honlapholnapra.hu"
                    width={40}
                    height={40}
                    className="h-9 w-9 object-contain"
                  />
                </div>
                <div>
                  <span className="text-lg font-semibold text-white">honlapholnapra</span>
                  <span className="text-fuchsia-400">.hu</span>
                </div>
              </Link>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-slate-600">
                Professzionális weboldal készítés modern technológiákkal, gyorsan és megbízhatóan.
              </p>
            </div>

            <div>
              <h3 className="mb-6 font-semibold text-slate-900">Szolgáltatások</h3>
              <ul className="space-y-4">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        if (item.href.startsWith("#") && item.href.length > 1) {
                          e.preventDefault()
                          scrollToSectionHash(item.href)
                        }
                      }}
                      className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 font-semibold text-slate-900">Cég</h3>
              <ul className="space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        if (item.href.startsWith("#") && item.href.length > 1) {
                          e.preventDefault()
                          scrollToSectionHash(item.href)
                        }
                      }}
                      className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-fuchsia-400/20 pt-8 lg:flex-row">
          <p className="text-sm text-indigo-300">
            &copy; {new Date().getFullYear()} honlapholnapra.hu. Minden jog fenntartva.
          </p>
          
        </div>
      </div>
    </footer>
  )
}
