import { Image } from '../shared/Image';

export function Blog() {
  const posts = [
    {
      title: 'How I Built a PWA with 95% Lighthouse Score',
      excerpt:
        'Deep dive into PWA optimization techniques and performance tuning strategies...',
      readTime: '5 min read',
      category: 'Performance',
      categoryColor: 'blue',
      image: 'https://placehold.co/800x450?text=PWA+Development',
    },
    {
      title: 'Building Scalable Real-Time Applications with Socket.io',
      excerpt:
        'Exploring real-time architecture patterns and optimization techniques...',
      readTime: '8 min read',
      category: 'Architecture',
      categoryColor: 'blue',
      image: 'https://placehold.co/800x450?text=Real+Time+Architecture',
    },
    {
      title: 'Creating Advanced WordPress Plugins: A Deep Dive',
      excerpt:
        'Best practices for WordPress plugin development and optimization...',
      readTime: '6 min read',
      category: 'WordPress',
      categoryColor: 'purple',
      image: 'https://placehold.co/800x450?text=WordPress+Plugin+Dev',
    },
    {
      title: 'Optimizing DataStax Astra DB for High Performance',
      excerpt:
        'Advanced techniques for database optimization and query performance...',
      readTime: '7 min read',
      category: 'Database',
      categoryColor: 'yellow',
      image: 'https://placehold.co/800x450?text=Database+Optimization',
    },
  ];

  return (
    <section id="blog" className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Technical Insights & Learning Journey
            </h2>
            <p className="text-xl text-gray-400">
              Documenting discoveries and sharing knowledge along the way
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.title} {...post} />
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gray-800 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Weekly Tech Newsletter
                </h3>
                <p className="text-gray-400 mb-6">
                  Get insights about full-stack development, architecture decisions,
                  and performance optimization straight to your inbox.
                </p>
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none text-white"
                  />
                  <button className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-white">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <i className="fas fa-check-circle text-green-400 text-xl mt-1"></i>
                  <div>
                    <h4 className="font-medium text-white mb-1">Weekly Deep Dives</h4>
                    <p className="text-gray-400">Technical analysis of complex engineering problems</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <i className="fas fa-check-circle text-green-400 text-xl mt-1"></i>
                  <div>
                    <h4 className="font-medium text-white mb-1">Code Snippets</h4>
                    <p className="text-gray-400">Practical solutions to common challenges</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <i className="fas fa-check-circle text-green-400 text-xl mt-1"></i>
                  <div>
                    <h4 className="font-medium text-white mb-1">Architecture Insights</h4>
                    <p className="text-gray-400">Behind-the-scenes of technical decisions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogCard({
  title,
  excerpt,
  readTime,
  category,
  categoryColor,
  image,
}) {
  const categoryClasses = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    purple: 'bg-purple-600',
    yellow: 'bg-yellow-600',
  };

  return (
    <article className="bg-gray-800 rounded-xl overflow-hidden hover:scale-[1.02] transition-all">
      <div className="relative">
        <Image src={image} alt={title} className="w-full" />
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 ${categoryClasses[categoryColor]} rounded-full text-sm text-white`}
          >
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-400 mb-4">{excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{readTime}</span>
          <a
            href="#"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Read More →
          </a>
        </div>
      </div>
    </article>
  );
}
