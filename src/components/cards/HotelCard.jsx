import React from 'react';
import { FaHotel, FaDoorOpen, FaMapMarkerAlt } from 'react-icons/fa';

export default function HotelCard({ hotel, onClick }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg p-4 flex flex-col justify-between items-center hover:shadow-2xl transition-shadow cursor-pointer border border-transparent hover:border-green-800 mx-auto"
      style={{ height: 180, minHeight: 180, maxHeight: 180, width: 220, maxWidth: 220 }}
    >
      <div className="flex flex-col items-center w-full flex-1 justify-center">
        <h3 className={`font-semibold text-green-800 mb-2 flex items-center justify-center ${hotel.nombre.length > 22 ? 'text-sm' : 'text-base'}`} style={{textAlign:'center', wordBreak:'break-word'}}><FaHotel className="mr-2" />{hotel.nombre}</h3>
        <div className="flex flex-wrap gap-2 text-xs text-gray-600 mb-2 justify-center">
          <span><FaDoorOpen className="inline mr-1" />{hotel.salones} salones</span>
          {hotel.capacidad && <span>Capacidad máx: <b>{typeof hotel.capacidad === 'string' && hotel.capacidad.includes('/') ? hotel.capacidad.split('/')[0] : hotel.capacidad}</b></span>}
        </div>
        <div className="text-xs text-gray-500 mb-2 truncate w-full text-center">{hotel.tipo}</div>
        <div className="text-xs text-gray-500 mb-2 flex items-center justify-center w-full"><FaMapMarkerAlt className="mr-1" />{hotel.direccion}</div>
      </div>
      <button className="bg-green-800 text-white px-3 py-1.5 rounded-full hover:bg-green-700 transition-colors w-full text-sm">Ver detalles</button>
    </div>
  );
} 