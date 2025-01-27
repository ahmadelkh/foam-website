import React from "react";
import "../index.css";
import { FaBed, FaCouch, FaCloud } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Import translation hook

const ServiceBoxes = () => {
  const { t } = useTranslation(); // Initialize translation function

  return (
    <div id="service-boxes-section" className="service-section"> {/* Added id */}
      <h3 className="service-title">{t("popularProducts")}</h3>
      <h2 className="service-subtitle">{t("exploreFoamSolutions")}</h2>

      <div className="service-box-container">
        <div className="service-box">
          <div className="icon-container">
            <FaBed className="service-icon" />
          </div>
          <h3>{t("luxuryFoamMattresses")}</h3>
          <p className="short-description">{t("comfortDurabilitySupport")}</p>
          <p className="detailed-text">{t("mattressesDescription")}</p>
        </div>

        <div className="service-box">
          <div className="icon-container">
            <FaCouch className="service-icon" />
          </div>
          <h3>{t("foamForSofas")}</h3>
          <p className="short-description">{t("customSizesSoftnessQuality")}</p>
          <p className="detailed-text">{t("sofasDescription")}</p>
        </div>

        <div className="service-box">
          <div className="icon-container">
            <FaCloud className="service-icon" />
          </div>
          <h3>{t("memoryFoamProducts")}</h3>
          <p className="short-description">{t("adaptabilityPressureRelief")}</p>
          <p className="detailed-text">{t("memoryFoamBenefits")}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceBoxes;
