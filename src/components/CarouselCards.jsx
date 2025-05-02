// src/components/CarouselCards.jsx
import { useState } from 'react'

export default function CarouselCards() {
  // Eventos con nueva dinámica y nombres en español
  const items = [
    {
      image: '/fondo1.png',
      category: 'Paseos',
      date: 'Junio 2025',
      title: 'Paseos por la Costanera',
      description: 'Disfrutá de un recorrido guiado al atardecer sobre el río Paraná.',
    },
    {
      image: '/fondo2.png',
      category: 'Cultura',
      date: 'Mayo 2025',
      title: 'Encuentro de Danza Tradicional',
      description: 'Vení a vivir la energía de las danzas misioneras en vivo.',
    },
    {
      image: '/fondo3.png',
      category: 'Artesanía',
      date: 'Julio 2025',
      title: 'Feria de Artesanos Locales',
      description: 'Conocé y adquirí piezas únicas de artesanía regional.',
    },
    {
      image: '/fondo4.png',
      category: 'Música',
      date: 'Abril 2025',
      title: 'Concierto Nocturno en la Costanera',
      description: 'Una experiencia musical bajo las estrellas y junto al río.',
    },
    {
      image: '/fondo1.png',
      category: 'Gastronomía',
      date: 'Junio 2025',
      title: 'Degustación de Sabores Misioneros',
      description: 'Probá lo mejor de la cocina local con productos regionales.',
    }
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
              <span className="text-xs font-bevietnam text-green-700 uppercase">{item.category}</span>
              <span className="text-xs text-gray-400 ml-2">{item.date}</span>
              <h3 className="mt-2 font-bevietnam text-lg">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{item.description}</p>
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
