// src/components/FeaturesSection.jsx
import { Link } from 'react-router-dom'

export default function FeaturesSection() {
    const features = [
      {
        icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828925.png',
        title: 'Agenda MICE y Eventos Deportivos',
        path: '/seccion3',
      },
      {
        icon: 'https://cdn-icons-png.flaticon.com/512/484/484167.png',
        title: 'Conectividad',
        path: '/seccion9',
      },
      {
        // Edificio institucional monocromático, diferente
        icon: 'https://cdn-icons-png.flaticon.com/512/747/747376.png',
        title: 'Parque del Conocimiento y Centro de Convenciones',
        path: '/seccion2',
      },
      {
        icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828961.png',
        title: 'Catálogo de Locaciones para eventos',
        path: '/seccion4',
      },
    ]

    // Filtros CSS para verde y blanco
    const greenFilter = 'invert(41%) sepia(97%) saturate(749%) hue-rotate(97deg) brightness(90%) contrast(92%)';
    const whiteFilter = 'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(110%)';

    return (
      <section className="py-12 bg-gray-50">
        <h2 className="text-center font-bevietnam text-2xl mb-8">¿Qué te gustaría conocer?</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          {features.map((f, i) => (
            <Link
              to={f.path}
              key={i}
              className="bg-white rounded-lg shadow p-4 text-center font-source transition-colors block border border-gray-100 hover:shadow-lg group flex flex-col items-center justify-center min-h-[170px]"
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <div className="flex flex-col items-center justify-center flex-1">
                <img
                  src={f.icon}
                  alt={f.title}
                  className="mx-auto transition-all duration-200 group-hover:filter-white"
                  style={{ height: '38px', width: '38px', marginBottom: '0.7rem', filter: greenFilter, transition: 'filter 0.2s' }}
                  onMouseOver={e => e.currentTarget.style.filter = whiteFilter}
                  onMouseOut={e => e.currentTarget.style.filter = greenFilter}
                />
                <h3
                  className="font-bevietnam text-base text-green-800 font-semibold group-hover:text-white transition-colors mt-1"
                  style={{ lineHeight: '1.2' }}
                >
                  {f.title}
                </h3>
              </div>
              <style>{`
                .group:hover {
                  background-color: #166534 !important;
                }
              `}</style>
            </Link>
          ))}
        </div>
      </section>
    )
}
  