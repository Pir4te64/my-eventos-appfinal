import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

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
    <div className="min-h-screen bg-gray-50 font-source">
      {/* Hero Section */}
      <div style={{ backgroundColor: '#00723e' }} className="relative h-96 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Posadas Deportiva</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">La ciudad como sede de grandes eventos deportivos nacionales e internacionales.</p>
        </div>
      </div>

      {/* Catálogo de Sedes Deportivas */}
      <motion.section
        className="max-w-7xl mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Catálogo de Sedes Deportivas</h2>
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Buscar sede, dirección, contacto..."
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sedesFiltradas.length === 0 ? (
            <div className="col-span-full text-center py-8 text-gray-400">No se encontraron sedes deportivas.</div>
          ) : (
            sedesFiltradas.map((sede, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden"
              >
                <button
                  className={`w-full flex justify-between items-center px-6 py-4 text-lg font-semibold text-green-800 focus:outline-none transition-colors ${openIndex === i ? 'bg-green-50' : 'bg-white'}`}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span>{sede.nombre}</span>
                  <span className={`ml-2 transition-transform ${openIndex === i ? 'rotate-90' : ''}`}>▶</span>
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 animate-fadeIn">
                    <div className="mb-1"><b>Dirección:</b> {sede.direccion}</div>
                    {sede.telefono && <div className="mb-1"><b>Teléfono:</b> {sede.telefono}</div>}
                    {sede.email && <div className="mb-1"><b>Email:</b> <a href={`mailto:${sede.email}`} className="text-green-700 underline">{sede.email}</a></div>}
                    {sede.web && <div className="mb-1"><b>Web:</b> <a href={sede.web.startsWith('http') ? sede.web : `https://${sede.web}`} target="_blank" rel="noopener noreferrer" className="text-green-700 underline">{sede.web.replace('https://','').replace('http://','')}</a></div>}
                    {sede.redes && <div className="mb-1"><b>Redes Sociales:</b> <span className="whitespace-pre-line">{sede.redes}</span></div>}
                  </div>
                )}
              </motion.div>
            ))
          )}
        </div>
      </motion.section>
    </div>
  );
} 