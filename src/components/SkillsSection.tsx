
import React from 'react';
import { Code, Database, Palette, Zap } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Code className="w-8 h-8" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      color: 'bg-blue-500'
    },
    {
      category: 'Backend',
      icon: <Database className="w-8 h-8" />,
      skills: ['Python', 'Node.js', 'SQLite', 'MySQL'],
      color: 'bg-green-500'
    },
    {
      category: 'Design',
      icon: <Palette className="w-8 h-8" />,
      skills: ['Figma', 'Framer', 'UI/UX', 'Prototyping'],
      color: 'bg-purple-500'
    },
    {
      category: 'AI & Automation',
      icon: <Zap className="w-8 h-8" />,
      skills: ['Prompt Engineering', 'AI Integration', 'Automation', 'Code Optimization'],
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
          <h2 className="text-6xl lg:text-7xl font-black mb-6">
            skills • skills • skills •
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for modern web development, from concept to deployment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className={`${skillGroup.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {skillGroup.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{skillGroup.category}</h3>
                
                <div className="space-y-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-8 py-4">
            <span className="text-orange-500 font-medium">Always learning, always growing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
