import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import type { Service } from '../../data/services'
import './ServiceDrawer.css'

type ServiceDrawerProps = {
  service: Service | null
  onClose: () => void
}

function ServiceDrawer({
  service,
  onClose,
}: ServiceDrawerProps) {
  useEffect(() => {
    if (!service) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [service, onClose])

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          className="service-drawer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            className="service-drawer__backdrop"
            type="button"
            aria-label="Cerrar servicio"
            onClick={onClose}
          />

          <motion.aside
            className="service-drawer__panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-drawer-title"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="service-drawer__top">
              <span className="mono">
                {String(service.id).padStart(2, '0')} / Servicio
              </span>

              <button
                className="service-drawer__close"
                type="button"
                aria-label="Cerrar"
                onClick={onClose}
              >
                <X size={24} />
              </button>
            </div>

            <div className="service-drawer__body">
              <h3 id="service-drawer-title">
                {service.title}
              </h3>

              <p className="service-drawer__description">
                {service.description}
              </p>

              <div className="service-drawer__capabilities">
                <span className="mono">
                  Qué podemos construir
                </span>

                <ul>
                  {service.capabilities.map((capability) => (
                    <li key={capability}>
                      <span>{capability}</span>
                      <span aria-hidden="true">↗</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              className="service-drawer__cta"
              href="#contacto"
              onClick={onClose}
            >
              <span>Hablemos del proyecto</span>
              <span aria-hidden="true">↗</span>
            </a>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ServiceDrawer