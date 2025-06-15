
import React from 'react';
import { Camera } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Camera className="w-8 h-8 text-black" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-black hover:text-orange-500 transition-colors font-medium">Home</a>
            <a href="#about" className="text-black hover:text-orange-500 transition-colors font-medium">About</a>
            <a href="#portfolio" className="text-black hover:text-orange-500 transition-colors font-medium">Portfolio</a>
            <a href="#skills" className="text-black hover:text-orange-500 transition-colors font-medium">Skills</a>
            <a href="#contact" className="text-black hover:text-orange-500 transition-colors font-medium">Contact</a>
          </div>

          <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
            Available for hire 🔥
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
