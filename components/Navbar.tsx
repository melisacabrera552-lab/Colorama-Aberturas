import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex flex-col">
                <div className="bg-black text-white px-3 py-1 font-bold text-2xl italic tracking-tighter inline-block border-l-8 border-[#b91c1c]">
                  COLORAMA
                </div>
                <span className="text-[10px] text-gray-600 tracking-widest font-semibold mt-1 pl-1">ABERTURAS DE ALUMINIO Y PVC</span>
            </div>
            <svg className="h-10 w-10 ml-2 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2h2v-2h-2v2zm0-4h2v-2h-2v2zm0-4h2V7h-2v2z" opacity=".3"/>
                <path d="M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zM5 5h14v14H5V5zm7 2h2v2h-2V7zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z"/>
            </svg>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-[#b91c1c] font-bold border-b-2 border-[#b91c1c] pb-1">Inicio</a>
            <a href="#features" className="text-gray-800 hover:text-[#b91c1c] font-medium transition">Aberturas</a>
            <a href="#services" className="text-gray-800 hover:text-[#b91c1c] font-medium transition">Servicios</a>
            <a href="#contact" className="text-gray-800 hover:text-[#b91c1c] font-medium transition">Contacto</a>
            <button className="bg-[#b91c1c] hover:bg-red-800 text-white font-bold py-3 px-6 rounded shadow-lg transition transform hover:scale-105">
              Solicitar Presupuesto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-[#b91c1c] focus:outline-none p-2"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-[#b91c1c] font-bold bg-gray-50 rounded-md">Inicio</a>
            <a href="#features" className="block px-3 py-2 text-gray-800 hover:bg-gray-50 hover:text-[#b91c1c] rounded-md font-medium">Aberturas</a>
            <a href="#services" className="block px-3 py-2 text-gray-800 hover:bg-gray-50 hover:text-[#b91c1c] rounded-md font-medium">Servicios</a>
            <a href="#contact" className="block px-3 py-2 text-gray-800 hover:bg-gray-50 hover:text-[#b91c1c] rounded-md font-medium">Contacto</a>
            <button className="w-full mt-2 bg-[#b91c1c] text-white font-bold py-3 px-4 rounded text-center">
              Solicitar Presupuesto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
