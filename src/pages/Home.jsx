import React from 'react';
import Layout from '../layout/Layout';
import HeroSection from '../components/HomePageSections/HeroSection';
import Hero from '../components/HomePageSections/Hero';
import { FeaturedProjects } from '../components/HomePageSections/FeaturedProjects';
import { TechStack } from '../components/HomePageSections/TechStack';
import { VanillaChallenge } from '../components/HomePageSections/VanillaChallenge';
import { MiniProjects } from '../components/HomePageSections/MiniProjects';
import { Blog } from '../components/HomePageSections/Blog';
import { Contact } from '../components/HomePageSections/Contact';
import ProjectCategories from '../components/HomePageSections/ProjectCategories';
import { Testimonials } from '../components/HomePageSections/Testimonials';

const Home = () => {
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

export default Home;
