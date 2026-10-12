import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../../data/projects'
import './ProjectCard.css'

type ProjectCardProps = {
  project: Project
  reverse?: boolean
}

function ProjectCard({
  project,
  reverse = false,
}: ProjectCardProps) {
  return (
    <article
      className={`project-card ${
        reverse ? 'project-card--reverse' : ''
      }`}
    >
      <div className="project-card__visual">
        {project.visual === 'dashboard' ? (
          <DashboardPreview />
        ) : (
          <AutomationPreview />
        )}
      </div>

      <div className="project-card__content">
        <div className="project-card__meta mono">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-card__technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <a
          className="project-card__link"
          href="#contacto"
        >
          Ver proyecto
          <ArrowUpRight
            size={18}
            strokeWidth={1.5}
          />
        </a>
      </div>
    </article>
  )
}

function DashboardPreview() {
  return (
    <div className="dashboard-preview">
      <div className="dashboard-preview__sidebar">
        <strong>N.</strong>

        <div>
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="dashboard-preview__main">
        <div className="dashboard-preview__topbar">
          <div>
            <small>NEXOSTOCK</small>
            <strong>Inventario</strong>
          </div>

          <span className="dashboard-preview__avatar">
            MR
          </span>
        </div>

        <div className="dashboard-preview__stats">
          <div>
            <small>Productos</small>
            <strong>248</strong>
          </div>

          <div>
            <small>Stock bajo</small>
            <strong>12</strong>
          </div>

          <div>
            <small>Movimientos</small>
            <strong>1.4K</strong>
          </div>
        </div>

        <div className="dashboard-preview__table">
          <div className="dashboard-preview__row dashboard-preview__row--header">
            <span>Producto</span>
            <span>Stock</span>
            <span>Estado</span>
          </div>

          <div className="dashboard-preview__row">
            <span>Producto A</span>
            <span>42</span>
            <span>Disponible</span>
          </div>

          <div className="dashboard-preview__row">
            <span>Producto B</span>
            <span>8</span>
            <span>Bajo</span>
          </div>

          <div className="dashboard-preview__row">
            <span>Producto C</span>
            <span>27</span>
            <span>Disponible</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function AutomationPreview() {
  return (
    <div className="automation-preview">
      <div className="automation-preview__grid" />

      <div className="automation-node automation-node--start">
        <small>01</small>
        <strong>WhatsApp</strong>
        <span>Mensaje recibido</span>
      </div>

      <span className="automation-line automation-line--one" />

      <div className="automation-node automation-node--center">
        <small>02</small>
        <strong>IA</strong>
        <span>Analiza intención</span>
      </div>

      <span className="automation-line automation-line--two" />

      <div className="automation-node automation-node--end">
        <small>03</small>
        <strong>Workflow</strong>
        <span>Ejecuta acción</span>
      </div>
    </div>
  )
}

export default ProjectCard