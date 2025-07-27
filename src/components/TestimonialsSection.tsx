import React from 'react';
export function TestimonialsSection() {
  const testimonials = [{
    id: 1,
    quote: "The best nail salon I've ever been to! Their attention to detail is incredible and my gel manicure lasted for weeks.",
    author: 'Sarah Johnson',
    role: 'Regular Client'
  }, {
    id: 2,
    quote: 'I love the relaxing atmosphere and the nail art options are endless. The staff is so friendly and professional.',
    author: 'Michelle Torres',
    role: 'Monthly Member'
  }, {
    id: 3,
    quote: 'Their luxury pedicure is worth every penny. My feet have never felt so pampered and looked so beautiful!',
    author: 'Rebecca Chen',
    role: 'New Customer'
  }];
  return <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map(testimonial => <div key={testimonial.id} className="bg-pink-50 p-6 rounded-lg">
              <svg className="h-12 w-12 text-pink-300 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
              <div>
                <h4 className="font-medium text-gray-900">
                  {testimonial.author}
                </h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}