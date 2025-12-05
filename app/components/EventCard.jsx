import React from 'react';

function EventCard({ event }) {
  // Desestructuración de props
  const { title, date, location, price } = event;

  // Formato de precio
  const priceDisplay = price === 0 ? 'Gratis' : `$${price.toFixed(2)}`;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200 flex flex-col h-full">
      <div className="p-5 flex flex-col flex-grow">
        {/* Título */}
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        
        {/* Ubicación */}
        <p className="text-gray-600 mb-3 text-sm flex items-center">
          📍 <span className="ml-1">{location}</span>
        </p>

        {/* Fecha formateada */}
        <div className="mt-auto text-gray-500 text-xs">
          📅 {new Date(date).toLocaleDateString('es-ES', { dateStyle: 'long' })}
        </div>
      </div>

      {/* Precio resaltado */}
      <div className="bg-gray-50 px-5 py-3 border-t border-gray-100 flex justify-end">
        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
          price === 0 ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
        }`}>
          {priceDisplay}
        </span>
      </div>
    </div>
  );
}

export default EventCard;

