import React from 'react';
import { Globe, Users, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4 relative">
              <div className="absolute top-[-10rem] left-[-15rem] w-[45rem] h-[45rem] text-red-300 opacity-30 filter blur-3xl transform rotate-12 -z-10 pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="currentColor"
                    d="M49.4,-49.5C62.4,-34.2,70.1,-17.1,70.6,0.5C71.1,18.1,64.4,36.2,52.2,49.2C40,62.2,22.3,70.1,3.8,70.8C-14.7,71.5,-29.3,65,-43,54.7C-56.7,44.4,-69.5,30.3,-72.6,14C-75.7,-2.2,-69.1,-18.4,-59,-33.5C-48.9,-48.6,-35.2,-62.5,-20.3,-67.4C-5.3,-72.3,10.8,-67.7,24.9,-61.7C39,-55.7,51.1,-48.5,49.4,-49.5Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>

              <h1 className="leading-tight">
                <span className="block text-8xl lg:text-9xl font-black text-black">
                  hi my name is <span className="text-orange-500">Paardhiv Reddy</span>
                </span>
                <br />
                <span className="font-light text-black text-3xl lg:text-4xl">
                  and welcome to my portfolio
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                Welcome to a digital journey that transcends boundaries. 
                Discover the artistry of code brought to life through 
                innovative web development and creative problem-solving.
              </p>
            </div>

            {/* Removed Social Links */}

            {/* Stats */}
            <div className="flex space-x-12">
              <div>
                <div className="text-4xl font-bold text-black">+15</div>
                <div className="text-sm text-gray-600">Projects completed with precision and creativity</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-black">+500k</div>
                <div className="text-sm text-gray-600">Lines of code crafted, optimized for performance</div>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Card */}
          <div className="relative">
            <div className="bg-orange-500 rounded-3xl p-8 relative overflow-hidden animate-float">
              <div className="absolute top-4 right-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              
              <div className="relative z-10">
                <div className="text-white text-2xl font-bold mb-4">Full Stack</div>
                <div className="w-32 h-32 bg-white/20 rounded-2xl mb-6 flex items-center justify-center">
                  <div className="text-6xl">💻</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white text-sm">Frontend & Backend</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white text-sm">Database Design</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -left-2 w-16 h-16 bg-white/10 rounded-full animate-pulse-scale"></div>
            </div>

            {/* Secondary Card */}
            <div className="absolute -bottom-8 -right-8 bg-yellow-400 rounded-3xl p-6 w-48 h-48 flex items-center justify-center animate-rotate-slow">
              <div className="text-6xl">🎨</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
