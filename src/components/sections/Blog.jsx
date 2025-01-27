import { Image } from "../shared/Image";

export function Blog() {
  const posts = [
    {
      title: "How I Built a PWA with 95% Lighthouse Score",
      excerpt: "Deep dive into PWA optimization techniques and performance tuning strategies...",
      readTime: "5 min read",
      category: "Performance",
      categoryColor: "green",
      image: "https://placehold.co/800x450?text=PWA+Case+Study",
    },
    {
      title: "Building Scalable Real-Time Applications with Socket.io",
      excerpt: "Exploring real-time architecture patterns and optimization techniques...",
      readTime: "8 min read",
      category: "Architecture",
      categoryColor: "blue",
      image: "https://placehold.co/800x450?text=Real+Time+Architecture",
    },
    {
      title: "Creating Advanced WordPress Plugins: A Deep Dive",
      excerpt: "Best practices for WordPress plugin development and optimization...",
      readTime: "6 min read",
      category: "WordPress",
      categoryColor: "purple",
      image: "https://placehold.co/800x450?text=WordPress+Plugin+Dev",
    },
    {
      title: "Optimizing DataStax Astra DB for High Performance",
      excerpt: "Advanced techniques for database optimization and query performance...",
      readTime: "7 min read",
      category: "Database",
      categoryColor: "yellow",
      image: "https://placehold.co/800x450?text=Database+Optimization",
    },
  ];

  return (
    <section id="blog" className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Case Studies & Insights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.title} {...post} />
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-blue-50 dark:bg-gray-800 rounded-xl p-8">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Subscribe to My Tech Journal
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get weekly insights about full-stack development, performance optimization, and tech experiments.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogCard({ title, excerpt, readTime, category, categoryColor, image }) {
  const categoryClasses = {
    green: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
    blue: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
    purple: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
    yellow: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
  };

  return (
    <article className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Image src={image} alt={title} className="w-full" />
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className={`px-3 py-1 rounded-full text-sm ${categoryClasses[categoryColor]}`}>
            {category}
          </span>
          <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
            {readTime}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{excerpt}</p>
        <a href="#" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
          Read More →
        </a>
      </div>
    </article>
  );
}
