'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

const values = [
  {
    num: '01',
    title: 'Hiteles tájékoztatás',
    desc: 'Kizárólag általánosan elfogadott, ellenőrzött információkat közlünk az alpinizmusról és a hegyiturizmusról. Nem hivatkozunk kereskedelmi forrásokra.',
  },
  {
    num: '02',
    title: 'Közérthető tudás',
    desc: 'Célunk, hogy a hegymászás világa mindenki számára érthető legyen — kezdőtől a tapasztalt alpinistáig. A technikai tartalmakat is igyekszünk hozzáférhető formában közvetíteni.',
  },
  {
    num: '03',
    title: 'Természettisztelet',
    desc: 'Meggyőződésünk, hogy a hegyekről szóló tájékoztatásnak mindig tartalmaznia kell a természetvédelem szempontjait. A hegyek megőrzése közös felelősség.',
  },
  {
    num: '04',
    title: 'Magyar alpinizmus öröksége',
    desc: 'Különösen fontosnak tartjuk a magyar hegymászók és hegyijárók örökségének dokumentálását és megismertetését a szélesebb közönséggel.',
  },
]

// ── Popup modal ─────────────────────────────────────────────────────────────
function SuccessPopup({ onClose }: { onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Üzenet elküldve"
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm px-6"
    >
      <div className="bg-card border border-accent max-w-sm w-full p-10 flex flex-col items-center text-center gap-5">
        <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent">
          Elküldve
        </span>
        <p className="font-serif italic text-3xl text-foreground leading-tight">
          Üzenetét megkaptuk.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Köszönjük megkeresését. Hamarosan visszajelzünk az{' '}
          <span className="text-accent">info@hungaryhegymaszas.com</span>{' '}
          e-mail-en keresztül.
        </p>
        <button
          onClick={onClose}
          className="mt-2 font-sans text-xs uppercase tracking-widest text-muted-foreground border border-border px-6 py-2.5 hover:border-foreground hover:text-foreground transition-colors"
        >
          Bezárás
        </button>
      </div>
    </div>
  )
}

// ── Contact form with checkbox ────────────────────────────────────────────────
function AboutContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [agreed, setAgreed] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreed) return
    setShowPopup(true)
  }

  const handleClose = () => {
    setShowPopup(false)
    setFields({ name: '', email: '', message: '' })
    setAgreed(false)
  }

  return (
    <>
      {showPopup && <SuccessPopup onClose={handleClose} />}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="about-name"
              className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground"
            >
              Neve
            </label>
            <input
              id="about-name"
              type="text"
              required
              value={fields.name}
              onChange={(e) => setFields({ ...fields, name: e.target.value })}
              className="bg-input border border-border text-foreground text-sm px-4 py-3 outline-none focus:border-accent transition-colors placeholder:text-muted-foreground"
              placeholder="Teljes neve"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="about-email"
              className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground"
            >
              E-mail
            </label>
            <input
              id="about-email"
              type="email"
              required
              value={fields.email}
              onChange={(e) => setFields({ ...fields, email: e.target.value })}
              className="bg-input border border-border text-foreground text-sm px-4 py-3 outline-none focus:border-accent transition-colors placeholder:text-muted-foreground"
              placeholder="email@domain.hu"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="about-message"
            className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground"
          >
            Üzenet
          </label>
          <textarea
            id="about-message"
            required
            rows={5}
            value={fields.message}
            onChange={(e) => setFields({ ...fields, message: e.target.value })}
            className="bg-input border border-border text-foreground text-sm px-4 py-3 outline-none focus:border-accent transition-colors placeholder:text-muted-foreground resize-none"
            placeholder="Írja le kérdését vagy megjegyzését..."
          />
        </div>

        {/* Checkbox */}
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 w-4 h-4 accent-accent shrink-0"
          />
          <span className="font-sans text-xs text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
            Elolvastam és elfogadom az{' '}
            <a
              href="/adatvedelmi-szabalyzat"
              className="text-accent underline underline-offset-2"
              target="_blank"
              rel="noreferrer"
            >
              adatvédelmi szabályzatot
            </a>
            , és hozzájárulok adataim kezeléséhez.
          </span>
        </label>

        <button
          type="submit"
          disabled={!agreed}
          className="self-start font-sans text-xs uppercase tracking-widest bg-foreground text-background px-8 py-3 hover:bg-accent transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Üzenet küldése
        </button>
      </form>
    </>
  )
}

// ── Page export ───────────────────────────────────────────────────────────────
export default function RolunkPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
      {/* Page hero */}
      <div className="pt-20 bg-secondary border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 pt-16 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent mb-4">
              Rólunk
            </p>
            <h1 className="font-serif italic font-300 text-foreground text-[clamp(3rem,7vw,6rem)] leading-[0.95]">
              Kik vagyunk?
            </h1>
          </div>
          <p className="text-muted-foreground text-base leading-relaxed max-w-md">
            A hungaryhegymaszas.com az alpinizmus és hegyiturizmus iránt szenvedélyesen
            érdeklődők számára létrehozott tájékoztató portál. Általános, hiteles és
            közérthető információkat közlünk.
          </p>
        </div>
      </div>

      {/* About text */}
      <section className="max-w-screen-xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-14 items-start">
        <div>
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent mb-4">
            Küldetésünk
          </p>
          <h2 className="font-serif italic font-300 text-foreground text-[clamp(2rem,4.5vw,3.5rem)] leading-tight mb-6 text-balance">
            Magyarország alpinizmus portálja
          </h2>
          <div className="flex flex-col gap-5 text-muted-foreground text-sm leading-relaxed">
            <p>
              A hungaryhegymaszas.com célja, hogy az alpinizmus és a hegyiturizmus világa
              ne maradjon szűk szakmai körök privilégiuma. Úgy gondoljuk, hogy a hegymászás
              szépségét, kihívásait és kultúráját mindenki megismerésre érdemes.
            </p>
            <p>
              Oldalunkon kizárólag általános tájékoztató tartalmat közlünk. Nem ajánlunk
              konkrét kereskedelmi termékeket, szervezeteket vagy egyéni személyeket. A cél
              az ismeretterjesztés és a tudásátadás, nem a reklám.
            </p>
            <p>
              Magyar alpinizmus gazdag örökséget hordoz magában. Az első szervezett
              expedícióktól a modern kori teljesítményekig ez a történet kevéssé ismert
              a szélesebb nyilvánosság előtt. Ezen szeretnénk változtatni.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="flex flex-col gap-0">
          {values.map((v) => (
            <div
              key={v.num}
              className="border-t border-border py-7 grid grid-cols-[40px_1fr] gap-4 last:border-b"
            >
              <span className="font-mono text-[10px] text-muted-foreground pt-0.5">{v.num}</span>
              <div>
                <h3 className="font-serif italic text-lg text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact section */}
      <section
        id="kapcsolat"
        className="bg-secondary border-t border-border py-20 md:py-28"
      >
        <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent mb-4">
              Kapcsolat
            </p>
            <h2 className="font-serif italic font-300 text-foreground text-[clamp(2.2rem,5vw,4rem)] leading-[1.05]">
              Kérdése van?<br />Írjon nekünk.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-base max-w-sm">
              Általános tájékoztatásért, tartalommal vagy az oldallal kapcsolatos
              kérdéseivel forduljon hozzánk bizalommal.
            </p>
            <a
              href="mailto:info@hungaryhegymaszas.com"
              className="mt-4 block text-accent hover:text-foreground transition-colors text-sm"
            >
              info@hungaryhegymaszas.com
            </a>
          </div>
          <AboutContactForm />
        </div>
      </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
