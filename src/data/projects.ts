export type ProjectVisual = 'dashboard' | 'automation'

export type Project = {
  id: number
  title: string
  category: string
  year: string
  description: string
  technologies: string[]
  visual: ProjectVisual
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'NexoStock',
    category: 'Sistema de gestión',
    year: '2026',
    description:
      'Sistema de gestión de inventario y operaciones pensado para centralizar productos, movimientos, stock y administración desde una interfaz clara.',
    technologies: [
      'React',
      'TypeScript',
      'Supabase',
    ],
    visual: 'dashboard',
  },
  {
    id: 2,
    title: 'Automatización IA',
    category: 'Automatización',
    year: '2026',
    description:
      'Procesos inteligentes que conectan mensajería, información, APIs y herramientas internas para reducir tareas manuales y mejorar la operación.',
    technologies: [
      'n8n',
      'APIs',
      'WhatsApp',
      'IA',
    ],
    visual: 'automation',
  },
]