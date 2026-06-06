'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie tájékoztató"
      className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border"
    >
      <div className="max-w-screen-xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
          Ez a weboldal sütiket (cookie-kat) használ a jobb felhasználói élmény érdekében.{' '}
          <Link
            href="/cookie-szabalyzat"
            className="text-accent underline underline-offset-2 hover:text-foreground transition-colors"
          >
            Cookie szabályzat
          </Link>{' '}
          és{' '}
          <Link
            href="/adatvedelmi-szabalyzat"
            className="text-accent underline underline-offset-2 hover:text-foreground transition-colors"
          >
            Adatvédelmi szabályzat
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors px-4 py-2 border border-border hover:border-foreground"
          >
            Elutasítom
          </button>
          <button
            onClick={accept}
            className="text-xs uppercase tracking-widest bg-foreground text-background px-4 py-2 hover:bg-accent hover:text-background transition-colors"
          >
            Elfogadom
          </button>
        </div>
      </div>
    </div>
  )
}
