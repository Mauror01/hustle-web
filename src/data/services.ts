export type Service = {
  id: number
  title: string
  shortDescription: string
  description: string
  capabilities: string[]
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Desarrollo web',
    shortDescription:
      'Sitios y aplicaciones pensados para funcionar, escalar y representar una marca.',
    description:
      'Diseñamos y desarrollamos experiencias digitales adaptadas a cada proyecto, cuidando tanto la interfaz como el funcionamiento del producto.',
    capabilities: [
      'Landing pages',
      'Sitios corporativos',
      'Aplicaciones web',
      'Ecommerce',
      'Dashboards',
      'Integraciones',
      'Responsive design',
    ],
  },
  {
    id: 2,
    title: 'Sistemas de gestión',
    shortDescription:
      'Herramientas digitales adaptadas al funcionamiento real de cada organización.',
    description:
      'Creamos software alrededor de los procesos del negocio para centralizar información, simplificar operaciones y acompañar su crecimiento.',
    capabilities: [
      'Stock',
      'Ventas',
      'Clientes',
      'Turnos',
      'Reportes',
      'Usuarios',
      'Administración',
      'Integraciones',
    ],
  },
  {
    id: 3,
    title: 'Automatización',
    shortDescription:
      'Menos tareas repetitivas. Más procesos trabajando solos.',
    description:
      'Conectamos herramientas, sistemas y servicios para automatizar procesos repetitivos y reducir trabajo manual.',
    capabilities: [
      'Workflows',
      'APIs',
      'WhatsApp',
      'Email',
      'CRM',
      'Webhooks',
      'Integraciones',
      'Procesos internos',
    ],
  },
  {
    id: 4,
    title: 'Inteligencia artificial',
    shortDescription:
      'IA aplicada a problemas concretos donde realmente aporta valor.',
    description:
      'Integramos inteligencia artificial en productos y procesos cuando puede mejorar la experiencia, acelerar tareas o aprovechar mejor la información.',
    capabilities: [
      'Agentes',
      'Chatbots',
      'Clasificación',
      'Extracción de información',
      'Procesamiento de documentos',
      'Asistentes internos',
      'IA generativa',
    ],
  },
  {
    id: 5,
    title: 'Análisis de datos',
    shortDescription:
      'Convertimos información dispersa en decisiones comprensibles.',
    description:
      'Organizamos, analizamos y visualizamos información para descubrir patrones, medir resultados y facilitar la toma de decisiones.',
    capabilities: [
      'Dashboards',
      'KPIs',
      'Limpieza de datos',
      'Reportes',
      'Visualización',
      'Análisis exploratorio',
      'Automatización de reportes',
    ],
  },
]