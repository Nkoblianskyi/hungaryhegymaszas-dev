'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/tortenelem', label: 'Történelem' },
  { href: '/technika', label: 'Technika' },
  { href: '/szabalyok', label: 'Szabályok' },
  { href: '/blog', label: 'Blog' },
  { href: '/rolunk', label: 'Rólunk' },
]

function Wordmark({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex flex-col items-center leading-none select-none ${className}`}
      aria-label="Hungary Hegymászás — Főoldal"
    >
      {/* Peak mark — minimal SVG mountain triangle */}
      <svg
        width="32"
        height="18"
        viewBox="0 0 32 18"
        fill="none"
        aria-hidden="true"
        className="mb-[3px]"
      >
        {/* left ridge */}
        <polyline
          points="0,17 16,1 32,17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="miter"
          fill="none"
          className="text-accent"
        />
        {/* snow cap */}
        <polyline
          points="10,10 16,1 22,10"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinejoin="miter"
          fill="none"
          className="text-foreground"
        />
      </svg>

      {/* Wordmark type lockup */}
      <span className="font-serif italic font-bold text-[22px] leading-none tracking-[-0.02em] text-foreground group-hover:text-accent transition-colors duration-300">
        Hungary
      </span>
      <span
        className="font-sans font-light text-[9px] uppercase tracking-[0.4em] text-accent mt-[2px]"
      >
        Hegymászás
      </span>
    </Link>
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/96 backdrop-blur-md border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 h-[60px] md:h-[72px] grid grid-cols-3 items-center">

          {/* Left — desktop nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Főnavigáció">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-sans text-[11px] uppercase tracking-[0.18em] transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:bg-accent after:transition-all after:duration-300 ${
                  pathname === link.href
                    ? 'text-foreground after:w-full'
                    : 'text-foreground/60 hover:text-foreground after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Centre — wordmark */}
          <div className="flex justify-center">
            <Wordmark />
          </div>

          {/* Right — desktop nav continued + altitude label */}
          <div className="hidden md:flex items-center justify-end gap-7">
            {navLinks.slice(3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-sans text-[11px] uppercase tracking-[0.18em] transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:bg-accent after:transition-all after:duration-300 ${
                  pathname === link.href
                    ? 'text-foreground after:w-full'
                    : 'text-foreground/60 hover:text-foreground after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Altitude label as typographic accent */}
            <span className="font-mono text-[10px] text-foreground/40 select-none border border-foreground/20 px-2 py-[2px] leading-none">
              3143 m
            </span>
          </div>

          {/* Mobile — burger */}
          <div className="flex md:hidden justify-end col-start-3">
            <button
              className="flex flex-col gap-[5px] w-8 h-8 items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Menü bezárása' : 'Menü megnyitása'}
              aria-expanded={menuOpen}
            >
              <span
                className={`block h-[1px] bg-foreground transition-all duration-300 origin-center ${
                  menuOpen ? 'w-6 rotate-45 translate-y-[6px]' : 'w-6'
                }`}
              />
              <span
                className={`block h-[1px] bg-foreground transition-all duration-300 ${
                  menuOpen ? 'w-0 opacity-0' : 'w-4'
                }`}
              />
              <span
                className={`block h-[1px] bg-foreground transition-all duration-300 origin-center ${
                  menuOpen ? 'w-6 -rotate-45 -translate-y-[6px]' : 'w-6'
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ——— Full-screen mobile overlay ——— */}
      <div
        className={`fixed inset-0 z-40 bg-background flex flex-col justify-between px-8 py-10 transition-all duration-500 md:hidden ${
          menuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
        aria-hidden={!menuOpen}
      >
        {/* top spacer */}
        <div className="h-[60px]" />

        {/* Nav items */}
        <nav aria-label="Mobil navigáció" className="flex flex-col gap-1">
          {/* Diagonal rule */}
          <div className="w-full h-[1px] bg-border mb-8" />

          {navLinks.map((link, i) => (
            <div key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`group flex items-center justify-between py-5 transition-colors duration-200 ${
                  pathname === link.href ? 'text-accent' : 'text-foreground hover:text-accent'
                }`}
                style={{ transitionDelay: menuOpen ? `${i * 55}ms` : '0ms' }}
              >
                <span className="font-serif italic text-[clamp(2rem,10vw,4rem)] leading-none">
                  {link.label}
                </span>
                <span className="font-mono text-[11px] text-foreground/50">
                  0{i + 1}
                </span>
              </Link>
              <div className="w-full h-[1px] bg-border" />
            </div>
          ))}
        </nav>

        {/* Bottom info */}
        <div className="flex flex-col gap-1 pb-4">
          <span className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest">
            N 47.4979° / E 19.0402°
          </span>
          <a
            href="mailto:info@hungaryhegymaszas.com"
            className="font-sans text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            info@hungaryhegymaszas.com
          </a>
        </div>
      </div>
    </>
  )
}
