import Hero from './components/Hero'
import Nav from './components/Nav'
import About from './components/About'
import Work from './components/Work'
import Certs from './components/Certs'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Work />
      <Certs />
      <div style={{ height: '10vh' }} />
      <Footer />
    </div>
  )
}

export default App