// src/components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-green-900 text-white py-12 font-source">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Municipalidad de Posadas */}
          <div>
            <img
              src="/logoposadasblanco.png"
              alt="Logo Municipalidad de Posadas"
              className="h-12 w-auto mb-4"
            />
            <p className="font-semibold">Municipalidad de Posadas</p>
            <p className="text-gray-300">Tu plataforma de eventos de confianza.</p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="hover:opacity-75">Twitter</a>
              <a href="#" className="hover:opacity-75">Facebook</a>
              <a href="#" className="hover:opacity-75">Instagram</a>
            </div>
          </div>
  
          {/* Enlaces de la municipalidad */}
          <div className="flex justify-between">
            <div>
              <h5 className="font-bevietnam mb-2">La Municipalidad</h5>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li><a href="#" className="hover:underline">Nosotros</a></li>
                <li><a href="#" className="hover:underline">Noticias</a></li>
                <li><a href="#" className="hover:underline">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bevietnam mb-2">Soporte</h5>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li><a href="#" className="hover:underline">Centro de Ayuda</a></li>
                <li><a href="#" className="hover:underline">Términos</a></li>
                <li><a href="#" className="hover:underline">Privacidad</a></li>
              </ul>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © 2025 Municipalidad de Posadas. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    )
  }
  