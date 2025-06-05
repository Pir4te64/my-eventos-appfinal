// src/pages/Seccion2.jsx
import React, { useState } from 'react'

export default function Seccion2() {
  const related = [
    { id: 1, title: 'Centro de Convenciones', img: '/fondo2.png', description: 'Espacio moderno y versátil para congresos y eventos corporativos.', duration: 'Todo el día', price: 'Consultar', includes: 'Equipamiento audiovisual y catering' },
    { id: 2, title: 'Teatro Lírico', img: '/fondo1.png', description: 'Sala de espectáculos con acústica perfecta para presentaciones artísticas.', duration: '4 horas', price: 'Consultar', includes: 'Técnico de sonido y luces' },
    { id: 3, title: 'Biblioteca Pública', img: '/fondo3.png', description: 'Ambiente ideal para conferencias y presentaciones literarias.', duration: '3 horas', price: 'Gratuito', includes: 'Proyector y sistema de audio' },
    { id: 4, title: 'Observatorio Astronómico', img: '/fondo4.png', description: 'Eventos especiales bajo las estrellas con telescopios profesionales.', duration: '2 horas', price: '$800', includes: 'Guía astronómico' },
    { id: 5, title: 'Laboratorio de Innovación', img: '/fondo1.png', description: 'Espacio para talleres tecnológicos y eventos de innovación.', duration: 'Todo el día', price: 'Consultar', includes: 'Equipamiento tecnológico' }
  ]

  const [selected, setSelected] = useState(null)

  return (
    <div className="font-source">
      {/* Hero banner */}
      <section className="relative rounded-3xl max-w-7xl mx-auto mt-8 h-[400px] overflow-hidden">
        <img src="/fondo2.png" alt="Banner" className="absolute inset-0 w-full h-full object-cover opacity-90" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center text-white">
          <span className="text-xs uppercase tracking-widest">Parque del Conocimiento</span>
          <h1 className="mt-4 text-5xl font-bevietnam">Parque del Conocimiento</h1>
        </div>
      </section>

      {/* Contenido específico */}
      <section className="max-w-4xl mx-auto mt-12 px-6 text-center">
        <p className="text-gray-700 leading-relaxed mb-4">
          El Parque del Conocimiento es un complejo cultural y científico único en la región, 
          que ofrece espacios modernos y versátiles para todo tipo de eventos.
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