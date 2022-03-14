import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import NavBarMain from './components/nav/NavBarMain'
import Portfolio from './components/portfolio/Portfolio'
const App = () => {
  return (
    <>
    <Header />
    <NavBarMain />
    <About />
    <Experience />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  )
}

export default App