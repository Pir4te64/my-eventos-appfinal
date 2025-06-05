// src/pages/Seccion3.jsx
import React, { useState } from 'react'

export default function Seccion3() {
  const related = [
    { id: 1, title: 'Congreso MICE 2024', img: '/fondo3.png', description: 'Encuentro internacional de profesionales del turismo de reuniones.', duration: '3 días', price: '$1500', includes: 'Acceso a todas las conferencias y networking' },
    { id: 2, title: 'Torneo de Vóley', img: '/fondo1.png', description: 'Competencia nacional de vóley playa en la costanera.', duration: '2 días', price: '$300 por equipo', includes: 'Inscripción y premios' },
    { id: 3, title: 'Feria de Negocios', img: '/fondo2.png', description: 'Evento B2B para empresas de la región.', duration: '1 día', price: '$800 por stand', includes: 'Stand y catering' },
    { id: 4, title: 'Maratón Ciudad', img: '/fondo4.png', description: 'Carrera urbana por los principales puntos de Posadas.', duration: '1 día', price: '$500', includes: 'Kit de carrera y medalla' },
    { id: 5, title: 'Conferencia Tech', img: '/fondo1.png', description: 'Evento tecnológico con speakers internacionales.', duration: '2 días', price: '$1200', includes: 'Acceso VIP y workshops' }
  ]

  const [selected, setSelected] = useState(null)

  return (
    <div className="font-source">
      {/* Hero banner */}
      <section className="relative rounded-3xl max-w-7xl mx-auto mt-8 h-[400px] overflow-hidden">
        <img src="/fondo3.png" alt="Banner" className="absolute inset-0 w-full h-full object-cover opacity-90" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center text-white">
          <span className="text-xs uppercase tracking-widest">Agenda MICE y Eventos Deportivos</span>
          <h1 className="mt-4 text-5xl font-bevietnam">Agenda MICE y Eventos Deportivos</h1>
        </div>
      </section>

      {/* Contenido específico */}
      <section className="max-w-4xl mx-auto mt-12 px-6 text-center">
        <p className="text-gray-700 leading-relaxed mb-4">
          Posadas se destaca como sede de importantes eventos MICE (Meetings, Incentives, Conferences and Exhibitions) 
          y competencias deportivas de nivel nacional e internacional.
        </p>
      </section>

      {/* Grid de tarjetas */}
      <section className="max-w-6xl mx-auto mt-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {related.map(evt => (
          <div key={evt.id} onClick={() => setSelected(evt)} className="relative group rounded-lg overflow-hidden shadow-xl h-64 cursor-pointer">
            <img src={evt.img} alt={evt.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#033d2c] opacity-0 group-hover:opacity-70 transition-opacity rounded-lg" />
            <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-t-lg">
              <h3 className="font-bevietnam text-lg text-[#033d2c] mb-2">{evt.title}</h3>
              <p className="text-sm text-gray-700">{evt.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Detalle expandido de la tarjeta seleccionada */}
      {selected && (
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-500">
            <img src={selected.img} alt={selected.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bevietnam mb-4">{selected.title}</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">{selected.description}</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li><span className="font-semibold">Duración:</span> {selected.duration}</li>
                <li><span className="font-semibold">Precio:</span> {selected.price}</li>
                <li><span className="font-semibold">Incluye:</span> {selected.includes}</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 