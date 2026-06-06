import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles } from '../page'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: `${article.title} | Hungary Hegymászás`,
    description: article.excerpt,
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const index = articles.indexOf(article)
  const prev = articles[index - 1] ?? null
  const next = articles[index + 1] ?? null

  return (
    <>
      <Header />
      <main className="flex-1">
      {/* Article hero */}
      <div className="pt-20 bg-secondary border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 pt-16 pb-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 font-sans text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors mb-8 group"
          >
            <span className="block w-6 h-[1px] bg-muted-foreground group-hover:bg-accent transition-colors" />
            Blog
          </Link>
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent mb-4">
            {article.category}
          </p>
          <h1 className="font-serif italic font-300 text-foreground text-[clamp(2.2rem,6vw,5rem)] leading-[0.95] max-w-3xl text-balance">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-screen-xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-start">
        {/* Main content */}
        <div>
          <p className="font-serif italic text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            {article.excerpt}
          </p>
          <div className="w-12 h-[1px] bg-accent mb-10" />
          <div className="flex flex-col gap-6">
            {article.body.map((para, i) => (
              <p
                key={i}
                className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-2xl"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Tips */}
          {article.tips && article.tips.length > 0 && (
            <div className="mt-12 border-t border-border pt-10">
              <p className="font-sans text-[10px] uppercase tracking-widest text-foreground mb-5">
                Gyakorlati tippek
              </p>
              <ul className="flex flex-col gap-3">
                {article.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm text-muted-foreground">
                    <span className="font-mono text-[9px] text-muted-foreground shrink-0 pt-1 w-5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-28 flex flex-col gap-8">
          <div className="border border-border p-6">
            <p className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
              Téma
            </p>
            <span className="font-sans text-xs uppercase tracking-widest text-accent">
              {article.category}
            </span>
          </div>

          <div className="border border-border p-6">
            <p className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
              Kapcsolat
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Kérdése van a cikk tartalmával kapcsolatban?
            </p>
            <a
              href="mailto:info@hungaryhegymaszas.com"
              className="font-sans text-xs uppercase tracking-widest text-accent hover:text-foreground transition-colors"
            >
              info@hungaryhegymaszas.com
            </a>
          </div>
        </aside>
      </article>

      {/* Navigation between articles */}
      <nav
        aria-label="Cikkek közötti navigáció"
        className="border-t border-border bg-secondary"
      >
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
          <div className="bg-secondary p-8">
            {prev ? (
              <Link
                href={`/blog/${prev.slug}`}
                className="group flex flex-col gap-2"
              >
                <span className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-accent transition-colors">
                  Előző cikk
                </span>
                <span className="font-serif italic text-lg text-foreground group-hover:text-accent transition-colors leading-tight">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <span className="text-sm text-muted-foreground">Nincs előző cikk</span>
            )}
          </div>
          <div className="bg-secondary p-8 sm:text-right">
            {next ? (
              <Link
                href={`/blog/${next.slug}`}
                className="group flex flex-col gap-2"
              >
                <span className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-accent transition-colors">
                  Következő cikk
                </span>
                <span className="font-serif italic text-lg text-foreground group-hover:text-accent transition-colors leading-tight">
                  {next.title}
                </span>
              </Link>
            ) : (
              <span className="text-sm text-muted-foreground">Nincs következő cikk</span>
            )}
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-6 py-6 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="block w-6 h-[1px] bg-muted-foreground group-hover:bg-foreground transition-colors" />
            Összes cikk
          </Link>
        </div>
      </nav>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
