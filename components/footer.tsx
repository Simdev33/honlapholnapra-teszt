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
  legal: [
    { name: "Adatvédelem", href: "#" },
    { name: "ÁSZF", href: "#" },
    { name: "Cookie szabályzat", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="glass glass-panel rounded-3xl px-8 py-10 md:px-10 md:py-12">
          <div className="relative z-10 grid gap-12 lg:grid-cols-4">
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
                  <span className="text-[#a855f7]">.hu</span>
                </div>
              </Link>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/40">
                Professzionális weboldal készítés modern technológiákkal, gyorsan és megbízhatóan.
              </p>
            </div>

            <div>
              <h3 className="mb-6 font-semibold text-white">Szolgáltatások</h3>
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
                      className="text-sm text-white/40 transition-colors hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 font-semibold text-white">Cég</h3>
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
                      className="text-sm text-white/40 transition-colors hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 font-semibold text-white">Jogi</h3>
              <ul className="space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-white/40 transition-colors hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 lg:flex-row">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} honlapholnapra.hu. Minden jog fenntartva.
          </p>
          
        </div>
      </div>
    </footer>
  )
}
