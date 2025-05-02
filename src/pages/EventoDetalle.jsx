import { useParams } from 'react-router-dom'

export default function EventoDetalle() {
  const { id } = useParams()
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl">Detalle del Evento {id}</h2>
      <p className="mt-4">Aquí la información del evento {id}.</p>
    </div>
  )
}
