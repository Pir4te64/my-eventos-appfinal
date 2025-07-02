import React from 'react'

export default function Seccion7() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div style={{ backgroundColor: '#00723e' }} className="relative h-96 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Posadas Universitaria</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">Centro académico y de innovación con amplia oferta educativa y eventos universitarios.</p>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introducción */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🎓</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Posadas Universitaria
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Posadas es el hogar de universidades de prestigio y una amplia gama de institutos superiores, 
              lo que atrae a una gran población estudiantil y académica, que representa más del 10% de su 
              población total de habitantes.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
              Así, Posadas supera la media nacional en términos de densidad estudiantil.
            </p>
          </div>

          {/* Estadísticas Académicas */}
          <div className="bg-blue-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Infraestructura Académica
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">🏛️</span>
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">7</div>
                <div className="text-gray-600">Universidades</div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">📚</span>
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">55</div>
                <div className="text-gray-600">Institutos Superiores</div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">🎯</span>
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">300</div>
                <div className="text-gray-600">Carreras Disponibles</div>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-600">
                Año a año se van incorporando nuevas opciones académicas en la Ciudad.
              </p>
            </div>
          </div>

          {/* Eventos Académicos */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Referente en Eventos Académicos
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  Posadas se ha consolidado como un referente nacional e internacional en la organización 
                  de eventos académicos de alto nivel. Gracias a su infraestructura moderna, la calidad 
                  de sus instituciones educativas y su comunidad intelectual, esta ciudad ofrece un entorno 
                  ideal para el intercambio de conocimientos, el desarrollo científico y la innovación.
                </p>
                <p className="text-lg text-gray-600">
                  Cada año, alberga congresos, simposios, seminarios y ferias científicas que reúnen a 
                  investigadores, profesionales y estudiantes de diversas disciplinas.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Tipos de Eventos</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Congresos Internacionales</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Simposios Científicos</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Seminarios Académicos</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Ferias Científicas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Colaboración Institucional */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Colaboración Institucional
            </h3>
            <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
              Tanto las universidades, centros educativos y de investigación, espacios culturales trabajan 
              en conjunto para promover una agenda académica, fortaleciendo así el prestigio educativo de la ciudad.
            </p>
          </div>
        </div>

        {/* Listado de Sedes Académicas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Listado de Sedes Académicas para Eventos
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center text-gray-500 mb-4">
              <div className="text-4xl mb-2">📋</div>
              <p></p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏛️</span>
                </div>
                <h3 className="font-bold text-gray-800">Universidades</h3>
                <p className="text-gray-600 text-sm">7 universidades con salones para eventos</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📚</span>
                </div>
                <h3 className="font-bold text-gray-800">Institutos Superiores</h3>
                <p className="text-gray-600 text-sm">55 institutos con espacios académicos</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔬</span>
                </div>
                <h3 className="font-bold text-gray-800">Centros de Investigación</h3>
                <p className="text-gray-600 text-sm">Espacios para eventos científicos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Agencia Universitaria Posadas */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Agencia Universitaria Posadas
          </h2>
          <p className="text-xl mb-8">
            Conectamos el mundo académico con las mejores oportunidades de eventos
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Instagram</h3>
              <a 
                href="https://www.instagram.com/agenciauni.posadas/?hl=es" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Seguir en Instagram
              </a>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Facebook</h3>
              <a 
                href="https://www.facebook.com/agenciauni.posadas/?locale=es_LA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Seguir en Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 