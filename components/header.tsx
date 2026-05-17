"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CalendarDays, Menu, X } from "lucide-react"
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
  "relative rounded-2xl border border-fuchsia-400/35",
  "bg-[#100a30]/85",
  "shadow-[0_18px_50px_rgba(2,0,14,0.58),inset_0_1px_0_rgba(255,255,255,0.08)]",
  "backdrop-blur-[24px] backdrop-saturate-150",
)

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [bookingName, setBookingName] = useState("")
  const [bookingEmail, setBookingEmail] = useState("")
  const [bookingSubmitted, setBookingSubmitted] = useState(false)

  const timeSlots = Array.from({ length: 10 }, (_, i) => {
    const hour = 9 + i
    const start = `${hour.toString().padStart(2, "0")}:00`
    const end = `${(hour + 1).toString().padStart(2, "0")}:00`
    return `${start}-${end}`
  })

  const minDate = new Date().toISOString().split("T")[0]

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

  const handleBookingSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setBookingSubmitted(true)
  }

  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-[60] border-b border-fuchsia-500/30 bg-[#0d072a]/95 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-3 py-2 sm:px-4">
          <button
            type="button"
            onClick={() => setIsBookingOpen((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/40 bg-fuchsia-500/15 px-3 py-1.5 text-xs font-semibold text-fuchsia-100 transition-colors hover:bg-fuchsia-500/25 sm:text-sm"
          >
            <CalendarDays className="h-4 w-4" />
            Foglalj ingyenes megbeszélést
          </button>

          <span className="hidden text-xs text-indigo-200 sm:inline">1 órás idősávok, gyors visszajelzés emailben</span>
        </div>

        {isBookingOpen ? (
          <div className="border-t border-fuchsia-500/25 bg-[#0a0422]/97">
            <div className="mx-auto w-full max-w-7xl px-3 py-3 sm:px-4">
              <form onSubmit={handleBookingSubmit} className="grid gap-2 md:grid-cols-5">
                <input
                  type="date"
                  min={minDate}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                  className="glass-input rounded-xl px-3 py-2 text-sm text-white"
                />
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  required
                  className="glass-input rounded-xl px-3 py-2 text-sm text-white"
                >
                  <option value="">Idősáv</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Név"
                  value={bookingName}
                  onChange={(e) => setBookingName(e.target.value)}
                  required
                  className="glass-input rounded-xl px-3 py-2 text-sm text-white placeholder:text-indigo-300"
                />
                <input
                  type="email"
                  placeholder="Email cím"
                  value={bookingEmail}
                  onChange={(e) => setBookingEmail(e.target.value)}
                  required
                  className="glass-input rounded-xl px-3 py-2 text-sm text-white placeholder:text-indigo-300"
                />
                <button type="submit" className="ainex-cta-btn w-full justify-center text-sm">
                  <span>Időpont foglalása</span>
                  <span className="ainex-cta-icon">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>
              </form>

              {bookingSubmitted ? (
                <p className="mt-2 text-xs text-emerald-300">
                  Köszi! Rögzítettük a kérést, hamarosan emailben visszaigazoljuk az időpontot.
                </p>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>

      <header className="pointer-events-none fixed top-[60px] right-0 left-0 z-50 flex justify-center px-3 sm:top-[64px] sm:px-4">
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
              <span className="text-fuchsia-400">.hu</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleSectionClick(item.href)}
                className="group relative px-4 py-2 text-sm text-indigo-200 transition-colors hover:text-white"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-fuchsia-400 transition-all duration-300 group-hover:w-4/5" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="#kapcsolat"
              onClick={handleSectionClick("#kapcsolat")}
              className="ainex-cta-btn text-sm"
            >
              <span>Ajánlatkérés</span>
              <span className="ainex-cta-icon">
                <ArrowRight className="h-4 w-4" />
              </span>
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
              className="rounded-xl px-4 py-3 text-indigo-200 transition-all hover:bg-fuchsia-500/15 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#kapcsolat"
            onClick={handleSectionClick("#kapcsolat")}
            className="ainex-cta-btn mt-2 w-full text-sm"
          >
            <span>Ajánlatkérés</span>
            <span className="ainex-cta-icon">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </nav>
        </div>
      </div>
      </header>
    </>
  )
}
