import { Link, useLocation } from 'react-router-dom';
import { SocialLinks } from '../components/shared/SocialLinks';

const ComingSoon = () => {
  const location = useLocation();
  const path = location.pathname.slice(1); // Remove the leading slash
  const formattedPath = path
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 dark:bg-gray-900">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="text-6xl font-bold text-blue-500 mb-4">
            Coming Soon
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
            {formattedPath}
          </h1>
        </div>
        
        <div className="mb-12">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We're working hard to bring you something amazing. 
            Stay tuned for updates!
          </p>
          
          {/* Email Notification Form */}
          <div className="max-w-md mx-auto">
            <form 
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // Add notification signup logic here
              }}
            >
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email for updates"
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  Notify Me
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-300 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Return to Homepage
          </Link>
          
          <div className="mt-8 flex justify-center">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon; 