import { CTASection } from '../shared/CTASection';

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

        <CTASection />
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