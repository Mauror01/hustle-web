export type TeamMember = {
  name: string
  role: string
  description: string
  skills: string[]
  initials: string
}

export const team: TeamMember[] = [
  {
    name: 'Mateo Ferraro',
    role: 'Desarrollo & Automatización',
    description:
      'Full-stack developer enfocado en sistemas web, integraciones y automatización de procesos.',
    skills: [
      'React',
      'Node',
      'APIs',
      'Automation',
    ],
    initials: 'MF',
  },
  {
    name: 'Clara Molina',
    role: 'Data & Producto',
    description:
      'Analista orientada al diseño de productos digitales, análisis de datos y experiencias centradas en usuarios.',
    skills: [
      'Data',
      'UX',
      'Analytics',
      'Product',
    ],
    initials: 'CM',
  },
]