import { Image } from "../shared/Image";

export function FeaturedProjects() {
  const projects = [
    {
      title: "Real-Time Collaboration App",
      description:
        "Built a seamless real-time collaboration platform using Socket.io for instant updates and MERN stack for robust functionality.",
      tech: ["Socket.io", "MongoDB", "Express", "React", "Node.js"],
      image: "https://placehold.co/800x450?text=Real-Time+Collab+App",
      badge: "MERN Stack",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Custom WordPress Ecosystem",
      description:
        "Developed a comprehensive WordPress ecosystem with custom plugins for automated inventory management without page reloads.",
      tech: ["PHP", "MySQL", "WordPress", "REST API"],
      image: "https://placehold.co/800x450?text=WordPress+Ecosystem",
      badge: "WordPress",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Progressive Web App",
      description:
        "Created a high-performance PWA with Next.js and Appwrite, achieving a 95% Lighthouse score through optimization techniques.",
      tech: ["Next.js", "Appwrite", "PWA"],
      image: "https://placehold.co/800x450?text=Progressive+Web+App",
      badge: "Next.js",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Data-Driven Tool",
      description:
        "Engineered a robust data processing tool using DataStax Astra DB with automated CSV parsing and scheduled Cron jobs.",
      tech: ["DataStax", "Node.js", "Cron"],
      image: "https://placehold.co/800x450?text=Data+Driven+Tool",
      badge: "DataStax",
      demoUrl: "#",
      codeUrl: "#",
    },
  ];

  return (
    <section id="featured-projects" className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, tech, image, badge, demoUrl, codeUrl }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          className="w-full"
          loading="lazy"
        />
        {badge && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            {badge}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
