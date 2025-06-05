// src/pages/Seccion1.jsx
import React, { useState } from 'react'

export default function Seccion1() {
  const related = [
    { id: 1, title: 'Paseos por la Costanera', img: '/fondo1.png', description: 'Disfrutá de un recorrido guiado al atardecer recorriendo la costanera de Posadas con vistas privilegiadas del río Paraná.', duration: '2 horas', price: '$500 por persona', includes: 'Guía y refrigerio' },
    { id: 2, title: 'Encuentro de Danza', img: '/fondo2.png', description: 'Viví la pasión de la danza tradicional misionera con grupos locales en la plaza principal.', duration: '3 horas', price: 'Entrada libre', includes: 'Show de apertura y cierre' },
    { id: 3, title: 'Feria Artesanal', img: '/fondo3.png', description: 'Explorá los puestos de artesanos y degustá productos regionales en un ambiente familiar.', duration: 'Todo el día', price: 'Gratuito', includes: 'Acceso a todas las carpas' },
    { id: 4, title: 'Concierto Nocturno', img: '/fondo4.png', description: 'Disfrutá de bandas locales e invitados especiales bajo las estrellas en la costanera.', duration: '4 horas', price: '$800', includes: 'Zona VIP y barra libre' },
    { id: 5, title: 'Degustación Gourmet', img: '/fondo1.png', description: 'Probá lo mejor de la cocina regional con chefs locales en un ambiente exclusivo.', duration: '2.5 horas', price: '$1200 por persona', includes: 'Maridaje de vinos' }
  ]

  const [selected, setSelected] = useState(null)

  return (
    <div className="font-source">
      {/* Hero banner */}
      <section className="relative rounded-3xl max-w-7xl mx-auto mt-8 h-[400px] overflow-hidden">
        <img src="/fondo1.png" alt="Banner" className="absolute inset-0 w-full h-full object-cover opacity-90" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center text-white">
          <span className="text-xs uppercase tracking-widest">Blog</span>
          <h1 className="mt-4 text-5xl font-bevietnam">¿Nos Reunimos en Posadas?</h1>
        </div>
      </section>

      {/* Texto descriptivo */}
      <section className="max-w-4xl mx-auto mt-12 px-6 text-center">
        <p className="text-gray-700 leading-relaxed mb-4">
          Posadas, corazón del Mercosur, se extiende a orillas del río Paraná, cuya costanera conecta simbólicamente con la ciudad vecina de Encarnación, Paraguay.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Centro estratégico para acceder a los principales atractivos turísticos de la provincia y la región, Posadas combina encanto urbano y natural, una vibrante vida nocturna y la calidez inconfundible de su gente.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Con una variada oferta de actividades, infraestructura y servicios, ésta ciudad mágica te invita a elegirla como el escenario ideal para tu próximo evento.
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
