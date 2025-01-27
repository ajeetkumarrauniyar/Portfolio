import React from 'react'

const Hero = () => {
  return (
    <section id="HeroSection" className="min-h-screen flex items-center justify-center bg-gray-900 text-white py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              From Vanilla JS to Cloud Databases: 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Building Full-Stack Solutions Across Stacks
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300">
              Self-taught developer with a passion for rapid skill acquisition and hands-on implementation. Transforming complex problems into elegant solutions across multiple tech stacks.
            </p>
            
            <div className="flex gap-4">
              <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
                View Projects
              </a>
              <a href="#contact" className="px-8 py-3 border border-white/20 hover:border-white/40 rounded-lg font-medium transition-colors">
                Let's Connect
              </a>
            </div>
          </div>

          <TechGrid />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>
    </section>
  )
}

const TechGrid = () => {
  const techItems = [
    { icon: 'fa-react', text: 'React & Next.js', color: 'blue' },
    { icon: 'fa-node', text: 'Node.js', color: 'green' },
    { icon: 'fa-database', text: 'PostgreSQL', color: 'purple' },
    { icon: 'fa-php', text: 'PHP', color: 'indigo' },
    { icon: 'fa-wordpress', text: 'WordPress', color: 'blue' },
    { icon: 'fa-docker', text: 'Docker', color: 'blue' }
  ]

  return (
    <div className="relative">
      <div className="grid grid-cols-3 gap-4 animate-float">
        {techItems.map((item, index) => (
          <div key={index} className="tech-card group">
            <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <i className={`text-3xl mb-2 fas ${item.icon} text-${item.color}-400`}></i>
              <p className="text-sm">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero
