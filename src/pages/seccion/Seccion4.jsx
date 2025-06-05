// src/pages/Seccion4.jsx
import React, { useState } from 'react'

export default function Seccion4() {
  const related = [
    { id: 1, title: 'Hotel de la Costa', img: '/fondo4.png', description: 'Hotel 5 estrellas con salones para eventos de hasta 500 personas.', duration: 'Todo el día', price: 'Consultar', includes: 'Catering y equipamiento' },
    { id: 2, title: 'Centro de Convenciones', img: '/fondo1.png', description: 'Espacio moderno para congresos y exposiciones.', duration: 'Todo el día', price: 'Consultar', includes: 'Equipamiento audiovisual' },
    { id: 3, title: 'Quinta San José', img: '/fondo2.png', description: 'Espacio al aire libre para eventos sociales y corporativos.', duration: 'Todo el día', price: 'Consultar', includes: 'Mobiliario y decoración' },
    { id: 4, title: 'Teatro de la Ciudad', img: '/fondo3.png', description: 'Sala histórica para presentaciones y eventos culturales.', duration: '4 horas', price: '$800', includes: 'Técnico de sonido' },
    { id: 5, title: 'Club Social', img: '/fondo1.png', description: 'Espacio versátil para eventos sociales y empresariales.', duration: 'Todo el día', price: 'Consultar', includes: 'Catering y servicio' }
  ]

  const [selected, setSelected] = useState(null)

  return (
    <div className="font-source">
      {/* Hero banner */}
      <section className="relative rounded-3xl max-w-7xl mx-auto mt-8 h-[400px] overflow-hidden">
        <img src="/fondo4.png" alt="Banner" className="absolute inset-0 w-full h-full object-cover opacity-90" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center text-white">
          <span className="text-xs uppercase tracking-widest">Sedes para Eventos</span>
          <h1 className="mt-4 text-5xl font-bevietnam">Sedes para Eventos</h1>
        </div>
      </section>

      {/* Contenido específico */}
      <section className="max-w-4xl mx-auto mt-12 px-6 text-center">
        <p className="text-gray-700 leading-relaxed mb-4">
          Descubrí los espacios más emblemáticos de Posadas para realizar tu evento, 
          desde modernos centros de convenciones hasta lugares históricos con encanto único.
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