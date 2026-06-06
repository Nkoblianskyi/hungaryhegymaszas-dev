'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/tortenelem', label: 'Történelem' },
  { href: '/technika', label: 'Technika' },
  { href: '/szabalyok', label: 'Szabályok' },
  { href: '/blog', label: 'Blog' },
  { href: '/rolunk', label: 'Rólunk' },
]

const legalLinks = [
  { href: '/adatvedelmi-szabalyzat', label: 'Adatvédelmi szabályzat' },
  { href: '/cookie-szabalyzat', label: 'Cookie szabályzat' },
]

/* Detailed topographic mountain panorama */
function TopoMountain() {
  return (
    <svg
      viewBox="0 0 1440 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full block"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Deep background range — very faint */}
      <path
        d="M0,280 L0,200 L90,170 L180,195 L280,140 L370,178 L460,108 L550,158 L640,120 L730,170 L820,90 L910,148 L1000,105 L1090,168 L1180,85 L1270,155 L1360,120 L1440,148 L1440,280 Z"
        fill="oklch(0.13 0.007 240)"
      />
      {/* Mid range */}
      <path
        d="M0,280 L0,220 L60,202 L130,218 L220,168 L310,200 L400,132 L480,174 L560,148 L640,195 L720,110 L800,168 L880,130 L960,182 L1040,118 L1120,178 L1200,100 L1280,165 L1360,138 L1440,172 L1440,280 Z"
        fill="oklch(0.15 0.008 240)"
      />
      {/* Front ridge with sharp peaks */}
      <path
        d="M0,280 L0,250 L70,238 L140,248 L200,225 L260,244 L330,198 L390,232 L450,175 L510,215 L570,190 L620,220 L680,162 L730,195 L780,145 L830,188 L880,155 L930,200 L990,170 L1040,210 L1100,142 L1150,188 L1200,155 L1260,200 L1320,168 L1380,210 L1440,185 L1440,280 Z"
        fill="oklch(0.17 0.009 240)"
      />

      {/* Topographic contour lines — subtle */}
      <path
        d="M0,258 L60,248 L130,260 L200,240 L260,256 L330,220 L400,248 L450,210 L510,235 L570,215 L640,242 L690,195 L750,220 L800,178 L860,210 L920,188 L980,218 L1040,178 L1100,215 L1160,172 L1220,205 L1280,178 L1340,218 L1440,200"
        stroke="oklch(0.22 0.012 240)"
        strokeWidth="0.8"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M0,268 L80,260 L160,270 L240,252 L320,268 L400,235 L480,260 L550,240 L620,262 L700,225 L760,248 L820,205 L890,238 L960,215 L1030,245 L1100,210 L1170,238 L1250,202 L1330,235 L1440,215"
        stroke="oklch(0.20 0.010 240)"
        strokeWidth="0.6"
        fill="none"
        opacity="0.5"
      />

      {/* Main ridge accent line */}
      <polyline
        points="0,250 70,238 140,248 200,225 260,244 330,198 390,232 450,175 510,215 570,190 620,220 680,162 730,195 780,145 830,188 880,155 930,200 990,170 1040,210 1100,142 1150,188 1200,155 1260,200 1320,168 1380,210 1440,185"
        stroke="oklch(0.72 0.12 215)"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />

      {/* Main peak — Kékes silhouette at 780 */}
      <polyline
        points="758,180 780,145 802,180"
        stroke="oklch(0.94 0.005 95)"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Secondary peak highlight at 1100 */}
      <polyline
        points="1080,165 1100,142 1120,165"
        stroke="oklch(0.94 0.005 95)"
        strokeWidth="1.2"
        fill="none"
        opacity="0.7"
      />
      {/* Peak at 450 */}
      <polyline
        points="432,198 450,175 468,198"
        stroke="oklch(0.94 0.005 95)"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />

      {/* Kékes label */}
      <text
        x="780"
        y="136"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="8"
        fill="oklch(0.72 0.12 215)"
        letterSpacing="1"
        opacity="0.9"
      >
        KÉKES 1014m
      </text>
      <line
        x1="780"
        y1="139"
        x2="780"
        y2="145"
        stroke="oklch(0.72 0.12 215)"
        strokeWidth="0.7"
        opacity="0.7"
      />
    </svg>
  )
}

