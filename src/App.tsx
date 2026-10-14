import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Marquee from './components/sections/Marquee'
import Projects from './components/sections/Projects'
import Services from './components/sections/Services'
import Process from './components/sections/Process'
import About from './components/sections/About'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Services />
        <Process />
        <About />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App