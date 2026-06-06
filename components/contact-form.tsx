'use client'

import { useState } from 'react'

interface ContactFormProps {
  withCheckbox?: boolean
  showPopup?: boolean
}

export function ContactForm({ withCheckbox = false, showPopup = false }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [fields, setFields] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (withCheckbox && !agreed) return
    setSubmitted(true)
  }

  if (submitted && showPopup) {
    return (
      <div className="flex flex-col items-center justify-center border border-accent p-12 text-center gap-4 min-h-[260px]">
        <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent">Elküldve</span>
        <p className="font-serif italic text-3xl text-foreground">Üzenetét megkaptuk.</p>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
          Köszönjük megkeresését. Hamarosan visszajelzünk az{' '}
          <span className="text-accent">info@hungaryhegymaszas.com</span> e-mail-en keresztül.
        </p>
        <button
          onClick={() => { setSubmitted(false); setFields({ name: '', email: '', message: '' }); setAgreed(false) }}
          className="mt-2 font-sans text-xs uppercase tracking-widest text-muted-foreground border border-border px-5 py-2 hover:border-foreground hover:text-foreground transition-colors"
        >
          Bezárás
        </button>
      </div>
    )
  }

  if (submitted) {
    return (
      <div className="flex flex-col gap-3 border border-accent p-8">
        <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent">Elküldve</span>
        <p className="font-serif italic text-2xl text-foreground">Köszönjük megkeresését!</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Hamarosan visszajelzünk az{' '}
          <span className="text-accent">info@hungaryhegymaszas.com</span> e-mail-en.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-name" className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground">
            Neve
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={fields.name}
            onChange={(e) => setFields({ ...fields, name: e.target.value })}
            className="bg-input border border-border text-foreground text-sm px-4 py-3 outline-none focus:border-accent transition-colors placeholder:text-muted-foreground"
            placeholder="Teljes neve"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-email" className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground">
            E-mail
          </label>
          <input
            id="contact-email"
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
        <label htmlFor="contact-message" className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground">
          Üzenet
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={fields.message}
          onChange={(e) => setFields({ ...fields, message: e.target.value })}
          className="bg-input border border-border text-foreground text-sm px-4 py-3 outline-none focus:border-accent transition-colors placeholder:text-muted-foreground resize-none"
          placeholder="Írja le kérdését vagy megjegyzését..."
        />
      </div>

      {withCheckbox && (
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 w-4 h-4 accent-accent shrink-0"
          />
          <span className="font-sans text-xs text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
            Elolvastam és elfogadom az{' '}
            <a href="/adatvedelmi-szabalyzat" className="text-accent underline underline-offset-2" target="_blank" rel="noreferrer">
              adatvédelmi szabályzatot
            </a>
            , és hozzájárulok adataim kezeléséhez.
          </span>
        </label>
      )}

      <button
        type="submit"
        disabled={withCheckbox && !agreed}
        className="self-start font-sans text-xs uppercase tracking-widest bg-foreground text-background px-8 py-3 hover:bg-accent transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Üzenet küldése
      </button>
    </form>
  )
}
