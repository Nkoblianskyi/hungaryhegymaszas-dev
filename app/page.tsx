import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import { ContactForm } from '@/components/contact-form'

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex flex-col justify-end overflow-hidden">
      <Image
        src="/hero-mountain.png"
        alt="Magyar hegyvidéki táj, sziklás csúcsok"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-background/55" />

      <span
        aria-hidden="true"
        className="absolute right-6 top-1/2 -translate-y-1/2 font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground rotate-90 origin-center hidden lg:block"
      >
        Alpinizmus · Hegyiturizmus
      </span>

      <div className="relative z-10 max-w-screen-xl mx-auto w-full px-6 pb-16 md:pb-24">
        <p className="font-sans text-[11px] uppercase tracking-[0.4em] text-accent mb-4">
          Magyarország hegymászás portálja
        </p>
        <h1 className="font-serif italic font-300 text-foreground leading-[0.9] text-[clamp(3.5rem,10vw,9rem)] text-balance">
          A csúcsra<br />vezető út
        </h1>
        <p className="mt-6 max-w-md text-base text-muted-foreground leading-relaxed">
          Fedezze fel az alpinizmus és hegyiturizmus világát Magyarországon — technikák,
          történelem, felszerelés és tippek minden szinten.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/tortenelem"
            className="inline-block border border-foreground text-foreground font-sans text-xs uppercase tracking-widest px-6 py-3 hover:bg-foreground hover:text-background transition-colors duration-200"
          >
            Történelem
          </Link>
          <Link
            href="/blog"
            className="inline-block border border-border text-muted-foreground font-sans text-xs uppercase tracking-widest px-6 py-3 hover:border-foreground hover:text-foreground transition-colors duration-200"
          >
            Blog
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-50">
        <span className="font-sans text-[9px] uppercase tracking-widest text-foreground">Görgessen</span>
        <span aria-hidden="true" className="block w-[1px] h-8 bg-foreground animate-bounce" />
      </div>
    </section>
  )
}

