import React from 'react';
import { MapPinIcon, PhoneIcon, ClockIcon, MailIcon } from 'lucide-react';
export function ContactSection() {
  return <section id="contact" className="py-16 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 sm:text-4xl">
            Visit Us
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
            Book an appointment or stop by our salon
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-medium text-gray-900 mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPinIcon className="h-6 w-6 text-pink-600 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Location</h4>
                  <p className="text-gray-600">
                    Thika Road Mall,2nd floor
                    <br />
                   Nairobi,kenya
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="h-6 w-6 text-pink-600 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Phone</h4>
                  <p className="text-gray-600">0702101325</p>
                </div>
              </div>
              <div className="flex items-start">
                <MailIcon className="h-6 w-6 text-pink-600 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600">lonestarsolutions74@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <ClockIcon className="h-6 w-6 text-pink-600 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9am - 7pm
                    <br />
                    Saturday: 9am - 6pm
                    <br />
                    Sunday: 10am - 4pm
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md" id="book">
            <h3 className="text-2xl font-medium text-gray-900 mb-6">
              Book an Appointment
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="your.email@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input type="tel" id="phone" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="(555) 123-4567" />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service
                </label>
                <select id="service" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500">
                  <option value="">Select a service</option>
                  <option value="manicure">Signature Manicure</option>
                  <option value="gel">Gel Manicure</option>
                  <option value="pedicure">Luxury Pedicure</option>
                  <option value="nailart">Nail Art & Design</option>
                </select>
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Date
                </label>
                <input type="date" id="date" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" />
              </div>
              <button type="submit" className="w-full bg-pink-600 text-white py-2 px-4 rounded-md font-medium hover:bg-pink-700 transition-colors">
                Request Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
}