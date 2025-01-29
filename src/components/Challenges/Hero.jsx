import React from 'react'
const Hero =() => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-primary-900">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/50" />
      
      <div className="relative container mx-auto px-4 py-24 sm:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-900/20 border border-primary-800/30 backdrop-blur-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
                  </span>
                  <span className="text-sm text-primary-200 font-medium">Available for new projects</span>
                </div>
                
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-primary-200 to-secondary-200 text-transparent bg-clip-text animate-gradient">
                  From Vanilla JS to Real-Time Apps: A Journey of 30-Day Challenges
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed">
                  Built 50+ projects across 10+ tech stacks in 12 months, driven by a passion for clean, 
                  functional code and continuous learning.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a href="#featured-projects" 
                     className="group inline-flex items-center px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-medium transition-all duration-300 shadow-lg shadow-primary-900/30 hover:shadow-primary-900/50">
                    View Projects
                    <svg xmlns="http://www.w3.org/2000/svg" 
                         className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" 
                         viewBox="0 0 24 24" 
                         fill="none" 
                         stroke="currentColor" 
                         strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                  <a href="#contact" 
                     className="inline-flex items-center px-6 py-3 rounded-xl border-2 border-white/10 hover:border-white/20 hover:bg-white/10 text-white font-medium transition-all duration-300">
                    Contact Me
                  </a>
                </div>
              </div>

              <div className="relative flex-shrink-0 w-48 h-48 md:w-64 md:h-64">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 blur-2xl opacity-20 animate-pulse" />
                <div className="relative rounded-full overflow-hidden border-4 border-white/10 backdrop-blur-sm">
                  <img
                    src="https://avatar.iran.liara.run/public/256"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <Stats />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "50+", label: "Projects Built" },
    { value: "15+", label: "Technologies" },
    { value: "30", label: "Day Challenges" },
    { value: "12", label: "Months Journey" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
      {stats.map(({ value, label }) => (
        <div key={label} className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text">
            {value}
          </div>
          <div className="text-gray-400 font-medium mt-1">{label}</div>
        </div>
      ))}
    </div>
  );
}

export default Hero