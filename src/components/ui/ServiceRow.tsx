import { ArrowUpRight } from 'lucide-react'
import type { Service } from '../../data/services'
import './ServiceRow.css'

type ServiceRowProps = {
  service: Service
  onSelect: (service: Service) => void
}

function ServiceRow({
  service,
  onSelect,
}: ServiceRowProps) {
  return (
    <button
      className="service-row"
      type="button"
      onClick={() => onSelect(service)}
    >
      <span className="service-row__number mono">
        
      </span>

      <div className="service-row__content">
        <h3>{service.title}</h3>

        <p>{service.shortDescription}</p>
      </div>

      <ArrowUpRight
        className="service-row__icon"
        size={30}
        strokeWidth={1.4}
        aria-hidden="true"
      />
    </button>
  )
}

export default ServiceRow