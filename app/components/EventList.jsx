import React from 'react';
import EventCard from './EventCard'; // Importar el componente

// Declaración del arreglo de eventos (Datos)
const events = [
  { id: 1, title: 'Conferencia Tech', date: '2023-11-10', location: 'Bogotá', price: 50.0 },
  { id: 2, title: 'Taller React', date: '2023-11-15', location: 'Virtual', price: 0.0 },
  { id: 3, title: 'Feria Diseño', date: '2023-12-01', location: 'Medellín', price: 20.0 },
  { id: 4, title: 'Hackathon', date: '2023-12-05', location: 'Cali', price: 10.0 },
];

function EventList() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Lista de Eventos
      </h1>
      
      {/* Grid responsivo con Tailwind */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {/* Iteración usando .map() */}
        {events.map((event) => (
          <EventCard 
            key={event.id}   // Propiedad obligatoria 'key'
            event={event}    // Pasar el objeto completo como prop
          />
        ))}
        
      </div>
    </div>
  );
}

export default EventList;