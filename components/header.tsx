"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { scrollToSectionHash } from "@/lib/scroll-to-section"

const navItems = [
  { href: "#szolgaltatasok", label: "Szolgáltatások" },
  { href: "#munkamenet", label: "Folyamat" },
  { href: "#technologia", label: "Technológia" },
  { href: "#arak", label: "Árak" },
  { href: "#rolunk", label: "Rólunk" },
]

/**
 * Üveg fejléc – Tailwind osztályokkal (beépített -webkit-backdrop-filter).
 * Fontos: a fix headeren NE legyen transform (translate), mert az letiltja / elrontja a backdrop-blur-t.
 */
const navSurfaceClassName = cn(
  "relative rounded-2xl border border-white/20",
  "bg-gradient-to-b from-white/[0.15] via-white/[0.07] to-white/[0.035]",
  "shadow-[0_16px_48px_rgba(2,0,18,0.38),inset_0_1px_0_rgba(255,255,255,0.24),inset_0_-1px_0_rgba(255,255,255,0.06)]",
  "backdrop-blur-[40px] backdrop-saturate-200",
)

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleSectionClick = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) {
      return
    }

    event.preventDefault()
    setIsMenuOpen(false)
    scrollToSectionHash(href)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    setScrolled(window.scrollY > 20)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="pointer-events-none fixed top-4 right-0 left-0 z-50 flex justify-center px-3 sm:px-4">
      <div
        className={cn(
          "pointer-events-auto w-full transition-all duration-500",
          scrolled ? "max-w-5xl w-[95%]" : "max-w-4xl w-[90%]",
        )}
      >
        <div
          className={cn(
            navSurfaceClassName,
            "transition-all duration-500",
            scrolled ? "px-6 py-3" : "px-8 py-4",
          )}
        >
        <div className="pointer-events-none absolute inset-[1px] rounded-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03)_30%,transparent_65%)]" />
        <div className="relative z-10 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 transition-opacity group-hover:opacity-90">
              <Image
                src="/Honlapholnapra_logo_small.webp"
                alt="honlapholnapra.hu"
                width={40}
                height={40}
                className="h-9 w-9 object-contain"
                priority
              />
            </div>
            <div className="min-w-0">
              <span className="text-base font-semibold text-white sm:text-lg">honlapholnapra</span>
              <span className="text-[#a855f7]">.hu</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleSectionClick(item.href)}
                className="group relative px-4 py-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#7c3aed] transition-all duration-300 group-hover:w-4/5" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="#kapcsolat"
              onClick={handleSectionClick("#kapcsolat")}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl px-6 py-2.5 text-sm font-medium text-white gradient-purple"
            >
              <span className="relative z-10">Ajánlatkérés</span>
              <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0" />
            </Link>
          </div>

          <button
            className="glass-button flex h-10 w-10 items-center justify-center rounded-xl text-white lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menü"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        </div>

        <div
          className={cn(
            navSurfaceClassName,
            "mt-2 w-full transition-all duration-300 lg:hidden",
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
          )}
        >
        <div className="pointer-events-none absolute inset-[1px] rounded-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03)_30%,transparent_65%)]" />
        <nav className="relative z-10 flex flex-col gap-1 p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleSectionClick(item.href)}
              className="rounded-xl px-4 py-3 text-white/70 transition-all hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#kapcsolat"
            onClick={handleSectionClick("#kapcsolat")}
            className="mt-2 rounded-xl px-4 py-3 text-center font-medium text-white gradient-purple"
          >
            Ajánlatkérés
          </Link>
        </nav>
        </div>
      </div>
    </header>
  )
}
