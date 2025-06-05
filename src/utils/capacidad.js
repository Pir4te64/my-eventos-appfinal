// Devuelve un array de objetos { tipo, capacidad } para hoteles
export function getCapacidadData(hotel) {
  if (!hotel.capacidad || typeof hotel.capacidad !== 'string' || !hotel.capacidad.includes('/')) {
    return null;
  }
  const tipos = hotel.tipo.split(',').map(t => t.trim());
  const caps = hotel.capacidad.split('/').map(c => parseInt(c));
  return tipos.map((t, i) => ({ tipo: t, capacidad: caps[i] || 0 }));
}

// Para privados
export function getCapacidadDataPriv(p) {
  if (!p.capacidad || typeof p.capacidad !== 'string' || !p.capacidad.includes('/')) {
    return null;
  }
  const tipos = p.tipo.split('/').map(t => t.trim());
  const caps = p.capacidad.split('/').map(c => parseInt(c));
  return tipos.map((t, i) => ({ tipo: t, capacidad: caps[i] || 0 }));
}

// Para locaciones
export function getCapacidadDataLoc(l) {
  if (!l.capacidad || typeof l.capacidad !== 'string' || !l.capacidad.includes('/')) {
    return null;
  }
  const tipos = l.tipo.split('/').map(t => t.trim());
  const caps = l.capacidad.split('/').map(c => parseInt(c));
  return tipos.map((t, i) => ({ tipo: t, capacidad: caps[i] || 0 }));
}

// Para gubernamentales
export function getCapacidadDataGov(g) {
  if (!g.capacidad || typeof g.capacidad !== 'string' || !g.capacidad.includes('/')) {
    return null;
  }
  const tipos = g.tipo.split('/').map(t => t.trim());
  const caps = g.capacidad.split('/').map(c => parseInt(c));
  return tipos.map((t, i) => ({ tipo: t, capacidad: caps[i] || 0 }));
} 