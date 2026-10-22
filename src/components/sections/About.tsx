import { ArrowUpRight } from 'lucide-react'
import { team } from '../../data/team'
import './About.css'

function About() {

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    const element = event.currentTarget
    const rect = element.getBoundingClientRect()

    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5

    element.style.setProperty('--mouse-x', `${x * 24}px`)
    element.style.setProperty('--mouse-y', `${y * 24}px`)
  }

  const handleMouseLeave = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    event.currentTarget.style.setProperty('--mouse-x', '0px')
    event.currentTarget.style.setProperty('--mouse-y', '0px')
  }
  return (
    <section
      className="about"
      id="nosotros"
    >
      {/* Pantalla inicial */}
      <div
          className="about__intro-screen"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
      >
        <div
          className="about__pattern"
          aria-hidden="true"
        />

        <div className="container about__intro">
          <div>
            <span className="mono about__eyebrow">
              Nosotros
            </span>

            <h2 className="section-title">
              Tecnología
              <br />
              con intención.
            </h2>
          </div>

          <div className="about__statement">
            <p>
              No construimos software porque sí.
            </p>

            <p>
              Entendemos el problema, diseñamos una solución
              y recién entonces escribimos código.
            </p>
          </div>
        </div>
      </div>

      {/* Integrantes */}
      <div className="about__team-section">
        <div className="container">
          <div className="about__team">
            {team.map((member) => (
              <article
                className="team-member"
                key={member.name}
              >
                <div className="team-member__visual">
                  <span>{member.initials}</span>

                  <a
                    className="team-member__visual-link"
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <ArrowUpRight
                      size={28}
                      strokeWidth={1.3}
                      aria-hidden="true"
                    />
                  </a>
                </div>

                <div className="team-member__content">
                  <div className="team-member__header">
                    <div>
                      <h3>
                        <a
                          className="team-member__name-link"
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {member.name}
                        </a>
                      </h3>

                      <span className="mono">
                        {member.role}
                      </span>
                    </div>
                  </div>

                  <p>{member.description}</p>

                  <div className="team-member__skills">
                    {member.skills.map((skill) => (
                      <span key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About