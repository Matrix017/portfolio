import React from 'react';
import { InstagramIcon, FacebookIcon, TwitterIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-pink-400">
              Polished
            </h3>
            <p className="mt-4 text-gray-300 max-w-md">
              Providing exceptional nail care and beauty services in a relaxing
              environment. Our skilled technicians are dedicated to helping you
              look and feel your best.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <TwitterIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#book" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Book Now
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium text-white">Information</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Polished Nail Salon. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
}