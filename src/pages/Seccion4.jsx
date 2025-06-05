// src/pages/Seccion4.jsx
import React, { useState, useMemo } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FaPhone, FaEnvelope, FaExternalLinkAlt, FaMapMarkerAlt, FaHotel, FaDoorOpen, FaTimes, FaUsers, FaBuilding, FaUniversity, FaGlassCheers, FaFutbol, FaBriefcase } from 'react-icons/fa'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts'
import styled from 'styled-components'
import CategoryCard from '../components/cards/CategoryCard'
import HotelCard from '../components/cards/HotelCard';
import AsociacionCard from '../components/cards/AsociacionCard';
import PrivadoCard from '../components/cards/PrivadoCard';
import LocacionCard from '../components/cards/LocacionCard';
import GubernamentalCard from '../components/cards/GubernamentalCard';
import BarCard from '../components/cards/BarCard';
import DeportivaCard from '../components/cards/DeportivaCard';
import BureauCard from '../components/cards/BureauCard';
import hoteles from '../data/hoteles';
import asociaciones from '../data/asociaciones';
import privados from '../data/privados';
import locaciones from '../data/locaciones';
import gubernamentales from '../data/gubernamentales';
import bares from '../data/bares';
import deportivas from '../data/deportivas';
import bureau from '../data/bureau';
import { getCapacidadData, getCapacidadDataPriv, getCapacidadDataLoc, getCapacidadDataGov } from '../utils/capacidad';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2.5rem;
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
    justify-items: center;
    align-items: center;
  }
  .cards .card {
    background: none;
    box-shadow: none;
    border-radius: 0;
    color: inherit;
    padding: 0;
    min-width: unset;
    min-height: unset;
    display: unset;
    flex-direction: unset;
    align-items: unset;
    justify-content: unset;
    font-family: unset;
    font-size: unset;
    font-weight: unset;
    cursor: pointer;
    transition: none;
    border: none;
    outline: none;
  }
  .cards .card p.tip {
    font-size: unset;
    font-weight: unset;
    margin-bottom: unset;
  }
  .cards .card p.second-text {
    font-size: unset;
    font-weight: unset;
    opacity: unset;
  }
  .cards:has(.card:hover) .card:not(:hover) {
    filter: none;
    transform: none;
  }
  .cards .card:hover {
    transform: none;
    box-shadow: none;
    z-index: unset;
  }
