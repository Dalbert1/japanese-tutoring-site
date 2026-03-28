import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Approach from './components/Approach'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text-primary font-sans">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Approach />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <footer className="border-t border-border py-8 text-center text-text-secondary text-xs">
        <p>&copy; {new Date().getFullYear()} Hikaru Language Studio &nbsp;&middot;&nbsp; Carlsbad, California</p>
      </footer>
    </div>
  )
}
