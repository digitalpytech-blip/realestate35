import React from 'react';
import './App.css';
import { Toaster } from './components/ui/sonner';
import Header from './components/redesign/Header';
import Hero from './components/redesign/Hero';
import Overview from './components/redesign/Overview';
import Highlights from './components/redesign/Highlights';
import Amenities from './components/redesign/Amenities';
import Pricing from './components/redesign/Pricing';
import FloorPlans from './components/redesign/FloorPlans';
import LocationAdvantage from './components/redesign/LocationAdvantage';
import Gallery from './components/redesign/Gallery';
import AboutDeveloper from './components/redesign/AboutDeveloper';
import GetInTouch from './components/redesign/GetInTouch';
import Footer from './components/redesign/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" richColors />
      <Header />
      <Hero />
      <Overview />
      <Highlights />
      <Amenities />
      <Pricing />
      <FloorPlans />
      <LocationAdvantage />
      <Gallery />
      <AboutDeveloper />
      <GetInTouch />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
