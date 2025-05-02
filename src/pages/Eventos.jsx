import { Link } from 'react-router-dom'

export default function Eventos() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl mb-4">Nuestros Eventos</h2>
      {[1,2,3,4].map(id => (
        <Link key={id} to={`/eventos/${id}`} className="block py-2 hover:underline">
          Evento {id}
        </Link>
      ))}
    </div>
  )
}
