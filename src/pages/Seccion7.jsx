import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

const SEDES = [
  { nombre: 'UNaM - Universidad Nacional de Misiones', tipo: '', direccion: 'Avenida Fernando Elías Llamosas 9458', telefono: '3764 448-0200 Int.: 283 - 284.', email: 'informes@fce.unam.edu.ar', web: 'https://www.unam.edu.ar/', redes: 'Instagram: @unam_misiones' },
  { nombre: 'UNaM - Facultad Ciencias Económicas', tipo: 'Aula Magna', direccion: 'Avenida Fernando Elías Llamosas 9458', telefono: '376 4480200', email: 'informes@fce.unam.edu.ar', web: 'https://www.fce.unam.edu.ar/', redes: 'Instagram: @fceunam Facebook: @FacultaddeCienciasEconómicas' },
  { nombre: 'UNaM - Facultad de Ciencias Exactas Químicas y Naturales', tipo: 'Aula Magna', direccion: 'Felix de Azara 1552', telefono: '376-4443509', email: 'infoexactas@fceqyn.unam.edu.ar', web: 'https://www.fceqyn.unam.edu.ar/', redes: 'Instagram: @exactas.unam Facebook: Exactas.UNaM' },
  { nombre: 'UNaM - Facultad de Ciencias Exactas Químicas y Naturales - Escuela de Enfermería', tipo: 'Salón Auditorio Lic Martha Kühle', direccion: 'López Torres N°3415', telefono: '(+54) 0376 – 4428177 / 4440961', email: 'info.escenf@unam.edu.ar', web: 'www.escenf.unam.edu.ar', redes: 'Instagram: @escuelaenfermeriaunam.oficial Facebook: @Escuela de Enfermeria' },
  { nombre: 'UNaM - Facultad de Humanidades y Ciencias Sociales', tipo: 'Aula Magna', direccion: 'Tucuman 1946', telefono: '376-4434344', email: 'dic@fhycs.unam.edu.ar', web: 'https://www.fhycs.unam.edu.ar/portada/', redes: 'Instagram: @boletinfhycs Facebook: @FacultaddeHumanidadesyCienciasSociales' },
  { nombre: 'UNaM - Facultad de Humanidades y Ciencias Sociales', tipo: 'Aula Magna - Edificio Juan Figueredo', direccion: 'Colón 2318', telefono: '376-4434344', email: 'dic@fhycs.unam.edu.ar', web: 'https://www.fhycs.unam.edu.ar/portada/', redes: 'Instagram: @boletinfhycs Facebook: @FacultaddeHumanidadesyCienciasSociales' },
  { nombre: 'Universidad Siglo 21 - INCADE -  Instituto de Capacitación y Desarrollo Empresarial', tipo: '', direccion: 'San Lorenzo 1432', telefono: '3764 85-17', email: 'ues21misiones@gmail.com', web: 'https://21.edu.ar/content/incade-posadas', redes: 'Instagram: @siglo21.incade Facebook: Siglo 21 CAU incade' },
  { nombre: 'Universidad de las Fuerzas de Seguridad Provincia de Misiones - Sede Policía', tipo: '', direccion: 'Puerto Argentino y Golfo San Carlos, Miguel Lanús', telefono: '', email: 'iuspmisiones@gmail.com / secretariageneral.ufspm@gmail.com', web: 'https://www.ufspm.com.ar/Sede_Policia/', redes: 'Instagram: @ufspm.sedepoliciaok Facebook: @UniversidaddelasFuerzasdeSeguridadProvinciaMisiones' },
  { nombre: 'UCAMI - Universidad Católica de las Misiones', tipo: 'SUM', direccion: 'Avenida Jauretche 1036', telefono: '054 (376) 4463718/ 4476163/4469697', email: 'info@ucami.edu.ar', web: 'https://www.ucami.edu.ar/', redes: 'Instagram: @ucami_oficial Facebook: @UniversidadCatólicadelasMisiones' },
  { nombre: 'Universidad Gastón Dachary', tipo: 'Salón Auditorio - Aula Magna', direccion: 'Salta esquina Colón', telefono: '054 (0376) 4438677 / WhatsApp: 054 9 (376) 5180053', email: '', web: 'https://ugd.edu.ar/es/', redes: 'Instagram: @ugdnoticias Facebook: @UniversidadGastonDachary X: @ugdnoticias LinkedIn: @universidad-gast-n-dachary' },
  { nombre: 'Universidad Popular de Misiones.', tipo: '', direccion: 'Av. República Oriental del Uruguay 3066', telefono: '0376 443-9537 / 0376 15-520-0660', email: '', web: '', redes: 'Instagram: @up.misiones  Facebook: @UPMisiones' },
  { nombre: 'UCP - Universidad de la Cuenca del Plata', tipo: 'Salón Auditorio', direccion: 'Barrufaldi N°2364', telefono: '376 444-1331', email: 'ingresoposadas@ucp.edu.ar', web: 'https://www.ucp.edu.ar/', redes: 'Instagram: @ucpposadas Facebook: @UCPSedePosadas X: @cuencaposadasok' },
  { nombre: 'UCSF - Universidad Católica de Santa Fe', tipo: '', direccion: 'Rademacher 3943', telefono: '0376-4423388', email: 'posadas@ucsf.edu.ar', web: 'https://www.ucsf.edu.ar/', redes: 'Instagram: @ucsfoficial Facebook: @ucsfoficial LinkedIn: @ucsfoficial' },
  { nombre: 'Instituto Hernando Arias de Saavedra', tipo: '', direccion: 'Av. Mitre 1518', telefono: '(03765) 175679', email: 'informes@ariasdesaavedra.edu.ar', web: 'https://ariasdesaavedra.edu.ar/', redes: 'Instagram: @institutosaavedra Facebook: @InstitutoSaavedra' },
  { nombre: 'ISET - Instituto Superior de Estudios Técnicos', tipo: '', direccion: 'Calle Catamarca 1550', telefono: '376 4429514  4440096', email: 'iset@leoniset.edu.ar', web: 'https://www.leoniset.edu.ar/', redes: 'Instagram: @leoniset  Facebook: @leoniset  Linkedin:@leoniset' },
  { nombre: 'IPAC - Instituto Privado de Alta Capacitación', tipo: '', direccion: 'San Lorenzo 2236', telefono: '376 5015098 - 3751 635463', email: 'info@dealtacapacitacion.edu.ar', web: 'https://dealtacapacitacion.edu.ar/', redes: 'Instagram: @ipacinstitutodecapacitacion Facebook: @IpacInstitutodeCapacitación' },
  { nombre: 'IPESMI - Instituto Privado de Estudios Superiores de Misiones', tipo: '', direccion: 'Salta 1968', telefono: '(03764) 432828', email: 'informes@ipesmi.edu.ar', web: 'https://ipesmi.edu.ar/', redes: 'Instagram: @ipesmisuperior  Facebook: @ipesmisuperior  X: @IPESMI' },
  { nombre: 'Instituto Antonio Ruiz de Montoya', tipo: 'Salón Auditorium:  560', direccion: 'Ayacucho 1962', telefono: '376-4440055', email: 'auditorium_montoya@isparm.edu.ar', web: 'https://www.isparm.edu.ar/', redes: 'Instagram: @auditorium_montoya Facebook: @AuditoriumMontoya' },
  // ... puedes agregar más si lo deseas
];

