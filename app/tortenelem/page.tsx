import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'Történelem | Hungary Hegymászás',
  description: 'A magyar alpinizmus és hegyiturizmus története az első expedícióktól napjainkig.',
}

const timeline = [
  {
    era: '1800-as évek',
    title: 'Az első hegyibejárások kora',
    body: 'A 19. század második felétől kezdve a magyar értelmiség és katonai tisztek egyre nagyobb érdeklődéssel fordultak a hegyvidéki területek felé. Az Alpok és a Kárpátok völgyei az első felfedező utak helyszínévé váltak. Az akkoriban szükséges felszerelés minimális volt: erős cipő, köpeny és egy egyszeri használatú kötél. A szervezett hegymászás csírái ebben az időszakban mutatkoztak meg először a Kárpát-medencében.',
  },
  {
    era: '1873',
    title: 'Az első szervezett expedíció',
    body: 'A dokumentált magyar hegymászás mérföldköve: az első szervezett csoport indult a Magas-Tátra csúcsainak meghódítására. A résztvevők visszaemlékezései szerint az út rendkívül megterhelő volt, ugyanakkor elindított egy mozgalmat, amely évtizedekre meghatározta a hazai alpinizmus fejlődési irányát. A résztvevők tapasztalatait részletesen dokumentálták, ezzel megalapozva az első hazai hegymászási kézikönyv anyagát.',
  },
  {
    era: '1900-as évek eleje',
    title: 'A technika fejlődése és az első kötéltechnikák',
    body: 'Az első világháborút megelőző évtizedekben a sziklamászás technikája ugrásszerűen fejlődött Magyarországon. Megjelentek az első acél karabinerek, a bevont kötél és a rendszeres biztosítási pontok alkalmazása. A Mátra és a Bükk sziklái lettek a hazai gyakorlóterepek, ahol generációk tanulták meg az alapvető mozgássorokat. Az akkor kidolgozott technikák egy részét a mai napig alkalmazzák.',
  },
  {
    era: '1950-1970',
    title: 'Az alpinizmus aranykora Magyarországon',
    body: 'A második világháború utáni évtizedek paradox módon a hazai hegyiturizmus legintenzívebb fejlődési korszakát hozták. Az utazási korlátozások ellenére a belföldön elérhető hegységek sűrű látogatottsága növekedett, a Kőszegi-hegység és a Gerecse sziklái tele voltak mászókkal. A korszak technikai szempontból is meghatározó volt: meghonosodtak a dupla kötél rendszerek és az első rendszeres mentési protokollok.',
  },
  {
    era: '1980-2000',
    title: 'Megnyíló határok, nemzetközi expedíciók',
    body: 'A rendszerváltással párhuzamosan a magyar hegymászók előtt megnyíltak a világ nagy hegyláncai. Az első komoly alpesi és himalájai vállalkozások ebből a korszakból datálódnak. A felszerelés forradalmi változáson ment át: a nehéz bőr bakancs helyett könnyű szintetikus anyagok, a pamut ruházat helyett funkcionális rétegezési rendszerek terjedtek el. A hazai mászók egyre több rangos, 8000 méter feletti csúcsra jutottak fel.',
  },
  {
    era: '2000-napjaink',
    title: 'Modern alpinizmus és a sport demokratizálódása',
    body: 'A 21. század elején a hegymászás Magyarországon szélesebb tömegekhez jutott el. A mesterséges mászófalak elterjedése lehetővé tette, hogy bárki biztonságos körülmények között ismerkedjen meg a technikák alapjaival. A via ferrata útvonalak kiépítése hegyvidéki területeken szintén hozzájárult a sport népszerűsödéséhez. Napjainkban a környezettudatos alpinizmus és a természet megőrzésének szempontjai egyre hangsúlyosabb szerepet kapnak.',
  },
]

export default function TortenelomPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
      {/* Page hero */}
      <div className="pt-20 pb-0 bg-secondary border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 pt-16 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent mb-4">
              Múlt és gyökereink
            </p>
            <h1 className="font-serif italic font-300 text-foreground text-[clamp(3rem,7vw,6rem)] leading-[0.95]">
              Történelem
            </h1>
          </div>
          <p className="text-muted-foreground text-base leading-relaxed max-w-md">
            A magyarok és a hegyek kapcsolata az évszázadokon át formálódott. Az első
            kalandozásoktól a modern expedíciókig bezárólag e történet tele van
            bátorsággal, találékonysággal és a csúcsok iránti olthatatlan vággyal.
          </p>
        </div>
      </div>

      {/* Archive image */}
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="relative aspect-[21/9] overflow-hidden w-full">
          <Image
            src="/history-climbing.png"
            alt="Archív hegymászó felvétel"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-background/30" />
        </div>
      </div>

      {/* Timeline */}
      <section className="max-w-screen-xl mx-auto px-6 pb-24">
        <div className="flex flex-col gap-0">
          {timeline.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-10 border-t border-border py-10 md:py-12"
            >
              <div className="flex flex-col gap-1 pt-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  {item.era}
                </span>
              </div>
              <div>
                <h2 className="font-serif italic text-2xl md:text-3xl text-foreground mb-4">
                  {item.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-2xl">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
