import React from 'react';
import { FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';

export default function DeportivaCard({ dep, onClick }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between items-center hover:shadow-2xl transition-shadow cursor-pointer border border-transparent hover:border-green-800 max-w-xs mx-auto"
      onClick={onClick}
      style={{ minHeight: 220 }}
    >
      <div className="flex flex-col items-center w-full">
        <h3 className="text-xl font-semibold text-green-800 mb-2 flex items-center justify-center"><FaBuilding className="mr-2" />{dep.nombre}</h3>
        <div className="text-sm text-gray-600 mb-2 flex items-center justify-center w-full"><FaMapMarkerAlt className="inline mr-1" />{dep.direccion}</div>
      </div>
      <button className="mt-4 bg-green-800 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors w-full">Ver detalles</button>
    </div>
  );
} 