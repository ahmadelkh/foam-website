import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Import the i18n configuration
import HeroSection from "./components/HeroSection";
import CountersSection from "./components/CountersSection";
import LocationsSection from "./components/LocationsSection";
import Footer from "./components/Footer";
import AboutUsSection from "./components/AboutUsSection";
import FlipBox from "./components/ServiceBoxes";
import OurWork from "./components/OurWork";
import OurCatalogue from "./components/OurCatalogue";
import AddProduct from "./components/AddProduct"; 
const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <div>
        <HeroSection />
        <FlipBox />
        <AboutUsSection />
        <CountersSection />
        <OurWork />
        <OurCatalogue />
        
        <LocationsSection />
        <Footer />
      </div>
    </I18nextProvider>
  );
};

export default App;
