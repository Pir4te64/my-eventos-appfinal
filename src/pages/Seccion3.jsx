// src/pages/Seccion3.jsx
import React, { useState } from 'react'
import { FaPlane, FaHotel, FaUtensils, FaCalendarAlt, FaUsers, FaChartLine, FaBuilding, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Seccion3() {
  const [activeTab, setActiveTab] = useState('mice')

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

      {/* Enlace a la agenda con animación */}
      <motion.section
        className="max-w-4xl mx-auto mt-24 px-6 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
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
      </motion.section>
    </div>
  )
} 