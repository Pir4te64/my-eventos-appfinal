import React, { useState } from 'react';
import bureau from '../data/bureau';

export default function Seccion8() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div style={{ backgroundColor: '#00723e' }} className="relative h-96 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Posadas Congresos y Convenciones Bureau</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">Impulsando el turismo de reuniones y eventos de alto nivel en la ciudad.</p>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introducción */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🏢</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Posadas Congresos y Convenciones Bureau
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Con la mirada puesta en la capital provincial como destino de turismo de eventos 
              turísticos de alto perfil nacional e internacional, Posadas Congresos y Convenciones Bureau, 
              trabaja de manera articulada con los actores claves involucrados en el Turismo de Reuniones, 
              logrando una importante sinergia entre el sector público y privado.
            </p>
          </div>

          {/* Misión y Visión */}
          <div className="bg-purple-50 rounded-xl p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Misión</h3>
                <p className="text-gray-600">
                  Posicionar a Posadas como un destino de excelencia para eventos corporativos, 
                  congresos y convenciones de alto nivel nacional e internacional.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">🌟</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Visión</h3>
                <p className="text-gray-600">
                  Ser reconocidos como el bureau líder en la región, facilitando la organización 
                  de eventos que impulsen el desarrollo económico y turístico de la ciudad.
                </p>
              </div>
            </div>
          </div>

          {/* Servicios Principales */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Nuestros Servicios
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🤝</span>
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">Asesoramiento Integral</h4>
                <p className="text-gray-600 text-sm">
                  Planificación y organización completa de eventos corporativos y profesionales
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🚗</span>
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">Logística y Transporte</h4>
                <p className="text-gray-600 text-sm">
                  Coordinación de traslados y servicios de movilidad para participantes
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📢</span>
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">Marketing y Promoción</h4>
                <p className="text-gray-600 text-sm">
                  Difusión y captación de participantes para maximizar el alcance del evento
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Listado de Socios Activos */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            SOCIOS ACTIVOS, ACTUALIZADO ABRIL 2025
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {bureau.map((socio, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg border border-purple-200 overflow-hidden"
              >
                <button
                  className={`w-full flex justify-between items-center px-6 py-4 text-lg font-semibold text-green-800 focus:outline-none transition-colors ${openIndex === i ? 'bg-purple-50' : 'bg-white'}`}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <div>
                    <span className="block text-xl font-bold text-green-800">{socio.nombre}</span>
                    <span className="block text-sm text-gray-600">{socio.rubro}</span>
                  </div>
                  <span className={`ml-2 text-2xl transition-transform ${openIndex === i ? 'rotate-90' : ''}`}>▶</span>
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 bg-purple-50 animate-fadeIn">
                    <div className="mb-1"><b>Persona de Contacto:</b> {socio.contacto}</div>
                    <div className="mb-1"><b>Mail de Contacto:</b> <a href={`mailto:${socio.email}`} className="text-green-700 underline">{socio.email}</a></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Posadas Congresos y Convenciones Bureau */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Posadas Congresos y Convenciones Bureau
          </h2>
          <p className="text-xl mb-8">
            Conectamos el mundo empresarial con las mejores oportunidades de eventos en Posadas
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Instagram</h3>
              <a 
                href="https://www.instagram.com/posadasbureau/?hl=es" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-purple-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Seguir en Instagram
              </a>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Facebook</h3>
              <a 
                href="https://www.facebook.com/posadascongresosyconvencionesbureau/?locale=es_LA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-purple-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Seguir en Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 