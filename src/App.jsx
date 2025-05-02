// src/App.jsx
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import NavBarEventos from './components/Navbar'
import Home from './pages/Home'
import Eventos from './pages/Eventos'
import EventoDetalle from './pages/EventoDetalle'
import Contacto from './pages/Contacto'
import Evento1 from './pages/Evento1'
import Evento2 from './pages/Evento2'
import Evento3 from './pages/Evento3'
import Evento4 from './pages/Evento4'

export default function App() {
  return (
    <>
      <NavBarEventos />
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<Home />} />

        {/* Listado de eventos */}
        <Route path="/eventos" element={<Eventos />} />

        {/* Rutas específicas para cada evento */}
        <Route path="/eventos/1" element={<Evento1 />} />
        <Route path="/eventos/2" element={<Evento2 />} />
        <Route path="/eventos/3" element={<Evento3 />} />
        <Route path="/eventos/4" element={<Evento4 />} />

        {/* Ruta genérica por si quieres manejar otros IDs */}
        <Route path="/eventos/:id" element={<EventoDetalle />} />

        {/* Contacto */}
        <Route path="/contacto" element={<Contacto />} />

        {/* Cualquier otra → redirige a Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
