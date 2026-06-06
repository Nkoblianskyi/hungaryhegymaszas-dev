import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'Blog és cikkek | Hungary Hegymászás',
  description: 'Cikkek alpinizmusról, hegyiturizmusról, technikákról és a hegyekkel kapcsolatos élményekről.',
}

export const articles = [
  {
    slug: 'alpinizmus-alapjai',
    title: 'Az alpinizmus alapjai: hogyan kezdjük el?',
    excerpt:
      'Az első lépések a sziklamászásban — felszerelés, biztonság és mentalitás kezdőknek.',
    category: 'Kezdőknek',
    body: [
      'Az alpinizmus olyan tevékenység, amely egyszerre próbálja ki a testet és a szellemet. Azok, akik először lépnek sziklára, általában meglepődnek azon, mennyire ösztönösen kell reagálniuk az adott pillanatban. A mozgás nem tanítható könyvből — a tapasztalat az egyetlen igazi mester.',
      'Az első és legfontosabb lépés a megfelelő alaptechnikák elsajátítása. A csomózás, a biztosítás módszertana és a kommunikáció a kötélpárral — mindez alapkövetelmény, mielőtt valaki önállóan sziklára merészkedne. Ezeket a tudáselemeket legjobb képzett oktató mellett gyakorolni.',
      'A felszerelés kiválasztásakor ne engedje, hogy a piacon elérhető termékek sokasága megzavarja. Az alapfelszerelés egyszerű: megfelelően illeszkedő heveder, elsőosztályú sisak, megbízható kötél és néhány alapvető biztosítóelem. Felesleges bonyolítani a kezdeti időszakban.',
      'Mentálisan az alpinizmus talán legfontosabb eleme a kockázattudatosság. Ez nem félelmet jelent, hanem tájékozottságot: tudni, hol vannak a határok, mikor kell visszafordulni és mikor szabad továbblépni. A legjobb mászók nem a legbátrabbak — hanem a legbölcsebbek.',
    ],
    tips: [
      'Kezdjen beltéri mászófalon, mielőtt kültérre megy',
      'Vegyen részt alapkurzuson képzett oktatóval',
      'Ismerkedjen meg a mentési protokollokkal az első mászás előtt',
      'Legyen türelmes a haladással — az alapok megalapozzák a jövőt',
    ],
  },
  {
    slug: 'magashegyi-idojaras',
    title: 'Magashegyi időjárás: amit minden mászónak tudni kell',
    excerpt:
      'Az időjárás változékonysága a hegyekben életveszélyes lehet. Tudjon felkészülni rá.',
    category: 'Biztonság',
    body: [
      'A hegyvidéki időjárás egyike a legkiszámíthatatlanabb természeti jelenségeknek. Ami reggel napsütéses kirándulásnak indul, délutánra viharszezonná válhat. Az alacsony nyomású rendszerek gyorsan mozognak a hegyeken át, és a hőmérséklet percek alatt súlyosan leeshet.',
      'A legfontosabb szabály egyszerű: soha ne hagyja el az alaptábort vagy a kiindulópontot anélkül, hogy ellenőrizte volna a meteorológiai előrejelzést. Nemcsak az aktuális állapot, hanem a következő 24-48 óra prognózisa is számít. A hegyvidéki meteorológia specialitásait ismerő helyi forrásokat részesítse előnyben az általános előrejelzésekkel szemben.',
      'A hőmérséklet-csökkenés magassággal összefügg: minden 100 méter emelkedésnél átlagosan 0,65 fokot csökken a hőmérséklet. Egy 1000 méteres magasságkülönbség 6-7 fokos különbséget jelenthet. Ehhez adódik a szélcsonkítás — az érzékelt hőmérséklet szél hatására jóval alacsonyabb lehet a mért értéknél.',
      'A villámcsapás hegyen különösen veszélyes, hiszen a mászó a legmagasabb ponton tartózkodik. Dörrenést hallva azonnal keresse a legalacsonyabb pontot, kerülje a sziklafalat és a magányos fákat. Guggoljon le, tegye össze a talpát és fülét takarja be — ez minimalizálja a talajvezetékből eredő kockázatot.',
    ],
    tips: [
      'Napkeltekor induljon, hogy dél előtt a csúcson legyen',
      'Tanulmányozza a felhőtípusok előrejelző értékét',
      'Vigyen mindig esővédőt, még tiszta égbolt esetén is',
      'Forduljon vissza villámlás esetén azonnal',
    ],
  },
  {
    slug: 'teli-hegymaszas-technikak',
    title: 'Téli hegymászás — technikák és felkészülés',
    excerpt:
      'A havas és jeges körülmények között való mászás speciális tudást és felszerelést igényel.',
    category: 'Technika',
    body: [
      'A téli alpinizmus nem csupán egy nyári sport hidegebb változata. Teljesen más kihívásokat, felszerelési igényeket és technikai tudást követel. A legfontosabb különbség a talpfelület: hóban és jégen a nyári mászócipő alkalmatlan, crampons és jégcsákány elengedhetetlen.',
      'A jégen való haladás technikája az úgynevezett front-pointing módszer: a crampons első két fogásakra állva, jégcsákánnyal biztosítva haladnak előre a mászók. Ez rendkívüli erőt követel az alszártól és a vásárló bokától. A flat-footing technika kizárólag enyhe hójárón alkalmazható, meredek jégfelületen veszélyes.',
      'A hóban való biztonságos haladáshoz elengedhetetlen az elérhető biztosítási lehetőségek ismerete. Hócsavar, hóhorgony és deadman biztosítópontok helyettesítik a nyári sziklacsavarokat. Mindezek stabilitása jóval kisebb, mint a sziklán lévő eszközöké, ezért a téli mászónak konzervatívabb kockázatkalkulációval kell dolgoznia.',
      'Az öltözés rétegrendszer szerint történik: szállítóalap, hőtartó középső réteg, vízálló és szélálló külső réteg. A pamut tilos — nedvesen elveszíti hőtartó tulajdonságát és hipotermia kockázatot okoz. Gyapjú és szintetikus anyagok a megfelelő választás.',
    ],
    tips: [
      'Jégcsákány és crampons kezelését beltéren gyakorolja',
      'Soha ne támaszkodjon egyedül hóbiztosítási pontokra',
      'A fagyott bőr a hipotermia első jele — figyeljen rá',
      'Rövid, jól meghatározott téli célokkal kezdje a téli szezonját',
    ],
  },
  {
    slug: 'via-ferrata-bevezeto',
    title: 'Via Ferrata: a biztonságos kaland útja',
    excerpt:
      'A via ferrata lehetővé teszi, hogy sziklafelületen másszon anélkül, hogy tapasztalt mászó lenne.',
    category: 'Kezdőknek',
    body: [
      'A via ferrata olaszul "vasutat" jelent, és pontosan ezt kapja az ember: acélkábelekből, biztosított fogópontokból és rögzített létraelemekből álló, a sziklafalon vezető útvonalat. A rendszer lehetővé teszi, hogy technikai sziklamászó tapasztalat nélkül is biztonságban lehessen komoly magasságban.',
      'A via ferrata speciális energiaelnyelő eszközzel, úgynevezett Y-lánggal használatos. Ez az eszköz a szabad esés energiáját absorbeálja, lényegesen csökkentve az ütési erőt. A Y-lánc segítségével a mászó folyamatosan biztosított marad a kábelen, anélkül hogy egy pillanatra is biztosítás nélkül lenne.',
      'A via ferrata fokozatai A-tól E-ig terjednek, ahol az A a legkönnyebb, sétaszerű útvonal, az E pedig komoly fizikai erőt és technikai ügyességet igénylő, szinte függőleges sziklafalat jelent. Kezdőknek az A és B szint ajánlott, ahol az út kellemes kihívást nyújt komolyabb veszély nélkül.',
      'Magyarország közelében számos kiválóan kiépített via ferrata útvonal található. Az Ausztriában és Szlovéniában elterjedt rendszerek a legjobbak a régióban, de hazai fejlesztések is folynak egyes sziklás területeken. A túrák tervezésekor figyeljen az útvonal hosszára és a visszautat is beleszámítsa a tervbe.',
    ],
    tips: [
      'Az első via ferrata élmény előtt kérjen bevezetőt tapasztalt társtól',
      'Ellenőrizze a Y-lánc állapotát minden indulás előtt',
      'Vigyen elegendő vizet és energiát — több mint gondolná, elfogy',
      'A gleccserek és a kitett sziklapárkányok a legnehezebb szakaszok',
    ],
  },
  {
    slug: 'bivak-ejszaka-hegyekben',
    title: 'Bivak éjszaka a hegyekben',
    excerpt:
      'Mi a bivak, mire jó, és hogyan lehet belőle nem csak szükségmegoldás, hanem tudatos alpinista élmény?',
    category: 'Felkészülés',
    body: [
      'A bivak — a szó a francia "bivouac"-ból ered — szabadban töltött éjszakát jelent, ahol a szállás minimális: általában csak egy speciális bivakzsák vagy egy ultrakönnyű egyszemélyes sátor. Az alpinizmusban két típusa ismert: a szükségbivak, amelyet kénytelen megszervezni a mászó, és a tervezett bivak, amelyet tudatosan iktat be az útvonalba.',
      'A tervezett bivak az alpinizmus egyik legmélyebb élménye. A csúcson töltött éjszaka, a csillagos ég, az első napfény a sziklán — mindez olyan emléket hagy, amelyet a felvonóval feljutó turista sosem tapasztalhat. Ehhez persze alapos felkészülés szükséges: megfelelő szigetelőalátét, hőtartó ruha és a szél elleni védelem elengedhetetlen.',
      'A szükségbivak helyszín-kiválasztásában a legfontosabb szempontok: szélvédettség, kő és vízveszély mentesség, valamint a biztosítás lehetősége. A sziklapárkányokon és a gerinc melletti tereplépcsőkön általában a legjobb helyszínek. Ne felejtse el értesíteni valakit a tervezett helyzetéről, mielőtt szokatlan körülmények közé kerül.',
      'A bivak felszerelése mindig legyen jelen hátizsákban, még akkor is, ha nem tervez kint hálni. Egy alapbivakzsák néhány deka tömegű és életmentő lehet. Élelmiszer, víztartalék és fejlámpa mellé érdemes csomagolni.',
    ],
    tips: [
      'Tervezett bivakhoz 10 fokkal hidegebb alvózsákot válasszon',
      'A szélvédettség fontosabb, mint a szépség',
      'Reggelre tegye ki a felszereléssel száradni, amit lehet',
      'Reggeli napfelkelte előtt induljon, hogy a hó kemény legyen',
    ],
  },
  {
    slug: 'trekking-vs-alpinizmus',
    title: 'Trekking vagy alpinizmus: mi a különbség?',
    excerpt:
      'Két, egymást kiegészítő hegyitudás — mégis radikálisan más felkészülést, eszközt és mentalitást igényelnek.',
    category: 'Alapok',
    body: [
      'A trekking és az alpinizmus a hegyszerető ember két alapvető útja, amelyek olykor átfednek, máskor teljesen különböző megközelítést igényelnek. A trekking lényege a hosszú, többnapos gyalogos kirándulás hegyvidéken, általában jelölt útvonalakon, állandó alacsony magasság megtartásával. Az alpinizmus célja a csúcs meghódítása — bármilyen technikai eszköz és módszer segítségével.',
      'A legfontosabb különbség a technikai tudásban és a felszerelésben rejlik. A trekkinghez elegendő egy jó minőségű bakancs, térképolvasási képesség és az időjáráshoz való alkalmazkodás képessége. Az alpinizmushoz mindez alapkövetelmény, de elengedhetetlen a kötéltechnika, a biztosítási módszerek, a hó és jégmászás ismerete és a magassági élettani tudás is.',
      'Az átmenet a kettő között fokozatosan valósul meg a gyakorlott hegyjárónál. Sok alpinista trekkingből indult ki, és a hegyekbe mélyülve egyre inkább érezte, hogy technikai kihívásokat keres. Ez a fejlődési út a legegészségesebb: a terep és a hegyvidéki mozgás alapos ismerete megelőzi a komoly technikai tudást.',
      'Mindkét módszernek megvan a maga szépsége és értéke. A trekking lehetővé teszi a tájak mélyebb megismerését és a kulturális felfedezést. Az alpinizmus a belső határok feszegetéséről szól. Az igazán kiegyensúlyozott hegyjáró mindkettőt ápolja és egymás kiegészítéseként kezeli.',
    ],
    tips: [
      'Kezdjen 2-3 napos trekkingekkel, mielőtt technikai célokat tűz ki',
      'A hosszú gyalogos megtapasztalás felkészít az alpinizmusra',
      'Trekking közben tanulmányozza a sziklaformációkat',
      'Ne ugorjon lépéseket: az alaptapasztalat megmenthet egy nehéz helyzetben',
    ],
  },
  {
    slug: 'magassagi-akklimatizacio',
    title: 'Magassági akklimatizáció: a szervezet alkalmazkodása',
    excerpt:
      'A nagy magasságon töltött idő más légköri viszonyokat, alacsonyabb oxigénszintet és komoly alkalmazkodási igényt támaszt.',
    category: 'Egészség',
    body: [
      'Az akklimatizáció az a folyamat, amelynek során a szervezet fokozatosan alkalmazkodik az alacsonyabb légköri nyomáshoz és csökkentett oxigéntartalomhoz. Nagy magasságon a vörösvérsejt-termelés fokozódik, a légzés mélyül és a szív munkája intenzívebbé válik. Ez a folyamat napokig, esetenként hetekig tart.',
      'A magassági betegség (AMS — Acute Mountain Sickness) az elégtelen akklimatizáció következménye. Tünetei: fejfájás, hányinger, szédülés és alvászavar. Az egyetlen biztonságos kezelés a sürgős leereszkedés. Megelőzése egyszerű: ne emelkedjen túl gyorsan, tartson pihenőnapokat és figyelje testét.',
      'Az "emelkedj magasra, aludj alacsonyan" elv az alpinizmus egyik legismertebb akklimatizációs szabálya. Az értelem mögötte egyszerű: a nappali magasság serkenti az alkalmazkodást, de az éjszakai pihenés alacsonyabb magasságon biztonságosabb és hatékonyabb. Lehetőség szerint az alaptáborozás ezt a ritmust kövesse.',
      'A hidratáció különösen fontos nagy magasságon, ahol a száraz levegő és a fokozott légzés gyorsítja a folyadékveszteséget. Napi legalább 3-4 liter folyadékbevitel ajánlott. Az alkohol kerülendő, mert rontja az akklimatizációt és kiszárítja a szervezetet.',
    ],
    tips: [
      'Az első 2000 méter felett naponta legfeljebb 300-500 méterrel emelkedjen',
      'Az AMS bármilyen tünete esetén azonnal ereszkedjen le',
      'Fogyasszon sok vizet és kerülje az alkoholt',
      'Jó alvás a legjobb akklimatizációs eszköz',
    ],
  },
  {
    slug: 'hegymaszas-navigacio',
    title: 'Navigáció a hegyekben: térkép és valóság',
    excerpt:
      'A GPS megkönnyíti az életünket, de a hagyományos térképolvasás és tájékozódás tudása elveszíthetetlen alapkészség marad.',
    category: 'Felkészülés',
    body: [
      'A digitális navigáció forradalmasította a hegyvidéki tájékozódást. Okostelefon alkalmazások, dedikált GPS eszközök és részletes topográfiai adatbázisok állnak rendelkezésre bárki számára. Ezek ellenére a hagyományos térképolvasás és iránytű-használat elengedhetetlen tudás marad, hiszen az elektronika meghibásodhat, az akkumulátor lemerülhet.',
      'A topográfiai térképek szintvonalainak értelmezése az első és legfontosabb készség. A szintvonalak sűrűsége a meredekséget jelzi, az irányuk a terepformát. A nyereg, a gerinc, a völgy és a csúcs mind felismerhető szintvonal-mintázatból. Ez az olvasás csak gyakorlással válik automatikussá.',
      'Az iránytűvel való tájékozódás alapja a deklinációs különbség figyelembevétele: a mágneses észak és a térképek szerinti valódi észak között eltérés van. Ez Magyarország területén körülbelül 4-5 fokos keleti eltérést jelent, amelyet be kell számítani a navigálásba.',
      'Rossz látási viszonyok, ég és köd esetén a "dead reckoning" módszer alkalmazható: ismert kiindulópontból, irányszöggel és tempóval számolva meghatározható a pillanatnyi pozíció. Ez az egyik legősibb navigációs módszer, amely ma is menthet életet.',
    ],
    tips: [
      'Mindig vigyen papírtérképet digitális eszközök mellé',
      'Kövesse az iránytű mágneses eltérését a térképen',
      'A terepszintek azonosítása a leggyorsabb helymeghatározás',
      'Mielőtt indul, jegyezze meg a terep főbb jellegzetességeit',
    ],
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
      {/* Page hero */}
      <div className="pt-20 bg-secondary border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 pt-16 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent mb-4">
              Tudás és tapasztalat
            </p>
            <h1 className="font-serif italic font-300 text-foreground text-[clamp(3rem,7vw,6rem)] leading-[0.95]">
              Blog
            </h1>
          </div>
          <p className="text-muted-foreground text-base leading-relaxed max-w-md">
            Cikkek alpinizmusról, technikáról, biztonságról és a hegyekkel kapcsolatos
            tapasztalatokról. Általános ismeretterjesztés minden szintű hegymászónak.
          </p>
        </div>
      </div>

      {/* Article list */}
      <section className="max-w-screen-xl mx-auto px-6 py-16 pb-24">
        <div className="flex flex-col">
          {articles.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group border-t border-border py-8 grid grid-cols-1 md:grid-cols-[60px_1fr_120px] gap-4 md:gap-8 items-start hover:bg-secondary transition-colors px-2 last:border-b"
            >
              <span className="font-mono text-[10px] text-muted-foreground pt-1">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <span className="font-sans text-[10px] uppercase tracking-widest text-accent mb-2 block">
                  {post.category}
                </span>
                <h2 className="font-serif italic text-xl md:text-2xl text-foreground group-hover:text-accent transition-colors leading-tight mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  {post.excerpt}
                </p>
              </div>
              <div className="hidden md:flex items-start justify-end pt-1">
                <span
                  aria-hidden="true"
                  className="block w-8 h-[1px] bg-muted-foreground group-hover:w-14 group-hover:bg-accent transition-all duration-300 mt-2"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
