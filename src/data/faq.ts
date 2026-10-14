export type FAQItem = {
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    question: '¿Cuánto tarda un proyecto?',
    answer:
      'Depende del alcance y la complejidad. Un proyecto pequeño puede resolverse en pocas semanas, mientras que sistemas más completos requieren distintas etapas de desarrollo. Antes de comenzar definimos alcance, prioridades y cronograma.',
  },
  {
    question: '¿Desarrollan soluciones a medida?',
    answer:
      'Sí. Cada proyecto se plantea alrededor del problema que necesitamos resolver, evitando adaptar el negocio a herramientas que no fueron diseñadas para él.',
  },
  {
    question: '¿Pueden trabajar sobre un sistema existente?',
    answer:
      'Sí. Podemos analizar una solución existente, mejorarla, integrar nuevas funcionalidades o desarrollar módulos adicionales.',
  },
  {
    question: '¿Trabajan únicamente con empresas de La Rioja?',
    answer:
      'No. Hustle tiene sede en La Rioja, Argentina, pero podemos trabajar de forma remota con proyectos de cualquier ubicación.',
  },
  {
    question: '¿Qué pasa después del lanzamiento?',
    answer:
      'Podemos continuar con mantenimiento, mejoras, nuevas funcionalidades, análisis y soporte según las necesidades del proyecto.',
  },
]