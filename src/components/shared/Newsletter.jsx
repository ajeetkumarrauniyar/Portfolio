import React from 'react';

const Newsletter = () => {
  return (
    <div className="mt-16 rounded-xl bg-gray-800 p-8">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-2xl font-bold text-white">
            Weekly Tech Newsletter
          </h3>
          <p className="mb-6 text-gray-400">
            Get insights about full-stack development, architecture decisions,
            and performance optimization straight to your inbox.
          </p>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
            />
            <button className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex gap-4">
            <i className="fas fa-check-circle mt-1 text-xl text-green-400"></i>
            <div>
              <h4 className="mb-1 font-medium text-white">Weekly Deep Dives</h4>
              <p className="text-gray-400">
                Technical analysis of complex engineering problems
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <i className="fas fa-check-circle mt-1 text-xl text-green-400"></i>
            <div>
              <h4 className="mb-1 font-medium text-white">Code Snippets</h4>
              <p className="text-gray-400">
                Practical solutions to common challenges
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <i className="fas fa-check-circle mt-1 text-xl text-green-400"></i>
            <div>
              <h4 className="mb-1 font-medium text-white">
                Architecture Insights
              </h4>
              <p className="text-gray-400">
                Behind-the-scenes of technical decisions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;


