import React from 'react';

export function CTASection() {
  return (
    <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Need a Developer Who Can Navigate 5 Tech Stacks in a Week?
          </h3>
          <p className="text-gray-200 mb-6">
            Let's discuss how my adaptability and quick learning can benefit your project.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Schedule a Call
            </button>
            <button className="px-6 py-3 bg-transparent border border-white rounded-lg hover:bg-white/10 transition-colors">
              View Resume
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <i className="fas fa-bolt text-xl"></i>
            </div>
            <div>
              <h4 className="font-medium">Rapid Skill Acquisition</h4>
              <p className="text-gray-200">From concept to production in record time</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <i className="fas fa-code-branch text-xl"></i>
            </div>
            <div>
              <h4 className="font-medium">Cross-Stack Expertise</h4>
              <p className="text-gray-200">Seamless integration across technologies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 