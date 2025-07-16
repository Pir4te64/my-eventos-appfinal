// src/components/CarouselCards.jsx
import { useState } from 'react'

export default function CarouselCards() {
  // Eventos con nueva dinámica y nombres en español
  const items = [
    {
      image: '/fondo1.png',
      title: 'Torneo Nacional de Clubes Nivel A y B',
      startDate: '02/07/2025',
      endDate: '05/07/2025',
      place: 'Polideportivo Finito Gehrmann',
    },
    {
      image: '/fondo2.png',
      title: 'Comunica y toma acción',
      startDate: '03/07/2025',
      endDate: '04/07/2025',
      place: 'Parque del Conocimiento - Hotel Julio César',
    },
    {
      image: '/fondo3.png',
      title: 'Malbec de Selva',
      startDate: '04/07/2025',
      endDate: '05/07/2025',
      place: 'Estancia La Soñada',
    },
    {
      image: '/fondo4.png',
      title: 'IX Congreso Nacional de Arqueología Histórica el 2025',
      startDate: '10/07/2025',
      endDate: '12/07/2025',
      place: 'Universidad Católica de las Misiones - UCAMI',
    },
    {
      image: '/fondo1.png',
      title: 'Kiz.Mi.Fest',
      startDate: '11/07/2025',
      endDate: '13/07/2025',
      place: 'Hotel Julio César',
    },
    {
      image: '/fondo2.png',
      title: 'Misiones Boxea',
      startDate: '12/07/2025',
      endDate: '12/07/2025',
      place: 'Hot Wheels',
    },
    {
      image: '/fondo3.png',
      title: 'Samba Magia - 3° Edición',
      startDate: '12/07/2025',
      endDate: '12/07/2025',
      place: 'Salón Ñandutí - Ruta 105 colectora calle 258 Nº2450',
    },
    {
      image: '/fondo4.png',
      title: 'Torneo Internacional U14/U16/U18/U20',
      startDate: '18/07/2025',
      endDate: '19/07/2025',
      place: 'Balneario Costa Sur',
    },
    {
      image: '/fondo1.png',
      title: '8va edición UNA+ Festival de Cerveza Artesanal, – "Edición Especial Dia del Amigo"',
      startDate: '19/07/2025',
      endDate: '19/07/2024',
      place: 'Parque de la Cascada - Costanera',
    },
    {
      image: '/fondo2.png',
      title: '4.ª Fecha Campeonato Misionero de Karting',
      startDate: '19/07/2025',
      endDate: '20/07/2025',
      place: 'Autodromo Rosamonte',
    },
    {
      image: '/fondo3.png',
      title: 'Ronda de Negocios Internacional',
      startDate: '24/07/2025',
      endDate: '24/07/2025',
      place: 'Parque Industrial y de la Innovación',
    },
    {
      image: '/fondo4.png',
      title: 'Black Friday',
      startDate: '31/07/2025',
      endDate: '03/08/2025',
      place: 'Comercios de Posadas',
    },
  ]

  const [idx, setIdx] = useState(0)
  const prev = () => setIdx(i => (i - 1 + items.length) % items.length)
  const next = () => setIdx(i => (i + 1) % items.length)

  // Mostrar siempre 5 tarjetas rotando
  const displayItems = Array.from({ length: 5 }).map((_, offset) => items[(idx + offset) % items.length])

  return (
    <div className="relative max-w-6xl mx-auto py-8">
      {/* Título de sección */}
      <h2 className="text-3xl font-bevietnam text-center mb-6">Eventos Próximos</h2>

      {/* Grid de 5 tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {displayItems.map((item, i) => (
          <div key={i} className="bg-white rounded-lg shadow-lg p-4 font-source">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-md" />
            <div className="mt-4">
              <h3 className="font-bevietnam text-lg mb-1">{item.title}</h3>
              <p className="text-xs text-gray-500 mb-1"><b>Inicio:</b> {item.startDate}</p>
              <p className="text-xs text-gray-500 mb-1"><b>Finalización:</b> {item.endDate}</p>
              <p className="text-xs text-gray-500"><b>Lugar:</b> {item.place}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controles */}
      <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-gray-200 rounded-full hover:bg-gray-300">
        ‹
      </button>
      <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-gray-200 rounded-full hover:bg-gray-300">
        ›
      </button>
    </div>
  )
}
