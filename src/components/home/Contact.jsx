import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

const API_URL = process.env.SERVER_URL || 'http://localhost:5000';

export function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 px-4 py-20 text-white"
    >
      <Toaster position="bottom-right" />
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
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);

    // Show loading toast
    const loadingToast = toast.loading('Sending your message...', {
      id: 'loadingToast',
      icon: '📤',
    });

    try {
      // Basic client-side validation
      if (
        !formData.name ||
        !formData.email ||
        !formData.projectType ||
        !formData.message
      ) {
        toast.error('Please fill in all fields');
        setIsLoading(false);
        return;
      }

      if (formData.message.length < 10) {
        toast.error('Message must be at least 10 characters long');
        setIsLoading(false);
        return;
      }

      const response = await fetch(`${API_URL}/api/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      // console.log('📨 Server response:', data);

      // Dismiss loading toast
      toast.dismiss('submitToast');

      if (data.success) {
        toast.success(
          <div className="flex flex-col gap-1">
            <span className="font-medium">Message sent successfully!</span>
            <span className="text-sm text-gray-600">
              Thank you for reaching out! I'll get back to you soon.
            </span>
          </div>,
          {
            id: loadingToast,
            duration: 5000,
            icon: '✉️',
          }
        );

        // Reset form
        setFormData({
          name: '',
          email: '',
          projectType: '',
          message: '',
        });
      } else {
        if (response.status === 429) {
          toast.error(
            <div className="flex flex-col gap-1">
              <span className="font-medium">Too many requests</span>
              <span className="text-sm text-gray-600">
                Please try again in a minute
              </span>
            </div>,
            {
              id: loadingToast,
              duration: 4000,
              icon: '⚠️',
            }
          );
        } else if (response.status === 403) {
          toast.error(
            <div className="flex flex-col gap-1">
              <span className="font-medium">Request blocked</span>
              <span className="text-sm text-gray-600">
                For security reasons
              </span>
            </div>,
            {
              id: loadingToast,
              duration: 4000,
              icon: '🛡️',
            }
          );
        } else {
          toast.error(
            <div className="flex flex-col gap-1">
              <span className="font-medium">Failed to send message</span>
              <span className="text-sm text-gray-600">
                {data.error || 'Please try again'}
              </span>
            </div>,
            {
              id: loadingToast,
              duration: 4000,
              icon: '❌',
            }
          );
        }
      }
    } catch (error) {
      console.error('❌ Form submission error:', error);
      toast.error(
        <div className="flex flex-col gap-1">
          <span className="font-medium">Network error</span>
          <span className="text-sm text-gray-600">
            Please check your connection and try again
          </span>
        </div>,
        {
          id: loadingToast,
          duration: 4000,
          icon: '🌐',
        }
      );
    } finally {
      setIsLoading(false);
    }
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
          required
        />
        <FormField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
        />
        <div>
          <label className="mb-2 block text-sm font-medium">Project Type</label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 focus:border-blue-500 focus:outline-none"
          >
            <option value="">Select a project type</option>
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
          required
          minLength={10}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium transition-colors hover:bg-blue-700 disabled:opacity-50"
      >
        {isLoading ? (
          <>
            <svg
              className="h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span>Sending...</span>
          </>
        ) : (
          <>
            <span>Let's Discuss Your Project</span>
            <i className="fas fa-arrow-right"></i>
          </>
        )}
      </button>
    </form>
  );
}

function FormField({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
  minLength,
}) {
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
          required={required}
          minLength={minLength}
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
        required={required}
      />
    </div>
  );
}
