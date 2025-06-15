
import React from 'react';
import { ExternalLink } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'Cyber Edu Genius',
      description: 'An interactive educational platform for cybersecurity, built with Lovable.',
      tags: ['React', 'Lovable', 'Education', 'Cybersecurity'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
      link: 'https://cyber-edu-genius.lovable.app',
    },
    {
      title: 'Interactive Framer Prototype',
      description: 'A dynamic and responsive prototype showcasing fluid animations and user interactions.',
      tags: ['Framer', 'Prototyping', 'UI/UX', 'Design'],
      image: 'https://images.unsplash.com/photo-1604933241469-63d12d1b544b?w=600&h=400&fit=crop',
      link: 'https://possible-oval-692489.framer.app',
    },
    {
      title: 'Figma Design System',
      description: 'A comprehensive design system for a modern application, ensuring consistency and scalability.',
      tags: ['Figma', 'Design System', 'UI Design', 'Branding'],
      image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&h=400&fit=crop',
      link: 'https://www.figma.com/file/ieZALzKNZR7fgVAjN51Ecs/Untitled',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background transition-colors duration-300 hover:bg-hover-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-6xl lg:text-7xl font-black text-foreground mb-6">
            Projects showcase
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Selected works that showcase technical expertise and creative problem-solving
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group block"
            >
              <div className="bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                    <div className="w-10 h-10 bg-card/90 rounded-full flex items-center justify-center hover:bg-card transition-colors">
                      <ExternalLink className="w-4 h-4 text-foreground" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
