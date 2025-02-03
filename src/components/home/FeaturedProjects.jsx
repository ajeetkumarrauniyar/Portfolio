import { Image } from '../shared/Image';

export function FeaturedProjects() {
  const projects = [
    {
      title: 'Document Collaboration Platform',
      description:
        'A real-time document editing platform with collaborative features, authentication, and version control.',
      tech: ['Socket.io', 'Clerk Auth', 'MongoDB', 'Express'],
      image: 'DocumentCollaborationPlatform.webp',
      category: 'Real-Time Collaboration',
      categoryColor: 'bg-blue-900/30 text-blue-400',
      features: [
        'Real-time cursor tracking and presence indicators',
        'Conflict resolution with operational transformation',
        'Automatic saving and version history',
      ],
      demoUrl: '/coming-soon',
      codeUrl: '/coming-soon',
    },
    {
      title: 'Task Management PWA',
      description:
        'A fully offline-capable task management system with sync capabilities and performance optimization.',
      tech: ['Service Workers', 'IndexedDB', 'Workbox', 'Cache API'],
      image: 'TaskManagementPWA.webp',
      category: 'Progressive Web App',
      categoryColor: 'bg-purple-900/30 text-purple-400',
      lighthouse: {
        performance: 98,
        accessibility: 100,
        bestPractices: 100,
        pwa: 100,
      },
      demoUrl: '/coming-soon',
      codeUrl: '/coming-soon',
    },
    {
      title: 'SoundWave Music Platform',
      description:
        'A responsive music streaming application with advanced audio handling and playlist management.',
      tech: ['Web Audio API', 'Tailwind CSS', 'Material UI', 'Redux'],
      image: 'SoundWaveMusicPlatform.webp',
      category: 'Music Streaming',
      categoryColor: 'bg-green-900/30 text-green-400',
      features: [
        'Advanced audio visualization',
        'Custom audio controls and effects',
        'Playlist management with drag-and-drop',
      ],
      demoUrl: '/coming-soon',
      codeUrl: '/coming-soon',
    },
  ];

  return (
    <section
      id="FeaturedProjects"
      className="min-h-screen bg-gray-900 px-4 py-20 text-white"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-center text-4xl font-bold">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400">
            Showcasing complex implementations and innovative solutions across
            different tech domains
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={project.title} className="project-card">
              <div className={`grid items-center gap-12 lg:grid-cols-2`}>
                {/* Content Section */}
                <div
                  className={`space-y-6 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}
                >
                  <div className="flex flex-wrap items-center gap-4">
                    <div
                      className={`inline-block rounded-full px-4 py-2 text-sm font-medium ${project.categoryColor}`}
                    >
                      {project.category} 
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-400">{project.description}</p>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="tech-badge rounded-full bg-gray-800 px-3 py-1 text-sm hover:bg-gray-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {project.features && (
                    <div className="space-y-3 pl-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="feature-item flex items-center gap-3"
                        >
                          <i className="fas fa-check w-5 text-green-400"></i>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {project.lighthouse && (
                    <div className="lighthouse-card rounded-lg border border-gray-700 bg-gray-800/50 p-4">
                      <div className="mb-4 flex items-center gap-4">
                        <i className="fas fa-tachometer-alt text-green-400"></i>
                        <span className="font-semibold">Lighthouse Score</span>
                      </div>
                      <div className="grid grid-cols-4 gap-4">
                        <LighthouseScore
                          label="Performance"
                          score={project.lighthouse.performance}
                        />
                        <LighthouseScore
                          label="Accessibility"
                          score={project.lighthouse.accessibility}
                        />
                        <LighthouseScore
                          label="Best Practices"
                          score={project.lighthouse.bestPractices}
                        />
                        <LighthouseScore
                          label="PWA"
                          score={project.lighthouse.pwa}
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-4 pt-2">
                    <a href={project.demoUrl} className="project-btn demo-btn">
                      <i className="fas fa-play text-sm"></i>
                      <span>Live Demo</span>
                    </a>
                    <a href={project.codeUrl} className="project-btn code-btn">
                      <i className="fab fa-github text-sm"></i>
                      <span>View Code</span>
                    </a>
                  </div>
                </div>

                {/* Image Section */}
                <div
                  className={`project-image-container ${
                    index % 2 !== 0 ? 'lg:order-1' : ''
                  }`}
                >
                  <div className="rounded-xl border border-gray-700/50 bg-gray-800/50 p-6">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full rounded-lg shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LighthouseScore({ label, score }) {
  return (
    <div className="lighthouse-score text-center">
      <div className="text-xl font-bold text-green-400">{score}</div>
      <div className="mt-1 text-sm text-gray-400">{label}</div>
    </div>
  );
}
