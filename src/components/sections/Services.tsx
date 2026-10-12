import { useCallback, useState } from 'react'
import { services } from '../../data/services'
import type { Service } from '../../data/services'
import ServiceDrawer from '../ui/ServiceDrawer'
import ServiceRow from '../ui/ServiceRow'
import './Services.css'

function Services() {
  const [selectedService, setSelectedService] =
    useState<Service | null>(null)

  const closeDrawer = useCallback(() => {
    setSelectedService(null)
  }, [])

  return (
    <>
      <section
        className="services section"
        id="servicios"
      >
        <div className="container">
          <div className="services__header">
            <div>
              <span className="mono services__eyebrow">
                Lo que hacemos
              </span>

              <h2 className="section-title">
                Sistemas pensados
                <br />
                para trabajar.
              </h2>
            </div>

            <p>
              Diseñamos soluciones digitales alrededor de
              problemas reales, combinando desarrollo,
              automatización, datos e inteligencia artificial.
            </p>
          </div>

          <div className="services__list">
            {services.map((service) => (
              <ServiceRow
                key={service.id}
                service={service}
                onSelect={setSelectedService}
              />
            ))}
          </div>
        </div>
      </section>

      <ServiceDrawer
        service={selectedService}
        onClose={closeDrawer}
      />
    </>
  )
}

export default Services