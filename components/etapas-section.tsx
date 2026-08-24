import Link from "next/link"
import { etapas, type Etapa } from "@/lib/etapas"

function EtapaCard({ etapa }: { etapa: Etapa }) {
  return (
    <article>
      <h3 className="font-heading text-lg font-bold text-heading">
        {etapa.numero}ª ETAPA
      </h3>
      <Link
        href={`/etapas/${etapa.slug}`}
        aria-label={`Ver a etapa ${etapa.numero}: ${etapa.titulo}`}
        className={`mt-2 block w-full cursor-pointer overflow-hidden rounded-2xl bg-background p-2 text-left shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue ${
          etapa.destaque ? "ring-2 ring-brand-blue" : "ring-1 ring-border"
        }`}
      >
        <div className="overflow-hidden rounded-xl">
          <img
            src={etapa.imagem || "/placeholder.svg"}
            alt={etapa.alt}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
        <p className="font-heading px-2 py-3 text-center font-bold text-brand-blue text-balance">
          {etapa.titulo}
        </p>
      </Link>
    </article>
  )
}

export function EtapasSection() {
  const primeiras = etapas.slice(0, 8)
  const ultima = etapas[8]

  return (
    <section id="etapas" className="mx-auto max-w-5xl px-4 pb-16 scroll-mt-4">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
        {primeiras.map((etapa) => (
          <EtapaCard key={etapa.numero} etapa={etapa} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <div className="w-full sm:w-1/2 sm:px-4">
          <EtapaCard etapa={ultima} />
        </div>
      </div>
    </section>
  )
}
