import { motion } from 'framer-motion'
import Button from '../ui/Button'
//import SectionLabel from '../ui/SectionLabel'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero__container">
        <div className="hero__meta">
          

          <span className="hero__location mono">
            La Rioja — ARG
          </span>
        </div>

        <div className="hero__content">
          <div className="hero__headline">
            <div className="hero__line">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                Creamos soluciones
              </motion.span>
            </div>

            <div className="hero__line">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                inteligentes.
              </motion.span>
            </div>
            

            
          </div>

          <motion.div
            className="hero__support"
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
          >
            <p>
              Diseño, desarrollo y automatización para convertir
              problemas reales en productos digitales.
            </p>

            <div className="hero__actions">
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
          </motion.div>
        </div>

        
        </div>
    </section>
  )
}

export default Hero