import { FaCode, FaLightbulb, FaUsers, FaWhatsapp } from 'react-icons/fa';

function Welcome() {
  const stats = [
    {
      icon: <FaCode className="text-3xl text-blue-400" />,
      value: "Proximamente",
      label: "Retos de Código",
      description: "Desafíos técnicos actualizados semanalmente"
    },
    {
      icon: <FaUsers className="text-3xl text-emerald-400" />,
      value: "800+",
      label: "Desarrolladores",
      description: "Comunidad activa y creciente"
    }
  ];

  return (
    <section className="mb-8 sm:mb-12 lg:mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-7">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Uneté ya.<br />
            <span className="text-blue-400">Asciende en el ranking.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed">
            Únete a nuestra comunidad de desarrolladores para conocer a otros programadores, resolver tus preguntas y mejorar tus habilidades.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://chat.whatsapp.com/I9NSyxRXiQS6SdOvxMeoWq"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto btn-primary flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span className="whitespace-nowrap">Únete a la comunidad en Whatsapp</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="grid gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card group hover:bg-[rgba(255,255,255,0.02)] transition-all p-4 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[rgba(255,255,255,0.05)] group-hover:bg-[rgba(255,255,255,0.08)] transition-all">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold mb-1 group-hover:text-white transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      <div className="font-medium text-gray-300">{stat.label}</div>
                      <div>{stat.description}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mt-12 lg:mt-16 p-4 sm:p-6 bg-[rgba(255,255,255,0.02)] rounded-xl">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-400">
          <FaLightbulb className="text-2xl text-yellow-400" />
          <p className="text-sm text-center sm:text-left">
            <span className="font-medium text-white">¿Sabías que?</span> El 22 de Junio de 2025 cumplimos 1 año de existencia.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
