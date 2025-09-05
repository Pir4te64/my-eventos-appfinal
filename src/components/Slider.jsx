// src/components/Slider.jsx
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Slider() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

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

  return (
    <div className="relative rounded-3xl max-w-7xl mx-auto mt-8 h-[400px] overflow-hidden select-none">
      {/* Botones personalizados fuera del overlay */}
      <button ref={prevRef} className="swiper-custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors">
        ‹
      </button>
      <button ref={nextRef} className="swiper-custom-next absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors">
        ›
      </button>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onInit={swiper => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-[400px] w-full relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover opacity-90 rounded-3xl"
                draggable="false"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