export default function Seccion7() {
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
          <h1 className="text-5xl font-bold text-white mb-4">Posadas Universitaria</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">Centro académico y de innovación con amplia oferta educativa y eventos universitarios.</p>
        </div>
      </div>

      {/* Catálogo de Sedes Académicas */}
      <motion.section
        className="max-w-7xl mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8 tracking-widest uppercase">Catálogo de Sedes Académicas</h2>
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Buscar sede, dirección, contacto..."
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sedesFiltradas.length === 0 ? (
            <div className="col-span-full text-center py-8 text-gray-400">No se encontraron sedes académicas.</div>
          ) : (
            sedesFiltradas.map((sede, i) => {
              const open = openIndex === i;
              return (
                <div
                  key={i}
                  className={`transition-all duration-500 rounded-2xl overflow-hidden shadow-md border-2 ${open ? 'border-green-600 bg-green-50 scale-[1.03]' : 'border-gray-200 bg-white hover:scale-[1.01]'} min-h-[100px] flex flex-col items-center justify-center`}
                  style={{ minHeight: open ? 150 : 100 }}
                >
                  {/* Botón central */}
                  <button
                    className={`w-full flex flex-col items-center justify-center px-6 py-5 focus:outline-none transition-colors ${open ? 'bg-transparent' : 'bg-white'} select-none`}
                    style={{ minHeight: 60 }}
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                  >
                    <span className="block text-base font-bold text-green-800 text-center mb-1 tracking-wide uppercase">{sede.nombre}</span>
                    <span className="block text-sm text-green-700 text-center font-medium mb-1">{sede.tipo ? sede.tipo : sede.direccion}</span>
                    <span className={`mt-1 text-lg transition-transform duration-300 ${open ? 'rotate-180 text-green-700' : 'text-green-500 group-hover:text-green-700'}`}>▼</span>
                  </button>
                  {/* Información desplegable solo debajo */}
                  <div className={`transition-all duration-500 w-full ${open ? 'opacity-100 max-h-40 py-2' : 'opacity-0 max-h-0 py-0'} flex flex-col items-center justify-center`}
                    style={{ minHeight: open ? 30 : 0 }}>
                    {open && (
                      <div className="w-full px-6 space-y-1">
                        {sede.direccion && <div className="text-sm text-green-900 font-medium"><span className="font-semibold">Dirección:</span> {sede.direccion}</div>}
                        {sede.telefono && <div className="text-sm text-green-900 font-medium"><span className="font-semibold">Teléfono:</span> {sede.telefono}</div>}
                        {sede.email && <div className="text-sm text-green-900 font-medium"><span className="font-semibold">Email:</span> <a href={`mailto:${sede.email}`} className="text-green-800 underline font-semibold">{sede.email}</a></div>}
                        {sede.web && <div className="text-sm text-green-900 font-medium"><span className="font-semibold">Web:</span> <a href={sede.web.startsWith('http') ? sede.web : `https://${sede.web}`} target="_blank" rel="noopener noreferrer" className="text-green-800 underline font-semibold">{sede.web.replace('https://','').replace('http://','')}</a></div>}
                        {sede.redes && <div className="text-sm text-green-900 font-medium"><span className="font-semibold">Redes Sociales:</span> <span className="text-green-800">{sede.redes}</span></div>}
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </motion.section>
    </div>
  );
} 