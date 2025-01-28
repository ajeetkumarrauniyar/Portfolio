import React from 'react';

const techStackData = [
  {
    icon: 'fa-react',
    name: 'React & Next.js',
    category: 'Frontend Development',
    color: 'text-blue-400',
    type: 'fas'
  },
  {
    icon: 'fa-node',
    name: 'Node.js',
    category: 'Backend Development',
    color: 'text-green-400',
    type: 'fas'
  },
  {
    icon: 'fa-database',
    name: 'PostgreSQL',
    category: 'Database Management',
    color: 'text-purple-400',
    type: 'fas'
  },
  {
    icon: 'fa-php',
    name: 'PHP',
    category: 'Server-side Scripting',
    color: 'text-indigo-400',
    type: 'fab'
  },
  {
    icon: 'fa-wordpress',
    name: 'WordPress',
    category: 'CMS Development',
    color: 'text-blue-400',
    type: 'fab'
  },
  {
    icon: 'fa-docker',
    name: 'Docker',
    category: 'Containerization',
    color: 'text-blue-400',
    type: 'fab'
  }
];

const TechStackIcons = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 animate-float">
        {techStackData.map((tech, index) => (
          <div 
            key={tech.name}
            className="tech-card group transform transition-all duration-300 hover:-translate-y-2"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10 hover:border-white/20">
              <i className={`text-4xl mb-3 ${tech.type} ${tech.icon} ${tech.color}`}></i>
              <p className="text-sm font-medium">{tech.name}</p>
              <p className="text-xs text-gray-400 mt-1">{tech.category}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
};

export default TechStackIcons; 