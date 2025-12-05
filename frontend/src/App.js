import React from 'react';
import './App.css';
import { Toaster } from './components/ui/sonner';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Amenities from './components/Amenities';
import Location from './components/Location';
import FloorPlans from './components/FloorPlans';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" richColors />
      <Header />
      <Hero />
      <Features />
      <Amenities />
      <Location />
      <FloorPlans />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
