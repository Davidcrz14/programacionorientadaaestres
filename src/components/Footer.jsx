import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full py-4 sm:py-6 bg-gray-800 mt-auto border-t border-gray-700">
            <div className="max-w-6xl mx-auto px-4">
                <p className="text-sm sm:text-base text-center text-gray-400 hover:text-gray-300 transition-colors">
                    © {new Date().getFullYear()} Programación Orientada a Estrés.
                    <span className="block sm:inline mt-2 sm:mt-0 sm:ml-2 text-purple-400 hover:text-purple-300 transition-colors">
                        Hecho por Davc | <i>Bliss - Hatter</i>
                    </span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
