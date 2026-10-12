import { ArrowUpRight } from 'lucide-react'
import { team } from '../../data/team'
import './About.css'

function About() {
  return (
    <section
      className="about section"
      id="nosotros"
    >
      <div className="container">
        <div className="about__intro">
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

        <div className="about__team">
          {team.map((member) => (
            <article
              className="team-member"
              key={member.name}
            >
              <div className="team-member__visual">
                <span>{member.initials}</span>

                <ArrowUpRight
                  size={28}
                  strokeWidth={1.3}
                  aria-hidden="true"
                />
              </div>

              <div className="team-member__content">
                <div className="team-member__header">
                  <div>
                    <h3>{member.name}</h3>

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
    </section>
  )
}

export default About