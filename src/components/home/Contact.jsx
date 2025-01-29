import { useState } from 'react';

export function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 px-4 py-20 text-white"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-xl text-gray-400">
                Need a developer who can navigate multiple tech stacks and
                deliver robust solutions?
              </p>
            </div>

            <div className="space-y-6">
              <FeatureItem
                icon="rocket"
                color="blue"
                title="Rapid Development"
                description="From concept to production in record time"
              />
              <FeatureItem
                icon="code-branch"
                color="purple"
                title="Full-Stack Solutions"
                description="End-to-end implementation across stacks"
              />
              <FeatureItem
                icon="gauge-high"
                color="green"
                title="Performance Focused"
                description="Optimized for speed and scalability"
              />
            </div>
          </div>

          <div className="rounded-xl bg-gray-800 p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, color, title, description }) {
  const bgColors = {
    blue: 'bg-blue-600/20',
    purple: 'bg-purple-600/20',
    green: 'bg-green-600/20',
  };

  const textColors = {
    blue: 'text-blue-400',
    purple: 'text-purple-400',
    green: 'text-green-400',
  };

  return (
    <div className="flex items-center gap-4">
      <div
        className={`h-12 w-12 ${bgColors[color]} flex items-center justify-center rounded-xl`}
      >
        <i className={`fas fa-${icon} ${textColors[color]} text-xl`}></i>
      </div>
      <div>
        <h3 className="mb-1 font-bold">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <FormField
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
        />
        <FormField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
        />
        <div>
          <label className="mb-2 block text-sm font-medium">Project Type</label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 focus:border-blue-500 focus:outline-none"
          >
            <option value="" disabled>
              Select a project type
            </option>
            <option>Full-Stack Application</option>
            <option>Frontend Development</option>
            <option>Backend Architecture</option>
            <option>DevOps Implementation</option>
            <option>Database Optimization</option>
          </select>
        </div>
        <FormField
          label="Message"
          type="textarea"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
        />
      </div>

      <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium transition-colors hover:bg-blue-700">
        <span>Let's Discuss Your Project</span>
        <i className="fas fa-arrow-right"></i>
      </button>
    </form>
  );
}

function FormField({ label, type, name, value, onChange, placeholder }) {
  if (type === 'textarea') {
    return (
      <div>
        <label className="mb-2 block text-sm font-medium">{label}</label>
        <textarea
          rows="4"
          name={name}
          value={value}
          onChange={onChange}
          className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 focus:border-blue-500 focus:outline-none"
          placeholder={placeholder}
        ></textarea>
      </div>
    );
  }

  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 focus:border-blue-500 focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
}
