import { useEffect, useState } from 'react'
import './Header.css'

const navigation = [
  { label: 'Trabajo', href: '#trabajo' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'FAQ', href: '#faq' },
]

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setIsScrolled(currentScrollY > 20)

      if (currentScrollY <= 20) {
        setIsHidden(false)
      } else if (currentScrollY > lastScrollY) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }

      lastScrollY = currentScrollY
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

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
  <>
    <header
      className={[
        'header',
        isScrolled ? 'header--scrolled' : '',
        isHidden && !menuOpen ? 'header--hidden' : '',
        menuOpen ? 'header--menu-open' : '',
      ]
        .filter(Boolean)
        .join(' ')}
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
          className={`header__menu-button ${
            menuOpen ? 'header__menu-button--open' : ''
          }`}
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span className="menu-icon" aria-hidden="true">
            <span className="menu-icon__line menu-icon__line--top" />
            <span className="menu-icon__line menu-icon__line--middle" />
            <span className="menu-icon__line menu-icon__line--bottom" />
          </span>
        </button>
      </div>
    </header>

    <div
      className={`mobile-menu ${
        menuOpen ? 'mobile-menu--open' : ''
      }`}
      aria-hidden={!menuOpen}
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
  </>
)

}

export default Header