import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'Technika és edzés | Hungary Hegymászás',
  description: 'Hegymászás technikák, edzéstervek és taktikai tanácsok minden szintű alpinistának.',
}

const sections = [
  {
    tag: 'Erőnléti alapok',
    title: 'Fizikai felkészülés a hegyekre',
    body: [
      'A hegymászás egyike a legkomplexebb fizikai tevékenységeknek. A teljes test izomrendszerét igénybe veszi, miközben a szív- és érrendszerre, a koordinációra és az egyensúlyérzékre is rendkívüli terhelést ró. A rendszeres edzésprogramot ajánlott legalább hat héttel az első komolyabb mászás előtt megkezdeni.',
      'A funkcionális erő kialakítása elsődleges. Fókuszáljon a csípőhajlítókra, a hátsó lábszár izomzatára, a vállövre és az alkarra. A húzódzkodás és a felfüggesztéses gyakorlatok alapvetők. A core stabilizálás — törzsizomzat erősítése — megkülönböztetett figyelmet érdemel, hiszen ez a test "tengelye" a sziklafalon.',
    ],
    tips: [
      'Heti 3-4 erőedzés a mászószezon előtt',
      'Kampómarkolat edzése gumibanda és fogókerék segítségével',
      'Hosszabb sétatúrák hátizsákkal terhelve',
      'Lépcsőzés nehezékkel a lábak kondicionálásához',
    ],
  },
  {
    tag: 'Kötéltechnika',
    title: 'A kötél és a csomózás alapjai',
    body: [
      'A kötéltechnika az alpinizmus egyik legtöbb hibalehetőséget rejtő területe. A helyes csomózás, a kötél kezelése és a biztosítás módszertana évek pratikálása után válik automatikussá. Kezdőknek a nyolcas csomót ajánlják első csomóként, haladóknak a porosz kötés és a prúsik csomó elengedhetetlen.',
      'A kötél gondos kezelése nem csupán technikai kérdés — életek múlnak rajta. A becsavart, csomósodott kötél veszélyes, az átnedvesedett kötél elveszíti energiaelnyelő képességét. A kötél rendszeres ellenőrzése, a kopás figyelése és az időben történő csere alapkövetelményei a biztonságos hegymászásnak.',
    ],
    tips: [
      'Nyolcas csomó csukott és nyitott technikával',
      'Bakancsos prúsik csomó mentési helyzetekben',
      'Felülről ereszkedés: szt. Jakab csomó alkalmazása',
      'Kötél hajtogatása és tárolása mászás után',
    ],
  },
  {
    tag: 'Sziklamászás fogásai',
    title: 'Mozgáskultúra a sziklán',
    body: [
      'A hatékony sziklamászás alapja az energiatakarékos mozgás. A kezdők hajlamosak a karjukat túlterheni, miközben a lábakra kellene építeni — az erős lábizmok sokkal tovább bírják a terhelést, mint az alkatok. A "mindig három pont érint" szabálya az alapbiztonságot jelenti, de a fejlett mászók akár az összes végtagjukat egyszerre mozdítják kontrollált áramlásban.',
      'A talpfogások kategóriái: teljes talp (slab technika), orrfogás (edging), sarokhorog és lábfejhúzás. Ezek kombinációja határozza meg a stiláris megközelítést. A kézfogások: nyílt kéz, gyűrűs fogás és a legterhelőbb zárt (crimp) fogás. Utóbbit kerülje a bemelegedés előtt, sérülésveszélyes.',
    ],
    tips: [
      'Próbálja meg az útvonalat kézzel "végigjárni" mászás előtt',
      'Talpnyomás a fogásokon fontosabb a karnyújtásnál',
      'Laza ujjfogás alapban, kezet csak szükségből szorítsa',
      'Hip rotation technikával növelhető az elérési hatótávolság',
    ],
  },
  {
    tag: 'Mentális felkészítés',
    title: 'A fej szerepe a hegyen',
    body: [
      'A fizikai felkészültség önmagában nem elegendő — a mentális stabilitás legalább annyira fontos, mint az izomzat. A magasságtól való félelem, az exposure érzése és az időjárás változásaiból fakadó stressz mind olyan tényezők, amelyekkel a mászónak bánni kell tudni. A légzéskontroll az első eszköz: lassú, mély kilégzések csökkentik a kortisolszintet és visszahozzák a fókuszt.',
      'A mentális edzés technikái közé tartozik a vizualizáció — az útvonal előzetes mentális végigjárása —, a negatív forgatókönyvek tervszerű végiggondolása (mi lesz, ha véget ér a fogás?) és a flow-állapot elérésének módszerei. A tapasztalt mászók leírásai szerint a legjobb teljesítmények mindig "üres fejjel", teljes jelenléti állapotban születtek.',
    ],
    tips: [
      'Napi 5 perces légzőgyakorlat rekeszizomból',
      'Vizualizáció: az útvonal mentális végigmászása lefekvés előtt',
      'Kisebb célok kitűzése: csak a következő fogásig kell jutni',
      'Pozitív önbeszéd rendszere: konkrét, jelen idejű mondatok',
    ],
  },
]

