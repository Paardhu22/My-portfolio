
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MySQL',
      tags: ['React', 'Node.js', 'MySQL', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      color: 'bg-blue-500'
    },
    {
      title: 'AI Chat Interface',
      description: 'Modern chat application with AI integration and prompt engineering',
      tags: ['Python', 'AI', 'Prompt Engineering', 'WebSocket'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      color: 'bg-purple-500'
    },
    {
      title: 'Design System',
      description: 'Comprehensive design system created in Figma and Framer',
      tags: ['Figma', 'Framer', 'Design System', 'Prototyping'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      color: 'bg-pink-500'
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard with Python backend and SQLite database',
      tags: ['Python', 'SQLite', 'Data Viz', 'Dashboard'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      color: 'bg-green-500'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-6xl lg:text-7xl font-black text-foreground mb-6">
            Projects showcase
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Selected works that showcase technical expertise and creative problem-solving
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
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
                    <div className="w-10 h-10 bg-card/90 rounded-full flex items-center justify-center hover:bg-card transition-colors">
                      <Github className="w-4 h-4 text-foreground" />
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
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-medium hover:bg-orange-600 transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
