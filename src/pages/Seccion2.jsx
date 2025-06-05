// src/pages/Seccion2.jsx
import React, { useState } from 'react'
import { FaBuilding, FaUsers, FaMicrophone, FaWifi, FaParking, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'

export default function Seccion2() {
  const [activeTab, setActiveTab] = useState('convenciones')

  const convenciones = {
    salas: [
      {
        nombre: 'Sala Eva Perón',
        capacidad: 700,
        dimensiones: '31x15 m',
        escenario: '10x7 m',
        equipamiento: [
          'Consola de Sonido 16 Canales',
          '4 Parlantes montados',
          '7 Tachos PAR1000 dimerizados',
          'Consola de luces',
          'Micrófonos inalámbricos y de mesa',
          'Proyector Laser 12000 lúmenes',
          'Pantalla motorizada 5x3',
          'WiFi Públicas y Privadas',
          'Aire acondicionado central'
        ]
      },
      {
        nombre: 'Sala Clotilde G. de Fernández',
        capacidad: 70,
        dimensiones: '9,50 x 8,20 m',
        equipamiento: [
          'Consola de Sonido 8 Canales',
          '2 Parlantes montados',
          'PC y sistema de audio',
          'WiFi Públicas y Privadas',
          'Aires acondicionados tipo Split'
        ]
      },
      {
        nombre: 'Sala Ramón Ayala',
        capacidad: 70,
        dimensiones: '9,70 x 8,20 m',
        equipamiento: [
          'Consola de Sonido 8 Canales',
          '2 Parlantes montados',
          'Proyector 5000 lúmenes',
          'WiFi Públicas y Privadas',
          'Aires acondicionados tipo Split'
        ]
      }
    ],
    pabellones: [
      { nombre: 'Pabellón 1 (Rojo)', capacidad: 6500 },
      { nombre: 'Pabellón 2 (Azul)', capacidad: 3300 },
      { nombre: 'Pabellón 3 (Verde)', capacidad: 2200 }
    ]
  }

  const teatros = {
    lirico: {
      capacidad: {
        plateaBaja: 381,
        plateaAlta: 174
      },
      caracteristicas: [
        'Moderno diseño con revestimiento integral de madera',
        'Aire acondicionado central',
        'Iluminación dimmerizable',
        'Escenario de 144m²',
        'Maquinaria escénica de última generación',
        'Equipo de proyección de video'
      ]
    },
    prosa: {
      capacidad: 250,
      caracteristicas: [
        'Ubicado en planta baja',
        'Adecuado para presentaciones artísticas',
        'Ideal para eventos protocolares'
      ]
    }
  }

  return (
    <div className="font-source">
      {/* Hero banner */}
      <section className="relative rounded-3xl max-w-7xl mx-auto mt-8 h-[400px] overflow-hidden">
        <img src="/fondo2.png" alt="Banner" className="absolute inset-0 w-full h-full object-cover opacity-90" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center text-white">
          <span className="text-xs uppercase tracking-widest">Parque del Conocimiento</span>
          <h1 className="mt-4 text-5xl font-bevietnam">Centro de Convenciones y Eventos</h1>
        </div>
      </section>

      {/* Descripción general */}
      <section className="max-w-4xl mx-auto mt-16 px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            El Centro Provincial de Convenciones y Eventos es una moderna edificación que cuenta con tres salas acondicionadas para recibir actividades diversas. Es un espacio destinado a eventos culturales, científicos y artísticos.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            El Centro de Convenciones ofrece una superficie de 3.000 m² con auditorio para 700 personas, dos salas para 70 personas, sala de prensa, galería para exposiciones y una boutique de arte.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            El predio ferial cuenta con tres pabellones de 10.000 metros cubiertos y componen con el exterior un espacio de 20.000 m² en total. Una plaza seca de 7.000 m² con estacionamiento para 150 vehículos.
          </p>
        </div>
      </section>

      {/* Tabs de navegación */}
      <section className="max-w-7xl mx-auto mt-16 px-6">
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('convenciones')}
            className={`px-6 py-3 rounded-full transition-colors ${
              activeTab === 'convenciones'
                ? 'bg-green-800 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Centro de Convenciones
          </button>
          <button
            onClick={() => setActiveTab('teatros')}
            className={`px-6 py-3 rounded-full transition-colors ${
              activeTab === 'teatros'
                ? 'bg-green-800 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Teatros
          </button>
        </div>

        {/* Contenido de las tabs */}
        {activeTab === 'convenciones' && (
          <div className="space-y-12">
            {/* Salas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {convenciones.salas.map((sala, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{sala.nombre}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-600">
                      <FaUsers className="mr-2" />
                      <span>Capacidad: {sala.capacidad} personas</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaBuilding className="mr-2" />
                      <span>Dimensiones: {sala.dimensiones}</span>
                    </div>
                    {sala.escenario && (
                      <div className="flex items-center text-gray-600">
                        <FaMicrophone className="mr-2" />
                        <span>Escenario: {sala.escenario}</span>
                      </div>
                    )}
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Equipamiento:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {sala.equipamiento.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pabellones */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {convenciones.pabellones.map((pabellon, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{pabellon.nombre}</h3>
                  <div className="flex items-center text-gray-600">
                    <FaUsers className="mr-2" />
                    <span>Capacidad: {pabellon.capacidad} personas</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'teatros' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Teatro Lírico */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Teatro Lírico</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <FaUsers className="mr-2" />
                  <span>Capacidad: {teatros.lirico.capacidad.plateaBaja + teatros.lirico.capacidad.plateaAlta} personas</span>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Características:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {teatros.lirico.caracteristicas.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Teatro de Prosa */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Teatro de Prosa</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <FaUsers className="mr-2" />
                  <span>Capacidad: {teatros.prosa.capacidad} personas</span>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Características:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {teatros.prosa.caracteristicas.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Información de contacto */}
      <section className="max-w-4xl mx-auto mt-16 px-6 mb-16">
        <div className="bg-green-50 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Información de Contacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <FaMapMarkerAlt className="mr-3 text-green-800" />
                <span>Ulises López y RN12 (Acceso Oeste)</span>
              </div>
              <div className="flex items-center text-gray-700">
                <FaPhone className="mr-3 text-green-800" />
                <span>0376 459-7565</span>
              </div>
              <div className="flex items-center text-gray-700">
                <FaEnvelope className="mr-3 text-green-800" />
                <span>comunicacionparqueconocimiento@gmail.com</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <FaGlobe className="mr-3 text-green-800" />
                <a href="https://www.parquedelconocimiento.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-800">
                  www.parquedelconocimiento.com
                </a>
              </div>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/parqueconocimiento" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-800">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="https://www.facebook.com/parquedelconocimiento" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-800">
                  <FaFacebook className="text-2xl" />
                </a>
                <a href="https://twitter.com/PCMisiones" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-800">
                  <FaTwitter className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <a
              href="https://www.google.com/maps/place/Parque+del+Conocimiento/@-27.3975928,-55.9684507,16z/data=!4m6!3m5!1s0x9457bdbbe1e99fc9:0xdf0deea1a2a169cd!8m2!3d-27.3951525!4d-55.9638109!16s%2Fg%2F1hh_q_1wg?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 