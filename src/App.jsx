import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Header from './components/Header'
import Hero from './components/Hero'
import Calculator from './components/Calculator'
import Products from './components/Products'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  const appRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('header', {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      })

      gsap.from('.hero-content', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out'
      })

      gsap.from('.hero-buttons button', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.5,
        stagger: 0.15,
        ease: 'power3.out'
      })
    }, appRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={appRef} className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Calculator />
      <Products />
      <Features />
      <Footer />
    </div>
  )
}

export default App
