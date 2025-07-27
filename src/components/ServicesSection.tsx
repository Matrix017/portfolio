import React from 'react';
export function ServicesSection() {
  interface Service {
    id: number;
    name: string;
    description: string;
    price: string;
    duration: string;
    image: string;
  }

  const services: Service[] = [
    {
      id: 1,
      name: 'Signature Manicure',
      description: 'Our classic manicure includes nail shaping, cuticle care, hand massage, and polish application.',
      price: '$35',
      duration: '45 min',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=880&q=80'
    },
    {
      id: 2,
      name: 'Gel Manicure',
      description: 'Long-lasting gel polish that stays chip-free for up to two weeks with a high-shine finish.',
      price: '$45',
      duration: '60 min',
      image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 3,
      name: 'Luxury Pedicure',
      description: 'Indulge in our premium pedicure with exfoliation, callus removal, extended massage, and polish.',
      price: '$65',
      duration: '75 min',
      image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 4,
      name: 'Nail Art & Design',
      description: 'Express yourself with custom nail art, from simple accents to elaborate designs by our artists.',
      price: '$15+',
      duration: 'Varies',
      image:'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1170&q=80'
    }
  ];
  return <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
            Pamper yourself with our range of professional nail care treatments
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map(service => <div key={service.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-medium text-gray-900">
                  {service.name}
                </h3>
                <div className="flex justify-between items-center mt-2 mb-4">
                  <span className="text-pink-600 font-semibold">
                    {service.price}
                  </span>
                  <span className="text-sm text-gray-500">
                    {service.duration}
                  </span>
                </div>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-4 w-full bg-pink-100 text-pink-700 py-2 rounded-md font-medium hover:bg-pink-200 transition-colors">
                  Book Now
                </button>
              </div>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-pink-600 font-medium hover:text-pink-700">
            View Full Service Menu
            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>;
}