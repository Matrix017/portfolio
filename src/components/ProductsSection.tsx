import React from 'react';
import { ShoppingBagIcon } from 'lucide-react';
export function ProductsSection() {
  const products = [{
    id: 1,
    name: 'Cuticle Oil Pen',
    description: 'Nourishing oil that hydrates and strengthens cuticles and nails.',
    price: '$18.99',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' // New: oil bottle
  }, {
    id: 2,
    name: 'Nail Strengthener',
    description: 'Advanced formula to prevent breakage and promote nail growth.',
    price: '$22.99',
    image: 'https://images.unsplash.com/photo-1610705267928-1b9f2fa7f1c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  }, {
    id: 3,
    name: 'Luxury Hand Cream',
    description: 'Rich moisturizer with shea butter and vitamin E for soft hands.',
    price: '$24.99',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80' // New: hand cream tube
  }];
  return <section id="products" className="py-16 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 sm:text-4xl">
            Shop Our Products
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
            Continue your nail care routine at home with our professional-grade
            products
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map(product => <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">
                    {product.price}
                  </span>
                  <button className="flex items-center justify-center bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-colors">
                    <ShoppingBagIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <button className="px-6 py-3 border-2 border-pink-600 text-pink-600 font-medium rounded-md hover:bg-pink-600 hover:text-white transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>;
}