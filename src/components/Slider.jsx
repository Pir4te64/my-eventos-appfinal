// src/components/Slider.jsx
import { useState, useEffect } from 'react'

export default function Slider() {
  const images = ['/fondo1.png','/fondo2.png','/fondo3.png','/fondo4.png']
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCurrent(i => (i + 1) % images.length), 10000)
    return () => clearInterval(id)
  }, [images.length])

  const prev = () => setCurrent(i => (i - 1 + images.length) % images.length)
  const next = () => setCurrent(i => (i + 1) % images.length)

  return (
    <div className="flex justify-center py-4 bg-green-50 mt-8">
      <div
        className="relative w-full max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-[1920px] 
                       h-48 sm:h-64 md:h-80 lg:h-[624px] rounded-3xl overflow-hidden"
      >
        {images.map((src,i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i+1}`}
            className={
              `absolute inset-0 w-full h-full object-contain rounded-3xl 
               transition-opacity duration-1000 ease-in-out 
               ${i===current? 'opacity-100':'opacity-0'}`
            }
          />
        ))}
        <button onClick={prev} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-1 sm:p-2 rounded-full">
          ‹
        </button>
        <button onClick={next} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-1 sm:p-2 rounded-full">
          ›
        </button>
      </div>
    </div>
  )
}
