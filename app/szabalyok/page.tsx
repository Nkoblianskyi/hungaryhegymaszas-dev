import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'Szabályok és fegyelem | Hungary Hegymászás',
  description: 'A felelős alpinizmus szabályai, biztonsági előírások és természetvédelmi irányelvek.',
}

const ruleCategories = [
  {
    tag: 'Biztonsági alapszabályok',
    title: 'Mielőtt elindul',
    rules: [
      {
        num: '01',
        title: 'Soha ne másszon egyedül ismeretlen útvonalon',
        body: 'Az egyedüli mászás haladó és tapasztalt alpinistáknak is fokozott kockázatot jelent. Ismeretlen útvonalon a minimális csoportlétszám két fő. Minden kiszállás előtt tájékoztasson valakit a tervezett útvonalról és a várható visszaérkezési időről.',
      },
      {
        num: '02',
        title: 'Ellenőrizze a felszerelést indulás előtt',
        body: 'A mászófelszerelés rendszeres ellenőrzése kötelező. Vizsgálja meg a kötél állapotát, a karabinerek zárómechanizmusát, a heveder kopási pontjait és a sisak rögzítőrendszerét. A törött vagy elhasználódott eszközt azonnal cserélje ki.',
      },
      {
        num: '03',
        title: 'Időjárási előrejelzés figyelése kötelező',
        body: 'Hegyi útvonalakat csak kedvező időjárási prognózis esetén szabad megkezdeni. A vihar, szél és köd a biztonságos visszautat is veszélyeztetheti. Forduljon vissza ha az időjárás romlik — a hegy mindig ott lesz máskor.',
      },
      {
        num: '04',
        title: 'Kommunikáció és mentési alap',
        body: 'Minden mászáshoz szükséges egy megbízható kommunikációs eszköz. Mentési protokollokat és az adott terület segélyhívó számát ismerje kívülről. A sürgősségi bivakzsák, kötszer és az alapgyógyszerek elmaradhatatlanok.',
      },
    ],
  },
  {
    tag: 'Természetvédelem',
    title: 'A hegy megőrzése',
    rules: [
      {
        num: '05',
        title: 'Ne hagyjon hulladékot a hegyeken',
        body: 'A "pack in, pack out" elv az alpinizmus egyik legfontosabb etikai szabálya. Minden szemét, beleértve az organikus maradványokat is, visszaszállítandó a völgybe. A hegyi ökoszisztéma rendkívül sérülékeny, és az egyszer megbolygatott egyensúly helyreállítása évtizedeket vehet igénybe.',
      },
      {
        num: '06',
        title: 'Tartsa be a védett területek szabályait',
        body: 'Számos sziklás és hegyvidéki terület természetvédelmi területnek minősül. Ezeken a helyeken az engedélyköteles mászás, a tűzrakás tilalma és a szabályos útvonalon maradás kötelező. Az előírások megszegése nemcsak bírságot, hanem a terület mászók előtti lezárását is okozhatja.',
      },
      {
        num: '07',
        title: 'Kövelje az elfogadott útvonalakat',
        body: 'Az elfogadott és jelölt útvonalaktól való eltérés új eróziós nyomokat hagy a hegyoldalakon. A rövidítések és a terepen való szabad barangolás hosszú távon visszafordíthatatlan kárt okoz a vegetációban és a talajban. Tartson az előre meghatározott útvonalon.',
      },
    ],
  },
  {
    tag: 'Kötéltechnika és biztosítás',
    title: 'A biztonságos mászás protokolljai',
    rules: [
      {
        num: '08',
        title: 'Biztosítási minimum: két pont mindig',
        body: 'A kötélen mászás közben egyszerre legalább két biztosítási pontnak kell aktívnak lennie. Az "egypontos biztosítás" balesetek sorát okozta már a hegymászás történetében. A biztosítópontok terhelhetőségét és állapotát mászás előtt mindig ellenőrizze.',
      },
      {
        num: '09',
        title: 'Kommunikáció a kötélen lévők között',
        body: 'A mászópár tagjai között folyamatos és egyértelmű verbális kommunikáció szükséges. A biztosító és a mászó között kialakult, egyértelműen értett jelzésrendszer nélkülözhetetlen. Zajban vagy rossz látási viszonyok között vizuális jelek használata ajánlott.',
      },
      {
        num: '10',
        title: 'Ereszkedés: ne siesson',
        body: 'Az esetek nagy részében a balesetek leereszkedés közben történnek, nem mászás alatt. A rappelling (abseil) technikát a statikus, ellenőrzött testtartás és a folyamatos kötélellenőrzés jellemzi. A kötél aljának elérését mindig ellenőrizze ereszkedés előtt.',
      },
    ],
  },
  {
    tag: 'Csoportos mászás',
    title: 'Együttmászás szabályai',
    rules: [
      {
        num: '11',
        title: 'A leggyengébb tag határozza meg a sebességet',
        body: 'Csoportos mászásnál a haladás ütemét a legkevésbé tapasztalt vagy legrosszabb fizikai állapotban lévő tag kapacitása szabja meg. A csoporttól való leszakadás és az egyéni tempóban haladás súlyos kockázatokat rejt. A csapat összetartása elsődleges.',
      },
      {
        num: '12',
        title: 'Tapasztalt vezető jelenléte kötelező',
        body: 'Kezdő mászókat tartalmazó csoportban tapasztalt vezető jelenlétének biztosítása alapkövetelmény. A vezető ismeri a terület sajátosságait, a mentési lehetőségeket és az időjárási jelenségek helyi hatásait. Önjelölt vezető nem elfogadható.',
      },
    ],
  },
]

export default function SzabalyokPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
      {/* Hero */}
      <div className="pt-20 bg-secondary border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 pt-16 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent mb-4">
              Fegyelem és felelősség
            </p>
            <h1 className="font-serif italic font-300 text-foreground text-[clamp(3rem,7vw,6rem)] leading-[0.95]">
              Szabályok<br />és etika
            </h1>
          </div>
          <p className="text-muted-foreground text-base leading-relaxed max-w-md">
            A hegymászás szabályrendszere nem korlátozás — hanem az a keret, amely
            lehetővé teszi, hogy biztonságban és felelősen hódítsa meg a csúcsokat,
            megőrizve a természeti környezetet a következő generációknak.
          </p>
        </div>
      </div>

      {/* Rules */}
      <div className="max-w-screen-xl mx-auto px-6 py-16 pb-24">
        {ruleCategories.map((cat, ci) => (
          <section key={ci} className="mb-16">
            <div className="border-b border-border pb-5 mb-8">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent block mb-2">
                {cat.tag}
              </span>
              <h2 className="font-serif italic text-3xl md:text-4xl text-foreground">{cat.title}</h2>
            </div>
            <div className="flex flex-col gap-0">
              {cat.rules.map((rule) => (
                <div
                  key={rule.num}
                  className="grid grid-cols-1 md:grid-cols-[60px_1fr] gap-4 md:gap-8 border-b border-border py-8 last:border-0"
                >
                  <span className="font-mono text-xs text-muted-foreground pt-1">{rule.num}</span>
                  <div>
                    <h3 className="font-serif italic text-xl text-foreground mb-3">{rule.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{rule.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Reminder block */}
      <div className="bg-card border-t border-border py-16">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="border border-accent p-10 max-w-2xl">
            <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent mb-4">
              Fontos emlékeztető
            </p>
            <p className="font-serif italic text-2xl text-foreground leading-snug">
              A szabályok célja nem a korlátozás, hanem a lehetőség — hogy holnap
              is visszatérhessen a hegyekre.
            </p>
          </div>
        </div>
      </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
