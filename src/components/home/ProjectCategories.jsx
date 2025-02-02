import React, { useState } from 'react';

const ProjectCategories = () => {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const categories = [
    { id: 1, name: 'All Projects', bgColor: 'bg-blue-600 hover:bg-blue-700' },
    { id: 2, name: 'JavaScript/React', bgColor: 'bg-gray-800 hover:bg-gray-700' },
    { id: 3, name: 'PHP/WordPress', bgColor: 'bg-gray-800 hover:bg-gray-700' },
    { id: 4, name: 'DevOps & DB', bgColor: 'bg-gray-800 hover:bg-gray-700' },
    { id: 5, name: 'Tools', bgColor: 'bg-gray-800 hover:bg-gray-700' },
  ];

  // Map of tag to background color classes
  const tagColors = {
    'React': 'bg-blue-900/50',
    'Node.js': 'bg-green-900/50',
    'MongoDB': 'bg-purple-900/50',
    'Express': 'bg-yellow-900/50',
    'WordPress': 'bg-blue-900/50',
    'PHP': 'bg-indigo-900/50',
    'Next.js': 'bg-cyan-900/50',
    'MySQL': 'bg-orange-900/50',
    'Docker': 'bg-blue-900/50',
    'Redis': 'bg-red-900/50',
    'PostgreSQL': 'bg-green-900/50',
    'Nginx': 'bg-yellow-900/50'
  };

  const projects = [
    {
      id: 1,
      title: 'Advanced MERN Dashboard',
      description: 'Built a scalable admin dashboard with real-time data visualization and role-based access control.',
      image: 'https://placehold.co/800x450?text=MERN+Stack+Project',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      achievements: [
        'Reduced API response time by 40% through caching',
        'Implemented real-time updates using Socket.io',
        '99% test coverage with Jest and React Testing Library'
      ],
      github: '#',
      demo: '#',
      category: 'JavaScript/React'
    },
    {
      id: 2,
      title: 'Headless WordPress + Next.js',
      description: 'Custom headless CMS implementation with advanced caching and content preview features.',
      image: 'https://placehold.co/800x450?text=WordPress+Headless+CMS',
      tags: ['WordPress', 'PHP', 'Next.js', 'MySQL'],
      achievements: [
        'Optimized MySQL queries by 40%',
        'Built custom REST API endpoints',
        'Implemented incremental static regeneration'
      ],
      github: '#',
      demo: '#',
      category: 'PHP/WordPress'
    },
    {
      id: 3,
      title: 'Microservices Architecture',
      description: 'Containerized microservices deployment with automated scaling and monitoring.',
      image: 'https://placehold.co/800x450?text=Docker+Microservices',
      tags: ['Docker', 'Redis', 'PostgreSQL', 'Nginx'],
      achievements: [
        'Achieved 99.9% uptime',
        'Reduced deployment time by 70%',
        'Implemented auto-scaling based on load'
      ],
      github: '#',
      demo: '#',
      category: 'DevOps & DB'
    }
  ];

  // Filter projects based on active category
  const filteredProjects = projects.filter(project => 
    activeCategory === 'All Projects' ? true : project.category === activeCategory
  );

  return (
    <section id="projectCategories" className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold mb-4 text-center font-heading">Project Categories</h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto text-lg">
          Showcasing complex implementations and innovative solutions across different tech domains
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-2 rounded-full transition-colors font-medium ${
                activeCategory === category.name ? 'bg-blue-600 hover:bg-blue-700' : category.bgColor
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              <div className="h-48 bg-gray-700 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 space-x-2">
                  <a 
                    href={project.github} 
                    className="inline-block p-2 bg-gray-900/80 rounded-full hover:bg-gray-900 transition-colors"
                    aria-label="View GitHub Repository"
                  >
                    <i className="fab fa-github text-xl"></i>
                  </a>
                  <a 
                    href={project.demo} 
                    className="inline-block p-2 bg-gray-900/80 rounded-full hover:bg-gray-900 transition-colors"
                    aria-label="View Live Demo"
                  >
                    <i className="fas fa-external-link-alt text-xl"></i>
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 font-heading">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-base leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className={`px-3 py-1 ${tagColors[tag] || 'bg-blue-900/50'} rounded-full text-sm font-medium`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="border-t border-gray-700 pt-4">
                  <h4 className="font-semibold mb-2 text-base">Key Achievements:</h4>
                  <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-check text-green-400 mt-1 mr-2"></i>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors inline-flex items-center gap-2">
            <span>Load More Projects</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectCategories; 