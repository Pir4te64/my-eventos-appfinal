// src/components/CarouselCards.jsx
import { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function CarouselCards() {
  // Eventos con nueva dinámica y nombres en español
  const items = [
    {
      image: '/fondo1.png',
      title: 'Torneo Nacional de Clubes Nivel A y B',
      startDate: '02/07/2025',
      endDate: '05/07/2025',
      place: 'Polideportivo Finito Gehrmann',
      category: 'Deportes',
      featured: true
    },
    {
      image: '/fondo2.png',
      title: 'Comunica y toma acción',
      startDate: '03/07/2025',
      endDate: '04/07/2025',
      place: 'Parque del Conocimiento - Hotel Julio César',
      category: 'Conferencia',
      featured: false
    },
    {
      image: '/fondo3.png',
      title: 'Malbec de Selva',
      startDate: '04/07/2025',
      endDate: '05/07/2025',
      place: 'Estancia La Soñada',
      category: 'Gastronomía',
      featured: true
    },
    {
      image: '/fondo4.png',
      title: 'IX Congreso Nacional de Arqueología Histórica 2025',
      startDate: '10/07/2025',
      endDate: '12/07/2025',
      place: 'Universidad Católica de las Misiones - UCAMI',
      category: 'Académico',
      featured: false
    },
    {
      image: '/fondo1.png',
      title: 'Kiz.Mi.Fest',
      startDate: '11/07/2025',
      endDate: '13/07/2025',
      place: 'Hotel Julio César',
      category: 'Festival',
      featured: true
    },
    {
      image: '/fondo2.png',
      title: 'Misiones Boxea',
      startDate: '12/07/2025',
      endDate: '12/07/2025',
      place: 'Hot Wheels',
      category: 'Deportes',
      featured: false
    },
    {
      image: '/fondo3.png',
      title: 'Samba Magia - 3° Edición',
      startDate: '12/07/2025',
      endDate: '12/07/2025',
      place: 'Salón Ñandutí - Ruta 105 colectora calle 258 Nº2450',
      category: 'Entretenimiento',
      featured: false
    },
    {
      image: '/fondo4.png',
      title: 'Torneo Internacional U14/U16/U18/U20',
      startDate: '18/07/2025',
      endDate: '19/07/2025',
      place: 'Balneario Costa Sur',
      category: 'Deportes',
      featured: true
    },
    {
      image: '/fondo1.png',
      title: '8va edición UNA+ Festival de Cerveza Artesanal',
      startDate: '19/07/2025',
      endDate: '19/07/2025',
      place: 'Parque de la Cascada - Costanera',
      category: 'Festival',
      featured: false
    },
    {
      image: '/fondo2.png',
      title: '4.ª Fecha Campeonato Misionero de Karting',
      startDate: '19/07/2025',
      endDate: '20/07/2025',
      place: 'Autodromo Rosamonte',
      category: 'Deportes',
      featured: false
    },
    {
      image: '/fondo3.png',
      title: 'Ronda de Negocios Internacional',
      startDate: '24/07/2025',
      endDate: '24/07/2025',
      place: 'Parque Industrial y de la Innovación',
      category: 'Negocios',
      featured: true
    },
    {
      image: '/fondo4.png',
      title: 'Black Friday',
      startDate: '31/07/2025',
      endDate: '03/08/2025',
      place: 'Comercios de Posadas',
      category: 'Comercial',
      featured: false
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Auto-rotate cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentIndex((prev) => (prev + 1) % items.length)
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [isTransitioning, items.length])

  const next = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prev) => (prev + 1) % items.length)
      setTimeout(() => setIsTransitioning(false), 300)
    }
  }

  const prev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
      setTimeout(() => setIsTransitioning(false), 300)
    }
  }

  // Mostrar 5 tarjetas centradas en el índice actual
  const getVisibleItems = () => {
    const itemsToShow = 5
    const half = Math.floor(itemsToShow / 2)
    const start = (currentIndex - half + items.length) % items.length
    
    return Array.from({ length: itemsToShow }, (_, i) => 
      items[(start + i) % items.length]
    )
  }

  const formatDate = (dateStr) => {
    const date = new Date(dateStr.split('/').reverse().join('-'))
    return date.toLocaleDateString('es-ES', { 
      day: 'numeric', 
      month: 'short',
      year: 'numeric'
    })
  }

  const getCategoryColor = (category) => {
    const colors = {
      'Deportes': 'bg-green-100 text-green-800',
      'Conferencia': 'bg-green-100 text-green-800',
      'Gastronomía': 'bg-green-100 text-green-800',
      'Académico': 'bg-green-100 text-green-800',
      'Festival': 'bg-green-100 text-green-800',
      'Entretenimiento': 'bg-green-100 text-green-800',
      'Negocios': 'bg-green-100 text-green-800',
      'Comercial': 'bg-green-100 text-green-800'
    }
    return colors[category] || 'bg-green-100 text-green-800'
  }

  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bevietnam font-black text-gray-900 mb-4">
            Eventos Próximos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-source">
            Descubre los eventos más destacados que están por venir en Posadas
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 group"
            aria-label="Anterior"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors" />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 group"
            aria-label="Siguiente"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors" />
          </button>

          {/* Cards Grid */}
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 px-4 md:px-12 overflow-x-auto md:overflow-visible scrollbar-hide">
            {getVisibleItems().map((item, index) => (
                              <div
                  key={`${item.title}-${index}`}
                  className={`group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl hover:bg-green-800 transition-all duration-500 transform hover:-translate-y-2 aspect-square flex-shrink-0 w-80 md:w-auto ${
                    isTransitioning ? 'opacity-75' : 'opacity-100'
                  }`}
                >
                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-amber-400 to-orange-500 text-white">
                      Destacado
                    </span>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                </div>

                {/* Image Container */}
                <div className="relative overflow-hidden rounded-t-2xl h-40">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-5 flex flex-col h-full">
                  {/* Title with better text handling */}
                  <h3 className="font-bevietnam text-sm md:text-base font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-white transition-colors leading-tight">
                    {item.title}
                  </h3>
                  
                  {/* Content area with proper spacing */}
                  <div className="space-y-2 flex-1 min-h-0">
                    {/* Date section */}
                    <div className="flex items-center text-xs text-gray-600 group-hover:text-white transition-colors">
                      <CalendarIcon className="w-3 h-3 mr-2 flex-shrink-0 group-hover:text-white transition-colors" />
                      <div className="min-w-0 flex-1">
                        <span className="font-medium">{formatDate(item.startDate)}</span>
                        {item.startDate !== item.endDate && (
                          <>
                            <span className="mx-1">-</span>
                            <span className="font-medium">{formatDate(item.endDate)}</span>
                          </>
                        )}
                      </div>
                    </div>
                    
                    {/* Location section with better text wrapping */}
                    <div className="flex items-start text-xs text-gray-600 group-hover:text-white transition-colors">
                      <MapPinIcon className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0 group-hover:text-white transition-colors" />
                      <div className="min-w-0 flex-1">
                        <span className="line-clamp-2 leading-relaxed">{item.place}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom text with proper positioning */}
                  <div className="mt-3 text-center pt-2 border-t border-gray-100 group-hover:border-green-700 transition-colors">
                    <p className="text-xs font-medium tracking-wide group-hover:text-white text-gray-900 transition-colors line-clamp-1">
                      {item.category} • {item.place.split(' - ')[0]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
                   index === currentIndex 
                     ? 'bg-green-600 w-8' 
                     : 'bg-gray-300 hover:bg-gray-400'
                 }`}
                aria-label={`Ir al evento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for line-clamp and grid pattern */}
      <style jsx>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