// ─── Marquee ticker ────────────────────────────────────────────────────────────
function Ticker() {
  const items = ['Alpinizmus', 'Sziklamászás', 'Jégmászás', 'Hegyiturizmus', 'Expedíció', 'Via Ferrata', 'Trekking', 'Bivak']
  const doubled = [...items, ...items]
  return (
    <div className="border-y border-border bg-secondary overflow-hidden py-3" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground px-8">
            {item}
            <span className="ml-8 text-accent">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── History preview ───────────────────────────────────────────────────────────
function HistoryPreview() {
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1">
        <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent mb-4">
          Múlt és gyökereink
        </p>
        <h2 className="font-serif italic font-300 text-foreground text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] text-balance">
          Magyar hegymászók<br />büszke öröksége
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed text-base max-w-md">
          A magyarok évszázados kapcsolata a hegyekkel mély nyomot hagyott az alpinizmus
          európai történetében. Az első expedícióktól a modern kori teljesítményekig
          tartó út tele van hősiességgel, kitartással és szenvedéllyel.
        </p>
        <Link
          href="/tortenelem"
          className="mt-8 inline-flex items-center gap-3 font-sans text-xs uppercase tracking-widest text-accent hover:text-foreground transition-colors group"
        >
          Teljes történelem
          <span className="block w-8 h-[1px] bg-accent group-hover:w-14 transition-all duration-300" />
        </Link>
      </div>
      <div className="order-1 md:order-2 relative aspect-[4/3] overflow-hidden">
        <Image
          src="/history-climbing.png"
          alt="Történelmi hegymászók archív képe"
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1.5">
          <span className="font-sans text-[9px] uppercase tracking-widest text-muted-foreground">
            Magyar alpinizmus öröksége
          </span>
        </div>
      </div>
    </section>
  )
}

// ─── Equipment types ───────────────────────────────────────────────────────────
const equipmentTypes = [
  {
    title: 'Személyi védőfelszerelés',
    items: ['Hegymászó sisak', 'Heveder', 'Karabiner', 'Gleccserszem'],
  },
  {
    title: 'Mászástechnikiai eszközök',
    items: ['Mászókötél', 'Biztosítókészülék', 'Csavarós karabiner', 'Expressz'],
  },
  {
    title: 'Hó és jég felszerelés',
    items: ['Jégcsákány', 'Hótalp', 'Crampons', 'Lavinalapát'],
  },
  {
    title: 'Navigáció és túra',
    items: ['Térkép és iránytű', 'Fejlámpa', 'Bivakzsák', 'Elsősegélykészlet'],
  },
]

function EquipmentSection() {
  return (
    <section className="bg-secondary border-y border-border py-20 md:py-28">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent mb-3">
              Felszerelés és felszerelési kategóriák
            </p>
            <h2 className="font-serif italic font-300 text-foreground text-[clamp(2rem,4.5vw,3.5rem)] leading-tight">
              Amit a hegyhez<br />magával visz
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
            A megfelelő felszerelés az alpinizmusban nem luxus, hanem biztonság. Ismerje
            meg az egyes eszközök kategóriáit és rendeltetését.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {equipmentTypes.map((cat) => (
            <div key={cat.title} className="bg-secondary p-8 flex flex-col gap-4">
              <h3 className="font-sans text-xs uppercase tracking-[0.25em] text-accent">
                {cat.title}
              </h3>
              <ul className="flex flex-col gap-2 mt-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="font-serif text-lg italic text-foreground leading-snug border-b border-border pb-2 last:border-0 last:pb-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Achievements ──────────────────────────────────────────────────────────────
const stats = [
  { number: '1873', label: 'Az első szervezett magyar hegymászó expedíció éve' },
  { number: '8611m', label: 'A legmagasabb csúcs, amelyet magyar alpinista megmászott' },
  { number: '200+', label: 'Dokumentált route Magyarország sziklás területein' },
  { number: '50+', label: 'Aktív hegyiturizmus helyszín az országban' },
]

function AchievementsSection() {
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-20 md:py-28">
      <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent mb-4">
        Eredmények
      </p>
      <h2 className="font-serif italic font-300 text-foreground text-[clamp(2rem,4.5vw,3.5rem)] leading-tight mb-14 text-balance max-w-xl">
        Magyarország alpinizmusának mérföldkövei
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {stats.map((stat) => (
          <div key={stat.number} className="bg-background p-8 flex flex-col gap-3">
            <span className="font-serif italic text-[clamp(2.8rem,5vw,4.5rem)] text-foreground leading-none stat-number">
              {stat.number}
            </span>
            <p className="font-sans text-xs text-muted-foreground leading-relaxed">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Training preview ──────────────────────────────────────────────────────────
function TrainingPreview() {
  return (
    <section className="bg-secondary border-y border-border">
      <div className="max-w-screen-xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src="/training.png"
            alt="Hegymászó sziklafalon mászik"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent mb-4">
            Technika és edzés
          </p>
          <h2 className="font-serif italic font-300 text-foreground text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] text-balance">
            Az erő és ügyesség<br />tudománya
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-base max-w-md">
            A hegymászás nemcsak fizikai teljesítmény — szisztematikus edzés, helyes
            légzéstechnika, egyensúlyérzék és mentális felkészülés is szükséges. Fedezze
            fel az optimális edzésterveket kezdőktől haladókig.
          </p>
          <ul className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground">
            {['Erőnléti alapok', 'Kötéltechnika', 'Sziklamászás fogásai', 'Mentális felkészítés'].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="w-5 h-[1px] bg-accent shrink-0" />
                {t}
              </li>
            ))}
          </ul>
          <Link
            href="/technika"
            className="mt-8 inline-flex items-center gap-3 font-sans text-xs uppercase tracking-widest text-accent hover:text-foreground transition-colors group"
          >
            Összes technika
            <span className="block w-8 h-[1px] bg-accent group-hover:w-14 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── Rules preview ─────────────────────────────────────────────────────────────
const rules = [
  'Biztonsági előírások és kötelező felszerelés',
  'Természetvédelmi területek szabályai',
  'Kötéltechnikiai minimum követelmények',
  'Csoportos mászás protokolljai',
]

function RulesPreview() {
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent mb-4">
            Szabályok és fegyelem
          </p>
          <h2 className="font-serif italic font-300 text-foreground text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] text-balance">
            Felelős<br />hegymászás
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-base max-w-md">
            A biztonságos alpinizmus alapja a szabályok ismerete és betartása. Az
            előírások nemcsak a saját védelmet, hanem a természeti környezet
            megőrzését is szolgálják.
          </p>
          <Link
            href="/szabalyok"
            className="mt-8 inline-flex items-center gap-3 font-sans text-xs uppercase tracking-widest text-accent hover:text-foreground transition-colors group"
          >
            Összes szabály
            <span className="block w-8 h-[1px] bg-accent group-hover:w-14 transition-all duration-300" />
          </Link>
        </div>
        <div className="flex flex-col">
          {rules.map((rule, i) => (
            <div
              key={i}
              className="border-b border-border py-5 flex items-start gap-4 hover:bg-secondary transition-colors px-2"
            >
              <span className="font-mono text-[10px] text-muted-foreground w-6 shrink-0 pt-1">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="font-serif italic text-lg text-foreground">{rule}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Facts ─────────────────────────────────────────────────────────────────────
const facts = [
  { fact: 'A Kékes', detail: 'Magyarország legmagasabb csúcsa 1014 méter magasságban, a Mátrában található.' },
  { fact: 'Via Ferrata', detail: 'Az olasz "vasút" az acélkábeles, biztosított sziklamászó útvonalak globális neve.' },
  { fact: 'Bivak', detail: 'A minimális szálláshelyet jelölő kifejezés — a hegymászók szükségpihenőhelye.' },
  { fact: 'Rappelling', detail: 'A kötélen való leereszkedés technikája, amelyet minden mászónak el kell sajátítani.' },
  { fact: 'Alpinizmus', detail: 'A fogalom az Alpok nevéből ered, mára az összes magas hegyvidéki mászást jelöli.' },
  { fact: 'Barométer', detail: 'A légnyomásmérő eszköz időjárás-előrejelzésre is használható a hegyen.' },
]

function FactsSection() {
  return (
    <section className="bg-card border-y border-border py-20 md:py-28">
      <div className="max-w-screen-xl mx-auto px-6">
        <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent mb-4">
          Tudta, hogy?
        </p>
        <h2 className="font-serif italic font-300 text-foreground text-[clamp(2rem,4.5vw,3.5rem)] leading-tight mb-14">
          Érdekes tények<br />az alpinizmusról
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {facts.map((f) => (
            <div key={f.fact} className="bg-card p-8">
              <h3 className="font-serif italic text-2xl text-accent mb-3">{f.fact}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Blog preview ──────────────────────────────────────────────────────────────
const blogPreviews = [
  {
    slug: 'alpinizmus-alapjai',
    title: 'Az alpinizmus alapjai: hogyan kezdjük el?',
    excerpt: 'Az első lépések a sziklamászásban — felszerelés, biztonság és mentalitás kezdőknek.',
    category: 'Kezdőknek',
  },
  {
    slug: 'magashegyi-idojaras',
    title: 'Magashegyi időjárás: amit minden mászónak tudni kell',
    excerpt: 'Az időjárás változékonysága a hegyekben életveszélyes lehet. Tudjon felkészülni rá.',
    category: 'Biztonság',
  },
  {
    slug: 'teli-hegymaszas-technikak',
    title: 'Téli hegymászás — technikák és felkészülés',
    excerpt: 'A havas és jeges körülmények között való mászás speciális tudást és felszerelést igényel.',
    category: 'Technika',
  },
]

function BlogPreview() {
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-20 md:py-28">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div>
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent mb-3">
            Blog és cikkek
          </p>
          <h2 className="font-serif italic font-300 text-foreground text-[clamp(2rem,4.5vw,3.5rem)] leading-tight">
            Legfrissebb írások
          </h2>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-widest text-accent hover:text-foreground transition-colors group shrink-0"
        >
          Összes cikk
          <span className="block w-8 h-[1px] bg-accent group-hover:w-14 transition-all duration-300" />
        </Link>
      </div>
      <div className="flex flex-col">
        {blogPreviews.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group border-t border-border py-7 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 md:gap-8 items-center hover:bg-secondary transition-colors px-2 last:border-b"
          >
            <span className="font-mono text-[10px] text-muted-foreground w-8">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <span className="font-sans text-[10px] uppercase tracking-widest text-accent mb-2 block">
                {post.category}
              </span>
              <h3 className="font-serif italic text-xl text-foreground group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed max-w-lg">
                {post.excerpt}
              </p>
            </div>
            <span
              aria-hidden="true"
              className="hidden md:block w-8 h-[1px] bg-muted-foreground group-hover:w-14 group-hover:bg-accent transition-all duration-300"
            />
          </Link>
        ))}
      </div>
    </section>
  )
}

// ─── Contact ───────────────────────────────────────────────────────────────────
function ContactSection() {
  return (
    <section className="bg-secondary border-t border-border py-20 md:py-28" id="kapcsolat">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent mb-4">
            Kapcsolat
          </p>
          <h2 className="font-serif italic font-300 text-foreground text-[clamp(2.2rem,5vw,4rem)] leading-[1.05]">
            Kérdése van?<br />Írjon nekünk.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-base max-w-sm">
            Általános tájékoztatásért, tartalommal kapcsolatos kérdésekért forduljon
            hozzánk bizalommal.
          </p>
          <a
            href="mailto:info@hungaryhegymaszas.com"
            className="mt-4 block text-accent hover:text-foreground transition-colors text-sm"
          >
            info@hungaryhegymaszas.com
          </a>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

// ─── Page export ───────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Ticker />
        <HistoryPreview />
        <EquipmentSection />
        <AchievementsSection />
        <TrainingPreview />
        <RulesPreview />
        <FactsSection />
        <BlogPreview />
        <ContactSection />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
