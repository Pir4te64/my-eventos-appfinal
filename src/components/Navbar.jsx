// src/components/Navbar.jsx
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NavBarEventos() {
  const [openMenu, setOpenMenu] = useState(false)
  const [openEventos, setOpenEventos] = useState(false)
  const eventosRef = useRef()

  // Cierra el dropdown de Eventos al clicar fuera
  useEffect(() => {
    function onClick(e) {
      if (eventosRef.current && !eventosRef.current.contains(e.target)) {
        setOpenEventos(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const eventos = ['1','2','3','4']

  return (
    <header className="bg-green-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center space-x-6">
        {/* Logo como imagen */}
        <Link to="/">
          <img
            src="/logoposadas.png"
            alt="Logo Posadas"
            className="h-8 w-auto"
          />
        </Link>

        {/* Search */}
        <div className="flex-1 relative max-w-md">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          <input
            type="text"
            placeholder="Buscar eventos"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-300 bg-white"
          />
        </div>

        {/* Nav escritorio */}
        <nav className="hidden md:flex items-center space-x-4 text-green-800">
          <Link to="/" className="hover:underline px-3 py-2 rounded hover:bg-gray-100">
            Inicio
          </Link>

          <div className="relative" ref={eventosRef}>
            <button
              onClick={() => setOpenEventos(prev => !prev)}
              className="flex items-center px-3 py-2 rounded hover:bg-gray-100"
            >
              Eventos <span className="ml-1 text-sm">▾</span>
            </button>
            {openEventos && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-10">
                {eventos.map(id => (
                  <Link
                    key={id}
                    to={`/eventos/${id}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Evento {id}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/contacto" className="hover:underline px-3 py-2 rounded hover:bg-gray-100">
            Contacto
          </Link>
        </nav>

        {/* Toggle móvil */}
        <button
          className="md:hidden ml-2 p-2 bg-green-900 hover:bg-green-100 rounded-lg"
          onClick={() => setOpenMenu(prev => !prev)}
        >
          {openMenu ? '✕' : '☰'}
        </button>
      </div>

      {/* Menú móvil */}
      {openMenu && (
        <div className="md:hidden bg-green-50 px-6 pb-4 space-y-2">
          <Link to="/" className="block py-2 rounded hover:bg-gray-100">Inicio</Link>

          <button
            className="w-full text-left py-2 flex items-center justify-between rounded hover:bg-gray-100"
            onClick={() => setOpenEventos(prev => !prev)}
          >
            Eventos <span>▾</span>
          </button>
          {openEventos && (
            <div className="pl-4 space-y-1">
              {eventos.map(id => (
                <Link
                  key={id}
                  to={`/eventos/${id}`}
                  className="block py-2 rounded hover:bg-gray-100"
                >
                  Evento {id}
                </Link>
              ))}
            </div>
          )}

          <Link to="/contacto" className="block py-2 rounded hover:bg-gray-100">Contacto</Link>
        </div>
      )}
    </header>
  )
}
