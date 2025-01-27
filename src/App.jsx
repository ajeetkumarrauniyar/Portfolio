import React from 'react'
import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import { FeaturedProjects } from "./components/sections/FeaturedProjects";
import { TechStack } from "./components/sections/TechStack";
import { VanillaChallenge } from "./components/sections/VanillaChallenge";
import { MiniProjects } from "./components/sections/MiniProjects";
import { Blog } from "./components/sections/Blog";
import { Contact } from "./components/sections/Contact";

const App = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProjects />
      <TechStack />
      <VanillaChallenge />
      <MiniProjects />
      <Blog />
      <Contact />
    </Layout>
  )
}

export default App
