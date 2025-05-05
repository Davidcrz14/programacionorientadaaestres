import React from 'react';
import { FaAward, FaMedal, FaTrophy } from 'react-icons/fa';

function getRankIcon(position) {
    switch (position) {
        case 1:
            return <FaTrophy className="text-yellow-400" />;
        case 2:
            return <FaMedal className="text-gray-400" />;
        case 3:
            return <FaAward className="text-amber-600" />;
        default:
            return null;
    }
}

function Ranking({ rankingData }) {
    return (
        <section className="mb-12">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-semibold text-white">Top Performers</h2>
                    <p className="text-sm text-gray-400 mt-1">Los mejores desarrolladores de la semana</p>
                </div>
                <button className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1">
                    Ver tabla completa
                    <span className="text-lg">→</span>
                </button>
            </div>

            <div className="bg-[#1a1a1a] rounded-lg">
                <div className="px-6 py-4 border-b border-[#333] text-sm">
                    <div className="grid grid-cols-12 text-gray-400">
                        <div className="col-span-1">#</div>
                        <div className="col-span-4">Dev</div>
                        <div className="col-span-2 text-center">Desafíos</div>
                        <div className="col-span-2 text-center">Calificación</div>
                        <div className="col-span-3 text-right">Puntos</div>
                    </div>
                </div>

                <div className="divide-y divide-[#333] text-center text-gray-400 py-4">
                    Próximamente...
                </div>


            </div>
        </section>
    );
}

export default Ranking;
