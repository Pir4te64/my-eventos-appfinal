import React from 'react'
import { motion } from 'framer-motion'

export default function Seccion6() {
  return (
    <div className="font-source">
      {/* Hero banner */}
      <section className="relative max-w-7xl mx-auto mt-8 h-[400px] overflow-hidden rounded-2xl">
        <img src="/sustentable.png" alt="Banner" className="absolute inset-0 w-full h-full object-cover opacity-90 hidden md:block" />
        <img src="/sustentablemobile.png" alt="Banner" className="absolute inset-0 w-full h-full object-cover opacity-90 md:hidden" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center text-white">
          <span className="text-sm uppercase tracking-widest font-medium opacity-90">Sostenibilidad</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bevietnam font-bold">Posadas Sustentable</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto opacity-90">
            Compromiso con el turismo responsable y la sostenibilidad ambiental.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <div className="max-w-6xl mx-auto px-6 mt-20">
        {/* Eco Meetings */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Ecomeetings en Posadas
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              En Posadas, creemos que el futuro de los eventos no solo es innovador, sino también consciente. 
              Por eso, desarrollamos prácticas concretas para que cada congreso, feria o encuentro sea una 
              experiencia memorable sin costo para el planeta.
            </p>
          </div>

          {/* ¿Qué hace sostenible a un evento en Posadas? */}
          <div className="bg-green-50 rounded-xl p-8 mb-12 border border-green-100">
            <h3 className="text-xl font-semibold text-center text-gray-900 mb-8">
              ¿Qué hace sostenible a un evento en Posadas?
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">✅</span>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-2">Sedes con enfoque ambiental</h4>
                    <p className="text-sm text-gray-600">
                      Espacios que aplican criterios de eficiencia energética, separación de residuos 
                      y aprovechamiento de luz natural. Porque un buen evento también cuida su escenario.
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">✅</span>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-2">Proveedores locales y responsables</h4>
                    <p className="text-sm text-gray-600">
                      Desde catering con productos de km 0 hasta materiales reciclables, 
                      apostamos por lo que es nuestro… y sustentable.
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">✅</span>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-2">Gestión de residuos eficiente</h4>
                    <p className="text-sm text-gray-600">
                      Implementamos estaciones de reciclaje, reducción de plásticos de un solo uso 
                      y estrategias de compostaje para eventos grandes y chicos.
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">✅</span>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-2">Movilidad amigable</h4>
                    <p className="text-sm text-gray-600">
                      Promovemos el uso de transporte compartido, eléctrico o no motorizado 
                      para reducir la huella de carbono del traslado.
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">✅</span>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-2">Compensación de huella</h4>
                    <p className="text-sm text-gray-600">
                      Calculamos el impacto del evento y ofrecemos alternativas de compensación 
                      para quienes quieren dejar huella, pero una buena.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Mensaje final Eco Meetings */}
          <div className="text-center bg-white rounded-xl p-8 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Tu evento puede marcar la diferencia.
            </h3>
            <p className="text-gray-600">
              En Posadas, el compromiso con el ambiente no es un extra: es parte del paquete.
            </p>
          </div>
        </motion.section>

        {/* Misiones Carbono Neutral */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Misiones Carbono Neutral
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Misiones no solo es biodiversidad. Es acción climática real. Bajo el programa Misiones Carbono Neutral, 
              trabajamos para reducir y compensar nuestras emisiones, convirtiéndonos en un referente de sostenibilidad en la región.
            </p>
            <p className="text-gray-600 max-w-4xl mx-auto mt-4">
              Este compromiso no es solo ambiental: es cultural, económico y político. Desde eventos más limpios 
              hasta políticas públicas activas, Misiones avanza hacia un modelo de desarrollo que protege lo que 
              nos hace únicos: nuestra selva, nuestro río, nuestra gente.
            </p>
          </div>

          {/* ¿Qué implica Misiones Carbono Neutral? */}
          <div className="bg-green-50 rounded-xl p-8 mb-12 border border-green-100">
            <h3 className="text-xl font-semibold text-center text-gray-900 mb-8">
              ¿Qué implica Misiones Carbono Neutral?
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">🌿</span>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-2">Medición de emisiones</h4>
                    <p className="text-sm text-gray-600">
                      Evaluamos el impacto ambiental de actividades públicas y privadas, incluyendo eventos, 
                      para establecer planes de mejora concretos.
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">🌳</span>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-2">Compensación local</h4>
                    <p className="text-sm text-gray-600">
                      Apoyamos proyectos de reforestación, conservación y restauración de ecosistemas nativos, 
                      conectando cada acción con un resultado tangible en nuestro territorio.
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">🚯</span>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-2">Educación y concientización</h4>
                    <p className="text-sm text-gray-600">
                      Impulsamos campañas y capacitaciones para que instituciones, empresas y ciudadanía 
                      entiendan su rol en la lucha contra el cambio climático.
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">🔌</span>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-2">Energías limpias y eficiencia</h4>
                    <p className="text-sm text-gray-600">
                      Promovemos la transición energética a fuentes renovables, y la adopción de tecnologías 
                      que reduzcan el consumo y mejoren la calidad de vida.
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">🌎</span>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-2">Eventos sostenibles y ecomeetings</h4>
                    <p className="text-sm text-gray-600">
                      Desde Posadas al resto de la provincia, trabajamos para que cada encuentro profesional 
                      esté alineado con los principios de sostenibilidad.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Mensaje final Misiones Carbono Neutral */}
          <div className="text-center bg-white rounded-xl p-8 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Misiones Carbono Neutral no es una meta lejana. Es un camino que ya empezamos a recorrer.
            </h3>
            <p className="text-gray-600">
              Y queremos que camines con nosotros.
            </p>
          </div>
        </motion.section>

        {/* CTA Final */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-green-800 rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-semibold mb-4">
              "Conectá. Creá. Celebrá. Posadas te espera."
            </h2>
            <p className="text-lg mb-6">
              Descubre más sobre nuestras iniciativas sustentables
            </p>
            <a 
              href="https://posadas.gov.ar/sustentable/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-green-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm"
            >
              <span className="text-lg mr-2">🌿</span>
              Visitar Web Posadas Sustentable
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  )
} 