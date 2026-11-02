
import { useEffect, useRef, useState } from 'react'
import {
  ArrowUpRight,
  ChevronDown,
} from 'lucide-react'

import { productMenuCategories } from '../../data/productMenu'
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

  const [productsOpen, setProductsOpen] = useState(false)
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    productMenuCategories[0]?.id ?? '',
  )
  const [activeMobileCategoryId, setActiveMobileCategoryId] =
    useState<string | null>(null)

  const desktopProductsRef = useRef<HTMLDivElement>(null)
  const mobileProductsRef = useRef<HTMLDivElement>(null)

  const activeCategory =
    productMenuCategories.find(
      (category) => category.id === selectedCategoryId,
    ) ?? productMenuCategories[0]

  // Control de scroll del navbar
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

  // Bloquear scroll del fondo cuando se abre el menú móvil
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Cerrar menús al hacer clic fuera o presionar Escape
  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node

      const insideDesktop =
        desktopProductsRef.current?.contains(target) ?? false

      const insideMobile =
        mobileProductsRef.current?.contains(target) ?? false

      if (!insideDesktop) {
        setProductsOpen(false)
      }

      if (!insideMobile) {
        setActiveMobileCategoryId(null)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setProductsOpen(false)
        setMenuOpen(false)
        setActiveMobileCategoryId(null)
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
    setActiveMobileCategoryId(null)
  }

  const toggleProducts = () => {
    setProductsOpen((current) => !current)
  }

  const toggleMobileCategory = (categoryId: string) => {
    setActiveMobileCategoryId((current) =>
      current === categoryId ? null : categoryId,
    )
  }

  return (
    <>
      <header
        className={[
          'header',
          isScrolled ? 'header--scrolled' : '',
          isHidden && !menuOpen && !productsOpen
            ? 'header--hidden'
            : '',
          menuOpen ? 'header--menu-open' : '',
          productsOpen ? 'header--products-open' : '',
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

          {/* Navegación desktop */}
          <nav
            className="header__nav"
            aria-label="Navegación principal"
          >
            {navigation.slice(0, 1).map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}

            {/* Productos y mega menú */}
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
                aria-controls="desktop-mega-menu"
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
                id="desktop-mega-menu"
                className="header__mega-menu"
                aria-hidden={!productsOpen}
              >
                <div className="header__mega-inner">
                  {/* Columna izquierda: categorías */}
                  <aside className="header__mega-sidebar">
                    <span className="header__mega-eyebrow">
                      Explorá nuestras soluciones
                    </span>

                    <p className="header__mega-sidebar-description">
                      Tecnología pensada para resolver problemas reales.
                    </p>

                    <div className="header__mega-categories">
                      {productMenuCategories.map((category) => {
                        const Icon = category.icon

                        const isActive =
                          selectedCategoryId === category.id

                        return (
                          <button
                            key={category.id}
                            className={[
                              'header__mega-category',
                              isActive
                                ? 'header__mega-category--active'
                                : '',
                            ]
                              .filter(Boolean)
                              .join(' ')}
                            type="button"
                            aria-pressed={isActive}
                            tabIndex={productsOpen ? 0 : -1}
                            onClick={() =>
                              setSelectedCategoryId(category.id)
                            }
                            onMouseEnter={() =>
                              setSelectedCategoryId(category.id)
                            }
                          >
                            <span className="header__mega-category-icon">
                              <Icon size={19} strokeWidth={1.8} />
                            </span>

                            <span className="header__mega-category-label">
                              {category.label}
                            </span>

                            <ArrowUpRight
                              className="header__mega-category-arrow"
                              size={15}
                              aria-hidden="true"
                            />
                          </button>
                        )
                      })}
                    </div>
                  </aside>

                  {/* Columna derecha: soluciones de la categoría */}
                  <section
                    className="header__mega-content"
                    aria-live="polite"
                  >
                    {activeCategory && (
                      <>
                        <div className="header__mega-heading">
                          <span className="header__mega-eyebrow">
                            HUSTLE / SOLUCIONES
                          </span>

                          <h2>{activeCategory.label}</h2>

                          <p>{activeCategory.description}</p>
                        </div>

                        <div className="header__mega-items">
                          {activeCategory.items.map((item) => {
                            const Icon = item.icon

                            return (
                              <a
                                key={item.title}
                                className="header__mega-card"
                                href={item.href}
                                tabIndex={productsOpen ? 0 : -1}
                                onClick={closeMenu}
                              >
                                <span className="header__mega-card-icon">
                                  <Icon
                                    size={21}
                                    strokeWidth={1.8}
                                    aria-hidden="true"
                                  />
                                </span>

                                <span className="header__mega-card-copy">
                                  <span className="header__mega-card-type">
                                    {item.type}
                                  </span>

                                  <strong>{item.title}</strong>

                                  <span className="header__mega-card-description">
                                    {item.description}
                                  </span>
                                </span>

                                <ArrowUpRight
                                  className="header__mega-card-arrow"
                                  size={18}
                                  aria-hidden="true"
                                />
                              </a>
                            )
                          })}
                        </div>

                        <div className="header__mega-footer">
                          <span>
                            ¿Tenés una necesidad específica?
                            Diseñemos una solución.
                          </span>

                          <a
                            href="#contacto"
                            onClick={closeMenu}
                            tabIndex={productsOpen ? 0 : -1}
                          >
                            Hablemos
                            <ArrowUpRight size={15} />
                          </a>
                        </div>
                      </>
                    )}
                  </section>
                </div>
              </div>
            </div>

            {navigation.slice(1).map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className="header__cta"
            href="#contacto"
            onClick={closeMenu}
          >
            Hablemos
            <span aria-hidden="true">↗</span>
          </a>

          {/* Botón hamburguesa */}
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
              setActiveMobileCategoryId(null)
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

      {/* Menú móvil */}
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

          {/* Categorías de productos en móvil */}
          <div
            ref={mobileProductsRef}
            className="mobile-menu__products"
          >
            <span className="mobile-menu__section-label">
              Productos
            </span>

            <div className="mobile-menu__categories">
              {productMenuCategories.map((category) => {
                const Icon = category.icon

                const isActive =
                  activeMobileCategoryId === category.id

                return (
                  <div
                    key={category.id}
                    className={[
                      'mobile-menu__category',
                      isActive
                        ? 'mobile-menu__category--open'
                        : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    <button
                      className="mobile-menu__category-toggle"
                      type="button"
                      aria-expanded={isActive}
                      aria-controls={`mobile-products-${category.id}`}
                      tabIndex={menuOpen ? 0 : -1}
                      onClick={() =>
                        toggleMobileCategory(category.id)
                      }
                    >
                      <Icon size={21} strokeWidth={1.8} />

                      <span>{category.label}</span>

                      <ChevronDown
                        className="products-chevron"
                        size={19}
                        aria-hidden="true"
                      />
                    </button>

                    <div
                      id={`mobile-products-${category.id}`}
                      className="mobile-menu__category-panel"
                      aria-hidden={!isActive}
                    >
                      <p>{category.description}</p>

                      {category.items.map((item) => {
                        const ItemIcon = item.icon

                        return (
                          <a
                            key={item.title}
                            className="mobile-menu__product-link"
                            href={item.href}
                            tabIndex={
                              menuOpen && isActive ? 0 : -1
                            }
                            onClick={closeMenu}
                          >
                            <ItemIcon
                              size={18}
                              strokeWidth={1.8}
                            />

                            <span>
                              <strong>{item.title}</strong>
                              <small>{item.type}</small>
                            </span>

                            <ArrowUpRight
                              size={16}
                              aria-hidden="true"
                            />
                          </a>
                        )
                      })}
                    </div>
                  </div>
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
