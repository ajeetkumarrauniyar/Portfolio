import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 dark:bg-gray-900">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-500 animate-bounce">404</h1>
        </div>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Go Back Home
          </Link>
          <p className="text-gray-500 dark:text-gray-400 mt-4">
            If you think this is a mistake, please{' '}
            <Link
              to="/contact"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 