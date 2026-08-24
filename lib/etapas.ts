export type Etapa = {
  numero: number
  titulo: string
  imagem: string
  alt: string
  destaque?: boolean
}

export const etapas: Etapa[] = [
  {
    numero: 1,
    titulo: "Captação e Adução de água",
    imagem: "/images/etapa-1-captacao.png",
    alt: "Rio natural entre montanhas, fonte de captação de água",
  },
  {
    numero: 2,
    titulo: "Pré-Tratamento da água",
    imagem: "/images/etapa-2-pretratamento.png",
    alt: "Tanques industriais de pré-tratamento de água",
  },
  {
    numero: 3,
    titulo: "Coagulação da água",
    imagem: "/images/etapa-3-coagulacao.png",
    alt: "Tanque circular azul de coagulação de água",
  },
  {
    numero: 4,
    titulo: "Floculação da água",
    imagem: "/images/etapa-4-floculacao.png",
    alt: "Ilustração de tanque de floculação com misturador",
  },
  {
    numero: 5,
    titulo: "Decantação (ou flotação)",
    imagem: "/images/etapa-5-decantacao.png",
    alt: "Frascos de laboratório mostrando decantação da água",
  },
  {
    numero: 6,
    titulo: "Filtração da água",
    imagem: "/images/etapa-6-filtracao.png",
    alt: "Diagrama de filtração da água com camadas de meio filtrante",
  },
  {
    numero: 7,
    titulo: "Desinfecção da água",
    imagem: "/images/etapa-7-desinfeccao.png",
    alt: "Piscinas de tratamento com tubulações azuis",
  },
  {
    numero: 8,
    titulo: "Correção de PH e Fluoretação",
    imagem: "/images/etapa-8-ph.png",
    alt: "Mãos com luvas segurando amostra de água em laboratório",
    destaque: true,
  },
  {
    numero: 9,
    titulo: "Reservação e Distribuição",
    imagem: "/images/etapa-9-reservacao.png",
    alt: "Grande reservatório cilíndrico de água contra o céu",
  },
]
