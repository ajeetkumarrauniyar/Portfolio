export function MiniProjects() {
  const categories = [
    {
      title: 'JavaScript/React Playground',
      image: 'JavaScript.webp',
      tag: 'JavaScript',
      tagColor: 'bg-yellow-500',
      projects: [
        {
          title: 'Form Validation',
          description: 'Implementation of Zod/Yup validation patterns',
          tech: ['Zod', 'Yup', 'React'],
        },
        {
          title: 'Authentication Flows',
          description: 'Clerk authentication implementation examples',
          tech: ['Clerk', 'Auth', 'JWT'],
        },
      ],
      to: 'javascript-playground',
    },
    {
      title: 'PHP/WordPress Lab',
      image: 'WordPress.webp',
      tag: 'WordPress',
      tagColor: 'bg-blue-500',
      projects: [
        {
          title: 'Dashboard Widgets',
          description: 'Custom WordPress admin dashboard components',
          tech: ['PHP', 'WordPress', 'Ajax'],
        },
        {
          title: 'REST API Integration',
          description: 'Custom endpoints and external API integration',
          tech: ['REST API', 'WP API', 'OAuth'],
        },
      ],
    },
    {
      title: 'Database/DevOps Snippets',
      image: 'MongoDB.webp',
      tag: 'DevOps',
      tagColor: 'bg-green-500',
      projects: [
        {
          title: 'Dockerized Microservices',
          description: 'Container orchestration and service setup',
          tech: ['Docker', 'Kubernetes', 'Microservices'],
        },
        {
          title: 'ORM Examples',
          description: 'Prisma and Sequelize schema implementations',
          tech: ['Prisma', 'Sequelize', 'ORM'],
        },
      ],
    },
  ];

  return (
    <section
      id="mini-projects"
      className="min-h-screen bg-gray-50 py-20 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white">
            Minor Projects Library
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ title, image, tag, tagColor, projects, to }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg dark:bg-gray-800">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-[200px] w-full object-cover"
          loading="lazy"
        />
        <a
          href={to}
          className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100"
        >
          <span className="text-3xl text-white">🔗</span>
        </a>
        <div
          className={`absolute right-4 top-4 px-3 py-1 ${tagColor} rounded-full text-sm text-white`}
        >
          {tag}
        </div>
      </div>
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          <div className="group">
            <a
              href={to}
              className="inline-flex items-center font-semibold text-blue-500 transition-colors duration-300 hover:text-blue-700"
            >
              →
              <span className="ml-2 translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                →
              </span>
            </a>
          </div>
        </div>
        <div className="space-y-4">
          {projects.map((project) => (
            <ProjectItem key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectItem({ title, description, tech }) {
  return (
    <div className="rounded-lg border p-4 dark:border-gray-700">
      <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
        {title}
      </h4>
      <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-700"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
