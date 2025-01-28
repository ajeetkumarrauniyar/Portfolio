export function Testimonials() {
  const testimonials = [
    {
      quote: "Their ability to quickly adapt to our tech stack and deliver a complex WordPress plugin within tight deadlines was impressive. The queries optimization increased our site speed significantly.",
      author: "Sarah Johnson",
      role: "Tech Lead, Digital Agency",
      icon: "blue"
    },
    {
      quote: "The real-time collaboration features they implemented in our project were flawless. Their understanding of WebSocket architecture and state management is top-notch.",
      author: "Michael Chen",
      role: "Startup Founder",
      icon: "purple"
    },
    {
      quote: "Their contributions to our open-source project showed deep understanding of Docker and CI/CD pipelines. Documentation was excellent and code quality was outstanding.",
      author: "Alex Rodriguez",
      role: "Open Source Maintainer",
      icon: "green"
    }
  ];

  return (
    <section id="testimonials" className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Collaborators Say</h2>
          <p className="text-xl text-gray-400">Feedback from clients and open-source contributors</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Need a Developer Who Can Navigate 5 Tech Stacks in a Week?
              </h3>
              <p className="text-gray-200 mb-6">
                Let's discuss how my adaptability and quick learning can benefit your project.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                  Schedule a Call
                </button>
                <button className="px-6 py-3 bg-transparent border border-white rounded-lg hover:bg-white/10 transition-colors">
                  View Resume
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <i className="fas fa-bolt text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium">Rapid Skill Acquisition</h4>
                  <p className="text-gray-200">From concept to production in record time</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <i className="fas fa-code-branch text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium">Cross-Stack Expertise</h4>
                  <p className="text-gray-200">Seamless integration across technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ quote, author, role, icon }) {
  const iconColors = {
    blue: "text-blue-600/20",
    purple: "text-purple-600/20",
    green: "text-green-600/20"
  };

  return (
    <div className="bg-gray-800 rounded-xl p-8 relative">
      <div className="absolute -top-4 left-8">
        <i className={`fas fa-quote-left text-4xl ${iconColors[icon]}`}></i>
      </div>
      <div className="mb-8">
        <p className="text-gray-300 italic">{quote}</p>
      </div>
      <div className="flex items-center gap-4">
        <img 
          src="https://avatar.iran.liara.run/public" 
          alt={`${author} Avatar`} 
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
} 