import React from 'react'

const IconSVG = ({ 
  name, 
  className = '', 
  size = 'w-6 h-6', 
  color = 'text-gray-600' 
}) => {
  // Mapeo de nombres de iconos a sus archivos SVG
  const iconMap = {
    'agencias-viaje': '/icons/Turismo - Iconos Web_Agencias de Viaje.svg',
    'alojamientos': '/icons/Turismo - Iconos Web_Alojamientos.svg',
    'camping': '/icons/Turismo - Iconos Web_Camping.svg',
    'capacitaciones': '/icons/Turismo - Iconos Web_Capacitaciones.svg',
    'centros-informacion': '/icons/Turismo - Iconos Web_Centros de Información.svg',
    'eventos': '/icons/Turismo - Iconos Web_Eventos.svg',
    'fit': '/icons/Turismo - Iconos Web_FIT.svg',
    'gastronomia': '/icons/Turismo - Iconos Web_Gastronomía.svg',
    'moverte-ciudad': '/icons/Turismo - Iconos Web_Moverte en la Ciudad.svg',
    'nautico': '/icons/Turismo - Iconos Web_Náutico.svg',
    'paseos-guiados': '/icons/Turismo - Iconos Web_Paseos Guiados.svg',
    'sem': '/icons/Turismo - Iconos Web_SEM.svg',
    'semana-santa': '/icons/Turismo - Iconos Web_Semana Santa.svg',
    'smart-city': '/icons/Turismo - Iconos Web_Smart City.svg',
    'tips-frontera': '/icons/Turismo - Iconos Web_Tips de Frontera.svg',
    'una-plus': '/icons/Turismo - Iconos Web_UNA+.svg',
    'verano': '/icons/Turismo - Iconos Web_Verano.svg'
  }

  const iconPath = iconMap[name]
  
  if (!iconPath) {
    console.warn(`Icono "${name}" no encontrado en el mapeo`)
    return null
  }

  return (
    <img 
      src={iconPath} 
      alt={`Icono ${name}`}
      className={`${size} ${color} ${className}`}
    />
  )
}

export default IconSVG
