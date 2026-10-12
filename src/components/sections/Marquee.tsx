import './Marquee.css'

const items = [
  'Desarrollo web',
  'Automatización',
  'Análisis de datos',
  'Sistemas de gestión',
  'Inteligencia artificial',
]

function Marquee() {
  const repeatedItems = [...items, ...items]

  return (
    <section
      className="marquee"
      aria-label="Servicios de Hustle"
    >
      <div className="marquee__track">
        {repeatedItems.map((item, index) => (
          <div
            className="marquee__item"
            key={`${item}-${index}`}
          >
            <span>{item}</span>
            <span
              className="marquee__symbol"
              aria-hidden="true"
            >
              ✦
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Marquee