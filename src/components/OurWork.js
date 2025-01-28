import React from "react";
import { useTranslation } from "react-i18next"; // Import translation hook
import { FaBed, FaCouch, FaBuilding, FaTruck, FaRecycle, FaWarehouse } from "react-icons/fa"; // Icons
import "../index.css"; // Ensure correct styling

const FoamIndustriesComponent = () => {
  const { t } = useTranslation(); // Translation hook

  return (
    <section className="industries-section">
      <div className="industries-container">
        {/* Left Section - Translated Text */}
        <div className="industries-text">
          <p className="industries-subtitle">{t("industries_subtitle")}</p>
          <h2 className="industries-title">{t("industries_title")}</h2>
          <p className="industries-description">{t("industries_description")}</p>
        </div>

        {/* Right Section - Translated Labels */}
        <div className="industries-boxes">
          <div className="industries-box" style={{ backgroundColor: "#b2f0f0" }}>
            <FaBed className="industries-icon" />
            <p className="industries-label">{t("mattress")}</p>
          </div>
          <div className="industries-box" style={{ backgroundColor: "#fde293" }}>
            <FaCouch className="industries-icon" />
            <p className="industries-label">{t("furniture")}</p>
          </div>
          <div className="industries-box" style={{ backgroundColor: "#b9ffde" }}>
            <FaBuilding className="industries-icon" />
            <p className="industries-label">{t("construction")}</p>
          </div>
          <div className="industries-box" style={{ backgroundColor: "#fccb93" }}>
            <FaTruck className="industries-icon" />
            <p className="industries-label">{t("logistics")}</p>
          </div>
          <div className="industries-box" style={{ backgroundColor: "#eff59c" }}>
            <FaRecycle className="industries-icon" />
            <p className="industries-label">{t("eco_friendly")}</p>
          </div>
          <div className="industries-box" style={{ backgroundColor: "#ffc8e1" }}>
            <FaWarehouse className="industries-icon" />
            <p className="industries-label">{t("warehouse")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoamIndustriesComponent;
