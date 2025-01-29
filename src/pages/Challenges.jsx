import React from 'react';
import Layout from '../layout/Layout';
import Hero from '../components/Challenges/Hero';
import { VanillaChallenge } from '../components/Challenges/VanillaChallenge';

const Challenges = () => {
  return (
    <Layout>
      <Hero />;
      <VanillaChallenge />
    </Layout>
  );
};

export default Challenges;
