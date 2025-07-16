// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBarEventos from './components/Navbar'
import Home from './pages/Home'
import Seccion1 from './pages/Seccion1'
import Seccion2 from './pages/Seccion2'
import Seccion3 from './pages/Seccion3'
import Seccion4 from './pages/Seccion4'
import Seccion5 from './pages/Seccion5'
import Seccion6 from './pages/Seccion6'
import Seccion7 from './pages/Seccion7'
import Seccion8 from './pages/Seccion8'
import Seccion9 from './pages/Seccion9'
import Contacto from './pages/Contacto'
import ScrollToTop from './components/ScrollToTop'
import { FaWhatsapp } from 'react-icons/fa';

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
          <Route path="/seccion5" element={<Seccion5 />} />
          <Route path="/seccion6" element={<Seccion6 />} />
          <Route path="/seccion7" element={<Seccion7 />} />
          <Route path="/seccion8" element={<Seccion8 />} />
          <Route path="/seccion9" element={<Seccion9 />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      </main>
      {/* Botón flotante de WhatsApp global */}
      <a
        href="https://wa.me/5493764578395"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-all duration-300 animate-fadeInUp"
        style={{ boxShadow: '0 4px 24px 0 rgba(34,197,94,0.25)' }}
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </div>
  )
}

export default App
