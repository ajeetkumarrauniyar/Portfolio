import { Link } from 'react-router-dom';
import { TweetCard } from './TweetCard';
import { SocialLinks } from './SocialLinks';

export const Footer = () => {
  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '#services', label: 'Services' },
    { to: 'https://asha-ekumeed.com', label: 'Blog', external: true },
    { to: '#contact', label: 'Contact' },
  ];

  const resources = [
    {
      href: 'https://github.com/ajeetkumarrauniyar',
      label: 'GitHub Repository',
    },
    { href: 'https://docs.example.com', label: 'Documentation' },
    { href: '#api', label: 'API References' },
    { href: '#support', label: 'Support' },
  ];

  return (
    <footer className="mt-auto bg-gradient-to-b from-neutral-900 to-neutral-950 pb-8 pt-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-5 lg:pr-8">
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-bold text-blue-400 transition-colors duration-300 hover:text-blue-300">
                Portfolio
              </h3>
            </Link>
            <p className="leading-relaxed text-gray-400/90">
              Exploring the boundaries of web development with modern
              technologies and creative solutions.
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="border-b border-neutral-800/50 pb-2 text-lg font-bold">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.external ? (
                    <a
                      href={link.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center text-gray-400/90 transition-colors duration-300 hover:text-blue-400"
                    >
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        {link.label}
                      </span>
                    </a>
                  ) : (
                    <Link
                      to={link.to}
                      className="group flex items-center text-gray-400/90 transition-colors duration-300 hover:text-blue-400"
                    >
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        {link.label}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-5">
            <h4 className="border-b border-neutral-800/50 pb-2 text-lg font-bold">
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center text-gray-400/90 transition-colors duration-300 hover:text-blue-400"
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {resource.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Twitter Updates */}
          <div className="space-y-5">
            <TweetCard tweetId="1884277912779764131" />
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-neutral-800/50 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-center text-sm text-gray-500/80 md:text-left">
              © {new Date().getFullYear()} Ajeet Kumar's Portfolio.
              <span className="mt-1 block md:ml-1 md:mt-0 md:inline">
                Crafted with <span className="text-red-400">♥</span> and
                countless cups of coffee.
              </span>
            </p>
            <div className="mt-4 flex space-x-6 md:mt-0">
              <Link
                to="/privacy"
                className="text-sm text-gray-500/80 transition-colors duration-300 hover:text-blue-400"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-gray-500/80 transition-colors duration-300 hover:text-blue-400"
              >
                Terms
              </Link>
              <Link
                to="/contact"
                className="text-sm text-gray-500/80 transition-colors duration-300 hover:text-blue-400"
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
