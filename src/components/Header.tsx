import React, { useState } from 'react';
import { MenuIcon, XIcon, PhoneIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="font-serif text-2xl font-bold text-pink-600">
              Polished
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-pink-500 transition-colors">
              Services
            </a>
            <a href="#products" className="text-gray-700 hover:text-pink-500 transition-colors">
              Products
            </a>
            <a href="#about" className="text-gray-700 hover:text-pink-500 transition-colors">
              About
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-pink-500 transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-700 hover:text-pink-500 transition-colors">
              Contact
            </a>
          </nav>
          <div className="hidden md:flex items-center">
            <a href="#book" className="bg-pink-500 text-white px-4 py-2 rounded-md font-medium hover:bg-pink-600 transition-colors">
              Book Now
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-white shadow-lg absolute top-16 inset-x-0 z-50">
          <div className="pt-2 pb-4 px-4 space-y-1">
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
            <a href="#products" className="block px-3 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Products
            </a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 rounded-md" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <a href="#book" className="block px-3 py-2 text-white bg-pink-500 hover:bg-pink-600 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Book Now
            </a>
          </div>
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-2 right-4 text-gray-500 hover:text-gray-700">
            <XIcon className="h-6 w-6" />
          </button>
        </div>}
    </header>;
}