const plans = [
  {
    level: 'Kezdő',
    weeks: '8 hét',
    sessions: '3 alkalom / hét',
    focus: 'Alaperő, kötéltechnika ismerkedés, biztonság',
  },
  {
    level: 'Középhaladó',
    weeks: '12 hét',
    sessions: '4 alkalom / hét',
    focus: 'Specifikus fogástechnika, kültéri mászás, autonóm biztosítás',
  },
  {
    level: 'Haladó',
    weeks: '16 hét',
    sessions: '5 alkalom / hét',
    focus: 'Teljesítménymászás, ereszkedés, navigáció, mentési protokollok',
  },
]

export default function TechnikaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
      {/* Hero */}
      <div className="pt-20 bg-secondary border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 pt-16 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent mb-4">
              Tudás és fejlődés
            </p>
            <h1 className="font-serif italic font-300 text-foreground text-[clamp(3rem,7vw,6rem)] leading-[0.95]">
              Technika<br />és edzés
            </h1>
          </div>
          <p className="text-muted-foreground text-base leading-relaxed max-w-md">
            A hegymászásban a technika életet menthet. Szakszerű felkészülés,
            tudatos mozgáskultúra és mentális stabilitás — ezek az alpinizmus
            három pillére.
          </p>
        </div>
      </div>

      {/* Training image */}
      <div className="max-w-screen-xl mx-auto px-6 py-10">
        <div className="relative aspect-[21/7] overflow-hidden">
          <Image
            src="/training.png"
            alt="Sziklamászó technikáját demonstrálja"
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Content sections */}
      <div className="max-w-screen-xl mx-auto px-6 pb-16">
        {sections.map((sec, i) => (
          <article key={i} className="border-t border-border py-14">
            <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6 lg:gap-14">
              <div className="pt-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent block mb-2">
                  {sec.tag}
                </span>
                <h2 className="font-serif italic text-2xl text-foreground leading-tight">
                  {sec.title}
                </h2>
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  {sec.body.map((para, j) => (
                    <p key={j} className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {para}
                    </p>
                  ))}
                </div>
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-foreground mb-3">
                    Gyakorlati tippek
                  </p>
                  <ul className="flex flex-col gap-2">
                    {sec.tips.map((tip, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-5 h-[1px] bg-accent shrink-0 mt-2.5" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Training plans table */}
      <section className="bg-secondary border-t border-border py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent mb-4">
            Edzéstervek
          </p>
          <h2 className="font-serif italic font-300 text-foreground text-[clamp(2rem,4.5vw,3.5rem)] leading-tight mb-12">
            Szintekre szabott felkészülési<br />programok
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {plans.map((p) => (
              <div key={p.level} className="bg-secondary p-8 flex flex-col gap-4">
                <h3 className="font-sans text-xs uppercase tracking-[0.3em] text-accent">{p.level}</h3>
                <div className="flex flex-col gap-3 mt-2">
                  {[
                    { label: 'Program hossza', value: p.weeks },
                    { label: 'Edzésgyakoriság', value: p.sessions },
                    { label: 'Fókusz', value: p.focus },
                  ].map((row) => (
                    <div key={row.label} className="border-b border-border pb-3 last:border-0 last:pb-0">
                      <span className="font-sans text-[9px] uppercase tracking-widest text-muted-foreground block mb-1">
                        {row.label}
                      </span>
                      <span className="font-serif italic text-base text-foreground">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
