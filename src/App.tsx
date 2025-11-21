import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ImpactStats from './components/sections/ImpactStats';
import LegacyWall from './components/sections/LegacyWall';
import StrategicPillars from './components/sections/StrategicPillars';
import About from './components/sections/About';
import UbuntuBridge from './components/sections/UbuntuBridge';
import ImpactTransparency from './components/sections/ImpactTransparency';
import DonationFlow from './components/features/DonationFlow';
import Volunteer from './components/sections/Volunteer';
import Leadership from './components/sections/Leadership';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ImpactStats />
        <LegacyWall />
        <StrategicPillars />
        <About />
        <UbuntuBridge />
        <ImpactTransparency />
        <DonationFlow />
        <Volunteer />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
