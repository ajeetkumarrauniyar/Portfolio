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
