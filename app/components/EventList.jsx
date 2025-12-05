'use client';

import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';

// Datos simulados
const MOCK_DATA = [
  { id: 1, title: 'Conferencia Tech', date: '2023-11-10', location: 'Bogotá', price: 50.0 },
  { id: 2, title: 'Taller React', date: '2023-11-15', location: 'Virtual', price: 0.0 },
  { id: 3, title: 'Feria Diseño', date: '2023-12-01', location: 'Medellín', price: 20.0 },
  { id: 4, title: 'Evento Pendiente', date: 'FECHA_INVALIDA', location: 'Cali', price: 10.0 },
];

function EventList() {
  // Uso de Hooks (useState, useEffect) que requiere 'use client'
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de API call con 500ms de retraso
    const timer = setTimeout(() => {
      setEvents(MOCK_DATA);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="text-center p-10 text-gray-500">Cargando eventos...</div>;
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Lista de Eventos
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {events.map((event) => (
          <EventCard 
            key={event.id} 
            event={event} 
          />
        ))}
      </div>
    </div>
  );
}

export default EventList;