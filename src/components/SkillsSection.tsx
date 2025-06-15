
import React from 'react';
import { Code, Database, Palette, Zap, Heart, BrainCircuit } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: 'HTML5', slug: 'html5' },
        { name: 'CSS3', slug: 'css3' },
        { name: 'JavaScript', slug: 'javascript' },
        { name: 'React', slug: 'react' },
        { name: 'Tailwind CSS', slug: 'tailwindcss' },
      ],
      color: 'bg-blue-500'
    },
    {
      category: 'Backend',
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: 'Python', slug: 'python' },
        { name: 'Node.js', slug: 'nodedotjs' },
        { name: 'Express', slug: 'express' },
        { name: 'MySQL', slug: 'mysql' },
        { name: 'SQLite', slug: 'sqlite' },
      ],
      color: 'bg-green-500'
    },
    {
      category: 'Design',
      icon: <Palette className="w-8 h-8" />,
      skills: [
        { name: 'Figma', slug: 'figma' },
        { name: 'Framer', slug: 'framer' },
      ],
      color: 'bg-purple-500'
    },
    {
      category: 'AI & Automation',
      icon: <Zap className="w-8 h-8" />,
      skills: [
        { name: 'OpenAI', slug: 'openai' },
        { name: 'Lovable', icon: <Heart className="w-8 h-8 text-red-500" /> },
        { name: 'Prompt Engineering', icon: <BrainCircuit className="w-8 h-8" /> },
      ],
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white/10 rounded-full animate-rotate-slow"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-white/10 rounded-full animate-rotate-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-white/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-6xl lg:text-7xl font-black mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
            skills • skills • skills •
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
            A comprehensive toolkit for modern web development, from concept to deployment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="group opacity-0 animate-fade-in"
              style={{ animationDelay: `${300 + index * 150}ms` }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 h-full flex flex-col">
                <div className={`${skillGroup.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {skillGroup.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{skillGroup.category}</h3>
                
                <div className="flex-grow flex items-center">
                  <div className="flex flex-wrap gap-x-4 gap-y-6 justify-center w-full">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex flex-col items-center gap-2 w-16" title={skill.name}>
                        <div className="w-8 h-8 flex items-center justify-center">
                          {'slug' in skill && skill.slug ? (
                            <img 
                              src={`https://cdn.simpleicons.org/${skill.slug}/white`} 
                              alt={`${skill.name} logo`}
                              className="w-8 h-8"
                            />
                          ) : (
                            'icon' in skill && skill.icon
                          )}
                        </div>
                        <span className="text-xs text-gray-400 text-center">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center opacity-0 animate-fade-in" style={{ animationDelay: `${300 + skills.length * 150}ms` }}>
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-8 py-4">
            <span className="text-orange-500 font-medium">Always learning, always growing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
