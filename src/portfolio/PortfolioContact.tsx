import React from 'react';
import { MailIcon, PhoneIcon, GlobeIcon } from 'lucide-react';
export function PortfolioContact() {
  return <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-md transition-all">
                Send Message
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-full mr-4">
                    <MailIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <a href="mailto:jaguarflavor@gmail.com"  target="_blank" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                      lonestarsolutions74@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-full mr-4">
                    <PhoneIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <a
                      href="tel:+254702101325"
                      className="text-indigo-600 hover:text-indigo-800 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +254702101325
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-full mr-4">
                    <GlobeIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Location</h4>
                    <p className="text-gray-600">
                      Nairobi , kenya
                      <br />
                      Available for remote work
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-4">
                Ready to start your project?
              </h4>
              <p className="mb-6">
                I'm currently available for freelance work and new
                opportunities.
              </p>
              <a href="mailto:jaguarflavor@gmail.com"  target='blank'  className="inline-block bg-white text-indigo-700 px-6 py-3 rounded-full font-medium hover:shadow-md transition-all">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
}