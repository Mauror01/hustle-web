import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'
import './Projects.css'

function Projects() {
  return (
    <section
      className="projects section"
      id="trabajo"
    >
      <div className="container">
        <div className="projects__header">
          <div>
            <span className="mono projects__eyebrow">
              
            </span>

            <h2 className="section-title">
              Algunos de
              <br />
              nuestros proyectos.
            </h2>
          </div>

          <p>
            Productos digitales creados con el fin de resolver
            problemas reales y poder evolucionar junto
            con cada necesidad.
          </p>
        </div>

        <div className="projects__list">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects