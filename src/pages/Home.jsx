import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Features />
      <CallToAction />
    </div>
  );
};

export default Home; 