// src/components/Slider.jsx
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const slides = [
    {
      image: '/fondo1.png',
      title: '¿Nos Reunimos en Posadas?',
      subtitle: 'Descubre por qué Posadas es el lugar ideal para tus eventos'
    },
    {
      image: '/fondo2.png',
      title: 'Parque del Conocimiento',
      subtitle: 'Un espacio único para eventos culturales y educativos'
    },
    {
      image: '/fondo3.png',
      title: 'Agenda MICE y Eventos Deportivos',
      subtitle: 'Eventos profesionales y deportivos de primer nivel'
    },
    {
      image: '/fondo4.png',
      title: 'Sedes para Eventos',
      subtitle: 'Espacios modernos y versátiles para cualquier ocasión'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  useEffect(() => {
    let timer
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)
    }
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  return (
    <div className="relative rounded-3xl max-w-7xl mx-auto mt-8 h-[400px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center text-white">
            <span className="text-xs uppercase tracking-widest">Bienvenidos a Posadas</span>
            <h1 className="mt-4 text-5xl font-bevietnam">{slide.title}</h1>
            <p className="mt-4 text-xl max-w-2xl">{slide.subtitle}</p>
            <Link
              to={`/seccion${index + 1}`}
              className="mt-8 bg-green-800 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors"
            >
              Descubrir más
            </Link>
          </div>
        </div>
      ))}

      {/* Indicadores */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
        aria-label="Slide anterior"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
        aria-label="Slide siguiente"
      >
        ›
      </button>

      {/* Botón de reproducción/pausa */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute bottom-8 right-8 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
        aria-label={isAutoPlaying ? "Pausar" : "Reproducir"}
      >
        {isAutoPlaying ? '⏸' : '▶'}
      </button>
    </div>
  )
}
