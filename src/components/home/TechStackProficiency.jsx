import { useState } from 'react';

export function TechStack() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = {
    frontend: {
      title: 'Frontend',
      color: 'blue',
      items: [
        'React.js',
        'Next.js',
        'Tailwind CSS',
        'Material UI',
        'Shadcn UI',
        'Framer Motion',
        'Yup',
        'Formik',
        'Zod',
      ],
    },
    backend: {
      title: 'Backend',
      color: 'green',
      items: ['Node.js', 'PHP', 'WordPress', 'Prisma', 'Sequelize'],
    },
    databases: {
      title: 'Databases',
      color: 'purple',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'DataStax Astra'],
    },
    tools: {
      title: 'Tools',
      color: 'orange',
      items: [
        'Docker',
        'ESLint/Prettier',
        'Langflow',
        'Clerk Auth',
        'Socket.io',
        'Zod',
      ],
    },
    
  };

  return (
    <section
      id="tech-stack"
      className="relative min-h-screen overflow-hidden bg-dark-950 py-24"
    >
      {/* Background decoration */}
      <div className="bg-grid-white/[0.02] absolute inset-0 bg-[size:60px_60px]" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-gradient font-heading text-4xl font-bold md:text-5xl">
              Tech Stack Mastery
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              A diverse set of skills honed through practical experience and ongoing education
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="mb-16 flex flex-wrap justify-center gap-3">
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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(categories).map(
              ([key, { title, items, color }]) => (
                <div
                  key={key}
                  className={`glass-card hover-card p-6 ${
                    activeFilter !== 'all' && activeFilter !== key
                      ? 'hidden'
                      : ''
                  }`}
                >
                  <h3 className="mb-4 text-xl font-bold text-white">{title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <TechBadge key={item} color={color}>
                        {item}
                      </TechBadge>
                    ))}
                  </div>
                </div>
              )
            )}
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
      className={`rounded-xl px-6 py-2.5 font-medium transition-all duration-300 ${
        active
          ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
          : 'glass-card text-gray-300 hover:bg-white/10 hover:text-white'
      }`}
    >
      {children}
    </button>
  );
}

function TechBadge({ children, color }) {
  const colorClasses = {
    blue: 'from-blue-400/20 to-blue-600/20 text-blue-400',
    green: 'from-green-400/20 to-green-600/20 text-green-400',
    purple: 'from-purple-400/20 to-purple-600/20 text-purple-400',
    orange: 'from-orange-400/20 to-orange-600/20 text-orange-400',
  };

  return (
    <span
      className={`rounded-full bg-gradient-to-r px-3 py-1 text-sm font-medium ${colorClasses[color]}`}
    >
      {children}
    </span>
  );
}
