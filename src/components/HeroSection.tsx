import React from 'react';
export function HeroSection() {
  return <div className="relative w-full bg-pink-50">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600428877878-1a0fd85beda2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="max-w-5xl mx-auto px-4 py-24 sm:py-32 lg:py-40 relative">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-pink-800 sm:text-6xl">
            Elevate Your Beauty Routine
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Experience luxurious nail care and treatments in a relaxing
            environment. Our skilled technicians are dedicated to making you
            look and feel your best.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#book" className="rounded-md bg-pink-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 transition-colors">
              Book an Appointment
            </a>
            <a href="#services" className="text-sm font-semibold leading-6 text-gray-700 hover:text-pink-600 transition-colors">
              View Our Services
            </a>
          </div>
        </div>
      </div>
    </div>;
}