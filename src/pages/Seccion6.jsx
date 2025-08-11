import React from 'react'

export default function Seccion6() {
  return (
    <div className="min-h-screen">
      {/* Hero Section con imagen de fondo */}
      <div className="relative h-96 flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo responsiva usando CSS */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/sustentable.png)'
          }}
        ></div>
        
        {/* Imagen mobile usando media query CSS - se ve completa sin recortar */}
        <div 
          className="absolute inset-0 w-full h-full bg-contain bg-center bg-no-repeat md:hidden"
          style={{
            backgroundImage: 'url(/sustentablemobile.png)'
          }}
        ></div>
        
        {/* Contenido del banner con mejor contraste */}
        <div className="relative z-10 flex items-center justify-center h-full w-full">
          <div className="text-center w-full px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">Posadas Sustentable</h1>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto drop-shadow-2xl font-semibold">
              Compromiso con el turismo responsable y la sostenibilidad ambiental.
            </p>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Eco Meetings */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg 
                className="w-8 h-8 text-white" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3 21 5 17 8 17 8M8 18c-1.31 0-2.5-.94-2.5-2.1S6.69 13.8 8 13.8s2.5.94 2.5 2.1S9.31 18 8 18Z"/>
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Ecomeetings en Posadas
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              En Posadas, creemos que el futuro de los eventos no solo es innovador, sino también consciente. 
              Por eso, desarrollamos prácticas concretas para que cada congreso, feria o encuentro sea una 
              experiencia memorable sin costo para el planeta.
            </p>
          </div>

          {/* ¿Qué hace sostenible a un evento en Posadas? */}
          <div className="bg-emerald-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              ¿Qué hace sostenible a un evento en Posadas?
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">✅</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Sedes con enfoque ambiental</h4>
                    <p className="text-gray-600">
                      Espacios que aplican criterios de eficiencia energética, separación de residuos 
                      y aprovechamiento de luz natural. Porque un buen evento también cuida su escenario.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">✅</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Proveedores locales y responsables</h4>
                    <p className="text-gray-600">
                      Desde catering con productos de km 0 hasta materiales reciclables, 
                      apostamos por lo que es nuestro… y sustentable.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">✅</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Gestión de residuos eficiente</h4>
                    <p className="text-gray-600">
                      Implementamos estaciones de reciclaje, reducción de plásticos de un solo uso 
                      y estrategias de compostaje para eventos grandes y chicos. Hasta los descartables tienen consciencia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">✅</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Movilidad amigable</h4>
                    <p className="text-gray-600">
                      Promovemos el uso de transporte compartido, eléctrico o no motorizado 
                      para reducir la huella de carbono del traslado. Caminás, llegás, ayudás.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">✅</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Compensación de huella</h4>
                    <p className="text-gray-600">
                      Calculamos el impacto del evento y ofrecemos alternativas de compensación 
                      (reforestación, apoyo a proyectos ambientales locales) para quienes quieren 
                      dejar huella, pero una buena.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mensaje final Eco Meetings */}
          <div className="text-center bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Tu evento puede marcar la diferencia.
            </h3>
            <p className="text-lg text-gray-600">
              En Posadas, el compromiso con el ambiente no es un extra: es parte del paquete.
            </p>
          </div>
        </div>

        {/* Misiones Carbono Neutral */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🌱</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Misiones Carbono Neutral
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Misiones no solo es biodiversidad. Es acción climática real. Bajo el programa Misiones Carbono Neutral, 
              trabajamos para reducir y compensar nuestras emisiones, convirtiéndonos en un referente de sostenibilidad en la región.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
              Este compromiso no es solo ambiental: es cultural, económico y político. Desde eventos más limpios 
              hasta políticas públicas activas, Misiones avanza hacia un modelo de desarrollo que protege lo que 
              nos hace únicos: nuestra selva, nuestro río, nuestra gente.
            </p>
          </div>

          {/* ¿Qué implica Misiones Carbono Neutral? */}
          <div className="bg-green-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              ¿Qué implica Misiones Carbono Neutral?
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">🌿</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Medición de emisiones</h4>
                    <p className="text-gray-600">
                      Evaluamos el impacto ambiental de actividades públicas y privadas, incluyendo eventos, 
                      para establecer planes de mejora concretos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">🌳</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Compensación local</h4>
                    <p className="text-gray-600">
                      Apoyamos proyectos de reforestación, conservación y restauración de ecosistemas nativos, 
                      conectando cada acción con un resultado tangible en nuestro territorio.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">🚯</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Educación y concientización</h4>
                    <p className="text-gray-600">
                      Impulsamos campañas y capacitaciones para que instituciones, empresas y ciudadanía 
                      entiendan su rol en la lucha contra el cambio climático.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">🔌</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Energías limpias y eficiencia</h4>
                    <p className="text-gray-600">
                      Promovemos la transición energética a fuentes renovables, y la adopción de tecnologías 
                      que reduzcan el consumo y mejoren la calidad de vida.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">🌎</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Eventos sostenibles y ecomeetings</h4>
                    <p className="text-gray-600">
                      Desde Posadas al resto de la provincia, trabajamos para que cada encuentro profesional 
                      esté alineado con los principios de sostenibilidad. Porque el futuro también se organiza.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mensaje final Misiones Carbono Neutral */}
          <div className="text-center bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Misiones Carbono Neutral no es una meta lejana. Es un camino que ya empezamos a recorrer.
            </h3>
            <p className="text-lg text-gray-600">
              Y queremos que camines con nosotros.
            </p>
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-emerald-600 to-green-700 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            "Conectá. Creá. Celebrá. Posadas te espera."
          </h2>
          <p className="text-xl mb-6">
            Descubre más sobre nuestras iniciativas sustentables
          </p>
          <a 
            href="https://posadas.gov.ar/sustentable/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-emerald-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <span className="text-2xl mr-2">🌿</span>
            Visitar Web Posadas Sustentable
          </a>
        </div>
      </div>
    </div>
  )
} 