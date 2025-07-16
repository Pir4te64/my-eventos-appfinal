import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';

export default function Contacto() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-100 py-12 px-4">
      <div className="max-w-md w-full mx-auto bg-white rounded-2xl shadow-lg p-8 border border-green-800 animate-fadeInUp">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-2 tracking-wide">Contáctanos</h2>
        <p className="text-center text-green-900 mb-6 text-sm italic">“La mejor manera de empezar es dejar de hablar y comenzar a hacer.”<br/>No dudes en escribirnos, tu consulta es bienvenida.</p>
        <form className="space-y-4">
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-green-800 text-lg transition-colors duration-300" />
            <input type="text" placeholder="Nombre completo" className="w-full pl-10 pr-4 py-2 border border-green-800 rounded-lg text-sm focus:ring-2 focus:ring-green-900 focus:border-green-900 transition outline-none bg-green-50 placeholder:text-green-700" />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-green-800 text-lg transition-colors duration-300" />
            <input type="email" placeholder="Correo electrónico" className="w-full pl-10 pr-4 py-2 border border-green-800 rounded-lg text-sm focus:ring-2 focus:ring-green-900 focus:border-green-900 transition outline-none bg-green-50 placeholder:text-green-700" />
          </div>
          <div className="relative">
            <FaCommentDots className="absolute left-3 top-3 text-green-800 text-lg transition-colors duration-300" />
            <textarea placeholder="Tu mensaje" rows={4} className="w-full pl-10 pr-4 py-2 border border-green-800 rounded-lg text-sm focus:ring-2 focus:ring-green-900 focus:border-green-900 transition outline-none bg-green-50 placeholder:text-green-700 resize-none" />
          </div>
          <button type="submit" className="w-full py-2 bg-green-900 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:scale-105 hover:shadow-lg animate-fadeInUp delay-200">Enviar Mensaje</button>
        </form>
      </div>
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </div>
  )
}
  