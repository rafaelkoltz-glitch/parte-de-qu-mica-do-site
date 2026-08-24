"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { etapas, type Etapa } from "@/lib/etapas"

function EtapaCard({
  etapa,
  onSelect,
}: {
  etapa: Etapa
  onSelect: (etapa: Etapa) => void
}) {
  return (
    <article>
      <h3 className="font-heading text-lg font-bold text-heading">
        {etapa.numero}ª ETAPA
      </h3>
      <button
        type="button"
        onClick={() => onSelect(etapa)}
        aria-label={`Ver detalhes da etapa ${etapa.numero}: ${etapa.titulo}`}
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
      </button>
    </article>
  )
}

function EtapaModal({
  etapa,
  onClose,
}: {
  etapa: Etapa
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="etapa-modal-titulo"
    >
      <div
        className="absolute inset-0 bg-foreground/60"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-background shadow-xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-3 top-3 z-10 rounded-full bg-background/80 p-1.5 text-foreground shadow-sm transition-colors hover:bg-muted"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
        <img
          src={etapa.imagem || "/placeholder.svg"}
          alt={etapa.alt}
          className="aspect-[16/9] w-full object-cover"
        />
        <div className="p-6">
          <p className="font-heading text-sm font-bold text-heading">
            {etapa.numero}ª ETAPA
          </p>
          <h2
            id="etapa-modal-titulo"
            className="font-heading mt-1 text-2xl font-bold text-brand-blue text-balance"
          >
            {etapa.titulo}
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {etapa.descricao}
          </p>
        </div>
      </div>
    </div>
  )
}

export function EtapasSection() {
  const [selecionada, setSelecionada] = useState<Etapa | null>(null)
  const primeiras = etapas.slice(0, 8)
  const ultima = etapas[8]

  return (
    <section className="mx-auto max-w-5xl px-4 pb-16">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
        {primeiras.map((etapa) => (
          <EtapaCard key={etapa.numero} etapa={etapa} onSelect={setSelecionada} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <div className="w-full sm:w-1/2 sm:px-4">
          <EtapaCard etapa={ultima} onSelect={setSelecionada} />
        </div>
      </div>

      {selecionada && (
        <EtapaModal etapa={selecionada} onClose={() => setSelecionada(null)} />
      )}
    </section>
  )
}
