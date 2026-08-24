import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { etapas, getEtapaBySlug } from "@/lib/etapas"

export function generateStaticParams() {
  return etapas.map((etapa) => ({ slug: etapa.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const etapa = getEtapaBySlug(slug)
  if (!etapa) return { title: "Etapa não encontrada" }
  return {
    title: `${etapa.numero}ª Etapa - ${etapa.titulo} | ETA`,
    description: etapa.descricao,
  }
}

export default async function EtapaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const etapa = getEtapaBySlug(slug)

  if (!etapa) notFound()

  const indice = etapas.findIndex((e) => e.slug === etapa.slug)
  const anterior = indice > 0 ? etapas[indice - 1] : null
  const proxima = indice < etapas.length - 1 ? etapas[indice + 1] : null

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <article className="mx-auto max-w-3xl px-4 py-10">
        <Link
          href="/#etapas"
          className="font-heading inline-flex items-center gap-2 text-sm font-bold text-brand-blue transition-opacity hover:opacity-80"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Voltar para as etapas
        </Link>

        <p className="font-heading mt-6 text-sm font-bold text-heading">
          {etapa.numero}ª ETAPA
        </p>
        <h1 className="font-heading mt-1 text-3xl font-bold text-brand-blue text-balance sm:text-4xl">
          {etapa.titulo}
        </h1>

        <div className="mt-6 overflow-hidden rounded-2xl shadow-md ring-1 ring-border">
          <img
            src={etapa.imagem || "/placeholder.svg"}
            alt={etapa.alt}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        <p className="mt-6 text-lg leading-relaxed text-foreground text-pretty">
          {etapa.descricao}
        </p>

        <nav
          aria-label="Navegação entre etapas"
          className="mt-10 flex items-center justify-between gap-4 border-t border-border pt-6"
        >
          {anterior ? (
            <Link
              href={`/etapas/${anterior.slug}`}
              className="group inline-flex max-w-[45%] items-center gap-2 text-left"
            >
              <ArrowLeft
                className="size-5 shrink-0 text-brand-blue"
                aria-hidden="true"
              />
              <span>
                <span className="block text-xs text-muted-foreground">
                  Etapa anterior
                </span>
                <span className="font-heading font-bold text-brand-blue">
                  {anterior.titulo}
                </span>
              </span>
            </Link>
          ) : (
            <span />
          )}

          {proxima ? (
            <Link
              href={`/etapas/${proxima.slug}`}
              className="group inline-flex max-w-[45%] items-center gap-2 text-right"
            >
              <span>
                <span className="block text-xs text-muted-foreground">
                  Próxima etapa
                </span>
                <span className="font-heading font-bold text-brand-blue">
                  {proxima.titulo}
                </span>
              </span>
              <ArrowRight
                className="size-5 shrink-0 text-brand-blue"
                aria-hidden="true"
              />
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </article>
    </main>
  )
}
