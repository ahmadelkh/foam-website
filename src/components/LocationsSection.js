import React from "react";
import { useTranslation } from "react-i18next"; // Import translation hook
import cityImage from "../images/city1.jpg";

const locations = [
  {
    city: "Lubumbashi",
    address: "Alilac",
    image: cityImage,
    phone: "+243 900 091 000",
    email: "LUB@foamlux.com",
  },
  {
    city: "Kolwezi",
    address: "KLW, Kolwezi",
    image: cityImage,
    phone: "+243 900 091 000",
    email: "abc@gmail.com",
  },
  {
    city: "Likasi",
    address: "LKS, Likasi",
    image: cityImage,
    phone: "+243 900 091 000",
    email: "zaz@gmail.com",
  },
];

const LocationsSection = () => {
  const { t } = useTranslation(); // Initialize translation function

  return (
    <section id="locations-section" className="locations-section">
      <h2 className="section-title">{t("ourBranches")}</h2>
      <div className="locations-container">
        {locations.map((loc, index) => (
          <div className="location-card" key={index}>
            <img src={loc.image} alt={loc.city} className="location-image" />
            <div className="location-content">
              <h3 className="location-city">{loc.city}</h3>
              <p className="location-address">{loc.address}</p>
              <div className="location-buttons">
                <button
                  className="call-button"
                  onClick={() => window.open(`tel:${loc.phone}`)}
                >
                  📞 
                </button>
                <button
                  className="email-button"
                  onClick={() => window.open(`mailto:${loc.email}`)}
                >
                  ✉️ 
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationsSection;
