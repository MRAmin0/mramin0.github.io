import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Portfolio from './sections/Portfolio'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
