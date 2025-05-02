export default function Contacto() {
    return (
      <div className="p-8 max-w-md mx-auto">
        <h2 className="text-2xl mb-4">Contacto</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Nombre" className="w-full px-4 py-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded" />
          <textarea placeholder="Mensaje" className="w-full px-4 py-2 border rounded" rows="4" />
          <button type="submit" className="px-6 py-2 bg-green-900 text-white rounded">Enviar</button>
        </form>
      </div>
    )
  }
  