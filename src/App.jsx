import React from 'react';
import Layout from './layout/Layout';
import HeroSection from './components/sections/HeroSection';
import Hero from './components/sections/Hero';
import { FeaturedProjects } from './components/sections/FeaturedProjects';
import { TechStack } from './components/sections/TechStack';
import { VanillaChallenge } from './components/sections/VanillaChallenge';
import { MiniProjects } from './components/sections/MiniProjects';
import { Blog } from './components/sections/Blog';
import { Contact } from './components/sections/Contact';
import ProjectCategories from './components/sections/ProjectCategories';
import { Testimonials } from './components/sections/Testimonials';

const App = () => {
  return (
    <Layout>
      <HeroSection />
      <Hero />
      <ProjectCategories />
      <FeaturedProjects />
      <TechStack />
      <VanillaChallenge />
      <MiniProjects />
      <Blog />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default App;
