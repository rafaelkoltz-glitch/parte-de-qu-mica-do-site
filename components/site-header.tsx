import { GraduationCap } from "lucide-react"

const disciplinas = [
  { nome: "Biologia", cor: "text-heading" },
  { nome: "Matemática", cor: "text-brand-blue" },
]

export function SiteHeader() {
  return (
    <header className="bg-teal text-teal-foreground">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 pt-4 sm:flex-row sm:items-start sm:justify-between">
        <nav
          aria-label="Disciplinas"
          className="order-2 flex items-end gap-1 self-stretch sm:order-1 sm:self-end"
        >
          {disciplinas.map((d) => (
            <a
              key={d.nome}
              href="#"
              className={`font-heading rounded-t-lg px-4 py-2 text-lg font-bold ${d.cor} transition-opacity hover:opacity-80`}
            >
              {d.nome}
            </a>
          ))}
          <span
            aria-current="page"
            className="font-heading -mb-px rounded-t-lg bg-background px-5 py-3 text-lg font-bold text-heading shadow-sm"
          >
            Química
          </span>
        </nav>

        <div className="order-1 flex items-center gap-3 pb-4 sm:order-2">
          <GraduationCap className="size-9 shrink-0" aria-hidden="true" />
          <p className="font-heading text-sm font-bold leading-tight">
            IFA - Itinerário
            <br />
            Formativo de
            <br />
            aprofundamento
          </p>
        </div>
      </div>
    </header>
  )
}
