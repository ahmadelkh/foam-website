import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // For language support
import { ReactTyped as Typed } from "react-typed";
import { Link as ScrollLink } from "react-scroll";
import personImage from "../images/person.png";
import androidIcon from "../images/android.png";
import documentIcon from "../images/document.png";

const HeroSection = () => {
  const { t, i18n } = useTranslation(); // Translation hook
  const [isSliding, setIsSliding] = useState(false);

  const handleSlideDown = () => {
    setIsSliding(true);

    setTimeout(() => {
      setIsSliding(false); // Reset the animation state
    }, 500); // Match the CSS animation duration
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      {/* Header */}
      <header>
        <div className="logo">FOMALUX</div>
        <nav className="nav-links">
          <ScrollLink to="hero-section" smooth={true} duration={500}>
            <a href="home">{t("home")}</a>
          </ScrollLink>
          <ScrollLink to="service-boxes-section" smooth={true} duration={500}>
            <a href="#catalogue">{t("catalogue")}</a>
          </ScrollLink>
          <ScrollLink to="locations-section" smooth={true} duration={500}>
            <a href="contact us">{t("contactUs")}</a>
          </ScrollLink>
          <a href="#foamzi-ai">{t("foamziAI")}</a>
        </nav>
        {/* Language Toggle Button */}
        <button onClick={toggleLanguage} className="lang-toggle">
          {i18n.language === "en" ? "FR" : "EN"}
        </button>
        <div className="menu-icon">&#9776;</div>
      </header>

      {/* Hero Section */}
      <div id="hero-section" className="hero">
        <div className="hero-content">
          <h1>
            {t("welcome")} <br />
            <Typed
              strings={[t("tagline"), t("subtitle")]}
              typeSpeed={50}
              backSpeed={30}
              showCursor={false}
            />
          </h1>
          <p className="subsubtitle-text">{t("subsubtitle")}</p>

          <ScrollLink to="service-boxes-section" smooth={true} duration={700}>
            <button
              className={`cta-button ${isSliding ? "slide-down" : ""}`}
              onClick={handleSlideDown}
            >
              {t("explore")}
            </button>
          </ScrollLink>
        </div>

        <div className="hero-left">
          <img src={personImage} alt="Person" className="hero-person" />
          <img
            src={androidIcon}
            alt="Android Icon"
            className="floating-icon floating-icon-1"
          />
          <img
            src={documentIcon}
            alt="Document Icon"
            className="floating-icon floating-icon-2"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
