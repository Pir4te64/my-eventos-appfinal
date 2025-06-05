// src/pages/Seccion3.jsx
import React, { useState } from 'react'
import { FaPlane, FaHotel, FaUtensils, FaCalendarAlt, FaUsers, FaChartLine, FaBuilding, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa'

export default function Seccion3() {
  const [activeTab, setActiveTab] = useState('mice')

  const stats = [
    { icon: <FaHotel className="text-4xl" />, value: '50+', label: 'Hoteles' },
    { icon: <FaUtensils className="text-4xl" />, value: '200+', label: 'Restaurantes' },
    { icon: <FaBuilding className="text-4xl" />, value: '20+', label: 'Salones de Eventos' },
    { icon: <FaUsers className="text-4xl" />, value: '100+', label: 'Eventos Anuales' }
  ]

  const eventTypes = [
    {
      category: 'Académicos',
      percentage: 30,
      color: 'bg-blue-500',
      examples: ['Congresos', 'Seminarios', 'Jornadas']
    },
    {
      category: 'Corporativos',
      percentage: 25,
      color: 'bg-green-500',
      examples: ['Conferencias', 'Convenciones', 'Lanzamientos']
    },
    {
      category: 'Deportivos',
      percentage: 20,
      color: 'bg-red-500',
      examples: ['Torneos', 'Competencias', 'Maratones']
    },
    {
      category: 'Culturales',
      percentage: 15,
      color: 'bg-purple-500',
      examples: ['Festivales', 'Exposiciones', 'Conciertos']
    },
    {
      category: 'Otros',
      percentage: 10,
      color: 'bg-yellow-500',
      examples: ['Ferias', 'Networking', 'Eventos Sociales']
    }
  ]

  const features = [
    {
      title: 'Conectividad',
      description: 'Aérea y Terrestre',
      icon: <FaPlane className="text-3xl" />
    },
    {
      title: 'Infraestructura',
      description: 'Salones, auditorios y museos',
      icon: <FaBuilding className="text-3xl" />
    },
    {
      title: 'Servicios',
      description: 'Profesionales especializados',
      icon: <FaUsers className="text-3xl" />
    },
    {
      title: 'Agenda',
      description: 'Eventos 2025',
      icon: <FaCalendarAlt className="text-3xl" />
    }
  ]

  return (
    <div className="font-source">
      {/* Hero banner */}
      <section className="relative rounded-3xl max-w-7xl mx-auto mt-8 h-[400px] overflow-hidden">
        <img src="/fondo3.png" alt="Banner" className="absolute inset-0 w-full h-full object-cover opacity-90" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center text-white">
          <span className="text-xs uppercase tracking-widest">Eventos</span>
          <h1 className="mt-4 text-5xl font-bevietnam">Agenda MICE y Eventos Deportivos</h1>
        </div>
      </section>

      {/* Descripción general */}
      <section className="max-w-4xl mx-auto mt-16 px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Posadas es el centro administrativo, comercial y cultural de la provincia de Misiones. Cuenta con comunicación aérea y terrestre, con infraestructura para eventos en salones, auditorios, salas en museos y el centro de convenciones.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            La ciudad contiene variada oferta hotelera y gastronómica con servicios de calidad que hacen a Posadas el enclave ideal para la realización de eventos y brinda la posibilidad de sentirse parte de ella. Sede de eventos académicos, corporativos, asociativos, gubernamentales, deportivos y culturales.
          </p>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="max-w-7xl mx-auto mt-16 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-green-800 mb-4 flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Gráfico de distribución de eventos */}
      <section className="max-w-4xl mx-auto mt-16 px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Distribución de Eventos</h2>
          <div className="space-y-4">
            {eventTypes.map((type, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">{type.category}</span>
                  <span className="text-gray-600">{type.percentage}%</span>
                </div>
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${type.color} transition-all duration-500`}
                    style={{ width: `${type.percentage}%` }}
                  />
                </div>
                <div className="flex flex-wrap gap-2 mt-1">
                  {type.examples.map((example, i) => (
                    <span key={i} className="text-sm text-gray-500">• {example}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="max-w-7xl mx-auto mt-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-green-800 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enlace a la agenda */}
      <section className="max-w-4xl mx-auto mt-16 px-6 mb-16">
        <div className="bg-green-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Agenda de Eventos 2025</h2>
          <p className="text-gray-700 mb-6">
            Accedé a la Agenda de Eventos MICE y Deportivos de la ciudad de Posadas
          </p>
          <a
            href="https://agenda.turismoposadas.tur.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
          >
            <span>Ver Agenda Completa</span>
            <FaExternalLinkAlt className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  )
} 