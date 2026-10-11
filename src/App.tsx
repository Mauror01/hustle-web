import Button from './components/ui/Button'
import SectionLabel from './components/ui/SectionLabel'

function App() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <SectionLabel index="01">
            Estudio digital
          </SectionLabel>

          <h1
            className="display"
            style={{ marginTop: '2rem' }}
          >
            Creamos sistemas
            <br />
            que hacen avanzar
            <br />
            negocios.
          </h1>

          <p
            className="body-large"
            style={{ marginTop: '2rem' }}
          >
            Diseño, desarrollo y automatización para convertir
            problemas reales en productos digitales.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              marginTop: '2rem',
            }}
          >
            <Button href="#trabajo">
              Ver nuestro trabajo
            </Button>

            <Button
              href="#contacto"
              variant="outline"
            >
              Hablemos
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App