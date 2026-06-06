import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'Cookie szabályzat | Hungary Hegymászás',
}

function AutoDate() {
  const now = new Date()
  const formatted = now.toLocaleDateString('hu-HU', { year: 'numeric', month: 'long', day: 'numeric' })
  return <span>{formatted}</span>
}

export default function CookieSzabalyzatPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
    <div className="pt-20 min-h-screen">
      <div className="max-w-screen-md mx-auto px-6 py-16">
        <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent mb-4">
          Jogi információk
        </p>
        <h1 className="font-serif italic font-300 text-foreground text-[clamp(2.5rem,6vw,5rem)] leading-tight mb-4">
          Cookie szabályzat
        </h1>
        <p className="text-xs text-muted-foreground mb-12">
          Utolsó frissítés: <AutoDate />
        </p>

        <div className="flex flex-col gap-10 text-muted-foreground text-sm leading-relaxed">
          <section>
            <h2 className="font-serif italic text-xl text-foreground mb-3">Mi az a cookie?</h2>
            <p>
              A cookie (süti) egy kis szövegfájl, amelyet a weboldal elment az Ön számítógépére
              vagy mobil eszközére, amikor felkeresi az oldalt. Segítségével az oldal megjegyzi
              az Ön beállításait és preferenciáit.
            </p>
          </section>

          <section>
            <h2 className="font-serif italic text-xl text-foreground mb-3">Milyen cookie-kat használunk?</h2>
            <div className="flex flex-col gap-4">
              <div className="border-l-2 border-accent pl-4">
                <p className="font-sans text-xs uppercase tracking-widest text-foreground mb-1">Szükséges cookie-k</p>
                <p>
                  Ezek a cookie-k elengedhetetlenek a weboldal alapvető működéséhez. Nélkülük
                  az oldal nem tud megfelelően működni. Ide tartozik például a cookie-hozzájárulás
                  tárolása.
                </p>
              </div>
              <div className="border-l-2 border-border pl-4">
                <p className="font-sans text-xs uppercase tracking-widest text-foreground mb-1">Analitikai cookie-k</p>
                <p>
                  Anonim statisztikai adatokat gyűjtünk arról, hogyan használják a látogatók az
                  oldalt. Ezek az adatok segítenek a weboldal fejlesztésében. Csak akkor alkalmazzuk,
                  ha Ön ehhez hozzájárult.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif italic text-xl text-foreground mb-3">Hogyan kezelje a cookie-kat?</h2>
            <p>
              A böngészője beállításaiban bármikor engedélyezheti vagy letilthatja a cookie-k
              fogadását. Felhívjuk figyelmét, hogy a cookie-k letiltása esetén az oldal egyes
              funkciói nem megfelelően működhetnek.
            </p>
          </section>

          <section>
            <h2 className="font-serif italic text-xl text-foreground mb-3">Cookie-k törlése</h2>
            <p>
              A korábban mentett cookie-kat bármikor törölheti böngészője beállításaiban. A
              törlés után az oldal újra megjeleníti a cookie-hozzájárulásra vonatkozó értesítést.
            </p>
          </section>

          <section>
            <h2 className="font-serif italic text-xl text-foreground mb-3">Kapcsolat</h2>
            <p>
              Ha kérdése van a cookie-kezeléssel kapcsolatban, vegye fel velünk a kapcsolatot:{' '}
              <a href="mailto:info@hungaryhegymaszas.com" className="text-accent hover:text-foreground transition-colors">
                info@hungaryhegymaszas.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
