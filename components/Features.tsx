import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  onClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, buttonText, onClick }) => (
  <div className="bg-white rounded-lg shadow-lg p-8 text-center border border-gray-100 flex flex-col items-center h-full transition hover:shadow-xl">
    <div className="text-[#b91c1c] mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 mb-8 flex-grow leading-relaxed text-sm">
      {description}
    </p>
    <button 
      onClick={onClick}
      className="bg-[#b91c1c] hover:bg-red-800 text-white font-bold py-2 px-6 rounded shadow transition w-full sm:w-auto"
    >
      {buttonText}
    </button>
  </div>
);

export const Features: React.FC = () => {
  return (
    <div id="features" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestras Aberturas
          </h2>
          <div className="w-24 h-1 bg-[#b91c1c] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Aberturas de Aluminio"
            description="Resistencia, durabilidad y estética moderna para grandes superficies. Ideales para proyectos arquitectónicos exigentes."
            buttonText="Ver Modelos"
            icon={
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v10M12 7v10m4-10v10M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
              </svg>
            }
          />
          <FeatureCard 
            title="Aberturas de PVC"
            description="Máximo aislamiento térmico y acústico. Ahorro energético y confort garantizado para tu hogar. Tecnología alemana."
            buttonText="Ver Beneficios"
            icon={
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
          />
          <FeatureCard 
            title="Proyectos a Medida"
            description="Soluciones personalizadas y asesoramiento técnico para cada necesidad. Diseñamos junto a usted."
            buttonText="Contactar"
            icon={
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};
