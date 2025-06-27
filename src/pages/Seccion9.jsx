import React, { useState } from 'react'

export default function Seccion9() {
  const [activeTab, setActiveTab] = useState('aerea')
  const [expandedService, setExpandedService] = useState(null)

  const verdePrincipal = '#00723e'

  const toggleService = (service) => {
    setExpandedService(expandedService === service ? null : service)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div style={{ backgroundColor: verdePrincipal }} className="relative h-96 flex items-center justify-center overflow-hidden">
        {/* Overlay eliminado para mostrar el verde sólido */}
        <div className="relative z-10 flex items-center justify-center h-full w-full">
          <div className="text-center w-full">
            <h1 className="text-5xl font-bold text-white mb-4">Conectividad</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Conectando Posadas con el mundo a través de tecnología avanzada
            </p>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introducción */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div style={{ backgroundColor: verdePrincipal }} className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <span className="text-white text-2xl">✈️</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6 hover:text-green-700 transition-colors duration-300">
              Conectividad Aérea y Terrestre
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto hover:text-gray-800 transition-colors duration-300">
              Posadas posee una excelente conectividad tanto aérea como terrestre que permite a sus visitantes 
              acceder al destino de manera sencilla, segura y confortable.
            </p>
          </div>

          {/* Imágenes Representativas */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <div style={{ background: `linear-gradient(135deg, ${verdePrincipal} 60%, #009e60 100%)` }} className="h-48 flex items-center justify-center group-hover:brightness-110 transition-all duration-300">
                <span className="text-white text-4xl">✈️</span>
              </div>
              <div className="p-6 text-center group-hover:bg-gray-50 transition-colors duration-300">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-700 transition-colors duration-300">Aerolíneas</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">Flybondi y Aerolíneas Argentinas</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <div style={{ background: `linear-gradient(135deg, ${verdePrincipal} 60%, #009e60 100%)` }} className="h-48 flex items-center justify-center group-hover:brightness-110 transition-all duration-300">
                <span className="text-white text-4xl">🚌</span>
              </div>
              <div className="p-6 text-center group-hover:bg-gray-50 transition-colors duration-300">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-700 transition-colors duration-300">Transporte</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">Sistema integrado de transporte urbano</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <div style={{ background: `linear-gradient(135deg, ${verdePrincipal} 60%, #009e60 100%)` }} className="h-48 flex items-center justify-center group-hover:brightness-110 transition-all duration-300">
                <span className="text-white text-4xl">🌉</span>
              </div>
              <div className="p-6 text-center group-hover:bg-gray-50 transition-colors duration-300">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-700 transition-colors duration-300">Frontera</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">Conexión con Encarnación, Paraguay</p>
              </div>
            </div>
          </div>

          {/* Información del Aeropuerto */}
          <div style={{ backgroundColor: '#e6f4ec' }} className="rounded-xl p-8 mb-12 hover:bg-green-100 transition-colors duration-300 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6 hover:text-green-700 transition-colors duration-300">
              Aeropuerto Internacional "Libertador General José de San Martín"
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-600 mb-4 hover:text-gray-800 transition-colors duration-300">
                  La ciudad cuenta con el aeropuerto internacional donde se realizan vuelos con destino 
                  a Buenos Aires y Córdoba actualmente, permitiendo la conexión con más de 15 ciudades del país.
                </p>
                <p className="text-lg text-gray-600 hover:text-gray-800 transition-colors duration-300">
                  Uno de los pasos fronterizos del país se encuentra en Posadas uniéndose con la ciudad 
                  de Encarnación (Paraguay), las Rutas Nacionales N°12 y 14 que conectan a todo el país 
                  con la ciudad tiene como destino principal las Cataratas del Iguazú.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                <h4 className="text-lg font-bold text-gray-800 mb-4 hover:text-green-700 transition-colors duration-300">Destinos Principales</h4>
                <div className="space-y-3">
                  <div className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300 cursor-pointer group">
                    <div style={{ backgroundColor: verdePrincipal }} className="w-3 h-3 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Buenos Aires</span>
                  </div>
                  <div className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300 cursor-pointer group">
                    <div style={{ backgroundColor: verdePrincipal }} className="w-3 h-3 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Córdoba</span>
                  </div>
                  <div className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300 cursor-pointer group">
                    <div style={{ backgroundColor: verdePrincipal }} className="w-3 h-3 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Más de 15 ciudades conectadas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs de Conectividad */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1 hover:shadow-lg transition-shadow duration-300">
              <button
                onClick={() => setActiveTab('aerea')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:scale-105 ${
                  activeTab === 'aerea' 
                    ? 'bg-green-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
                }`}
              >
                ✈️ Conectividad Aérea
              </button>
              <button
                onClick={() => setActiveTab('terrestre')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:scale-105 ${
                  activeTab === 'terrestre' 
                    ? 'bg-green-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
                }`}
              >
                🚌 Conectividad Terrestre
              </button>
            </div>
          </div>

          {/* Contenido de Tabs */}
          {activeTab === 'aerea' && (
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 hover:text-green-600 transition-colors duration-300">Conectividad Aérea</h3>
              <p className="text-lg text-gray-600 mb-8 hover:text-gray-800 transition-colors duration-300">
                La ciudad cuenta con conectividad aérea que la vincula directamente con dos importantes 
                destinos nacionales: Buenos Aires y Córdoba. Actualmente, operan en el aeropuerto dos 
                líneas aéreas: Flybondi y Aerolíneas Argentinas, brindando a los pasajeros opciones 
                accesibles y variadas para sus traslados.
              </p>
              <p className="text-lg text-gray-600 mb-8 hover:text-gray-800 transition-colors duration-300">
                Con más de 35 vuelos semanales, Posadas mantiene una conexión fluida que permite el 
                acceso a más de 15 ciudades de todo el país, fortaleciendo así su integración regional 
                y nacional, y potenciando el desarrollo turístico, comercial y económico de la zona.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Aerolíneas Argentinas */}
                <div className="border border-gray-200 rounded-lg p-6 hover:border-green-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">Aerolíneas Argentinas</h4>
                  <div className="space-y-3">
                    <div className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                      <span className="text-gray-500 mr-2 group-hover:scale-110 transition-transform duration-300">🌐</span>
                      <a href="http://www.aerolineas.com.ar" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline hover:text-green-800 transition-colors duration-300">
                        www.aerolineas.com.ar
                      </a>
                    </div>
                    <div className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                      <span className="text-gray-500 mr-2 group-hover:scale-110 transition-transform duration-300">📞</span>
                      <span className="text-gray-700 hover:text-gray-900 transition-colors duration-300">+54 (11) 5199 3555</span>
                    </div>
                    <div className="text-sm text-gray-600 hover:text-gray-700 transition-colors duration-300 pl-8">
                      Lun a Vie de 8 a 20hs. Sáb, Dom y feriados de 8 a 14 hs.
                    </div>
                    <div className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                      <span className="text-gray-500 mr-2 group-hover:scale-110 transition-transform duration-300">💬</span>
                      <span className="text-gray-700 hover:text-gray-900 transition-colors duration-300">+54911-49404798</span>
                    </div>
                    <div className="text-sm text-gray-600 hover:text-gray-700 transition-colors duration-300 pl-8">
                      Lun a Vie de 9 a 18hs
                    </div>
                    <div className="text-sm text-gray-600 hover:text-gray-700 transition-colors duration-300 pl-8">
                      Dirección: Perú 2, Ciudad Autónoma de Buenos Aires
                    </div>
                  </div>
                </div>

                {/* FlyBondi */}
                <div className="border border-gray-200 rounded-lg p-6 hover:border-green-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">FlyBondi</h4>
                  <div className="space-y-3">
                    <div className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                      <span className="text-gray-500 mr-2 group-hover:scale-110 transition-transform duration-300">🌐</span>
                      <a href="http://www.flybondi.com" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline hover:text-green-800 transition-colors duration-300">
                        www.flybondi.com
                      </a>
                    </div>
                    <div className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                      <span className="text-gray-500 mr-2 group-hover:scale-110 transition-transform duration-300">📞</span>
                      <span className="text-gray-700 hover:text-gray-900 transition-colors duration-300">0810-555-3592</span>
                    </div>
                    <div className="text-sm text-gray-600 hover:text-gray-700 transition-colors duration-300 pl-8">
                      Lunes a Sábados de 08 a 21 hs y Domingos de 09 a 20 hs
                    </div>
                    <div className="text-sm text-gray-600 hover:text-gray-700 transition-colors duration-300 pl-8">
                      Desde celular: *3000
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'terrestre' && (
            <div className="space-y-8">
              {/* Transporte Público */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 hover:text-green-600 transition-colors duration-300">Transporte Público</h3>
                <p className="text-lg text-gray-600 mb-6 hover:text-gray-800 transition-colors duration-300">
                  El sistema de transporte urbano público de la ciudad de Posadas está regulado por el 
                  Sistema Integrado de Transporte Urbano, que incluye a las empresas Don Casimiro, Tipoka, 
                  Nuestra Señora del Rosario y San José.
                </p>
                <p className="text-lg text-gray-600 mb-6 hover:text-gray-800 transition-colors duration-300">
                  Este sistema cuenta con dos Estaciones de Transferencia, es decir lugares en los que 
                  confluyen las líneas de colectivos y parten hacia diferentes puntos de la ciudad de 
                  Posadas, Candelaria y Garupá.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 hover:bg-yellow-100 transition-colors duration-300 hover:shadow-md">
                  <p className="text-yellow-800 hover:text-yellow-900 transition-colors duration-300">
                    <strong>Importante:</strong> Para utilizarlo debés contar con alguno de los medios 
                    de pago electrónicos (SUBE o Billetera Electrónica), ya que sin ellos, se debe 
                    abonar el pasaje regular.
                  </p>
                </div>

                {/* Aplicaciones */}
                <div className="mt-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4 hover:text-green-600 transition-colors duration-300">Aplicaciones útiles para moverte por la ciudad:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-green-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                      <h5 className="font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">Moovit</h5>
                      <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        Permite buscar cualquier destino y obtener instrucciones paso a paso. 
                        Conocer el tiempo programado para la línea que estás esperando.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-green-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                      <h5 className="font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">BondiYa</h5>
                      <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        Las paradas cercanas a tu ubicación, en un radio de 500 mts. 
                        Las líneas que llegan a cada parada y las que están próximas a arribar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Servicios de Transporte */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 hover:text-green-600 transition-colors duration-300">Servicios de Transporte</h3>
                
                {/* Minibuses y Combis */}
                <div className="mb-8">
                  <button
                    onClick={() => toggleService('minibuses')}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <h4 className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">🚐 Minibuses y Combis de Posadas</h4>
                    <span className="text-gray-500 group-hover:scale-125 transition-transform duration-300">{expandedService === 'minibuses' ? '−' : '+'}</span>
                  </button>
                  {expandedService === 'minibuses' && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg animate-fade-in">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="hover:bg-white p-2 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm"><strong>El Jesuita Viajes:</strong> (03764) 429055</div>
                          <div className="hover:bg-white p-2 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm"><strong>Juanca Viajes:</strong> (03764) 607996</div>
                          <div className="hover:bg-white p-2 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm"><strong>La Sultana Viajes:</strong> (03764) 506113</div>
                          <div className="hover:bg-white p-2 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm"><strong>Stekler Viajes:</strong> (0376) 154640410</div>
                          <div className="hover:bg-white p-2 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm"><strong>Tamandua Transporte:</strong> (03764) 330014</div>
                        </div>
                        <div className="space-y-2">
                          <div className="hover:bg-white p-2 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm"><strong>Cooperativa Kimbae LTD:</strong></div>
                          <div className="hover:bg-white p-2 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm">Servicio de Traslado (Aeropuerto de Posadas)</div>
                          <div className="hover:bg-white p-2 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm">(03764) 250330 / 680311</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Taxis y Remises */}
                <div className="mb-8">
                  <button
                    onClick={() => toggleService('taxis')}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <h4 className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">🚕 Taxis - Remises</h4>
                    <span className="text-gray-500 group-hover:scale-125 transition-transform duration-300">{expandedService === 'taxis' ? '−' : '+'}</span>
                  </button>
                  {expandedService === 'taxis' && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg animate-fade-in">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="hover:bg-white p-2 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm"><strong>Horianski Remises:</strong> (03764) 4429679</div>
                          <div className="hover:bg-white p-2 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm"><strong>Telecar SRL:</strong> (03764) 466666</div>
                          <div className="hover:bg-white p-2 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm"><strong>Remises Avenida:</strong> (03764) 527999</div>
                          <div className="hover:bg-white p-2 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm"><strong>Taxi San Roque:</strong> (03764) 4428683</div>
                          <div className="hover:bg-white p-2 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm"><strong>Taxi San Rafael:</strong> (03764) 440999</div>
                        </div>
                        <div className="space-y-2">
                          <div className="hover:bg-white p-2 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm"><strong>Taxi Mascotas:</strong> (03764) 647559</div>
                          <div className="hover:bg-white p-2 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm"><strong>Netcar Taxis/Remises:</strong> (03764) 182832</div>
                          <div className="hover:bg-white p-2 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm"><strong>Remises Nivel:</strong> (03764) 428500</div>
                          <div className="hover:bg-white p-2 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm"><strong>Remises Cristo Rey:</strong> (03764) 454999</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Alquiler de Automóviles */}
                <div className="mb-8">
                  <button
                    onClick={() => toggleService('alquiler')}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <h4 className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">🚗 Alquiler de Automóviles</h4>
                    <span className="text-gray-500 group-hover:scale-125 transition-transform duration-300">{expandedService === 'alquiler' ? '−' : '+'}</span>
                  </button>
                  {expandedService === 'alquiler' && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg animate-fade-in">
                      <div className="space-y-4">
                        <div className="border-b border-gray-200 pb-2 hover:bg-white p-3 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm">
                          <div><strong>Class Rent a Car</strong></div>
                          <div>Dir.: Buenos Aires, 1975 - Centro</div>
                          <div>Tel.: (0376) 4437580 | Cel.: 24hs.: (0376) 4640531</div>
                          <div>Web: <a href="http://www.classrentacar.com.ar" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline hover:text-green-800 transition-colors duration-300">www.classrentacar.com.ar</a></div>
                        </div>
                        <div className="border-b border-gray-200 pb-2 hover:bg-white p-3 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm">
                          <div><strong>Alamo</strong></div>
                          <div>Dir.: Aeropuerto de Posadas</div>
                          <div>Tel.: (0376) 4290871 / (0376) 4969556</div>
                          <div>Web: <a href="http://www.alamo.com" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline hover:text-green-800 transition-colors duration-300">www.alamo.com</a></div>
                        </div>
                        <div className="border-b border-gray-200 pb-2 hover:bg-white p-3 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm">
                          <div><strong>Avis</strong></div>
                          <div>Dir.: Felix de Azara 1908</div>
                          <div>Tel.: +54 9 11 51993159</div>
                        </div>
                        <div className="hover:bg-white p-3 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm">
                          <div><strong>Forest</strong></div>
                          <div>Dir.: Aeropuerto de Posadas</div>
                          <div>Cel.: +54 9 3757 430945</div>
                          <div>Web: <a href="https://forestrentacar.com" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline hover:text-green-800 transition-colors duration-300">forestrentacar.com</a></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Buses */}
                <div>
                  <button
                    onClick={() => toggleService('buses')}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <h4 className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">🚌 Buses</h4>
                    <span className="text-gray-500 group-hover:scale-125 transition-transform duration-300">{expandedService === 'buses' ? '−' : '+'}</span>
                  </button>
                  {expandedService === 'buses' && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg animate-fade-in">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="hover:bg-white p-2 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm"><strong>Aguila Dorada:</strong> (0376) 4453618</div>
                          <div className="hover:bg-white p-2 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm"><strong>Andesmar:</strong> (0376) 4471769</div>
                          <div className="hover:bg-white p-2 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm"><strong>Capital Del Monte:</strong> (0376) 4471660</div>
                          <div className="hover:bg-white p-2 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm"><strong>Crucero Del Norte:</strong> (0376) 4454883</div>
                          <div className="hover:bg-white p-2 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm"><strong>Flecha Bus:</strong> (0376) 4471707</div>
                        </div>
                        <div className="space-y-2">
                          <div className="hover:bg-white p-2 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm"><strong>Kruse/Reunidas:</strong> (0376) 4454795</div>
                          <div className="hover:bg-white p-2 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm"><strong>Oro Verde:</strong> (0376) 4452792</div>
                          <div className="hover:bg-white p-2 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm"><strong>Río Uruguay:</strong> (0376) 4457500</div>
                          <div className="hover:bg-white p-2 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm"><strong>Singer:</strong> (0376) 4455800</div>
                          <div className="hover:bg-white p-2 rounded-lg transition-colors duration-300 cursor-pointer hover:shadow-sm"><strong>Vía Bariloche:</strong> (0376) 5220243</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.6s ease-out 0.3s both;
        }
      `}</style>
    </div>
  )
} 