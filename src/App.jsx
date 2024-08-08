import { useState } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import FooterSection from './components/FooterSection'


function App() {

  return (
    <>
      <Navbar />
      <Home />
      <FooterSection />
    </>
  )
}

export default App
