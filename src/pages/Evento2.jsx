import React from 'react'

export default function Evento2() {
  return (
    <div className="font-source">
      {/* Hero banner al estilo "Articles & News" */}
      <section className="bg-[#0b3d2c] rounded-3xl max-w-7xl mx-auto mt-8 h-[400px] flex flex-col justify-center px-6 md:px-12 lg:px-24 text-center text-white">
        <span className="text-xs uppercase tracking-widest">Blog</span>
        <h1 className="mt-4 text-5xl md:text-6xl font-bevietnam">Artículos & Noticias</h1>
      </section>

      {/* Contenido específico de Evento 1 debajo del banner */}
      <section id="contacto" className="max-w-3xl mx-auto mt-12 px-6 py-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bevietnam mb-6">Paseos por la Costanera</h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Disfrutá de un recorrido guiado al atardecer recorriendo la costanera de Posadas con vistas privilegiadas del río Paraná.
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
          <li>Duración: 2 horas</li>
          <li>Precio: $500 por persona</li>
          <li>Incluye guía y refrigerio</li>
        </ul>
        <button
          onClick={() => {
            const el = document.getElementById('contacto')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }}
          className="inline-block px-8 py-3 bg-[#0b3d2c] text-white rounded-lg hover:bg-green-800 transition-colors"
        >
          Consultar Disponibilidad
        </button>
      </section>
    </div>
  )
}
