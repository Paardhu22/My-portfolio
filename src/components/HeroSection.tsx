import React from 'react';
import { Globe, Users, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4 relative">
              <h1 className="leading-tight">
                <span className="block text-8xl lg:text-9xl font-black text-foreground">
                  hi my name is{' '}
                  <span className="text-orange-500">Paardhiv Reddy</span>
                </span>
                <br />
                <span className="font-light text-foreground text-3xl lg:text-4xl">
                  and welcome to my portfolio
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Welcome to a digital journey that transcends boundaries. 
                Discover the artistry of code brought to life through 
                innovative web development and creative problem-solving.
              </p>
            </div>

            {/* Removed Social Links */}

            {/* Stats */}
            <div className="flex space-x-12">
              <div>
                <div className="text-4xl font-bold text-foreground">+15</div>
                <div className="text-sm text-muted-foreground">Projects completed with precision and creativity</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground">+500k</div>
                <div className="text-sm text-muted-foreground">Lines of code crafted, optimized for performance</div>
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
