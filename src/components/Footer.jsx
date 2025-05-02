// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Posadas en blanco */}
        <div>
          <img
            src="/logoposadasblanco.png"
            alt="Logo Posadas Blanco"
            className="h-12 w-auto mb-4"
          />
          <p className="text-gray-300">Your trusted events platform.</p>
          <div className="flex space-x-3 mt-4">
            <a href="#" className="hover:opacity-75">🐦</a>
            <a href="#" className="hover:opacity-75">📘</a>
            <a href="#" className="hover:opacity-75">📸</a>
          </div>
        </div>

        {/* Enlaces de empresa */}
        <div className="flex justify-between">
          <div>
            <h5 className="font-semibold mb-2 text-white">Company</h5>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2 text-white">Support</h5>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>Help center</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-sm">
          © 2025 MiEmpresa. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
