import React, { useState } from 'react';
import { generateWindowImage } from '../services/geminiService';
import { ImageSize } from '../types';

export const ImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState<ImageSize>('1K');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError(null);
    setImageUrl(null);

    try {
      const result = await generateWindowImage(prompt, size);
      setImageUrl(result);
    } catch (err: any) {
      if (err.message && err.message.includes("Requested entity was not found")) {
          setError("API Key not selected. Please try again.");
      } else {
          setError("Error generando imagen. Asegúrate de seleccionar una clave de API válida.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white py-16 border-t border-gray-200" id="design-studio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:space-x-12">
            
          {/* Controls Side */}
          <div className="lg:w-1/3">
            <div className="mb-6">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Diseña tu Espacio</h2>
                <p className="text-gray-600">
                Visualiza cómo quedarían nuestras aberturas en tu hogar usando Inteligencia Artificial (Nano Banana Pro).
                </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Descripción</label>
                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ej: Una sala de estar moderna con grandes ventanales de aluminio negro con vista al jardín..."
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#b91c1c] focus:border-[#b91c1c] h-32 text-sm resize-none"
                />
                </div>

                <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Resolución de Imagen</label>
                <div className="grid grid-cols-3 gap-3">
                    {(['1K', '2K', '4K'] as ImageSize[]).map((s) => (
                    <button
                        key={s}
                        onClick={() => setSize(s)}
                        className={`py-2 text-sm font-medium rounded-md border ${
                        size === s
                            ? 'bg-gray-800 text-white border-gray-800'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                        } transition`}
                    >
                        {s}
                    </button>
                    ))}
                </div>
                </div>

                {error && (
                <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-md border border-red-200">
                    {error}
                </div>
                )}

                <button
                onClick={handleGenerate}
                disabled={isLoading || !prompt.trim()}
                className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white ${
                    isLoading || !prompt.trim() ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#b91c1c] hover:bg-red-800'
                } transition`}
                >
                {isLoading ? (
                    <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generando...
                    </>
                ) : (
                    'Generar Imagen'
                )}
                </button>
                <p className="text-xs text-gray-400 mt-3 text-center">
                    Requiere clave de API válida (facturación habilitada).
                </p>
            </div>
          </div>

          {/* Preview Side */}
          <div className="lg:w-2/3 mt-8 lg:mt-0">
            <div className="relative bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 min-h-[400px] flex items-center justify-center overflow-hidden">
              {imageUrl ? (
                <img src={imageUrl} alt="Generated Window Design" className="w-full h-auto object-contain shadow-md rounded-lg" />
              ) : (
                <div className="text-center p-10">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="mt-2 text-sm text-gray-500">La visualización aparecerá aquí</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
