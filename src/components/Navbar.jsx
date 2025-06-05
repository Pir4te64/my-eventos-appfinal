// src/components/Navbar.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function NavBarEventos() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const sections = [
    { path: '/seccion1', name: '¿Nos Reunimos en Posadas?' },
    { path: '/seccion2', name: 'Parque del Conocimiento' },
    { path: '/seccion3', name: 'Agenda MICE y Eventos Deportivos' },
    { path: '/seccion4', name: 'Sedes para Eventos' }
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logoposadas.png" alt="Logo Posadas" className="h-8 w-auto" />
          </Link>

          {/* Navegación Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/" className="text-green-800 hover:bg-green-800 hover:text-white px-3 py-1.5 rounded-md transition-colors text-sm font-medium">
              Inicio
            </Link>
            
            <Menu as="div" className="relative">
              <Menu.Button className="text-green-800 hover:bg-green-800 hover:text-white px-3 py-1.5 rounded-md transition-colors text-sm font-medium flex items-center">
                Secciones
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sections.map(section => (
                      <Menu.Item key={section.path}>
                        {({ active }) => (
                          <Link
                            to={section.path}
                            className={`${
                              active ? 'bg-green-800 text-white' : 'text-gray-700'
                            } block px-4 py-2 text-sm`}
                          >
                            {section.name}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <Link to="/contacto" className="text-green-800 hover:bg-green-800 hover:text-white px-3 py-1.5 rounded-md transition-colors text-sm font-medium">
              Contacto
            </Link>
          </div>

          {/* Botón Menú Móvil */}
          <button
            className="md:hidden p-2 rounded-lg text-green-800 hover:bg-green-800 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Menú Móvil */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 space-y-1 bg-white rounded-lg shadow-lg p-2">
            <Link
              to="/"
              className="block text-green-800 hover:bg-green-800 hover:text-white px-3 py-2 rounded-md transition-colors text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            
            {sections.map(section => (
              <Link
                key={section.path}
                to={section.path}
                className="block text-green-800 hover:bg-green-800 hover:text-white px-3 py-2 rounded-md transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {section.name}
              </Link>
            ))}

            <Link
              to="/contacto"
              className="block text-green-800 hover:bg-green-800 hover:text-white px-3 py-2 rounded-md transition-colors text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