`;

export default function Seccion4() {
  // Filtros hoteles
  const [search, setSearch] = useState('')
  const [minSalones, setMinSalones] = useState('')
  const [minCapacidad, setMinCapacidad] = useState('')
  const [selectedHotel, setSelectedHotel] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  // Filtros asociaciones
  const [searchA, setSearchA] = useState('')
  const [minSalonesA, setMinSalonesA] = useState('')
  const [minCapacidadA, setMinCapacidadA] = useState('')
  const [selectedAsoc, setSelectedAsoc] = useState(null)
  const [isOpenA, setIsOpenA] = useState(false)

  // Filtros privados
  const [searchP, setSearchP] = useState('')
  const [minSalonesP, setMinSalonesP] = useState('')
  const [minCapacidadP, setMinCapacidadP] = useState('')
  const [selectedPriv, setSelectedPriv] = useState(null)
  const [isOpenP, setIsOpenP] = useState(false)

  // Filtros locaciones
  const [searchL, setSearchL] = useState('')
  const [minSalonesL, setMinSalonesL] = useState('')
  const [minCapacidadL, setMinCapacidadL] = useState('')
  const [selectedLoc, setSelectedLoc] = useState(null)
  const [isOpenL, setIsOpenL] = useState(false)

  // Filtros gubernamentales
  const [searchG, setSearchG] = useState('')
  const [minSalonesG, setMinSalonesG] = useState('')
  const [minCapacidadG, setMinCapacidadG] = useState('')
  const [selectedGov, setSelectedGov] = useState(null)
  const [isOpenG, setIsOpenG] = useState(false)

  // Filtros bares
  const [searchB, setSearchB] = useState('')
  const [selectedBar, setSelectedBar] = useState(null)
  const [isOpenB, setIsOpenB] = useState(false)

  // Filtro avanzado hoteles
  const filtered = useMemo(() => hoteles.filter(h => {
    const matchName = h.nombre.toLowerCase().includes(search.toLowerCase())
    const matchSalones = minSalones ? h.salones >= parseInt(minSalones) : true
    const matchCapacidad = minCapacidad ? (parseInt(h.capacidad) >= parseInt(minCapacidad)) : true
    return matchName && matchSalones && matchCapacidad
  }), [search, minSalones, minCapacidad])

  // Filtro avanzado asociaciones
  const filteredA = useMemo(() => asociaciones.filter(a => {
    const matchName = a.nombre.toLowerCase().includes(searchA.toLowerCase())
    const matchSalones = minSalonesA ? a.salones >= parseInt(minSalonesA) : true
    const matchCapacidad = minCapacidadA ? (parseInt(a.capacidad) >= parseInt(minCapacidadA)) : true
    return matchName && matchSalones && matchCapacidad
  }), [searchA, minSalonesA, minCapacidadA])

  // Filtro avanzado privados
  const filteredP = useMemo(() => privados.filter(p => {
    const matchName = p.nombre.toLowerCase().includes(searchP.toLowerCase())
    const matchSalones = minSalonesP ? p.salones >= parseInt(minSalonesP) : true
    const matchCapacidad = minCapacidadP ? (parseInt(p.capacidad) >= parseInt(minCapacidadP)) : true
    return matchName && matchSalones && matchCapacidad
  }), [searchP, minSalonesP, minCapacidadP])

  // Filtro avanzado locaciones
  const filteredL = useMemo(() => locaciones.filter(l => {
    const matchName = l.nombre.toLowerCase().includes(searchL.toLowerCase())
    const matchSalones = minSalonesL ? l.salones >= parseInt(minSalonesL) : true
    const matchCapacidad = minCapacidadL ? (parseInt(l.capacidad) >= parseInt(minCapacidadL)) : true
    return matchName && matchSalones && matchCapacidad
  }), [searchL, minSalonesL, minCapacidadL])

  // Filtro avanzado gubernamentales
  const filteredG = useMemo(() => gubernamentales.filter(g => {
    const matchName = g.nombre.toLowerCase().includes(searchG.toLowerCase())
    const matchSalones = minSalonesG ? g.salones >= parseInt(minSalonesG) : true
    const matchCapacidad = minCapacidadG ? (parseInt(g.capacidad) >= parseInt(minCapacidadG)) : true
    return matchName && matchSalones && matchCapacidad
  }), [searchG, minSalonesG, minCapacidadG])

  // Filtro avanzado bares
  const filteredB = useMemo(() => bares.filter(b => {
    return b.nombre.toLowerCase().includes(searchB.toLowerCase())
  }), [searchB])

  // Filtros deportivas
  const [searchD, setSearchD] = useState('')
  const [selectedDep, setSelectedDep] = useState(null)
  const [isOpenD, setIsOpenD] = useState(false)

  // Filtro avanzado deportivas
  const filteredD = useMemo(() => deportivas.filter(d => {
    return d.nombre.toLowerCase().includes(searchD.toLowerCase())
  }), [searchD])

  // Filtros bureau
  const [searchBu, setSearchBu] = useState('')
  const [selectedBu, setSelectedBu] = useState(null)
  const [isOpenBu, setIsOpenBu] = useState(false)

  // Filtro avanzado bureau
  const filteredBu = useMemo(() => bureau.filter(b => {
    return b.nombre.toLowerCase().includes(searchBu.toLowerCase())
  }), [searchBu])

  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { name: 'Hoteles', icon: <FaHotel />, color: 'red', data: filtered },
    { name: 'Asociaciones', icon: <FaUsers />, color: 'blue', data: filteredA },
    { name: 'Privados', icon: <FaBuilding />, color: 'green', data: filteredP },
    { name: 'Locaciones', icon: <FaMapMarkerAlt />, color: 'red', data: filteredL },
    { name: 'Gubernamentales', icon: <FaUniversity />, color: 'blue', data: filteredG },
    { name: 'Bares', icon: <FaGlassCheers />, color: 'green', data: filteredB },
    { name: 'Deportivas', icon: <FaFutbol />, color: 'red', data: filteredD },
    { name: 'Bureau', icon: <FaBriefcase />, color: 'blue', data: filteredBu }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="font-source min-h-screen bg-gray-50">
      {/* Hero banner */}
      <section className="relative rounded-3xl max-w-7xl mx-auto mt-8 h-[400px] overflow-hidden">
        <img src="/fondo4.png" alt="Banner" className="absolute inset-0 w-full h-full object-cover opacity-90" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center text-white">
          <span className="text-xs uppercase tracking-widest">Sedes para Eventos</span>
          <h1 className="mt-4 text-5xl font-bevietnam">Hoteles con Salones</h1>
        </div>
      </section>

      {!selectedCategory ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center mx-auto mt-12" style={{maxWidth: '1100px'}}>
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              name={category.name}
              icon={category.icon}
              onClick={() => setSelectedCategory(category)}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      ) : (
        <>
          <div className="max-w-7xl mx-auto flex items-start">
            <button
              onClick={() => setSelectedCategory(null)}
              className="mt-8 ml-8 px-6 py-2 bg-green-800 text-white rounded-full font-bevietnam font-semibold text-base shadow hover:bg-green-900 transition-colors"
            >
              Volver a categorías
            </button>
          </div>
          {/* Renderizar la lista correspondiente a la categoría seleccionada */}
          {selectedCategory.name === 'Hoteles' && (
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 mt-12 px-2 justify-center items-start">
              {/* Sidebar de filtros hoteles */}
              <aside className="md:w-1/4 w-full bg-white rounded-2xl shadow-lg p-6 mb-8 md:mb-0">
                <h2 className="text-lg font-semibold mb-4 text-green-800">Filtrar hoteles</h2>
                <input
                  type="text"
                  placeholder="Buscar por nombre..."
                  className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                <label className="block mb-2 text-sm font-medium">Cantidad mínima de salones</label>
                <input
                  type="number"
                  min="1"
                  className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                  value={minSalones}
                  onChange={e => setMinSalones(e.target.value)}
                />
                <label className="block mb-2 text-sm font-medium">Capacidad mínima</label>
                <input
                  type="number"
                  min="1"
                  className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                  value={minCapacidad}
                  onChange={e => setMinCapacidad(e.target.value)}
                />
              </aside>
              <main className="md:w-3/4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.length === 0 && (
                  <div className="col-span-full text-center text-gray-500">No se encontraron hoteles con esos filtros.</div>
                )}
                {filtered.map((h, i) => (
                  <HotelCard key={i} hotel={h} onClick={() => { setSelectedHotel(h); setIsOpen(true) }} />
                ))}
              </main>
            </div>
          )}
          {/* Repetir para otras categorías */}
          {selectedCategory.name === 'Asociaciones' && (
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 mt-12 px-2 justify-center items-start">
              {/* Sidebar de filtros asociaciones */}
              <aside className="md:w-1/4 w-full bg-white rounded-2xl shadow-lg p-6 mb-8 md:mb-0">
                <h2 className="text-lg font-semibold mb-4 text-green-800">Filtrar asociaciones</h2>
                <input
                  type="text"
                  placeholder="Buscar por nombre..."
                  className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                  value={searchA}
                  onChange={e => setSearchA(e.target.value)}
                />
                <label className="block mb-2 text-sm font-medium">Cantidad mínima de salones</label>
                <input
                  type="number"
                  min="1"
                  className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                  value={minSalonesA}
                  onChange={e => setMinSalonesA(e.target.value)}
                />
                <label className="block mb-2 text-sm font-medium">Capacidad mínima</label>
                <input
                  type="number"
                  min="1"
                  className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                  value={minCapacidadA}
                  onChange={e => setMinCapacidadA(e.target.value)}
                />
              </aside>
              <main className="md:w-3/4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredA.length === 0 && (
                  <div className="col-span-full text-center text-gray-500">No se encontraron asociaciones con esos filtros.</div>
                )}
                {filteredA.map((a, i) => (
                  <AsociacionCard key={i} asoc={a} onClick={() => { setSelectedAsoc(a); setIsOpenA(true) }} />
                ))}
              </main>
            </div>
          )}
          {/* Repetir para otras categorías */}
          {selectedCategory.name === 'Privados' && (
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 mt-12 px-2 justify-center items-start">
              {/* Sidebar de filtros privados */}
              <aside className="md:w-1/4 w-full bg-white rounded-2xl shadow-lg p-6 mb-8 md:mb-0">
                <h2 className="text-lg font-semibold mb-4 text-green-800">Filtrar privados</h2>
                <input
                  type="text"
                  placeholder="Buscar por nombre..."
                  className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                  value={searchP}
                  onChange={e => setSearchP(e.target.value)}
                />
                <label className="block mb-2 text-sm font-medium">Cantidad mínima de salones</label>
                <input
                  type="number"
                  min="1"
                  className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                  value={minSalonesP}
                  onChange={e => setMinSalonesP(e.target.value)}
                />
                <label className="block mb-2 text-sm font-medium">Capacidad mínima</label>
                <input
                  type="number"
                  min="1"
                  className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                  value={minCapacidadP}
                  onChange={e => setMinCapacidadP(e.target.value)}
                />
              </aside>
              <main className="md:w-3/4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredP.length === 0 && (
                  <div className="col-span-full text-center text-gray-500">No se encontraron privados con esos filtros.</div>
                )}
                {filteredP.map((p, i) => (
                  <PrivadoCard key={i} priv={p} onClick={() => { setSelectedPriv(p); setIsOpenP(true) }} />
                ))}
              </main>
            </div>
          )}
          {/* Repetir para otras categorías */}
          {selectedCategory.name === 'Locaciones' && (
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 mt-12 px-2 justify-center items-start">
              {/* Sidebar de filtros locaciones */}
              <aside className="md:w-1/4 w-full bg-white rounded-2xl shadow-lg p-6 mb-8 md:mb-0">
                <h2 className="text-lg font-semibold mb-4 text-green-800">Filtrar locaciones</h2>
                <input
                  type="text"
                  placeholder="Buscar por nombre..."
                  className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                  value={searchL}
                  onChange={e => setSearchL(e.target.value)}
                />
                <label className="block mb-2 text-sm font-medium">Cantidad mínima de salones</label>
                <input
                  type="number"
                  min="1"
                  className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                  value={minSalonesL}
                  onChange={e => setMinSalonesL(e.target.value)}
                />
                <label className="block mb-2 text-sm font-medium">Capacidad mínima</label>
                <input
                  type="number"
                  min="1"
                  className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                  value={minCapacidadL}
                  onChange={e => setMinCapacidadL(e.target.value)}
                />
              </aside>
              <main className="md:w-3/4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredL.length === 0 && (
                  <div className="col-span-full text-center text-gray-500">No se encontraron locaciones con esos filtros.</div>
                )}
                {filteredL.map((l, i) => (
                  <LocacionCard key={i} loc={l} onClick={() => { setSelectedLoc(l); setIsOpenL(true) }} />
                ))}
              </main>
            </div>
          )}
          {/* Repetir para otras categorías */}
          {selectedCategory.name === 'Gubernamentales' && (
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 mt-12 px-2 justify-center items-start">
              {/* Sidebar de filtros gubernamentales */}
              <aside className="md:w-1/4 w-full bg-white rounded-2xl shadow-lg p-6 mb-8 md:mb-0">
                <h2 className="text-lg font-semibold mb-4 text-green-800">Filtrar gubernamentales</h2>
                <input
                  type="text"
                  placeholder="Buscar por nombre..."
                  className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                  value={searchG}
                  onChange={e => setSearchG(e.target.value)}
                />
                <label className="block mb-2 text-sm font-medium">Cantidad mínima de salones</label>
                <input
                  type="number"
                  min="1"
                  className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                  value={minSalonesG}
                  onChange={e => setMinSalonesG(e.target.value)}
                />
                <label className="block mb-2 text-sm font-medium">Capacidad mínima</label>
                <input
                  type="number"
                  min="1"
                  className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                  value={minCapacidadG}
                  onChange={e => setMinCapacidadG(e.target.value)}
                />
              </aside>
              <main className="md:w-3/4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredG.length === 0 && (
                  <div className="col-span-full text-center text-gray-500">No se encontraron gubernamentales con esos filtros.</div>
                )}
                {filteredG.map((g, i) => (
                  <GubernamentalCard key={i} gov={g} onClick={() => { setSelectedGov(g); setIsOpenG(true) }} />
                ))}
              </main>
            </div>
          )}
          {/* Repetir para otras categorías */}
          {selectedCategory.name === 'Bares' && (
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 mt-12 px-2 justify-center items-start">
              {/* Sidebar de filtros bares */}
              <aside className="md:w-1/4 w-full bg-white rounded-2xl shadow-lg p-6 mb-8 md:mb-0">
                <h2 className="text-lg font-semibold mb-4 text-green-800">Filtrar bares y restaurantes</h2>
                <input
                  type="text"
                  placeholder="Buscar por nombre..."
                  className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                  value={searchB}
                  onChange={e => setSearchB(e.target.value)}
                />
              </aside>
              <main className="md:w-3/4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredB.length === 0 && (
                  <div className="col-span-full text-center text-gray-500">No se encontraron bares o restaurantes con ese nombre.</div>
                )}
                {filteredB.map((b, i) => (
                  <BarCard key={i} bar={b} onClick={() => { setSelectedBar(b); setIsOpenB(true) }} />
                ))}
              </main>
            </div>
          )}
          {/* Repetir para otras categorías */}
          {selectedCategory.name === 'Deportivas' && (
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 mt-12 px-2 justify-center items-start">
              {/* Sidebar de filtros deportivas */}
              <aside className="md:w-1/4 w-full bg-white rounded-2xl shadow-lg p-6 mb-8 md:mb-0">
                <h2 className="text-lg font-semibold mb-4 text-green-800">Filtrar sedes deportivas</h2>
                <input
                  type="text"
                  placeholder="Buscar por nombre..."
                  className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                  value={searchD}
                  onChange={e => setSearchD(e.target.value)}
                />
              </aside>
              <main className="md:w-3/4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {filteredD.length === 0 && (
                  <div className="col-span-full text-center text-gray-500">No se encontraron sedes deportivas con ese nombre.</div>
                )}
                {filteredD.map((d, i) => (
                  <DeportivaCard key={i} dep={d} onClick={() => { setSelectedDep(d); setIsOpenD(true) }} />
                ))}
              </main>
            </div>
          )}
          {/* Repetir para otras categorías */}
          {selectedCategory.name === 'Bureau' && (
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 mt-12 px-2 justify-center items-start">
              {/* Sidebar de filtros bureau */}
              <aside className="md:w-1/4 w-full bg-white rounded-2xl shadow-lg p-6 mb-8 md:mb-0">
                <h2 className="text-lg font-semibold mb-4 text-green-800">Filtrar bureau</h2>
                <input
                  type="text"
                  placeholder="Buscar por nombre..."
                  className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                  value={searchBu}
                  onChange={e => setSearchBu(e.target.value)}
                />
              </aside>
              <main className="md:w-3/4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBu.length === 0 && (
                  <div className="col-span-full text-center text-gray-500">No se encontraron empresas con ese nombre.</div>
                )}
                {filteredBu.map((b, i) => (
                  <BureauCard key={i} bureau={b} onClick={() => { setSelectedBu(b); setIsOpenBu(true) }} />
                ))}
              </main>
            </div>
          )}
        </>
      )}

      {/* Drawer de detalles hoteles */}
      <Transition.Root show={isOpen} as={React.Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300" enterFrom="translate-x-full" enterTo="translate-x-0"
            leave="ease-in duration-200" leaveFrom="translate-x-0" leaveTo="translate-x-full"
          >
            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <Dialog.Panel className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl p-8 overflow-y-auto">
                  <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-green-800 text-2xl"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaTimes />
                  </button>
                  {selectedHotel && (
                    <div>
                      <h2 className="text-2xl font-bold text-green-800 mb-2 flex items-center"><FaHotel className="mr-2" />{selectedHotel.nombre}</h2>
                      <div className="mb-4 text-gray-600">{selectedHotel.tipo}</div>
                      <div className="mb-4">
                        <span className="block text-sm text-gray-500">Dirección:</span>
                        <span className="block font-medium text-gray-800"><FaMapMarkerAlt className="inline mr-1" />{selectedHotel.direccion}</span>
                      </div>
                      <div className="mb-4">
                        <span className="block text-sm text-gray-500">Teléfono:</span>
                        <span className="block font-medium text-gray-800"><FaPhone className="inline mr-1" />{selectedHotel.telefono}</span>
                      </div>
                      {selectedHotel.email && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Email:</span>
                          <a href={`mailto:${selectedHotel.email}`} className="block font-medium text-green-800 hover:underline"><FaEnvelope className="inline mr-1" />{selectedHotel.email}</a>
                        </div>
                      )}
                      {selectedHotel.web && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Web:</span>
                          <a href={selectedHotel.web.startsWith('http') ? selectedHotel.web : `https://${selectedHotel.web}`} target="_blank" rel="noopener noreferrer" className="block font-medium text-green-800 hover:underline flex items-center">{selectedHotel.web} <FaExternalLinkAlt className="ml-1" /></a>
                        </div>
                      )}
                      <div className="mb-4">
                        <span className="block text-sm text-gray-500">Modalidades:</span>
                        <span className="block font-medium text-gray-800">{selectedHotel.modalidades}</span>
                      </div>
                      <div className="mb-4">
                        <span className="block text-sm text-gray-500">Metros cuadrados:</span>
                        <span className="block font-medium text-gray-800">{selectedHotel.metros || 'No especificado'}</span>
                      </div>
                      <div className="mb-4">
                        <span className="block text-sm text-gray-500">Capacidad:</span>
                        <span className="block font-medium text-gray-800">{selectedHotel.capacidad || 'No especificado'}</span>
                      </div>
                      {/* Gráfico de capacidades si aplica */}
                      {getCapacidadData(selectedHotel) && (
                        <div className="mb-8">
                          <span className="block text-sm text-gray-500 mb-2">Capacidad por salón:</span>
                          <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={getCapacidadData(selectedHotel)} layout="vertical" margin={{ left: 20, right: 20 }}>
                              <XAxis type="number" hide />
                              <YAxis dataKey="tipo" type="category" width={120} />
                              <Tooltip />
                              <Bar dataKey="capacidad" fill="#166534">
                                <LabelList dataKey="capacidad" position="right" />
                              </Bar>
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      )}
                    </div>
                  )}
                </Dialog.Panel>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      {/* Drawer de detalles asociaciones */}
      <Transition.Root show={isOpenA} as={React.Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpenA(false)}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300" enterFrom="translate-x-full" enterTo="translate-x-0"
            leave="ease-in duration-200" leaveFrom="translate-x-0" leaveTo="translate-x-full"
          >
            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <Dialog.Panel className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl p-8 overflow-y-auto">
                  <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-green-800 text-2xl"
                    onClick={() => setIsOpenA(false)}
                  >
                    <FaTimes />
                  </button>
                  {selectedAsoc && (
                    <div>
                      <h2 className="text-2xl font-bold text-green-800 mb-2 flex items-center"><FaUsers className="mr-2" />{selectedAsoc.nombre}</h2>
                      <div className="mb-4 text-gray-600">{selectedAsoc.tipo}</div>
                      <div className="mb-4">
                        <span className="block text-sm text-gray-500">Dirección:</span>
                        <span className="block font-medium text-gray-800"><FaMapMarkerAlt className="inline mr-1" />{selectedAsoc.direccion}</span>
                      </div>
                      {selectedAsoc.telefono && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Teléfono:</span>
                          <span className="block font-medium text-gray-800"><FaPhone className="inline mr-1" />{selectedAsoc.telefono}</span>
                        </div>
                      )}
                      {selectedAsoc.email && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Email:</span>
                          <a href={`mailto:${selectedAsoc.email}`} className="block font-medium text-green-800 hover:underline"><FaEnvelope className="inline mr-1" />{selectedAsoc.email}</a>
                        </div>
                      )}
                      {selectedAsoc.web && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Web:</span>
                          <a href={selectedAsoc.web.startsWith('http') ? selectedAsoc.web : `https://${selectedAsoc.web}`} target="_blank" rel="noopener noreferrer" className="block font-medium text-green-800 hover:underline flex items-center">{selectedAsoc.web} <FaExternalLinkAlt className="ml-1" /></a>
                        </div>
                      )}
                      {selectedAsoc.modalidades && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Modalidades:</span>
                          <span className="block font-medium text-gray-800">{selectedAsoc.modalidades}</span>
                        </div>
                      )}
                      {selectedAsoc.metros && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Metros cuadrados:</span>
                          <span className="block font-medium text-gray-800">{selectedAsoc.metros}</span>
                        </div>
                      )}
                      {selectedAsoc.capacidad && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Capacidad:</span>
                          <span className="block font-medium text-gray-800">{selectedAsoc.capacidad}</span>
                        </div>
                      )}
                    </div>
                  )}
                </Dialog.Panel>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      {/* Drawer de detalles privados */}
      <Transition.Root show={isOpenP} as={React.Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpenP(false)}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300" enterFrom="translate-x-full" enterTo="translate-x-0"
            leave="ease-in duration-200" leaveFrom="translate-x-0" leaveTo="translate-x-full"
          >
            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <Dialog.Panel className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl p-8 overflow-y-auto">
                  <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-green-800 text-2xl"
                    onClick={() => setIsOpenP(false)}
                  >
                    <FaTimes />
                  </button>
                  {selectedPriv && (
                    <div>
                      <h2 className="text-2xl font-bold text-green-800 mb-2 flex items-center"><FaBuilding className="mr-2" />{selectedPriv.nombre}</h2>
                      <div className="mb-4 text-gray-600">{selectedPriv.tipo}</div>
                      <div className="mb-4">
                        <span className="block text-sm text-gray-500">Dirección:</span>
                        <span className="block font-medium text-gray-800"><FaMapMarkerAlt className="inline mr-1" />{selectedPriv.direccion}</span>
                      </div>
                      {selectedPriv.telefono && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Teléfono:</span>
                          <span className="block font-medium text-gray-800"><FaPhone className="inline mr-1" />{selectedPriv.telefono}</span>
                        </div>
                      )}
                      {selectedPriv.email && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Email:</span>
                          <a href={`mailto:${selectedPriv.email}`} className="block font-medium text-green-800 hover:underline"><FaEnvelope className="inline mr-1" />{selectedPriv.email}</a>
                        </div>
                      )}
                      {selectedPriv.web && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Web:</span>
                          <a href={selectedPriv.web.startsWith('http') ? selectedPriv.web : `https://${selectedPriv.web}`} target="_blank" rel="noopener noreferrer" className="block font-medium text-green-800 hover:underline flex items-center">{selectedPriv.web} <FaExternalLinkAlt className="ml-1" /></a>
                        </div>
                      )}
                      {selectedPriv.modalidades && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Modalidades:</span>
                          <span className="block font-medium text-gray-800">{selectedPriv.modalidades}</span>
                        </div>
                      )}
                      {selectedPriv.metros && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Metros cuadrados:</span>
                          <span className="block font-medium text-gray-800">{selectedPriv.metros}</span>
                        </div>
                      )}
                      {selectedPriv.capacidad && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Capacidad:</span>
                          <span className="block font-medium text-gray-800">{selectedPriv.capacidad}</span>
                        </div>
                      )}
                      {/* Gráfico de capacidades si aplica */}
                      {getCapacidadDataPriv(selectedPriv) && (
                        <div className="mb-8">
                          <span className="block text-sm text-gray-500 mb-2">Capacidad por salón:</span>
                          <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={getCapacidadDataPriv(selectedPriv)} layout="vertical" margin={{ left: 20, right: 20 }}>
                              <XAxis type="number" hide />
                              <YAxis dataKey="tipo" type="category" width={120} />
                              <Tooltip />
                              <Bar dataKey="capacidad" fill="#166534">
                                <LabelList dataKey="capacidad" position="right" />
                              </Bar>
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      )}
                    </div>
                  )}
                </Dialog.Panel>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      {/* Drawer de detalles locaciones */}
      <Transition.Root show={isOpenL} as={React.Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpenL(false)}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300" enterFrom="translate-x-full" enterTo="translate-x-0"
            leave="ease-in duration-200" leaveFrom="translate-x-0" leaveTo="translate-x-full"
          >
            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <Dialog.Panel className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl p-8 overflow-y-auto">
                  <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-green-800 text-2xl"
                    onClick={() => setIsOpenL(false)}
                  >
                    <FaTimes />
                  </button>
                  {selectedLoc && (
                    <div>
                      <h2 className="text-2xl font-bold text-green-800 mb-2 flex items-center"><FaBuilding className="mr-2" />{selectedLoc.nombre}</h2>
                      <div className="mb-4 text-gray-600">{selectedLoc.tipo}</div>
                      <div className="mb-4">
                        <span className="block text-sm text-gray-500">Dirección:</span>
                        <span className="block font-medium text-gray-800"><FaMapMarkerAlt className="inline mr-1" />{selectedLoc.direccion}</span>
                      </div>
                      {selectedLoc.telefono && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Teléfono:</span>
                          <span className="block font-medium text-gray-800"><FaPhone className="inline mr-1" />{selectedLoc.telefono}</span>
                        </div>
                      )}
                      {selectedLoc.email && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Email:</span>
                          <a href={`mailto:${selectedLoc.email}`} className="block font-medium text-green-800 hover:underline"><FaEnvelope className="inline mr-1" />{selectedLoc.email}</a>
                        </div>
                      )}
                      {selectedLoc.web && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Web:</span>
                          <a href={selectedLoc.web.startsWith('http') ? selectedLoc.web : `https://${selectedLoc.web}`} target="_blank" rel="noopener noreferrer" className="block font-medium text-green-800 hover:underline flex items-center">{selectedLoc.web} <FaExternalLinkAlt className="ml-1" /></a>
                        </div>
                      )}
                      {selectedLoc.modalidades && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Modalidades:</span>
                          <span className="block font-medium text-gray-800">{selectedLoc.modalidades}</span>
                        </div>
                      )}
                      {selectedLoc.metros && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Metros cuadrados:</span>
                          <span className="block font-medium text-gray-800">{selectedLoc.metros}</span>
                        </div>
                      )}
                      {selectedLoc.capacidad && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Capacidad:</span>
                          <span className="block font-medium text-gray-800">{selectedLoc.capacidad}</span>
                        </div>
                      )}
                      {/* Gráfico de capacidades si aplica */}
                      {getCapacidadDataLoc(selectedLoc) && (
                        <div className="mb-8">
                          <span className="block text-sm text-gray-500 mb-2">Capacidad por salón:</span>
                          <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={getCapacidadDataLoc(selectedLoc)} layout="vertical" margin={{ left: 20, right: 20 }}>
                              <XAxis type="number" hide />
                              <YAxis dataKey="tipo" type="category" width={120} />
                              <Tooltip />
                              <Bar dataKey="capacidad" fill="#166534">
                                <LabelList dataKey="capacidad" position="right" />
                              </Bar>
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      )}
                    </div>
                  )}
                </Dialog.Panel>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      {/* Drawer de detalles gubernamentales */}
      <Transition.Root show={isOpenG} as={React.Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpenG(false)}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300" enterFrom="translate-x-full" enterTo="translate-x-0"
            leave="ease-in duration-200" leaveFrom="translate-x-0" leaveTo="translate-x-full"
          >
            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <Dialog.Panel className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl p-8 overflow-y-auto">
                  <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-green-800 text-2xl"
                    onClick={() => setIsOpenG(false)}
                  >
                    <FaTimes />
                  </button>
                  {selectedGov && (
                    <div>
                      <h2 className="text-2xl font-bold text-green-800 mb-2 flex items-center"><FaBuilding className="mr-2" />{selectedGov.nombre}</h2>
                      <div className="mb-4 text-gray-600">{selectedGov.tipo}</div>
                      <div className="mb-4">
                        <span className="block text-sm text-gray-500">Dirección:</span>
                        <span className="block font-medium text-gray-800"><FaMapMarkerAlt className="inline mr-1" />{selectedGov.direccion}</span>
                      </div>
                      {selectedGov.telefono && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Teléfono:</span>
                          <span className="block font-medium text-gray-800"><FaPhone className="inline mr-1" />{selectedGov.telefono}</span>
                        </div>
                      )}
                      {selectedGov.email && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Email:</span>
                          <a href={`mailto:${selectedGov.email}`} className="block font-medium text-green-800 hover:underline"><FaEnvelope className="inline mr-1" />{selectedGov.email}</a>
                        </div>
                      )}
                      {selectedGov.web && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Web:</span>
                          <a href={selectedGov.web.startsWith('http') ? selectedGov.web : `https://${selectedGov.web}`} target="_blank" rel="noopener noreferrer" className="block font-medium text-green-800 hover:underline flex items-center">{selectedGov.web} <FaExternalLinkAlt className="ml-1" /></a>
                        </div>
                      )}
                      {selectedGov.modalidades && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Modalidades:</span>
                          <span className="block font-medium text-gray-800">{selectedGov.modalidades}</span>
                        </div>
                      )}
                      {selectedGov.metros && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Metros cuadrados:</span>
                          <span className="block font-medium text-gray-800">{selectedGov.metros}</span>
                        </div>
                      )}
                      {selectedGov.capacidad && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Capacidad:</span>
                          <span className="block font-medium text-gray-800">{selectedGov.capacidad}</span>
                        </div>
                      )}
                      {/* Gráfico de capacidades si aplica */}
                      {getCapacidadDataGov(selectedGov) && (
                        <div className="mb-8">
                          <span className="block text-sm text-gray-500 mb-2">Capacidad por salón:</span>
                          <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={getCapacidadDataGov(selectedGov)} layout="vertical" margin={{ left: 20, right: 20 }}>
                              <XAxis type="number" hide />
                              <YAxis dataKey="tipo" type="category" width={120} />
                              <Tooltip />
                              <Bar dataKey="capacidad" fill="#166534">
                                <LabelList dataKey="capacidad" position="right" />
                              </Bar>
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      )}
                    </div>
                  )}
                </Dialog.Panel>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      {/* Drawer de detalles bares */}
      <Transition.Root show={isOpenB} as={React.Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpenB(false)}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300" enterFrom="translate-x-full" enterTo="translate-x-0"
            leave="ease-in duration-200" leaveFrom="translate-x-0" leaveTo="translate-x-full"
          >
            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <Dialog.Panel className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl p-8 overflow-y-auto">
                  <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-green-800 text-2xl"
                    onClick={() => setIsOpenB(false)}
                  >
                    <FaTimes />
                  </button>
                  {selectedBar && (
                    <div>
                      <h2 className="text-2xl font-bold text-green-800 mb-2 flex items-center"><FaBuilding className="mr-2" />{selectedBar.nombre}</h2>
                      <div className="mb-4">
                        <span className="block text-sm text-gray-500">Dirección:</span>
                        <span className="block font-medium text-gray-800"><FaMapMarkerAlt className="inline mr-1" />{selectedBar.direccion}</span>
                      </div>
                      {selectedBar.telefono && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Teléfono:</span>
                          <span className="block font-medium text-gray-800"><FaPhone className="inline mr-1" />{selectedBar.telefono}</span>
                        </div>
                      )}
                      {selectedBar.email && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Email:</span>
                          <a href={`mailto:${selectedBar.email}`} className="block font-medium text-green-800 hover:underline"><FaEnvelope className="inline mr-1" />{selectedBar.email}</a>
                        </div>
                      )}
                      {selectedBar.web && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Web:</span>
                          <a href={selectedBar.web.startsWith('http') ? selectedBar.web : `https://${selectedBar.web}`} target="_blank" rel="noopener noreferrer" className="block font-medium text-green-800 hover:underline flex items-center">{selectedBar.web} <FaExternalLinkAlt className="ml-1" /></a>
                        </div>
                      )}
                    </div>
                  )}
                </Dialog.Panel>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      {/* Drawer de detalles deportivas */}
      <Transition.Root show={isOpenD} as={React.Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpenD(false)}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300" enterFrom="translate-x-full" enterTo="translate-x-0"
            leave="ease-in duration-200" leaveFrom="translate-x-0" leaveTo="translate-x-full"
          >
            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <Dialog.Panel className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl p-8 overflow-y-auto">
                  <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-green-800 text-2xl"
                    onClick={() => setIsOpenD(false)}
                  >
                    <FaTimes />
                  </button>
                  {selectedDep && (
                    <div>
                      <h2 className="text-2xl font-bold text-green-800 mb-2 flex items-center"><FaBuilding className="mr-2" />{selectedDep.nombre}</h2>
                      <div className="mb-4">
                        <span className="block text-sm text-gray-500">Dirección:</span>
                        <span className="block font-medium text-gray-800"><FaMapMarkerAlt className="inline mr-1" />{selectedDep.direccion}</span>
                      </div>
                      {selectedDep.telefono && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Teléfono:</span>
                          <span className="block font-medium text-gray-800"><FaPhone className="inline mr-1" />{selectedDep.telefono}</span>
                        </div>
                      )}
                      {selectedDep.email && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Email:</span>
                          <a href={`mailto:${selectedDep.email}`} className="block font-medium text-green-800 hover:underline"><FaEnvelope className="inline mr-1" />{selectedDep.email}</a>
                        </div>
                      )}
                      {selectedDep.web && (
                        <div className="mb-4">
                          <span className="block text-sm text-gray-500">Web:</span>
                          <a href={selectedDep.web.startsWith('http') ? selectedDep.web : `https://${selectedDep.web}`} target="_blank" rel="noopener noreferrer" className="block font-medium text-green-800 hover:underline flex items-center">{selectedDep.web} <FaExternalLinkAlt className="ml-1" /></a>
                        </div>
                      )}
                    </div>
                  )}
                </Dialog.Panel>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      {/* Drawer de detalles bureau */}
      <Transition.Root show={isOpenBu} as={React.Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpenBu(false)}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300" enterFrom="translate-x-full" enterTo="translate-x-0"
            leave="ease-in duration-200" leaveFrom="translate-x-0" leaveTo="translate-x-full"
          >
            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <Dialog.Panel className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl p-8 overflow-y-auto">
                  <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-green-800 text-2xl"
                    onClick={() => setIsOpenBu(false)}
                  >
                    <FaTimes />
                  </button>
                  {selectedBu && (
                    <div>
                      <h2 className="text-2xl font-bold text-green-800 mb-2 flex items-center"><FaBuilding className="mr-2" />{selectedBu.nombre}</h2>
                      <div className="mb-4">
                        <span className="block text-sm text-gray-500">Rubro:</span>
                        <span className="block font-medium text-gray-800">{selectedBu.rubro}</span>
                      </div>
                      <div className="mb-4">
                        <span className="block text-sm text-gray-500">Contacto:</span>
                        <span className="block font-medium text-gray-800">{selectedBu.contacto}</span>
                      </div>
                      <div className="mb-4">
                        <span className="block text-sm text-gray-500">Email:</span>
                        <a href={`mailto:${selectedBu.email}`} className="block font-medium text-green-800 hover:underline"><FaEnvelope className="inline mr-1" />{selectedBu.email}</a>
                      </div>
                    </div>
                  )}
                </Dialog.Panel>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </div>
  )
} 