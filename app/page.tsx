import EventList from './components/EventList';
import React from 'react'

export default function app() {
  return (
     <div className="min-h-screen bg-gray-100 font-sans">
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="font-bold text-xl text-indigo-600">EventosApp</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <main>
        <EventList />
      </main>
    </div>
  )
}
