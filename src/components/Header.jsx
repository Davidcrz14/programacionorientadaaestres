import React from 'react';
import logo from '/logopng.png';

const Header = () => {
    return (
        <header className="w-full py-6 sm:py-8">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <img
                    src={logo}
                    alt="POE Logo"
                    className="h-20 sm:h-24 lg:h-32 w-auto filter hover:brightness-110 transition-all"
                />
                <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center sm:text-left font-bold gradient-text hover:opacity-90 transition-opacity">
                    Programación Orientada a Estrés
                </h1>
            </div>
        </header>
    );
};

export default Header;
