
import type { LucideIcon } from 'lucide-react'

import {
  Bot,
  Building2,
  CalendarDays,
  ChartNoAxesCombined,
  Code2,
  Globe,
  LayoutDashboard,
  MessageCircle,
  PackageSearch,
  ShoppingCart,
  Workflow,
} from 'lucide-react'

export type ProductMenuItem = {
  title: string
  description: string
  type: string
  href: string
  icon: LucideIcon
}

export type ProductMenuCategory = {
  id: string
  label: string
  description: string
  icon: LucideIcon
  items: ProductMenuItem[]
}

export const productMenuCategories: ProductMenuCategory[] = [
  {
    id: 'inmobiliarios',
    label: 'Inmobiliarios',
    description:
      'Tecnología para organizar la atención, las propiedades y el seguimiento comercial.',
    icon: Building2,
    items: [
      {
        title: 'Asistente inmobiliario',
        description:
          'Atención automatizada y clasificación de consultas para orientar a cada interesado.',
        type: 'Sistema',
        href: '#contacto',
        icon: Bot,
      },
      {
        title: 'Búsqueda y coordinación de visitas',
        description:
          'Filtros de propiedades y conexión con agenda para facilitar el seguimiento.',
        type: 'Integración',
        href: '#contacto',
        icon: CalendarDays,
      },
    ],
  },
  {
    id: 'automatizacion',
    label: 'Automatización',
    description:
      'Procesos conectados para reducir tareas manuales y mejorar las operaciones.',
    icon: Workflow,
    items: [
      {
        title: 'Automatización IA',
        description:
          'Conecta mensajería, APIs e información para reducir tareas repetitivas.',
        type: 'Proyecto',
        href: '#trabajo',
        icon: Workflow,
      },
      {
        title: 'Agentes y chatbots',
        description:
          'Asistentes inteligentes para atender consultas y procesar información.',
        type: 'Servicio',
        href: '#servicios',
        icon: Bot,
      },
      {
        title: 'Workflows e integraciones',
        description:
          'Conectamos APIs, WhatsApp, email, CRM y herramientas internas.',
        type: 'Servicio',
        href: '#servicios',
        icon: MessageCircle,
      },
    ],
  },
  {
    id: 'compra-stock',
    label: 'Compra y stock',
    description:
      'Herramientas para controlar productos, movimientos e inventario.',
    icon: PackageSearch,
    items: [
      {
        title: 'NexoStock',
        description:
          'Centraliza productos, movimientos, stock y administración desde un mismo sistema.',
        type: 'Sistema',
        href: '#trabajo',
        icon: PackageSearch,
      },
      {
        title: 'Sistemas de gestión',
        description:
          'Soluciones para organizar stock, ventas, clientes, usuarios y reportes.',
        type: 'Servicio',
        href: '#servicios',
        icon: ShoppingCart,
      },
    ],
  },
  {
    id: 'datos-analisis',
    label: 'Datos y análisis',
    description:
      'Transformamos información en indicadores claros para tomar decisiones.',
    icon: ChartNoAxesCombined,
    items: [
      {
        title: 'Análisis de datos',
        description:
          'Exploración, limpieza y análisis de información para descubrir oportunidades.',
        type: 'Servicio',
        href: '#servicios',
        icon: ChartNoAxesCombined,
      },
      {
        title: 'Dashboards y KPIs',
        description:
          'Indicadores y paneles visuales para monitorear resultados.',
        type: 'Solución',
        href: '#servicios',
        icon: LayoutDashboard,
      },
      {
        title: 'Reportes y visualización',
        description:
          'Información organizada en reportes comprensibles y visualizaciones.',
        type: 'Solución',
        href: '#servicios',
        icon: Globe,
      },
    ],
  },
  {
    id: 'desarrollo-web',
    label: 'Desarrollo web',
    description:
      'Experiencias digitales diseñadas para acompañar el crecimiento de cada negocio.',
    icon: Code2,
    items: [
      {
        title: 'Landing pages y sitios web',
        description:
          'Páginas modernas, responsive y alineadas con la identidad de cada marca.',
        type: 'Servicio',
        href: '#servicios',
        icon: Globe,
      },
      {
        title: 'Aplicaciones web',
        description:
          'Plataformas y herramientas digitales adaptadas a procesos concretos.',
        type: 'Servicio',
        href: '#servicios',
        icon: Code2,
      },
      {
        title: 'Ecommerce',
        description:
          'Experiencias digitales para presentar y comercializar productos.',
        type: 'Servicio',
        href: '#servicios',
        icon: ShoppingCart,
      },
    ],
  },
]
