// src/components/FeaturesSection.jsx
import { Link } from 'react-router-dom'
import IconSVG from './IconSVG'

export default function FeaturesSection() {
    const features = [
      {
        icon: 'eventos',
        title: 'Agenda MICE y Eventos Deportivos',
        description: 'Eventos profesionales y deportivos de primer nivel',
        path: '/mice/agenda-mice-deportivos',
      },
      {
        icon: 'moverte-ciudad',
        title: 'Conectividad',
        description: 'Aérea y terrestre para llegar a Posadas',
        path: '/mice/posadas-conectividad',
      },
      {
        icon: 'smart-city',
        title: 'Parque del Conocimiento',
        description: 'Centro de Convenciones y eventos culturales',
        path: '/mice/parque-conocimiento',
      },
      {
        icon: 'centros-informacion',
        title: 'Catálogo de Locaciones',
        description: 'Espacios únicos para tus eventos',
        path: '/mice/catalogo-locaciones',
      },
    ]

    return (
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bevietnam font-black text-gray-900 mb-6">
              ¿Qué te gustaría conocer?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-source">
              Explora las diferentes facetas que hacen de Posadas el destino ideal para tus eventos
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              return (
                <Link
                  to={feature.path}
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden hover:border-green-200"
                >
                  {/* Card Content */}
                  <div className="p-8 text-center">
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 mx-auto bg-green-50 rounded-2xl flex items-center justify-center group-hover:bg-green-100 group-hover:scale-110 transition-all duration-300">
                        <IconSVG 
                          name={feature.icon} 
                          size="w-8 h-8" 
                          color="text-green-600 group-hover:text-green-700 transition-colors" 
                        />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-3">
                      <h3 className="font-bevietnam text-xl font-bold text-gray-900 group-hover:text-green-800 transition-colors leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors font-source leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                      <div className="w-8 h-8 mx-auto bg-green-600 rounded-full flex items-center justify-center group-hover:bg-green-700 transition-colors">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Subtle border animation */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-300 transition-all duration-300"></div>
                </Link>
              )
            })}
          </div>

          {/* Bottom decoration */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 text-sm text-gray-500 font-source">
              <span>Descubre más sobre Posadas</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Custom CSS for grid pattern */}
        <style jsx>{`
          .bg-grid-pattern {
            background-image: 
              linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px);
            background-size: 24px 24px;
          }
        `}</style>
      </section>
    )
}
  