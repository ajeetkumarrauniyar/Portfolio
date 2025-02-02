import { Link } from "react-router-dom";

const FeaturedProject = ({ title, description, code, tags, isReversed }) => {
  return (
    <div className={`flex flex-col lg:flex-row${isReversed ? '-reverse' : ''} items-center gap-12 animate__animated ${isReversed ? 'animate__fadeInRight' : 'animate__fadeInLeft'}`}>
      <div className="w-full lg:w-1/2">
        <div className="bg-neutral-800 p-8 rounded-xl">
          <pre className="text-yellow-400 font-mono text-sm overflow-x-auto">
            <code>{code}</code>
          </pre>
        </div>
      </div>
      <div className="w-full lg:w-1/2 space-y-6">
        <h3 className="text-2xl font-bold text-yellow-400">{title}</h3>
        <p className="text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-4 py-2 bg-neutral-800 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <Link href="#" className="px-6 py-3 bg-yellow-400 text-neutral-900 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-300">
            Live Demo
          </Link>
          <Link href="#" className="px-6 py-3 border-2 border-yellow-400 text-yellow-400 rounded-full font-semibold hover:bg-yellow-400 hover:text-neutral-900 transition-colors duration-300">
            View Code
          </Link>
        </div>
      </div>
    </div>
  );
};

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      title: "Weather Dashboard",
      description: "A comprehensive weather application showcasing API integration, async/await implementation, and dynamic UI updates with error handling.",
      code: `// Weather API Integration
async function getWeatherData() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        updateUI(data);
    } catch (error) {
        handleError(error);
    }
}`,
      tags: ["API Integration", "Async/Await", "Error Handling"]
    },
    {
      title: "Dynamic Form Validator",
      description: "Advanced form validation system with real-time feedback, custom validation rules, and DOM manipulation for immediate user feedback.",
      code: `// Real-time Form Validation
class FormValidator {
    validateInput(input) {
        const rules = this.rules[input.name];
        return rules.every(rule => 
            rule.test(input.value)
        );
    }
    
    showFeedback(input, isValid) {
        // Dynamic UI updates
    }
}`,
      tags: ["DOM Manipulation", "Event Handling", "OOP Concepts"]
    }
  ];

  return (
    <section id="featuredProjects" className="py-20 bg-neutral-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 animate__animated animate__fadeIn">
          Featured Projects
        </h2>
        
        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={index}
              {...project}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects; 