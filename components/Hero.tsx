import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-60"
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Modern house with large windows"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl uppercase max-w-2xl">
          Aberturas <br />
          que inspiran
        </h1>
        <p className="mt-6 text-xl text-gray-100 max-w-xl">
          Diseño, calidad y eficiencia para tu hogar con Colorama. 
          Transformamos espacios con luz y estilo.
        </p>
        <div className="mt-10">
          <a
            href="#catalogo"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-[#b91c1c] hover:bg-red-800 md:py-4 md:text-lg md:px-10 transition shadow-lg"
          >
            Ver Catálogo
          </a>
        </div>
      </div>
      
      {/* Decorative bottom strip matching the design */}
      <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-[#b91c1c] via-[#b91c1c] to-gray-600"></div>
    </div>
  );
};
