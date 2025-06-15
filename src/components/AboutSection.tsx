
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background transition-colors duration-300 hover:bg-hover-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-6xl lg:text-7xl font-black text-foreground mb-6 leading-none">
                about • about • about •
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                I'm a passionate full-stack developer with a keen eye for design and a love for clean, efficient code. 
                My journey spans from crafting pixel-perfect frontends to architecting robust backend systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With expertise in modern web technologies and a strong foundation in both design and development, 
                I bridge the gap between beautiful user experiences and powerful functionality.
              </p>
            </div>

            <div className="space-y-6 text-center">
              <h3 
                className="text-5xl font-bold text-foreground mb-6 animate-fade-in animate-pulse-scale" 
                style={{ animationDelay: '200ms', opacity: 0 }}
              >
                What I Do
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Frontend Development',
                  'Backend Architecture',
                  'Database Design',
                  'UI/UX Design',
                  'API Development',
                  'Performance Optimization'
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-foreground/5 py-2 px-4 rounded-full animate-fade-in"
                    style={{ animationDelay: `${300 + index * 100}ms`, opacity: 0 }}
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative">
            <div className="relative">
              {/* Main circle with photographer */}
              <div className="w-80 h-80 bg-foreground/10 rounded-full relative overflow-hidden mx-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-foreground text-8xl">👨‍💻</div>
                </div>
                
                {/* Decorative circles around */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-muted rounded-full flex items-center justify-center animate-float">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
                  <span className="text-xl">💡</span>
                </div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '0.5s'}}>
                  <span className="text-white text-xl">🎯</span>
                </div>
              </div>

              {/* Background geometric shapes */}
              <div className="absolute top-10 right-10 w-24 h-24 border-4 border-border rounded-full animate-rotate-slow"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 border-4 border-orange-500/20 rounded-full animate-rotate-slow" style={{animationDirection: 'reverse'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
