// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBarEventos from './components/Navbar'
import Home from './pages/Home'
import Seccion1 from './pages/Seccion1'
import Seccion2 from './pages/Seccion2'
import Seccion3 from './pages/Seccion3'
import Seccion4 from './pages/Seccion4'
import Contacto from './pages/Contacto'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <NavBarEventos />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seccion1" element={<Seccion1 />} />
          <Route path="/seccion2" element={<Seccion2 />} />
          <Route path="/seccion3" element={<Seccion3 />} />
          <Route path="/seccion4" element={<Seccion4 />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
