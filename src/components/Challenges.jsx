import { BiTime } from 'react-icons/bi';
import { FaCode, FaStar, FaUsers } from 'react-icons/fa';

const challenges = [
  {
    id: 1,
    title: "Desafío Python: Web Scraping Avanzado",
    description: "Extrae datos de sitios web dinámicos utilizando Scrapy y Selenium.",
    difficulty: "Medio",
    category: "Python",
    participants: "Próximamente...",
    rating: "Próximamente...",
    timeLeft: "Próximamente...",
    featured: true,
    icon: <FaCode className="text-xl" />
  },
  {
    id: 2,
    title: "Desafío JavaScript: React y Redux",
    description: "Crea una aplicación de gestión de tareas (TODO) utilizando React y Redux para el manejo del estado.",
    difficulty: "Medio",
    category: "JavaScript",
    participants: "Próximamente...",
    rating: "Próximamente...",
    timeLeft: "Próximamente...",
    icon: <FaCode className="text-xl" />
  },
  {
    id: 3,
    title: "Desafío Java: API REST Spring Boot",
    description: "Desarrolla una API REST para gestión de biblioteca utilizando Spring Boot y JPA.",
    difficulty: "Difícil",
    category: "Java",
    participants: "Próximamente...",
    rating: "Próximamente...",
    timeLeft: "Próximamente...",
    icon: <FaCode className="text-xl" />
  },
  {
    id: 4,
    title: "Desafío PHP: Auth con Laravel",
    description: "Implementa un sistema de autenticación completo utilizando Laravel.",
    difficulty: "Medio",
    category: "PHP",
    participants: "Próximamente...",
    rating: "Próximamente...",
    timeLeft: "Próximamente...",
    icon: <FaCode className="text-xl" />
  }
];

function ChallengeCard({ challenge }) {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'difícil': return 'text-red-500';
      case 'medio': return 'text-yellow-500';
      case 'fácil': return 'text-green-500';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="bg-[#1a1a1a] rounded-lg p-4 sm:p-6 hover:bg-[#222222] transition-all">
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="p-2 rounded-lg bg-[#2a2a2a] self-start shrink-0">
          {challenge.icon}
        </div>
        <div className="flex-1 min-w-0 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-2">
            <h3 className="font-medium text-white text-base sm:text-lg break-words pr-2">
              {challenge.title}
            </h3>
            {challenge.featured && (
              <span className="px-2 py-1 text-xs rounded-full bg-blue-500 text-white whitespace-nowrap self-start shrink-0">
                Destacado
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm mb-2">
            <span className={`${getDifficultyColor(challenge.difficulty)} shrink-0`}>
              {challenge.difficulty}
            </span>
            <span className="text-gray-600 shrink-0">•</span>
            <span className="text-gray-400 shrink-0">{challenge.category}</span>
          </div>
          <p className="text-sm text-gray-400 line-clamp-2 break-words">
            {challenge.description}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-400">
              <div className="flex items-center gap-1 shrink-0">
                <FaUsers className="text-base" />
                <span>{challenge.participants}</span>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <FaStar className="text-yellow-400" />
                <span>{challenge.rating}</span>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <BiTime />
                <span>{challenge.timeLeft}</span>
              </div>
            </div>
            <button className="text-blue-400 hover:text-blue-300 transition-colors whitespace-nowrap">
              Ver Desafío →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Challenges() {
  return (
    <section className="mb-8 sm:mb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">Top Desafíos</h2>
        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm whitespace-nowrap">
          Ver todos los desafíos
        </a>
      </div>

      <div className="space-y-4">
        {challenges.map(challenge => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </section>
  );
}

export default Challenges;
