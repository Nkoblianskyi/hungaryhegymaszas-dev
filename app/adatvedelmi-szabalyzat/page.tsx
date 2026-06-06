import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'Adatvédelmi szabályzat | Hungary Hegymászás',
}

function AutoDate() {
  const now = new Date()
  return <span>{now.toLocaleDateString('hu-HU', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
}

export default function AdatvedelmiPage() {
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
          Adatvédelmi szabályzat
        </h1>
        <p className="text-xs text-muted-foreground mb-12">
          Utolsó frissítés: <AutoDate />
        </p>

        <div className="flex flex-col gap-10 text-muted-foreground text-sm leading-relaxed">
          <section>
            <h2 className="font-serif italic text-xl text-foreground mb-3">1. Az adatkezelő</h2>
            <p>
              A hungaryhegymaszas.com weboldalt üzemeltető szervezet az adatkezelő. Adatkezeléssel
              kapcsolatos kérdéseivel forduljon hozzánk a következő e-mail-en:{' '}
              <a href="mailto:info@hungaryhegymaszas.com" className="text-accent hover:text-foreground transition-colors">
                info@hungaryhegymaszas.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-serif italic text-xl text-foreground mb-3">2. Gyűjtött adatok köre</h2>
            <p className="mb-3">
              Kizárólag az alábbi esetekben gyűjtünk személyes adatot:
            </p>
            <ul className="flex flex-col gap-2 pl-4">
              {[
                'Kapcsolatfelvételi az űrlapon megadott név és e-mail-cím',
                'Weboldal-látogatáshoz kapcsolódó anonim technikai adatok (IP-cím, böngészőtípus, referrer)',
                'Cookie-hozzájárulás állapota (igen/nem)',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-4 h-[1px] bg-accent shrink-0 mt-2.5" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif italic text-xl text-foreground mb-3">3. Az adatkezelés célja</h2>
            <p>
              Az e-mail-cím és a neve kizárólag az Ön megkeresésére való válaszadás
              céljából kerül felhasználásra. Az adatokat harmadik fél részére nem adjuk át,
              és marketing célra sem alkalmazzuk.
            </p>
          </section>

          <section>
            <h2 className="font-serif italic text-xl text-foreground mb-3">4. Az adatok megőrzési ideje</h2>
            <p>
              A kapcsolatfelvételi üzeneteket és az ahhoz kapcsolódó személyes adatokat az
              ügy lezárása után legfeljebb 30 napig őrizzük meg. Ezt követően az adatok
              visszafordíthatatlanul törlődnek.
            </p>
          </section>

          <section>
            <h2 className="font-serif italic text-xl text-foreground mb-3">5. Az Ön jogai</h2>
            <div className="flex flex-col gap-3">
              {[
                { title: 'Hozzáférés joga', desc: 'Tájékoztatást kérhet arról, hogy milyen adatokat kezelünk Önről.' },
                { title: 'Helyesbítés joga', desc: 'Kérheti a pontatlan adatok javítását.' },
                { title: 'Törlés joga', desc: 'Kérheti személyes adatainak törlését ("elfeledtetéshez való jog").' },
                { title: 'Tiltakozás joga', desc: 'Tiltakozhat adatainak kezelése ellen.' },
              ].map((r) => (
                <div key={r.title} className="border-b border-border pb-3 last:border-0">
                  <p className="font-sans text-xs uppercase tracking-wider text-foreground mb-1">{r.title}</p>
                  <p>{r.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif italic text-xl text-foreground mb-3">6. Cookie-k</h2>
            <p>
              A cookie-k kezeléséről részletes tájékoztatást a{' '}
              <a href="/cookie-szabalyzat" className="text-accent hover:text-foreground transition-colors underline underline-offset-2">
                Cookie szabályzat
              </a>{' '}
              oldalon talál.
            </p>
          </section>

          <section>
            <h2 className="font-serif italic text-xl text-foreground mb-3">7. Jogorvoslat</h2>
            <p>
              Amennyiben adatkezelési panasza van, fordulhat a Nemzeti Adatvédelmi és
              Információszabadság Hatósághoz (NAIH). Közvetlenül is megkereshet bennünket
              a fenti e-mail-en.
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
