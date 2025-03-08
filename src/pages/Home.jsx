import React from 'react';
import Hero from '../components/sections/Hero';
import Clients from '../components/sections/Clients';
import About from '../components/sections/About';
import WhyUs from '../components/sections/WhyUs';
import Skills from '../components/sections/Skills';
import Services from '../components/sections/Services';
import WorkProcess from '../components/sections/WorkProcess';
import CallToAction from '../components/sections/CallToAction';
import Portfolio from '../components/sections/Portfolio';
import Team from '../components/sections/Team';
import Pricing from '../components/sections/Pricing';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import Subscribe from '../components/sections/Subscribe';
import RecentBlogPosts from '../components/sections/RecentBlogPosts';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <Clients />
      <About />
      <WhyUs />
      <Skills />
      <Services />
      <WorkProcess />
      <CallToAction />
      <Portfolio />
      <Team />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Subscribe />
      <RecentBlogPosts />
      <Contact />
    </main>
  );
};

export default Home; 