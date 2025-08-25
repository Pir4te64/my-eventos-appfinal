import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, MapPinIcon, PhoneIcon, EnvelopeIcon, GlobeAltIcon, ShareIcon } from '@heroicons/react/24/outline';

const SEDES = [
  { nombre: 'Autódromo Rosamonte', direccion: 'Calle (79) y Av. J M Fangio', telefono: '', email: 'autodromoposadas@gmail.com', web: 'https://automovilismomisionero.com.ar/', redes: 'Instagram: @autodromorosamonte Facebook: @AutodromoRosamonte' },
  { nombre: 'Balneario El Brete', direccion: 'Av Costanera - Av. Almafuerte', telefono: '', email: '', web: 'https://posadas.gov.ar/siemprelinda/elbrete.php', redes: '' },
  { nombre: 'Cancha Arena Paddle', direccion: 'Av.Quaranta 3753', telefono: 'WhatsApp: 376 433-3036', email: '', web: 'https://arenapadel.com.ar/', redes: 'Instagram: @arena_posadas_padel Facebook: @arenaposadaspadel' },
  { nombre: 'Cancha Padel House', direccion: 'Av. Maipú 2813', telefono: '3764502076', email: '', web: '', redes: 'Instagram: @padel.housee' },
  { nombre: 'Casa del Docente', direccion: 'Monteaguado 1569', telefono: '3765268885', email: 'lacasadeldocente.hotel@gmail.com', web: '', redes: '@lacasadeldocente' },
  { nombre: 'Centro de Cazadores', direccion: 'Avenida las Américas 40111 y ex ruta 213', telefono: '0376 411-5344 / whatsapp +54 376420295784', email: 'comisiondirectiva2021@gmail.com', web: 'https://cccm.com.ar/', redes: 'Instagram: @clubcentrodecazadoresoficial Facebook: @clubcentrodecazadoresoficial X: @cccazadores' },
  { nombre: 'Centro Provincial de Alto Rendimiento - CEPARD', direccion: 'José Sorsana 5400. Ruta Nacional 12 y acceso al Parque Industrial', telefono: '0376 442-6530', email: 'mindeportesmesadeentrada@gmail.com', web: 'https://deportes.misiones.gob.ar/', redes: 'Instagram: @deportes.misiones' },
  { nombre: 'Club Alemán', direccion: 'Av. Corrientes 2540', telefono: '0376 463-3561', email: '', web: '', redes: '' },
  { nombre: 'Club Atlético Bartolomé Mitre', direccion: 'La Rioja 2455', telefono: '0376 445-6149', email: 'mitremnescomunicacion@gmail.com', web: '', redes: 'Instagram: @mitre_futbol_mnes Facebook: @Club-atlético-Bartolomé-Mitre' },
  { nombre: 'Club Atlético Huracán', direccion: 'Av. Sta. Catalina y Av. López y Planes', telefono: '0376 443-5806', email: '', web: '', redes: 'Instagram: @cahuracanposadas' },
  { nombre: 'Club Atlético La Picada', direccion: 'Av. Centenario 7905', telefono: '0376 446-5708', email: '', web: '', redes: 'Instagram: @clublapicada  Facebook: @eltrendeloeste' },
  { nombre: 'Club Atlético Posadas', direccion: '22 de diciembre 3134', telefono: '0376 418-7863', email: '', web: '', redes: 'Instagram: @clubatleticoposadasoficial   Facebook: @Club.Atletico.Posadas.Oficial' },
  { nombre: 'Club Brown - Club Jorge Gibson Brown', direccion: 'Avenida Cabred N°250', telefono: '', email: 'cdjgb@hotmail.com.ar', web: '', redes: 'Instagram: @club.jorgegibsonbrown    Facebook: @ClubDeportivoJorgeGibsonBrown' },
  { nombre: 'Club Capri', direccion: 'Hipólito Irigoyen 2735', telefono: '0376 442-5853', email: 'secretariacapri@gmail.com', web: '', redes: 'Instagram: @clubcapriposadas    Facebook: @ClubCapriPosadas  X: @club_capri' },
  { nombre: 'Club Capri', direccion: 'Av. Tambor de Tacuarí 8024', telefono: '0376 421-8844', email: 'secretariacapri@gmail.com', web: '', redes: 'Instagram: @clubcapriposadas    Facebook: @ClubCapriPosadas  X: @club_capri' },
  { nombre: 'Club Crucero del Norte (COMPLEJO CRUCERO PETRI)', direccion: 'Paraje Santa Inés. Ruta 206', telefono: '+54 376 44 80 019', email: '', web: 'www.clubcrucerodelnorte.com.ar', redes: 'Facebook: @ComplejoCrucerodelNorte' },
  { nombre: 'Club de Camioneros', direccion: 'Av. 147', telefono: '(0376) 4458340/89 /0800-555-0302', email: 'info@camionerosmisiones.com.ar', web: 'https://www.camionerosmisiones.com/', redes: 'Instagram: @sindicatocamionerosmnes Facebook: @CamionerosMisionesS X: @camioneros_mnes' },
  { nombre: 'Club de Canotaje Río Paraná', direccion: 'Av. Antártida Argentina 1071', telefono: '0376 502-2418', email: '', web: '', redes: 'Facebook: @canotaje.rioparana.5' },
  { nombre: 'Club de Educación', direccion: 'Calle 148 "A" Nº 5903 Bº Itaembé Miní', telefono: '0376 523-4311', email: 'clubeducacion29@gmail.com', web: '', redes: 'Facebook: @CLUBDEEDUCACION' },
  { nombre: 'Misiones Squash Club', direccion: 'Sarmiento 1245', telefono: '0376 442-5029', email: 'misionessquashprensa@hotmail.com', web: '', redes: 'Instagram: @club_misionessquash         Facebook: @misionessquash' },
  { nombre: 'Club Deportivo Guaraní Antonio Franco', direccion: 'Ramón García 190', telefono: '0376 442-6101', email: 'soysocio@clubguaraniaf.com.ar', web: 'https://www.clubguaraniaf.com.ar/', redes: 'Instagram: @guaraniantoniofranco Facebook: @GuaraniAntonioFrancoOficial' },
  { nombre: 'Club Hípico Cascos Rosados', direccion: 'Itaembé Guazú', telefono: '03764 - 717177', email: 'hipicocascorosado@gmail.com', web: '', redes: 'Instagram: @hipicocascorosado      Facebook: @Casco-Rosado-equitación' },
  { nombre: 'Club Hípico Militar Dragones Coronel Zelaya', direccion: 'Av. Leandro N. Alem 4120-4498', telefono: '0376 450-3106', email: '', web: '', redes: '' },
  { nombre: 'Club La Cantera', direccion: 'Av. Jauretche 5011', telefono: '0376 484-6587', email: 'info@fclacantera.com', web: '', redes: 'Facebook: @ClubLaCanteraFC' },
  { nombre: 'Club León Seró', direccion: 'Urquiza y Tomas Guido', telefono: '', email: '', web: '', redes: 'Instagram: @club_nautico_leon_sero     Facebook: @ClubNauticoLeonSero' },
  { nombre: 'Club Pira Pytá', direccion: 'Av. San Martín y Alma Fuerte Ch. 182', telefono: '0376 446-2063', email: 'clubpirapyta@yahoo.com.ar', web: '', redes: 'Instagram: @clubpirapyta         Facebook: @pirapytaclub' },
  { nombre: 'Club San Francisco', direccion: 'Av. Comandante Andresito 5420', telefono: '0376 505-1401', email: '', web: '', redes: 'Instagram: @sanfranciscofcmisiones    Facebook: @SanFranciscoMedicos' },
  { nombre: 'Club Sarmiento', direccion: 'Angel Acuña y Moritán', telefono: '0362 431-7234 / 0376 424-9110', email: '', web: '', redes: '' },
  { nombre: 'Club Tokio', direccion: 'Belgrano 339, Posadas,', telefono: '0376 443-2595', email: 'clubtokio@arnet.com.ar', web: '', redes: 'Instagram: @clubdstokio   Facebook: @clubdstokio' },
  { nombre: 'Complejo X3 Padel', direccion: 'Av. Salvador Miqueri 2860', telefono: '0376 15-522-2651', email: 'x3padelposadas@gmail.com', web: '', redes: 'Instagram: @portresoficial        Facebook: @portrespadel' },
  { nombre: 'Escuela de Vela Optinic', direccion: 'Av Antártida Arg 1133', telefono: '0376 456-5026', email: '', web: '', redes: 'Instagram: @optinic.com.ar              Facebook: @optinic' },
  { nombre: 'Hipódromo General Belgrano', direccion: 'Ruta 12 km 5', telefono: '0376 418-9421', email: '', web: '', redes: 'Facebook: @HipodromoGeneralBelgrano' },
  { nombre: 'Instituto del Deporte', direccion: 'Córdoba 69', telefono: '', email: '', web: '', redes: 'Instagram: @posadasdeportes    Facebook: @posadasdeportes     X: @posadasdeportes' },
  { nombre: 'Itapúa Tenis Club', direccion: 'Av. Corrientes 1357', telefono: '', email: '', web: '', redes: 'Facebook: @ItapuaTenisClubPosadas' },
  { nombre: 'Lomas Rugby Club', direccion: 'Av. Jauretche 5625', telefono: '3765-406762', email: 'lomasrugbyclubposadas@gmail.com', web: 'https://lomsrugbyclub.wordpress.com/', redes: 'Instagram: @lomasrugbyclubposadas Facebook: @LomasRugbyClubMisiones X: @LomasRugbyClub' },
  { nombre: 'Parque de la Ciudad', direccion: 'RN12 1335', telefono: '', email: '', web: '', redes: 'Instagram: @parquedelaciudad_posadas           Facebook: @Parque-de-la-Ciudad' },
  { nombre: 'Playa Costa Sur', direccion: 'Sector Costanera Sur', telefono: '0800 -8882483', email: '', web: 'https://posadas.gov.ar/siemprelinda/costasur.php', redes: '' },
  { nombre: 'Polideportivo Zaimán', direccion: 'Ruta Nacional 12 y calle Barrio San Jorge', telefono: '', email: '', web: '', redes: 'Instagram: @sub.educativodeportivo' },
  { nombre: 'Polideportivo Finito Ghermann', direccion: 'Av. Cmte. Rosales 10', telefono: '3765045154', email: '', web: '', redes: '' },
  { nombre: 'Posadas Rugby', direccion: 'Calle 150', telefono: '', email: '', web: '', redes: 'Facebook: @Posadas-Rugby-Academia' },
  { nombre: 'Racing Club', direccion: 'Av. Roque Sáenz Peña 2060', telefono: '0376 422-1499', email: '', web: '', redes: 'Instagram: @aracingclubposadas         Facebook: @aracingclubposadas' },
  { nombre: 'Sol de Campo Casa de Caballos', direccion: 'Hipódromo General Belgrano', telefono: '0376 510-5625', email: '', web: '', redes: 'Instagram: @soldecampocasadecaballoss        Facebook: @soldecampo.casadecaballos' },
  { nombre: 'Tacurú Social Club', direccion: 'Ruta 12 Km 7,5', telefono: '+54 376 44 80 524 - 44 83 285 / WHATSAPP 3765-007592', email: 'tacurusocialclub@hotmail.com', web: '', redes: 'Instagram: @tacurusocialclub   Facebook: @TacuruSocialClub' },
  { nombre: 'World Padel Club Posadas', direccion: 'Avenida López y Planes 2640,', telefono: '0376 508-5716', email: '', web: '', redes: 'Instagram: @worldpadel' },
  { nombre: 'Camping Unión Judicial Posadas', direccion: 'Las Araucarias 5799', telefono: '0376 15-458-8377', email: '', web: '', redes: 'Facebook: @campingjudicialposadas' },
];

