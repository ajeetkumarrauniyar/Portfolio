import React from 'react';
import HeroSection from '../components/home/HeroSection';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { TechStack } from '../components/home/TechStackProficiency';
import { MiniProjects } from '../components/home/MiniProjects';
import { Blog } from '../components/home/Blog';
import { Contact } from '../components/home/Contact';
import ProjectCategories from '../components/home/ProjectCategories';
import { Testimonials } from '../components/home/Testimonials';

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProjectCategories />
      <FeaturedProjects />
      <TechStack />
      <MiniProjects />
      <Blog />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
