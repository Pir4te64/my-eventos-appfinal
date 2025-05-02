// src/components/FeaturesSection.jsx
export default function FeaturesSection() {
    const features = [
      {
        icon: 'https://cdn-icons-png.flaticon.com/512/854/854878.png', // tour icon
        title: 'Explora Destinos',
        description: 'Descubre los lugares más emblemáticos de Posadas y sus alrededores.'
      },
      {
        icon: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png', // gastronomy icon
        title: 'Gastronomía Local',
        description: 'Disfruta de los sabores típicos de la región misionera.'
      },
      {
        icon: 'https://cdn-icons-png.flaticon.com/512/616/616408.png', // adventure icon
        title: 'Aventura al Aire Libre',
        description: 'Actividades como senderismo, kayak y tirolesa en la naturaleza.'
      },
      {
        icon: 'https://cdn-icons-png.flaticon.com/512/3022/3022550.png', // cultural icon
        title: 'Riqueza Cultural',
        description: 'Visita museos, ferias artesanales y eventos culturales.'
      }
    ]
  
    return (
      <section className="py-12 bg-gray-50">
        <h2 className="text-center font-bevietnam text-3xl mb-8">¿Qué te gustaría conocer?</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-6 text-center font-source space-y-4">
              <img src={f.icon} alt={f.title} className="mx-auto h-12 w-12" />
              <h3 className="font-bevietnam text-xl">{f.title}</h3>
              <p className="text-gray-500 text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  