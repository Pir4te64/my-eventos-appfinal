// src/components/Newsletter.jsx
export default function Newsletter() {
    return (
      <section className="py-12 bg-green-50">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4 font-source">
          <h3 className="text-2xl font-bevietnam">Contáctanos</h3>
          <p className="text-gray-600">
            Completa el formulario y nos pondremos en contacto contigo lo antes posible.
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Nombre completo"
              className="px-4 py-3 rounded border w-full max-w-md"
              required
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="px-4 py-3 rounded border w-full max-w-md"
              required
            />
            <textarea
              placeholder="Tu mensaje"
              className="px-4 py-3 rounded border w-full max-w-md h-32 resize-none"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-green-900 text-white rounded font-source hover:bg-green-800"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>
    )
  }
  