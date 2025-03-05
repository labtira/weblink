import React from 'react';
import HeroSection from '../components/HeroSection';
import Courses from '../components/Courses';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Pricing from '../components/Pricing';
import Grid from '../components/Grid';
import ProjectSection from '../components/ProjectSection';
const Home = () => {
  return (
    <div className='bg-black'>
      <Navbar />
      <HeroSection />
      <About />
      <Grid/>
      <ProjectSection/>
      <Pricing/>
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
