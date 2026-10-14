import { ArrowUpRight } from 'lucide-react'
import { contact } from '../../data/contact'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <a
            className="footer__brand"
            href="#hero"
          >
            HUSTLE.
          </a>

          <div className="footer__info">
            <div>
              <span className="mono">Sede</span>
              <span>{contact.city}</span>
            </div>

            <div>
              <span className="mono">Contacto</span>
              <a href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              <span>{contact.phone}</span>
            </div>

            <div>
              <span className="mono">Social</span>

              <a href="#contacto">
                Instagram
                <ArrowUpRight size={14} />
              </a>

              <a href="#contacto">
                LinkedIn
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__statement">
          Hagamoslo realidad.
        </div>

        <div className="footer__bottom">
          <span>© 2026 - Hustle</span>

          <span>
            La Rioja — Argentina
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer