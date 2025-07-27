import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function PortfolioHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              lonestar.Designs
            </h1>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm font-medium">
              Projects
            </a>
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm font-medium">
              Contact
            </a>
          </nav>
          <div className="hidden md:flex items-center">
            <a href="#contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:shadow-md transition-all">
              Get in Touch
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
      {isMenuOpen && <div className="md:hidden bg-white absolute top-16 inset-x-0 z-50 border-b border-gray-100 shadow-sm">
          <div className="pt-2 pb-4 px-4 space-y-1">
            <a href="#projects" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg" onClick={() => setIsMenuOpen(false)}>
              Projects
            </a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <a href="#contact" className="block px-3 py-2 text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg mt-4" onClick={() => setIsMenuOpen(false)}>
              Get in Touch
            </a>
          </div>
        </div>}
    </header>;
}