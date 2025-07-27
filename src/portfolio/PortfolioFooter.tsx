import React from 'react';
import { InstagramIcon, TwitterIcon, LinkedinIcon, GithubIcon } from 'lucide-react';
export function PortfolioFooter() {
  return <footer className="bg-gradient-to-br from-gray-900 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
              lonestar.Designs
            </h3>
            <p className="text-gray-300 max-w-md">
              Creating beautiful digital experiences that help businesses
              connect with their audience.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
              <TwitterIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <LinkedinIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
              <GithubIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} lonestar Design. All rights reserved.</p>
        </div>
      </div>
    </footer>;
}