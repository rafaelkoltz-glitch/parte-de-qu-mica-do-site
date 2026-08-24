const heroImages = [
  {
    src: "/images/rio-poluido.png",
    alt: "Rio poluído com lixo e água contaminada",
  },
  {
    src: "/images/eta-ilustracao.png",
    alt: "Ilustração de uma Estação de Tratamento de Água",
  },
  {
    src: "/images/agua-limpa-maos.png",
    alt: "Mãos segurando água limpa e potável",
  },
]

export function HeroSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 pt-10 text-center">
      <h1 className="font-heading text-4xl font-extrabold leading-tight text-balance md:text-5xl">
        <span className="text-foreground">ETA - </span>
        <span className="text-heading">Estação de Tratamento de Água</span>
      </h1>
      <p className="mt-3 text-base text-muted-foreground md:text-lg">
        Descubra como a água de rios e lagos são tratadas
      </p>

      <div className="mt-8 grid grid-cols-3 gap-2 md:gap-4">
        {heroImages.map((img) => (
          <div
            key={img.src}
            className="overflow-hidden rounded-lg shadow-sm ring-1 ring-border"
          >
            <img
              src={img.src || "/placeholder.svg"}
              alt={img.alt}
              className="aspect-[3/4] h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