export default function Seccion5() {
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const sedesFiltradas = useMemo(() => {
    if (!search) return SEDES;
    return SEDES.filter(sede =>
      Object.values(sede).some(val =>
        val && val.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <div className="font-source min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <img src="/Deporte.png" alt="Banner Deportivo" className="absolute inset-0 w-full h-full object-cover opacity-90 hidden md:block" />
        <img src="/DeporteMobile.png" alt="Banner Deportivo" className="absolute inset-0 w-full h-full object-cover opacity-90 md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 md:px-6 text-center text-white">
          <span className="text-xs md:text-sm uppercase tracking-widest font-medium opacity-90 mb-2">Deportes</span>
          <h1 className="text-3xl md:text-5xl font-bevietnam font-black mb-3 md:mb-4 leading-tight">
            Posadas Deportiva
          </h1>
          <p className="text-sm md:text-lg max-w-2xl mx-auto opacity-90 px-4">
            La ciudad como sede de grandes eventos deportivos nacionales e internacionales.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-8 md:-mt-16 relative z-20">
        {/* Search Section */}
        <motion.section
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bevietnam font-bold text-gray-900 mb-2">
              Catálogo de Sedes Deportivas
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Encuentra la sede deportiva perfecta para tu evento
            </p>
          </div>
          
          {/* Search Input */}
          <div className="relative max-w-md mx-auto">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar sede, dirección, contacto..."
              className="w-full pl-10 pr-4 py-3 md:py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-sm md:text-base transition-all duration-200"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </motion.section>

        {/* Results Count */}
        {search && (
          <div className="text-center mb-6">
            <p className="text-sm text-gray-600">
              {sedesFiltradas.length} sede{sedesFiltradas.length !== 1 ? 's' : ''} encontrada{sedesFiltradas.length !== 1 ? 's' : ''}
            </p>
          </div>
        )}

        {/* Sedes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-12">
          {sedesFiltradas.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 mb-4">
                <MagnifyingGlassIcon className="w-16 h-16 mx-auto opacity-50" />
              </div>
              <p className="text-gray-500 text-lg font-medium">No se encontraron sedes deportivas</p>
              <p className="text-gray-400 text-sm mt-2">Intenta con otros términos de búsqueda</p>
            </div>
          ) : (
            sedesFiltradas.map((sede, i) => {
              const open = openIndex === i;
              return (
                <motion.div
                  key={i}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  {/* Header */}
                  <button
                    className={`w-full p-4 md:p-5 text-left focus:outline-none transition-all duration-300 ${
                      open ? 'bg-green-50 border-l-4 border-l-green-600' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bevietnam text-sm md:text-base font-bold text-gray-900 mb-2 leading-tight">
                          {sede.nombre}
                        </h3>
                        <div className="flex items-center text-xs text-gray-600">
                          <MapPinIcon className="w-4 h-4 mr-1 flex-shrink-0" />
                          <span className="truncate">{sede.direccion}</span>
                        </div>
                      </div>
                      <div className={`ml-3 flex-shrink-0 transition-transform duration-300 ${
                        open ? 'rotate-180 text-green-600' : 'text-gray-400'
                      }`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  
                  {/* Expandable Content */}
                  <div className={`transition-all duration-300 overflow-hidden ${
                    open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    {open && (
                      <div className="p-4 md:p-5 pt-0 space-y-3 border-t border-gray-100">
                        {sede.telefono && (
                          <div className="flex items-center text-sm">
                            <PhoneIcon className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700">{sede.telefono}</span>
                          </div>
                        )}
                        {sede.email && (
                          <div className="flex items-center text-sm">
                            <EnvelopeIcon className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                            <a 
                              href={`mailto:${sede.email}`} 
                              className="text-green-700 hover:text-green-800 underline transition-colors"
                            >
                              {sede.email}
                            </a>
                          </div>
                        )}
                        {sede.web && (
                          <div className="flex items-center text-sm">
                            <GlobeAltIcon className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                            <a 
                              href={sede.web.startsWith('http') ? sede.web : `https://${sede.web}`} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-green-700 hover:text-green-800 underline transition-colors truncate"
                            >
                              {sede.web.replace('https://','').replace('http://','')}
                            </a>
                          </div>
                        )}
                        {sede.redes && (
                          <div className="flex items-start text-sm">
                            <ShareIcon className="w-4 h-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-xs leading-relaxed">{sede.redes}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })
          )}
        </div>

        {/* Footer CTA */}
        <motion.div
          className="text-center py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-500 text-sm">
            ¿No encuentras lo que buscas? 
            <a href="/mice/contacto" className="text-green-600 hover:text-green-700 font-medium ml-1 transition-colors">
              Contáctanos
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
} 