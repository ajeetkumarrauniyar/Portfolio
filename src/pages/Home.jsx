import React from 'react';
import Layout from '../layout/Layout';
import HeroSection from '../components/HomePageSections/HeroSection';
import { FeaturedProjects } from '../components/HomePageSections/FeaturedProjects';
import { TechStack } from '../components/HomePageSections/TechStack';
import { MiniProjects } from '../components/HomePageSections/MiniProjects';
import { Blog } from '../components/HomePageSections/Blog';
import { Contact } from '../components/HomePageSections/Contact';
import ProjectCategories from '../components/HomePageSections/ProjectCategories';
import { Testimonials } from '../components/HomePageSections/Testimonials';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <ProjectCategories />
      <FeaturedProjects />
      <TechStack />
      <MiniProjects />
      <Blog />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default Home;
