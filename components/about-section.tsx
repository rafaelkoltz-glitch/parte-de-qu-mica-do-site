export function AboutSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h2 className="font-heading text-2xl font-bold text-heading">
        O que é a ETA
      </h2>
      <p className="mt-4 leading-relaxed text-foreground">
        A ETA é uma Estação de Tratamento de Água. Trata-se de uma unidade
        industrial ou de saneamento onde a água bruta, captada de rios, lagos ou
        represas, passa por processos físicos e químicos para se tornar potável
        e segura para o consumo humano.
      </p>

      <div className="mt-12 text-right">
        <h2 className="font-heading text-2xl font-bold text-heading text-balance">
          Quais são as etapas da ETA
        </h2>
        <div className="mt-4 space-y-3 leading-relaxed text-foreground">
          <p>
            Estação de Tratamento de Água inclui captação, coagulação,
            floculação, decantação, filtração, desinfecção e fluoretação. O
            processo transforma a água bruta de rios ou represas em água potável
            e segura para o consumo.
          </p>
          <p>Acompanhe a seguir as etapas da Estação de Tratamento de Água</p>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="overflow-hidden rounded-2xl bg-background shadow-md ring-1 ring-border">
          <img
            src="/images/diagrama-processo.png"
            alt="Diagrama das etapas do processo de tratamento de água"
            className="max-h-[420px] w-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}
