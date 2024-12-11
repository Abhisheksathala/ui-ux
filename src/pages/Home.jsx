import React from 'react';
import Hero from '../components/Hero';
import Worksection from '../components/worksection';
import ColabSection from '../components/ColabSection';
import ReviewSection from '../components/ReviewSection';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <ReviewSection />
      <ColabSection />
      <Worksection />
      <Footer />
    </div>
  );
};

export default Home;
