// src/pages/Seccion1.jsx
import React from 'react'
import { FaPlane, FaHotel, FaUsers, FaCalendarAlt, FaUniversity, FaBuilding, FaUtensils, FaTheaterMasks, FaEnvelope } from 'react-icons/fa'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

export default function Seccion1() {
  const stats = [
    { icon: <FaHotel className="text-2xl" />, value: 3200, label: 'Plazas Hoteleras', plus: true, decimal: true },
    { icon: <FaUsers className="text-2xl" />, value: 400000, label: 'Turistas Anuales', plus: true, decimal: true },
    { icon: <FaCalendarAlt className="text-2xl" />, value: 200, label: 'Eventos Corporativos', plus: true },
    { icon: <FaUniversity className="text-2xl" />, value: 7, label: 'Universidades', plus: false },
    { icon: <FaBuilding className="text-2xl" />, value: 45, label: 'Sedes Deportivas', plus: true },
    { icon: <FaUtensils className="text-2xl" />, value: 100, label: 'Restaurantes', plus: true },
  ]

  const features = [
    {
      title: 'Conectividad',
      description: 'Aérea y Terrestre',
      icon: <FaPlane className="text-xl" />
    },
    {
      title: 'Parque del Conocimiento',
      description: 'Centro de Convenciones para más de 1000 asistentes',
      icon: <FaBuilding className="text-xl" />
    },
    {
      title: 'Desarrollo',
      description: 'Parque de la Salud y Parque Industrial',
      icon: <FaBuilding className="text-xl" />
    },
    {
      title: 'Educación',
      description: '55 institutos terciarios',
      icon: <FaUniversity className="text-xl" />
    },
    {
      title: 'Cultura',
      description: 'Teatros, museos y patrimonios históricos',
      icon: <FaTheaterMasks className="text-xl" />
    },
    {
      title: 'Contacto',
      description: 'mice@posadas.gov.ar',
      icon: <FaEnvelope className="text-xl" />
    }
  ]

  return (
    <div className="font-source">
      {/* Hero banner */}
      <section className="relative max-w-7xl mx-auto mt-8 h-[400px] overflow-hidden rounded-2xl">
        <img src="/Nosreunimos.png" alt="Banner" className="absolute inset-0 w-full h-full object-cover opacity-90 hidden md:block" />
        <img src="/NosreunimosMobile.png" alt="Banner" className="absolute inset-0 w-full h-full object-cover opacity-90 md:hidden" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center text-white">
          <span className="text-sm uppercase tracking-widest font-medium opacity-90">Bienvenidos</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bevietnam font-bold">¿Nos Reunimos en Posadas?</h1>
        </div>
      </section>

      {/* Introducción */}
      <section className="max-w-4xl mx-auto mt-20 px-6">
        <div className="bg-white rounded-xl p-8 border border-gray-100">
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Posadas, corazón del Mercosur, se extiende a orillas del río Paraná, cuya costanera conecta simbólicamente con la ciudad vecina de Encarnación, Paraguay.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Centro estratégico para acceder a los principales atractivos turísticos de la provincia y la región, Posadas combina encanto urbano y natural, una vibrante vida nocturna y la calidez inconfundible de su gente.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Con una variada oferta de actividades, infraestructura y servicios, ésta ciudad mágica te invita a elegirla como el escenario ideal para tu próximo evento.
          </p>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="max-w-6xl mx-auto mt-20 px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg p-6 text-center border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-green-800 mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1 flex items-center justify-center">
                {stat.plus && <span className="text-green-800 mr-1">+</span>}
                <CountUp
                  end={stat.value}
                  duration={1.5}
                  separator={stat.decimal ? '.' : ''}
                  decimals={0}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Características */}
      <section className="max-w-6xl mx-auto mt-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-100 hover:border-green-200 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-green-800 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Información adicional */}
      <section className="max-w-4xl mx-auto mt-20 px-6 mb-20">
        <div className="bg-green-50 rounded-xl p-8 border border-green-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Asesoramiento Profesional</h2>
          <p className="text-gray-700 mb-6 text-sm">
            Contamos con el respaldo del "Posadas Bureau Congresos y Convenciones" para brindarte el mejor asesoramiento en la organización de tu evento.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="https://www.instagram.com/posadasbureau/?hl=es" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-center text-sm font-medium w-full sm:w-auto"
            >
              Instagram Posadas Bureau
            </a>
            <a 
              href="https://www.facebook.com/posadascongresosyconvencionesbureau/?locale=es_LA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-center text-sm font-medium w-full sm:w-auto"
            >
              Facebook Posadas Bureau
            </a>
            <span className="inline-block bg-green-900 text-white px-4 py-2 rounded-lg font-medium text-center text-sm w-full sm:w-auto cursor-default">
              Posadas Congresos y Convenciones Bureau
            </span>
          </div>
        </div>
      </section>
    </div>
  )
} 