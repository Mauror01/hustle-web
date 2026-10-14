import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { contact } from '../../data/contact'
import './Contact.css'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    setSubmitted(true)

    window.setTimeout(() => {
      setSubmitted(false)
    }, 3500)
  }

  return (
    <section
      className="contact section"
      id="contacto"
    >
      <div className="container">
        <div className="contact__header">
          <div>
            <span className="mono contact__eyebrow">
              Contacto
            </span>

            <h2 className="contact__title">
              ¿Tenés una idea?
              <br />
              Hagámosla real.
            </h2>
          </div>

          <ArrowUpRight
            className="contact__arrow"
            strokeWidth={1}
            aria-hidden="true"
          />
        </div>

        <div className="contact__layout">
          <div className="contact__information">
            <p>
              Contanos qué estás pensando y vemos juntos
              cómo convertirlo en una solución digital.
            </p>

            <div className="contact__details">
              <div>
                <span className="mono">Email</span>
                <a href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </div>

              <div>
                <span className="mono">Teléfono</span>
                <span>{contact.phone}</span>
              </div>

              <div>
                <span className="mono">Sede</span>
                <span>{contact.city}</span>
              </div>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="contact-form__row">
              <label>
                <span>Nombre</span>

                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  required
                />
              </label>

              <label>
                <span>Email</span>

                <input
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  required
                />
              </label>
            </div>

            <label>
              <span>Teléfono</span>

              <input
                type="tel"
                name="phone"
                placeholder="+54 ..."
              />
            </label>

            <label>
              <span>¿Qué querés construir?</span>

              <input
                type="text"
                name="project"
                placeholder="Sitio web, sistema, automatización..."
                required
              />
            </label>

            <label>
              <span>Contanos sobre el proyecto</span>

              <textarea
                name="message"
                rows={5}
                placeholder="Un poco de contexto nos ayuda a entender mejor la idea."
                required
              />
            </label>

            <button
              className="contact-form__submit"
              type="submit"
            >
              <span>
                {submitted
                  ? 'Mensaje recibido'
                  : 'Enviar proyecto'}
              </span>

              <ArrowUpRight
                size={20}
                strokeWidth={1.4}
              />
            </button>

            {submitted && (
              <p
                className="contact-form__feedback"
                role="status"
              >
                Demo: el formulario todavía no envía datos.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact