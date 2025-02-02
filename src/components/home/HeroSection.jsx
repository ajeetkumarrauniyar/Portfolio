import React from 'react';
import TechStackIcons from './TechStackIcons';

const HeroSection = () => {
  return (
    <section
      id="HeroSection"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-900 px-4 py-20 text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>

      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              From Vanilla JS to Cloud Databases:
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Building Full-Stack Solutions
              </span>
            </h1>

            <p className="text-lg text-gray-300 md:text-xl">
              Self-taught developer with a passion for rapid skill acquisition
              and hands-on implementation. Transforming complex problems into
              elegant solutions across multiple tech stacks.
            </p>

            <div className="flex gap-4">
              <a
                href="#FeaturedProjects"
                className="rounded-lg bg-blue-600 px-8 py-3 font-medium transition-colors hover:bg-blue-700"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-white/20 px-8 py-3 font-medium transition-colors hover:border-white/40"
              >
                Let's Connect
              </a>
            </div>
          </div>

          <div className="relative">
            <TechStackIcons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
