import { useState } from 'react';

export function TechStack() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const categories = {
    frontend: {
      title: "Frontend",
      color: "blue",
      items: ["React.js", "Next.js", "Tailwind", "Material UI", "Shadcn", "Ant Design"]
    },
    backend: {
      title: "Backend",
      color: "green",
      items: ["Node.js", "PHP", "WordPress", "Prisma", "Sequelize", "Zod/Yup/Formik"]
    },
    databases: {
      title: "Databases",
      color: "purple",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Mongoose", "DataStax Astra"]
    },
    tools: {
      title: "Tools",
      color: "orange",
      items: ["Docker", "ESLint/Prettier", "Langflow", "Clerk Auth", "Socket.io"]
    }
  };

  return (
    <section id="tech-stack" className="relative min-h-screen overflow-hidden bg-dark-950 py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient">
              Tech Stack Mastery
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit built through hands-on experience and continuous learning
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <FilterButton 
              active={activeFilter === 'all'} 
              onClick={() => setActiveFilter('all')}
            >
              All
            </FilterButton>
            {Object.entries(categories).map(([key, { title }]) => (
              <FilterButton
                key={key}
                active={activeFilter === key}
                onClick={() => setActiveFilter(key)}
              >
                {title}
              </FilterButton>
            ))}
          </div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(categories).map(([key, { title, items, color }]) => (
              <div
                key={key}
                className={`glass-card p-6 hover-card ${
                  activeFilter !== 'all' && activeFilter !== key ? 'hidden' : ''
                }`}
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <TechBadge key={item} color={color}>
                      {item}
                    </TechBadge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FilterButton({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${
        active 
          ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
          : 'glass-card text-gray-300 hover:text-white hover:bg-white/10'
      }`}
    >
      {children}
    </button>
  );
}

function TechBadge({ children, color }) {
  const colorClasses = {
    blue: "from-blue-400/20 to-blue-600/20 text-blue-400",
    green: "from-green-400/20 to-green-600/20 text-green-400",
    purple: "from-purple-400/20 to-purple-600/20 text-purple-400",
    orange: "from-orange-400/20 to-orange-600/20 text-orange-400"
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${colorClasses[color]}`}>
      {children}
    </span>
  );
}
