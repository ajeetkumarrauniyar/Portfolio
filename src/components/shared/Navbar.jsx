import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();

  // Combined navigation items with global and page-specific sections
  const navigationItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    {
      name: 'Projects',
      to: '#projects',
      subItems: [
        { name: 'JavaScript Minors', to: '/js-projects' },
        { name: 'React Minors', to: '#react' },
      ],
      pageSpecific: {
        '/': '#projects',
        '/js-projects': '#projects',
      },
    },
    {
      name: 'Featured Projects',
      to: '#featuredProjects',
      pageSpecific: {
        '/': '#featuredProjects',
        '/js-projects': '#featuredProjects',
      },
    },
    {
      name: 'Technical Skills',
      to: '#technicalSkills',
      pageSpecific: {
        '/': '#tech-stack',
        '/js-projects': '#technicalSkills',
      },
    },
    {
      name: 'Categories',
      to: '#projectCategories',
      pageSpecific: {
        '/': '#categories',
        '/js-projects': '#projectCategories',
      },
    },
    { name: 'Blog', to: '#blog' },
    { name: 'Contact', to: '#contact' },
  ];

  const handleNavigation = (item) => {
    // Handle page-specific section jumps
    if (item.pageSpecific && item.pageSpecific[location.pathname]) {
      const element = document.querySelector(
        item.pageSpecific[location.pathname]
      );
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
    setActiveSubmenu(null);
  };

  const handleSubmenuClick = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white/80 shadow-sm backdrop-blur-sm dark:bg-gray-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-xl font-bold text-gray-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
            >
              Portfolio
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center md:flex">
            {navigationItems.map((item, index) => (
              <div key={item.name} className="group relative">
                {item.subItems ? (
                  <button
                    onClick={() => handleSubmenuClick(index)}
                    className="flex items-center px-4 py-2 text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  >
                    {item.name}
                    <svg
                      className={`ml-2 h-4 w-4 transition-transform ${
                        activeSubmenu === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : item.to.startsWith('#') ? (
                  <button
                    onClick={() => handleNavigation(item)}
                    className="px-4 py-2 text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    to={item.to}
                    className="px-4 py-2 text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                    onClick={() => handleNavigation(item)}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Desktop Submenu */}
                {item.subItems && (
                  <div
                    className={`absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all dark:bg-gray-800 ${
                      activeSubmenu === index
                        ? 'visible scale-100 opacity-100'
                        : 'invisible scale-95 opacity-0'
                    }`}
                  >
                    <div className="py-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.to}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                          onClick={() => handleNavigation(subItem)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-800"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute w-full bg-white/95 shadow-lg backdrop-blur-sm md:hidden dark:bg-gray-900/95">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigationItems.map((item, index) => (
              <div key={item.name}>
                {item.subItems ? (
                  <button
                    onClick={() => handleSubmenuClick(index)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-gray-600 transition-colors hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
                  >
                    {item.name}
                    <svg
                      className={`ml-2 h-4 w-4 transition-transform ${
                        activeSubmenu === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : item.to.startsWith('#') ? (
                  <button
                    onClick={() => handleNavigation(item)}
                    className="block w-full rounded-md px-3 py-2 text-left text-gray-600 transition-colors hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    to={item.to}
                    className="block rounded-md px-3 py-2 text-gray-600 transition-colors hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
                    onClick={() => handleNavigation(item)}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Mobile Submenu */}
                {item.subItems && activeSubmenu === index && (
                  <div className="ml-4 space-y-1">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.to}
                        className="block rounded-md px-3 py-2 text-sm text-gray-500 transition-colors hover:bg-gray-50 hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-blue-400"
                        onClick={() => handleNavigation(subItem)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
