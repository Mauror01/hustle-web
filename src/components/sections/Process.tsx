import { useEffect, useState } from 'react'
import './Process.css'

const steps = [
  {
    number: '01',
    title: 'Descubrir',
    description:
      'Entendemos el problema, el negocio y los objetivos antes de pensar en una solución.',
  },
  {
    number: '02',
    title: 'Diseñar',
    description:
      'Definimos el alcance, la experiencia y la forma que debería tener el producto.',
  },
  {
    number: '03',
    title: 'Construir',
    description:
      'Desarrollamos, integramos y probamos cada parte de la solución.',
  },
  {
    number: '04',
    title: 'Lanzar',
    description:
      'Publicamos, medimos resultados y seguimos mejorando cuando el proyecto lo necesita.',
  },
]

function Process() {
    
    const [isDesktop, setIsDesktop] = useState(
        () => window.matchMedia('(min-width: 900px)').matches,
    )

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 900px)')

        const handleChange = (event: MediaQueryListEvent) => {
            setIsDesktop(event.matches)
        }

        mediaQuery.addEventListener('change', handleChange)

        return () => {
            mediaQuery.removeEventListener('change', handleChange)
        }
    }, [])

  return (
    <section className="process section">
      <div className="container">
        <div className="process__header">
          <span className="mono process__eyebrow">
            Cómo trabajamos
          </span>

          <h2 className="section-title">
            De una idea
            <br />
            a un producto real.
          </h2>
        </div>

        <div
            className="process__timeline"
            key={isDesktop ? 'desktop' : 'mobile'}
        >
    {isDesktop && (
        <>
            <div
                className="process__track"
                aria-hidden="true"
            />

            <div
                className="process__beam"
                aria-hidden="true"
            >
                <span className="process__beam-glow" />
            </div>
        </>
        )}

            {steps.map((step, index) => (
                <article
                    className={`process-step process-step--${index + 1}`}
                    key={step.number}
                >
              <div className="process-step__marker">
                <span>{step.number}</span>
              </div>

              <div className="process-step__content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process