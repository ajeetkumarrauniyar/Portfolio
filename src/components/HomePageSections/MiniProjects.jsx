export function MiniProjects() {
  const categories = [
    {
      title: "JavaScript/React Playground",
      image: "https://placehold.co/800x400?text=JavaScript+React+Playground",
      tag: "JavaScript",
      tagColor: "bg-yellow-500",
      projects: [
        {
          title: "Form Validation",
          description: "Implementation of Zod/Yup validation patterns",
          tech: ["Zod", "Yup", "React"]
        },
        {
          title: "Authentication Flows",
          description: "Clerk authentication implementation examples",
          tech: ["Clerk", "Auth", "JWT"]
        }
      ]
    },
    {
      title: "PHP/WordPress Lab",
      image: "https://placehold.co/800x400?text=PHP+WordPress+Lab",
      tag: "WordPress",
      tagColor: "bg-blue-500",
      projects: [
        {
          title: "Dashboard Widgets",
          description: "Custom WordPress admin dashboard components",
          tech: ["PHP", "WordPress", "Ajax"]
        },
        {
          title: "REST API Integration",
          description: "Custom endpoints and external API integration",
          tech: ["REST API", "WP API", "OAuth"]
        }
      ]
    },
    {
      title: "Database/DevOps Snippets",
      image: "https://placehold.co/800x400?text=Database+DevOps+Snippets",
      tag: "DevOps",
      tagColor: "bg-green-500",
      projects: [
        {
          title: "Dockerized Microservices",
          description: "Container orchestration and service setup",
          tech: ["Docker", "Kubernetes", "Microservices"]
        },
        {
          title: "ORM Examples",
          description: "Prisma and Sequelize schema implementations",
          tech: ["Prisma", "Sequelize", "ORM"]
        }
      ]
    }
  ];

  return (
    <section id="mini-projects" className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Minor Projects Library
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ title, image, tag, tagColor, projects }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full"
          loading="lazy"
        />
        <div className={`absolute top-4 right-4 px-3 py-1 ${tagColor} text-white rounded-full text-sm`}>
          {tag}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
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
    <div className="border dark:border-gray-700 rounded-lg p-4">
      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{title}</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span 
            key={item}
            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
