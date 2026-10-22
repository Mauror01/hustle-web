export type TeamMember = {
  name: string
  role: string
  description: string
  skills: string[]
  initials: string
  linkedin: string
}

export const team: TeamMember[] = [
  {
    name: 'Mauro Rios',
    role: 'Desarrollo / Análisis de datos',
    linkedin: 'https://www.linkedin.com/in/mauroriosvega/',
    description:
      'Full-stack developer enfocado en sistemas web, integraciones y analisis de datos',
    skills: [
      'Python',
      'React',
      'Node',
      'N8N',
      'SQL',
    ],
    initials: 'MR',
  },
  {
    name: 'Agustin Herrera',
    role: 'Gestión / Liderazgo de Proyectos',
    linkedin: 'https://www.linkedin.com/in/agustin-herrera-030527254/',
    description:
      'Gestión de proyectos, liderazgo de equipos y desarrollo de estrategias de negocio',
    skills: [
      'Gestión de Proyectos',
      'Liderazgo de Equipos',
      'Estrategias de Negocio',
    ],
    initials: 'AH',
  },
]