export function Footer() {
  const pathname = usePathname()

  return (
    <footer className="bg-background border-t border-border mt-0">

      {/* Topo mountain panorama — bleeds edge to edge */}
      <div className="relative -mb-1">
        <TopoMountain />
        {/* Vertical coordinate tick marks overlay */}
        <div className="absolute bottom-4 left-6 flex flex-col gap-[2px]" aria-hidden="true">
          {['1000', '800', '600', '400', '200'].map((m, i) => (
            <div key={m} className="flex items-center gap-2">
              <div
                className="bg-border"
                style={{ width: i % 2 === 0 ? '12px' : '6px', height: '1px' }}
              />
              {i % 2 === 0 && (
                <span className="font-mono text-[7px] text-border tracking-widest opacity-60">
                  {m}m
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="border-t border-border" />

      <div className="max-w-screen-xl mx-auto px-6 md:px-12">

        {/* Big asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-0">

          {/* Left — Identity block */}
          <div className="py-12 md:py-16 pr-0 md:pr-16 border-b md:border-b-0 md:border-r border-border">

            {/* Wordmark */}
            <div className="mb-8">
              <Link href="/" className="inline-flex flex-col gap-0 group" aria-label="Főoldal">
                <span
                  className="font-serif italic font-bold leading-none tracking-tight text-foreground group-hover:text-accent transition-colors duration-300"
                  style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
                >
                  Hungary
                </span>
                <div className="flex items-center gap-3 mt-1">
                  {/* Custom mountain mark */}
                  <svg width="32" height="18" viewBox="0 0 40 22" fill="none" aria-hidden="true" className="flex-shrink-0">
                    <polyline
                      points="0,21 20,1 40,21"
                      stroke="oklch(0.72 0.12 215)"
                      strokeWidth="1.5"
                      strokeLinejoin="miter"
                      fill="none"
                    />
                    <polyline
                      points="12,13 20,1 28,13"
                      stroke="oklch(0.94 0.005 95)"
                      strokeWidth="1"
                      strokeLinejoin="miter"
                      fill="none"
                    />
                    <polyline
                      points="18,5 20,1 22,5"
                      stroke="oklch(0.72 0.12 215)"
                      strokeWidth="1"
                      strokeLinejoin="miter"
                      fill="none"
                    />
                  </svg>
                  <span className="font-sans font-light text-[10px] uppercase tracking-[0.45em] text-accent">
                    Hegymászás
                  </span>
                </div>
              </Link>
            </div>

            {/* Tagline */}
            <p className="font-sans text-sm text-foreground/70 leading-relaxed max-w-sm mb-10">
              Alpinizmus és hegyiturizmus Magyarországon. Általános tájékoztatás hegymászók számára.
            </p>

            {/* Coords + email in a ruled block */}
            <div className="flex flex-col gap-4 border-l-2 border-accent pl-4">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-foreground/40">Székhely</span>
                <span className="font-mono text-xs text-foreground/75">47.4979° É / 19.0402° K</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-foreground/40">Kapcsolat</span>
                <a
                  href="mailto:info@hungaryhegymaszas.com"
                  className="font-sans text-sm text-accent hover:text-foreground transition-colors duration-200"
                >
                  info@hungaryhegymaszas.com
                </a>
              </div>
            </div>
          </div>

          {/* Right — Nav + legal stacked vertically */}
          <div className="py-12 md:py-16 pl-0 md:pl-16 flex flex-col justify-between gap-12">

            {/* Navigation — vertical ruled list */}
            <nav aria-label="Lábléc navigáció">
              <p className="font-mono text-[8px] uppercase tracking-[0.35em] text-foreground/40 mb-6">
                Oldalak
              </p>
              <ul className="flex flex-col">
                {navLinks.map((link, i) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`group flex items-center gap-4 py-[10px] border-b border-border transition-all duration-200 ${
                        pathname === link.href
                          ? 'text-accent'
                          : 'text-foreground/75 hover:text-foreground'
                      }`}
                    >
                      <span className="font-mono text-[9px] text-foreground/30 group-hover:text-foreground/50 w-5 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-sans text-sm tracking-wide">
                        {link.label}
                      </span>
                      <span className="ml-auto text-foreground/40 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Legal links */}
            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.35em] text-foreground/40 mb-4">
                Jogi
              </p>
              <ul className="flex flex-col gap-2">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-xs text-foreground/60 hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-border">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="font-mono text-[9px] text-foreground/50 uppercase tracking-[0.25em]">
            © {new Date().getFullYear()} hungaryhegymaszas.com
          </p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[9px] text-foreground/50 uppercase tracking-[0.25em]">
              Minden jog fenntartva
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
