import { useState } from 'react';
import { FaUser, FaEnvelope, FaCommentDots, FaWhatsapp } from 'react-icons/fa';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar que el mensaje no esté vacío
    if (!formData.mensaje.trim()) {
      alert('Por favor, escribe un mensaje antes de enviar.');
      return;
    }

    // Crear el mensaje para WhatsApp
    const mensajeWhatsApp = `Hola! Me contacto desde la web de eventos de Posadas.

*Nombre:* ${formData.nombre || 'No especificado'}
*Email:* ${formData.email || 'No especificado'}

*Mensaje:*
${formData.mensaje}

¡Gracias!`;

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);
    
    // Abrir WhatsApp con el mensaje
    const urlWhatsApp = `https://wa.me/5493764578395?text=${mensajeCodificado}`;
    window.open(urlWhatsApp, '_blank');
    
    // Limpiar el formulario
    setFormData({
      nombre: '',
      email: '',
      mensaje: ''
    });
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-green-100 py-12 px-4">
      <div className="max-w-md w-full mx-auto bg-white rounded-2xl shadow-lg p-8 border border-green-800 animate-fadeInUp">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-2 tracking-wide">Contáctanos</h2>
        <p className="text-center text-green-900 mb-6 text-sm italic">"La mejor manera de empezar es dejar de hablar y comenzar a hacer."<br/>No dudes en escribirnos, tu consulta es bienvenida.</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-green-800 text-lg transition-colors duration-300" />
            <input 
              type="text" 
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              placeholder="Nombre completo" 
              className="w-full pl-10 pr-4 py-2 border border-green-800 rounded-lg text-sm focus:ring-2 focus:ring-green-900 focus:border-green-900 transition outline-none bg-green-50 placeholder:text-green-700" 
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-green-800 text-lg transition-colors duration-300" />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Correo electrónico" 
              className="w-full pl-10 pr-4 py-2 border border-green-800 rounded-lg text-sm focus:ring-2 focus:ring-green-900 focus:border-green-900 transition outline-none bg-green-50 placeholder:text-green-700" 
            />
          </div>
          <div className="relative">
            <FaCommentDots className="absolute left-3 top-3 text-green-800 text-lg transition-colors duration-300" />
            <textarea 
              name="mensaje"
              value={formData.mensaje}
              onChange={handleInputChange}
              placeholder="Tu mensaje" 
              rows={4} 
              className="w-full pl-10 pr-4 py-2 border border-green-800 rounded-lg text-sm focus:ring-2 focus:ring-green-900 focus:border-green-900 transition outline-none bg-green-50 placeholder:text-green-700 resize-none" 
              required
            />
          </div>
          <button type="submit" className="w-full py-2 bg-green-900 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:scale-105 hover:shadow-lg animate-fadeInUp delay-200">Enviar Mensaje</button>
        </form>
        {/* WhatsApp contacto */}
        <div className="mt-8 flex flex-col items-center">
          <a
            href="https://wa.me/5493764578395"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-green-800 font-semibold text-base hover:text-green-900 transition mt-2"
          >
            <FaWhatsapp className="text-2xl" />
            +54 9 376 457-8395
          </a>
          <span className="text-xs text-green-700 mt-1">Escríbenos por WhatsApp</span>
        </div>
      </div>
      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/5493764578395"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-all duration-300 animate-fadeInUp"
        style={{ boxShadow: '0 4px 24px 0 rgba(34,197,94,0.25)' }}
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
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
  