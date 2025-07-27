import React from 'react';
export function PortfolioHero() {
  return <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700"></div>
      <div className="absolute inset-0 opacity-30" style={{
      backgroundImage: "url('https://uploadthingy.s3.us-west-1.amazonaws.com/uHYiDdnGtsVT8F86TrYxsA/download_%2812%29.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      mixBlendMode: 'overlay'
    }}></div>
      <div className="max-w-6xl mx-auto px-4 py-24 sm:py-32 lg:py-40 relative">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight">
            Crafting Digital Experiences
          </h1>
          <p className="text-xl text-indigo-100 mb-10 max-w-xl">
            I create beautiful, functional websites that help businesses connect
            with their audience.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-indigo-700 shadow-lg hover:shadow-xl transition-all">
              View My Work
            </a>
            <a href="#contact" className="rounded-full border border-white/50 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-medium text-white hover:bg-white/20 transition-all">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>;
}