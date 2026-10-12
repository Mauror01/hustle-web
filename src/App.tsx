import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Marquee from './components/sections/Marquee'
import Projects from './components/sections/Projects'
import Services from './components/sections/Services'
import Process from './components/sections/Process'
import About from './components/sections/About'

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
      </main>
    </>
  )
}

export default App