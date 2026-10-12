import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Marquee from './components/sections/Marquee'
import Projects from './components/sections/Projects'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Marquee />
        <Projects />
      </main>
    </>
  )
}

export default App