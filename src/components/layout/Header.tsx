
import { useEffect, useRef, useState } from 'react'
import {
  ArrowUpRight,
  Building2,
  ChartNoAxesCombined,
  ChevronDown,
  PackageSearch,
  Workflow,
} from 'lucide-react'
import './Header.css'

const navigation = [
  { label: 'Trabajo', href: '#trabajo' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'FAQ', href: '#faq' },
]

const productCategories = [
  {
    label: 'Inmobiliarios',
    href: '#trabajo',
    description: 'Gestión de propiedades y clientes',
    icon: Building2,
  },
  {
    label: 'Automatización',
    href: '#trabajo',
    description: 'Procesos e integraciones inteligentes',
    icon: Workflow,
  },
  {
    label: 'Compra y stock',
    href: '#trabajo',
    description: 'Compras, inventario y operaciones',
    icon: PackageSearch,
  },
  {
    label: 'DA',
    href: '#trabajo',
    description: 'Análisis y visualización de datos',
    icon: ChartNoAxesCombined,
  },
]

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  const desktopProductsRef = useRef<HTMLDivElement>(null)
  const mobileProductsRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node

      const insideDesktop =
        desktopProductsRef.current?.contains(target) ?? false

      const insideMobile =
        mobileProductsRef.current?.contains(target) ?? false

      if (!insideDesktop && !insideMobile) {
        setProductsOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setProductsOpen(false)
        setMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
    setProductsOpen(false)
  }

  const toggleProducts = () => {
    setProductsOpen((current) => !current)
  }

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
            {navigation.slice(0, 1).map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setProductsOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <div
              ref={desktopProductsRef}
              className={[
                'header__products',
                productsOpen ? 'header__products--open' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <button
                className="header__products-toggle"
                type="button"
                aria-expanded={productsOpen}
                aria-controls="desktop-products-dropdown"
                onClick={toggleProducts}
              >
                Productos
                <ChevronDown
                  className="products-chevron"
                  size={15}
                  aria-hidden="true"
                />
              </button>

              <div
                id="desktop-products-dropdown"
                className="header__products-dropdown"
                aria-hidden={!productsOpen}
              >
                <span className="header__products-eyebrow">
                  Nuestras soluciones
                </span>

                {productCategories.map((product) => {
                  const Icon = product.icon

                  return (
                    <a
                      key={product.label}
                      href={product.href}
                      tabIndex={productsOpen ? 0 : -1}
                      onClick={closeMenu}
                    >
                      <span className="header__product-icon">
                        <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
                      </span>

                      <span className="header__product-copy">
                        <span className="header__product-name">
                          {product.label}
                        </span>
                        <span className="header__product-description">
                          {product.description}
                        </span>
                      </span>

                      <ArrowUpRight
                        className="header__product-arrow"
                        size={16}
                        aria-hidden="true"
                      />
                    </a>
                  )
                })}
              </div>
            </div>

            {navigation.slice(1).map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setProductsOpen(false)}
              >
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
            onClick={() => {
              setMenuOpen((current) => !current)
              setProductsOpen(false)
            }}
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
          {navigation.slice(0, 1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              {item.label}
            </a>
          ))}

          <div
            ref={mobileProductsRef}
            className={[
              'mobile-menu__products',
              productsOpen ? 'mobile-menu__products--open' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <button
              className="mobile-menu__products-toggle"
              type="button"
              aria-expanded={productsOpen}
              aria-controls="mobile-products-dropdown"
              onClick={toggleProducts}
              tabIndex={menuOpen ? 0 : -1}
            >
              Productos
              <ChevronDown
                className="products-chevron"
                size={22}
                aria-hidden="true"
              />
            </button>

            <div
              id="mobile-products-dropdown"
              className="mobile-menu__products-list"
              aria-hidden={!productsOpen}
            >
              {productCategories.map((product) => {
                const Icon = product.icon

                return (
                  <a
                    key={product.label}
                    className="mobile-menu__product-link"
                    href={product.href}
                    tabIndex={menuOpen && productsOpen ? 0 : -1}
                    onClick={closeMenu}
                  >
                    <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
                    <span>{product.label}</span>
                  </a>
                )
              })}
            </div>
          </div>

          {navigation.slice(1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              {item.label}
            </a>
          ))}

          <a
            className="mobile-menu__contact"
            href="#contacto"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
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
