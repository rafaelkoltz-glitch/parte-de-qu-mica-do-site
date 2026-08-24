export type Etapa = {
  numero: number
  titulo: string
  imagem: string
  alt: string
  descricao: string
  destaque?: boolean
}

export const etapas: Etapa[] = [
  {
    numero: 1,
    titulo: "Captação e Adução de água",
    imagem: "/images/etapa-1-captacao.png",
    alt: "Rio natural entre montanhas, fonte de captação de água",
    descricao:
      "A água bruta é retirada de mananciais como rios, lagos ou represas por meio de bombas e tubulações (adutoras) que a conduzem até a estação de tratamento. É o ponto de partida de todo o processo.",
  },
  {
    numero: 2,
    titulo: "Pré-Tratamento da água",
    imagem: "/images/etapa-2-pretratamento.png",
    alt: "Tanques industriais de pré-tratamento de água",
    descricao:
      "Nesta fase, grades e peneiras removem os materiais grosseiros, como galhos, folhas e detritos, evitando que danifiquem os equipamentos e preparando a água para as próximas etapas.",
  },
  {
    numero: 3,
    titulo: "Coagulação da água",
    imagem: "/images/etapa-3-coagulacao.png",
    alt: "Tanque circular azul de coagulação de água",
    descricao:
      "Adiciona-se um coagulante (geralmente sulfato de alumínio) que desestabiliza as partículas de sujeira suspensas na água, fazendo com que elas comecem a se agrupar.",
  },
  {
    numero: 4,
    titulo: "Floculação da água",
    imagem: "/images/etapa-4-floculacao.png",
    alt: "Ilustração de tanque de floculação com misturador",
    descricao:
      "A água é agitada lentamente para que as partículas coaguladas se unam e formem flocos maiores e mais pesados, chamados de flocos, que ficam mais fáceis de serem removidos.",
  },
  {
    numero: 5,
    titulo: "Decantação (ou flotação)",
    imagem: "/images/etapa-5-decantacao.png",
    alt: "Frascos de laboratório mostrando decantação da água",
    descricao:
      "Os flocos formados, por serem mais pesados que a água, decantam (afundam) e se depositam no fundo dos tanques, separando a maior parte das impurezas da água.",
  },
  {
    numero: 6,
    titulo: "Filtração da água",
    imagem: "/images/etapa-6-filtracao.png",
    alt: "Diagrama de filtração da água com camadas de meio filtrante",
    descricao:
      "A água passa por filtros compostos por camadas de areia, cascalho e carvão, que retêm as partículas menores que ainda restaram após a decantação, deixando a água mais limpa.",
  },
  {
    numero: 7,
    titulo: "Desinfecção da água",
    imagem: "/images/etapa-7-desinfeccao.png",
    alt: "Piscinas de tratamento com tubulações azuis",
    descricao:
      "Adiciona-se cloro à água para eliminar microrganismos, bactérias e vírus que possam causar doenças, garantindo que a água seja segura para o consumo humano.",
  },
  {
    numero: 8,
    titulo: "Correção de PH e Fluoretação",
    imagem: "/images/etapa-8-ph.png",
    alt: "Mãos com luvas segurando amostra de água em laboratório",
    descricao:
      "O pH da água é ajustado para proteger a rede de distribuição contra a corrosão. Também se adiciona flúor, que ajuda a prevenir a cárie dentária na população.",
    destaque: true,
  },
  {
    numero: 9,
    titulo: "Reservação e Distribuição",
    imagem: "/images/etapa-9-reservacao.png",
    alt: "Grande reservatório cilíndrico de água contra o céu",
    descricao:
      "A água já tratada e potável é armazenada em grandes reservatórios e, então, distribuída pela rede de tubulações até chegar às torneiras das casas, escolas e empresas.",
  },
]
