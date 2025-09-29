import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Mission from './components/Mission';
import Services from './components/Services';
import BusinessSegments from './components/BusinessSegments';
import SolarShowcase from './components/SolarShowcase';
import RevenueSources from './components/RevenueSources';
import WhyChooseUs from './components/WhyChooseUs';
import TargetMarkets from './components/TargetMarkets';
import Testimonials from './components/Testimonials';
import KeyPartnerships from './components/KeyPartnerships';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Mission />
        <Services />
        <BusinessSegments />
        <RevenueSources />
        <SolarShowcase />
        <WhyChooseUs />
        <TargetMarkets />
        <Testimonials />
        <KeyPartnerships />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

