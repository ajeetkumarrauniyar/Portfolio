import { Link } from 'react-router-dom';

export const Footer = () => {
  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '#services', label: 'Services' },
    { to: '#blog', label: 'Blog' },
    { to: '#contact', label: 'Contact' },
  ];

  const resources = [
    { href: 'https://github.com/yourusername', label: 'GitHub Repository' },
    { href: 'https://docs.example.com', label: 'Documentation' },
    { href: '#api', label: 'API References' },
    { href: '#support', label: 'Support' },
  ];

  const socialIcons = [
    {
      href: 'https://github.com/yourusername',
      icon: (
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      ),
      label: 'GitHub',
    },
    {
      href: 'https://twitter.com/yourusername',
      icon: (
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      ),
      label: 'Twitter',
    },
    {
      href: 'https://linkedin.com/in/yourusername',
      icon: (
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      ),
      label: 'LinkedIn',
    },
  ];

  return (
    <footer className="mt-auto bg-neutral-900 pb-8 pt-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-bold text-blue-400 transition-colors duration-300 hover:text-blue-300">
                Portfolio
              </h3>
            </Link>
            <p className="text-gray-400">
              Exploring the boundaries of web development with modern
              technologies and creative solutions.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors duration-300 hover:text-blue-400"
                  aria-label={social.label}
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="block text-gray-400 transition-colors duration-300 hover:text-blue-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 transition-colors duration-300 hover:text-blue-400"
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Stay Updated</h4>
            <p className="text-gray-400">
              Subscribe for the latest updates and resources
            </p>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // Add newsletter subscription logic here
              }}
            >
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-neutral-800 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Ajeet Kumar's Portfolio. Built with
              passion and countless cups of coffee. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-6 md:mt-0">
              <Link
                to="/privacy"
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-blue-400"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-blue-400"
              >
                Terms of Service
              </Link>
              <Link
                to="/contact"
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-blue-400"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
