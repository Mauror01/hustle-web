import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import './Header.css'

const navigation = [
  { label: 'Trabajo', href: '#trabajo' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'FAQ', href: '#faq' },
]

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`header ${isScrolled ? 'header--scrolled' : ''}`}
    >
      <div className="container header__inner">
        <a
          className="header__logo"
          href="#hero"
          aria-label="Hustle - Inicio"
        >
          HUSTLE.
        </a>

        <nav
          className="header__nav"
          aria-label="Navegación principal"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header__cta" href="#contacto">
          Hablemos
          <span aria-hidden="true">↗</span>
        </a>

        <button
          className="header__menu-button"
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`mobile-menu ${
          menuOpen ? 'mobile-menu--open' : ''
        }`}
      >
        <nav
          className="container mobile-menu__nav"
          aria-label="Navegación móvil"
        >
          {navigation.map((item) => (
            <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
            >
                {item.label}
            </a>
            ))}

          <a
            className="mobile-menu__contact"
            href="#contacto"
            onClick={closeMenu}
          >
            Hablemos
            <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header