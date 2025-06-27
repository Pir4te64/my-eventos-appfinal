import React from 'react'

export default function Seccion5() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div style={{ backgroundColor: '#00723e' }} className="relative h-96 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Posadas Deportiva</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">La ciudad como sede de grandes eventos deportivos nacionales e internacionales.</p>
        </div>
      </div>

      {/* Video/Imágenes Institucionales */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Eventos Deportivos
          </h2>
          <div className="bg-gray-100 rounded-xl p-8 text-center">
            <div className="text-6xl mb-4">🎥</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              VIDEO INSTITUCIONAL DE EVENTOS DEPORTIVOS
            </h3>
            <p className="text-gray-600 mb-6">
              Descubre la pasión por el deporte en Posadas a través de nuestro video institucional
            </p>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Video Institucional</span>
            </div>
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              En Posadas, el deporte no es solo competencia: es parte de nuestra identidad
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Nuestra ciudad combina infraestructura, paisajes únicos y pasión comunitaria para convertirse 
              en el escenario ideal para eventos deportivos de todos los niveles.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
              Desde maratones internacionales hasta torneos regionales, Posadas ofrece el entorno perfecto 
              para vivir el deporte con intensidad, seguridad y un marco natural incomparable.
            </p>
          </div>

          {/* ¿Por qué elegir Posadas? */}
          <div className="bg-green-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              ¿Por qué elegir Posadas para tu evento deportivo?
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">🏞️</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Escenarios naturales únicos</h4>
                    <p className="text-gray-600">
                      Costanera, selva, río y espacios verdes que transforman cada recorrido 
                      en una experiencia visual y física inolvidable.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">🏟️</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Infraestructura lista para el desafío</h4>
                    <p className="text-gray-600">
                      Estadios, circuitos urbanos, espacios multiuso y tecnología para acompañar 
                      tanto competencias amateurs como profesionales.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">🤝</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Apoyo logístico y humano</h4>
                    <p className="text-gray-600">
                      Organización local con experiencia, nuestra municipalidad comprometida 
                      y una comunidad que vive el deporte con orgullo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">🌿</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Deporte + sostenibilidad</h4>
                    <p className="text-gray-600">
                      Aplicamos principios de ecomeeting también en eventos deportivos: 
                      reducción de residuos, hidratación responsable, y medición de impacto ambiental. 
                      Correr sí, contaminar no.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">🏅</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Clima y calendario ideal</h4>
                    <p className="text-gray-600">
                      Con condiciones óptimas gran parte del año, Posadas permite planificar 
                      eventos sin contratiempos climáticos extremos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mensaje final */}
          <div className="text-center bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              En Posadas, el deporte se celebra. Se comparte. Y se siente.
            </h3>
            <p className="text-lg text-gray-600">
              Tu próxima competencia puede tener todo eso… y más.
            </p>
          </div>
        </div>

        {/* Listado de Sedes Deportivas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Listado de Sedes Deportivas
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center text-gray-500 mb-4">
              <div className="text-4xl mb-2">📋</div>
              <p>Información detallada disponible en el Excel de sedes deportivas</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚽</span>
                </div>
                <h3 className="font-bold text-gray-800">Estadios</h3>
                <p className="text-gray-600 text-sm">Instalaciones para fútbol y otros deportes</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏃</span>
                </div>
                <h3 className="font-bold text-gray-800">Circuitos</h3>
                <p className="text-gray-600 text-sm">Pistas y rutas para atletismo</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏊</span>
                </div>
                <h3 className="font-bold text-gray-800">Natatorios</h3>
                <p className="text-gray-600 text-sm">Piscinas y centros acuáticos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contacto */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Secretaría de Deportes y Desarrollo Humano de Posadas
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Instagram</h3>
              <a 
                href="https://www.instagram.com/deportesydesarrollohumano/?hl=es" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
                href="https://www.facebook.com/profile.php?id=61559166481122" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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